import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";

export default function Expansion() {
  return (
    <section id="expansao" className="relative w-full overflow-hidden bg-amber">
      <div className="tape h-2.5 w-full" aria-hidden="true" />
      <Container className="py-20 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <Reveal>
            <span className="inline-flex items-center gap-3 font-mono-tech text-[11px] font-medium uppercase tracking-[0.22em] text-ink">
              09 <span className="h-px w-8 bg-ink/50" aria-hidden="true" /> Em breve
            </span>
            <h2 className="mt-5 font-display text-[2.6rem] font-extrabold uppercase leading-[0.92] tracking-tight text-ink sm:text-6xl lg:text-7xl">
              Estamos expandindo o treinamento.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink sm:text-lg">
              Em breve, novas aulas de <strong>Gestão de Tráfego</strong> também farão parte da área
              de conteúdo. Elas ainda serão gravadas — e vão entrar no treinamento assim que
              estiverem prontas.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink/75">
              Hoje elas não fazem parte do conteúdo disponível. Quando chegarem, completam a
              combinação site + Google + tráfego.
            </p>
          </Reveal>

          <motion.div
            initial={{ opacity: 0, rotate: -4, y: 30 }}
            whileInView={{ opacity: 1, rotate: -2, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto w-full max-w-xs rounded-2xl bg-ink p-6 text-paper shadow-[0_30px_60px_-30px_rgba(22,24,27,0.7)]"
          >
            <div className="flex items-center justify-between">
              <TrendingUp className="h-7 w-7 text-amber" strokeWidth={1.8} />
              <span className="rounded-full border border-dashed border-amber/60 px-2.5 py-1 font-mono-tech text-[10px] uppercase tracking-[0.16em] text-amber">
                Em produção
              </span>
            </div>
            <p className="mt-8 font-display text-3xl font-bold uppercase leading-none">Gestão de tráfego</p>
            <p className="mt-2 text-sm text-muted">Novo módulo da área de conteúdo</p>
          </motion.div>
        </div>
      </Container>
      <div className="tape h-2.5 w-full" aria-hidden="true" />
    </section>
  );
}
