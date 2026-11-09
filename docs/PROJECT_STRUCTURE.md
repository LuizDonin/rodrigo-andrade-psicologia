# Estruturas recomendadas para projetos

Estas estruturas são pontos de partida para projetos derivados. Elas mantêm App
Router, conteúdo tipado, configuração separada e composição explícita com a
Section Library. Adote somente páginas e dados previstos no blueprint.

## Convenções comuns

```text
src/
  app/
    (site)/                 # rotas públicas e layout do cliente
  components/
    layout/                 # primitives e shell reutilizável
    sections/               # Section Library preservada
    ui/                     # primitives do Design System
  config/
    site.ts                 # identidade técnica, URL e indexação
    navigation.ts           # navegação pública
  content/                  # conteúdo aprovado e tipado
  lib/
    theme.ts                # contrato e aliases para temas locais
  styles/
    themes.css              # valores de marca sobre tokens semânticos
    tokens.css              # contrato do Design System
  types/                    # contratos de domínio quando necessários
public/
  images/
    <cliente>/              # assets licenciados do projeto
```

O layout raiz mantém infraestrutura comum de metadata e estilos. Cada rota pública
é responsável por metadata específica e canonical própria quando indexável.

## Responsabilidades e exemplo mínimo

- **Configuração:** identidade, URL, locale, canais e navegação.
- **Conteúdo:** textos, imagens, serviços, projetos e dados editoriais.
- **Apresentação:** composição React explícita com a Section Library.
- **Domínio:** contratos adicionais somente quando o projeto realmente precisar.

Para um novo cliente, edite as fontes existentes em vez de criar um segundo objeto
global. Em `src/config/site.ts`, substitua os valores de `siteConfig`, preservando a
resolução segura de URL e indexação:

```ts
export const siteConfig = {
  name: "Ateliê Horizonte",
  description: "Arquitetura residencial contemporânea.",
  url: resolvedSiteUrl.url,
  isIndexable: indexableRequested,
  locale: "pt-BR",
  copyrightYear: 2026,
  contact: { email: "contato@ateliehorizonte.com.br" },
  social: { instagram: "https://instagram.com/ateliehorizonte" },
} satisfies SiteConfig;
```

Em `src/config/navigation.ts`, mantenha apenas destinos públicos reais:

```ts
export const mainNavigation = [
  { label: "Projetos", href: "/projetos" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
] satisfies NavigationItem[];
```

Valores globais da marca pertencem a `src/styles/themes.css`. Quando uma
experiência precisar de tema local, tipifique seus valores sem duplicar aliases:

```ts
import { resolveThemeTokens, type ThemeTokens } from "@/lib/theme";

const brandTheme = {
  "--brand-primary": "oklch(0.42 0.1 45)",
  "--brand-primary-hover": "oklch(0.36 0.1 45)",
  "--brand-radius": "0.5rem",
} satisfies ThemeTokens;

export const theme = resolveThemeTokens(brandTheme);
```

Esse objeto é deliberadamente parcial e serve apenas para ilustrar o contrato e o
resolvedor. Uma identidade pronta para publicação deve configurar todos os tokens
necessários à experiência, incluindo cores semânticas, foregrounds, estados
`hover` e `active`, foco, superfícies, tipografia e radius. Valide o contraste das
combinações normais e interativas; não trate os três valores do exemplo como um
tema completo.

Organize textos e imagens em um arquivo como `src/content/home.ts`, usando
`satisfies` com os contratos das seções quando aplicável. A página pública apenas
compõe os dados e a apresentação:

```tsx
import { HeroCentered } from "@/components/sections/hero";
import { homeContent } from "@/content/home";

export default function HomePage() {
  return <HeroCentered {...homeContent.hero} titleAs="h1" />;
}
```

Configure `NEXT_PUBLIC_SITE_URL` e `SITE_INDEXABLE` por ambiente; a URL e a decisão
de indexação não devem ser duplicadas em arquivos de conteúdo.

## Landing page

Indicada para uma oferta principal e uma conversão clara.

