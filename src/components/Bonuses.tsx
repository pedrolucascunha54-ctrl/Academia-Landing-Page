import { Gift, MessageSquareDot, FileSignature, ClipboardList, Tags, RefreshCw } from "lucide-react";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import Eyebrow from "./ui/Eyebrow";

const BONUSES = [
  { icon: Gift, n: "01", title: "50 prompts para criação de sites" },
  { icon: MessageSquareDot, n: "02", title: "Mensagens prontas para prospectar clientes" },
  { icon: FileSignature, n: "03", title: "Modelo de proposta comercial" },
  { icon: ClipboardList, n: "04", title: "Checklist profissional de entrega" },
  { icon: Tags, n: "05", title: "Pacotes de serviços e tabela de preços" },
  { icon: RefreshCw, n: "06", title: "Modelos de follow-up" },
];

export default function Bonuses() {
  return (
    <section className="relative w-full overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_30%,rgba(184,85,46,0.22),transparent_55%)]" />

      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Bônus exclusivos</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-paper sm:text-4xl">
            Bônus para acelerar sua operação
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BONUSES.map(({ icon: Icon, n, title }, i) => (
            <Reveal key={n} delay={i * 0.06}>
              <div className="glass glow-border relative h-full overflow-hidden rounded-2xl p-7">
                <span className="absolute -right-2 -top-4 font-display text-7xl font-black text-white/[0.04]">
                  {n}
                </span>
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet/30 to-neon/20 border border-white/10">
                  <Icon className="h-6 w-6 text-cyan" strokeWidth={1.8} />
                </div>
                <p className="relative mt-5 font-display text-base font-semibold leading-snug text-paper">
                  {title}
                </p>
                <span className="relative mt-4 inline-block rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-cyan">
                  Bônus incluso
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
