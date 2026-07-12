import {
  Bot,
  Sparkles,
  Clapperboard,
  Image,
  Palette,
  Workflow,
  Server,
  Globe,
  FileText,
  Plug,
} from "lucide-react";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import Eyebrow from "./ui/Eyebrow";

const MAIN = [
  {
    icon: Bot,
    title: "ChatGPT",
    text: "Planejamento, prompts, textos, estruturas, pesquisa de público, propostas e atendimento.",
  },
  {
    icon: Sparkles,
    title: "Claude",
    text: "Análise de projetos, desenvolvimento de páginas, revisão de código e organização de sistemas.",
  },
  {
    icon: Clapperboard,
    title: "Flow",
    text: "Criação de vídeos, animações e elementos visuais para deixar os projetos mais profissionais.",
  },
];

const SMALL = [
  { icon: Image, label: "Geradores de imagens" },
  { icon: Palette, label: "Editores visuais" },
  { icon: Workflow, label: "Automação" },
  { icon: Server, label: "Hospedagem" },
  { icon: Globe, label: "Domínios" },
  { icon: FileText, label: "Formulários" },
  { icon: Plug, label: "Integrações com WhatsApp" },
];

export default function Tools() {
  return (
    <section className="relative w-full py-24 sm:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Ferramentas</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-paper sm:text-4xl">
            Você vai dominar as ferramentas que aceleram todo o processo
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {MAIN.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.1}>
              <div className="glass glow-border group h-full rounded-2xl p-8 transition-transform hover:-translate-y-1.5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-neon/25 to-violet/25 border border-white/10">
                  <Icon className="h-7 w-7 text-cyan" strokeWidth={1.7} />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-paper">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {SMALL.map(({ icon: Icon, label }, i) => (
            <Reveal key={label} delay={i * 0.05}>
              <div className="glass flex h-full items-center gap-3 rounded-xl p-4 transition-colors hover:bg-white/[0.07]">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10">
                  <Icon className="h-5 w-5 text-violet" strokeWidth={1.8} />
                </div>
                <span className="text-xs font-medium text-paper/90 sm:text-sm">{label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
