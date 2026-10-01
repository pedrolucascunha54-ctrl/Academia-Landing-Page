import type { ReactNode } from "react";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";

export default function SectionHeading({
  index,
  eyebrow,
  title,
  intro,
  tone = "light",
  align = "left",
  className = "",
}: {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
}) {
  const centered = align === "center" ? "mx-auto text-center" : "";
  const titleColor = tone === "dark" ? "text-paper" : "text-ink";
  const introColor = tone === "dark" ? "text-muted" : "text-stone";
  return (
    <Reveal className={`max-w-3xl ${centered} ${className}`}>
      <Eyebrow index={index} tone={tone}>
        {eyebrow}
      </Eyebrow>
      <h2
        className={`mt-5 font-display text-[2.4rem] font-bold uppercase leading-[0.95] tracking-tight text-balance sm:text-5xl lg:text-[3.6rem] ${titleColor}`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-6 max-w-2xl text-base leading-relaxed sm:text-lg ${introColor} ${align === "center" ? "mx-auto" : ""}`}>
          {intro}
        </p>
      )}
    </Reveal>
  );
}
