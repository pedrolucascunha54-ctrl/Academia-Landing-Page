import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import Eyebrow from "./ui/Eyebrow";

const NICHES = [
  { name: "Advocacia", gradient: "from-neon/25 to-transparent" },
  { name: "Odontologia", gradient: "from-cyan/25 to-transparent" },
  { name: "Restaurante", gradient: "from-violet/25 to-transparent" },
  { name: "Estética", gradient: "from-neon/25 to-transparent" },
  { name: "Energia solar", gradient: "from-cyan/25 to-transparent" },
  { name: "Contabilidade", gradient: "from-violet/25 to-transparent" },
  { name: "Personal trainer", gradient: "from-neon/25 to-transparent" },
  { name: "Imobiliária", gradient: "from-cyan/25 to-transparent" },
];

export default function Results() {
  return (
    <section id="resultados" className="relative w-full py-24 sm:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Demonstrações</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-paper sm:text-4xl">
            Projetos criados com o método
          </h2>
        </Reveal>

        <div className="mt-14 -mx-5 overflow-x-auto px-5 pb-4 sm:mx-0 sm:overflow-visible sm:px-0">
          <div className="flex gap-5 sm:grid sm:grid-cols-4 sm:gap-5">
            {NICHES.map((niche, i) => (
              <Reveal key={niche.name} delay={Math.min(i * 0.05, 0.3)} className="w-56 shrink-0 sm:w-auto">
                <div className="glass group h-full overflow-hidden rounded-2xl transition-transform hover:-translate-y-1.5">
                  <div className={`relative h-40 w-full bg-gradient-to-br ${niche.gradient} bg-[#050a1a]`}>
                    <div className="absolute inset-4 flex flex-col rounded-lg border border-white/15 bg-white/5 backdrop-blur-sm">
                      <div className="flex items-center gap-1 border-b border-white/10 px-2 py-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
                        <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
                      </div>
                      <div className="flex flex-1 flex-col justify-center gap-1.5 p-3">
                        <div className="h-2 w-2/3 rounded-full bg-white/30" />
                        <div className="h-1.5 w-1/2 rounded-full bg-white/15" />
                        <div className="mt-2 h-5 w-16 rounded-full bg-gradient-to-r from-neon to-violet" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-sm font-semibold text-paper">{niche.name}</h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.15} className="mx-auto mt-8 max-w-2xl text-center">
          <p className="text-xs leading-relaxed text-muted/80">
            Os exemplos acima representam possibilidades de projetos que podem ser
            desenvolvidos. Resultados individuais podem variar.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
