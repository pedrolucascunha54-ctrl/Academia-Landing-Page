import { ArrowRight } from "lucide-react";
import { CHECKOUT_URL } from "../../lib/config";

const VARIANTS = {
  amber: "bg-amber text-ink hover:bg-[#f0b252]",
  ink: "bg-ink text-canvas hover:bg-ink-soft",
  light: "bg-canvas text-ink hover:bg-white",
};

export default function CTAButton({
  children,
  variant = "amber",
  className = "",
  size = "md",
}: {
  children: string;
  variant?: keyof typeof VARIANTS;
  className?: string;
  size?: "md" | "lg";
}) {
  const pad = size === "lg" ? "px-8 py-5 text-base" : "px-6 py-4 text-sm sm:text-[15px]";
  return (
    <a
      href={CHECKOUT_URL}
      className={`group inline-flex min-h-12 items-center justify-center gap-3 rounded-full font-semibold uppercase tracking-[0.04em] transition-[background-color,transform] duration-300 active:scale-[0.98] ${pad} ${VARIANTS[variant]} ${className}`}
    >
      <span>{children}</span>
      <span className="flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-full bg-current/10">
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
          strokeWidth={2.25}
        />
      </span>
    </a>
  );
}
