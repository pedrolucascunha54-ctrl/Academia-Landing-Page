import { Sparkles } from "lucide-react";
import Container from "./ui/Container";
import { INSTAGRAM_URL } from "../lib/config";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-white/8 bg-[#0a0c0d] pb-24 pt-16 sm:pb-16">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-neon to-violet">
                <Sparkles className="h-4 w-4 text-[#0f1214]" strokeWidth={2.5} />
              </span>
              <span className="font-display text-sm font-bold text-paper">
                Academia Sites <span className="text-gradient">com IA</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Crie sites profissionais. Encontre clientes. Transforme IA em renda.
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-paper"
            >
              <InstagramIcon className="h-4 w-4" />
              @pedroo__lucas1
            </a>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-paper/80">
              Institucional
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              <li><a href="#" className="hover:text-paper">Termos de uso</a></li>
              <li><a href="#" className="hover:text-paper">Política de privacidade</a></li>
              <li><a href="#duvidas" className="hover:text-paper">Perguntas frequentes</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-paper/80">
              Atendimento
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              <li><a href="#" className="hover:text-paper">Contato</a></li>
              <li><a href="#" className="hover:text-paper">Suporte</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-paper/80">
              Navegação
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              <li><a href="#vsl" className="hover:text-paper">Método</a></li>
              <li><a href="#conteudo" className="hover:text-paper">Conteúdo</a></li>
              <li><a href="#resultados" className="hover:text-paper">Resultados</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/8 pt-8">
          <p className="text-xs leading-relaxed text-muted/80">
            Este produto não garante resultados financeiros. Os exemplos apresentados
            possuem caráter educacional e ilustrativo. Resultados variam conforme
            dedicação, experiência, mercado, estratégia e aplicação individual.
          </p>
          <p className="mt-4 text-xs text-muted/60">
            © {new Date().getFullYear()} Academia Sites com IA. Todos os direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
