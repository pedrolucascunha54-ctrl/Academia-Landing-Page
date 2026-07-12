import { ShieldAlert } from "lucide-react";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";

export default function WhoNotFor() {
  return (
    <section className="relative w-full py-20">
      <Container>
        <Reveal className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center sm:p-10">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5">
            <ShieldAlert className="h-6 w-6 text-muted" strokeWidth={1.6} />
          </div>
          <h2 className="mt-5 font-display text-2xl font-bold text-paper sm:text-3xl">
            Este método não é um botão mágico
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            O treinamento não é indicado para quem procura dinheiro automático, não
            pretende estudar, não deseja prospectar clientes ou acredita que resultados
            acontecem sem prática e execução.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
