import { ArrowUpRight } from "lucide-react";
import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import Eyebrow from "./ui/Eyebrow";

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
    <section className="relative w-full py-24 sm:py-28">
      <Container>
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <Eyebrow>Portfólio</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-paper sm:text-4xl">
            Alguns sites que eu já construí
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            Projetos reais, no ar, de clientes reais — não são templates de demonstração.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map(({ src, alt, title, category, text, url }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass glow-border group block h-full overflow-hidden rounded-2xl transition-transform hover:-translate-y-1.5"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#0a0c0d]">
                  <img
                    src={src}
                    alt={alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display text-lg font-bold text-paper">{title}</h3>
                    <span className="shrink-0 rounded-full border border-cyan/30 bg-cyan/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-cyan">
                      {category}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan">
                    Ver site funcionando
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
