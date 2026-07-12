import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, PlayCircle, TrendingUp, MessageSquareText } from "lucide-react";
import Container from "./ui/Container";
import Eyebrow from "./ui/Eyebrow";
import { CHECKOUT_URL } from "../lib/config";

const INDICATORS = [
  "Acesso imediato",
  "Aulas passo a passo",
  "Método para iniciantes",
  "Atualizações incluídas",
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] w-full overflow-hidden pt-16 pb-20 sm:pt-20"
    >
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(122,66,255,0.18),transparent_45%),radial-gradient(circle_at_80%_15%,rgba(0,191,255,0.16),transparent_40%),radial-gradient(circle_at_50%_100%,rgba(37,230,255,0.10),transparent_50%)]" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
        {/* left column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Eyebrow>Novo método de negócios com IA</Eyebrow>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-paper sm:text-5xl lg:text-[3.4rem]"
          >
            Crie <span className="text-gradient">sites profissionais</span> com{" "}
            <span className="text-gradient">IA</span> e aprenda a encontrar{" "}
            <span className="text-gradient">clientes</span> todos os dias
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            Aprenda a utilizar ChatGPT, Claude e Flow para criar sites de alto nível,
            prospectar empresas e construir uma operação de vendas sem depender de
            tráfego pago.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan"
          >
            <CheckCircle2 className="h-4 w-4 shrink-0" />
            Mesmo começando do zero e sem saber programar.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.36 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href={CHECKOUT_URL}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-neon to-violet px-7 py-4 text-sm font-bold text-[#020611] shadow-[0_0_35px_rgba(0,191,255,0.4)] transition-transform hover:scale-105 sm:text-base"
            >
              QUERO APRENDER O MÉTODO
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#metodo"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-bold text-paper backdrop-blur-sm transition-colors hover:bg-white/10 sm:text-base"
            >
              <PlayCircle className="h-4 w-4" />
              VER COMO FUNCIONA
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-5"
          >
            {INDICATORS.map((item) => (
              <div key={item} className="flex items-center gap-2 text-xs text-muted sm:text-sm">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-neon" />
                {item}
              </div>
            ))}
          </motion.div>
        </div>

        {/* right column - visual composition */}
        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/25 blur-[110px]" />
          <div className="absolute -right-6 top-8 -z-10 h-56 w-56 rounded-full bg-neon/25 blur-[90px]" />

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass glow-border relative rounded-2xl p-3 shadow-[0_30px_80px_rgba(0,0,0,0.55)] animate-float"
          >
            <div className="flex items-center gap-1.5 border-b border-white/10 px-3 pb-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              <span className="ml-3 text-[10px] text-muted">landingpage-cliente.com</span>
            </div>
            <div className="mt-3 space-y-2.5 rounded-lg bg-[#050a1a] p-4">
              <div className="h-2.5 w-2/3 rounded-full bg-gradient-to-r from-cyan to-violet" />
              <div className="h-2 w-5/6 rounded-full bg-white/15" />
              <div className="h-2 w-3/5 rounded-full bg-white/10" />
              <div className="mt-3 grid grid-cols-3 gap-2">
                <div className="h-14 rounded-md bg-gradient-to-br from-neon/25 to-transparent border border-white/10" />
                <div className="h-14 rounded-md bg-gradient-to-br from-violet/25 to-transparent border border-white/10" />
                <div className="h-14 rounded-md bg-gradient-to-br from-cyan/25 to-transparent border border-white/10" />
              </div>
              <div className="mt-3 h-8 w-32 rounded-full bg-gradient-to-r from-neon to-violet" />
            </div>
          </motion.div>

          {/* floating card: proposta enviada */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="glass absolute -left-6 top-8 hidden w-44 rounded-xl p-3 shadow-xl animate-float-slow sm:block"
          >
            <div className="flex items-center gap-2">
              <MessageSquareText className="h-4 w-4 text-cyan" />
              <span className="text-[11px] font-semibold text-paper">Proposta enviada</span>
            </div>
            <p className="mt-1 text-[10px] text-muted">Site institucional • R$ 1.500</p>
          </motion.div>

          {/* floating card: site aprovado */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="glass absolute -right-4 top-1/2 hidden w-40 -translate-y-1/2 rounded-xl p-3 shadow-xl animate-float sm:block"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-400" />
              <span className="text-[11px] font-semibold text-paper">Site aprovado</span>
            </div>
          </motion.div>

          {/* floating card: novo cliente + chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="glass absolute -bottom-8 left-1/2 w-48 -translate-x-1/2 rounded-xl p-3 shadow-xl animate-float-slow"
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-paper">Novo cliente</span>
              <TrendingUp className="h-4 w-4 text-neon" />
            </div>
            <div className="mt-2 flex items-end gap-1">
              {[6, 10, 8, 14, 11, 18].map((h, i) => (
                <div
                  key={i}
                  className="w-full rounded-sm bg-gradient-to-t from-neon to-cyan"
                  style={{ height: `${h * 2}px` }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
