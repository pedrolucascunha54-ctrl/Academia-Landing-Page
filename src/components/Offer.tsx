import { CheckCircle2, ShieldCheck, Lock, Zap } from "lucide-react";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import { CHECKOUT_URL, PRICE_ORIGINAL, PRICE_PROMO, PRICE_INSTALLMENTS } from "../lib/config";

const INCLUDES = [
  "Curso completo",
  "Todos os módulos",
  "Bônus exclusivos",
  "Modelos e templates",
  "Atualizações do conteúdo",
  "Acesso imediato",
  "Comunidade de alunos",
];

export default function Offer() {
  return (
    <section className="relative w-full py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_20%,rgba(0,191,255,0.12),transparent_50%)]" />
      <Container>
        <Reveal className="mx-auto max-w-3xl">
          <div className="glass glow-border relative overflow-hidden rounded-3xl p-8 text-center shadow-[0_30px_100px_rgba(0,0,0,0.5)] sm:p-14">
            <div className="pointer-events-none absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-violet/25 blur-[100px]" />

            <span className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan">
              <Zap className="h-3.5 w-3.5" />
              Acesso à Academia Sites com IA
            </span>

            <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-paper sm:text-4xl">
              Comece agora sua jornada criando e vendendo sites com IA
            </h2>

            <ul className="mx-auto mt-8 grid max-w-md gap-3 text-left sm:grid-cols-2">
              {INCLUDES.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-paper/90">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col items-center gap-1">
              <span className="text-sm text-muted line-through">{PRICE_ORIGINAL}</span>
              <span className="font-display text-5xl font-black text-gradient sm:text-6xl">
                {PRICE_PROMO}
              </span>
              <span className="text-sm text-muted">{PRICE_INSTALLMENTS}</span>
            </div>

            <a
              href={CHECKOUT_URL}
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-neon to-violet px-8 py-4 text-base font-bold text-[#020611] shadow-[0_0_40px_rgba(0,191,255,0.45)] transition-transform hover:scale-[1.03] sm:w-auto sm:px-12 sm:py-5"
            >
              QUERO ENTRAR PARA A ACADEMIA
            </a>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted">
              <span className="inline-flex items-center gap-1.5">
                <Lock className="h-3.5 w-3.5" /> Compra segura
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Zap className="h-3.5 w-3.5" /> Acesso imediato
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5" /> Garantia conforme os termos da oferta
              </span>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
