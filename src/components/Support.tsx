import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import Eyebrow from "./ui/Eyebrow";
import ScrollCarousel from "./ui/ScrollCarousel";
import ImageCard from "./ui/ImageCard";

const SUPPORT_IMAGES = [
  { src: "/images/suporte-01.jpg", alt: "Aluno enviando comprovante da primeira venda no grupo" },
  { src: "/images/suporte-02.jpg", alt: "Aluno recebendo suporte pessoal no grupo" },
  { src: "/images/suporte-03.jpg", alt: "Aluno agradecendo pelo método e apoio recebido" },
  { src: "/images/suporte-04.jpg", alt: "Aluno fechando negócio de R$2.000 com um site" },
  { src: "/images/suporte-05.jpg", alt: "Aluno entregando sua primeira landing page com ajuda do grupo" },
  { src: "/images/suporte-06.jpg", alt: "Aluno impressionado com o resultado do primeiro site" },
];

export default function Support() {
  return (
    <section className="relative w-full bg-[#020611]">
      <Container className="text-center">
        <Reveal className="mx-auto max-w-2xl pt-24 sm:pt-28">
          <Eyebrow>Suporte</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-paper sm:text-4xl">
            Vou ter suporte se eu comprar o curso?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            Prints reais do grupo — alunos tirando dúvida, fechando negócio e recebendo
            ajuda direto comigo.
          </p>
        </Reveal>
      </Container>

      <ScrollCarousel
        items={SUPPORT_IMAGES}
        renderItem={(item) => (
          <ImageCard src={item.src} alt={item.alt} maxWidthClass="max-w-sm" />
        )}
      />
    </section>
  );
}
