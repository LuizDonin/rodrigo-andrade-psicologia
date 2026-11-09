# Website Starter Kit — Site Presets

**Version:** 1.0.0
**Scope:** Phase 4.1 — Site Presets Foundation

Os presets demonstram como transformar a mesma Section Library em landing pages, portfólios e sites institucionais com identidades distintas. Eles são composições explícitas de React, não aplicações independentes, templates duplicados ou um page builder.

## Arquitetura

Cada experiência combina cinco responsabilidades:

1. `src/lib/theme.ts` define o contrato e os aliases semânticos de temas locais.
2. `src/config/presets.ts` define identidade, metadata, navegação e tokens locais.
3. `src/content/presets/` concentra o conteúdo tipado de cada demonstração.
4. `src/app/dev/presets/_components/preset-shell.tsx` fornece skip link, header, navegação, landmark principal e footer.
5. Cada `page.tsx` compõe as seções explicitamente, deixando visível a ordem narrativa da página.

```text
src/
├── app/
│   ├── (site)/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── dev/presets/
│       ├── _components/preset-shell.tsx
│       ├── landing/page.tsx
│       ├── portfolio/page.tsx
│       └── institutional/page.tsx
├── config/presets.ts
├── lib/theme.ts
└── content/presets/
    ├── landing.ts
    ├── portfolio.ts
    └── institutional.ts
```

O route group `(site)` preserva Header, Footer, skip link e `<main>` do site público sem alterar sua URL. As rotas de desenvolvimento ficam fora desse layout e recebem sua própria estrutura semântica. Route groups não aparecem na URL.

## Presets disponíveis

### Landing

Rota local: `/dev/presets/landing`

Composição:

```text
HeroCentered → FeaturesGrid → StatsSection →
TestimonialsSection → FAQSection → CTASection
```

Use como ponto de partida para uma página única orientada a uma proposta e uma conversão principal. A demonstração Nexo Flow usa uma identidade clara e energética; marca, produto, pessoas e indicadores são fictícios.

### Portfolio

Rota local: `/dev/presets/portfolio`

Composição:

```text
HeroSplit → ProjectsGrid → FeaturedProject →
AboutSplit → ImageGallery → ContactSection
```

Use quando projetos e imagens conduzem a narrativa. Lume Atelier aplica um tema escuro local, heading serifado e ritmo editorial. Os trabalhos, créditos e canais são demonstrativos.

### Institutional

Rota local: `/dev/presets/institutional`

Composição:

```text
HeroSplit → AboutSplit → StatsSection → ServicesGrid →
FeaturesGrid → CTASection → ContactSection
```

Use para apresentar uma organização, suas capacidades e formas de contato com clareza. Vértice Engenharia usa uma identidade técnica e sóbria. Empresa, indicadores e contatos são fictícios.

## Como escolher

- Escolha `landing` quando houver uma oferta central, uma audiência bem definida e um próximo passo dominante.
- Escolha `portfolio` quando a qualidade e a sequência do trabalho visual forem a principal evidência.
- Escolha `institutional` quando o visitante precisar compreender organização, serviços, processo e credibilidade antes de entrar em contato.

A escolha define uma composição inicial, não uma limitação permanente. Remova seções sem função real e reorganize a narrativa conforme o projeto.

## Personalização

### Marca e tokens

Edite o objeto correspondente em `src/config/presets.ts`. `name`, `descriptor`, `metadata`, `navigation` e `footerNote` pertencem à identidade. O campo `theme` aceita CSS Custom Properties do Design System.

```ts
const examplePreset = {
  name: "Nome do cliente",
  theme: {
    "--brand-font-heading": 'Georgia, "Times New Roman", serif',
    "--brand-primary": "oklch(0.42 0.16 250)",
    "--brand-primary-hover": "oklch(0.36 0.16 250)",
    "--background": "oklch(0.99 0.004 250)",
  },
};
```

Os tokens são aplicados no elemento raiz da experiência. Eles não alteram outros presets nem os componentes compartilhados. Preserve contraste entre `background`/`foreground`, `primary`/`primary-foreground` e estados interativos.

O `PresetShell` combina os valores de cada identidade com aliases semânticos locais por meio de `resolveThemeTokens`, exportada por `src/lib/theme.ts`. O mesmo módulo exporta o tipo neutro `ThemeTokens`. Assim, `--primary`, `--primary-hover`, `--primary-active`, `--ring`, `--link`, `--radius`, fontes e tokens de superfície são redeclarados no mesmo elemento que recebe `--brand-*`.

Essa redeclaração é necessária porque uma custom property como `--primary: var(--brand-primary)` declarada no `:root` é resolvida no contexto do elemento raiz antes de ser herdada. Alterar somente `--brand-primary` em um descendente não faz o valor semântico herdado ser recalculado. Ao declarar o alias novamente no escopo do preset, a resolução passa a usar a marca local.

O módulo neutro não contém nomes, conteúdo nem valores visuais dos presets. Valores específicos continuam em `config/presets.ts`. Não adicione cores de cliente ao `PresetShell`, aos primitives ou à Section Library. Para personalizar uma identidade:

1. altere `--brand-primary`, seus estados e `--brand-focus`;
2. defina explicitamente `--primary-foreground` com contraste AA;
3. ajuste `background`, `foreground`, `surface`, `muted`, `secondary` e `accent` com seus respectivos foregrounds;
4. configure `--brand-radius` e as famílias `--brand-font-*`;
5. mantenha aliases semânticos no resolvedor compartilhado, sem copiá-los para cada preset.

