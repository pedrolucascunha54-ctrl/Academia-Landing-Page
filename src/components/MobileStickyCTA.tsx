import { CHECKOUT_URL, PRICE_PROMO } from "../lib/config";

export default function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#020611]/95 px-4 py-3 backdrop-blur-xl sm:hidden">
      <a
        href={CHECKOUT_URL}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-neon to-violet px-5 py-3.5 text-sm font-bold text-[#020611] shadow-[0_0_25px_rgba(0,191,255,0.35)]"
      >
        QUERO ENTRAR — {PRICE_PROMO}
      </a>
    </div>
  );
}
