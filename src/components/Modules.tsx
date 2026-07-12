import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import Eyebrow from "./ui/Eyebrow";
import { CHECKOUT_URL } from "../lib/config";

const MODULES = [
  {
    title: "Fundamentos do mercado de sites",
    items: [
      "Tipos de sites que você pode vender.",
      "Como escolher um nicho.",
      "Quanto cobrar.",
      "Como montar seus pacotes.",
      "Como trabalhar mesmo sem experiência.",
    ],
  },
  {
    title: "Criação de sites com ChatGPT",
    items: [
      "Prompts para estruturar projetos.",
      "Criação de títulos e textos.",
      "Planejamento de páginas.",
      "Copywriting para conversão.",
      "Revisão e melhoria de conteúdo.",
    ],
  },
  {
    title: "Desenvolvimento com Claude",
    items: [
      "Criação e correção de código.",
      "Construção de componentes.",
      "Responsividade.",
      "Integrações.",
      "Otimização do projeto.",
    ],
  },
  {
    title: "Conteúdo visual com Flow",
    items: [
      "Vídeos para páginas.",
      "Animações de produtos.",
      "Conteúdo para apresentação.",
      "Demonstrações comerciais.",
      "Elementos para anúncios e redes sociais.",
    ],
  },
  {
    title: "Construção do site",
    items: [
      "Hero section.",
      "Serviços.",
      "Benefícios.",
      "Depoimentos.",
      "Perguntas frequentes.",
      "Formulários.",
      "Botões de WhatsApp.",
      "Publicação e domínio.",
    ],
  },
  {
    title: "Prospecção de clientes",
    items: [
      "Como encontrar empresas.",
      "Como analisar perfis e sites.",
      "Como iniciar o contato.",
      "Mensagens de abordagem.",
      "Prospecção por Instagram.",
      "Prospecção por WhatsApp.",
      "Prospecção pelo Google Maps.",
      "Follow-up sem parecer insistente.",
    ],
  },
  {
    title: "Apresentação e fechamento",
    items: [
      "Como apresentar o projeto.",
      "Como criar propostas.",
      "Como responder objeções.",
      "Como negociar valores.",
      "Como solicitar entrada.",
      "Como organizar alterações.",
      "Como entregar o site.",
    ],
  },
  {
    title: "Escala e organização",
    items: [
      "Modelos reutilizáveis.",
      "Processo de atendimento.",
      "Automação de tarefas.",
      "Indicações.",
      "Planos de manutenção.",
      "Venda de serviços adicionais.",
    ],
  },
];

export default function Modules() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="conteudo" className="relative w-full py-24 sm:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Conteúdo do treinamento</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-paper sm:text-4xl">
            Do zero ao seu primeiro projeto vendido
          </h2>
        </Reveal>

        <div className="mx-auto mt-14 max-w-3xl space-y-3">
          {MODULES.map((mod, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={mod.title} delay={Math.min(i * 0.04, 0.3)}>
                <div className="glass overflow-hidden rounded-2xl">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-7"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-neon/20 to-violet/20 border border-white/10 font-display text-sm font-bold text-cyan">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 font-display text-base font-semibold text-paper sm:text-lg">
                      {mod.title}
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
                        <ul className="space-y-2.5 px-5 pb-6 pl-[4.5rem] sm:px-7 sm:pl-[5.25rem]">
                          {mod.items.map((item) => (
                            <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
                              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <a
            href={CHECKOUT_URL}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon to-violet px-8 py-4 text-sm font-bold text-[#020611] shadow-[0_0_35px_rgba(0,191,255,0.4)] transition-transform hover:scale-105 sm:text-base"
          >
            QUERO TER ACESSO ÀS AULAS
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
