# Website Starter Kit — Site Blueprint

**Projeto demonstrativo:** Estúdio Orla  
**Tipo:** arquitetura e interiores  
**Referência inicial:** preset Portfolio  
**Status:** implementado na Fase 5.2 sob o prefixo local `/dev/site-orla`

## 1. Identidade

### Marca

**Estúdio Orla** é um escritório fictício de arquitetura e interiores dedicado a
residências, espaços de hospitalidade e intervenções de pequena escala. Sua
proposta de valor é criar ambientes precisos e acolhedores a partir da relação
entre luz, matéria e rotina.

### Público

- Pessoas e famílias que valorizam projeto autoral e acompanhamento próximo.
- Empreendedores de hospitalidade e varejo de pequena escala.
- Parceiros como incorporadoras, fornecedores, fotógrafos e publicações.

### Posicionamento e tom

- Contemporâneo sem parecer efêmero.
- Editorial, preciso e observador.
- Seguro sem recorrer a superlativos ou promessas genéricas.
- Textos curtos na navegação e mais narrativos nos projetos.

### Direção visual

- Paleta mineral clara, texto escuro e um acento terroso com contraste AA.
- Headings editoriais combinados a uma sans-serif funcional para navegação e
  informações técnicas.
- Radius discreto, bordas sutis e elevação contida.
- Fotografia em grande escala, respiro amplo e alternância de composições.
- Movimento não essencial, limitado a estados de interação e respeitando
  `prefers-reduced-motion`.

Valores finais de cor, fontes e imagens dependem de uma identidade aprovada e de
assets licenciados. Eles não devem ser incorporados à Section Library.

## 2. Objetivo e conversão

O site deve apresentar a qualidade do trabalho, explicar a atuação do estúdio e
conduzir visitantes qualificados a uma conversa inicial.

- **Objetivo principal:** gerar contatos contextualizados para novos projetos.
- **Conversão principal:** acessar `/contato` e usar o canal de e-mail indicado.
- **Conversões secundárias:** explorar projetos e compreender serviços e processo.
- **Sinal de sucesso:** visitante encontra um projeto relevante, entende o escopo
  do estúdio e chega a um canal de contato válido sem depender de redes sociais.

## 3. Arquitetura da informação

| Rota               | Papel                                                          |
| ------------------ | -------------------------------------------------------------- |
| `/`                | Apresentar posicionamento, seleção de projetos e próximo passo |
| `/projetos`        | Exibir o portfólio completo e suas categorias                  |
| `/projetos/[slug]` | Narrar contexto, decisões, imagens e créditos de um projeto    |
| `/sobre`           | Apresentar estúdio, abordagem, serviços e processo             |
| `/contato`         | Reunir orientação e canais de contato                          |

### Navegação principal

1. Projetos → `/projetos`
2. Sobre → `/sobre`
3. Contato → `/contato`

O nome da marca aponta para `/`. Links de projeto sempre usam URLs reais no padrão
`/projetos/[slug]`. Não haverá destinos vazios, links apenas visuais ou filtros sem
conteúdo suficiente.

## 4. Composição por página

As páginas continuam composições React explícitas. Os componentes recebem conteúdo
tipado e não escolhem dados ou rotas implicitamente.

### `/` — Página inicial

1. `HeroSplit`: posicionamento, descrição curta, CTA para projetos e imagem LCP.
2. `ProjectsGrid`: seleção editorial de três a cinco projetos.
3. `FeaturedProject`: narrativa curta de um trabalho prioritário.
4. `AboutSplit`: introdução ao estúdio e CTA para `/sobre`.
5. `CTASection`: convite final para iniciar uma conversa.

### `/projetos` — Portfólio

1. `HeroCentered` sem mídia: introdução e escopo do portfólio.
2. `ProjectsGrid`: todos os projetos publicados, com duas colunas editoriais.
3. `CTASection`: destino para contato.

Não será criado filtro na primeira versão. Categorias podem ser exibidas nos cards;
uma interface de filtragem só será considerada quando quantidade e necessidade de
navegação justificarem interação cliente.

### `/projetos/[slug]` — Projeto

1. `HeroSplit` ou `HeroFullBleed`: título, categoria, resumo e imagem principal.
2. `AboutSplit`: contexto e conceito do projeto.
3. `ImageGallery`: sequência fotográfica e legendas.
4. `FeaturedProject`: próximo projeto relacionado, quando houver.
5. `CTASection`: contato para projeto semelhante.

A página pode compor blocos sem criar uma “ProjectDetailSection” enquanto os
componentes existentes cobrirem a narrativa. Uma ficha técnica simples pode ser
montada com primitives de layout e tipografia; só se tornará componente após uma
lacuna repetida e comprovada.

### `/sobre` — Estúdio

1. `HeroSplit`: visão e imagem do espaço ou equipe.
2. `AboutSplit`: trajetória e abordagem.
3. `ServicesGrid`: arquitetura, interiores e acompanhamento.
4. `ImageGallery`: processo, materiais ou bastidores, se houver assets adequados.
5. `CTASection`: encaminhamento para contato.

