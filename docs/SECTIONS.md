# Website Starter Kit — Section Library

**Version:** 1.0.0  
**Scope:** Fases 3.1–3.4 — Section Library

Os Heroes ficam em `src/components/sections/hero` e são Server Components. Eles combinam os primitives do Design System sem armazenar conteúdo, estado ou decisões específicas de um cliente.

## Contratos compartilhados

```ts
type HeroTitleLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type HeroAction = {
  label: string;
  href: string;
  variant?: "default" | "secondary" | "outline" | "ghost";
  target?: "_blank" | "_self";
  rel?: string;
};

type HeroImage = {
  src: ImageProps["src"];
  alt: string;
  sizes: string;
  objectPosition?: string;
} & (
  | { preload?: boolean; priority?: never }
  | { preload?: never; priority?: boolean }
);

type HeroContent = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  titleAs?: HeroTitleLevel;
  primaryAction?: HeroAction;
  secondaryAction?: HeroAction;
};
```

Todos os componentes também aceitam `id` e `className`. `titleAs` controla a semântica sem mudar o estilo visual. Use `h1` apenas para o título principal da página; em catálogos ou páginas com título anterior, use o próximo nível correto.

## HeroCentered

Indicado para landing pages com uma proposta única, lançamentos e produtos digitais. Centraliza o conteúdo e aceita uma imagem controlada ou um `visual` composto pelo consumidor.

| Propriedade | Tipo        | Padrão | Finalidade                           |
| ----------- | ----------- | ------ | ------------------------------------ |
| `image`     | `HeroImage` | —      | Imagem responsiva abaixo do conteúdo |
| `visual`    | `ReactNode` | —      | Composição visual alternativa        |

`image` e `visual` são alternativas mutuamente exclusivas no contrato TypeScript. O componente também pode ser usado sem nenhuma mídia, mas não aceita as duas propriedades simultaneamente.

```ts
type HeroCenteredMedia =
  | { image: HeroImage; visual?: never }
  | { image?: never; visual: ReactNode }
  | { image?: never; visual?: never };
```

```tsx
import { HeroCentered } from "@/components/sections/hero";

<HeroCentered
  eyebrow="Novo produto"
  title="Uma mensagem direta e memorável."
  description="Contexto suficiente para orientar a próxima ação."
  primaryAction={{ label: "Começar", href: "/contato" }}
  image={{
    src: "/images/product.webp",
    alt: "Interface do produto",
    sizes: "(max-width: 1024px) 100vw, 1024px",
    priority: true,
  }}
/>;
```

## HeroSplit

Indicado para sites institucionais, serviços e portfólios em que texto e imagem tenham peso semelhante. No mobile, o texto vem antes da mídia independentemente de `imagePosition`.

| Propriedade     | Tipo                                    | Padrão        | Finalidade                       |
| --------------- | --------------------------------------- | ------------- | -------------------------------- |
| `image`         | `HeroImage`                             | obrigatório   | Conteúdo visual da coluna        |
| `imagePosition` | `"left" \| "right"`                     | `"right"`     | Lado da imagem no desktop        |
| `ratio`         | `"landscape" \| "square" \| "portrait"` | `"landscape"` | Proporção reservada para a mídia |
| `fit`           | `"cover" \| "contain"`                  | `"cover"`     | Enquadramento da imagem          |

```tsx
import { HeroSplit } from "@/components/sections/hero";

<HeroSplit
  title="Conteúdo e imagem em equilíbrio."
  description="Uma descrição curta da proposta."
  imagePosition="left"
  ratio="portrait"
  image={{
    src: "/images/studio.webp",
    alt: "Equipe trabalhando no estúdio",
    sizes: "(max-width: 1024px) 100vw, 50vw",
  }}
/>;
```

## HeroFullBleed

Indicado para portfólios, hospitalidade e marcas editoriais com fotografia forte. A mídia preenche a área e recebe um overlay obrigatório.

| Propriedade     | Tipo                               | Padrão      | Finalidade               |
| --------------- | ---------------------------------- | ----------- | ------------------------ |
| `image`         | `HeroImage`                        | obrigatório | Imagem de fundo          |
| `align`         | `"left" \| "center" \| "right"`    | `"left"`    | Alinhamento horizontal   |
| `verticalAlign` | `"top" \| "center" \| "bottom"`    | `"center"`  | Alinhamento vertical     |
| `height`        | `"compact" \| "default" \| "tall"` | `"default"` | Altura mínima responsiva |
| `overlay`       | `"soft" \| "medium" \| "strong"`   | `"medium"`  | Proteção de contraste    |

