import { CHECKOUT_URL, PRICE_INSTALLMENTS } from "../lib/config";
import { useWatchGate } from "../context/WatchGate";

export default function MobileStickyCTA() {
  const { unlocked } = useWatchGate();
  if (!unlocked) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-canvas/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-md sm:hidden">
      <a
        href={CHECKOUT_URL}
        className="flex w-full items-center justify-between gap-3 rounded-full bg-amber py-2 pl-5 pr-2 text-ink"
      >
        <span className="text-sm font-semibold uppercase tracking-[0.04em]">Quero entrar</span>
        <span className="rounded-full bg-ink px-3.5 py-2 text-xs font-semibold text-canvas">{PRICE_INSTALLMENTS}</span>
      </a>
    </div>
  );
}
