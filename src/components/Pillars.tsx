import { motion } from "framer-motion";
import { Check } from "lucide-react";
import type { ReactNode } from "react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import CTAButton from "./ui/CTAButton";
import DemoVideo from "./ui/DemoVideo";

const ease = [0.22, 1, 0.36, 1] as const;

function Pillar({
  number,
  kicker,
  title,
  body,
  points,
  note,
  visual,
  flip = false,
}: {
  number: string;
  kicker: string;
  title: string;
  body: ReactNode;
  points: string[];
  note?: string;
  visual: ReactNode;
  flip?: boolean;
}) {
  return (
    <div className="grid items-center gap-12 border-t border-line py-16 sm:py-20 lg:grid-cols-2 lg:gap-20">
      <div className={flip ? "lg:order-last" : ""}>
        <Reveal>
          <div className="flex items-baseline gap-4">
            <span className="font-display text-6xl font-extrabold leading-none text-amber sm:text-7xl">
              {number}
            </span>
            <span className="font-mono-tech text-[11px] uppercase tracking-[0.2em] text-stone">
              {kicker}
            </span>
          </div>
          <h3 className="mt-5 font-display text-3xl font-bold uppercase leading-[0.98] text-ink sm:text-[2.6rem]">
            {title}
          </h3>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-ink-soft sm:text-[17px]">{body}</div>
        </Reveal>
        <ul className="mt-7 grid gap-x-6 gap-y-3 sm:grid-cols-2">
          {points.map((p, i) => (
            <motion.li
              key={p}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05, ease }}
              className="flex items-start gap-2.5 text-[15px] text-ink"
            >
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-deep" strokeWidth={2.5} />
              {p}
            </motion.li>
          ))}
        </ul>
        {note && <p className="mt-6 border-l-2 border-amber pl-4 text-sm leading-relaxed text-stone">{note}</p>}
      </div>
      <div>{visual}</div>
    </div>
  );
}

function BrowserShot({ src, alt, url }: { src: string; alt: string; url: string }) {
  return (
    <figure className="overflow-hidden rounded-xl border border-ink/10 bg-white shadow-[0_24px_60px_-28px_rgba(22,24,27,0.5)]">
      <div className="flex items-center gap-1.5 border-b border-line bg-canvas px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-ink/15" />
        <span className="h-2 w-2 rounded-full bg-ink/15" />
        <span className="h-2 w-2 rounded-full bg-ink/15" />
        <span className="ml-2 truncate font-mono-tech text-[10px] text-stone">{url}</span>
      </div>
      <img src={src} alt={alt} width={1200} height={750} loading="lazy" decoding="async" className="block w-full" />
    </figure>
  );
}

function SitesVisual() {
  return (
    <div className="relative">
      <div className="grid grid-cols-2 gap-4 sm:gap-5">
        {[
          { n: "01", label: "Demonstração de site de terapia natural navegado no computador" },
          { n: "04", label: "Demonstração de site para empresa de drones agrícolas navegado no computador" },
        ].map((d, i) => (
          <motion.div
            key={d.n}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: i === 1 ? 32 : 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: i * 0.12, ease }}
            className="aspect-[9/16] overflow-hidden rounded-2xl bg-ink ring-1 ring-ink/10"
          >
            <DemoVideo src={`/demos/demo-${d.n}.mp4`} poster={`/demos/demo-${d.n}.webp`} label={d.label} />
          </motion.div>
        ))}
      </div>
      <p className="mt-12 font-mono-tech text-[11px] uppercase tracking-[0.16em] text-stone">
        Gravações reais de sites que eu construí
      </p>
    </div>
  );
}

function StoreVisual() {
  return (
    <div className="relative pb-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease }}
        className="w-[88%]"
      >
        <BrowserShot
          src="/images/portfolio/cafe-brunelli.webp"
          alt="Loja virtual Café Brunelli, criada na Nuvemshop"
          url="cafebrunelli.com"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, delay: 0.15, ease }}
        className="absolute bottom-0 right-0 w-[62%]"
      >
        <BrowserShot
          src="/images/portfolio/bonita-make.webp"
          alt="Loja virtual Bonita Make, criada na Nuvemshop"
          url="bonitamake.com.br"
        />
      </motion.div>
      <p className="mt-4 font-mono-tech text-[11px] uppercase tracking-[0.16em] text-stone">
        Lojas na Nuvemshop que eu construí
      </p>
    </div>
  );
}