```tsx
import { HeroFullBleed } from "@/components/sections/hero";

<HeroFullBleed
  title="Uma narrativa visual imersiva."
  image={{
    src: "/images/project.webp",
    alt: "Vista costeira do projeto",
    sizes: "100vw",
    priority: true,
  }}
  overlay="strong"
  verticalAlign="bottom"
/>;
```

## Contratos compartilhados de conteúdo

As seções de conteúdo reutilizam dois contratos internos quando a responsabilidade é realmente comum:

```ts
type SectionHeadingContent = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  titleAs?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

type SectionImage = {
  src: ImageProps["src"];
  alt: string;
  sizes: string;
  preload?: boolean;
  objectPosition?: string;
};
```

`SectionHeading` padroniza a hierarquia visual sem escolher o nível semântico pelo consumidor. `SectionMediaFrame` reserva a proporção antes do carregamento, usa `next/image` com `fill` e exige `sizes`. Eles são infraestrutura de composição; não substituem os componentes públicos.

## AboutSplit

Apresenta narrativa institucional e imagem com pesos equivalentes. É indicado para páginas “Sobre”, apresentação de equipes, processos e manifestos curtos.

```ts
type AboutSplitProps = SectionHeadingContent & {
  id?: string;
  className?: string;
  image: SectionImage;
  imagePosition?: "left" | "right";
  mobileContentOrder?: "image-first" | "text-first";
  ratio?: "landscape" | "square" | "portrait";
  verticalAlign?: "start" | "center";
  action?: {
    label: string;
    href: string;
    variant?: "default" | "secondary" | "outline";
  };
};
```

| Propriedade          | Padrão          | Uso                                                                           |
| -------------------- | --------------- | ----------------------------------------------------------------------------- |
| `imagePosition`      | `"left"`        | Define o lado da imagem somente no desktop                                    |
| `mobileContentOrder` | `"image-first"` | Prioriza imagem ou texto no mobile, inclusive na ordem do DOM                 |
| `ratio`              | `"portrait"`    | Reserva proporção previsível para a mídia                                     |
| `verticalAlign`      | `"center"`      | Alinha as colunas no topo ou centro                                           |
| `action`             | —               | Renderiza navegação com `Button` e `Link` sem elementos interativos aninhados |

```tsx
import { AboutSplit } from "@/components/sections/about";

<AboutSplit
  eyebrow="Sobre nós"
  title="Estratégia e execução no mesmo processo."
  description="Uma narrativa curta sobre a organização."
  image={{
    src: "/images/studio.webp",
    alt: "Equipe reunida no estúdio",
    sizes: "(max-width: 1024px) 100vw, 50vw",
  }}
  imagePosition="right"
  mobileContentOrder="text-first"
  ratio="landscape"
  action={{ label: "Conheça o processo", href: "/processo" }}
/>;
```

Em mobile, a imagem é apresentada antes do conteúdo por padrão. Use `mobileContentOrder="text-first"` quando a mensagem precisar preceder a mídia. O componente altera a ordem de renderização no servidor, mantendo ordem visual, DOM e leitura assistiva coerentes sem JavaScript. Use `verticalAlign="start"` para descrições longas e revise `objectPosition` quando `cover` puder retirar o assunto principal do enquadramento.

## ServicesGrid

Organiza ofertas em cards. Cada serviço funciona com ícone, imagem ou sem visual; ícone e imagem são mutuamente exclusivos pelo contrato TypeScript.

```ts
type ServiceVisual =
  | { icon: ReactNode; image?: never }
  | { icon?: never; image: SectionImage }
  | { icon?: never; image?: never };

type ServiceItem = ServiceVisual & {
  id: string;
  title: string;
  description: string;
  link?: { label: string; href: string };
};

type ServicesGridProps = {
  id?: string;
  className?: string;
  header?: SectionHeadingContent;
  items: readonly ServiceItem[];
  columns?: 2 | 3 | 4;
  variant?: "elevated" | "bordered";
  itemTitleAs?: SectionTitleLevel;
};
```

