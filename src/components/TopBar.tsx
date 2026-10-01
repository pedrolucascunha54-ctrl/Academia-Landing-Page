export default function TopBar() {
  return (
    <div className="relative z-40 w-full bg-ink py-2 text-center">
      <p className="mx-auto max-w-7xl px-5 font-mono-tech text-[10.5px] uppercase tracking-[0.18em] text-paper/80 sm:text-[11px]">
        Sites com IA <span className="text-amber">·</span> E-commerce{" "}
        <span className="text-amber">·</span> Google{" "}
        <span className="hidden sm:inline">
          <span className="text-amber">·</span> Scripts de vendas
        </span>
      </p>
    </div>
  );
}