const PROFILE_ITEMS = [
  "Perfil criado e verificado",
  "Categorias certas",
  "Serviços cadastrados",
  "Descrição clara",
  "Informações de contato e região",
  "Rotina para pedir avaliações genuínas",
];

function GoogleVisual() {
  return (
    <div className="mx-auto max-w-md rounded-[1.75rem] border border-ink/10 bg-white p-6 shadow-[0_30px_80px_-40px_rgba(22,24,27,0.5)] sm:p-8">
      <div className="flex items-center gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sand font-display text-xl font-bold text-ink">
          E
        </span>
        <div>
          <p className="font-semibold text-ink">Empresa do seu cliente</p>
          <p className="text-sm text-stone">Perfil da Empresa no Google</p>
        </div>
      </div>
      <p className="mt-6 font-mono-tech text-[10px] uppercase tracking-[0.18em] text-stone">
        Checklist de otimização
      </p>
      <ul className="mt-3 space-y-1">
        {PROFILE_ITEMS.map((item, i) => (
          <li key={item} className="flex items-center gap-3 border-b border-line py-2.5 text-[15px] text-ink last:border-0">
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: 0.2 + i * 0.12, ease }}
              className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#3f8a5a] text-white"
            >
              <Check className="h-3 w-3" strokeWidth={3} />
            </motion.span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Pillars() {
  return (
    <section id="conteudo" className="relative w-full py-24 sm:py-32">
      <Container>
        <SectionHeading
          index="03"
          eyebrow="O que você vai aprender"
          title="Três soluções que toda empresa entende."
          intro="Cada uma é uma habilidade — e também um serviço que você pode oferecer. Juntas, elas ampliam o que você consegue apresentar para um mesmo cliente."
        />

        <div className="mt-14">
          <Pillar
            number="01"
            kicker="Criação de sites com IA"
            title="Sites profissionais, criados com IA."
            body={
              <p>
                Você usa o <strong className="text-ink">ChatGPT</strong> para planejar e escrever, o{" "}
                <strong className="text-ink">Claude</strong> para construir e corrigir o código e o{" "}
                <strong className="text-ink">Flow</strong> para vídeos e animações — e transforma
                isso em um serviço que pode ser oferecido para empresas.
              </p>
            }
            points={[
              "Estrutura e textos da página",
              "Código, componentes e responsividade",
              "Vídeos e animações para o site",
              "Formulários e botão de WhatsApp",
              "Publicação e domínio",
              "Como apresentar o projeto ao cliente",
            ]}
            visual={<SitesVisual />}
          />

          <Pillar
            flip
            number="02"
            kicker="E-commerce com Nuvemshop"
            title="Lojas virtuais do zero, na Nuvemshop."
            body={
              <>
                <p>
                  Hoje você chega em uma empresa e oferece um site. Depois de aprender e-commerce,
                  também pode oferecer uma <strong className="text-ink">loja virtual completa</strong>.
                </p>
                <p>
                  É mais um tipo de projeto no seu portfólio — e mais uma possibilidade de serviço
                  para negócios que querem vender pela internet.
                </p>
              </>
            }
            points={[
              "Criação da loja do zero na Nuvemshop",
              "Mais um serviço no seu portfólio",
              "Uma solução para quem quer vender online",
              "Como oferecer a loja junto com o site",
            ]}
            visual={<StoreVisual />}
          />

          <Pillar
            number="03"
            kicker="Google / SEO local"
            title="Presença da empresa no Google."
            body={
              <p>
                Você aprende a criar, configurar e organizar o{" "}
                <strong className="text-ink">Perfil da Empresa no Google</strong> e a cuidar da
                presença local do negócio — mais uma solução comercial para oferecer junto com o
                site.
              </p>
            }
            points={[
              "Criação e configuração do perfil",
              "Otimização das informações",
              "Categorias e serviços",
              "Descrição e presença local",
              "Organização do perfil",
              "Estratégias para avaliações genuínas",
            ]}
            note="Ninguém controla o ranking do Google, então aqui não existe promessa de primeira posição. Você aprende a deixar o perfil completo, organizado e fiel à empresa."
            visual={<GoogleVisual />}
          />
        </div>

        <Reveal className="mt-4 flex justify-center border-t border-line pt-14">
          <CTAButton>Quero aprender</CTAButton>
        </Reveal>
      </Container>
    </section>
  );
}