| Propriedade   | Padrão       | Uso                                                                |
| ------------- | ------------ | ------------------------------------------------------------------ |
| `columns`     | `3`          | Duas, três ou quatro colunas em telas amplas; uma coluna no mobile |
| `variant`     | `"elevated"` | Usa elevação semântica ou somente borda                            |
| `itemTitleAs` | `"h3"`       | Ajusta os headings dos cards à hierarquia da página                |

O `id` de cada `ServiceItem` identifica o item nos dados e fornece uma chave
estável para renderização; ele não cria automaticamente um atributo `id` no HTML
do card. Links de navegação devem apontar somente para âncoras ou rotas que a
composição realmente renderiza. Para uma âncora da seção inteira, use a propriedade
`id` de `ServicesGrid`.

```tsx
import { Compass } from "lucide-react";
import { ServicesGrid } from "@/components/sections/services";

<ServicesGrid
  header={{ title: "Serviços", description: "Como podemos ajudar." }}
  items={[
    {
      id: "strategy",
      title: "Estratégia",
      description: "Direção para decisões digitais.",
      icon: <Compass aria-hidden="true" />,
      link: { label: "Saiba mais", href: "/servicos/estrategia" },
    },
    {
      id: "delivery",
      title: "Implementação",
      description: "Entrega responsiva e acessível.",
    },
  ]}
  columns={2}
/>;
```

Use `elevated` quando os cards precisarem se destacar da superfície e `bordered` para páginas mais densas ou editoriais. Não dependa do ícone para comunicar o serviço; título e descrição devem ser suficientes.

## FeaturesGrid

Apresenta diferenciais e benefícios em uma composição editorial com divisores, numeração de fallback e sem aparência de catálogo de serviços. Não compartilha condicionais ou variantes com `ServicesGrid`.

```ts
type FeatureItem = {
  id: string;
  title: string;
  description: string;
  visual?: ReactNode;
};

type FeaturesGridProps = {
  id?: string;
  className?: string;
  header?: SectionHeadingContent;
  items: readonly FeatureItem[];
  columns?: 2 | 3;
  itemTitleAs?: SectionTitleLevel;
};
```

`columns` usa `3` por padrão e `itemTitleAs` usa `h3`. Conteúdos de tamanhos diferentes crescem naturalmente; não há truncamento nem altura fixa.

```tsx
import { ShieldCheck } from "lucide-react";
import { FeaturesGrid } from "@/components/sections/features";

<FeaturesGrid
  header={{ title: "Diferenciais" }}
  items={[
    {
      id: "accessible",
      title: "Acessível por padrão",
      description: "Semântica e foco fazem parte dos contratos.",
      visual: <ShieldCheck aria-hidden="true" />,
    },
    {
      id: "adaptable",
      title: "Fácil de adaptar",
      description: "Funciona também sem elemento visual.",
    },
  ]}
  columns={2}
/>;
```

Elementos visuais precisam ser decorativos ou ter nome acessível conforme sua função. Quando omitidos, a numeração mantém o ritmo sem comunicar informação exclusiva.

## StatsSection

Destaca indicadores editoriais sem animação. `value` é sempre texto e aceita formatos como `250+`, `98%`, `15 anos` ou `AA`.

```ts
type StatItem = {
  id: string;
  value: string;
  unit?: string;
  label: string;
};

type StatsSectionProps = {
  id?: string;
  className?: string;
  header?: SectionHeadingContent;
  items: readonly StatItem[];
  columns?: 2 | 3 | 4;
  surface?: "default" | "muted" | "primary";
};
```

`columns` usa `4` e `surface` usa `default` por padrão. A marcação utiliza `dl`, `dt` e `dd`; a ordem visual destaca o valor sem inverter a associação semântica entre legenda e dado. Em 320px e 375px, os indicadores usam uma coluna. A partir de 640px, passam progressivamente para duas, três ou quatro colunas. Valores longos podem quebrar em qualquer ponto necessário, sem truncamento ou overflow horizontal.

```tsx
import { StatsSection } from "@/components/sections/stats";

<StatsSection
  header={{ title: "Em números" }}
  items={[
    { id: "projects", value: "250+", label: "projetos" },
    { id: "speed", value: "1.8", unit: "s", label: "tempo médio" },
    { id: "experience", value: "15 anos", label: "de experiência" },
  ]}
  columns={3}
/>;
```

