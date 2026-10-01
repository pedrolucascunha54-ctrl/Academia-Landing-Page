import { useEffect, useRef, useState } from "react";
import { Play, Pause, RotateCcw, AlertTriangle } from "lucide-react";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import CTAButton from "./ui/CTAButton";
import { useWatchGate } from "../context/WatchGate";

const UNLOCK_AT_SECONDS = 5 * 60;
// Playback speeds the viewer can cycle through — capped at 1.35x so the
// video can't be sped through faster than that.
const SPEEDS = [1, 1.15, 1.25, 1.35];
// How long the video may sit buffering before we stop pretending it's fine and
// give the visitor a way out. The whole page below the VSL is gated on this
// video, so a stall that nobody escapes from is a dead end, not a paywall.
const STALL_ESCAPE_MS = 20000;

export default function VSL() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const unlockedRef = useRef(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [speedIndex, setSpeedIndex] = useState(0);
  const [hasFailed, setHasFailed] = useState(false);
  const [showEscape, setShowEscape] = useState(false);
  const { unlocked, unlock } = useWatchGate();

  // A stall that never resolves would leave the visitor staring at a spinner
  // with nothing below it, since GatedContent renders null until unlock.
  useEffect(() => {
    if (!isBuffering || showEscape) return;
    const id = setTimeout(() => setShowEscape(true), STALL_ESCAPE_MS);
    return () => clearTimeout(id);
  }, [isBuffering, showEscape]);

  function handlePlay() {
    setHasStarted(true);
    setIsBuffering(true);
    setHasFailed(false);
    videoRef.current?.play().catch((err) => {
      // Some in-app browsers (Instagram's especially) reject play() outright.
      setIsBuffering(false);
      setHasFailed(true);
      console.error("VSL play failed:", err);
    });
  }

  function retry() {
    setHasFailed(false);
    setShowEscape(false);
    const v = videoRef.current;
    if (!v) return;
    v.load();
    setIsBuffering(true);
    v.play().catch(() => {
      setIsBuffering(false);
      setHasFailed(true);
    });
  }

  function togglePlayback() {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  }

  function rewind() {
    const v = videoRef.current;
    if (!v) return;
    // Only ever moves currentTime backward — can't be used to skip ahead.
    v.currentTime = Math.max(0, v.currentTime - 10);
  }

  function cycleSpeed() {
    const nextIndex = (speedIndex + 1) % SPEEDS.length;
    setSpeedIndex(nextIndex);
    if (videoRef.current) videoRef.current.playbackRate = SPEEDS[nextIndex];
  }

  function handleTimeUpdate() {
    const v = videoRef.current;
    if (!v || unlockedRef.current) return;
    if (v.currentTime >= UNLOCK_AT_SECONDS) {
      unlockedRef.current = true;
      unlock();
    }
  }

  return (
    <section id="vsl" className="relative w-full bg-ink py-20 sm:py-28">
      <Container>
        <SectionHeading
          tone="dark"
          align="center"
          eyebrow="Assista antes de continuar"
          title="De pedreiro a criador de soluções digitais"
          intro="Em poucos minutos eu conto minha história e mostro o caminho que você vai seguir no treinamento — sem precisar gastar com anúncio para começar."
        />

        {/* Full-bleed on mobile so the video fills the screen edge-to-edge,
            contained card from sm up. No seek bar on purpose — the buy button
            only unlocks once the video is actually watched through. */}
        <Reveal delay={0.1} className="-mx-5 mt-12 sm:mx-auto sm:max-w-3xl">
          <div className="relative aspect-video overflow-hidden bg-black ring-1 ring-white/10 sm:rounded-3xl">
            <video
              ref={videoRef}
              src="/videos/vsl.mp4"
              poster="/images/vsl-poster.jpg"
              controls={false}
              disablePictureInPicture
              playsInline
              preload="metadata"
              onTimeUpdate={handleTimeUpdate}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onPlaying={() => setIsBuffering(false)}
              onWaiting={() => setIsBuffering(true)}
              onError={(e) => {
                setIsBuffering(false);
                setHasFailed(true);
                console.error("VSL video error:", e.currentTarget.error);
              }}
              className="h-full w-full object-cover"
            />

            {!hasStarted && (
              <button
                type="button"
                onClick={handlePlay}
                aria-label="Reproduzir vídeo"
                className="group absolute inset-0 flex items-center justify-center bg-black/30 transition-colors hover:bg-black/40"
              >
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-amber transition-transform duration-300 group-hover:scale-105">
                  <Play className="h-9 w-9 translate-x-0.5 text-ink" fill="currentColor" />
                </span>
              </button>
            )}

            {isBuffering && !hasFailed && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/20 border-t-neon" />
              </div>
            )}

            {/* O vídeo não carregou. Sem isto o visitante fica preso: a página
                inteira abaixo da VSL só existe depois do unlock. */}
            {hasFailed && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[#0f1214]/95 px-6 text-center">
                <AlertTriangle className="h-9 w-9 text-neon" />
                <p className="max-w-sm text-sm leading-relaxed text-paper sm:text-base">
                  O vídeo não carregou no seu aparelho. Isso costuma acontecer no navegador
                  de dentro do Instagram.
                </p>
                <div className="flex flex-col items-center gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={retry}
                    className="rounded-full border border-white/25 px-6 py-3 text-sm font-bold text-paper transition-colors hover:bg-white/10"
                  >
                    Tentar de novo
                  </button>
                  <button
                    type="button"
                    onClick={unlock}
                    className="rounded-full bg-amber px-6 py-3 text-sm font-bold text-ink"
                  >
                    Continuar sem o vídeo
                  </button>
                </div>
                <p className="text-xs text-muted">
                  Dica: abrir no Chrome ou Safari costuma resolver.
                </p>
              </div>
            )}

            {hasStarted && (
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <button
                  type="button"
                  onClick={rewind}
                  aria-label="Voltar 10 segundos"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-paper backdrop-blur-sm transition-colors hover:bg-black/70"
                >
                  <RotateCcw className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={togglePlayback}
                  aria-label={isPlaying ? "Pausar vídeo" : "Continuar vídeo"}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-paper backdrop-blur-sm transition-colors hover:bg-black/70"
                >
                  {isPlaying ? (
                    <Pause className="h-5 w-5" fill="currentColor" />
                  ) : (
                    <Play className="h-5 w-5 translate-x-0.5" fill="currentColor" />
                  )}
                </button>
                <button
                  type="button"
                  onClick={cycleSpeed}
                  aria-label="Mudar velocidade de reprodução"
                  className="flex h-11 items-center justify-center rounded-full bg-black/50 px-3 text-sm font-bold text-paper backdrop-blur-sm transition-colors hover:bg-black/70"
                >
                  {SPEEDS[speedIndex]}x
                </button>
              </div>
            )}
          </div>
        </Reveal>

        {/* Travou carregando, mas sem erro: conexão lenta. Mesmo problema de
            beco sem saída, então oferece a mesma escapatória. */}
        {showEscape && !hasFailed && !unlocked && (
          <div className="mx-auto mt-6 max-w-md rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center">
            <p className="text-sm leading-relaxed text-muted">
              Está demorando para carregar? Sua conexão pode estar lenta.
            </p>
            <button
              type="button"
              onClick={unlock}
              className="mt-3 text-sm font-bold text-neon underline underline-offset-4"
            >
              Continuar sem esperar o vídeo
            </button>
          </div>
        )}

        {unlocked && (
          <Reveal delay={0.1} className="mt-10 flex justify-center">
            <CTAButton>Quero começar</CTAButton>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
