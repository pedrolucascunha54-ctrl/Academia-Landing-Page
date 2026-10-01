import { motion } from "framer-motion";
import { Check, Lock, Zap } from "lucide-react";
import Container from "./ui/Container";
import Eyebrow from "./ui/Eyebrow";
import CTAButton from "./ui/CTAButton";
import { PRICE_CASH, PRICE_INSTALLMENTS, PRICE_ORIGINAL } from "../lib/config";

const INCLUDES = [
  "Curso de criação de sites com IA",
  "E-commerce com Nuvemshop",
  "Google / SEO local",
  "Grupo de suporte",
  "Scripts de vendas",
  "Aulas de gestão de tráfego (em breve)",
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Pricing() {
  return (
    <section id="investimento" className="relative w-full bg-ink py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <Eyebrow index="11" tone="dark">
              Condição especial
            </Eyebrow>
            <h2 className="mx-auto mt-5 max-w-3xl font-display text-[2.4rem] font-bold uppercase leading-[0.95] tracking-tight text-paper sm:text-5xl lg:text-6xl">
              Entre no treinamento por bem menos que o valor anterior.
            </h2>
          </div>

          <div className="mt-14 overflow-hidden rounded-[2rem] bg-canvas lg:grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-7 sm:p-12">
              <p className="font-mono-tech text-[11px] uppercase tracking-[0.2em] text-stone">Valor anterior</p>
              <p className="relative mt-2 inline-block font-display text-4xl font-bold text-stone sm:text-5xl">
                De {PRICE_ORIGINAL}
                <motion.span
                  aria-hidden="true"
                  className="absolute left-0 right-0 top-1/2 h-[3px] origin-left bg-rust"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 0.2, ease }}
                />
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.6, ease }}
                className="mt-8"
              >
                <p className="font-mono-tech text-[11px] uppercase tracking-[0.2em] text-amber-deep">Por apenas</p>
                <p className="mt-2 font-display text-[3.4rem] font-extrabold leading-[0.9] tracking-tight text-ink sm:text-8xl">
                  {PRICE_INSTALLMENTS}
                </p>
                <p className="mt-4 text-lg text-ink-soft sm:text-xl">
                  ou <strong className="font-semibold text-ink">{PRICE_CASH} à vista</strong>
                </p>
              </motion.div>

              <div className="mt-10">
                <CTAButton size="lg" className="w-full sm:w-auto">
                  Quero entrar para o treinamento
                </CTAButton>
              </div>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-stone">
                <span className="inline-flex items-center gap-2">
                  <Lock className="h-4 w-4" aria-hidden="true" /> Pagamento seguro pela Cakto
                </span>
                <span className="inline-flex items-center gap-2">
                  <Zap className="h-4 w-4" aria-hidden="true" /> Acesso após a confirmação do pagamento
                </span>
              </div>
            </div>

            <div className="border-t border-line bg-sand p-7 sm:p-12 lg:border-l lg:border-t-0">
              <p className="font-mono-tech text-[11px] uppercase tracking-[0.2em] text-stone">Você recebe</p>
              <ul className="mt-6 space-y-4">
                {INCLUDES.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base text-ink">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink text-amber">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
