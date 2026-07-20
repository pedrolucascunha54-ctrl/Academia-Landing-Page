import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface ScrollVideoSectionProps {
  id?: string;
  video: string;
  direction: "left" | "right";
  eyebrow: string;
  heading: ReactNode;
  children: ReactNode;
  /** Default true (silent looping B-roll). Set false for videos with spoken audio. */
  muted?: boolean;
  /** Default true. Set false for a one-shot video (e.g. a talking-head clip). */
  loop?: boolean;
  /** Still image shown before playback starts (instead of plain black) and as a fallback. */
  poster?: string;
  /** Default "cover" (fills the box, may crop). Use "contain" to always show the full frame uncropped. */
  fit?: "cover" | "contain";
}

export default function ScrollVideoSection({
  id,
  video,
  direction,
  eyebrow,
  heading,
  children,
  muted = true,
  loop = true,
  poster,
  fit = "cover",
}: ScrollVideoSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const videoWrapRef = useRef<HTMLDivElement>(null);
  const videoElRef = useRef<HTMLVideoElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  // Muted video: autoplay is fine. Video with sound: browsers block autoplay
  // with audio, so playback only starts once the viewer taps the play button.
  const [hasStarted, setHasStarted] = useState(muted);

  // Mount the <video> a little before it's visible, so it has time to buffer.
  useLayoutEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Only actually play the video while the section is on screen — pausing it
  // when scrolled away keeps multiple videos from decoding simultaneously,
  // which is what was causing the scroll to feel heavy/laggy. For videos with
  // sound, this only kicks in after the viewer has started playback once.
  useLayoutEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        const v = videoElRef.current;
        if (!v) return;
        if (entry.isIntersecting) {
          if (hasStarted) v.play().catch(() => {});
        } else {
          v.pause();
        }
      },
      { rootMargin: "100px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [shouldLoad, hasStarted]);

  function handleManualPlay() {
    setHasStarted(true);
    videoElRef.current?.play().catch(() => {});
  }

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const textChildren = textRef.current ? Array.from(textRef.current.children) : [];

      gsap.set(videoWrapRef.current, { yPercent: -100, opacity: 0 });
      gsap.set(textChildren, { y: -30, opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${window.innerHeight}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to(videoWrapRef.current, {
        yPercent: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      }).to(
        textChildren,
        {
          y: 0,
          opacity: 1,
          duration: 0.45,
          stagger: 0.12,
          ease: "power3.out",
        },
        "-=0.25"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [direction]);

  return (
    <section
      ref={sectionRef}
      id={id}
      className="relative h-screen w-full overflow-hidden bg-[#0f1214]"
    >
      <div className="flex h-full w-full flex-col lg:flex-row">
        <div
          ref={videoWrapRef}
          className={`relative h-[44%] w-full overflow-hidden lg:h-full lg:w-1/2 ${
            direction === "left" ? "lg:order-1" : "lg:order-2"
          }`}
        >
          {shouldLoad && (
            <video
              ref={videoElRef}
              src={video}
              muted={muted}
              loop={loop}
              playsInline
              preload={muted ? "auto" : "none"}
              poster={poster}
              className={`h-full w-full ${fit === "contain" ? "object-contain" : "object-cover"}`}
            />
          )}
          {shouldLoad && !muted && !hasStarted && (
            <button
              type="button"
              onClick={handleManualPlay}
              aria-label="Reproduzir vídeo com áudio"
              className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors hover:bg-black/40"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-neon to-violet shadow-[0_0_30px_rgba(232,163,61,0.5)]">
                <Play className="h-7 w-7 translate-x-0.5 text-[#0f1214]" fill="currentColor" />
              </span>
            </button>
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f1214] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent" />
        </div>

        <div
          ref={textRef}
          className={`relative flex flex-1 flex-col justify-start gap-4 px-6 pt-6 pb-8 sm:px-10 lg:justify-center lg:px-16 lg:py-8 ${
            direction === "left" ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan/30 bg-cyan/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_10px_#4c86b8]" />
            {eyebrow}
          </span>
          <h2 className="font-display text-2xl font-bold leading-tight text-paper sm:text-3xl lg:text-4xl">
            {heading}
          </h2>
          {children}
        </div>
      </div>
    </section>
  );
}
