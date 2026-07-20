export default function ImageCard({
  src,
  alt,
  maxWidthClass = "max-w-sm",
}: {
  src: string;
  alt: string;
  maxWidthClass?: string;
}) {
  return (
    <div
      className={`glass glow-border relative mx-auto aspect-[369/800] w-full ${maxWidthClass} overflow-hidden rounded-[2rem] p-2`}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[1.6rem] bg-[#050a1a]">
        <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
      </div>
    </div>
  );
}
