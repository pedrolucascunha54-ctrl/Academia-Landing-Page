import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PlayCircle } from "lucide-react";
import Container from "./ui/Container";
import Eyebrow from "./ui/Eyebrow";
import CTAButton from "./ui/CTAButton";
import { PRICE_CASH, PRICE_INSTALLMENTS, PRICE_ORIGINAL } from "../lib/config";
import { useWatchGate } from "../context/WatchGate";

const SERVICES = [
  { label: "Site profissional com IA", status: "Disponível" },
  { label: "Loja virtual na Nuvemshop", status: "Disponível" },
  { label: "Perfil da empresa no Google", status: "Disponível" },
  { label: "Gestão de tráfego", status: "Em breve" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const { unlocked } = useWatchGate();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section ref={ref} id="inicio" className="blueprint relative w-full overflow-hidden pb-20 pt-10 sm:pb-28 sm:pt-16">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease }}>
              <Eyebrow>Treinamento · Serviços digitais</Eyebrow>
            </motion.div>

            <h1 className="mt-6 font-display text-[3.1rem] font-extrabold leading-[0.92] tracking-tight text-ink sm:text-7xl lg:text-[5.4rem]">
              {["Aprenda a criar", "e a vender soluções", "digitais para empresas."].map((line, i) => (
                <span key={line} className="block overflow-hidden pb-1">
                  <motion.span
                    className="block"
                    initial={{ y: "105%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.08 + i * 0.09, ease }}
                  >
                    {i === 1 ? (
                      <>
                        e a{" "}
                        <span className="relative inline-block">
                          vender
                          <motion.span
                            aria-hidden="true"
                            className="absolute inset-x-0 bottom-[0.06em] -z-10 h-[0.28em] origin-left bg-amber"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.6, delay: 0.75, ease }}
                          />
                        </span>{" "}
                        soluções
                      </>
                    ) : (
                      line
                    )}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease }}
              className="mt-7 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg"
            >
              Sites com IA, lojas virtuais na Nuvemshop e presença no Google — com scripts de
              abordagem e um grupo de suporte para você oferecer{" "}
              <strong className="font-semibold text-ink">mais de um serviço para o mesmo cliente</strong>,
              mesmo começando do zero e sem saber programar.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease }}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              {unlocked ? (
                <>
                  <CTAButton>Quero entrar para o treinamento</CTAButton>
                  <a
                    href="#vsl"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold text-ink underline-offset-4 hover:underline"
                  >
                    <PlayCircle className="h-4 w-4" /> Rever a apresentação
                  </a>
                </>
              ) : (
                <a
                  href="#vsl"
                  className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-ink px-7 py-4 text-sm font-semibold uppercase tracking-[0.04em] text-canvas transition-colors hover:bg-ink-soft sm:text-[15px]"
                >
                  <PlayCircle className="h-5 w-5 text-amber" />
                  Assistir à apresentação
                </a>
              )}
            </motion.div>

            {unlocked && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.65 }}
                className="mt-5 text-sm text-stone"
              >
                De <span className="line-through">{PRICE_ORIGINAL}</span> por{" "}
                <strong className="text-ink">{PRICE_CASH} à vista</strong> ou {PRICE_INSTALLMENTS}
              </motion.p>
            )}
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <motion.div
              style={{ y: photoY }}
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              animate={{ clipPath: "inset(0% 0 0 0)" }}
              transition={{ duration: 1, delay: 0.15, ease }}
              className="relative ml-auto aspect-[4/5] w-[82%] overflow-hidden rounded-[1.75rem] bg-sand sm:w-[78%]"
            >
              <img
                src="/images/instrutor-obra.webp"
                alt="O instrutor trabalhando como pedreiro, antes de aprender a criar sites com IA"
                width={800}
                height={1069}
                fetchPriority="high"
                className="h-full w-full object-cover"
              />
              <span className="absolute left-4 top-4 rounded-full bg-canvas/90 px-3 py-1.5 font-mono-tech text-[10px] uppercase tracking-[0.18em] text-ink">
                Onde tudo começou: na obra
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7, ease }}
              className="absolute -bottom-8 left-0 w-[78%] max-w-xs rounded-2xl border border-line bg-white p-4 shadow-[0_24px_60px_-20px_rgba(22,24,27,0.35)] sm:p-5"
            >
              <p className="font-mono-tech text-[10px] uppercase tracking-[0.18em] text-stone">
                O que você aprende a oferecer
              </p>
              <ul className="mt-3 space-y-2.5">
                {SERVICES.map((s, i) => (
                  <motion.li
                    key={s.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.9 + i * 0.1, ease }}
                    className="flex items-center justify-between gap-3 text-[13px] font-medium text-ink"
                  >
                    <span className="flex items-center gap-2.5">
                      <span
                        className={`h-2 w-2 shrink-0 rounded-full ${s.status === "Disponível" ? "bg-[#3f8a5a]" : "bg-amber"}`}
                        aria-hidden="true"
                      />
                      {s.label}
                    </span>
                    {s.status === "Em breve" && (
                      <span className="shrink-0 rounded-full bg-amber/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-deep">
                        Em breve
                      </span>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