Não aplique contadores animados a conteúdo editorial. Escreva unidades como parte de `value` quando a expressão precisar permanecer indivisível; use `unit` apenas para uma unidade visualmente secundária.

## ProjectsGrid

Apresenta uma coleção de projetos navegáveis. Cada item possui uma imagem de capa, título e destino; categoria e descrição são opcionais. Use a variante `uniform` para catálogos regulares e `editorial` quando a diferença de escala fizer parte da narrativa visual.

```ts
type Project = {
  id: string;
  title: string;
  category?: string;
  description?: string;
  href: string;
  image: SectionImage;
};

type ProjectsGridProps = {
  id?: string;
  className?: string;
  header?: SectionHeadingContent;
  projects: readonly Project[];
  columns?: 2 | 3;
  variant?: "uniform" | "editorial";
  itemTitleAs?: SectionTitleLevel;
};
```

`columns` usa `3` e `variant` usa `uniform` por padrão. A variante uniforme mantém capas em `4:3` e chega a duas ou três colunas conforme a configuração. A variante editorial usa pares `7/5` quando configurada com duas colunas e grupos `6/3/3` em telas amplas quando configurada com três; o padrão usa o índice e continua previsível com listas pares ou ímpares.

```tsx
import { ProjectsGrid, type Project } from "@/components/sections/projects";

const projects: readonly Project[] = [
  {
    id: "house",
    title: "Casa Pátio",
    category: "Arquitetura",
    href: "/projetos/casa-patio",
    image: {
      src: "/images/projects/casa-patio.webp",
      alt: "Pátio interno da residência",
      sizes: "(max-width: 768px) 100vw, 33vw",
    },
  },
];

<ProjectsGrid
  header={{ title: "Projetos selecionados" }}
  projects={projects}
  columns={3}
/>;
```

Mantenha o array em um módulo de conteúdo, como `src/content/projects.ts`. A mesma fonte tipada poderá alimentar futuramente o índice e páginas individuais por slug, sem fazer o componente buscar dados ou exigir um backend.

## FeaturedProject

Destaca um projeto no meio da narrativa da página. Diferentemente de um Hero, não representa obrigatoriamente a abertura nem o título principal do documento. `split` equilibra texto e imagem em duas colunas; `editorial` posiciona o cabeçalho acima de uma imagem ampla.

```ts
type FeaturedProjectProps = SectionHeadingContent & {
  id?: string;
  className?: string;
  image: SectionImage;
  href?: string;
  linkLabel?: string;
  layout?: "split" | "editorial";
  imagePosition?: "left" | "right";
  ratio?: "landscape" | "wide" | "portrait";
};
```

Os padrões são `layout="split"`, `imagePosition="left"` e `ratio="landscape"`. A imagem permanece primeiro no DOM no layout dividido; `imagePosition` muda apenas sua posição em telas amplas. O link é opcional e usa um nome configurável.

```tsx
import { FeaturedProject } from "@/components/sections/projects";

<FeaturedProject
  eyebrow="Projeto em destaque"
  title="Uma casa organizada ao redor da paisagem."
  titleAs="h2"
  description="Contexto sobre implantação, materiais e uso."
  image={{
    src: "/images/projects/casa.webp",
    alt: "Casa entre a vegetação",
    sizes: "(max-width: 1024px) 100vw, 50vw",
  }}
  href="/projetos/casa"
  ratio="wide"
/>;
```

## ImageGallery

Organiza uma sequência visual estática. Ao contrário de `ProjectsGrid`, suas imagens não representam entidades navegáveis e não recebem links: elas podem ter legenda, mas não título, categoria, descrição de projeto ou destino.

```ts
type GalleryImage = SectionImage & {
  id: string;
  caption?: string;
};

type ImageGalleryProps = {
  id?: string;
  className?: string;
  header?: SectionHeadingContent;
  images: readonly GalleryImage[];
  columns?: 2 | 3;
  variant?: "uniform" | "editorial";
  ratio?: "landscape" | "square" | "portrait";
};
```

Na variante `uniform`, `columns` usa `3` e `ratio` usa `landscape`. Na variante `editorial`, os itens alternam as larguras complementares `7/5`. Isso evita regras dependentes da quantidade total e mantém listas incompletas previsíveis. A marcação usa `figure` e `figcaption` quando existe legenda.

