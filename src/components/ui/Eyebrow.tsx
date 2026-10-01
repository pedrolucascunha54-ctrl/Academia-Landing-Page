import type { ReactNode } from "react";

export default function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
      <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_10px_#4c86b8]" />
      {children}
    </span>
  );
}
