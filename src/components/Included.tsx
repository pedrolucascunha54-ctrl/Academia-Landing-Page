import { motion } from "framer-motion";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";

const ITEMS = [
  {
    title: "Curso",
    text: "Aprenda a criar sites utilizando IA e a transformar essa habilidade em um serviço que pode ser oferecido para empresas.",
    soon: false,
  },
  {
    title: "E-commerce com Nuvemshop",
    text: "Aprenda a criar lojas virtuais do zero e amplie o tipo de projeto que pode oferecer.",
    soon: false,
  },
  {
    title: "Google / SEO local",
    text: "Aprenda a estruturar e otimizar a presença de empresas no Google e transforme esse conhecimento em mais uma solução comercial.",
    soon: false,
  },
  {
    title: "Grupo de suporte",
    text: "Acesso ao grupo de suporte e acompanhamento conforme as condições atuais do treinamento.",
    soon: false,
  },
  {
    title: "Scripts de vendas",
    text: "Meus scripts de abordagem, follow-up e respostas prontas para ajudar na comunicação comercial.",
    soon: false,
  },
  {
    title: "Gestão de tráfego",
    text: "Novas aulas de Gestão de Tráfego serão adicionadas futuramente.",
    soon: true,
  },
];

export default function Included() {
  return (
    <section id="incluso" className="relative w-full py-24 sm:py-32">
      <Container>
        <SectionHeading
          index="10"
          eyebrow="O que está incluso"
          title="Tudo o que você recebe."
          intro="O que já está disponível e o que ainda vai chegar — sem letra miúda."
        />

        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item, i) => (
            <li key={item.title} className={`p-6 sm:p-8 ${item.soon ? "bg-sand" : "bg-canvas"}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
              <div className="flex items-center justify-between gap-3">
                <span className="font-display text-5xl font-extrabold leading-none text-amber">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`rounded-full px-2.5 py-1 font-mono-tech text-[10px] uppercase tracking-[0.16em] ${
                    item.soon ? "border border-dashed border-amber-deep/60 text-amber-deep" : "bg-[#3f8a5a]/12 text-[#2f6b45]"
                  }`}
                >
                  {item.soon ? "Em breve" : "Disponível"}
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold uppercase leading-tight text-ink">{item.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{item.text}</p>
              </motion.div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
