import type { ReactNode } from "react";

export default function Eyebrow({
  children,
  index,
  tone = "light",
}: {
  children: ReactNode;
  index?: string;
  tone?: "light" | "dark";
}) {
  const color = tone === "dark" ? "text-amber" : "text-amber-deep";
  const rule = tone === "dark" ? "bg-amber/60" : "bg-amber-deep/50";
  return (
    <span
      className={`inline-flex items-center gap-3 font-mono-tech text-[11px] font-medium uppercase tracking-[0.22em] ${color}`}
    >
      {index && <span>{index}</span>}
      <span className={`h-px w-8 ${rule}`} aria-hidden="true" />
      {children}
    </span>
  );
}