```tsx
import { ImageGallery } from "@/components/sections/gallery";

<ImageGallery
  header={{ title: "Detalhes do projeto" }}
  variant="editorial"
  images={[
    {
      id: "detail-1",
      src: "/images/projects/detail-1.webp",
      alt: "Encontro entre concreto e madeira",
      caption: "Materiais na área de convivência.",
      sizes: "(max-width: 768px) 100vw, 50vw",
    },
  ]}
/>;
```

### Imagens, carregamento e responsividade

- Todos os três componentes reutilizam `SectionImage` e `SectionMediaFrame`, reservam proporção antes do carregamento e exigem `sizes` coerente com a largura renderizada.
- As imagens permanecem lazy por padrão. Use `preload: true` somente quando uma instância concreta estiver acima da primeira dobra e for a imagem LCP provável; nunca marque todas as capas ou itens da galeria.
- Em mobile, os grids usam uma coluna. A partir de `sm` ou `md`, a variante uniforme ganha colunas e a editorial passa à grade assimétrica. Em zoom de 200%, os breakpoints fazem a composição refluir sem larguras mínimas fixas.
- `objectPosition` ajusta cortes de `cover`. Revise rostos, obras e elementos importantes em 375px, 768px e 1440px.
- `alt` é obrigatório no contrato. Use descrição objetiva para imagens informativas e `alt: ""` apenas quando a imagem for realmente decorativa; uma legenda não substitui automaticamente o texto alternativo.
- Links do grid devem levar a uma página real do projeto e possuir título compreensível fora de contexto. Não envolva o card inteiro com múltiplos controles interativos.

Use `sizes` de acordo com a composição concreta, e não apenas com o tipo do componente. Os valores abaixo são pontos de partida baseados nos breakpoints atuais; ajuste-os se o container ou os gutters do projeto mudarem.

| Composição                             | `sizes` sugerido para cada imagem                                   |
| -------------------------------------- | ------------------------------------------------------------------- |
| Uniforme, 2 colunas                    | `(max-width: 767px) 100vw, 50vw`                                    |
| Uniforme, 3 colunas                    | `(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw`          |
| Editorial 7/5 — item largo             | `(max-width: 767px) 100vw, 58vw`                                    |
| Editorial 7/5 — item estreito          | `(max-width: 767px) 100vw, 42vw`                                    |
| Editorial 6/3/3 — item largo           | `(max-width: 767px) 100vw, (max-width: 1279px) 58vw, 50vw`          |
| Editorial 6/3/3 — itens estreitos      | `(max-width: 767px) 100vw, (max-width: 1279px) 42vw, 25vw`          |
| Galeria uniforme, 2 colunas            | `(max-width: 639px) 100vw, 50vw`                                    |
| Galeria editorial 7/5 — largo/estreito | `(max-width: 767px) 100vw, 58vw` / `(max-width: 767px) 100vw, 42vw` |

O `ProjectsGrid` oferece dois links irmãos por card: capa e título apontam para o mesmo destino, sem elementos interativos aninhados. A capa recebe um nome acessível derivado do título e ambos preservam o foco visível do primitive `Link`.

## CTASection

Concentra uma mensagem de conversão e até duas ações de navegação. O layout `centered` enfatiza uma única decisão; `split` separa mensagem e ações em telas amplas. A superfície `primary` é a opção de alto contraste e recebe tratamento contextual de botões sem alterar o primitive global.

```ts
type CTAAction = {
  label: string;
  href: string;
  variant?: "default" | "secondary" | "outline" | "ghost";
  target?: "_blank" | "_self";
  rel?: string;
};

type CTASectionProps = {
  id?: string;
  className?: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  titleAs?: SectionTitleLevel;
  primaryAction?: CTAAction;
  secondaryAction?: CTAAction;
  layout?: "centered" | "split";
  surface?: "default" | "muted" | "surface" | "primary";
};
```

Os padrões são `layout="centered"`, `surface="primary"` e `titleAs="h2"`. As ações são opcionais; quando não informam variante, a primeira usa `default` e a segunda usa `outline`.

```tsx
import { CTASection } from "@/components/sections/cta";

<CTASection
  eyebrow="Próximo passo"
  title="Vamos conversar sobre o projeto."
  description="Compartilhe o contexto e os objetivos da próxima etapa."
  primaryAction={{ label: "Entrar em contato", href: "/contato" }}
  secondaryAction={{
    label: "Ver projetos",
    href: "/projetos",
    variant: "outline",
  }}
/>;
```

