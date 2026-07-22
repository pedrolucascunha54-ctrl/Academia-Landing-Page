import { useRef, useState } from "react";
import { Play, Pause, ArrowRight, RotateCcw } from "lucide-react";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import Eyebrow from "./ui/Eyebrow";
import { useWatchGate } from "../context/WatchGate";
import { CHECKOUT_URL } from "../lib/config";

const UNLOCK_AT_SECONDS = 5 * 60;
// Playback speeds the viewer can cycle through — capped at 1.35x so the
// video can't be sped through faster than that.
const SPEEDS = [1, 1.15, 1.25, 1.35];

export default function VSL() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const unlockedRef = useRef(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [speedIndex, setSpeedIndex] = useState(0);
  const { unlocked, unlock } = useWatchGate();

  function handlePlay() {
    setHasStarted(true);
    setIsBuffering(true);
    videoRef.current?.play().catch((err) => {
      setIsBuffering(false);
      console.error("VSL play failed:", err);
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
    // The VSL is now the entry point of the site (Hero was removed) — on
    // mobile it fills the entire first screen the visitor sees, edge to
    // edge, full height. From sm up there's room to spare, so it reverts
    // to a normal contained section with the heading above the video.
    <section id="vsl" className="relative min-h-[100svh] w-full sm:min-h-0 sm:py-20 sm:py-24">
      <Container className="relative h-full">
        <Reveal className="mx-auto hidden max-w-2xl text-center sm:block">
          <Eyebrow>Assista antes de continuar</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-paper sm:text-4xl">
            De pedreiro a criador de sites com IA
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            Em poucos minutos eu conto minha história e como você pode fazer o mesmo, sem
            precisar gastar um real com anúncio.
          </p>
        </Reveal>

        {/* No seek bar on purpose — the buy button only unlocks once the
            video is actually watched through. */}
        <div className="absolute inset-0 sm:relative sm:inset-auto sm:mx-auto sm:mt-12 sm:max-w-2xl">
          <div className="glow-border relative h-full w-full overflow-hidden bg-black sm:glass sm:aspect-video sm:rounded-3xl">
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
              onError={(e) => console.error("VSL video error:", e.currentTarget.error)}
              className="h-full w-full object-cover"
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

            {isBuffering && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/20 border-t-neon" />
              </div>
            )}

            {hasStarted && (
              <div className="absolute bottom-6 left-4 flex items-center gap-2 sm:bottom-4">
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

            {unlocked && (
              <Reveal className="absolute inset-x-0 bottom-24 flex justify-center sm:hidden">
                <a
                  href={CHECKOUT_URL}
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon to-violet px-6 py-3.5 text-sm font-bold text-[#0f1214] shadow-[0_0_35px_rgba(232,163,61,0.4)] transition-transform hover:scale-105"
                >
                  QUERO COMEÇAR AGORA
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Reveal>
            )}
          </div>
        </div>

        {unlocked && (
          <Reveal delay={0.1} className="mt-8 hidden justify-center sm:flex">
            <a
              href={CHECKOUT_URL}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon to-violet px-8 py-4 text-sm font-bold text-[#0f1214] shadow-[0_0_35px_rgba(232,163,61,0.4)] transition-transform hover:scale-105 sm:text-base"
            >
              QUERO COMEÇAR AGORA
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
