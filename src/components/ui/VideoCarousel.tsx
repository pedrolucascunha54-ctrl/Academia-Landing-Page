import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import VideoCard from "./VideoCard";

interface CarouselItem {
  src: string;
  poster?: string;
}

export default function VideoCarousel({ items }: { items: CarouselItem[] }) {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);

  function go(delta: number) {
    setIndex(([current]) => {
      const next = (current + delta + items.length) % items.length;
      return [next, delta];
    });
  }

  function goTo(target: number) {
    setIndex(([current]) => [target, target > current ? 1 : -1]);
  }

  const current = items[index];
  if (!current) return null;

  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            initial={{ x: direction >= 0 ? 90 : -90, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction >= 0 ? -90 : 90, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <VideoCard src={current.src} poster={current.poster} maxWidthClass="max-w-sm" />
          </motion.div>
        </AnimatePresence>
      </div>

      {items.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Vídeo anterior"
            className="glass absolute left-0 top-1/2 flex h-10 w-10 -translate-x-3 -translate-y-1/2 items-center justify-center rounded-full text-paper transition-transform hover:scale-105"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Próximo vídeo"
            className="glass absolute right-0 top-1/2 flex h-10 w-10 -translate-y-1/2 translate-x-3 items-center justify-center rounded-full text-paper transition-transform hover:scale-105"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="mt-5 flex justify-center gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Ir para o vídeo ${i + 1}`}
                aria-current={i === index}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-cyan" : "w-1.5 bg-white/20"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
