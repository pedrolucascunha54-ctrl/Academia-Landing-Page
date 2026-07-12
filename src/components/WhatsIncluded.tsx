import {
  GraduationCap,
  Library,
  LayoutTemplate,
  MessageSquareText,
  FileSignature,
  ClipboardCheck,
  Sheet,
  FileCheck2,
  RefreshCcw,
  Users2,
} from "lucide-react";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import Eyebrow from "./ui/Eyebrow";

const ITEMS = [
  { icon: GraduationCap, label: "Treinamento completo" },
  { icon: Library, label: "Biblioteca de prompts" },
  { icon: LayoutTemplate, label: "Modelos de sites" },
  { icon: MessageSquareText, label: "Scripts de prospecção" },
  { icon: FileSignature, label: "Modelos de propostas" },
  { icon: ClipboardCheck, label: "Checklist de entrega" },
  { icon: Sheet, label: "Planilha de clientes" },
  { icon: FileCheck2, label: "Modelos de contrato" },
  { icon: RefreshCcw, label: "Atualizações do conteúdo" },
  { icon: Users2, label: "Comunidade de alunos" },
];

export default function WhatsIncluded() {
  return (
    <section className="relative w-full py-24 sm:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Muito além das aulas</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-paper sm:text-4xl">
            Você recebe muito mais do que aulas gravadas
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {ITEMS.map(({ icon: Icon, label }, i) => (
            <Reveal key={label} delay={Math.min(i * 0.04, 0.3)}>
              <div className="glass flex h-full flex-col items-center gap-3 rounded-2xl p-5 text-center transition-transform hover:-translate-y-1">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-neon/20 to-violet/20 border border-white/10">
                  <Icon className="h-5 w-5 text-cyan" strokeWidth={1.8} />
                </div>
                <span className="text-xs font-medium leading-snug text-paper/90 sm:text-sm">
                  {label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
