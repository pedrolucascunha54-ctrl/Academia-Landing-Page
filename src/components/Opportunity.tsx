import { motion } from "framer-motion";
import { Globe, MapPin, ShoppingBag, TrendingUp } from "lucide-react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import CTAButton from "./ui/CTAButton";
import Reveal from "./ui/Reveal";

const VERBS = ["Criar", "Oferecer", "Vender"];

const STACK = [
  { icon: Globe, title: "Site profissional", note: "Criado com IA", soon: false },
  { icon: ShoppingBag, title: "Loja virtual", note: "Nuvemshop", soon: false },
  { icon: MapPin, title: "Presença no Google", note: "Perfil da empresa + SEO local", soon: false },
  { icon: TrendingUp, title: "Gestão de tráfego", note: "Aulas em breve no treinamento", soon: true },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Opportunity() {
  return (
    <section id="oportunidade" className="relative w-full overflow-hidden bg-sand py-24 sm:py-32">
      <Container>
        <div className="flex flex-wrap items-baseline gap-x-6 gap-y-1 border-b border-ink/15 pb-8 sm:gap-x-10">
          {VERBS.map((verb, i) => (
            <motion.span
              key={verb}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease }}
              className="font-display text-6xl font-extrabold uppercase leading-none tracking-tight text-ink sm:text-8xl lg:text-[8.5rem]"
            >
              {verb}
              <span className="text-amber-deep">.</span>
            </motion.span>
          ))}
        </div>

        <div className="mt-16 grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              index="02"
              eyebrow="A oportunidade"
              title="Um cliente. Mais de uma solução."
              intro={
                <>
                  Quem só sabe fazer site tem uma coisa para oferecer. Quem sabe fazer site, loja
                  virtual e presença no Google consegue montar uma proposta mais completa para a{" "}
                  <strong className="font-semibold text-ink">mesma empresa</strong> — e, quando fizer
                  sentido, manter serviços recorrentes.
                </>
              }
            />
            <Reveal delay={0.1} className="mt-8 space-y-4 text-base leading-relaxed text-ink-soft">
              <p>
                Esse é o centro do treinamento: você não aprende só uma habilidade técnica. Aprende a
                enxergar o que uma empresa precisa, a apresentar a solução e a conduzir a conversa
                até o fechamento.
              </p>
              <p className="text-sm text-stone">
                Formato e valor de cada contrato dependem do cliente, do projeto e da sua negociação.
              </p>
            </Reveal>
            <Reveal delay={0.15} className="mt-9">
              <CTAButton variant="ink">Quero ter mais serviços para oferecer</CTAButton>
            </Reveal>
          </div>

          <div className="relative">
            <div className="rounded-[1.75rem] border border-ink/10 bg-canvas p-5 shadow-[0_30px_80px_-40px_rgba(22,24,27,0.45)] sm:p-7">
              <div className="flex items-center justify-between border-b border-line pb-4">
                <p className="font-mono-tech text-[11px] uppercase tracking-[0.18em] text-stone">
                  Proposta · mesma empresa
                </p>
                <span className="h-2.5 w-2.5 rounded-full bg-amber" aria-hidden="true" />
              </div>
              <ul className="mt-2">
                {STACK.map(({ icon: Icon, title, note, soon }, i) => (
                  <motion.li
                    key={title}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: 0.15 + i * 0.15, ease }}
                    className="flex items-center gap-4 border-b border-dashed border-line py-4 last:border-0"
                  >
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                        soon ? "border border-dashed border-amber-deep/50 text-amber-deep" : "bg-ink text-amber"
                      }`}
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-semibold text-ink">{title}</span>
                      <span className="block text-sm text-stone">{note}</span>
                    </span>
                    <span className="font-display text-2xl font-bold text-ink/25" aria-hidden="true">
                      {i === 0 ? "" : "+"}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <p className="mt-4 text-center font-mono-tech text-[11px] uppercase tracking-[0.16em] text-stone">
              Site + Google + Tráfego = uma oferta mais completa
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
