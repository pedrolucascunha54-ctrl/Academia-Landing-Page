import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import Eyebrow from "./ui/Eyebrow";
import VideoCard from "./ui/VideoCard";

const VIDEOS = [
  "/videos/projeto-01.mp4",
  "/videos/projeto-02.mp4",
  "/videos/projeto-03.mp4",
  "/videos/projeto-04.mp4",
];

export default function VideoShowcase() {
  return (
    <section className="relative w-full py-24 sm:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Projetos reais</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-paper sm:text-4xl">
            Alguns sites reais criados com o método
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            Dá o play e veja alguns exemplos de sites reais já entregues.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {VIDEOS.map((src, i) => (
            <Reveal key={src} delay={i * 0.08}>
              <VideoCard src={src} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
