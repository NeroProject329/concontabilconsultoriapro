import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Zap,
  Users,
  Clock,
  Lock,
  CheckCircle2,
  TrendingDown,
  MessageCircle,
  Phone,
  Search,
  FileText,
  Handshake,
  Trophy,
  Star,
} from "lucide-react";
import heroPerson from "@/assets/hero-person.jpg";
import client1 from "@/assets/client-1.jpg";
import client2 from "@/assets/client-2.jpg";
import client3 from "@/assets/client-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vértice — Limpe seu nome com até 95% de desconto" },
      {
        name: "description",
        content:
          "Renegociação de dívidas 100% online. Consultoria gratuita, descontos de até 95% e seu nome limpo em até 48h. Mais de 8 milhões de brasileiros atendidos.",
      },
      { property: "og:title", content: "Vértice — Limpe seu nome hoje" },
      {
        property: "og:description",
        content: "Renegociação inteligente com descontos de até 95%. Consulta grátis.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Landing,
});

/* ---------- helpers ---------- */
function useReveal() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, shown };
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, shown } = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.8s ease, transform 0.8s cubic-bezier(0.22,1,0.36,1)`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const { ref, shown } = useReveal();
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!shown) return;
    const start = performance.now();
    const dur = 1600;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.floor(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [shown, to]);
  return (
    <span ref={ref}>
      {n.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
}

/* ---------- page ---------- */
function Landing() {
  return (
    <div className="min-h-screen bg-hero text-foreground">
      <Nav />
      <Hero />
      <Stats />
      <Why />
      <Process />
      <Benefits />
      <Testimonials />
      <CTA />
      <Footer />
      <WhatsFab />
    </div>
  );
}

/* ---------- nav ---------- */
function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/60 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display font-bold text-xl">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground">
            V
          </span>
          <span>
            Vértice<span className="text-primary">.</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#why" className="hover:text-foreground transition">Por que nós</a>
          <a href="#process" className="hover:text-foreground transition">Processo</a>
          <a href="#depoimentos" className="hover:text-foreground transition">Depoimentos</a>
          <a href="#contato" className="hover:text-foreground transition">Contato</a>
        </nav>
        <a
          href="#contato"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.03] transition-transform"
        >
          Fale agora <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

/* ---------- hero ---------- */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* decorative blobs */}
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />
      <div className="pointer-events-none absolute -top-32 -left-32 h-[440px] w-[440px] rounded-full bg-accent/30 blur-3xl animate-blob" />
      <div
        className="pointer-events-none absolute -bottom-40 right-0 h-[520px] w-[520px] rounded-full bg-primary/20 blur-3xl animate-blob"
        style={{ animationDelay: "-6s" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-24 md:pt-24 md:pb-32 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Renegociação inteligente · 100% online
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 font-display text-5xl md:text-7xl font-bold leading-[1.02]">
              Limpe seu nome com{" "}
              <span className="shimmer-text">até 95% OFF</span>
              <br />
              <span className="text-muted-foreground text-3xl md:text-5xl">
                — sem sair de casa.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              A Vértice negocia suas dívidas com os maiores credores do Brasil. Consulta gratuita,
              proposta em minutos e o seu CPF liberado em até 48 horas.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contato"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-glow animate-pulse-glow"
              >
                Consultar agora grátis
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </a>
              <a
                href="#process"
                className="inline-flex items-center gap-2 rounded-full glass px-7 py-4 text-base font-semibold hover:bg-white/10 transition"
              >
                Como funciona
              </a>
            </div>
          </Reveal>
          <Reveal delay={420}>
            <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex -space-x-3">
                <img src={client1} className="h-9 w-9 rounded-full border-2 border-background object-cover" alt="" />
                <img src={client2} className="h-9 w-9 rounded-full border-2 border-background object-cover" alt="" />
                <img src={client3} className="h-9 w-9 rounded-full border-2 border-background object-cover" alt="" />
              </div>
              <div>
                <div className="flex items-center gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                  <span className="ml-1 font-semibold text-foreground">4.9/5</span>
                </div>
                <span>+8 milhões de brasileiros já confiaram</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* hero image */}
        <Reveal delay={200} className="relative">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-6 bg-gradient-accent rounded-[3rem] blur-2xl opacity-50" />
            <div className="relative overflow-hidden rounded-[2.5rem] shadow-pop">
              <img
                src={heroPerson}
                alt="Consultora Vértice apresentando aprovação"
                width={1024}
                height={1280}
                className="w-full h-auto"
              />
            </div>

            {/* floating cards */}
            <div className="absolute -left-6 top-12 glass rounded-2xl px-4 py-3 shadow-card animate-float">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-success/20 text-success grid place-items-center">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div className="text-sm">
                  <div className="font-semibold">CPF liberado</div>
                  <div className="text-muted-foreground text-xs">há 2 minutos</div>
                </div>
              </div>
            </div>

            <div
              className="absolute -right-4 bottom-16 glass rounded-2xl px-4 py-3 shadow-card animate-float"
              style={{ animationDelay: "-2s" }}
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-primary/20 text-primary grid place-items-center">
                  <TrendingDown className="h-5 w-5" />
                </div>
                <div className="text-sm">
                  <div className="font-semibold">-92% na dívida</div>
                  <div className="text-muted-foreground text-xs">Banco parceiro</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* logos marquee */}
      <div className="relative border-y border-border bg-surface/40 py-6 overflow-hidden">
        <div className="flex gap-16 whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex gap-16 px-8 text-muted-foreground/60 font-display font-bold text-2xl">
              <span>Serasa</span>
              <span>Itaú</span>
              <span>Bradesco</span>
              <span>Santander</span>
              <span>Caixa</span>
              <span>Nubank</span>
              <span>SPC</span>
              <span>Banco do Brasil</span>
              <span>Renner</span>
              <span>C&amp;A</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- stats ---------- */
function Stats() {
  const items = [
    { v: 8000000, s: "+", label: "Clientes atendidos" },
    { v: 14, s: "+", label: "Anos no mercado" },
    { v: 95, s: "%", label: "Desconto médio máximo" },
    { v: 48, s: "h", label: "Para liberar seu CPF" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((it, i) => (
          <Reveal key={it.label} delay={i * 80}>
            <div className="glass rounded-2xl p-6 text-center hover:shadow-glow transition-shadow">
              <div className="font-display text-4xl md:text-5xl font-bold text-gradient-primary">
                <Counter to={it.v} suffix={it.s} />
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{it.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- why ---------- */
function Why() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Seguro de ponta a ponta",
      text: "Somos auditados e seguimos a LGPD. Seus dados ficam protegidos com criptografia bancária.",
    },
    {
      icon: Zap,
      title: "Proposta em minutos",
      text: "Nossa IA cruza sua dívida com mais de 200 acordos disponíveis e te entrega o melhor.",
    },
    {
      icon: Users,
      title: "Time especialista",
      text: "Consultores certificados acompanham cada caso. Você fala com gente, não com robôs.",
    },
    {
      icon: Lock,
      title: "Sem cobrança antecipada",
      text: "Você só paga quando o acordo é fechado e o desconto é aprovado por você.",
    },
  ];
  return (
    <section id="why" className="mx-auto max-w-7xl px-6 py-24">
      <Reveal>
        <div className="max-w-2xl">
          <span className="text-primary font-semibold tracking-wide text-sm uppercase">
            Por que a Vértice
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            Quatro motivos para começar <span className="text-gradient-primary">agora</span>.
          </h2>
        </div>
      </Reveal>
      <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={i * 100}>
            <div className="group h-full rounded-3xl glass p-7 hover:-translate-y-1 hover:shadow-glow transition-all duration-300">
              <div className="h-12 w-12 rounded-2xl bg-gradient-primary text-primary-foreground grid place-items-center shadow-glow group-hover:rotate-6 transition-transform">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold">{it.title}</h3>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{it.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- process ---------- */
function Process() {
  const steps = [
    { icon: Search, title: "Diagnóstico gratuito", text: "Você nos conta sua situação. Em segundos, mapeamos cada dívida no seu CPF." },
    { icon: FileText, title: "Estratégia sob medida", text: "Montamos o plano com os credores certos e o desconto máximo possível." },
    { icon: Handshake, title: "Negociação ativa", text: "Nossos especialistas falam pelos seus interesses até fechar o melhor acordo." },
    { icon: Trophy, title: "CPF limpo", text: "Acompanhamento total até a baixa nos órgãos de proteção ao crédito." },
  ];
  return (
    <section id="process" className="relative py-24 bg-surface/40 border-y border-border">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-primary font-semibold tracking-wide text-sm uppercase">
              Como funciona
            </span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
              Do "sufoco" ao "respira" em <span className="text-gradient-primary">4 passos</span>.
            </h2>
          </div>
        </Reveal>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 120}>
              <div className="relative rounded-3xl bg-card border border-border p-7 h-full overflow-hidden hover:shadow-pop transition-shadow">
                <div className="absolute -right-2 -top-4 font-display text-[7rem] font-extrabold text-primary/10 leading-none select-none">
                  0{i + 1}
                </div>
                <div className="relative">
                  <div className="h-12 w-12 rounded-2xl bg-accent/20 text-accent grid place-items-center">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{s.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- benefits ---------- */
function Benefits() {
  const items = [
    { icon: Sparkles, t: "Consulta 100% grátis" },
    { icon: TrendingDown, t: "Descontos de até 95%" },
    { icon: Zap, t: "Resposta em minutos" },
    { icon: ShieldCheck, t: "Dados protegidos por LGPD" },
    { icon: Clock, t: "CPF liberado em 48h" },
    { icon: CheckCircle2, t: "Sem burocracia" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <Reveal>
        <h2 className="font-display text-4xl md:text-5xl font-bold max-w-2xl">
          Tudo que você ganha ao falar com a gente.
        </h2>
      </Reveal>
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((b, i) => (
          <Reveal key={b.t} delay={i * 60}>
            <div className="flex items-center gap-4 rounded-2xl glass p-5 hover:bg-white/[0.07] transition">
              <div className="h-11 w-11 rounded-xl bg-gradient-primary text-primary-foreground grid place-items-center">
                <b.icon className="h-5 w-5" />
              </div>
              <span className="font-semibold">{b.t}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- testimonials ---------- */
function Testimonials() {
  const items = [
    {
      img: client1,
      name: "Marina Silva",
      role: "Empresária · SP",
      text: "Eu já tinha tentado de tudo. A Vértice fechou minha dívida com 89% de desconto. Em 36 horas meu nome estava limpo.",
    },
    {
      img: client2,
      name: "Paulo Roberto",
      role: "Analista · RJ",
      text: "Atendimento humano de verdade. Eles explicaram cada etapa e nunca cobraram nada antes de eu aprovar a proposta.",
    },
    {
      img: client3,
      name: "Juliana Costa",
      role: "Autônoma · MG",
      text: "Saí do vermelho e ainda consegui um cartão novo. Recomendo de olhos fechados para qualquer um que precise respirar.",
    },
  ];
  return (
    <section id="depoimentos" className="mx-auto max-w-7xl px-6 py-24">
      <Reveal>
        <div className="max-w-2xl">
          <span className="text-primary font-semibold tracking-wide text-sm uppercase">
            Quem já passou pela Vértice
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            Histórias reais. Resultados reais.
          </h2>
        </div>
      </Reveal>
      <div className="mt-14 grid md:grid-cols-3 gap-6">
        {items.map((t, i) => (
          <Reveal key={t.name} delay={i * 120}>
            <figure className="h-full rounded-3xl glass p-7 flex flex-col hover:shadow-glow transition-shadow">
              <div className="flex items-center gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-foreground/90 leading-relaxed flex-1">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <img src={t.img} loading="lazy" width={48} height={48} className="h-12 w-12 rounded-full object-cover" alt={t.name} />
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- cta ---------- */
function CTA() {
  return (
    <section id="contato" className="px-6 py-24">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] p-10 md:p-16 bg-gradient-accent shadow-pop">
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-primary/30 blur-3xl animate-blob" />
        <div className="absolute -bottom-24 -left-10 h-80 w-80 rounded-full bg-background/30 blur-3xl animate-blob" style={{ animationDelay: "-8s" }} />
        <Reveal>
          <h2 className="relative font-display text-4xl md:text-6xl font-bold max-w-3xl">
            Pronto para fechar essa conta e <span className="shimmer-text">recomeçar</span>?
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="relative mt-5 max-w-2xl text-lg text-foreground/90">
            Em menos de 2 minutos você descobre quanto pode economizar. Sem cadastro complicado, sem
            pegadinhas, sem cobrança antecipada.
          </p>
        </Reveal>
        <Reveal delay={220}>
          <div className="relative mt-10 flex flex-wrap gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-7 py-4 text-base font-semibold hover:scale-[1.03] transition-transform"
            >
              <MessageCircle className="h-5 w-5" /> Falar no WhatsApp
            </a>
            <a
              href="tel:+5508007770000"
              className="inline-flex items-center gap-2 rounded-full glass px-7 py-4 text-base font-semibold hover:bg-white/10 transition"
            >
              <Phone className="h-5 w-5" /> 0800 777 0000
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- footer ---------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-surface/60">
      <div className="mx-auto max-w-7xl px-6 py-12 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-2 font-display font-bold text-xl">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground">
              V
            </span>
            Vértice<span className="text-primary">.</span>
          </div>
          <p className="mt-3 text-muted-foreground max-w-sm">
            Consultoria de renegociação de dívidas. Mais leveza no seu CPF, mais espaço no seu mês.
          </p>
        </div>
        <div>
          <div className="font-semibold mb-3">Navegação</div>
          <ul className="space-y-2 text-muted-foreground">
            <li><a href="#why" className="hover:text-foreground">Por que nós</a></li>
            <li><a href="#process" className="hover:text-foreground">Processo</a></li>
            <li><a href="#depoimentos" className="hover:text-foreground">Depoimentos</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Contato</div>
          <ul className="space-y-2 text-muted-foreground">
            <li>0800 777 0000</li>
            <li>ola@vertice.com.br</li>
            <li>Atendimento seg–sáb, 8h–22h</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Vértice Consultoria Financeira. Todos os direitos reservados.
      </div>
    </footer>
  );
}

/* ---------- whatsapp fab ---------- */
function WhatsFab() {
  return (
    <a
      href="#"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-success text-success-foreground shadow-pop animate-pulse-glow hover:scale-110 transition-transform"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
