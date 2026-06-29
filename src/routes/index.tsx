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
  TrendingUp,
  MessageCircle,
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
      { title: "Consultoria Financeira e Empresarial" },
      {
        name: "description",
        content:
          "Consultoria especializada com descontos de até 98%. Atendimento 100% online, equipe qualificada e resultados rápidos para o seu negócio.",
      },
      { property: "og:title", content: "Consultoria Financeira" },
      {
        property: "og:description",
        content: "Descontos de até 98%. Consultoria 100% online, sem burocracia.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Landing,
});

/* ---------- helpers ---------- */
function useReveal() {
  const ref = useRef<HTMLDivElement | null>(null);
  return { ref, shown: true };
}

function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
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
    <div className="min-h-screen bg-hero text-foreground overflow-x-hidden">
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
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-14 sm:h-16 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
        <a href="#top" className="flex min-w-0 items-center gap-2 font-display font-bold text-lg sm:text-xl">
          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground">
            V
          </span>
          <span className="truncate">
            Consultoria<span className="text-primary">.</span>
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#why" className="hover:text-foreground transition">Diferenciais</a>
          <a href="#process" className="hover:text-foreground transition">Processo</a>
          <a href="#depoimentos" className="hover:text-foreground transition">Depoimentos</a>
          <a href="#contato" className="hover:text-foreground transition">Contato</a>
        </nav>
        <a
          href="#contato"
          className="inline-flex shrink-0 items-center gap-1.5 sm:gap-2 rounded-full bg-gradient-primary px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.03] transition-transform"
        >
          Fale conosco <ArrowRight className="h-4 w-4 hidden sm:block" />
        </a>
      </div>
    </header>
  );
}

