export default function ImageCard({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    // Sized by height (not width) — these are tall phone-screenshot images,
    // so fitting them to the available vertical space (capped so it always
    // clears the label/dots/caption around it) is what keeps the whole
    // screenshot visible instead of the top/bottom getting clipped by the
    // pinned section's viewport.
    <div className="glass glow-border relative mx-auto aspect-[369/800] h-[58vh] max-h-[560px] w-auto overflow-hidden rounded-[2rem] p-2">
      <div className="relative h-full w-full overflow-hidden rounded-[1.6rem] bg-[#050a1a]">
        <img src={src} alt={alt} className="h-full w-full object-contain" loading="lazy" />
      </div>
    </div>
  );
}
