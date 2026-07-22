import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import Eyebrow from "./ui/Eyebrow";
import ScrollCarousel from "./ui/ScrollCarousel";
import ImageCard from "./ui/ImageCard";

const SUPPORT_IMAGES = [
  { src: "/images/suporte-01.jpg", alt: "Aluno agradecendo após fechar uma venda e receber o pagamento" },
  { src: "/images/suporte-02.jpg", alt: "Mentoria tirando dúvida de aluno sobre como abordar clientes" },
  { src: "/images/suporte-03.jpg", alt: "Mentoria ajudando aluno com follow-up de prospecção" },
  { src: "/images/suporte-04.jpg", alt: "Aluno fechando venda de site por R$1.000" },
  { src: "/images/suporte-05.jpg", alt: "Aluno entregando sua primeira landing page" },
  { src: "/images/suporte-06.jpg", alt: "Alunos impressionados com a qualidade do primeiro site entregue" },
];

export default function Support() {
  return (
    <section className="relative w-full bg-[#0f1214]">
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
        renderItem={(item) => <ImageCard src={item.src} alt={item.alt} />}
      />
    </section>
  );
}