Use `primary` quando a seção precisar encerrar uma composição com contraste forte. Em sequências densas, `muted` ou `surface` preservam separação sem competir com o restante do conteúdo. Ao usar `target="_blank"`, informe `rel` quando precisar de uma política específica; na ausência dele, o componente aplica `noreferrer`.

## TestimonialsSection

Apresenta prova social em cards regulares ou em uma composição editorial. O primeiro item da variante editorial recebe destaque; itens adicionais ocupam a coluna complementar. A estrutura usa `figure`, `blockquote`, `figcaption` e `cite`.

```ts
type Testimonial = {
  id: string;
  quote: string;
  author: string;
  identification: string;
  avatar?: SectionImage;
};

type TestimonialsSectionProps = {
  id?: string;
  className?: string;
  header?: SectionHeadingContent;
  items: readonly Testimonial[];
  layout?: "cards" | "editorial";
};
```

`layout` usa `cards` por padrão. Os cards passam de uma para duas e três colunas conforme a largura disponível. A composição editorial também funciona com apenas um depoimento e não depende de carrossel.

```tsx
import { TestimonialsSection } from "@/components/sections/testimonials";

<TestimonialsSection
  header={{ title: "O que dizem sobre o trabalho" }}
  layout="editorial"
  items={[
    {
      id: "client",
      quote: "A nova estrutura trouxe clareza para conteúdo e navegação.",
      author: "Marina Costa",
      identification: "Diretora de estratégia",
    },
  ]}
/>;
```

Depoimentos devem ser reais, autorizados e associados à fonte correta. O avatar é complementar: mantenha nome e identificação mesmo quando houver imagem, use `alt` descritivo para retratos informativos e `sizes="48px"` no tamanho padrão.

## FAQSection

Organiza perguntas e respostas com `details` e `summary` nativos. A expansão individual, a operação por Enter ou Espaço e a exposição do estado para tecnologias assistivas funcionam sem JavaScript ou estado cliente.

```ts
type FAQItem = {
  id: string;
  question: string;
  answer: ReactNode;
};

type FAQSectionProps = {
  id?: string;
  className?: string;
  header?: SectionHeadingContent;
  items: readonly FAQItem[];
  surface?: "default" | "muted";
};
```

`surface` usa `default`. Perguntas não são headings independentes; a hierarquia da página permanece sob o cabeçalho opcional da seção. Respostas aceitam conteúdo composto, mas devem manter parágrafos, listas e links semanticamente válidos.

```tsx
import { FAQSection } from "@/components/sections/faq";

<FAQSection
  header={{ title: "Perguntas frequentes" }}
  items={[
    {
      id: "timeline",
      question: "Quanto tempo leva o projeto?",
      answer: "O prazo depende do escopo e da maturidade do conteúdo.",
    },
  ]}
/>;
```

Não esconda informações essenciais exclusivamente no FAQ. Escreva perguntas completas, preserve foco visível no `summary` e não substitua a interação nativa por controles que exijam JavaScript sem necessidade.

## ContactSection

Apresenta canais configuráveis sem assumir formulário, backend ou provedor externo. E-mail, telefone, WhatsApp, endereço, redes sociais e CTA são independentes; a seção permanece íntegra quando apenas um canal é informado.

```ts
type ContactSocialLink = {
  label: string;
  href: string;
};

type ContactSectionProps = SectionHeadingContent & {
  id?: string;
  className?: string;
  email?: { label?: string; value: string };
  phone?: { label?: string; value: string };
  whatsapp?: { label?: string; href: string };
  address?: ReactNode;
  socialLinks?: readonly ContactSocialLink[];
  action?: { label: string; href: string };
};
```

```tsx
import { ContactSection } from "@/components/sections/contact";

<ContactSection
  title="Vamos conversar."
  description="Escolha o canal mais conveniente."
  email={{ value: "contato@example.com" }}
  phone={{ value: "+55 (11) 4000-1234" }}
  whatsapp={{
    label: "Iniciar conversa",
    href: "https://wa.me/551140001234",
  }}
  socialLinks={[
    { label: "LinkedIn", href: "https://linkedin.com/company/exemplo" },
  ]}
/>;
```

