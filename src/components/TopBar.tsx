import { Zap } from "lucide-react";

export default function TopBar() {
  return (
    <div className="relative z-40 w-full bg-[#03081a] py-2 text-center text-xs sm:text-sm text-paper/90 border-b border-white/5">
      <p className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-5">
        <Zap className="h-3.5 w-3.5 shrink-0 text-cyan" strokeWidth={2.5} />
        <span>
          Aprenda a criar e vender sites com IA{" "}
          <span className="hidden sm:inline">sem precisar investir em anúncios.</span>
        </span>
      </p>
    </div>
  );
}
