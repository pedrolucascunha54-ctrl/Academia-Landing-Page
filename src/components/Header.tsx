import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { CHECKOUT_URL } from "../lib/config";
import { useWatchGate } from "../context/WatchGate";

const LINKS = [
  { label: "Conteúdo", href: "#conteudo" },
  { label: "Scripts", href: "#scripts" },
  { label: "Suporte", href: "#suporte" },
  { label: "Investimento", href: "#investimento" },
  { label: "Dúvidas", href: "#duvidas" },
];

export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const text = tone === "dark" ? "text-paper" : "text-ink";
  return (
    <span className="flex items-center gap-2.5">
      <span
        aria-hidden="true"
        className="flex h-8 w-8 items-center justify-center rounded-md bg-amber font-display text-lg font-extrabold leading-none text-ink"
      >
        A
      </span>
      <span className={`font-display text-[15px] font-bold uppercase leading-none tracking-wide sm:text-base ${text}`}>
        Academia <span className="text-amber-deep">Landing Page</span>
      </span>
    </span>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { unlocked } = useWatchGate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-[background-color,border-color] duration-300 ${
        scrolled || open
          ? "border-b border-line bg-canvas/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8 lg:px-10">
        <a href="#inicio" aria-label="Academia Landing Page — início">
          <Logo />
        </a>

        {unlocked && (
          <nav aria-label="Seções" className="hidden items-center gap-7 lg:flex">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-stone transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}

        {unlocked && (
          <a
            href={CHECKOUT_URL}
            className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-canvas transition-colors hover:bg-ink-soft lg:inline-flex"
          >
            Quero começar
          </a>
        )}

        {unlocked && (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink lg:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        )}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-line bg-canvas lg:hidden"
          >
            <nav aria-label="Seções" className="flex flex-col px-5 py-3">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-line/70 py-3.5 text-base font-medium text-ink last:border-0"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={CHECKOUT_URL}
                onClick={() => setOpen(false)}
                className="mb-2 mt-3 rounded-full bg-amber px-5 py-3.5 text-center text-sm font-semibold uppercase tracking-wide text-ink"
              >
                Quero entrar para o treinamento
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
