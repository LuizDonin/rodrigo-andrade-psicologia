# Inicialização de um projeto de cliente

Este guia transforma uma versão estável do Website Starter Kit em um projeto de
cliente. Ele não altera o repositório-base: a adaptação deve ocorrer em uma cópia
independente, com histórico e publicação próprios.

Antes de começar, conclua o briefing e o blueprint descritos em
`BRIEFING_TEMPLATE.md` e `WORKFLOW.md`. Escolha um preset apenas como referência de
composição; a Section Library continua sendo a fonte compartilhada dos componentes.

## Repositório-base e projeto derivado

- **Repositório-base:** mantém Design System, Section Library, showcases, presets e
  o Estúdio Orla para desenvolvimento e validação do starter.
- **Projeto derivado:** contém um único site real, seus conteúdos, assets,
  configurações e rotas públicas. Demonstrações que não forem úteis devem ser
  removidas apenas dessa cópia.

Não desenvolva um cliente diretamente na branch principal do starter e não aponte
o `origin` do projeto derivado para o repositório-base.

## Processo em 12 etapas

### 1. Registrar a versão de origem

Escolha uma tag ou commit estável, anote-o no projeto e confirme que não há
alterações locais não compreendidas.

```bash
git status --short
git rev-parse HEAD
```

### 2. Criar uma cópia independente

Clone o starter para uma pasta nova e substitua o remoto. Use URLs e nomes reais
fornecidos pela sua plataforma Git.

Shell Unix:

```bash
git clone <url-do-starter> <pasta-do-cliente>
cd <pasta-do-cliente>
git remote rename origin starter
git remote add origin <url-do-repositorio-do-cliente>
```

Windows PowerShell:

```powershell
git clone <url-do-starter> <pasta-do-cliente>
Set-Location <pasta-do-cliente>
git remote rename origin starter
git remote add origin <url-do-repositorio-do-cliente>
```

Confirme com `git remote -v`. Remova o remoto `starter` se a equipe não quiser
atualizações manuais da base; nunca faça merge automático entre os projetos.

### 3. Preparar o ambiente local

Requer Node.js 20.9 ou superior, Corepack e a versão de pnpm fixada em
`package.json`.

Shell Unix:

```bash
corepack enable
pnpm install --frozen-lockfile
cp .env.example .env.local
```

Windows PowerShell:

```powershell
corepack enable
pnpm install --frozen-lockfile
Copy-Item .env.example .env.local
```

Mantenha `SITE_INDEXABLE=false` durante desenvolvimento e preview. Nunca versione
`.env.local` ou segredos.

### 4. Escolher a referência de composição

Use `landing`, `portfolio` ou `institutional` conforme o objetivo definido no
blueprint. Consulte `PROJECT_STRUCTURE.md` e `PRESETS.md`. Copie a ideia de
composição para rotas públicas; não copie componentes da Section Library.

### 5. Definir rotas públicas

Implemente as páginas sob `src/app/(site)/`. Defina uma composição React explícita
por página e preserve Server Components como padrão. Não exponha uma rota de
`src/app/dev` simplesmente removendo sua proteção de produção.

### 6. Substituir identidade e configuração

Atualize `src/config/site.ts`, `src/config/navigation.ts`, favicon, locale,
metadados e tokens de marca. Preserve os nomes dos tokens semânticos; altere os
valores da identidade no escopo do site, sem inserir dados do cliente em
`src/components`. Temas locais podem usar `ThemeTokens` e `resolveThemeTokens` de
`src/lib/theme.ts`; os valores da marca continuam na configuração do cliente.

### 7. Modelar e inserir conteúdo

Organize conteúdo aprovado em `src/content` e contratos de domínio em `src/types`
quando necessários. Substitua textos, projetos, depoimentos, contatos, créditos e
destinos demonstrativos. Componentes devem receber dados por props.

### 8. Substituir e revisar assets

Coloque imagens locais em uma pasta identificável de `public/images`. Registre
origem, licença e créditos; defina `alt`, dimensões, enquadramento, `sizes` e
prioridade de carregamento conforme o layout final. Remova assets demonstrativos
sem uso somente no projeto derivado.

