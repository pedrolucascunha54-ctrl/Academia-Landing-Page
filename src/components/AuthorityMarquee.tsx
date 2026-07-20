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

function Track() {
  return (
    <div className="flex shrink-0 items-center gap-10 pr-10">
      {ITEMS.map(({ label, icon: Icon }) => (
        <div key={label} className="flex items-center gap-2.5 text-muted">
          <Icon className="h-5 w-5 text-cyan" strokeWidth={1.8} />
          <span className="whitespace-nowrap text-sm font-medium sm:text-base">{label}</span>
        </div>
      ))}
    </div>
  );
}

export default function AuthorityMarquee() {
  return (
    <section className="relative w-full overflow-hidden border-y border-white/8 bg-[#15181a] py-8">
      <p className="mx-auto mb-6 max-w-2xl px-5 text-center text-sm font-medium text-paper/90 sm:text-base">
        Tudo o que você precisa para criar, apresentar e vender sites profissionais
      </p>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#15181a] to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#15181a] to-transparent sm:w-32" />
      <div className="flex w-max animate-marquee">
        <Track />
        <Track />
      </div>
    </section>
  );
}