### `/contato` — Contato

1. `HeroCentered` sem mídia: orientação breve antes do contato.
2. `ContactSection`: e-mail, telefone opcional, endereço e redes aprovadas.
3. `CTASection` somente se existir um destino secundário útil, como projetos.

Não haverá formulário ou backend na primeira implementação. Essa decisão só muda
com requisitos de campos, entrega, privacidade, spam e responsável pelo atendimento.

## 5. Dados e conteúdo

### Identidade e navegação

Uma configuração específica do site deve conter:

```ts
type StudioSiteConfig = {
  name: string;
  description: string;
  url: string;
  locale: string;
  navigation: readonly { label: string; href: string }[];
  contact: {
    email: string;
    phone?: string;
    address?: string;
  };
  social: {
    instagram?: string;
    pinterest?: string;
  };
};
```

Na Fase 5.2, deve-se avaliar se o `SiteConfig` existente será estendido com campos
realmente compartilhados ou se dados editoriais específicos ficarão em uma
configuração complementar. A configuração demonstrativa dos presets não deve ser
usada como configuração de produção.

### Projetos

O tipo público `Project` permanece responsável pelo card de listagem:

```ts
type Project = {
  id: string;
  title: string;
  category?: string;
  description?: string;
  href: string;
  image: SectionImage;
};
```

O conteúdo de domínio poderá estendê-lo por composição, sem alterar a API de
`ProjectsGrid`:

```ts
type ProjectDetail = {
  slug: string;
  project: Project;
  seo: {
    title: string;
    description: string;
    socialImage: string;
  };
  location: string;
  year: string;
  scope: readonly string[];
  credits: readonly { role: string; name: string }[];
  narrative: {
    introduction: string;
    concept?: string;
  };
  gallery: readonly GalleryImage[];
  featured?: boolean;
};
```

`project.href` deve ser derivado de um slug validado ao preparar o conteúdo, não
recalculado dentro do componente. A página dinâmica consulta o registro completo;
as listagens mapeiam `ProjectDetail[]` para o campo `project` já compatível.

### Organização futura proposta

```text
public/images/studio-orla/
├── brand/
├── projects/
└── studio/

src/
├── app/(site)/
│   ├── page.tsx
│   ├── projetos/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── sobre/page.tsx
│   └── contato/page.tsx
├── config/
│   ├── site.ts
│   └── navigation.ts
├── content/
│   ├── pages/
│   │   ├── home.ts
│   │   ├── about.ts
│   │   └── contact.ts
│   └── projects.ts
└── types/
    └── project.ts
```

Essa estrutura é uma proposta, não deve ser criada antes de conter arquivos reais.
Não haverá renderer genérico de seções; cada `page.tsx` continuará exibindo a ordem
e a hierarquia da composição.

## 6. SEO e compartilhamento

### Regras globais

- Configurar domínio definitivo em `siteConfig.url`; localhost nunca será canonical
  em produção.
- Usar o template de título do Metadata API com o nome Estúdio Orla.
- Escrever description própria para cada rota, sem repetição mecânica.
- Atualizar sitemap apenas com URLs públicas e projetos publicados.
- Manter rotas de desenvolvimento fora do sitemap e com `noindex`.
- Definir imagem Open Graph licenciada, com dimensões e enquadramento revisados.

### Metadados propostos

| Rota               | Title                                   | Intenção da description                         |
| ------------------ | --------------------------------------- | ----------------------------------------------- |
| `/`                | Estúdio Orla — Arquitetura e interiores | Posicionamento, região e proposta principal     |
| `/projetos`        | Projetos                                | Tipos de projeto e linguagem do portfólio       |
| `/sobre`           | Sobre o Estúdio Orla                    | Abordagem, serviços e forma de trabalho         |
| `/contato`         | Contato                                 | Como iniciar uma conversa e região atendida     |
| `/projetos/[slug]` | `{nome do projeto} — Estúdio Orla`      | Categoria, localização, ano e aspecto relevante |

Cada rota terá canonical absoluta. Projetos conhecidos usarão `generateStaticParams`
e metadata derivada do conteúdo tipado. Slugs inexistentes retornarão `notFound()`.

### Headings

- Um único `h1` por página, normalmente no Hero.
- Seções principais usam `h2`; cards e subdivisões usam `h3` conforme contexto.
- O nível semântico é configurado por `titleAs` e `itemTitleAs`, sem escolher heading
  pelo tamanho visual.
- Nomes de projetos e textos alternativos devem ser descritivos e únicos.

Dados estruturados só serão considerados com dados reais e verificáveis. Não serão
fabricados reviews, avaliações, endereço ou credenciais profissionais.

## 7. Acessibilidade e performance

- Navegação, skip link, landmarks e foco visível em todas as páginas.
- Contraste WCAG 2.2 AA para texto, links, botões e estados interativos.
- Leitura e ordem do DOM coerentes com a ordem visual.
- Imagens informativas com `alt`; imagens decorativas com `alt=""`.
- `sizes` correspondente à composição e proporção reservada antes do carregamento.
- `preload` somente na imagem LCP provável de cada página.
- Server Components por padrão e ausência de estado cliente sem interação real.
- Sem movimento essencial; reduced motion preservado.
- Refluxo sem truncamento em 320px, 375px, 768px, 1440px e zoom de 200%.

