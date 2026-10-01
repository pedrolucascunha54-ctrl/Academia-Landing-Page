import { motion } from "framer-motion";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import CTAButton from "./ui/CTAButton";
import { PRICE_CASH, PRICE_INSTALLMENTS } from "../lib/config";

const LINES = ["Aprenda a criar.", "Aprenda a oferecer.", "Aprenda a vender."];

export default function FinalCTA() {
  return (
    <section className="blueprint relative w-full overflow-hidden py-24 sm:py-32">
      <Container>
        <h2 className="font-display text-[3rem] font-extrabold uppercase leading-[0.9] tracking-tight text-ink sm:text-7xl lg:text-[6.5rem]">
          {LINES.map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className={`block ${i === 2 ? "text-amber-deep" : ""}`}
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h2>

        <Reveal delay={0.2} className="mt-10 grid items-end gap-8 border-t border-line pt-10 lg:grid-cols-[1fr_auto]">
          <p className="max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            Conhecimento, ferramentas, suporte e estratégia comercial para você ampliar os serviços
            que oferece para empresas. {PRICE_INSTALLMENTS} ou {PRICE_CASH} à vista.
          </p>
          <CTAButton size="lg" variant="ink">
            Quero começar agora
          </CTAButton>
        </Reveal>
      </Container>
    </section>
  );
}
