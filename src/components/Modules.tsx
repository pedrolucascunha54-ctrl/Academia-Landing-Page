import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import CTAButton from "./ui/CTAButton";

type Module = { title: string; tag?: "Novo" | "Em breve"; items: string[] };

const MODULES: Module[] = [
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
    title: "E-commerce com Nuvemshop",
    tag: "Novo",
    items: [
      "Criação de uma loja virtual do zero na Nuvemshop.",
      "Como oferecer a loja como mais uma solução para empresas.",
      "Como apresentar site e loja virtual juntos.",
    ],
  },
  {
    title: "Google / SEO local",
    tag: "Novo",
    items: [
      "Criação e configuração do Perfil da Empresa no Google.",
      "Otimização das informações.",
      "Categorias e serviços.",
      "Descrição e presença local.",
      "Organização do perfil.",
      "Estratégias para avaliações genuínas.",
      "Como oferecer site + Google para a mesma empresa.",
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
  {
    title: "Gestão de tráfego",
    tag: "Em breve",
    items: [
      "Aulas que ainda serão gravadas e adicionadas à área de conteúdo.",
      "Hoje este módulo não faz parte do conteúdo disponível.",
    ],
  },
];

export default function Modules() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="modulos" className="relative w-full bg-sand py-24 sm:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              index="04"
              eyebrow="Conteúdo do treinamento"
              title="Módulo por módulo."
              intro="Da primeira página criada até a conversa de fechamento — agora com e-commerce e Google."
            />
            <Reveal delay={0.1} className="mt-9 hidden lg:block">
              <CTAButton variant="ink">Quero ter acesso às aulas</CTAButton>
            </Reveal>
          </div>

          <div className="border-t border-ink/15">
            {MODULES.map((mod, i) => {
              const isOpen = openIndex === i;
              const panelId = `modulo-${i}`;
              return (
                <div key={mod.title} className="border-b border-ink/15">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="group flex w-full items-center gap-4 py-5 text-left sm:gap-6"
                  >
                    <span className="w-8 shrink-0 font-mono-tech text-xs text-stone">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex flex-1 flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="font-display text-xl font-bold uppercase leading-tight text-ink transition-colors group-hover:text-amber-deep sm:text-2xl">
                        {mod.title}
                      </span>
                      {mod.tag && (
                        <span
                          className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
                            mod.tag === "Novo" ? "bg-ink text-amber" : "border border-dashed border-amber-deep/60 text-amber-deep"
                          }`}
                        >
                          {mod.tag}
                        </span>
                      )}
                    </span>
                    <Plus
                      className={`h-5 w-5 shrink-0 text-ink transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <ul className="space-y-2 pb-6 pl-12 sm:pl-14">
                          {mod.items.map((item) => (
                            <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-ink-soft">
                              <span className="mt-2.5 h-px w-3 shrink-0 bg-amber-deep" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        <Reveal className="mt-12 flex justify-center lg:hidden">
          <CTAButton variant="ink">Quero ter acesso às aulas</CTAButton>
        </Reveal>
      </Container>
    </section>
  );
}