/* ---------- hero ---------- */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />
      <div className="pointer-events-none absolute -top-32 -left-32 h-[340px] w-[340px] sm:h-[440px] sm:w-[440px] rounded-full bg-accent/30 blur-3xl animate-blob" />
      <div
        className="pointer-events-none absolute -bottom-40 -right-20 h-[380px] w-[380px] sm:h-[520px] sm:w-[520px] rounded-full bg-primary/20 blur-3xl animate-blob"
        style={{ animationDelay: "-6s" }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 pt-10 pb-16 sm:pt-20 sm:pb-28 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
        <div className="text-center md:text-left">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full glass px-3 sm:px-4 py-1.5 text-[11px] sm:text-xs font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5 shrink-0" /> Consultoria 100% online
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-5 font-display text-[2.5rem] leading-[1.05] sm:text-6xl md:text-7xl font-bold tracking-tight">
              Descontos de até{" "}
              <span className="shimmer-text">98%</span>
              <br className="hidden sm:block" />
              <span className="text-muted-foreground text-2xl sm:text-4xl md:text-5xl block mt-2 sm:mt-3">
                para transformar sua situação.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-5 sm:mt-6 mx-auto md:mx-0 max-w-xl text-base sm:text-lg text-muted-foreground">
              Consultoria especializada com equipe qualificada, processos otimizados e
              estratégias comprovadas. Atendimento personalizado do início ao resultado.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row flex-wrap items-center md:items-start justify-center md:justify-start gap-3">
              <a
                href="#contato"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-glow animate-pulse-glow"
              >
                Consultar agora grátis
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </a>
              <a
                href="#process"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full glass px-7 py-4 text-base font-semibold hover:bg-white/10 transition"
              >
                Como funciona
              </a>
            </div>
          </Reveal>
          <Reveal delay={420}>
            <div className="mt-7 sm:mt-8 flex items-center justify-center md:justify-start gap-4 text-sm text-muted-foreground">
              <div className="flex -space-x-3 shrink-0">
                <img src={client1} className="h-9 w-9 rounded-full border-2 border-background object-cover" alt="" />
                <img src={client2} className="h-9 w-9 rounded-full border-2 border-background object-cover" alt="" />
                <img src={client3} className="h-9 w-9 rounded-full border-2 border-background object-cover" alt="" />
              </div>
              <div className="min-w-0 text-left">
                <div className="flex items-center gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                  <span className="ml-1 font-semibold text-foreground">4.9/5</span>
                </div>
                <span className="text-xs sm:text-sm">+8 mil clientes atendidos</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* hero image */}
        <Reveal delay={200} className="relative order-first md:order-last">
          <div className="relative mx-auto max-w-[18rem] sm:max-w-sm md:max-w-md">
            <div className="absolute -inset-4 sm:-inset-6 bg-gradient-accent rounded-[2.5rem] sm:rounded-[3rem] blur-2xl opacity-50" />
            <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] shadow-pop">
              <img
                src={heroPerson}
                alt="Consultora"
                width={1024}
                height={1280}
                className="w-full h-auto"
              />
            </div>

            <div className="absolute -left-3 sm:-left-6 top-8 sm:top-12 glass rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3 shadow-card animate-float">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="h-9 w-9 sm:h-10 sm:w-10 shrink-0 rounded-xl bg-success/20 text-success grid place-items-center">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div className="text-xs sm:text-sm">
                  <div className="font-semibold">Aprovado</div>
                  <div className="text-muted-foreground text-[10px] sm:text-xs">há 2 minutos</div>
                </div>
              </div>
            </div>

            <div
              className="absolute -right-3 sm:-right-4 bottom-12 sm:bottom-16 glass rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3 shadow-card animate-float"
              style={{ animationDelay: "-2s" }}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="h-9 w-9 sm:h-10 sm:w-10 shrink-0 rounded-xl bg-primary/20 text-primary grid place-items-center">
                  <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div className="text-xs sm:text-sm">
                  <div className="font-semibold">+98% economia</div>
                  <div className="text-muted-foreground text-[10px] sm:text-xs">média do mês</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* logos marquee */}
      <div className="relative border-y border-border bg-surface/40 py-5 sm:py-6 overflow-hidden">
        <div className="flex gap-10 sm:gap-16 whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex gap-10 sm:gap-16 px-6 sm:px-8 text-muted-foreground/60 font-display font-bold text-lg sm:text-2xl">
              <span>Parceiro A</span>
              <span>Grupo B</span>
              <span>Holding C</span>
              <span>Instituto D</span>
              <span>Aliança E</span>
              <span>Consórcio F</span>
              <span>Federação G</span>
              <span>Network H</span>
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
    { v: 8000, s: "+", label: "Clientes atendidos" },
    { v: 12, s: "+", label: "Anos de experiência" },
    { v: 98, s: "%", label: "Satisfação dos clientes" },
    { v: 24, s: "h", label: "Tempo médio de resposta" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-5 sm:px-6 py-16 sm:py-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {items.map((it, i) => (
          <Reveal key={it.label} delay={i * 80} className="h-full">
            <div className="glass rounded-2xl p-4 sm:p-6 text-center hover:shadow-glow transition-shadow h-full flex flex-col justify-center">
              <div className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-primary">
                <Counter to={it.v} suffix={it.s} />
              </div>
              <div className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-muted-foreground">{it.label}</div>
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
      title: "Confiança e Segurança",
      text: "Nossa equipe especializada estará sempre ao seu lado para orientá-lo e garantir as melhores decisões.",
    },
    {
      icon: Zap,
      title: "Eficiência e Resultados",
      text: "Processos otimizados e estratégias comprovadas para acelerar o crescimento do seu negócio.",
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      text: "Profissionais experientes e qualificados em diversas áreas de consultoria empresarial.",
    },
    {
      icon: Lock,
      title: "Atendimento Personalizado",
      text: "Soluções customizadas para atender às necessidades específicas do seu negócio.",
    },
  ];
  return (
    <section id="why" className="mx-auto max-w-7xl px-5 sm:px-6 py-20 sm:py-24">
      <Reveal>
        <div className="max-w-2xl mx-auto md:mx-0 text-center md:text-left">
          <span className="text-primary font-semibold tracking-wide text-xs sm:text-sm uppercase">
            Por que escolher nossos serviços
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            Descubra as vantagens de <span className="text-gradient-primary">trabalhar conosco</span>.
          </h2>
        </div>
      </Reveal>
      <div className="mt-10 sm:mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={i * 100}>
            <div className="group h-full rounded-3xl glass p-6 sm:p-7 hover:-translate-y-1 hover:shadow-glow transition-all duration-300">
              <div className="h-12 w-12 rounded-2xl bg-gradient-primary text-primary-foreground grid place-items-center shadow-glow group-hover:rotate-6 transition-transform">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg sm:text-xl font-bold">{it.title}</h3>
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
    { icon: Search, title: "Análise e Diagnóstico", text: "Análise completa da sua situação atual, identificando todas as oportunidades disponíveis no mercado." },
    { icon: FileText, title: "Estratégia e Planejamento", text: "Plano estratégico personalizado com metas claras e cronograma de implementação." },
    { icon: Handshake, title: "Implementação e Execução", text: "Colocamos em prática as estratégias com acompanhamento constante e ajustes quando necessário." },
    { icon: Trophy, title: "Resultados e Otimização", text: "Monitoramos os resultados, analisamos o desempenho e implementamos melhorias contínuas." },
  ];
  return (
    <section id="process" className="relative py-20 sm:py-24 bg-surface/40 border-y border-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <Reveal>
          <div className="max-w-2xl mx-auto md:mx-0 text-center md:text-left">
            <span className="text-primary font-semibold tracking-wide text-xs sm:text-sm uppercase">
              Nosso processo de consultoria
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold">
              Uma abordagem estruturada em{" "}
              <span className="text-gradient-primary">4 etapas</span>.
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 120}>
              <div className="relative rounded-3xl bg-card border border-border p-6 sm:p-7 h-full overflow-hidden hover:shadow-pop transition-shadow">
                <div className="absolute -right-2 -top-4 font-display text-[6rem] sm:text-[7rem] font-extrabold text-primary/10 leading-none select-none">
                  0{i + 1}
                </div>
                <div className="relative">
                  <div className="h-12 w-12 rounded-2xl bg-accent/20 text-accent grid place-items-center">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg sm:text-xl font-bold">{s.title}</h3>
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
    { icon: Sparkles, t: "Consulta Grátis" },
    { icon: TrendingUp, t: "Até 98% OFF" },
    { icon: Zap, t: "100% Online" },
    { icon: ShieldCheck, t: "Sem Burocracia" },
    { icon: Clock, t: "Resultado Rápido" },
    { icon: CheckCircle2, t: "Seguro e Confiável" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-5 sm:px-6 py-20 sm:py-24">
      <Reveal>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold max-w-2xl mx-auto md:mx-0 text-center md:text-left">
          Seus benefícios ao escolher a Consultoria.
        </h2>
      </Reveal>
      <div className="mt-10 sm:mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {items.map((b, i) => (
          <Reveal key={b.t} delay={i * 60}>
            <div className="flex items-center gap-4 rounded-2xl glass p-4 sm:p-5 hover:bg-white/[0.07] transition">
              <div className="h-11 w-11 shrink-0 rounded-xl bg-gradient-primary text-primary-foreground grid place-items-center">
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
      role: "Empresária",
      text: "Excelente empresa, atendimento rápido e muito profissional. Recomendo super!",
    },
    {
      img: client2,
      name: "Paulo Roberto",
      role: "Analista",
      text: "A consultoria resolveu nossas demandas em tempo recorde. Atendimento excepcional!",
    },
    {
      img: client3,
      name: "Juliana Costa",
      role: "Autônoma",
      text: "Resolveram tudo de forma ótima. Empresa séria e confiável, recomendo de olhos fechados!",
    },
  ];
  return (
    <section id="depoimentos" className="mx-auto max-w-7xl px-5 sm:px-6 py-20 sm:py-24">
      <Reveal>
        <div className="max-w-2xl mx-auto md:mx-0 text-center md:text-left">
          <span className="text-primary font-semibold tracking-wide text-xs sm:text-sm uppercase">
            O que nossos clientes dizem
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            Histórico de sucesso e satisfação.
          </h2>
        </div>
      </Reveal>
      <div className="mt-10 sm:mt-14 grid md:grid-cols-3 gap-4 sm:gap-6">
        {items.map((t, i) => (
          <Reveal key={t.name} delay={i * 120}>
            <figure className="h-full rounded-3xl glass p-6 sm:p-7 flex flex-col hover:shadow-glow transition-shadow">
              <div className="flex items-center gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-foreground/90 leading-relaxed flex-1">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <img src={t.img} loading="lazy" width={48} height={48} className="h-12 w-12 shrink-0 rounded-full object-cover" alt={t.name} />
                <div className="min-w-0">
                  <div className="font-semibold truncate">{t.name}</div>
                  <div className="text-xs text-muted-foreground truncate">{t.role}</div>
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
    <section id="contato" className="px-5 sm:px-6 py-20 sm:py-24">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] p-7 sm:p-10 md:p-16 bg-gradient-accent shadow-pop">
        <div className="absolute -top-20 -right-20 h-60 w-60 sm:h-80 sm:w-80 rounded-full bg-primary/30 blur-3xl animate-blob" />
        <div className="absolute -bottom-24 -left-10 h-60 w-60 sm:h-80 sm:w-80 rounded-full bg-background/30 blur-3xl animate-blob" style={{ animationDelay: "-8s" }} />
        <Reveal>
          <h2 className="relative font-display text-3xl sm:text-5xl md:text-6xl font-bold max-w-3xl text-center md:text-left">
            Falar <span className="shimmer-text">agora</span>.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="relative mt-4 sm:mt-5 max-w-2xl text-base sm:text-lg text-foreground/90 text-center md:text-left mx-auto md:mx-0">
            Nossa metodologia comprovada já transformou milhares de histórias. Não perca mais tempo
            e comece sua jornada de sucesso hoje mesmo.
          </p>
        </Reveal>
        <Reveal delay={220}>
          <div className="relative mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4">
            <button
              onClick={openWhatsapp}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-foreground text-background px-7 py-4 text-base font-semibold hover:scale-[1.03] transition-transform"
            >
              <MessageCircle className="h-5 w-5" /> Falar agora
            </button>
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
      <div className="mx-auto max-w-7xl px-5 sm:px-6 py-10 sm:py-12 grid sm:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-2 font-display font-bold text-xl">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground">
              V
            </span>
            Consultoria<span className="text-primary">.</span>
          </div>
          <p className="mt-3 text-muted-foreground max-w-sm">
            Consultoria financeira e empresarial. Estratégias comprovadas para acelerar o
            crescimento do seu negócio.
          </p>
        </div>
        <div>
          <div className="font-semibold mb-3">Navegação</div>
          <ul className="space-y-2 text-muted-foreground">
            <li><a href="#why" className="hover:text-foreground">Diferenciais</a></li>
            <li><a href="#process" className="hover:text-foreground">Processo</a></li>
            <li><a href="#depoimentos" className="hover:text-foreground">Depoimentos</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Contato</div>
          <ul className="space-y-2 text-muted-foreground">
            <li>0800 777 0000</li>
            <li>contato@consultoria.com.br</li>
            <li>Seg–Sáb, 8h–22h</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground px-5">
        © {new Date().getFullYear()} Consultoria. Todos os direitos reservados.
      </div>
    </footer>
  );
}

/* ---------- whatsapp fab ---------- */
function WhatsFab() {
  return (
    <button
      onClick={openWhatsapp}
      aria-label="Falar agora"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-success text-success-foreground shadow-pop animate-pulse-glow hover:scale-110 transition-transform"
    >
      <MessageCircle className="h-7 w-7" />
    </button>
  );
}

async function openWhatsapp() {
  try {
    const { getNextWhatsapp } = await import("@/lib/wpp.functions");
    const res = await getNextWhatsapp();
    if (!res.number) {
      alert("Nenhum atendente disponível no momento.");
      return;
    }
    const url = `https://wa.me/${res.number}?text=${encodeURIComponent(res.message || "")}`;
    window.open(url, "_blank", "noopener,noreferrer");
  } catch {
    alert("Erro ao abrir o WhatsApp. Tente novamente.");
  }
}

