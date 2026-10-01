import { Flame } from "lucide-react";
import { CHECKOUT_URL, PRICE_ORIGINAL, PRICE_PROMO, PRICE_INSTALLMENTS } from "../lib/config";
import { useWatchGate } from "../context/WatchGate";

// Each half must be wider than the widest screen or the loop shows a gap.
const REPEAT = 5;

function Half({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {Array.from({ length: REPEAT }).map((_, i) => (
        <span key={i} className="flex shrink-0 items-center gap-2.5 whitespace-nowrap px-6 text-xs sm:text-sm">
          <Flame className="h-3.5 w-3.5 shrink-0 text-[#0f1214]" strokeWidth={2.5} />
          <strong className="font-extrabold uppercase tracking-wide">Oferta por tempo limitado</strong>
          <span>
            de <span className="line-through opacity-70">{PRICE_ORIGINAL}</span> por{" "}
            <strong className="font-extrabold">{PRICE_PROMO}</strong> à vista ou {PRICE_INSTALLMENTS}
          </span>
          <span className="ml-3 h-1.5 w-1.5 rotate-45 bg-[#0f1214]/60" aria-hidden="true" />
        </span>
      ))}
    </div>
  );
}

export default function OfferBar() {
  const { unlocked } = useWatchGate();
  const label = `Oferta por tempo limitado: de ${PRICE_ORIGINAL} por ${PRICE_PROMO} à vista ou ${PRICE_INSTALLMENTS}`;
  const track = (
    <div className="flex w-max animate-marquee motion-reduce:animate-none" style={{ animationDuration: "45s" }}>
      <Half />
      <Half hidden />
    </div>
  );

  return (
    <div className="overflow-hidden bg-gradient-to-r from-neon to-violet py-2 font-semibold text-[#0f1214]">
      <span className="sr-only">{label}</span>
      {unlocked ? (
        <a href={CHECKOUT_URL} aria-hidden="true" tabIndex={-1} className="block">
          {track}
        </a>
      ) : (
        <div aria-hidden="true">{track}</div>
      )}
    </div>
  );
}
