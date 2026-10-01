import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SWIPE_THRESHOLD = 60;

/**
 * Item-by-item carousel changed only by the arrows (or a horizontal swipe on
 * touch). Page scroll is never captured: drag is locked to the x axis, so
 * vertical wheel/trackpad/touch scrolling always moves the page.
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
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);

  function goTo(target: number) {
    if (target < 0 || target >= items.length || target === index) return;
    setIndex([target, target > index ? 1 : -1]);
  }

  const current = items[index];
  if (!current) return null;

  const arrow =
    "glass glow-border flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-paper transition-opacity disabled:pointer-events-none disabled:opacity-30 hover:bg-white/[0.07]";

  return (
    <div className="relative flex w-full flex-col items-center py-16" role="region" aria-roledescription="carrossel" aria-label={label ?? "Prints do grupo de suporte"}>
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
            className={arrow}
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2} />
          </button>
        )}

        <div className="relative w-full overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={index}
              drag={items.length > 1 ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.25}
              onDragEnd={(_, info) => {
                if (info.offset.x < -SWIPE_THRESHOLD) goTo(index + 1);
                else if (info.offset.x > SWIPE_THRESHOLD) goTo(index - 1);
              }}
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
            className={arrow}
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
                i === index ? "w-6 bg-cyan" : "w-1.5 bg-white/20"
              }`}
            />
          ))}
        </div>
      )}

      <p className="mt-4 text-xs text-muted" aria-live="polite">
        Print {index + 1} de {items.length} · use as setas para ver os outros
      </p>
    </div>
  );
}
