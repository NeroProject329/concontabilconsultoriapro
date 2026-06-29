import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useState } from "react";
import {
  adminLogin,
  getConfig,
  saveConfig,
  type AttendantInput,
} from "@/lib/wpp.functions";

export const Route = createFileRoute("/wpp")({
  head: () => ({
    meta: [
      { title: "Painel WhatsApp" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: WppAdmin,
});

type Attendant = AttendantInput;

const TOKEN_KEY = "wpp_admin_token";

function WppAdmin() {
  const [token, setToken] = useState<string>("");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setToken(localStorage.getItem(TOKEN_KEY) || "");
    setReady(true);
  }, []);

  if (!ready) return null;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-5 py-10">
        <header className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Painel WhatsApp</h1>
          {token && (
            <button
              onClick={() => {
                localStorage.removeItem(TOKEN_KEY);
                setToken("");
              }}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Sair
            </button>
          )}
        </header>

        {!token ? (
          <Login
            onLogin={(t) => {
              localStorage.setItem(TOKEN_KEY, t);
              setToken(t);
            }}
          />
        ) : (
          <Panel token={token} onUnauthorized={() => {
            localStorage.removeItem(TOKEN_KEY);
            setToken("");
          }} />
        )}
      </div>
    </div>
  );
}

function Login({ onLogin }: { onLogin: (t: string) => void }) {
  const login = useServerFn(adminLogin);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setLoading(true);
        setErr("");
        try {
          const res = await login({ data: { email, password } });
          if (res.ok) onLogin(res.token);
          else setErr("E-mail ou senha incorretos.");
        } catch {
          setErr("Erro ao entrar.");
        } finally {
          setLoading(false);
        }
      }}
      className="space-y-4 rounded-2xl border border-border bg-surface p-6 shadow-sm"
    >
      <h2 className="text-lg font-semibold">Entrar</h2>
      <div>
        <label className="block text-sm font-medium mb-1">E-mail</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full rounded-lg border border-border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Senha</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full rounded-lg border border-border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      {err && <p className="text-sm text-destructive">{err}</p>}
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-primary text-primary-foreground py-2.5 font-semibold hover:opacity-90 disabled:opacity-50"
      >
        {loading ? "Entrando..." : "Entrar"}
      </button>
    </form>
  );
}

function Panel({ token, onUnauthorized }: { token: string; onUnauthorized: () => void }) {
  const fetchCfg = useServerFn(getConfig);
  const save = useServerFn(saveConfig);

  const [attendants, setAttendants] = useState<Attendant[]>([]);
  const [rotationStep, setRotationStep] = useState(1);
  const [message, setMessage] = useState("");
  const [counter, setCounter] = useState(0);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const cfg = await fetchCfg({ data: { token } });
        setAttendants(cfg.attendants);
        setRotationStep(cfg.rotationStep);
        setMessage(cfg.message);
        setCounter(cfg.clickCounter);
      } catch {
        onUnauthorized();
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const add = () =>
    setAttendants((a) => [
      ...a,
      { id: crypto.randomUUID(), name: "", number: "", active: true },
    ]);
  const update = (id: string, patch: Partial<Attendant>) =>
    setAttendants((a) => a.map((x) => (x.id === id ? { ...x, ...patch } : x)));
  const remove = (id: string) =>
    setAttendants((a) => a.filter((x) => x.id !== id));

  const submit = async (reset = false) => {
    setSaving(true);
    setSaved(false);
    try {
      const res = await save({
        data: { token, attendants, rotationStep, message, resetCounter: reset },
      });
      setCounter(res.clickCounter);
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <p className="text-muted-foreground">Carregando...</p>;

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Atendentes</h2>
          <button
            onClick={add}
            className="rounded-lg bg-primary text-primary-foreground px-3 py-1.5 text-sm font-semibold hover:opacity-90"
          >
            + Adicionar
          </button>
        </div>

        {attendants.length === 0 && (
          <p className="text-sm text-muted-foreground">Nenhum atendente. Clique em adicionar.</p>
        )}

        <ul className="space-y-3">
          {attendants.map((a) => (
            <li key={a.id} className="grid gap-2 sm:grid-cols-[1fr_180px_auto_auto] sm:items-center border border-border rounded-xl p-3">
              <input
                placeholder="Nome do atendente"
                value={a.name}
                onChange={(e) => update(a.id, { name: e.target.value })}
                className="rounded-md border border-border bg-background px-2 py-1.5 text-sm"
              />
              <input
                placeholder="Número com DDI (ex: 5511999999999)"
                value={a.number}
                onChange={(e) => update(a.id, { number: e.target.value })}
                className="rounded-md border border-border bg-background px-2 py-1.5 text-sm"
              />
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={a.active}
                  onChange={(e) => update(a.id, { active: e.target.checked })}
                />
                Ativo
              </label>
              <button
                onClick={() => remove(a.id)}
                className="text-sm text-destructive hover:underline justify-self-start sm:justify-self-end"
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-border bg-surface p-5 sm:p-6 space-y-4">
        <h2 className="text-lg font-semibold">Rodízio</h2>
        <div>
          <label className="block text-sm font-medium mb-1">
            Trocar atendente a cada quantos cliques?
          </label>
          <input
            type="number"
            min={1}
            value={rotationStep}
            onChange={(e) => setRotationStep(parseInt(e.target.value) || 1)}
            className="w-32 rounded-md border border-border bg-background px-2 py-1.5"
          />
          <p className="text-xs text-muted-foreground mt-1">
            Ex: 1 = alterna a cada clique. 5 = 5 cliques no mesmo atendente, depois passa ao próximo.
          </p>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Mensagem padrão</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            className="w-full rounded-md border border-border bg-background px-2 py-1.5 text-sm"
          />
        </div>
        <p className="text-sm text-muted-foreground">
          Cliques totais até agora: <strong>{counter}</strong>
        </p>
      </section>

      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => submit(false)}
          disabled={saving}
          className="rounded-lg bg-primary text-primary-foreground px-5 py-2.5 font-semibold hover:opacity-90 disabled:opacity-50"
        >
          {saving ? "Salvando..." : "Salvar"}
        </button>
        <button
          onClick={() => submit(true)}
          disabled={saving}
          className="rounded-lg border border-border px-5 py-2.5 font-semibold hover:bg-muted"
        >
          Salvar e zerar contador
        </button>
        {saved && <span className="self-center text-sm text-success">Salvo!</span>}
      </div>
    </div>
  );
}
