import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";

const FAQS = [
  {
    q: "Preciso saber programar?",
    a: "Não. Você aprende a usar ferramentas de IA (ChatGPT, Claude e Flow) para planejar, escrever e construir os sites. O treinamento começa pelos fundamentos.",
  },
  {
    q: "Preciso já trabalhar com marketing?",
    a: "Não. O conteúdo foi pensado para quem está começando. Quem já trabalha com design, social media ou marketing pode usar o treinamento para ampliar os serviços que oferece.",
  },
  {
    q: "O treinamento serve para quem está começando?",
    a: "Sim. Você começa pelos fundamentos e segue até a parte comercial: como abordar, apresentar e conduzir a conversa com o cliente.",
  },
  {
    q: "Vou aprender a criar e-commerce?",
    a: "Sim. Você aprende a criar uma loja virtual do zero — mais um tipo de projeto para oferecer às empresas.",
  },
  {
    q: "Vou aprender Nuvemshop?",
    a: "Sim. A criação de e-commerce é ensinada utilizando a Nuvemshop.",
  },
  {
    q: "Vou aprender Google?",
    a: "Sim. Você aprende a criar e configurar o Perfil da Empresa no Google, otimizar informações, categorias, serviços e descrição, cuidar da presença local e usar estratégias para conseguir avaliações genuínas. Não existe promessa de posição: o ranking é decidido pelo Google.",
  },
  {
    q: "Vou aprender a vender meus serviços?",
    a: "Sim. O treinamento inclui prospecção, apresentação, follow-up e resposta a objeções, com os meus scripts como base. A venda em si depende da sua prospecção, do seu serviço e da sua execução.",
  },
  {
    q: "O que são os scripts?",
    a: "São os meus modelos de mensagem para a primeira abordagem, apresentação do serviço, follow-up, dúvidas, objeções, retomada de conversas, condução e fechamento. Você adapta ao seu jeito e a cada cliente. Eles ajudam na comunicação, mas não garantem vendas.",
  },
  {
    q: "O grupo de suporte está incluso?",
    a: "Sim. Você tem acesso ao grupo de suporte e acompanhamento conforme as condições atuais do treinamento.",
  },
  {
    q: "Quando estarão disponíveis as aulas de Gestão de Tráfego?",
    a: "As aulas de Gestão de Tráfego ainda serão gravadas. Elas vão entrar na área de conteúdo assim que estiverem prontas — hoje elas não fazem parte do conteúdo disponível.",
  },
  {
    q: "Preciso investir em anúncios?",
    a: "Não para começar. O treinamento ensina prospecção orgânica. Custos opcionais, como domínio ou ferramentas, podem existir de acordo com cada projeto.",
  },
  {
    q: "Posso fazer pelo celular?",
    a: "Algumas etapas podem ser feitas pelo celular, mas um computador proporciona uma experiência mais completa para criar e editar os projetos.",
  },
  {
    q: "Como recebo o acesso?",
    a: "O pagamento é feito pela Cakto. O acesso é liberado após a confirmação do pagamento.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="duvidas" className="relative w-full py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading index="13" eyebrow="Dúvidas" title="Perguntas frequentes." />
          </div>

          <div className="border-t border-line">
            {FAQS.map((item, i) => {
              const isOpen = open === i;
              const panelId = `faq-${i}`;
              return (
                <div key={item.q} className="border-b border-line">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="flex w-full items-center justify-between gap-6 py-5 text-left"
                    >
                      <span className="text-base font-semibold text-ink sm:text-lg">{item.q}</span>
                      <Plus
                        className={`h-5 w-5 shrink-0 text-ink transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                      />
                    </button>
                  </h3>
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
                        <p className="max-w-2xl pb-6 text-[15px] leading-relaxed text-ink-soft">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
