import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ThemeToggle } from "@/app/dev/_components/theme-toggle";
import { ContentSectionExamples } from "@/app/dev/sections/_components/content-section-examples";
import { ConversionSectionExamples } from "@/app/dev/sections/_components/conversion-section-examples";
import { PortfolioGalleryExamples } from "@/app/dev/sections/_components/portfolio-gallery-examples";
import { Container } from "@/components/layout/container";
import {
  HeroCentered,
  HeroFullBleed,
  HeroSplit,
} from "@/components/sections/hero";
import { Heading } from "@/components/ui/heading";
import { Link } from "@/components/ui/link";
import { Text } from "@/components/ui/text";

export const metadata: Metadata = {
  title: "Section Library Showcase",
  description: "Catálogo local da biblioteca de seções do Website Starter Kit.",
  robots: { index: false, follow: false, nocache: true },
};

const navigation = [
  { label: "Overview", href: "#overview" },
  { label: "Hero Sections", href: "#hero-sections" },
  { label: "Content Sections", href: "#content-sections" },
  { label: "Services & Features", href: "#services-features" },
  { label: "Statistics", href: "#statistics" },
  { label: "Portfolio & Gallery", href: "#portfolio-gallery" },
  { label: "Conversion Sections", href: "#conversion-sections" },
] as const;