A classe `.dark` fornece a base escura do portfólio, mas os estilos inline resolvidos pelo preset têm precedência para sua identidade. Como o escopo termina no wrapper de cada experiência, os valores não vazam para outra rota nem para a homepage.

### Conteúdo e navegação

Substitua textos, imagens, listas e contatos no arquivo correspondente em `src/content/presets/`. Os objetos usam `satisfies` com os contratos públicos das seções, portanto mudanças incompatíveis aparecem no typecheck.

Cada item de navegação deve apontar para um `id` existente na mesma página. Ações internas também devem usar destinos reais; destinos externos precisam de URL completa e um rótulo que identifique claramente sua natureza.

### Imagens

- Substitua os arquivos demonstrativos por assets locais otimizados e licenciados.
- Mantenha `alt` objetivo para imagens informativas e use `alt=""` somente em imagens decorativas.
- Ajuste `sizes` conforme a largura concreta da composição.
- Use `preload` apenas na provável imagem LCP da primeira dobra.
- Revise enquadramentos em mobile, tablet, desktop e zoom de 200%.

## Substituindo a demonstração por um cliente

1. Confirme nome, posicionamento, público e objetivo principal.
2. Escolha a composição mais próxima da necessidade real.
3. Substitua todos os textos, depoimentos, indicadores, contatos e URLs fictícios.
4. Troque os assets por imagens licenciadas e escreva textos alternativos adequados.
5. Ajuste tokens de marca e valide contraste WCAG 2.2 AA.
6. Remova seções que não acrescentem informação ou confiança.
7. Revise metadata, domínio canônico, sitemap, robots e compartilhamento social.
8. Valide teclado, headings, links, 375px, 768px, 1440px e zoom de 200%.

Nunca publique depoimentos, números ou logotipos demonstrativos como se fossem evidência real.

## Transformando um preset em site de produção

As rotas atuais chamam `notFound()` fora de desenvolvimento e usam metadata `noindex`. Para produzir um site real:

1. escolha uma composição;
2. mova ou adapte sua página para uma rota pública;
3. conecte a configuração do cliente ao layout público;
4. remova as guardas exclusivamente de desenvolvimento apenas da nova rota pública;
5. configure o domínio real e metadata definitiva;
6. inclua somente rotas públicas válidas no sitemap;
7. execute os checks e uma auditoria manual antes do deploy.

Não transforme os presets em um renderer universal. A página React explícita continua sendo o lugar para decidir ordem, headings e composição.

## Acessibilidade e performance

- Cada preset possui um único `h1`; as seções seguintes usam `h2` e itens usam `h3`.
- O `PresetShell` oferece skip link, landmarks e navegação identificada.
- Links e botões reutilizam os estados de foco do Design System.
- A navegação pode rolar horizontalmente em telas estreitas sem provocar overflow da página.
- Conteúdo permanece renderizado no servidor; nenhum preset adiciona estado cliente.
- Movimento não é essencial e os estilos compartilhados respeitam `prefers-reduced-motion`.

## Refinamento visual e adaptação

Os presets usam a mesma Section Library, mas ajustam localmente escala tipográfica,
ritmo vertical, superfícies, radius e conteúdo. Esses valores pertencem ao campo
`theme` de cada preset e terminam no wrapper do `PresetShell`; não devem ser
movidos para os componentes compartilhados apenas para reproduzir uma identidade.

- **Landing:** hierarquia concentrada na proposta de valor, ação principal direta,
  superfícies claras e indicadores em alto contraste reforçam a progressão de
  conversão.
- **Portfolio:** heading serifado, radius contido, espaços mais generosos e
  alternância entre `background`, `surface` e `muted` estabelecem ritmo editorial.
- **Institutional:** escala mais sóbria, conteúdo objetivo, indicadores antecipados
  e imagem técnica própria priorizam organização e credibilidade.

O header dos presets mantém todos os destinos visíveis em uma segunda linha no
mobile e retorna à composição horizontal a partir de `sm`. A solução permanece
sem estado cliente ou menu customizado; `overflow-x-auto` existe apenas como
proteção para traduções ou rótulos excepcionalmente longos.

### Checklist para um site real

- Definir uma proposta principal e um CTA dominante antes de editar a composição.
- Remover linguagem, números, pessoas e contatos demonstrativos.
- Ajustar `--brand-*` e os tokens locais de tipografia e espaçamento sem inserir
  valores de cliente na Section Library.
- Substituir imagens por assets licenciados, revisar `alt`, enquadramento e `sizes`.
- Garantir que todos os itens da navegação apontem para IDs existentes.
- Confirmar um único `h1` e uma sequência coerente de headings.
- Validar contraste normal, hover, active e focus-visible nos temas aplicáveis.
- Revisar 375px, 768px, 1440px e zoom de 200%, inclusive com textos longos.
- Testar teclado, skip link, reduced motion e ausência de overflow horizontal.
- Revisar metadata, canonical, robots e sitemap antes de remover a guarda de
  desenvolvimento.
- Executar lint, typecheck, format check e build antes da publicação.

## Limitações atuais

- Os presets são demonstrações de uma página, não sites multipágina completos.
- O portfólio não possui páginas individuais de projeto.
- Contato não inclui formulário ou envio por backend.
- Não existe seletor automático, CLI, CMS ou page builder.
- Os temas são locais e estáticos; não há preferência persistida pelo visitante.
- Assets atuais são ilustrações locais de demonstração.

Evoluções futuras devem partir de necessidades comprovadas, como páginas de projeto, formulário seguro, CMS ou automação de scaffold.
