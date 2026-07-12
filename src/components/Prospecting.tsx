import { MapPin, Camera, MessageCircle, Briefcase, Users, Mail, Building2, Store } from "lucide-react";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";

const CHANNELS = [
  { icon: MapPin, label: "Google Maps" },
  { icon: Camera, label: "Instagram" },
  { icon: MessageCircle, label: "WhatsApp" },
  { icon: Briefcase, label: "LinkedIn" },
  { icon: Users, label: "Indicações" },
  { icon: Mail, label: "E-mail comercial" },
  { icon: Building2, label: "Grupos empresariais" },
  { icon: Store, label: "Negócios locais" },
];

const FUNNEL = [
  { value: "50", label: "empresas analisadas" },
  { value: "20", label: "contatos realizados" },
  { value: "8", label: "respostas" },
  { value: "3", label: "reuniões" },
  { value: "1", label: "projeto fechado" },
];

export default function Prospecting() {
  return (
    <section id="prospeccao" className="relative w-full overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#050b1f] via-[#07102a] to-[#020611]" />
      <div className="pointer-events-none absolute -top-20 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-violet/15 blur-[120px]" />

      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold leading-tight text-paper sm:text-4xl">
            Você não precisa esperar o cliente aparecer
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            Aprenda a utilizar canais gratuitos para iniciar conversas com potenciais
            clientes.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14">
          <Reveal>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2">
              {CHANNELS.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="glass flex flex-col items-center gap-3 rounded-2xl p-5 text-center transition-transform hover:-translate-y-1"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan/20 to-violet/20 border border-white/10">
                    <Icon className="h-5 w-5 text-cyan" strokeWidth={1.8} />
                  </div>
                  <span className="text-xs font-medium text-paper/90 sm:text-sm">{label}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="glass glow-border rounded-2xl p-7 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-cyan">
                Exemplo ilustrativo de rotina semanal
              </p>
              <div className="mt-6 space-y-4">
                {FUNNEL.map((step) => (
                  <div key={step.label} className="flex items-center gap-4">
                    <div className="flex h-10 w-14 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-neon/20 to-violet/20 border border-white/10 font-display text-base font-bold text-paper">
                      {step.value}
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
                    <span className="text-sm text-muted">{step.label}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs leading-relaxed text-muted/80">
                Os números acima são apenas um exemplo ilustrativo e não representam uma
                promessa de resultado.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="mx-auto mt-14 max-w-2xl text-center" delay={0.2}>
          <p className="text-sm leading-relaxed text-muted sm:text-base">
            O método ensina como criar uma rotina de prospecção orgânica, identificar
            oportunidades e abordar potenciais clientes de maneira profissional.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
