import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import Eyebrow from "./ui/Eyebrow";
import { useWatchGate } from "../context/WatchGate";

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
  const { unlock } = useWatchGate();

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

        {/* Full-bleed on mobile so the video fills the screen edge-to-edge,
            contained card from sm up. No seek bar on purpose — the buy button
            only unlocks once the video is actually watched through. */}
        <Reveal delay={0.1} className="-mx-5 mt-12 sm:mx-auto sm:max-w-2xl">
          <div className="glass glow-border relative aspect-video overflow-hidden bg-black sm:rounded-3xl">
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
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
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
      </Container>
    </section>
  );
}
