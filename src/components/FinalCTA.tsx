import { ArrowRight } from "lucide-react";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import { CHECKOUT_URL } from "../lib/config";

export default function FinalCTA() {
  return (
    <section className="relative w-full overflow-hidden py-28 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_50%,rgba(232,163,61,0.16),transparent_45%),radial-gradient(circle_at_80%_50%,rgba(184,85,46,0.18),transparent_45%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/10 blur-[130px]" />

      <Container className="text-center">
        <Reveal>
          <div className="mx-auto mb-8 flex h-16 w-24 items-center justify-center rounded-xl border border-white/10 bg-white/5">
            <div className="h-2 w-14 rounded-full bg-gradient-to-r from-neon to-violet" />
          </div>
          <h2 className="mx-auto max-w-3xl font-display text-3xl font-bold leading-tight text-paper sm:text-4xl lg:text-5xl">
            A inteligência artificial já está mudando a criação de sites. Agora você
            pode aprender a <span className="text-gradient">vender essa habilidade</span>.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Construa projetos profissionais, desenvolva sua abordagem comercial e comece
            a buscar seus primeiros clientes.
          </p>

          <a
            href={CHECKOUT_URL}
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon to-violet px-10 py-5 text-base font-bold text-[#0f1214] shadow-[0_0_45px_rgba(232,163,61,0.45)] transition-transform hover:scale-105"
          >
            QUERO COMEÇAR AGORA
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>

          <p className="mt-5 text-xs text-muted">
            Não é necessário conhecimento prévio em programação.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
