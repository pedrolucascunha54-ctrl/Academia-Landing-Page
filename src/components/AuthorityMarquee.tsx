import { Bot, Sparkles, Clapperboard, LayoutTemplate, PenTool, Target, Handshake } from "lucide-react";

const ITEMS = [
  { label: "ChatGPT", icon: Bot },
  { label: "Claude", icon: Sparkles },
  { label: "Flow", icon: Clapperboard },
  { label: "Criação de sites", icon: LayoutTemplate },
  { label: "Copywriting", icon: PenTool },
  { label: "Prospecção", icon: Target },
  { label: "Fechamento de vendas", icon: Handshake },
];

// Each half must be wider than the widest screen, otherwise the -50% loop
// shows empty space before the second half arrives.
const SETS_PER_HALF = 3;

function Half({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {Array.from({ length: SETS_PER_HALF }).flatMap((_, s) =>
        ITEMS.map(({ label, icon: Icon }) => (
          <div key={`${s}-${label}`} className="flex shrink-0 items-center">
            <div className="flex items-center gap-2.5 px-6 sm:px-8">
              <Icon
                className="h-5 w-5 text-neon drop-shadow-[0_0_6px_rgba(232,163,61,0.45)]"
                strokeWidth={1.8}
              />
              <span className="whitespace-nowrap text-sm font-medium text-paper/85 sm:text-base">
                {label}
              </span>
            </div>
            <span
              className="h-1.5 w-1.5 rotate-45 bg-cyan shadow-[0_0_8px_rgba(76,134,184,0.8)]"
              aria-hidden="true"
            />
          </div>
        ))
      )}
    </div>
  );
}

export default function AuthorityMarquee() {
  return (
    <section className="relative w-full overflow-hidden bg-[#15181a] py-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-24 w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon/[0.06] blur-3xl" />

      <p className="relative mx-auto mb-6 max-w-2xl px-5 text-center text-sm font-medium text-paper/90 sm:text-base">
        Tudo o que você precisa para criar, apresentar e vender sites profissionais
      </p>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#15181a] to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#15181a] to-transparent sm:w-32" />
        <div className="flex w-max animate-marquee motion-reduce:animate-none">
          <Half />
          <Half hidden />
        </div>
      </div>
    </section>
  );
}
