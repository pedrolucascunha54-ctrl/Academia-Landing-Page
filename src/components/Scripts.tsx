import { motion } from "framer-motion";
import { Building2, Camera, MapPin, MessageCircle, Users } from "lucide-react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import CTAButton from "./ui/CTAButton";

const STAGES = [
  { title: "Primeira abordagem", text: "Como iniciar a conversa com uma empresa que nunca ouviu falar de você." },
  { title: "Apresentação do serviço", text: "Como mostrar o que você faz em termos que o dono do negócio entende." },
  { title: "Follow-up", text: "Como voltar ao assunto sem parecer insistente." },
  { title: "Dúvidas", text: "Respostas prontas para as perguntas que mais aparecem." },
  { title: "Objeções", text: "O que dizer quando surgir “tá caro”, “vou pensar” ou “já tenho alguém”." },
  { title: "Retomada", text: "Como reabrir uma conversa que esfriou." },
  { title: "Condução", text: "Como levar o potencial cliente para o próximo passo." },
  { title: "Fechamento", text: "Como encaminhar a decisão com clareza." },
];

const CHANNELS = [
  { icon: MapPin, label: "Google Maps" },
  { icon: Camera, label: "Instagram" },
  { icon: MessageCircle, label: "WhatsApp" },
  { icon: Users, label: "Indicações" },
  { icon: Building2, label: "Negócios locais" },
];

export default function Scripts() {
  return (
    <section id="scripts" className="relative w-full py-24 sm:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              index="05"
              eyebrow="Scripts de abordagem e vendas"
              title={
                <>
                  Saber fazer é metade.{" "}
                  <span className="text-amber-deep">A outra metade é saber conversar.</span>
                </>
              }
              intro="Você recebe os meus scripts para cada momento da conversa com um potencial cliente. Eles servem de base: você adapta ao seu jeito e a cada empresa."
            />

            <Reveal delay={0.1} className="mt-9">
              <p className="font-mono-tech text-[11px] uppercase tracking-[0.18em] text-stone">
                Onde você vai usar
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {CHANNELS.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-2 text-sm text-ink"
                  >
                    <Icon className="h-4 w-4 text-amber-deep" strokeWidth={1.8} />
                    {label}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-stone">
                Os scripts ajudam na comunicação comercial — a venda continua dependendo da sua
                prospecção, do seu serviço e da sua execução.
              </p>
            </Reveal>

            <Reveal delay={0.15} className="mt-9">
              <CTAButton>Quero aprender a vender serviços digitais</CTAButton>
            </Reveal>
          </div>

          <div className="relative overflow-hidden rounded-[1.75rem] bg-ink p-6 sm:p-10">
            <p className="font-mono-tech text-[11px] uppercase tracking-[0.18em] text-muted">
              Da primeira mensagem ao fechamento
            </p>
            <ol className="relative mt-8">
              <span className="absolute bottom-3 left-[15px] top-3 w-px bg-white/15" aria-hidden="true" />
              {STAGES.map((stage, i) => (
                <motion.li
                  key={stage.title}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.45, delay: Math.min(i * 0.06, 0.3), ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex gap-5 pb-7 last:pb-0"
                >
                  <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 bg-ink font-mono-tech text-[11px] text-amber">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="pt-1">
                    <p className="font-display text-xl font-bold uppercase leading-tight text-paper">{stage.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{stage.text}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
