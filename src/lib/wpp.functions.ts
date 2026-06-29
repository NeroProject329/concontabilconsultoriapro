import { createServerFn } from "@tanstack/react-start";

export type AttendantInput = {
  id: string;
  name: string;
  number: string;
  active: boolean;
};

// ---------- público: pega o próximo número (rodízio) ----------
export const getNextWhatsapp = createServerFn({ method: "POST" }).handler(
  async () => {
    const { readConfig, writeConfig } = await import("./wpp.server");
    const cfg = await readConfig();
    const actives = cfg.attendants.filter((a) => a.active);
    if (actives.length === 0) {
      return { number: "", name: "", message: cfg.message };
    }

    const step = Math.max(1, cfg.rotationStep | 0);
    const idx = Math.floor(cfg.cursor / step) % actives.length;
    const chosen = actives[idx];

    const newCounter = cfg.clickCounter + 1;
    const newCursor = (cfg.cursor + 1) % (step * actives.length);
    await writeConfig({ ...cfg, clickCounter: newCounter, cursor: newCursor });

    return { number: chosen.number, name: chosen.name, message: cfg.message };
  },
);

// ---------- admin: login ----------
export const adminLogin = createServerFn({ method: "POST" })
  .inputValidator((d: { email: string; password: string }) => d)
  .handler(async ({ data }) => {
    const { ADMIN_EMAIL, ADMIN_PASSWORD } = await import("./wpp.server");
    const ok =
      data.email.trim().toLowerCase() === ADMIN_EMAIL &&
      data.password === ADMIN_PASSWORD;
    return { ok, token: ok ? "ok" : "" };
  });

// ---------- admin: ler config ----------
export const getConfig = createServerFn({ method: "POST" })
  .inputValidator((d: { token: string }) => d)
  .handler(async ({ data }) => {
    if (data.token !== "ok") throw new Error("Unauthorized");
    const { readConfig } = await import("./wpp.server");
    return await readConfig();
  });

// ---------- admin: salvar config ----------
export const saveConfig = createServerFn({ method: "POST" })
  .inputValidator(
    (d: {
      token: string;
      attendants: AttendantInput[];
      rotationStep: number;
      message: string;
      resetCounter?: boolean;
    }) => d,
  )
  .handler(async ({ data }) => {
    if (data.token !== "ok") throw new Error("Unauthorized");
    const { readConfig, writeConfig } = await import("./wpp.server");
    const cur = await readConfig();
    const next = {
      ...cur,
      attendants: data.attendants.map((a) => ({
        id: a.id,
        name: a.name.trim().slice(0, 80),
        number: a.number.replace(/\D/g, "").slice(0, 20),
        active: !!a.active,
      })),
      rotationStep: Math.max(1, Math.min(999, data.rotationStep | 0)),
      message: data.message.slice(0, 500),
      clickCounter: data.resetCounter ? 0 : cur.clickCounter,
      cursor: data.resetCounter ? 0 : cur.cursor,
    };
    await writeConfig(next);
    return next;
  });
