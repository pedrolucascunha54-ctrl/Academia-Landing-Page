import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollVideoSectionProps {
  id?: string;
  video: string;
  direction: "left" | "right";
  eyebrow: string;
  heading: ReactNode;
  children: ReactNode;
}

export default function ScrollVideoSection({
  id,
  video,
  direction,
  eyebrow,
  heading,
  children,
}: ScrollVideoSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const videoWrapRef = useRef<HTMLDivElement>(null);
  const videoElRef = useRef<HTMLVideoElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

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
  // which is what was causing the scroll to feel heavy/laggy.
  useLayoutEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        const v = videoElRef.current;
        if (!v) return;
        if (entry.isIntersecting) {
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      },
      { rootMargin: "100px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [shouldLoad]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const fromX = direction === "left" ? -100 : 100;
      const textChildren = textRef.current ? Array.from(textRef.current.children) : [];

      gsap.set(videoWrapRef.current, { xPercent: fromX, opacity: 0 });
      gsap.set(textChildren, { x: fromX * -0.5, opacity: 0 });

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
        xPercent: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      }).to(
        textChildren,
        {
          x: 0,
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
      className="relative h-screen w-full overflow-hidden bg-[#020611]"
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
              muted
              loop
              playsInline
              preload="auto"
              className="h-full w-full object-cover"
            />
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020611] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent" />
        </div>

        <div
          ref={textRef}
          className={`relative flex flex-1 flex-col justify-start gap-4 px-6 pt-6 pb-8 sm:px-10 lg:justify-center lg:px-16 lg:py-8 ${
            direction === "left" ? "lg:order-2" : "lg:order-1"
          }`}
        >
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan/30 bg-cyan/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan shadow-[0_0_10px_#25E6FF]" />
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
