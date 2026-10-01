import { CHECKOUT_URL } from "../lib/config";
import { useWatchGate } from "../context/WatchGate";

export default function MobileStickyCTA() {
  const { unlocked } = useWatchGate();
  if (!unlocked) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#0f1214]/95 px-4 py-3 backdrop-blur-xl sm:hidden">
      <a
        href={CHECKOUT_URL}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-neon to-violet px-5 py-3.5 text-sm font-bold text-[#0f1214] shadow-[0_0_25px_rgba(232,163,61,0.35)]"
      >
        QUERO APRENDER AGORA
      </a>
    </div>
  );
}
