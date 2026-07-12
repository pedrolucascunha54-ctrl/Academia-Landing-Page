import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import Eyebrow from "./ui/Eyebrow";

const STEPS = [
  {
    n: "01",
    title: "Escolha o nicho",
    text: "Encontre segmentos que precisam de sites e possuem capacidade de contratação.",
  },
  {
    n: "02",
    title: "Crie a estrutura",
    text: "Use ChatGPT e Claude para planejar páginas, seções, textos, ofertas e chamadas para ação.",
  },
  {
    n: "03",
    title: "Produza com IA",
    text: "Construa o site utilizando ferramentas visuais, inteligência artificial e modelos prontos.",
  },
  {
    n: "04",
    title: "Encontre clientes",
    text: "Utilize estratégias orgânicas para localizar empresas e iniciar conversas comerciais.",
  },
  {
    n: "05",
    title: "Apresente e feche",
    text: "Mostre o valor do projeto, envie sua proposta e conduza o cliente até o fechamento.",
  },
];

export default function HowItWorks() {
  return (
    <section id="metodo" className="relative w-full py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(0,191,255,0.08),transparent_50%)]" />
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>O método</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-paper sm:text-4xl">
            Um método completo, da primeira ideia ao pagamento do cliente
          </h2>
        </Reveal>

        <div className="relative mx-auto mt-20 max-w-3xl">
          <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-neon via-violet to-transparent" />

          <div className="space-y-8">
            {STEPS.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.08}>
                <div className="relative flex gap-6 pl-0">
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#020611] border-2 border-cyan/50 font-display text-sm font-bold text-cyan shadow-[0_0_20px_rgba(37,230,255,0.35)]">
                    {step.n}
                  </div>
                  <div className="glass flex-1 rounded-2xl p-6">
                    <h3 className="font-display text-lg font-semibold text-paper">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