O endereço visível do e-mail gera `mailto:` diretamente. O número visível do telefone pode ser formatado para leitura; caracteres que não sejam `+` ou dígitos são removidos no destino `tel:`. Forneça URLs completas e confiáveis para WhatsApp e redes sociais. Esses destinos abrem em nova aba com `noreferrer`; o texto do link deve identificar o canal sem depender do ícone. Não inclua mensagens sensíveis ou dados pessoais em URLs pré-preenchidas.

## Conteúdo, imagens e personalização

- Mantenha o conteúdo em configurações ou páginas; os componentes recebem dados prontos.
- Imagens locais podem usar caminhos de `public` ou imports estáticos. Domínios remotos precisam estar explicitamente autorizados em `next.config.ts`.
- Escreva `sizes` conforme a largura real: `100vw` para Full Bleed e aproximadamente `50vw` para Split no desktop.
- No Next.js 16, use `preload` somente para a imagem que realmente representa o LCP da primeira dobra. Imagens das seções de conteúdo permanecem lazy por padrão.
- `priority` existe apenas como compatibilidade legada em `HeroImage`. Não combine `priority` e `preload`; o contrato os torna mutuamente exclusivos e os Heroes convertem o campo legado para `preload` antes de renderizar `next/image`.
- Descreva imagens informativas. Para mídia puramente decorativa, use `alt: ""`.
- Ajuste o enquadramento com `objectPosition`; use `fit="contain"` no Split para mockups ou ilustrações que não podem ser cortados.
- As proporções do Split reservam a altura pela largura disponível. `contain` aplica uma margem interna responsiva; `cover` pode recortar as bordas e deve ser combinado com `objectPosition` quando o assunto não estiver centralizado.
- Personalize identidade nos tokens de marca e semânticos. `className` serve para composição delimitada, não para criar uma variante oculta.

## Responsividade e acessibilidade

- As seções usam gutters, containers e escalas fluidas do Design System.
- Verifique o corte das imagens em 375px, 768px e 1440px, especialmente com `objectPosition` personalizado.
- Preserve uma única sequência de headings no documento. Vários Heroes na mesma página não devem gerar vários `h1`.
- CTAs são links estilizados como botões porque representam navegação. Ações locais devem permanecer botões nos componentes que as implementarem.
- O Full Bleed usa os tokens `on-image` e overlays semânticos. Até a opção `soft` mantém uma proteção escura mínima para texto normal sobre imagens claras; use `medium` ou `strong` para fotografias muito detalhadas.
- As ações do Full Bleed recebem estilos contextuais locais. Default, secondary, outline e ghost mantêm texto, borda, hover e foco próprios para fotografia sem modificar as variantes globais de `Button`.
- Nas seções de conteúdo, configure `titleAs` e `itemTitleAs` conforme a posição real na página; os exemplos do showcase usam `h2` para categorias, `h3` para seções e `h4` para itens.
- Cards e indicadores não dependem de hover. Links continuam identificáveis, recebem foco visível e não envolvem o card inteiro sem necessidade.
- Em zoom de 200%, grids devem refluir sem truncamento; evite adicionar larguras mínimas aos itens ou valores editoriais.
- Estados de foco vêm dos primitives. Não remova outlines nem dependa apenas de hover.
- Não adicione movimento essencial. As regras globais respeitam `prefers-reduced-motion`.

## Showcase local

Execute `pnpm dev` e abra `/dev/sections`. A rota organiza o catálogo em Hero Sections, Content Sections, Services & Features, Statistics, Portfolio & Gallery e Conversion Sections. Ela demonstra temas claro e escuro, conteúdo longo, imagens nos dois lados, cards com e sem visual, diferentes quantidades de indicadores e projetos, listas ímpares, galerias uniformes e editoriais, CTAs centralizados e divididos, depoimentos, FAQ nativo, contatos completos e reduzidos, combinações `cover` e `contain`, ações sobre imagens claras e escuras e um Hero sem mídia. A rota chama `notFound()` fora de desenvolvimento, possui metadata `noindex` e não integra o sitemap.

Ao adicionar uma variante de Hero, mantenha um contrato focado, documente suas propriedades aqui e acrescente ao showcase um exemplo com nível de heading compatível. Não transforme os três componentes em um componente universal baseado em condicionais.
