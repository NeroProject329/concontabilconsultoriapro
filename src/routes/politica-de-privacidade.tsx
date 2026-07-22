import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowLeft,
  Clock3,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade | Consultoria" },
      {
        name: "description",
        content:
          "Conheça como a Consultoria coleta, utiliza, protege e trata dados pessoais em seus canais digitais.",
      },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: PoliticaDePrivacidade,
});

const UPDATED_AT = "14 de julho de 2026";

function PoliticaDePrivacidade() {
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
                <ShieldCheck className="h-4 w-4" />
                Proteção e transparência
              </span>

              <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Política de{" "}
                <span className="text-gradient-primary">Privacidade</span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                Esta Política explica como tratamos os dados pessoais
                relacionados ao uso deste site e aos contatos realizados pelos
                nossos canais de atendimento.
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
            <LegalSection title="1. Sobre esta Política">
              <p>
                A presente Política de Privacidade descreve as práticas
                adotadas pela Consultoria em relação à coleta, ao uso, ao
                armazenamento, ao compartilhamento e à proteção de dados
                pessoais de visitantes, potenciais clientes e clientes.
              </p>

              <p>
                Ao navegar neste site ou entrar em contato conosco, você
                declara estar ciente das condições aqui apresentadas. Quando
                uma forma específica de tratamento depender de consentimento,
                ele será solicitado de maneira adequada.
              </p>
            </LegalSection>

            <LegalSection title="2. Quais dados poderão ser tratados">
              <p>
                Dependendo da forma como você utiliza nossos canais, poderemos
                tratar:
              </p>

              <ul className="list-disc space-y-3 pl-5 marker:text-primary">
                <li>
                  <strong>Dados de identificação e contato:</strong> nome,
                  telefone, e-mail e outras informações fornecidas
                  voluntariamente.
                </li>

                <li>
                  <strong>Dados relacionados à solicitação:</strong>{" "}
                  informações sobre a situação, necessidade, empresa ou serviço
                  de interesse informadas durante o atendimento.
                </li>

                <li>
                  <strong>Dados de comunicação:</strong> conteúdo das mensagens
                  enviadas por WhatsApp, e-mail ou outros canais
                  disponibilizados.
                </li>

                <li>
                  <strong>Dados técnicos:</strong> endereço IP, tipo de
                  navegador, dispositivo, páginas acessadas, data, horário e
                  registros de segurança, quando coletados pela infraestrutura
                  do site.
                </li>
              </ul>

              <p>
                Pedimos que você não envie dados pessoais desnecessários,
                especialmente informações sensíveis, documentos ou dados de
                terceiros sem autorização.
              </p>
            </LegalSection>

            <LegalSection title="3. Como os dados poderão ser coletados">
              <p>Os dados poderão ser obtidos:</p>

              <ul className="list-disc space-y-3 pl-5 marker:text-primary">
                <li>quando você inicia um atendimento pelo WhatsApp;</li>

                <li>
                  quando envia uma mensagem por e-mail ou outro canal de
                  contato;
                </li>

                <li>
                  durante a prestação de serviços ou a elaboração de propostas;
                </li>

                <li>
                  automaticamente, por registros técnicos, cookies essenciais e
                  tecnologias semelhantes;
                </li>

                <li>
                  por fornecedores de hospedagem, segurança e infraestrutura
                  utilizados no site.
                </li>
              </ul>
            </LegalSection>

            <LegalSection title="4. Finalidades do tratamento">
              <p>Os dados poderão ser utilizados para:</p>

              <ul className="list-disc space-y-3 pl-5 marker:text-primary">
                <li>responder dúvidas, solicitações e pedidos de atendimento;</li>

                <li>
                  entender a necessidade apresentada e avaliar a possibilidade
                  de atendimento;
                </li>

                <li>
                  elaborar propostas, formalizar contratos e prestar os serviços
                  contratados;
                </li>

                <li>
                  manter registros de comunicação, suporte e relacionamento;
                </li>

                <li>
                  cumprir obrigações legais, regulatórias, fiscais e
                  contratuais;
                </li>

                <li>
                  prevenir fraudes, abusos, incidentes e acessos não
                  autorizados;
                </li>

                <li>
                  proteger direitos da Consultoria, dos usuários e de terceiros;
                </li>

                <li>
                  melhorar a segurança, o funcionamento e a experiência de
                  navegação no site.
                </li>
              </ul>
            </LegalSection>

            <LegalSection title="5. Bases legais utilizadas">
              <p>
                O tratamento poderá ocorrer com fundamento no consentimento, na
                execução de procedimentos preliminares ou de contrato, no
                cumprimento de obrigação legal ou regulatória, no exercício
                regular de direitos, na proteção do crédito e no legítimo
                interesse, conforme a finalidade aplicável e a legislação
                vigente.
              </p>

              <p>
                Quando utilizarmos o legítimo interesse, avaliaremos a
                necessidade do tratamento e os impactos sobre os direitos e as
                expectativas do titular.
              </p>
            </LegalSection>

            <LegalSection title="6. Compartilhamento de dados">
              <p>
                Não comercializamos dados pessoais. As informações poderão ser
                compartilhadas apenas quando necessário com:
              </p>

              <ul className="list-disc space-y-3 pl-5 marker:text-primary">
                <li>
                  provedores de hospedagem, tecnologia, comunicação e segurança;
                </li>

                <li>
                  prestadores de serviços profissionais envolvidos no
                  atendimento contratado;
                </li>

                <li>
                  plataformas de comunicação, como o WhatsApp, conforme seus
                  próprios termos;
                </li>

                <li>
                  autoridades públicas, órgãos reguladores ou partes envolvidas
                  em processos, quando exigido;
                </li>

                <li>
                  terceiros envolvidos em reorganização societária, sempre com
                  medidas de proteção adequadas.
                </li>
              </ul>

              <p>
                Os fornecedores recebem somente os dados necessários ao
                desempenho de suas funções e devem tratá-los de forma compatível
                com as finalidades informadas.
              </p>
            </LegalSection>

            <LegalSection title="7. Cookies e tecnologias semelhantes">
              <p>
                O site poderá utilizar cookies essenciais e registros técnicos
                necessários ao seu funcionamento, segurança e desempenho. Caso
                sejam implementados cookies opcionais de análise ou
                publicidade, serão adotados os mecanismos de informação e
                escolha exigidos pela legislação aplicável.
              </p>

              <p>
                Você também pode controlar cookies diretamente nas
                configurações do navegador. A desativação de cookies essenciais
                poderá afetar algumas funcionalidades.
              </p>
            </LegalSection>

            <LegalSection title="8. Armazenamento e segurança">
              <p>
                Os dados serão mantidos pelo período necessário para cumprir as
                finalidades descritas, atender obrigações legais e contratuais,
                preservar registros e exercer direitos. Depois disso, poderão
                ser eliminados ou anonimizados, salvo quando a conservação for
                permitida ou exigida por lei.
              </p>

              <p>
                Adotamos medidas administrativas e técnicas razoáveis para
                reduzir riscos de perda, uso indevido, acesso não autorizado,
                alteração ou divulgação. Ainda assim, nenhum ambiente digital é
                totalmente livre de riscos.
              </p>
            </LegalSection>

            <LegalSection title="9. Direitos do titular">
              <p>
                Nos termos da legislação aplicável, você poderá solicitar,
                quando cabível:
              </p>

              <ul className="list-disc space-y-3 pl-5 marker:text-primary">
                <li>confirmação da existência de tratamento;</li>
                <li>acesso aos dados pessoais;</li>

                <li>
                  correção de dados incompletos, inexatos ou desatualizados;
                </li>

                <li>
                  anonimização, bloqueio ou eliminação de dados desnecessários ou
                  excessivos;
                </li>

                <li>portabilidade, observadas as regras aplicáveis;</li>

                <li>informações sobre compartilhamentos realizados;</li>

                <li>
                  revogação do consentimento e eliminação de dados tratados com
                  essa base, quando aplicável;
                </li>

                <li>
                  oposição ao tratamento realizado em desconformidade com a
                  legislação;
                </li>

                <li>
                  revisão de decisões tomadas unicamente com base em tratamento
                  automatizado, se houver.
                </li>
              </ul>

              <p>
                Para proteger o titular, poderemos solicitar informações que
                permitam confirmar sua identidade antes de atender ao pedido.
              </p>
            </LegalSection>

            <LegalSection title="10. Dados de crianças e adolescentes">
              <p>
                Este site e os serviços divulgados não são direcionados
                intencionalmente a crianças. Caso seja identificado tratamento
                inadequado de dados de criança ou adolescente, poderão ser
                adotadas medidas para exclusão ou regularização, conforme a
                legislação.
              </p>
            </LegalSection>

            <LegalSection title="11. Sites e plataformas de terceiros">
              <p>
                O site poderá direcionar o usuário para serviços externos, como
                WhatsApp ou outras plataformas. O tratamento realizado por
                esses terceiros é regido por suas próprias políticas e termos,
                que recomendamos consultar.
              </p>
            </LegalSection>

            <LegalSection title="12. Alterações desta Política">
              <p>
                Esta Política poderá ser atualizada para refletir mudanças
                legais, tecnológicas ou operacionais. A versão vigente será
                disponibilizada nesta página com a respectiva data de
                atualização.
              </p>
            </LegalSection>

            <LegalSection title="13. Contato sobre privacidade">
              <p>
                Para dúvidas ou solicitações relacionadas a dados pessoais,
                entre em contato pelos canais abaixo. As solicitações serão
                avaliadas e respondidas dentro dos prazos legais aplicáveis.
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
                  className="block rounded-2xl bg-primary/10 px-4 py-3 font-semibold text-primary"
                >
                  Política de Privacidade
                </a>

                <a
                  href="/termos-de-uso"
                  className="block rounded-2xl px-4 py-3 font-medium text-muted-foreground transition hover:bg-primary/10 hover:text-primary"
                >
                  Termos de Uso
                </a>
              </div>

              <div className="mt-6 rounded-2xl bg-surface p-4">
                <ShieldCheck className="h-6 w-6 text-primary" />

                <p className="mt-3 text-sm font-semibold">
                  Precisa falar conosco?
                </p>

                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                  Use o e-mail de contato para exercer seus direitos ou tirar
                  dúvidas.
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