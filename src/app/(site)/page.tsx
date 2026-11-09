import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Laptop, MapPin, Quote } from "lucide-react";

import { Container } from "@/components/layout/container";
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

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-primary mb-5 text-xs font-semibold tracking-[0.2em] uppercase">
      {children}
    </p>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b">
        <Container className="grid min-h-[calc(100svh-5rem)] items-stretch gap-12 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20 lg:py-0">
          <div className="flex flex-col justify-center py-6 lg:py-24">
            <SectionLabel>{rodrigoContent.hero.eyebrow}</SectionLabel>
            <h1 className="font-heading text-primary max-w-4xl text-[clamp(3.5rem,7vw,6.8rem)] leading-[0.9] font-semibold tracking-[-0.035em] text-balance">
              {rodrigoContent.hero.title}
            </h1>
            <p className="text-muted-foreground mt-8 max-w-xl text-lg leading-8">
              {rodrigoContent.hero.description}
            </p>
            <p className="mt-6 text-sm font-medium">
              Rodrigo Criveleto de Andrade{" "}
              <span className="text-accent mx-2">·</span> CRP 07/35989
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
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

          <figure className="relative min-h-[34rem] overflow-hidden lg:-right-[max(1.25rem,calc((100vw-80rem)/2))] lg:min-h-full">
            <Image
              src={`${siteConfig.basePath}/images/rodrigo-criveleto.jpeg`}
              alt="Retrato profissional do psicólogo Rodrigo Criveleto de Andrade"
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 46vw"
              className="object-cover object-[50%_42%]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            <figcaption className="text-on-image absolute right-8 bottom-8 left-8 sm:right-12 sm:bottom-12 sm:left-12">
              <span className="bg-accent block h-px w-16" />
              <p className="font-heading mt-4 max-w-xs text-2xl leading-tight font-semibold">
                A escuta como espaço de encontro.
              </p>
            </figcaption>
          </figure>
        </Container>
      </section>

      <section id="sobre" className="py-section-lg scroll-mt-20">
        <Container className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          <div>
            <SectionLabel>Sobre Rodrigo</SectionLabel>
            <p className="font-heading text-primary text-4xl leading-tight font-semibold sm:text-5xl">
              Escuta ética, individualizada e respeitosa.
            </p>
          </div>
          <div className="space-y-6 text-lg leading-8">
            {rodrigoContent.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="border-accent mt-10 border-l-2 pl-6">
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
        className="bg-primary text-primary-foreground py-section-lg scroll-mt-20"
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="mb-5 text-xs font-semibold tracking-[0.2em] uppercase opacity-70">
                A escuta psicanalítica
              </p>
              <h2 className="font-heading text-5xl leading-[0.98] font-semibold text-balance sm:text-6xl">
                Há caminhos que começam quando algo pode ser dito.
              </h2>
            </div>
            <div className="flex items-start gap-5 border-t border-white/20 pt-7 lg:mt-24">
              <Quote
                className="text-accent size-8 shrink-0"
                aria-hidden="true"
              />
              <p className="text-lg leading-8 opacity-85">
                Um espaço seguro e livre de julgamentos, no qual seja possível
                falar sobre sentimentos, angústias, conflitos e questões que
                atravessam a vida.
              </p>
            </div>
          </div>
          <ol className="mt-20 grid border-t border-white/20 md:grid-cols-3">
            {rodrigoContent.listening.map((item) => (
              <li
                key={item.number}
                className="border-b border-white/20 py-8 first:pl-0 last:border-r-0 md:border-r md:border-b-0 md:px-8"
              >
                <span className="text-accent text-sm font-semibold">
                  {item.number}
                </span>
                <h3 className="font-heading mt-10 text-3xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-4 leading-7 opacity-75">{item.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section id="atendimento" className="py-section-lg scroll-mt-20">
        <Container className="grid items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <div className="bg-secondary relative aspect-[4/3] overflow-hidden p-8 sm:p-12">
            <div className="border-primary/20 absolute inset-6 border" />
            <div className="relative flex h-full flex-col justify-between">
              <Laptop
                className="text-primary size-10"
                strokeWidth={1.4}
                aria-hidden="true"
              />
              <div>
                <p className="font-heading text-primary text-5xl font-semibold">
                  Online
                </p>
                <p className="text-muted-foreground mt-2">
                  Atendimento de onde você estiver.
                </p>
              </div>
            </div>
          </div>
          <div>
            <SectionLabel>Atendimento</SectionLabel>
            <h2 className="font-heading text-primary text-5xl leading-none font-semibold sm:text-6xl">
              Presença e escuta, mesmo à distância.
            </h2>
            <p className="text-muted-foreground mt-7 text-lg leading-8">
              Os atendimentos são realizados exclusivamente online, oferecendo
              um espaço de escuta individualizada e respeitosa ao tempo de cada
              pessoa.
            </p>
            <div className="mt-9 flex items-center gap-4 border-t pt-6">
              <MapPin className="text-accent size-5" aria-hidden="true" />
              <div>
                <p className="font-semibold">Modalidade online</p>
                <p className="text-muted-foreground mt-1 text-sm">
                  Plataforma, frequência e duração a confirmar.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="duvidas" className="bg-muted py-section-lg scroll-mt-20">
        <Container size="lg">
          <SectionLabel>Perguntas frequentes</SectionLabel>
          <h2 className="font-heading text-primary max-w-2xl text-5xl leading-none font-semibold sm:text-6xl">
            Antes de começar, é natural ter dúvidas.
          </h2>
          <div className="mt-14 border-t">
            {rodrigoContent.faqs.map((faq, index) => (
              <details key={faq.question} className="group border-b py-1">
                <summary className="focus-visible:ring-ring flex cursor-pointer list-none items-center gap-6 py-6 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden">
                  <span className="text-accent text-sm font-semibold">
                    0{index + 1}
                  </span>
                  <span className="font-heading text-primary flex-1 text-2xl font-semibold sm:text-3xl">
                    {faq.question}
                  </span>
                  <span
                    className="text-primary text-2xl transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="text-muted-foreground max-w-2xl pb-7 pl-12 leading-7">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section id="contato" className="py-section-lg scroll-mt-20">
        <Container size="lg" className="text-center">
          <SectionLabel>Primeiro contato</SectionLabel>
          <h2 className="font-heading text-primary mx-auto max-w-3xl text-5xl leading-[0.98] font-semibold text-balance sm:text-7xl">
            Quando fizer sentido, há um espaço para começar.
          </h2>
          <p className="text-muted-foreground mx-auto mt-7 max-w-xl text-lg leading-8">
            Entre em contato pelo WhatsApp para receber as orientações iniciais
            e conversar sobre a possibilidade de atendimento.
          </p>
          <Button asChild size="lg" className="mt-9">
            <a href={whatsappHref} target="_blank" rel="noreferrer">
              Conversar pelo WhatsApp <ArrowUpRight aria-hidden="true" />
            </a>
          </Button>
          <p className="text-muted-foreground mt-3 text-xs">+55 55 9107-5674</p>
        </Container>
      </section>
    </>
  );
}
