import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { CHECKOUT_URL } from "../lib/config";
import { useWatchGate } from "../context/WatchGate";

const LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Método", href: "#metodo" },
  { label: "Conteúdo", href: "#conteudo" },
  { label: "Prospecção", href: "#prospeccao" },
  { label: "Resultados", href: "#resultados" },
  { label: "Dúvidas", href: "#duvidas" },
];

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
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#0f1214]/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <a href="#inicio" className="flex items-center gap-2.5 shrink-0">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-neon to-violet shadow-[0_0_20px_rgba(232,163,61,0.45)]">
            <Sparkles className="h-5 w-5 text-[#0f1214]" strokeWidth={2.5} />
          </span>
          <span className="font-display text-[15px] sm:text-base font-bold tracking-tight text-paper">
            Academia Sites <span className="text-gradient">com IA</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-paper"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {unlocked && (
          <div className="hidden lg:block">
            <a
              href={CHECKOUT_URL}
              className="rounded-full bg-gradient-to-r from-neon to-violet px-5 py-2.5 text-sm font-bold text-[#0f1214] shadow-[0_0_25px_rgba(232,163,61,0.35)] transition-transform hover:scale-105"
            >
              QUERO COMEÇAR
            </a>
          </div>
        )}

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-paper lg:hidden"
          aria-label="Abrir menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 bg-[#0f1214]/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-5 py-4">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-muted hover:bg-white/5 hover:text-paper"
                >
                  {link.label}
                </a>
              ))}
              {unlocked && (
                <a
                  href={CHECKOUT_URL}
                  onClick={() => setOpen(false)}
                  className="mt-2 rounded-full bg-gradient-to-r from-neon to-violet px-5 py-3 text-center text-sm font-bold text-[#0f1214]"
                >
                  QUERO COMEÇAR
                </a>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
