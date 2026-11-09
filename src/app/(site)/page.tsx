import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Quote } from "lucide-react";

import { Container } from "@/components/layout/container";
import { MotionObserver } from "@/components/shared/motion-observer";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { rodrigoContent } from "@/content/rodrigo";

const whatsappMessage = encodeURIComponent(
  "Olá, Rodrigo. Encontrei seu site e gostaria de saber mais sobre o atendimento psicológico online.",
);
const whatsappHref = `https://wa.me/${siteConfig.contact.whatsapp}?text=${whatsappMessage}`;

export const metadata: Metadata = {
  title: "Psicologia Clínica online",
  description: siteConfig.description,
  alternates: siteConfig.isIndexable
    ? { canonical: siteConfig.url }
    : undefined,
};

function SectionLabel({
  children,
  tone = "default",
}: {
  children: React.ReactNode;
  tone?: "default" | "inverse";
}) {
  return (
    <p
      className={`mb-6 text-xs font-semibold tracking-[0.18em] uppercase ${tone === "inverse" ? "text-secondary" : "text-primary"}`}
    >
      {children}
    </p>
  );
}

export default function HomePage() {
  return (
    <>
      <MotionObserver />
      <section className="relative overflow-hidden border-b">
        <Container className="grid min-h-[calc(100svh-5rem)] items-stretch gap-10 py-12 sm:py-16 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16 lg:py-0 xl:gap-24">
          <div className="relative z-10 flex flex-col justify-center py-4 lg:py-24">
            <span
              className="border-accent absolute top-12 -left-8 hidden size-16 border-t border-l xl:block"
              aria-hidden="true"
            />
            <div data-hero-reveal="1">
              <SectionLabel>{rodrigoContent.hero.eyebrow}</SectionLabel>
            </div>
            <h1
              data-hero-reveal="2"
              className="font-heading text-primary max-w-[10ch] text-[clamp(3.4rem,6.4vw,6.65rem)] leading-[0.89] font-semibold tracking-[-0.035em] sm:max-w-[11ch]"
            >
              <span className="block">Um espaço para a sua</span>
              <span className="block italic">palavra, no seu tempo.</span>
            </h1>
            <p
              data-hero-reveal="3"
              className="text-muted-foreground mt-8 max-w-lg text-lg leading-8 sm:mt-10"
            >
              {rodrigoContent.hero.description}
            </p>
            <div
              data-hero-reveal="4"
              className="border-border mt-7 flex max-w-lg flex-col gap-1 border-t pt-5 text-sm sm:flex-row sm:items-center sm:gap-3"
            >
              <p className="font-semibold">{siteConfig.name}</p>
              <span className="text-accent hidden sm:inline" aria-hidden="true">
                ·
              </span>
              <p className="text-muted-foreground">
                {siteConfig.professionalTitle} · {siteConfig.registration}
              </p>
            </div>
            <div
              data-hero-reveal="5"
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Button asChild size="lg">
                <a href={whatsappHref} target="_blank" rel="noreferrer">
                  Agendar atendimento <ArrowUpRight aria-hidden="true" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#sobre">
                  Conheça meu trabalho <ArrowDown aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>

          <figure
            data-hero-photo
            className="relative min-h-[32rem] overflow-hidden sm:min-h-[42rem] lg:-right-[max(1.25rem,calc((100vw-80rem)/2))] lg:min-h-full"
          >
            <Image
              src={`${siteConfig.basePath}/images/rodrigo-criveleto.jpeg`}
              alt="Retrato profissional do psicólogo Rodrigo Criveleto de Andrade"
              fill
              preload
              sizes="(max-width: 1023px) 100vw, 55vw"
              className="object-cover object-[50%_36%] sm:object-[50%_40%] lg:object-[50%_43%]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            <figcaption className="text-on-image absolute right-7 bottom-7 left-7 flex items-end gap-4 sm:right-12 sm:bottom-12 sm:left-12">
              <span className="border-accent mb-1 block size-8 shrink-0 border-b border-l" />
              <p className="font-heading max-w-xs text-2xl leading-[1.05] font-semibold">
                A escuta como espaço de encontro.
              </p>
            </figcaption>
          </figure>
        </Container>
      </section>

      <section
        id="sobre"
        className="py-section-lg scroll-mt-32 md:scroll-mt-20"
      >
        <Container className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20 xl:gap-28">
          <div data-reveal className="lg:sticky lg:top-32 lg:self-start">
            <SectionLabel>Sobre Rodrigo</SectionLabel>
            <h2 className="font-heading text-primary max-w-md text-4xl leading-[1.04] font-semibold text-balance sm:text-5xl">
              Escuta ética, individualizada e respeitosa.
            </h2>
          </div>
          <div data-reveal className="max-w-2xl space-y-6 text-lg leading-8">
            <p className="font-heading text-primary border-accent max-w-xl border-l pl-6 text-3xl leading-[1.08] font-semibold italic sm:text-4xl">
              A singularidade não cabe em respostas prontas.
            </p>
            {rodrigoContent.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="border-border mt-10 border-t pt-6">
              <p className="text-sm font-semibold tracking-[0.12em] uppercase">
                Atuação profissional
              </p>
              <p className="text-muted-foreground mt-2">
                Psicologia Clínica · Abordagem psicanalítica · Experiência em
                Psicologia Educacional
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section
        id="escuta"
        className="bg-primary text-primary-foreground py-section-lg scroll-mt-32 md:scroll-mt-20"
      >
        <Container>
          <div
            data-reveal
            className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:gap-24"
          >
            <div>
              <SectionLabel tone="inverse">A escuta psicanalítica</SectionLabel>
              <h2 className="font-heading max-w-2xl text-5xl leading-[0.94] font-semibold text-balance sm:text-6xl lg:text-7xl">
                Há caminhos que começam quando algo pode ser dito.
              </h2>
            </div>
            <div className="border-secondary/25 flex items-start gap-5 border-t pt-7">
              <Quote
                className="text-accent size-8 shrink-0"
                aria-hidden="true"
              />
              <p className="text-secondary text-lg leading-8">
                Ofereço um espaço livre de julgamentos, no qual seja possível
                falar sobre sentimentos, angústias, conflitos e questões da
                vida.
              </p>
            </div>
          </div>
          <ol data-reveal-list className="motion-listen-list mt-20">
            {rodrigoContent.listening.map((item) => (
              <li
                key={item.number}
                className="border-secondary/20 grid gap-5 border-b py-8 sm:grid-cols-[4rem_1fr] sm:gap-8 lg:grid-cols-[5rem_0.65fr_1.35fr] lg:items-baseline lg:gap-12 lg:py-10"
              >
                <span className="font-heading text-accent text-4xl leading-none font-semibold italic">
                  {item.number}
                </span>
                <h3 className="font-heading text-secondary text-3xl leading-[1.05] font-semibold">
                  {item.title}
                </h3>
                <p className="text-secondary/80 max-w-xl leading-7 sm:col-start-2 lg:col-start-auto">
                  {item.text}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section
        id="atendimento"
        className="py-section-lg scroll-mt-32 md:scroll-mt-20"
      >
        <Container className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20 xl:gap-28">
          <div
            data-reveal
            className="bg-secondary relative min-h-[27rem] overflow-hidden p-8 sm:min-h-[30rem] sm:p-12"
          >
            <div className="border-primary/20 absolute inset-5 border sm:inset-7" />
            <span
              className="border-primary/15 absolute -top-20 -right-20 size-64 rounded-full border sm:size-80"
              aria-hidden="true"
            />
            <div className="relative z-10 flex min-h-[23rem] flex-col justify-between sm:min-h-[24rem]">
              <p className="text-primary text-xs font-semibold tracking-[0.18em] uppercase">
                Modalidade de atendimento
              </p>
              <div>
                <p className="font-heading text-primary text-[clamp(2.65rem,5.8vw,5.25rem)] leading-[0.88] font-semibold tracking-[-0.045em]">
                  Exclusivamente
                </p>
                <p className="font-heading text-primary ml-[0.55em] text-[clamp(4.25rem,8vw,7.25rem)] leading-[0.82] font-semibold tracking-[-0.055em] italic">
                  online.
                </p>
              </div>
              <p className="text-muted-foreground max-w-xs text-sm leading-6">
                Um espaço reservado para a fala e a escuta, mesmo à distância.
              </p>
            </div>
          </div>
          <div data-reveal>
            <SectionLabel>Atendimento</SectionLabel>
            <h2 className="font-heading text-primary text-5xl leading-[1.02] font-semibold text-balance sm:text-6xl">
              Presença e escuta, mesmo à distância.
            </h2>
            <p className="text-muted-foreground mt-7 text-lg leading-8">
              Nesse formato, ofereço um espaço de escuta individualizada e
              respeitosa ao tempo de cada pessoa.
            </p>
          </div>
        </Container>
      </section>

      <section
        id="duvidas"
        className="bg-muted py-section-lg scroll-mt-32 md:scroll-mt-20"
      >
        <Container size="lg">
          <div data-reveal>
            <SectionLabel>Perguntas frequentes</SectionLabel>
            <h2 className="font-heading text-primary max-w-2xl text-5xl leading-[1.02] font-semibold text-balance sm:text-6xl">
              Antes de começar, é natural ter dúvidas.
            </h2>
          </div>
          <div className="border-primary/20 mt-14 border-t">
            {rodrigoContent.faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="motion-faq group border-primary/20 border-b"
              >
                <summary className="focus-visible:ring-ring hover:bg-secondary/65 flex cursor-pointer list-none items-center gap-4 px-2 py-7 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-offset-2 motion-reduce:transition-none sm:gap-6 sm:px-4 [&::-webkit-details-marker]:hidden">
                  <span className="text-primary/65 text-sm font-semibold">
                    0{index + 1}
                  </span>
                  <span className="font-heading text-primary flex-1 text-2xl font-semibold sm:text-3xl">
                    {faq.question}
                  </span>
                  <span
                    className="text-primary grid size-8 place-items-center text-2xl transition-transform group-open:rotate-45 motion-reduce:transition-none"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="text-muted-foreground max-w-2xl px-2 pb-8 leading-7 sm:px-4 sm:pl-16">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section
        id="contato"
        className="bg-primary text-primary-foreground py-section-lg scroll-mt-32 md:scroll-mt-20"
      >
        <Container size="lg" className="relative text-center">
          <span
            className="border-accent/70 absolute top-0 left-1/2 h-14 border-l"
            aria-hidden="true"
          />
          <div data-reveal className="pt-24">
            <SectionLabel tone="inverse">Primeiro contato</SectionLabel>
          </div>
          <h2 className="font-heading mx-auto max-w-3xl text-5xl leading-[0.96] font-semibold text-balance sm:text-7xl">
            Quando fizer sentido, há um espaço para começar.
          </h2>
          <p className="text-secondary/85 mx-auto mt-8 max-w-xl text-lg leading-8">
            Entre em contato pelo WhatsApp para receber as orientações iniciais
            e conversar sobre a possibilidade de atendimento.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-10">
            <a href={whatsappHref} target="_blank" rel="noreferrer">
              Conversar pelo WhatsApp <ArrowUpRight aria-hidden="true" />
            </a>
          </Button>
          <p className="text-secondary/75 mt-4 text-xs">
            {siteConfig.contact.whatsappDisplay}
          </p>
        </Container>
      </section>
    </>
  );
}