export default function SectionsShowcasePage() {
  if (process.env.NODE_ENV !== "development") notFound();

  return (
    <main
      id="sections-showcase"
      className="bg-background text-foreground border-primary/20 relative isolate z-10 min-h-screen border-y-4 transition-colors [transition-duration:var(--duration-normal)] motion-reduce:transition-none"
    >
      <header id="overview" className="bg-surface scroll-mt-36 border-b">
        <Container className="py-section-sm">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-4xl">
              <Text
                size="sm"
                tone="primary"
                className="mb-4 font-semibold tracking-[0.18em] uppercase"
              >
                Website Starter Kit
              </Text>
              <Heading as="h1" size="display">
                Section Library
              </Heading>
              <Text size="lead" tone="muted" measure className="mt-5">
                Heroes, conteúdo, serviços, diferenciais e indicadores para
                compor diferentes narrativas sem acoplar conteúdo à
                apresentação.
              </Text>
            </div>
            <div className="flex flex-col items-start gap-3 lg:items-end">
              <Text size="sm" tone="muted">
                Ambiente de desenvolvimento
              </Text>
              <ThemeToggle targetId="sections-showcase" />
            </div>
          </div>
        </Container>
      </header>

      <nav
        aria-label="Categorias da biblioteca de seções"
        className="bg-background/95 sticky top-16 z-30 border-b backdrop-blur"
      >
        <Container>
          <ul className="flex [scrollbar-width:none] gap-1 overflow-x-auto py-3">
            {navigation.map((item) => (
              <li key={item.href} className="shrink-0">
                <Link
                  href={item.href}
                  variant="subtle"
                  className="rounded-lg px-3 py-2 text-sm font-medium"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </nav>

      <div className="divide-y">
        <section
          id="hero-sections"
          className="bg-surface py-section-sm scroll-mt-28 border-y"
        >
          <Container>
            <Text
              size="sm"
              tone="primary"
              className="mb-3 font-semibold tracking-[0.16em] uppercase"
            >
              01 / Hero Sections
            </Text>
            <Heading as="h2" size="h2">
              Aberturas para diferentes identidades e narrativas.
            </Heading>
            <Text size="lead" tone="muted" measure className="mt-4">
              As três variantes originais permanecem preservadas e demonstram
              composição centralizada, dividida e imersiva.
            </Text>
          </Container>
        </section>
        <div id="centered" className="scroll-mt-28">
          <HeroCentered
            eyebrow="Produto digital"
            title="Transforme uma ideia clara em uma experiência memorável."
            titleAs="h3"
            description="Uma composição centralizada para propostas objetivas, com ritmo editorial, chamadas bem definidas e espaço para demonstrar o produto."
            primaryAction={{ label: "Começar projeto", href: "#split" }}
            secondaryAction={{
              label: "Ver abordagem",
              href: "#full-bleed",
              variant: "outline",
            }}
            image={{
              src: "/images/showcase/hero-dashboard.svg",
              alt: "Painel abstrato com cartões e visualizações de dados",
              sizes: "(max-width: 1024px) 100vw, 1024px",
              priority: true,
            }}
          />
        </div>

        <div id="split" className="scroll-mt-28">
          <HeroSplit
            eyebrow="Estúdio independente"
            title="Estratégia, identidade e produto trabalhando como um único sistema."
            titleAs="h3"
            description="A variante dividida acomoda conteúdo mais longo sem perder equilíbrio. No celular, o texto aparece primeiro; em telas amplas, a imagem pode ocupar qualquer lado da composição."
            primaryAction={{ label: "Conhecer o estúdio", href: "#full-bleed" }}
            secondaryAction={{
              label: "Ver trabalhos",
              href: "#centered",
              variant: "ghost",
            }}
            image={{
              src: "/images/showcase/hero-studio.svg",
              alt: "Composição arquitetônica abstrata em azul, creme e coral",
              sizes: "(max-width: 1024px) 100vw, 50vw",
            }}
            imagePosition="left"
            ratio="portrait"
          />
        </div>

        <div id="split-contain" className="scroll-mt-28">
          <HeroSplit
            className="bg-muted"
            eyebrow="Validação de conteúdo longo"
            title="Uma mensagem extensa precisa continuar legível sem comprimir, deslocar ou colapsar a mídia ao lado."
            titleAs="h3"
            description="Este exemplo combina uma proporção quadrada com enquadramento contain e um parágrafo deliberadamente mais longo. Ele valida a largura mínima das colunas, a quebra natural do texto e a reserva estável de espaço para a imagem em celulares de 375 pixels, tablets de 768 pixels e desktops amplos de 1440 pixels."
            primaryAction={{ label: "Revisar composição", href: "#centered" }}
            image={{
              src: "/images/showcase/hero-dashboard.svg",
              alt: "Painel abstrato contido em uma moldura quadrada",
              sizes: "(max-width: 1024px) 100vw, 50vw",
            }}
            imagePosition="right"
            ratio="square"
            fit="contain"
          />
        </div>

        <div id="full-bleed" className="scroll-mt-28">
          <HeroFullBleed
            eyebrow="Portfólio editorial"
            title="Histórias visuais que continuam depois do primeiro olhar."
            titleAs="h3"
            description="Imagem, contraste e uma mensagem essencial compõem uma abertura imersiva sem comprometer legibilidade, semântica ou navegação por teclado."
            primaryAction={{ label: "Explorar projetos", href: "#centered" }}
            secondaryAction={{
              label: "Sobre o trabalho",
              href: "#split",
              variant: "outline",
            }}
            image={{
              src: "/images/showcase/hero-landscape.svg",
              alt: "Paisagem costeira estilizada ao entardecer",
              sizes: "100vw",
              objectPosition: "center",
            }}
            align="left"
            height="tall"
            overlay="strong"
            verticalAlign="bottom"
          />
        </div>

        <div id="full-bleed-light" className="scroll-mt-28">
          <HeroFullBleed
            eyebrow="Imagem clara e detalhada"
            title="Ações permanecem nítidas mesmo sobre fundos luminosos."
            titleAs="h3"
            description="O overlay mínimo protege textos longos, enquanto os CTAs usam um contexto próprio para preservar bordas, estados de hover e foco visível sem alterar o Button global."
            primaryAction={{ label: "Ação principal", href: "#overview" }}
            secondaryAction={{
              label: "Ação outline",
              href: "#split-contain",
              variant: "outline",
            }}
            image={{
              src: "/images/showcase/hero-dashboard.svg",
              alt: "Interface clara abstrata ocupando o plano de fundo",
              sizes: "100vw",
              objectPosition: "center",
            }}
            align="center"
            height="compact"
            overlay="soft"
          />
        </div>

        <HeroCentered
          className="bg-muted"
          eyebrow="Composição essencial"
          title="Uma abertura também pode ser silenciosa."
          titleAs="h3"
          description="Este exemplo valida o HeroCentered sem imagem, visual ou ações opcionais, preservando o mesmo ritmo e a mesma hierarquia."
        />

        <ContentSectionExamples />
        <PortfolioGalleryExamples />
        <ConversionSectionExamples />
      </div>
    </main>
  );
}