### 9. Retirar demonstrações do projeto derivado

Depois que as rotas públicas estiverem funcionais, registre um commit de segurança
e remova as experiências que não pertencem ao produto final em um incremento
isolado. Antes de excluir cada arquivo, pesquise quem o importa e quais símbolos
dele ainda são usados:

- `src/app/dev/`;
- `src/content/presets/` e `src/content/site-orla/`;
- `src/config/presets.ts` e `src/config/studio-orla.ts`, somente depois de resolver
  as dependências entre eles e a implementação do cliente;
- assets em `public/images/showcase`, `public/images/presets` e
  `public/images/site-orla` sem uso;
- tipos exclusivamente demonstrativos, depois de confirmar que não têm imports.

O mecanismo compartilhável de temas já está isolado em `src/lib/theme.ts`, que
exporta `ThemeTokens` e `resolveThemeTokens`. Presets e Estúdio Orla dependem desse
módulo neutro, não um do outro. Preserve-o quando a implementação do cliente usar
tokens locais; remova apenas configurações, valores e conteúdos demonstrativos
depois de confirmar os imports.

Não remova `src/components/sections`, `src/components/ui`, tokens ou primitives de
layout. Use busca de referências antes de cada exclusão. Depois de cada lote,
execute typecheck e build e confira as rotas afetadas. Se a validação falhar,
reverta somente o lote de limpeza a partir do commit de segurança, corrija a
dependência e tente novamente.

Quando rotas removidas continuarem aparecendo em erros de tipos gerados pelo
Next.js, confirme primeiro que não existem imports ou referências reais. Se o
código estiver consistente, interrompa o servidor de desenvolvimento, remova
**somente** o cache gerado `.next` e execute novamente `pnpm typecheck` e
`pnpm build`. Não use essa limpeza para ocultar erros de código e não remova outros
diretórios ou arquivos do projeto como parte desse procedimento.

### 10. Configurar SEO e indexação

Defina title, description, Open Graph, Twitter Cards e canonical própria para cada
rota pública. Atualize sitemap e robots. Canonicals só devem existir quando a
indexação estiver habilitada e devem usar o caminho definitivo de cada página.

Configure `NEXT_PUBLIC_SITE_URL` com a origem HTTPS definitiva e ative
`SITE_INDEXABLE=true` apenas na produção aprovada. Consulte
`PRODUCTION_READINESS.md`.

### 11. Validar o projeto

```bash
pnpm lint
pnpm typecheck
pnpm format:check
pnpm build
```

Além dos checks automáticos, revise teclado, foco, contraste, 320px, 375px, 768px,
1440px, zoom de 200%, reduced motion, links, 404, metadata, imagens, conversão e
ausência de conteúdo demonstrativo. Use `PROJECT_CHECKLIST.md`.

### 12. Aprovar e preparar publicação

Gere um preview não indexável a partir de um commit identificado. Registre a
aprovação, configure domínio e ambiente de produção, execute o checklist de
publicação, publique o commit aprovado e conclua o smoke test com um plano de
rollback conhecido.

## Buscas de segurança

Antes do aceite, procure referências que não devem chegar ao cliente:

```bash
rg -n "/dev/|site-orla|Estúdio Orla|example\.com|exemplo\.com|fictício|demonstrativo" src public docs
rg -n "mailto:|tel:|wa\.me|https?://" src
```

No PowerShell, os mesmos comandos funcionam quando o ripgrep (`rg`) está
disponível. Sem ele, use a busca global do Cursor ou do VS Code e a busca de todas
as referências do editor antes de remover ou mover um símbolo. Analise cada
ocorrência: documentação histórica pode ser legítima, mas HTML público, metadata,
navegação e canais de contato exigem conteúdo aprovado.

## Atualizações futuras do starter

Trate atualizações como mudanças manuais: compare commits, selecione correções
relevantes, revise conflitos e execute toda a validação. Um projeto de cliente não
deve depender de sincronização contínua com demos ou conteúdo do repositório-base.
