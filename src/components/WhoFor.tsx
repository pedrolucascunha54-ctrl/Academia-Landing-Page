import { CheckCircle2, Laptop, MessageCircle } from "lucide-react";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";

const POINTS = [
  "Quer começar a trabalhar com serviços digitais.",
  "Não sabe programar.",
  "Deseja utilizar inteligência artificial profissionalmente.",
  "Quer aprender a criar sites modernos.",
  "Precisa encontrar uma nova fonte de renda.",
  "Deseja vender sem depender de anúncios pagos.",
  "Já trabalha com design, social media ou marketing.",
  "Quer adicionar sites ao seu catálogo de serviços.",
];

export default function WhoFor() {
  return (
    <section className="relative w-full py-24 sm:py-28">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="font-display text-3xl font-bold leading-tight text-paper sm:text-4xl">
              Esse treinamento é para você que…
            </h2>
            <ul className="mt-8 space-y-4">
              {POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan" strokeWidth={1.8} />
                  <span className="text-sm leading-relaxed text-paper/90 sm:text-base">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative mx-auto max-w-sm">
              <div className="absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/15 blur-[100px]" />
              <div className="glass glow-border rounded-2xl p-6">
                <div className="flex items-center gap-1.5 border-b border-white/10 pb-3">
                  <Laptop className="h-4 w-4 text-cyan" />
                  <span className="text-xs text-muted">Área de trabalho</span>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="h-2.5 w-2/3 rounded-full bg-gradient-to-r from-cyan to-violet" />
                  <div className="h-2 w-full rounded-full bg-white/10" />
                  <div className="h-2 w-4/5 rounded-full bg-white/10" />
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <div className="h-16 rounded-lg border border-white/10 bg-gradient-to-br from-neon/20 to-transparent" />
                    <div className="h-16 rounded-lg border border-white/10 bg-gradient-to-br from-violet/20 to-transparent" />
                  </div>
                </div>
              </div>

              <div className="glass absolute -bottom-6 -right-6 flex items-center gap-2 rounded-xl p-3 shadow-xl">
                <MessageCircle className="h-4 w-4 text-green-400" />
                <span className="text-[11px] font-medium text-paper">Nova mensagem de cliente</span>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
