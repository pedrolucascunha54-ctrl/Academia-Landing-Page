import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion } from "framer-motion";
import VideoCard from "./VideoCard";

gsap.registerPlugin(ScrollTrigger);

interface CarouselItem {
  src: string;
  poster?: string;
}

/**
 * Pins the section while the viewer scrolls through each video in turn —
 * one scroll step advances to the next video. After the last one, the pin
 * releases and the page continues scrolling normally.
 */
export default function ScrollVideoCarousel({
  items,
  label,
}: {
  items: CarouselItem[];
  label?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el || items.length <= 1) return;

    const steps = items.length - 1;
    const st = ScrollTrigger.create({
      trigger: el,
      start: "top top",
      end: () => `+=${window.innerHeight * steps}`,
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,
      onUpdate: (self) => {
        const next = Math.min(items.length - 1, Math.floor(self.progress * items.length));
        if (next !== indexRef.current) {
          setIndex([next, next > indexRef.current ? 1 : -1]);
          indexRef.current = next;
        }
      },
    });

    return () => st.kill();
  }, [items.length]);

  const current = items[index];
  if (!current) return null;

  return (
    <div
      ref={containerRef}
      className="relative flex min-h-screen w-full flex-col items-center justify-center py-16"
    >
      {label && (
        <p className="mb-6 text-xs font-semibold uppercase tracking-wider text-cyan">{label}</p>
      )}
      <div className="relative mx-auto w-full max-w-sm overflow-hidden">
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
        <div className="mt-6 flex justify-center gap-2" aria-hidden="true">
          {items.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-cyan" : "w-1.5 bg-white/20"
              }`}
            />
          ))}
        </div>
      )}

      <p className="mt-4 text-xs text-muted">
        {index < items.length - 1 ? "Continue rolando para ver o próximo" : "Continue rolando"}
      </p>
    </div>
  );
}
