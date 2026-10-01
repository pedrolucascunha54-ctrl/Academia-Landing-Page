import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Mobile browsers show/hide the address bar while scrolling, which changes
// innerHeight mid-scroll and made pinned sections re-measure and jitter.
// (normalizeScroll(true) also fixed it but made touch scrolling feel heavy.)
ScrollTrigger.config({ ignoreMobileResize: true });

// The display font's metrics differ a lot from the fallback, so pin positions
// measured before it loads are stale.
document.fonts.ready.then(() => ScrollTrigger.refresh());

/**
 * Pins the section while the viewer scrolls through each item in turn — one
 * scroll step advances to the next item. After the last one, the pin
 * releases and the page continues scrolling normally. Works with any
 * content (video cards, image cards, ...) via `renderItem`.
 */
export default function ScrollCarousel<T>({
  items,
  renderItem,
  label,
}: {
  items: T[];
  renderItem: (item: T) => ReactNode;
  label?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);
  const stRef = useRef<ScrollTrigger | null>(null);
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
    stRef.current = st;

    return () => {
      stRef.current = null;
      st.kill();
    };
  }, [items.length]);

  // Lets a tap on the arrows jump straight to the target scroll position
  // (rather than just swapping the rendered item) so the pinned section's
  // scroll progress stays in sync — scrolling afterwards continues from
  // wherever the tap landed instead of fighting the next onUpdate tick.
  function goTo(target: number) {
    if (target < 0 || target >= items.length) return;
    const st = stRef.current;
    if (!st) return;
    const progress = (target + 0.5) / items.length;
    window.scrollTo({ top: st.start + progress * (st.end - st.start), behavior: "smooth" });
  }

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
      <div className="relative mx-auto flex w-full max-w-sm items-center justify-center gap-2 sm:max-w-md sm:gap-5">
        {items.length > 1 && (
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            disabled={index === 0}
            aria-label="Imagem anterior"
            className="glass glow-border flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-paper transition-opacity disabled:opacity-30 disabled:pointer-events-none hover:bg-white/[0.07]"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2} />
          </button>
        )}

        <div className="relative w-full overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={index}
              initial={{ x: direction >= 0 ? 90 : -90, opacity: 0, scale: 0.85 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: direction >= 0 ? -90 : 90, opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {renderItem(current)}
            </motion.div>
          </AnimatePresence>
        </div>

        {items.length > 1 && (
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            disabled={index === items.length - 1}
            aria-label="Próxima imagem"
            className="glass glow-border flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-paper transition-opacity disabled:opacity-30 disabled:pointer-events-none hover:bg-white/[0.07]"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={2} />
          </button>
        )}
      </div>

      {items.length > 1 && (
        <div className="mt-6 flex justify-center gap-2" aria-hidden="true">
          {items.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-amber" : "w-1.5 bg-white/20"
              }`}
            />
          ))}
        </div>
      )}

      <p className="mt-4 text-xs text-muted" aria-live="polite">
        {index < items.length - 1 ? "Role a página ou toque nas setas" : "Continue rolando"}
      </p>
    </div>
  );
}
