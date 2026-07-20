import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, PlayCircle } from "lucide-react";
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
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Pause the background video once it scrolls out of view so it doesn't
  // keep decoding in the background while the rest of the page plays.
  useLayoutEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        const v = videoRef.current;
        if (!v) return;
        if (entry.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { rootMargin: "100px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative w-full overflow-hidden pt-16 pb-20 sm:pt-20"
    >
      {/* background video */}
      <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
        <video
          ref={videoRef}
          src="/videos/hero-bg.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover opacity-40"
        />
      </div>

      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#020611]/70" />
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

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Eyebrow>De pedreiro a criador de sites com IA</Eyebrow>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-paper sm:text-5xl lg:text-[3.15rem]"
            >
              Se eu consegui sair da obra pra vender sites com IA,{" "}
              <span className="text-gradient">você também consegue.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg lg:mx-0"
            >
              Aprenda a utilizar ChatGPT, Claude e Flow para criar sites de alto nível,
              prospectar empresas e construir uma operação de vendas sem depender de
              tráfego pago.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="mx-auto mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan lg:mx-0"
            >
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              Mesmo começando do zero e sem saber programar.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.36 }}
              className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
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
              className="mt-10 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:justify-center sm:gap-5 lg:justify-start"
            >
              {INDICATORS.map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs text-muted sm:text-sm">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-neon" />
                  {item}
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-first mx-auto w-full max-w-sm lg:order-last lg:max-w-none"
          >
            <div className="absolute left-1/2 top-1/2 -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-neon/20 to-violet/20 blur-[100px]" />
            <div className="glass glow-border relative aspect-[3/4] overflow-hidden rounded-3xl">
              <img
                src="/images/instrutor-obra.png"
                alt="O instrutor trabalhando como pedreiro, antes de aprender a criar sites com IA"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="glass absolute -bottom-5 -left-5 rounded-xl px-4 py-3 shadow-xl">
              <p className="text-xs font-semibold text-paper">Onde tudo começou</p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
