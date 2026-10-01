import { ArrowUpRight } from "lucide-react";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const PROJECTS = [
  {
    src: "/images/portfolio/cafe-brunelli.webp",
    alt: "Página inicial do site Café Brunelli",
    title: "Café Brunelli",
    category: "E-commerce",
    text: "Loja de cafés especiais com vitrine de produtos e compra online.",
    url: "https://cafebrunelli.com/",
  },
  {
    src: "/images/portfolio/luctor-imoveis.webp",
    alt: "Página inicial do site Luctor Imóveis",
    title: "Luctor Imóveis",
    category: "Landing page",
    text: "Kitnets e estúdios mobiliados para locação no centro da cidade.",
    url: "https://www.luctorimoveis.com.br/",
  },
  {
    src: "/images/portfolio/guarda-food.webp",
    alt: "Página inicial do site Guarda Food",
    title: "Guarda Food",
    category: "Landing page",
    text: "Mini mercados autônomos 24 horas para condomínios e hotéis.",
    url: "https://www.guardafoods.com.br/",
  },
  {
    src: "/images/portfolio/flow-tattoo.webp",
    alt: "Página inicial do site Flow Tattoo",
    title: "Flow Tattoo",
    category: "Landing page",
    text: "Estúdio de tatuagem de realismo preto e cinza.",
    url: "https://diegoflowtattoo.online/",
  },
  {
    src: "/images/portfolio/bonita-make.webp",
    alt: "Página inicial do site Bonita Make",
    title: "Bonita Make",
    category: "E-commerce",
    text: "Loja de maquiagem com catálogo extenso e checkout via Pix.",
    url: "https://www.bonitamake.com.br/",
  },
  {
    src: "/images/portfolio/sandra-fitoterapeuta.webp",
    alt: "Página inicial do site Saúde Verde — Sandra Fitoterapeuta",
    title: "Saúde Verde",
    category: "Landing page",
    text: "Site de terapeuta holística com agendamento pelo WhatsApp.",
    url: "https://www.sandrafitoterapeuta.com.br/",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative w-full py-24 sm:py-32">
      <Container>
        <SectionHeading
          index="08"
          eyebrow="Portfólio"
          title="Alguns projetos que eu já construí."
          intro="Sites e lojas reais, no ar, de clientes reais — não são templates de demonstração."
          className="mb-14"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map(({ src, alt, title, category, text, url }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full overflow-hidden rounded-2xl border border-line bg-white transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(22,24,27,0.45)]"
              >
                <div className="aspect-[16/10] overflow-hidden border-b border-line bg-sand">
                  <img
                    src={src}
                    alt={alt}
                    width={1200}
                    height={750}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display text-xl font-bold uppercase text-ink">{title}</h3>
                    <span className="shrink-0 font-mono-tech text-[10px] uppercase tracking-[0.16em] text-stone">
                      {category}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{text}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-deep">
                    Ver projeto no ar
                    <span className="sr-only">(abre em nova aba)</span>
                    <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
