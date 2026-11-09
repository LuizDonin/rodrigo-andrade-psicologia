import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Plus, Trash2 } from "lucide-react";

import { ThemeToggle } from "@/app/dev/_components/theme-toggle";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Link } from "@/components/ui/link";
import { Text } from "@/components/ui/text";

export const metadata: Metadata = {
  title: "Design System Showcase",
  description: "Catálogo local dos tokens e primitives do Website Starter Kit.",
  robots: { index: false, follow: false, nocache: true },
};

const navigation = [
  { label: "Overview", href: "#overview" },
  { label: "Colors", href: "#colors" },
  { label: "Typography", href: "#typography" },
  { label: "Buttons & Links", href: "#buttons-links" },
  { label: "Layout & Spacing", href: "#layout-spacing" },
  { label: "Surfaces", href: "#surfaces" },
] as const;

const semanticColors = [
  {
    name: "Background",
    token: "--background",
    swatch: "bg-background",
    foreground: "text-foreground",
  },
  {
    name: "Foreground",
    token: "--foreground",
    swatch: "bg-foreground",
    foreground: "text-background",
  },
  {
    name: "Primary",
    token: "--primary",
    swatch: "bg-primary",
    foreground: "text-primary-foreground",
  },
  {
    name: "Secondary",
    token: "--secondary",
    swatch: "bg-secondary",
    foreground: "text-secondary-foreground",
  },
  {
    name: "Muted",
    token: "--muted",
    swatch: "bg-muted",
    foreground: "text-muted-foreground",
  },
  {
    name: "Accent",
    token: "--accent",
    swatch: "bg-accent",
    foreground: "text-accent-foreground",
  },
  {
    name: "Surface",
    token: "--surface",
    swatch: "bg-surface",
    foreground: "text-surface-foreground",
  },
  {
    name: "Border",
    token: "--border",
    swatch: "bg-border",
    foreground: "text-foreground",
  },
  {
    name: "Destructive",
    token: "--destructive",
    swatch: "bg-destructive",
    foreground: "text-destructive-foreground",
  },
  {
    name: "Link",
    token: "--link",
    swatch: "bg-link",
    foreground: "text-primary-foreground",
  },
] as const;

const interactiveColors = [
  {
    name: "Primary",
    className: "bg-primary text-primary-foreground",
    token: "--primary",
  },
  {
    name: "Hover",
    className: "bg-primary-hover text-primary-foreground",
    token: "--primary-hover",
  },
  {
    name: "Active",
    className: "bg-primary-active text-primary-foreground",
    token: "--primary-active",
  },
  {
    name: "Secondary hover",
    className: "bg-secondary-hover text-secondary-foreground",
    token: "--secondary-hover",
  },
  {
    name: "Accent hover",
    className: "bg-accent-hover text-accent-foreground",
    token: "--accent-hover",
  },
  {
    name: "Destructive hover",
    className: "bg-destructive-hover text-destructive-foreground",
    token: "--destructive-hover",
  },
  {
    name: "Link hover",
    className: "bg-link-hover text-primary-foreground",
    token: "--link-hover",
  },
] as const;

const buttonVariants = [
  "default",
  "secondary",
  "outline",
  "ghost",
  "destructive",
  "link",
] as const;
const buttonSizes = ["xs", "sm", "default", "lg"] as const;
const containerSizes = ["sm", "md", "lg", "xl"] as const;

function ShowcaseHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      <Text
        as="p"
        size="sm"
        tone="primary"
        className="mb-3 font-semibold tracking-[0.16em] uppercase"
      >
        {eyebrow}
      </Text>
      <Heading as="h2" size="h2">
        {title}
      </Heading>
      <Text size="lead" tone="muted" measure className="mt-4">
        {description}
      </Text>
    </div>
  );
}

function Preview({
  title,
  description,
  children,
  className,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <article
      className={`bg-surface text-surface-foreground shadow-soft overflow-hidden rounded-2xl border ${className ?? ""}`}
    >
      <div className="border-b px-5 py-4 sm:px-6">
        <Heading as="h3" size="h4">
          {title}
        </Heading>
        {description ? (
          <Text size="sm" tone="muted" className="mt-1">
            {description}
          </Text>
        ) : null}
      </div>
      <div className="p-5 sm:p-6">{children}</div>
    </article>
  );
}

