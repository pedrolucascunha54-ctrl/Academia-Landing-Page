import Container from "./ui/Container";
import { Logo } from "./Header";
import { INSTAGRAM_URL } from "../lib/config";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

const NAV = [
  { label: "Conteúdo", href: "#conteudo" },
  { label: "Scripts de vendas", href: "#scripts" },
  { label: "Grupo de suporte", href: "#suporte" },
  { label: "Investimento", href: "#investimento" },
  { label: "Perguntas frequentes", href: "#duvidas" },
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-ink pb-28 pt-16 sm:pb-16">
      <Container>
        <div className="grid gap-10 sm:grid-cols-[1.4fr_1fr]">
          <div>
            <Logo tone="dark" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              Aprenda a criar, oferecer e vender soluções digitais para empresas.
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm text-paper/80 transition-colors hover:text-paper"
            >
              <InstagramIcon className="h-4 w-4" />
              @pedroo__lucas1
            </a>
          </div>

          <nav aria-label="Rodapé">
            <p className="font-mono-tech text-[11px] uppercase tracking-[0.2em] text-muted">Navegação</p>
            <ul className="mt-4 space-y-1">
              {NAV.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="inline-flex min-h-9 items-center text-sm text-paper/80 hover:text-paper">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="max-w-3xl text-xs leading-relaxed text-muted">
            Este produto não garante resultados financeiros. Os exemplos apresentados possuem caráter
            educacional e ilustrativo. Resultados variam conforme dedicação, experiência, mercado,
            estratégia e aplicação individual.
          </p>
          <p className="mt-4 text-xs text-muted/80">
            © {new Date().getFullYear()} Academia Landing Page. Todos os direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
