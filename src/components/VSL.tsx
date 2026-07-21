import { useRef, useState } from "react";
import { Play } from "lucide-react";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import Eyebrow from "./ui/Eyebrow";

export default function VSL() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  function handlePlay() {
    setHasStarted(true);
    videoRef.current?.play().catch(() => {});
  }

  return (
    <section id="vsl" className="relative w-full py-20 sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Assista antes de continuar</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-paper sm:text-4xl">
            De pedreiro a criador de sites com IA
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            Em poucos minutos eu conto minha história e como você pode fazer o mesmo, sem
            precisar gastar um real com anúncio.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-12 max-w-3xl">
          <div className="glass glow-border relative aspect-video overflow-hidden rounded-3xl bg-black">
            <video
              ref={videoRef}
              src="/videos/vsl.mp4"
              poster="/images/pedro-lucas.jpg"
              controls={hasStarted}
              playsInline
              preload="none"
              className="h-full w-full object-contain"
            />
            {!hasStarted && (
              <button
                type="button"
                onClick={handlePlay}
                aria-label="Reproduzir vídeo"
                className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors hover:bg-black/40"
              >
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-neon to-violet shadow-[0_0_40px_rgba(232,163,61,0.5)]">
                  <Play className="h-9 w-9 translate-x-0.5 text-[#0f1214]" fill="currentColor" />
                </span>
              </button>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
