import type { MouseEvent, ReactNode } from "react";
import {
  Image,
  Palette,
  Workflow,
  Server,
  Globe,
  FileText,
  MessageCircle,
  ShoppingBag,
  MapPin,
  Plug,
  Rocket,
  PiggyBank,
  Gift,
} from "lucide-react";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import Eyebrow from "./ui/Eyebrow";

function OpenAILogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#ffffff" role="img" aria-label="ChatGPT">
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
    </svg>
  );
}

function ClaudeLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#D97757" role="img" aria-label="Claude">
      <path d="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z" />
    </svg>
  );
}

function GeminiLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} role="img" aria-label="Gemini">
      <defs>
        <linearGradient id="gemini-grad" x1="0" y1="24" x2="24" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#4796E3" />
          <stop offset="0.5" stopColor="#7B7BD6" />
          <stop offset="1" stopColor="#C46B9E" />
        </linearGradient>
      </defs>
      <path
        fill="url(#gemini-grad)"
        d="M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81"
      />
    </svg>
  );
}

function FlowLogo({ className }: { className?: string }) {
  return <img src="/logos/google-flow.webp" alt="Google Flow" width={128} height={103} className={`object-contain ${className}`} />;
}

const MAIN: { name: string; step: string; text: string; logo: ReactNode; glow: string }[] = [
  {
    name: "ChatGPT",
    step: "Planejar",
    text: "Planejamento, prompts, copy, pesquisa, estruturação de projetos e apoio comercial.",
    logo: <OpenAILogo className="h-8 w-8" />,
    glow: "rgba(255,255,255,0.18)",
  },
  {
    name: "Claude / Claude Code",
    step: "Construir",
    text: "Desenvolvimento dos sites, análise de projetos, código, correções e organização da aplicação.",
    logo: <ClaudeLogo className="h-8 w-8" />,
    glow: "rgba(217,119,87,0.28)",
  },
  {
    name: "Gemini",
    step: "Pesquisar",
    text: "Pesquisa, inteligência artificial multimodal e apoio na criação e análise de conteúdo.",
    logo: <GeminiLogo className="h-8 w-8" />,
    glow: "rgba(71,150,227,0.28)",
  },
  {
    name: "Google Flow",
    step: "Criar visual",
    text: "Criação e edição de vídeos, animações e conteúdos visuais para deixar os projetos e apresentações mais profissionais.",
    logo: <FlowLogo className="h-7 w-9" />,
    glow: "rgba(76,134,184,0.3)",
  },
];

const FREE_TOOLS = [
  { name: "ChatGPT Plus", logo: <OpenAILogo className="h-5 w-5" /> },
  { name: "Gemini Pro", logo: <GeminiLogo className="h-5 w-5" /> },
  { name: "Google Flow", logo: <FlowLogo className="h-4 w-5" /> },
];

const SMALL = [
  { icon: Image, label: "Geradores de imagens" },
  { icon: Palette, label: "Editores visuais" },
  { icon: Workflow, label: "Automação" },
  { icon: Server, label: "Hospedagem" },
  { icon: Globe, label: "Domínios" },
  { icon: FileText, label: "Formulários" },
  { icon: MessageCircle, label: "Integrações com WhatsApp" },
  { icon: ShoppingBag, label: "E-commerce" },
  { icon: MapPin, label: "Google Business Profile" },
  { icon: Plug, label: "Integrações" },
  { icon: Rocket, label: "Deploy" },
];

// Radial highlight that follows the cursor; written to CSS vars, so no re-render.
function trackGlow(e: MouseEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
}

