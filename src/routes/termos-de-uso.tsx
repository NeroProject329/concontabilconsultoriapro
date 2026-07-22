import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowLeft,
  BadgeCheck,
  Clock3,
  FileText,
  Mail,
  MapPin,
  Phone,
  Scale,
} from "lucide-react";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => ({
    meta: [
      { title: "Termos de Uso | Consultoria" },
      {
        name: "description",
        content:
          "Consulte as regras e condições aplicáveis ao acesso e à utilização do site da Consultoria.",
      },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: TermosDeUso,
});

const UPDATED_AT = "14 de julho de 2026";

function TermosDeUso() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-hero text-foreground">
      <LegalHeader />

      <main>
        <section className="relative overflow-hidden border-b border-border">
          <div className="pointer-events-none absolute inset-0 grid-pattern opacity-35" />
          <div className="pointer-events-none absolute -left-28 -top-28 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-36 -right-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />

          <div className="relative mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-24">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar para o início
            </a>

            <div className="mt-8 max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-semibold text-primary">
                <FileText className="h-4 w-4" />
                Regras de utilização
              </span>

              <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Termos de <span className="text-gradient-primary">Uso</span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                Estes Termos estabelecem as condições para acesso, navegação e
                utilização deste site e dos seus canais de atendimento.
              </p>

              <div className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
                <Clock3 className="h-4 w-4 text-primary" />
                Última atualização: {UPDATED_AT}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-5xl gap-8 px-5 py-12 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-start">
          <article className="space-y-6">
            <LegalSection title="1. Aceitação dos Termos">
              <p>
                Ao acessar ou utilizar este site, você declara que leu e
                concorda com estes Termos de Uso e com a Política de
                Privacidade. Caso não concorde, interrompa a utilização do
                site.
              </p>

              <p>
                O acesso aos canais de atendimento não cria automaticamente uma
                relação contratual. A contratação de qualquer serviço dependerá
                de análise, aceite de proposta e, quando aplicável, assinatura
                de instrumento específico.
              </p>
            </LegalSection>

            <LegalSection title="2. Finalidade do site">
              <p>
                O site possui finalidade institucional e informativa,
                apresentando serviços, diferenciais, formas de atendimento e
                conteúdos relacionados à atividade da Consultoria.
              </p>

              <p>
                As informações disponibilizadas não constituem recomendação
                individual, parecer jurídico, contábil, financeiro ou promessa
                de resultado. Cada caso deverá ser avaliado de acordo com suas
                características e documentos.
              </p>
            </LegalSection>

            <LegalSection title="3. Elegibilidade e capacidade">
              <p>
                O usuário deve possuir capacidade legal para praticar os atos
                relacionados à utilização dos serviços. Menores de idade
                deverão utilizar os canais com acompanhamento ou autorização de
                seu responsável legal, quando necessário.
              </p>

              <p>
                Ao fornecer informações em nome de uma empresa ou de terceiro, o
                usuário declara possuir autorização para fazê-lo e assume
                responsabilidade pela veracidade dos dados enviados.
              </p>
            </LegalSection>

            <LegalSection title="4. Uso adequado do site">
              <p>
                Ao utilizar o site e seus canais, você se compromete a não:
              </p>

              <ul className="list-disc space-y-3 pl-5 marker:text-primary">
                <li>
                  praticar atos ilícitos, fraudulentos ou que violem direitos de
                  terceiros;
                </li>

                <li>
                  fornecer informações falsas, enganosas, incompletas ou sem
                  autorização;
                </li>

                <li>
                  tentar acessar áreas, sistemas, códigos, servidores ou dados
                  sem permissão;
                </li>

                <li>
                  introduzir vírus, programas maliciosos ou qualquer recurso
                  capaz de prejudicar o site;
                </li>

                <li>
                  realizar engenharia reversa, cópia automatizada ou exploração
                  indevida da plataforma;
                </li>

                <li>
                  usar o conteúdo, a marca ou a identidade visual para se passar
                  pela Consultoria;
                </li>

                <li>
                  sobrecarregar, interromper ou comprometer a disponibilidade
                  dos serviços digitais.
                </li>
              </ul>
            </LegalSection>

            <LegalSection title="5. Atendimento e contratação de serviços">
              <p>
                O contato inicial poderá ser realizado por WhatsApp, e-mail ou
                outro canal indicado no site. Durante o atendimento, poderão
                ser solicitadas informações necessárias à análise da demanda e
                à elaboração de uma proposta.
              </p>

              <p>
                Escopo, valores, prazos, responsabilidades, condições de
                pagamento e demais regras da prestação serão definidos em
                proposta, contrato ou documento equivalente. Em caso de
                divergência, o instrumento específico da contratação
                prevalecerá sobre estes Termos.
              </p>
            </LegalSection>

            <LegalSection title="6. Resultados, estimativas e descontos divulgados">
              <p>
                Percentuais, prazos, estimativas, exemplos, depoimentos e
                resultados apresentados no site possuem caráter informativo e
                podem variar conforme a situação individual, a documentação, a
                negociação com terceiros, critérios de instituições envolvidas
                e outros fatores fora do controle da Consultoria.
              </p>

              <p>
                A divulgação de descontos de até determinado percentual
                representa uma possibilidade observada em casos específicos e
                não constitui garantia de obtenção do mesmo resultado para
                todos os usuários ou clientes.
              </p>
            </LegalSection>

            <LegalSection title="7. Obrigações do usuário ou cliente">
              <p>O usuário ou cliente é responsável por:</p>

              <ul className="list-disc space-y-3 pl-5 marker:text-primary">
                <li>
                  fornecer informações e documentos verdadeiros, completos e
                  atualizados;
                </li>

                <li>ler as propostas e contratos antes de aceitá-los;</li>

                <li>
                  cumprir prazos, pagamentos e demais obrigações assumidas;
                </li>

                <li>manter seus dados de contato atualizados;</li>

                <li>
                  comunicar qualquer uso indevido, suspeita de fraude ou falha
                  de segurança;
                </li>

                <li>
                  preservar o sigilo de documentos, links e informações de
                  acesso recebidas.
                </li>
              </ul>
            </LegalSection>

            <LegalSection title="8. Propriedade intelectual">
              <p>
                Textos, marcas, nomes, logotipos, elementos gráficos, layout,
                imagens, vídeos, códigos, materiais e demais conteúdos do site
                são protegidos pela legislação aplicável e não poderão ser
                reproduzidos, adaptados, distribuídos, comercializados ou
                utilizados sem autorização prévia, salvo nos limites permitidos
                por lei.
              </p>

              <p>
                É permitido compartilhar o endereço público das páginas para
                fins informativos, desde que isso não implique alteração do
                conteúdo, falsa associação ou finalidade ilícita.
              </p>
            </LegalSection>

            <LegalSection title="9. Links e serviços de terceiros">
              <p>
                O site poderá conter links ou integrações com serviços de
                terceiros, incluindo plataformas de comunicação. A Consultoria
                não controla integralmente esses ambientes e não se
                responsabiliza por suas políticas, disponibilidade, segurança
                ou conteúdos.
              </p>

              <p>
                O usuário deverá consultar os termos e as políticas da
                plataforma externa antes de utilizá-la.
              </p>
            </LegalSection>

            <LegalSection title="10. Disponibilidade e alterações do site">
              <p>
                Buscamos manter o site disponível e seguro, mas não garantimos
                funcionamento contínuo, livre de erros ou compatível com todos
                os dispositivos. O acesso poderá ser suspenso ou limitado para
                manutenção, atualização, segurança, caso fortuito, força maior
                ou evento fora do nosso controle.
              </p>

              <p>
                Conteúdos, recursos, preços, canais e condições poderão ser
                atualizados, corrigidos ou removidos a qualquer momento,
                respeitados os contratos já celebrados e a legislação.
              </p>
            </LegalSection>

            <LegalSection title="11. Limitação de responsabilidade">
              <p>
                Na extensão permitida pela legislação, a Consultoria não será
                responsável por danos decorrentes de uso indevido do site,
                informações falsas fornecidas pelo usuário, decisões tomadas
                sem análise profissional, falhas de terceiros,
                indisponibilidade temporária ou eventos fora de seu controle
                razoável.
              </p>

              <p>
                Nada nestes Termos exclui ou limita direitos e responsabilidades
                que não possam ser afastados pela legislação brasileira,
                especialmente as normas de proteção do consumidor, quando
                aplicáveis.
              </p>
            </LegalSection>

            <LegalSection title="12. Privacidade e proteção de dados">
              <p>
                O tratamento de dados pessoais relacionado ao site e ao
                atendimento observará a Política de Privacidade, disponível em
                página própria. Recomendamos sua leitura antes de enviar
                informações pelos canais de contato.
              </p>

              <a
                href="/politica-de-privacidade"
                className="inline-flex items-center gap-2 font-semibold text-primary hover:underline"
              >
                <BadgeCheck className="h-4 w-4" />
                Ler a Política de Privacidade
              </a>
            </LegalSection>

            <LegalSection title="13. Suspensão de acesso">
              <p>
                Poderemos bloquear ou limitar interações quando houver indícios
                de fraude, abuso, ameaça, violação destes Termos, risco à
                segurança ou descumprimento legal, sem prejuízo de outras
                medidas cabíveis.
              </p>
            </LegalSection>

            <LegalSection title="14. Alterações destes Termos">
              <p>
                Estes Termos poderão ser atualizados para refletir mudanças
                legais, tecnológicas, comerciais ou operacionais. A versão
                vigente será publicada nesta página com a data da última
                atualização.
              </p>

              <p>
                A continuidade da utilização após a publicação de uma nova
                versão representará ciência das alterações, sem prejuízo de
                consentimentos ou comunicações específicas exigidos por lei.
              </p>
            </LegalSection>

            <LegalSection title="15. Legislação e foro">
              <p>
                Estes Termos serão interpretados conforme a legislação da
                República Federativa do Brasil. Eventuais conflitos deverão ser
                preferencialmente resolvidos de forma amigável.
              </p>

              <p>
                Quando for juridicamente permitido, fica eleito o foro da
                comarca de Rio do Sul , Estado de Santa Catarina, sem prejuízo do foro
                competente assegurado por norma obrigatória, especialmente ao
                consumidor.
              </p>
            </LegalSection>

            <LegalSection title="16. Contato">
              <p>
                Dúvidas sobre estes Termos poderão ser encaminhadas pelos canais
                abaixo.
              </p>

              <ContactGrid />
            </LegalSection>
          </article>

          <aside className="lg:sticky lg:top-24">
            <div className="rounded-3xl border border-border bg-card/80 p-5 shadow-card backdrop-blur-xl">
              <p className="font-display text-sm font-bold">
                Documentos legais
              </p>

              <div className="mt-4 space-y-2 text-sm">
                <a
                  href="/politica-de-privacidade"
                  className="block rounded-2xl px-4 py-3 font-medium text-muted-foreground transition hover:bg-primary/10 hover:text-primary"
                >
                  Política de Privacidade
                </a>

                <a
                  href="/termos-de-uso"
                  className="block rounded-2xl bg-primary/10 px-4 py-3 font-semibold text-primary"
                >
                  Termos de Uso
                </a>
              </div>

              <div className="mt-6 rounded-2xl bg-surface p-4">
                <Scale className="h-6 w-6 text-primary" />

                <p className="mt-3 text-sm font-semibold">Uso responsável</p>

                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                  O uso do site deve respeitar estes Termos e a legislação
                  aplicável.
                </p>

                <a
                  href="mailto:contato@concontabilconsultoria.pro"
                  className="mt-4 inline-flex text-xs font-bold text-primary hover:underline"
                >
                  contato@concontabilconsultoria.pro
                </a>
              </div>
            </div>
          </aside>
        </section>
      </main>

      <LegalFooter />
    </div>
  );
}

function LegalHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-6">
        <a
          href="/"
          className="flex min-w-0 items-center gap-2 font-display text-lg font-bold sm:text-xl"
        >
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
            C
          </span>

          <span className="truncate">
            Consultoria<span className="text-primary">.</span>
          </span>
        </a>

        <a
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold transition hover:border-primary/40 hover:text-primary sm:text-sm"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="hidden sm:inline">Voltar ao site</span>
          <span className="sm:hidden">Voltar</span>
        </a>
      </div>
    </header>
  );
}

function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="scroll-mt-24 rounded-3xl border border-border bg-card/80 p-6 shadow-card backdrop-blur-xl sm:p-8">
      <h2 className="font-display text-xl font-bold sm:text-2xl">
        {title}
      </h2>

      <div className="mt-4 space-y-4 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
        {children}
      </div>
    </section>
  );
}

function ContactGrid() {
  return (
    <div className="mt-6 grid gap-3 sm:grid-cols-2">
      <ContactItem
        icon={Mail}
        label="E-mail"
        value="contato@concontabilconsultoria.pro"
        href="mailto:contato@concontabilconsultoria.pro"
      />

      <ContactItem
        icon={Phone}
        label="Telefone"
        value="(83) 95217-4587"
        href="tel:+5583952174587"
      />

      <ContactItem
        icon={MapPin}
        label="Endereço"
        value="Rua Herculano Nunes Teixeira, 105, Casa do Empreendedor Budag, Rio do Sul/SC — CEP 89165-478"
      />
    </div>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </span>

      <span>
        <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {label}
        </span>

        <span className="mt-1 block text-sm font-semibold leading-6 text-foreground">
          {value}
        </span>
      </span>
    </>
  );

  const className =
    "flex items-start gap-3 rounded-2xl border border-border bg-surface/70 p-4 transition hover:border-primary/30";

  return href ? (
    <a href={href} className={className}>
      {content}
    </a>
  ) : (
    <div className={`${className} sm:col-span-2`}>{content}</div>
  );
}

function LegalFooter() {
  return (
    <footer className="border-t border-border bg-surface/60">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-7 text-center text-xs text-muted-foreground sm:flex-row sm:px-6 sm:text-left">
        <p>
          © {new Date().getFullYear()} Consultoria. Todos os direitos
          reservados.
        </p>

        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          <a
            href="/politica-de-privacidade"
            className="transition hover:text-primary"
          >
            Política de Privacidade
          </a>

          <a href="/termos-de-uso" className="transition hover:text-primary">
            Termos de Uso
          </a>
        </div>
      </div>
    </footer>
  );
}