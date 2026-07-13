import { useRef, useState } from "react";
import { Play } from "lucide-react";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import Eyebrow from "./ui/Eyebrow";

const VIDEOS = [
  "/videos/projeto-01.mp4",
  "/videos/projeto-02.mp4",
  "/videos/projeto-03.mp4",
  "/videos/projeto-04.mp4",
];

function VideoCard({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    videoRef.current?.play();
    setPlaying(true);
  };

  return (
    <div className="glass glow-border relative mx-auto aspect-[9/16] w-full max-w-[260px] overflow-hidden rounded-[2rem] p-2">
      <div className="relative h-full w-full overflow-hidden rounded-[1.6rem] bg-[#050a1a]">
        <video
          ref={videoRef}
          src={src}
          controls={playing}
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
          onPause={() => setPlaying(false)}
        />
        {!playing && (
          <button
            onClick={handlePlay}
            aria-label="Reproduzir vídeo"
            className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors hover:bg-black/40"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-neon to-violet shadow-[0_0_30px_rgba(0,191,255,0.5)]">
              <Play className="h-6 w-6 translate-x-0.5 text-[#020611]" fill="currentColor" />
            </span>
          </button>
        )}
      </div>
    </div>
  );
}

export default function VideoShowcase() {
  return (
    <section className="relative w-full py-24 sm:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Projetos reais</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-paper sm:text-4xl">
            Alguns sites reais criados com o método
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            Dá o play e veja alguns exemplos de sites reais já entregues.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {VIDEOS.map((src, i) => (
            <Reveal key={src} delay={i * 0.08}>
              <VideoCard src={src} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