## 8. Critérios de aceite para revisão

O site estará pronto para revisão quando:

- Todas as cinco rotas existirem e links internos resolverem corretamente.
- Cada slug publicado gerar página; slug desconhecido retornar 404.
- Conteúdo fictício estiver claramente identificado ou substituído antes de produção.
- Não houver texto, imagem, crédito, número ou contato sem aprovação.
- Metadata, canonical, Open Graph, sitemap e robots refletirem o ambiente correto.
- Cada página tiver um `h1`, landmarks e ordem de headings coerente.
- Teclado, skip link, foco e links forem funcionais.
- Contraste atender AA e layouts não apresentarem overflow horizontal.
- Imagens não causarem layout shift perceptível e somente LCP usar preload.
- 320px, 375px, 768px, 1440px e zoom de 200% forem revisados.
- `prefers-reduced-motion` não mantiver animação essencial.
- Lint, typecheck, format check e build passarem.
- O responsável definido no briefing aprovar conteúdo, identidade e navegação.

## 9. Decisões pendentes para a Fase 5.2

1. Domínio, cidade/região atendida e canais reais de contato.
2. Identidade final: logotipo, paleta, fontes e licenças.
3. Quantidade e ordem dos projetos iniciais.
4. Textos, fichas técnicas, créditos e direitos de uso das imagens.
5. Projeto destacado e regra editorial para o próximo projeto.
6. Necessidade real de telefone, endereço, mapa ou WhatsApp.
7. Imagem Open Graph padrão e imagens sociais individuais.
8. Se dados de arquitetura justificam JSON-LD e quais dados são verificáveis.
9. Destino de publicação, analytics e requisitos de consentimento.

## 10. Estado da implementação

A Fase 5.2 implementa o primeiro fluxo multipágina do starter sem substituir a
homepage pública. As rotas abaixo existem somente quando `NODE_ENV` é
`development` e retornam 404 na build de produção:

- `/dev/site-orla`
- `/dev/site-orla/projetos`
- `/dev/site-orla/projetos/[slug]`
- `/dev/site-orla/sobre`
- `/dev/site-orla/contato`

### Estrutura efetiva

```text
public/images/site-orla/
├── studio/
└── projects/
    ├── casa-areia/
    ├── apartamento-linha/
    └── pousada-entre-patios/

src/
├── app/dev/site-orla/
│   ├── _components/site-orla-shell.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   ├── projetos/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── sobre/page.tsx
│   └── contato/page.tsx
├── config/studio-orla.ts
├── content/site-orla/
│   ├── pages.ts
│   └── projects.ts
└── types/studio-project.ts
```

`StudioProject` mantém um `project: Project` para alimentar `ProjectsGrid` e reúne
os campos exclusivos das páginas detalhadas. `generateStaticParams`,
`generateMetadata` e o componente da rota dinâmica consultam a mesma coleção
local. Slugs desconhecidos chamam `notFound()`.

A identidade usa tokens locais resolvidos pelo mesmo mecanismo semântico dos
presets. O escopo termina no wrapper identificado por `data-site="studio-orla"` e
não altera a homepage, os showcases ou a Section Library.

Não foram necessários novos componentes de seção. A ficha de conceito, escopo e
créditos da página de projeto é uma composição local de `Section`, `Container`,
`Heading` e `Text`; ela só deverá virar componente compartilhado se a necessidade
se repetir em outros sites.

## 11. Convertendo a demonstração em site público

1. Copiar a composição para rotas públicas sob `src/app/(site)/`, removendo o
   prefixo `/dev/site-orla` dos destinos internos.
2. Integrar a configuração aprovada a `siteConfig` e `mainNavigation`, sem manter
   duas fontes concorrentes para marca e navegação.
3. Aplicar os tokens da identidade no layout público e remover a dependência de
   configuração de presets apenas se o site for extraído do starter.
4. Remover a guarda `NODE_ENV` somente das novas rotas públicas. As rotas de
   showcase e presets continuam privadas em produção.
5. Substituir marca, textos, contatos, projetos, créditos e imagens demonstrativos
   por conteúdo aprovado e assets licenciados.
6. Configurar domínio real em `NEXT_PUBLIC_SITE_URL`; então adicionar canonicals,
   Open Graph absoluto, sitemap e robots correspondentes.
7. Decidir se o contato continua por links ou se requisitos reais justificam um
   formulário com validação, privacidade e proteção contra abuso.
8. Revisar `alt`, `sizes`, preload de LCP e enquadramento após a troca das imagens.
9. Executar todos os gates do `WORKFLOW.md`, aprovar o preview e somente depois
   publicar o commit identificado.

Enquanto o projeto permanecer demonstrativo, não deve anunciar URL canônica nem
ser incluído no sitemap público.
