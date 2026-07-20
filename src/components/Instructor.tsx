import { Code2, Bot, Smartphone, LayoutTemplate } from "lucide-react";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import ScrollVideoSection from "./ScrollVideoSection";
import ScrollVideoCarousel from "./ui/ScrollVideoCarousel";

const WORK_VIDEOS = [
  { src: "/videos/obra-01.mp4", poster: "/images/obra-01-poster.jpg" },
  { src: "/videos/obra-02.mp4", poster: "/images/obra-02-poster.jpg" },
  { src: "/videos/obra-03.mp4", poster: "/images/obra-03-poster.jpg" },
];

const INSTRUCTOR_NAME = "Pedro Lucas";
const INSTRUCTOR_BIO =
  "Pedro Lucas era pedreiro. Trabalhava na obra, carregando tijolo e levantando parede, sem nenhuma experiência com tecnologia ou programação. A virada aconteceu quando descobriu que dava pra criar sites profissionais usando inteligência artificial — só com método, sem faculdade e sem escrever uma linha de código. Hoje vive de criar e vender sites com IA, e criou a Academia Sites com IA pra ensinar esse mesmo caminho pra quem, assim como ele, quer uma nova fonte de renda sem vir de uma área técnica.";

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
        heading="De pedreiro a criador de sites com IA"
        muted={false}
        loop={false}
        poster="/images/pedro-lucas.jpg"
        fit="contain"
      >
        <p className="max-w-md text-base leading-relaxed text-muted sm:text-lg">
          Toca o play e ouve a história de quem trocou a obra pelos sites com IA —
          do jeito que aconteceu, sem enfeite.
        </p>
      </ScrollVideoSection>

      <section className="relative w-full py-24 sm:py-28">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <Reveal>
              <div className="relative mx-auto max-w-xs">
                <div className="absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-neon/20 to-violet/20 blur-[90px]" />
                <div className="glass glow-border relative aspect-square overflow-hidden rounded-3xl">
                  <img
                    src="/images/pedro-lucas.jpg"
                    alt={INSTRUCTOR_NAME}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="glass absolute -bottom-5 -right-5 rounded-xl p-3 shadow-xl">
                  <p className="text-[11px] font-semibold text-paper">+XX projetos entregues</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <h3 className="font-display text-2xl font-bold text-paper">
                {INSTRUCTOR_NAME}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                {INSTRUCTOR_BIO}
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

      <section className="relative w-full bg-[#020611]">
        <ScrollVideoCarousel items={WORK_VIDEOS} label="De onde eu vim" />
      </section>
    </>
  );
}
