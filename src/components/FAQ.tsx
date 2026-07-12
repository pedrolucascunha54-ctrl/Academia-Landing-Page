import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import Eyebrow from "./ui/Eyebrow";

const FAQS = [
  {
    q: "Preciso saber programar?",
    a: "Não. O treinamento começa pelos fundamentos e mostra como utilizar ferramentas de inteligência artificial e construção visual.",
  },
  {
    q: "Preciso investir em anúncios?",
    a: "Não. O método possui estratégias de prospecção orgânica. Custos opcionais, como domínio ou ferramentas, podem existir de acordo com cada projeto.",
  },
  {
    q: "Posso fazer pelo celular?",
    a: "Algumas etapas podem ser realizadas pelo celular, mas um computador proporciona uma experiência mais completa para desenvolvimento e edição.",
  },
  {
    q: "Quanto posso cobrar por um site?",
    a: "O valor depende do tipo de projeto, complexidade, prazo, mercado e serviços incluídos.",
  },
  {
    q: "Vou conseguir ganhar R$1.000 por dia?",
    a: "O treinamento apresenta estratégias e possibilidades comerciais, mas não garante resultados financeiros. O desempenho depende da aplicação, qualidade do serviço, prospecção e capacidade de fechamento.",
  },
  {
    q: "Como recebo o acesso?",
    a: "O acesso deve ser liberado após a confirmação do pagamento, conforme a plataforma utilizada.",
  },
  {
    q: "O conteúdo recebe atualizações?",
    a: "[Espaço editável: informe aqui as condições reais de atualização do conteúdo.]",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="duvidas" className="relative w-full py-24 sm:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Dúvidas</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-paper sm:text-4xl">
            Perguntas frequentes
          </h2>
        </Reveal>

        <div className="mx-auto mt-14 max-w-2xl space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={Math.min(i * 0.05, 0.3)}>
                <div className="glass overflow-hidden rounded-2xl">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                  >
                    <span className="font-display text-sm font-semibold text-paper sm:text-base">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-muted transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-cyan" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-sm leading-relaxed text-muted sm:px-6">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
