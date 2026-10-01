import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import ScrollCarousel from "./ui/ScrollCarousel";
import ImageCard from "./ui/ImageCard";

const SUPPORT_IMAGES = [
  { src: "/images/suporte-01.webp", alt: "Aluno agradecendo após fechar uma venda e receber o pagamento" },
  { src: "/images/suporte-02.webp", alt: "Mentoria tirando dúvida de aluno sobre como abordar clientes" },
  { src: "/images/suporte-03.webp", alt: "Mentoria ajudando aluno com follow-up de prospecção" },
  { src: "/images/suporte-04.webp", alt: "Aluno fechando venda de site por R$1.000" },
  { src: "/images/suporte-05.webp", alt: "Aluno entregando sua primeira landing page" },
  { src: "/images/suporte-06.webp", alt: "Alunos impressionados com a qualidade do primeiro site entregue" },
  {
    src: "/images/suporte-07.webp",
    alt: "Aluno agradecendo no Instagram por ter fechado dois contratos de R$1.200 aplicando os vídeos gratuitos",
  },
  {
    src: "/images/suporte-08.webp",
    alt: "Aluno comemorando no grupo um contrato de R$4.500 fechado com uma clínica de estética",
  },
  {
    src: "/images/suporte-09.webp",
    alt: "Aluno fechando negócio de R$1.297 por site mais Google Meu Negócio",
  },
  {
    src: "/images/suporte-10.webp",
    alt: "Comprovante de Pix de R$1.000 recebido por um aluno que já recuperou o valor do curso com um único site",
  },
  {
    src: "/images/suporte-11.webp",
    alt: "Comprovante de Pix de R$800 recebido por aluno comemorando o primeiro de muitos pagamentos",
  },
];

export default function Support() {
  return (
    <section id="suporte" className="relative w-full bg-ink">
      <Container>
        <div className="pt-24 sm:pt-32">
          <SectionHeading
            tone="dark"
            align="center"
            index="07"
            eyebrow="Grupo de suporte"
            title="Você não fica sozinho depois da compra."
            intro="Prints reais do grupo — alunos tirando dúvida, mostrando projetos, fechando negócio e recebendo ajuda direto comigo."
          />
        </div>
      </Container>

      <ScrollCarousel
        items={SUPPORT_IMAGES}
        renderItem={(item) => <ImageCard src={item.src} alt={item.alt} />}
      />
    </section>
  );
}