export default function Tools() {
  return (
    <section className="relative w-full overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
        <div className="absolute left-1/2 top-[38%] h-[420px] w-[720px] max-w-full -translate-x-1/2 rounded-full bg-cyan/[0.08] blur-[120px]" />
        <div className="absolute bottom-0 right-[10%] h-64 w-64 rounded-full bg-neon/[0.07] blur-[100px]" />
      </div>

      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow>Ferramentas</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-paper sm:text-4xl">
            Você vai dominar as ferramentas que aceleram todo o processo
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            ChatGPT, Claude, Gemini e Google Flow trabalhando juntos para transformar planejamento,
            código, conteúdo e criação visual em uma única operação.
          </p>
        </Reveal>

        {/* Destaque: começar sem pagar */}
        <Reveal delay={0.1} className="mx-auto mt-12 max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl border border-neon/40 bg-gradient-to-br from-neon/[0.10] via-[#15181a] to-[#15181a] p-6 shadow-[0_0_60px_-20px_rgba(232,163,61,0.45)] sm:p-10">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-neon/20 blur-[80px]" />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-10">
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 rounded-full bg-neon px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0f1214]">
                  <Gift className="h-3.5 w-3.5" strokeWidth={2.5} /> R$ 0 para começar
                </span>
                <h3 className="mt-4 font-display text-2xl font-bold leading-tight text-paper sm:text-3xl">
                  Comece usando os planos pagos <span className="text-gradient">sem pagar nada</span>
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-paper/80 sm:text-base">
                  Dentro do treinamento eu te ensino, passo a passo, como ter acesso ao{" "}
                  <strong className="text-paper">ChatGPT Plus</strong>, ao{" "}
                  <strong className="text-paper">Gemini Pro</strong> e ao{" "}
                  <strong className="text-paper">Google Flow</strong> sem pagar nada para começar — e
                  já criar seus primeiros projetos com as versões completas.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Você também aprende a publicar seus primeiros projetos com hospedagem gratuita e
                  domínio gratuito, reduzindo ao máximo o custo para começar a vender sites.
                </p>
                <p className="mt-4 text-xs leading-relaxed text-muted/80">
                  Exceção: o Claude Code tem cobrança própria. Acesso por meio de testes gratuitos e
                  condições oficiais disponíveis no momento.
                </p>
              </div>

              <ul className="flex shrink-0 flex-row flex-wrap gap-3 lg:w-56 lg:flex-col">
                {FREE_TOOLS.map((t) => (
                  <li
                    key={t.name}
                    className="flex flex-1 items-center gap-3 rounded-2xl border border-white/10 bg-[#0f1214]/70 px-4 py-3 lg:flex-none"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5">{t.logo}</span>
                    <span className="flex flex-col">
                      <span className="whitespace-nowrap text-sm font-semibold text-paper">{t.name}</span>
                      <span className="text-[11px] font-semibold uppercase tracking-wide text-neon">Sem custo</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* Ecossistema principal */}
        <div className="relative mt-16">
          <div
            className="pointer-events-none absolute left-[12%] right-[12%] top-[52px] hidden h-px bg-white/10 lg:block"
            aria-hidden="true"
          >
            <div className="tool-flow-line absolute inset-0" />
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {MAIN.map(({ name, step, text, logo, glow }, i) => (
              <Reveal key={name} delay={i * 0.1} className="h-full">
                <article
                  onMouseMove={trackGlow}
                  style={{ ["--glow" as string]: glow }}
                  className="tool-card glass group relative h-full overflow-hidden rounded-2xl p-6 transition-[transform,border-color] duration-300 hover:-translate-y-1.5 hover:border-cyan/40"
                >
                  <div className="absolute inset-0 bg-[#16191c]" aria-hidden="true" />
                  <div className="tool-glow" aria-hidden="true" />
                  <div className="relative flex items-center justify-between">
                    <span className="relative z-10 flex h-[52px] w-[52px] items-center justify-center rounded-2xl border border-white/10 bg-[#0f1214] shadow-[0_0_24px_-6px_var(--glow)] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                      {logo}
                    </span>
                    <span className="font-mono-tech text-[11px] uppercase tracking-[0.16em] text-muted">
                      <span className="text-neon">{String(i + 1).padStart(2, "0")}</span> · {step}
                    </span>
                  </div>
                  <h3 className="relative mt-6 font-display text-xl font-bold text-paper">{name}</h3>
                  <p className="relative mt-2.5 text-sm leading-relaxed text-muted">{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Recursos complementares */}
        <Reveal className="mt-14">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            E o ecossistema completo em volta
          </p>
          <ul className="mx-auto mt-6 flex max-w-5xl flex-wrap justify-center gap-2.5 sm:gap-3">
            {SMALL.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs font-medium text-paper/90 transition-colors hover:border-neon/40 hover:bg-neon/[0.06] sm:px-4 sm:text-sm"
              >
                <Icon className="h-4 w-4 text-cyan transition-colors group-hover:text-neon" strokeWidth={1.8} />
                {label}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Destaque de economia */}
        <Reveal className="mx-auto mt-14 max-w-4xl">
          <div className="glass glow-border flex flex-col gap-5 rounded-2xl p-6 sm:flex-row sm:items-center sm:gap-7 sm:p-8">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-neon/30 bg-neon/10 shadow-[0_0_30px_-8px_rgba(232,163,61,0.6)]">
              <PiggyBank className="h-7 w-7 text-neon" strokeWidth={1.7} />
            </span>
            <div>
              <h3 className="font-display text-xl font-bold text-paper sm:text-2xl">
                Menos custo para começar. <span className="text-gradient">Mais estrutura para vender.</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                Você vai aprender não apenas a criar os sites, mas também como montar uma estrutura
                enxuta para começar: ferramentas, hospedagem, domínio, publicação e apresentação
                profissional para seus primeiros clientes.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
