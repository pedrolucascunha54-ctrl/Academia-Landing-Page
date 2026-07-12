import { ArrowUpRight } from "lucide-react";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import Eyebrow from "./ui/Eyebrow";

const TYPES = [
  { name: "Landing pages", desc: "Páginas de alta conversão para ofertas e campanhas.", gradient: "from-neon/30 to-transparent" },
  { name: "Sites institucionais", desc: "Presença digital completa para empresas.", gradient: "from-violet/30 to-transparent" },
  { name: "Portfólios", desc: "Vitrine profissional para criadores e freelancers.", gradient: "from-cyan/30 to-transparent" },
  { name: "Sites para advogados", desc: "Autoridade e confiança para escritórios de advocacia.", gradient: "from-neon/30 to-transparent" },
  { name: "Sites para clínicas", desc: "Presença digital para clínicas e profissionais da saúde.", gradient: "from-violet/30 to-transparent" },
  { name: "Sites para restaurantes", desc: "Cardápio, ambiente e reservas em um só lugar.", gradient: "from-cyan/30 to-transparent" },
  { name: "Prestadores de serviços", desc: "Páginas para autônomos e pequenos negócios locais.", gradient: "from-neon/30 to-transparent" },
  { name: "Páginas de captura", desc: "Estruturas para gerar leads qualificados.", gradient: "from-violet/30 to-transparent" },
  { name: "Cardápios digitais", desc: "Menus interativos e otimizados para pedidos.", gradient: "from-cyan/30 to-transparent" },
  { name: "Páginas de agendamento", desc: "Fluxos simples para marcação de horários.", gradient: "from-neon/30 to-transparent" },
];

export default function SiteTypes() {
  return (
    <section className="relative w-full py-24 sm:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Portfólio de projetos</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-paper sm:text-4xl">
            Projetos que você poderá criar e oferecer
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TYPES.map((type, i) => (
            <Reveal key={type.name} delay={Math.min(i * 0.04, 0.3)}>
              <div className="glass group h-full overflow-hidden rounded-2xl transition-transform hover:-translate-y-1.5">
                <div className={`relative h-36 w-full bg-gradient-to-br ${type.gradient} bg-[#050a1a]`}>
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
                      backgroundSize: "18px 18px",
                    }}
                  />
                  <div className="absolute inset-4 rounded-lg border border-white/15 bg-white/5 backdrop-blur-sm">
                    <div className="flex items-center gap-1 border-b border-white/10 px-2 py-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
                      <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
                      <span className="h-1.5 w-1.5 rounded-full bg-white/30" />
                    </div>
                    <div className="space-y-1.5 p-2.5">
                      <div className="h-1.5 w-1/2 rounded-full bg-white/25" />
                      <div className="h-1.5 w-3/4 rounded-full bg-white/15" />
                      <div className="h-1.5 w-2/3 rounded-full bg-white/15" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-base font-semibold text-paper">{type.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{type.desc}</p>
                  <button className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-cyan transition-colors hover:text-paper">
                    Ver exemplo
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
