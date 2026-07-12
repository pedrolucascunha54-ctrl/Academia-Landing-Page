import { Flame, Rocket, PackageX } from "lucide-react";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";

const CARDS = [
  {
    icon: Flame,
    title: "Alta demanda",
    text: "Negócios locais, profissionais liberais e empresas precisam melhorar sua presença digital.",
  },
  {
    icon: Rocket,
    title: "Produção acelerada",
    text: "Utilize inteligência artificial para criar estruturas, textos, imagens e páginas com mais velocidade.",
  },
  {
    icon: PackageX,
    title: "Sem estoque",
    text: "Você vende um serviço digital, define seus preços e pode trabalhar de qualquer lugar.",
  },
];

export default function Opportunity() {
  return (
    <section className="relative w-full py-24 sm:py-28">
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold leading-tight text-paper sm:text-4xl">
            Empresas precisam de sites. Você pode aprender a{" "}
            <span className="text-gradient">entregar essa solução</span>.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            Todos os dias, profissionais, comércios e empresas perdem clientes por não
            possuírem um site profissional. Com as ferramentas certas, você pode criar
            soluções completas em menos tempo e transformar essa demanda em uma nova
            fonte de renda.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {CARDS.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.1}>
              <div className="glass group h-full rounded-2xl p-7 transition-transform hover:-translate-y-1.5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-neon/20 to-violet/20 border border-white/10">
                  <Icon className="h-6 w-6 text-cyan" strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-paper">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
