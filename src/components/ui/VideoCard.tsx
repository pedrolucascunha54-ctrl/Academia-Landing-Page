import { useRef, useState } from "react";
import { Play } from "lucide-react";

export default function VideoCard({
  src,
  poster,
  maxWidthClass = "max-w-[260px]",
}: {
  src: string;
  poster?: string;
  maxWidthClass?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    videoRef.current?.play();
    setPlaying(true);
  };

  return (
    <div
      className={`glass glow-border relative mx-auto aspect-[9/16] w-full ${maxWidthClass} overflow-hidden rounded-[2rem] p-2`}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[1.6rem] bg-[#050a1a]">
        <video
          ref={videoRef}
          src={src}
          poster={poster}
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
