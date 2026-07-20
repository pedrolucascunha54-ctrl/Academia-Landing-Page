import Container from "./ui/Container";
import Reveal from "./ui/Reveal";

export default function Guarantee() {
  return (
    <section className="relative w-full py-20">
      <Container>
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-3xl border border-cyan/20 bg-gradient-to-br from-cyan/5 to-violet/5 p-8 text-center sm:flex-row sm:text-left sm:p-10">
          <div className="relative flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-neon to-violet shadow-[0_0_40px_rgba(232,163,61,0.4)]">
            <div className="flex h-[88px] w-[88px] items-center justify-center rounded-full bg-[#0f1214]">
              <span className="font-display text-4xl font-black text-gradient">7</span>
            </div>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-paper sm:text-3xl">
              Conheça o treinamento por 7 dias
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              Você poderá acessar o conteúdo e avaliar se o método faz sentido para o
              seu momento. Caso a oferta possua garantia, a solicitação deverá seguir os
              termos apresentados na página de compra.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
