import { Code2, Bot, Smartphone, LayoutTemplate } from "lucide-react";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import ScrollVideoSection from "./ScrollVideoSection";

const SKILLS = [
  { icon: LayoutTemplate, label: "Criação de sites e landing pages" },
  { icon: Bot, label: "Inteligência artificial aplicada" },
  { icon: Code2, label: "Desenvolvimento e organização de projetos" },
  { icon: Smartphone, label: "Vendas e prospecção digital" },
];

export default function Instructor() {
  return (
    <>
      <ScrollVideoSection
        video="/videos/instrutor.mp4"
        direction="right"
        eyebrow="O instrutor"
        heading="Aprenda com quem conhece criação, tecnologia e vendas digitais"
      >
        <p className="max-w-md text-base leading-relaxed text-muted sm:text-lg">
          Experiência real em criação de sites, inteligência artificial aplicada e
          vendas digitais.
        </p>
      </ScrollVideoSection>

      <section className="relative w-full py-24 sm:py-28">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <Reveal>
              <div className="relative mx-auto max-w-xs">
                <div className="absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-neon/20 to-violet/20 blur-[90px]" />
                <div className="glass glow-border relative aspect-square overflow-hidden rounded-3xl">
                  {/* Substitua por uma foto real do instrutor */}
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#0a1530] to-[#050a1a]">
                    <span className="font-display text-6xl font-black text-gradient">
                      ?
                    </span>
                  </div>
                </div>
                <div className="glass absolute -bottom-5 -right-5 rounded-xl p-3 shadow-xl">
                  <p className="text-[11px] font-semibold text-paper">+XX projetos entregues</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <h3 className="font-display text-2xl font-bold text-paper">
                [Nome do instrutor]
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                [Espaço editável: escreva aqui a biografia — experiência com criação de
                sites, uso profissional de inteligência artificial e trajetória com
                vendas digitais.]
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {SKILLS.map(({ icon: Icon, label }) => (
                  <div key={label} className="glass flex items-center gap-3 rounded-xl p-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-neon/20 to-violet/20 border border-white/10">
                      <Icon className="h-5 w-5 text-cyan" strokeWidth={1.8} />
                    </div>
                    <span className="text-xs font-medium text-paper/90 sm:text-sm">{label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
