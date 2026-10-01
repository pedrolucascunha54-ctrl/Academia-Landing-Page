import { Check, X } from "lucide-react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

const FOR = [
  "Quer começar a vender serviços digitais para empresas.",
  "Não sabe programar e quer usar IA de forma profissional.",
  "Quer aprender a criar sites, lojas virtuais e presença no Google.",
  "Trava na hora de abordar, fazer follow-up ou responder objeções.",
  "Já trabalha com design, social media ou marketing e quer ampliar os serviços.",
  "Quer vender mais de uma solução para o mesmo cliente.",
];

const NOT_FOR = [
  "Quem procura dinheiro automático ou resultado garantido.",
  "Quem não pretende estudar nem praticar.",
  "Quem não quer conversar com empresas e prospectar clientes.",
];

export default function Audience() {
  return (
    <section id="para-quem" className="relative w-full bg-sand py-24 sm:py-32">
      <Container>
        <SectionHeading index="12" eyebrow="Para quem é" title="Esse treinamento é para você que…" />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="rounded-[1.75rem] bg-canvas p-7 sm:p-10">
            <ul className="space-y-4">
              {FOR.map((item) => (
                <li key={item} className="flex items-start gap-3.5 text-base text-ink sm:text-lg">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink text-amber">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="rounded-[1.75rem] border border-dashed border-ink/25 p-7 sm:p-10">
            <p className="font-display text-2xl font-bold uppercase leading-tight text-ink">
              Não é um botão mágico.
            </p>
            <p className="mt-2 text-sm text-stone">Este treinamento não é indicado para:</p>
            <ul className="mt-6 space-y-4">
              {NOT_FOR.map((item) => (
                <li key={item} className="flex items-start gap-3.5 text-base text-ink-soft">
                  <X className="mt-1 h-4 w-4 shrink-0 text-rust" strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