export default function DesignSystemShowcasePage() {
  if (process.env.NODE_ENV !== "development") notFound();

  return (
    <main
      id="design-system-showcase"
      className="bg-background text-foreground border-primary/20 shadow-floating relative isolate z-10 min-h-screen border-y-4 transition-colors [transition-duration:var(--duration-normal)] motion-reduce:transition-none"
    >
      <header id="overview" className="bg-surface scroll-mt-36 border-b">
        <Container className="py-section-sm">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-4xl">
              <Text
                size="sm"
                tone="primary"
                className="mb-4 font-semibold tracking-[0.18em] uppercase"
              >
                Website Starter Kit
              </Text>
              <Heading as="h1" size="display">
                Design System Showcase
              </Heading>
              <Text size="lead" tone="muted" measure className="mt-5">
                Um catálogo vivo dos tokens, primitives e padrões de composição
                que sustentam experiências consistentes, acessíveis e
                personalizáveis.
              </Text>
            </div>
            <div className="flex flex-col items-start gap-3 lg:items-end">
              <Text size="sm" tone="muted">
                Ambiente de desenvolvimento
              </Text>
              <ThemeToggle targetId="design-system-showcase" />
            </div>
          </div>
        </Container>
      </header>

      <nav
        aria-label="Categorias do Design System"
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

      <div>
        <Section spacing="md">
          <Container>
            <ShowcaseHeading
              eyebrow="01 / Overview"
              title="Uma fundação pequena, contratos claros."
              description="O sistema separa identidade visual, papéis semânticos e componentes. Cada exemplo abaixo usa diretamente os tokens e APIs disponíveis no starter."
            />
            <div className="grid gap-4 md:grid-cols-3">
              {[
                [
                  "Token driven",
                  "A identidade muda nos tokens de marca; os componentes continuam estáveis.",
                ],
                [
                  "Server first",
                  "Todo o catálogo é renderizado no servidor, exceto o seletor local de tema.",
                ],
                [
                  "Accessible by default",
                  "Contraste, foco, semântica e redução de movimento fazem parte dos contratos.",
                ],
              ].map(([title, description], index) => (
                <div
                  key={title}
                  className="bg-surface shadow-soft rounded-2xl border p-6"
                >
                  <span className="bg-primary text-primary-foreground flex size-9 items-center justify-center rounded-full text-sm font-semibold">
                    0{index + 1}
                  </span>
                  <Heading as="h3" size="h4" className="mt-8">
                    {title}
                  </Heading>
                  <Text tone="muted" className="mt-2">
                    {description}
                  </Text>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        <Section
          id="colors"
          spacing="md"
          surface="muted"
          className="scroll-mt-28 border-y"
        >
          <Container>
            <ShowcaseHeading
              eyebrow="02 / Colors"
              title="Cores nomeadas pelo papel que exercem."
              description="As amostras consomem as mesmas Custom Properties usadas pelos componentes. Alterar o tema atualiza todo o conjunto sem uma paleta paralela."
            />
            <div className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
              <Preview
                title="Semantic palette"
                description="Tokens estáveis para superfícies, texto e ações."
              >
                <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {semanticColors.map((color) => (
                    <li
                      key={color.token}
                      className={`${color.swatch} ${color.foreground} flex min-h-28 flex-col justify-end rounded-xl border p-4`}
                    >
                      <span className="font-semibold">{color.name}</span>
                      <code className="mt-1 font-mono text-xs">
                        {color.token}
                      </code>
                    </li>
                  ))}
                </ul>
              </Preview>
              <Preview
                title="Interactive states"
                description="Estados explícitos, exibidos lado a lado."
              >
                <ul className="space-y-2">
                  {interactiveColors.map((color) => (
                    <li
                      key={color.token}
                      className={`${color.className} flex min-h-14 items-center justify-between gap-3 rounded-lg px-4 py-3`}
                    >
                      <span className="text-sm font-semibold">
                        {color.name}
                      </span>
                      <code className="font-mono text-xs">{color.token}</code>
                    </li>
                  ))}
                </ul>
              </Preview>
            </div>
          </Container>
        </Section>

        <Section id="typography" spacing="md" className="scroll-mt-28">
          <Container>
            <ShowcaseHeading
              eyebrow="03 / Typography"
              title="Escala fluida, hierarquia semântica."
              description="O elemento HTML preserva a ordem do documento enquanto a propriedade size controla somente a apresentação visual."
            />
            <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
              <Preview
                title="Type scale"
                description="As escalas principais respondem fluidamente à viewport."
              >
                <div className="divide-y">
                  {[
                    {
                      label: "Display",
                      size: "display" as const,
                      text: "Clareza em cada escala",
                    },
                    {
                      label: "Heading 1",
                      size: "h1" as const,
                      text: "Fundação para boas experiências",
                    },
                    {
                      label: "Heading 2",
                      size: "h2" as const,
                      text: "Componentes que evoluem",
                    },
                    {
                      label: "Heading 3",
                      size: "h3" as const,
                      text: "Decisões consistentes",
                    },
                    {
                      label: "Heading 4",
                      size: "h4" as const,
                      text: "Detalhes com propósito",
                    },
                  ].map((sample) => (
                    <div
                      key={sample.label}
                      className="py-6 first:pt-0 last:pb-0"
                    >
                      <Text size="sm" tone="muted" className="mb-3 font-mono">
                        {sample.label}
                      </Text>
                      <Heading as="h3" size={sample.size}>
                        {sample.text}
                      </Heading>
                    </div>
                  ))}
                </div>
              </Preview>
              <div className="grid gap-6">
                <Preview
                  title="Reading measure"
                  description="Texto limitado a uma medida confortável."
                >
                  <Heading as="h3" size="h3">
                    Uma hierarquia legível
                  </Heading>
                  <Text size="lead" tone="muted" measure className="mt-4">
                    Lead text introduz uma ideia com ritmo mais aberto e
                    presença editorial.
                  </Text>
                  <Heading as="h4" size="h4" className="mt-8">
                    Subtítulo semanticamente correto
                  </Heading>
                  <Text measure className="mt-3">
                    Body text sustenta a leitura longa com entrelinha
                    consistente e largura limitada. O tamanho visual nunca
                    substitui a escolha correta do elemento HTML.
                  </Text>
                  <Text size="sm" tone="muted" className="mt-4">
                    Small text · Informação complementar
                  </Text>
                </Preview>
                <Preview title="Text tones">
                  <div className="space-y-3">
                    <Text>Default — conteúdo principal.</Text>
                    <Text tone="muted">Muted — conteúdo secundário.</Text>
                    <Text tone="primary">Primary — ênfase de marca.</Text>
                  </div>
                </Preview>
              </div>
            </div>
          </Container>
        </Section>

        <Section
          id="buttons-links"
          spacing="md"
          surface="muted"
          className="scroll-mt-28 border-y"
        >
          <Container>
            <ShowcaseHeading
              eyebrow="04 / Buttons & Links"
              title="Ações previsíveis em todos os estados."
              description="Variantes representam hierarquia e intenção. Passe o cursor, navegue com Tab e acione os controles para observar os estados reais."
            />
            <div className="grid gap-6 lg:grid-cols-2">
              <Preview title="Button variants">
                <div className="flex flex-wrap items-center gap-3">
                  {buttonVariants.map((variant) => (
                    <Button key={variant} variant={variant}>
                      {variant.charAt(0).toUpperCase() + variant.slice(1)}
                    </Button>
                  ))}
                </div>
              </Preview>
              <Preview title="Sizes & icons">
                <div className="flex flex-wrap items-center gap-3">
                  {buttonSizes.map((size) => (
                    <Button key={size} size={size}>
                      <Plus aria-hidden="true" />
                      {size}
                    </Button>
                  ))}
                  <Button size="icon" aria-label="Adicionar item">
                    <Plus aria-hidden="true" />
                  </Button>
                  <Button variant="outline">
                    Continuar <ArrowRight aria-hidden="true" />
                  </Button>
                </div>
              </Preview>
              <Preview title="Disabled states">
                <div className="flex flex-wrap gap-3">
                  <Button disabled>Indisponível</Button>
                  <Button variant="secondary" disabled>
                    Indisponível
                  </Button>
                  <Button variant="destructive" disabled>
                    <Trash2 aria-hidden="true" />
                    Excluir
                  </Button>
                </div>
              </Preview>
              <Preview title="Link variants">
                <div className="flex flex-wrap items-center gap-6">
                  <Link href="#buttons-links">Default link</Link>
                  <Link href="#buttons-links" variant="subtle">
                    Subtle link
                  </Link>
                  <Link
                    href="#buttons-links"
                    variant="unstyled"
                    className="font-semibold"
                  >
                    Unstyled link
                  </Link>
                  <Button asChild variant="default">
                    <Link href="#layout-spacing" variant="unstyled">
                      Button as link <ArrowRight aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </Preview>
            </div>
          </Container>
        </Section>

        <Section id="layout-spacing" spacing="md" className="scroll-mt-28">
          <Container>
            <ShowcaseHeading
              eyebrow="05 / Layout & Spacing"
              title="Ritmo consistente, composição flexível."
              description="Containers controlam largura e gutters; Sections controlam espaçamento vertical e superfícies sem acoplar as duas responsabilidades."
            />
            <div className="grid gap-6">
              <Preview
                title="Container widths"
                description="As bordas representam o limite real de cada variante."
              >
                <div className="bg-muted space-y-4 overflow-hidden rounded-xl py-5">
                  {containerSizes.map((size) => (
                    <Container key={size} size={size} className="px-gutter">
                      <div className="bg-primary/10 text-primary border-primary/20 rounded-lg border p-3 text-center font-mono text-xs">
                        size=&quot;{size}&quot;
                      </div>
                    </Container>
                  ))}
                </div>
              </Preview>
              <div className="grid gap-6 lg:grid-cols-2">
                <Preview title="Section spacing">
                  <div className="space-y-3">
                    {(["sm", "md", "lg"] as const).map((spacing) => (
                      <div
                        key={spacing}
                        className="bg-muted overflow-hidden rounded-xl border"
                      >
                        <Section spacing={spacing} className="px-4 text-center">
                          <span className="bg-primary text-primary-foreground rounded-md px-3 py-2 font-mono text-xs">
                            {spacing}
                          </span>
                        </Section>
                      </div>
                    ))}
                  </div>
                </Preview>
                <Preview title="Responsive grid">
                  <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                    {Array.from({ length: 6 }, (_, index) => (
                      <div
                        key={index}
                        className="bg-accent text-accent-foreground flex min-h-24 items-center justify-center rounded-xl border font-mono text-sm"
                      >
                        {index + 1}
                      </div>
                    ))}
                  </div>
                </Preview>
              </div>
              <Preview title="Section surfaces">
                <div className="grid overflow-hidden rounded-xl border md:grid-cols-2">
                  {(["default", "muted", "surface", "primary"] as const).map(
                    (surface) => (
                      <Section
                        key={surface}
                        surface={surface}
                        spacing="sm"
                        className="flex items-center justify-center px-5 text-center"
                      >
                        <span className="font-mono text-sm">
                          surface=&quot;{surface}&quot;
                        </span>
                      </Section>
                    ),
                  )}
                </div>
              </Preview>
            </div>
          </Container>
        </Section>

        <Section
          id="surfaces"
          spacing="md"
          surface="muted"
          className="scroll-mt-28 border-t"
        >
          <Container>
            <ShowcaseHeading
              eyebrow="06 / Surfaces & Composition"
              title="Profundidade sem perder simplicidade."
              description="Bordas, superfícies e elevações constroem hierarquia visual. Estes exemplos são composições, não novos componentes da Section Library."
            />
            <div className="grid gap-6 lg:grid-cols-3">
              {[
                {
                  title: "Soft elevation",
                  shadow: "shadow-soft",
                  description: "Separação sutil para conteúdo agrupado.",
                },
                {
                  title: "Raised elevation",
                  shadow: "shadow-raised",
                  description: "Destaque para elementos mais proeminentes.",
                },
                {
                  title: "Floating elevation",
                  shadow: "shadow-floating",
                  description: "Profundidade máxima para camadas temporárias.",
                },
              ].map((surface) => (
                <article
                  key={surface.title}
                  className={`bg-surface rounded-2xl border p-6 ${surface.shadow}`}
                >
                  <span className="bg-secondary text-secondary-foreground flex size-10 items-center justify-center rounded-xl">
                    <Check aria-hidden="true" />
                  </span>
                  <Heading as="h3" size="h4" className="mt-6">
                    {surface.title}
                  </Heading>
                  <Text tone="muted" className="mt-2">
                    {surface.description}
                  </Text>
                  <code className="text-primary mt-6 block font-mono text-xs">
                    .{surface.shadow}
                  </code>
                </article>
              ))}
            </div>
            <div className="bg-surface shadow-raised mt-6 overflow-hidden rounded-3xl border">
              <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
                <div className="p-7 sm:p-10 lg:p-12">
                  <Text
                    size="sm"
                    tone="primary"
                    className="font-semibold tracking-widest uppercase"
                  >
                    Composição de exemplo
                  </Text>
                  <Heading as="h3" size="h2" className="mt-4">
                    Primitives simples, resultados consistentes.
                  </Heading>
                  <Text size="lead" tone="muted" measure className="mt-5">
                    Container, Heading, Text e Button se combinam sem esconder a
                    estrutura semântica ou criar uma seção específica de
                    produto.
                  </Text>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button>Começar agora</Button>
                    <Button variant="outline">Saiba mais</Button>
                  </div>
                </div>
                <div className="bg-primary text-primary-foreground flex min-h-72 items-end p-7 sm:p-10 lg:p-12">
                  <div>
                    <span className="block text-5xl font-semibold tracking-tight">
                      6
                    </span>
                    <Text tone="inherit" className="mt-2 max-w-xs">
                      categorias documentadas usando uma única fonte de tokens.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </div>
    </main>
  );
}
