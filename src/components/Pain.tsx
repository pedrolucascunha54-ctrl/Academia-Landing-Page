import { motion } from "framer-motion";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

const PAINS = [
  "Você quer trabalhar com internet, mas não sabe por onde começar.",
  "Sabe que as empresas precisam de presença digital, mas não sabe transformar isso em serviço.",
  "Até consegue criar alguma coisa — e trava na hora de abordar um cliente.",
  "Não sabe o que oferecer para uma empresa, nem como montar uma proposta.",
  "A conversa esfria e você não sabe fazer follow-up sem parecer insistente.",
  "Ouve “vou pensar” ou “tá caro” e não sabe o que responder.",
  "Depende de um único serviço — e cada cliente vira um projeto só.",
];

export default function Pain() {
  return (
    <section id="dor" className="relative w-full py-24 sm:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              index="01"
              eyebrow="O problema"
              title={
                <>
                  As empresas precisam de presença digital.{" "}
                  <span className="text-stone">O difícil é transformar isso em trabalho.</span>
                </>
              }
            />
          </div>

          <div>
            <ol className="border-t border-line">
              {PAINS.map((pain, i) => (
                <motion.li
                  key={pain}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: Math.min(i * 0.05, 0.25), ease: [0.22, 1, 0.36, 1] }}
                  className="group flex gap-5 border-b border-line py-5 sm:gap-8 sm:py-6"
                >
                  <span className="pt-1 font-mono-tech text-xs text-stone transition-colors group-hover:text-amber-deep">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-lg leading-snug text-ink sm:text-xl">{pain}</p>
                </motion.li>
              ))}
            </ol>

            <Reveal className="mt-10 rounded-2xl bg-ink p-7 sm:p-9">
              <p className="font-display text-2xl font-bold uppercase leading-tight text-paper sm:text-3xl">
                Não é falta de talento. <span className="text-amber">É falta de método</span> — para
                criar, para oferecer e para vender.
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
