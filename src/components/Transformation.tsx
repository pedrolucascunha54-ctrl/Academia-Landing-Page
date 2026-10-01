import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";

const PAIRS = [
  ["Eu não sei o que oferecer.", "Tenho mais soluções para apresentar para empresas."],
  ["Não sei criar sites.", "Consigo criar sites."],
  ["Só conheço um tipo de projeto.", "Consigo criar e-commerce."],
  ["Não sei nada de Google.", "Consigo estruturar a presença da empresa no Google."],
  ["Tenho poucos serviços.", "Consigo oferecer tráfego — com as novas aulas."],
  ["Não sei abordar empresas.", "Tenho scripts para abordagem."],
  ["Não sei fazer follow-up.", "Tenho follow-ups prontos para adaptar."],
  ["Não sei vender.", "Tenho respostas para as objeções mais comuns."],
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Transformation() {
  return (
    <section id="transformacao" className="relative w-full bg-sand py-24 sm:py-32">
      <Container>
        <SectionHeading
          index="06"
          eyebrow="A transformação"
          title="Do “não sei por onde começar” para “sei o que oferecer”."
        />

        <div className="mt-14">
          <div className="hidden grid-cols-[1fr_auto_1fr] gap-6 border-b border-ink/15 pb-3 font-mono-tech text-[11px] uppercase tracking-[0.2em] sm:grid">
            <span className="text-stone">Antes</span>
            <span className="w-6" />
            <span className="text-amber-deep">Depois do treinamento</span>
          </div>
          <ul>
            {PAIRS.map(([before, after], i) => (
              <li
                key={before}
                className="grid gap-1 border-b border-ink/15 py-5 sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-6"
              >
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                  className="text-base text-stone sm:text-lg"
                >
                  <span className="mr-2 font-mono-tech text-[10px] uppercase tracking-[0.18em] sm:hidden">
                    Antes ·
                  </span>
                  <span className="line-through decoration-stone/40">{before}</span>
                </motion.p>
                <ArrowRight className="hidden h-5 w-5 text-amber-deep sm:block" aria-hidden="true" />
                <motion.p
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.03, ease }}
                  className="font-display text-xl font-bold uppercase leading-tight text-ink sm:text-2xl"
                >
                  {after}
                </motion.p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-stone">
            As aulas de gestão de tráfego ainda serão gravadas — veja mais abaixo.
          </p>
        </div>
      </Container>
    </section>
  );
}