```text
src/
  app/(site)/
    layout.tsx
    page.tsx
  config/
    site.ts
    navigation.ts
  content/
    landing.ts
public/images/<cliente>/
    hero.*
    features/
    social-card.*
```

### Rotas

- `/` — página principal.
- Rotas legais ou de confirmação apenas quando o briefing exigir.

### Composição sugerida

- `HeroCentered` ou `HeroSplit`;
- `FeaturesGrid`;
- `ServicesGrid` ou `StatsSection`, quando houver conteúdo verificável;
- `TestimonialsSection`, somente com autorização;
- `FAQSection`;
- `CTASection` e, opcionalmente, `ContactSection`.

### Conteúdo mínimo

Proposta de valor, público, benefícios, prova confiável, objeções, CTA, contatos e
metadata. Depoimentos, estatísticas e FAQ são opcionais e não devem ser inventados.

## Portfolio

Indicado para estúdios, profissionais e equipes cujo trabalho visual conduz a
narrativa.

```text
src/
  app/(site)/
    layout.tsx
    page.tsx
    projetos/
      page.tsx
      [slug]/page.tsx
    sobre/page.tsx          # opcional
    contato/page.tsx        # opcional
  config/
    site.ts
    navigation.ts
  content/
    pages.ts
    projects.ts
  types/
    project.ts
public/images/<cliente>/
    studio/
    projects/<slug>/
```

### Rotas

- `/` — seleção e posicionamento.
- `/projetos` — índice completo.
- `/projetos/[slug]` — narrativa de cada projeto.
- `/sobre` e `/contato` quando o volume justificar páginas próprias.

### Composição sugerida

- `HeroSplit` ou `HeroFullBleed`;
- `ProjectsGrid` e `FeaturedProject`;
- `ImageGallery` nas páginas detalhadas;
- `AboutSplit`;
- `ServicesGrid`;
- `CTASection` ou `ContactSection`.

### Conteúdo mínimo

Cada projeto precisa de slug único, título, categoria, resumo, capa e conteúdo
suficiente para a página. Local, ano, escopo, galeria e créditos são opcionais
conforme o domínio. Um contrato detalhado pode compor o tipo `Project` consumido
por `ProjectsGrid`, sem mudar a API da biblioteca.

## Site institucional

Indicado para organizações que precisam explicar atuação, capacidades e canais de
relacionamento com clareza.

```text
src/
  app/(site)/
    layout.tsx
    page.tsx
    sobre/page.tsx
    servicos/page.tsx       # opcional
    contato/page.tsx
  config/
    site.ts
    navigation.ts
  content/
    home.ts
    about.ts
    services.ts
    contact.ts
  types/                    # somente contratos de domínio necessários
public/images/<cliente>/
    institution/
    services/
    social-card.*
```

### Rotas

- `/` — visão geral e prioridade institucional.
- `/sobre` — história, abordagem e diferenciais.
- `/servicos` — opcional quando o conteúdo exceder a homepage.
- `/contato` — canais e orientações de atendimento.

### Composição sugerida

- `HeroSplit`;
- `AboutSplit`;
- `ServicesGrid`;
- `FeaturesGrid`;
- `StatsSection`, apenas para indicadores comprováveis;
- `CTASection` e `ContactSection`.

### Conteúdo mínimo

Descrição institucional, públicos atendidos, serviços, diferenciais, contatos e
metadata. Indicadores, equipe, unidades e links sociais são opcionais e dependem de
material aprovado.

## O que não duplicar

- Não copie componentes de `src/components/sections` para uma pasta do cliente.
- Não crie uma segunda escala de tokens dentro de páginas.
- Não duplique `siteConfig` em arquivos de conteúdo.
- Não transforme presets em renderers ou esquemas universais.
- Não mantenha conteúdo demonstrativo como fallback silencioso.

Quando uma necessidade não cabe nos componentes atuais, primeiro tente composição.
Uma alteração na biblioteca só é apropriada quando representa uma necessidade
reutilizável, preserva contratos e é documentada em `SECTIONS.md` ou
`COMPONENTS.md`.
