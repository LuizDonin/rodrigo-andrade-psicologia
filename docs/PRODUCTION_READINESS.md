# Production Readiness

Este documento define o gate final para transformar um preset ou site demonstrativo
do Website Starter Kit em um site público. Ele complementa `WORKFLOW.md`: aprovação
de preview não autoriza publicação, e publicação não termina antes do smoke test e
do registro da versão.

## 1. Estados de ambiente

O starter adota uma política segura por padrão:

- `NEXT_PUBLIC_SITE_URL` contém somente a origem do site, como
  `https://www.exemplo.com.br`.
- `SITE_INDEXABLE=false` mantém `noindex`, bloqueia o crawling no `robots.txt`,
  omite canonical e gera sitemap vazio.
- `SITE_INDEXABLE=true` só é aceito com uma origem HTTPS explícita. Use esse valor
  exclusivamente na produção aprovada.
- Desenvolvimento e CI podem omitir as variáveis; o fallback local nunca se torna
  indexável.

Valores como `https://exemplo.com/caminho`, URLs com query/hash e protocolos que
não sejam HTTP(S) interrompem o build. A URL pública não é segredo; credenciais e
tokens de integrações nunca devem usar prefixo `NEXT_PUBLIC_`.

| Ambiente        | URL                                   | Indexável |
| --------------- | ------------------------------------- | --------- |
| Desenvolvimento | `http://localhost:3000`               | Não       |
| CI              | fallback local ou URL do teste        | Não       |
| Preview         | URL estável do preview, se necessária | Não       |
| Produção        | domínio HTTPS definitivo              | Sim       |

## 2. Checklist de publicação

### Domínio e ambiente

- [ ] Domínio definitivo registrado e responsável técnico identificado.
- [ ] DNS, domínio principal e redirecionamento de `www` definidos.
- [ ] HTTPS ativo antes de habilitar indexação.
- [ ] `NEXT_PUBLIC_SITE_URL` configurada com a origem HTTPS definitiva.
- [ ] `SITE_INDEXABLE=true` configurado somente em produção.
- [ ] Variáveis de preview e produção revisadas separadamente.
- [ ] Nenhum segredo presente em Git, logs, HTML ou variável `NEXT_PUBLIC_*`.

### Build e hospedagem

- [ ] Versões de Node e pnpm compatíveis com `package.json`.
- [ ] Instalação executada com `pnpm install --frozen-lockfile`.
- [ ] Lint, typecheck, format check e build aprovados pela CI.
- [ ] Preview criado a partir do commit candidato, sem alterações locais.
- [ ] Headers, redirects e limites da plataforma revisados quando aplicáveis.

### Conteúdo, SEO e assets

- [ ] Marca, contatos, textos, créditos e CTAs aprovados.
- [ ] Imagens e fontes possuem licença e registro de origem.
- [ ] Cada rota possui title, description e um único `h1`.
- [ ] Cada rota pública indexável declara sua própria canonical, apontando para o
      domínio e para o caminho corretos; canonicals de layout não devem ser herdadas
      entre páginas diferentes.
- [ ] Open Graph e Twitter Cards usam textos e imagens aprovados.
- [ ] Imagens sociais têm URL absoluta, dimensões e enquadramento verificados.
- [ ] `robots.txt` permite crawling somente na produção aprovada.
- [ ] Sitemap contém apenas rotas públicas e indexáveis.
- [ ] Slugs removidos possuem redirect quando a migração exigir.
- [ ] Dados estruturados existem somente para fatos verificáveis.

### Demonstrações e privacidade

- [ ] Rotas `/dev/*` retornam 404 na build de produção.
- [ ] Conteúdo demonstrativo não aparece em navegação, sitemap ou metadata pública.
- [ ] Assets e dados fictícios desnecessários foram removidos do projeto derivado.
- [ ] Analytics, cookies e embeds só existem quando aprovados e documentados.
- [ ] Política de privacidade e consentimento foram avaliados para as integrações.

### Experiência e conversão

- [ ] Links internos e externos resolvem para destinos aprovados.
- [ ] E-mail, telefone e WhatsApp foram acionados em dispositivo real.
- [ ] CTA principal funciona do início ao fim.
- [ ] Teclado, skip link, foco visível e ordem de leitura foram revisados.
- [ ] Contraste atende WCAG 2.2 AA nos estados padrão e interativos.
- [ ] 320px, 375px, 768px, 1440px e zoom de 200% não apresentam overflow.
- [ ] Reduced motion, imagens sem carregamento e páginas 404 foram testados.
- [ ] LCP provável, `preload` e `sizes` foram revisados após os assets finais.

### Aprovação, publicação e rollback

- [ ] Responsável final aprovou o preview e o conteúdo registrado.
- [ ] Commit candidato e resultado da CI foram anotados.
- [ ] Responsável, janela de publicação e canal de comunicação estão definidos.
- [ ] Versão anterior publicável foi identificada para rollback.
- [ ] Procedimento de rollback foi confirmado na plataforma.
- [ ] Smoke test pós-deploy foi executado.
- [ ] Commit publicado, horário, ambiente e resultado foram registrados.

## 3. Adaptando um preset ou o Estúdio Orla

1. Crie um projeto derivado ou branch de cliente a partir de uma versão estável do
   starter. Não transforme as rotas `/dev` em produção por simples exposição.
2. Mova a composição escolhida para rotas públicas sob `src/app/(site)/`. Remova o
   prefixo demonstrativo de navegação, CTAs e links entre projetos.
3. Consolide nome, URL, locale, contato e navegação nas configurações públicas.
   Elimine fontes concorrentes e strings do cliente em componentes compartilhados.
4. Mantenha os tokens da marca no layout ou wrapper do site. Verifique que o escopo
   não altera showcases, previews ou outra experiência presente no repositório.
5. Preserve conteúdo tipado em `src/content` e contratos de domínio em `src/types`.
   Componentes recebem dados; não devem buscar conteúdo específico implicitamente.
6. Reutilize a Section Library sem copiá-la para o diretório do cliente. Uma nova
   API compartilhada exige uma necessidade repetida e documentação correspondente.
7. Substitua todo texto, contato, projeto, crédito e asset demonstrativo. Busque por
   `/dev/`, `example.com`, `fictício`, `demonstrativo` e nomes dos presets antes do
   aceite.
8. Defina metadata por rota e por conteúdo dinâmico. Adicione canonical somente
   depois que as rotas e o domínio definitivos estiverem aprovados.
9. Atualize o sitemap com todas e apenas as rotas públicas. Mantenha previews e
   demonstrações não indexáveis.
10. Execute o checklist completo, registre aprovação e publique um commit imutável.

O Estúdio Orla conserva `Project` dentro de `StudioProject`; essa composição pode
ser reutilizada para alimentar cards e páginas detalhadas sem quebrar a API da
Section Library. Em um site real, renomeie contratos específicos da demonstração
quando a marca mudar e preserve apenas os campos que o conteúdo aprovado utiliza.

## 4. Smoke test pós-deploy

Execute imediatamente após a publicação:

1. Abra a homepage e uma rota interna diretamente, sem navegação prévia.
2. Confirme HTTPS, domínio, title, description, canonical e imagem social.
3. Acesse `robots.txt` e `sitemap.xml` no domínio publicado.
4. Teste navegação principal, logo, footer, CTA e todos os canais de contato.
5. Abra um slug válido e um inválido; confirme conteúdo e status 404.
6. Confirme que `/dev/design-system`, `/dev/sections`, `/dev/presets/landing` e
   `/dev/site-orla` retornam 404.
7. Teste uma largura mobile e teclado até a ação principal.
8. Confira logs da plataforma e ausência de erros no console/rede.

Falha em domínio, HTTPS, metadata, navegação principal, conversão ou exposição de
conteúdo privado bloqueia a publicação e aciona rollback.

## 5. Registro de publicação

Registre em issue, release ou documento operacional:

```text
Projeto:
Ambiente:
Domínio:
Commit publicado:
Build/CI:
Data e horário:
Responsável técnico:
Aprovação de conteúdo:
Smoke test:
Versão anterior para rollback:
Observações:
```

Rollback significa promover novamente a última versão conhecida como estável ou
reverter o commit candidato conforme o mecanismo da hospedagem. Não edite produção
manualmente. Depois do rollback, registre causa, impacto e próximo responsável antes
de uma nova tentativa.

## 6. Limitações atuais

- O starter não fornece deploy automático nem escolhe uma plataforma pelo cliente.
- Não há formulário, backend, analytics ou consentimento por padrão.
- A imagem social depende da identidade e dos assets licenciados de cada projeto.
- Auditorias automáticas complementam, mas não substituem, revisão por teclado,
  dispositivos reais e aprovação humana do conteúdo.
- Advisories sem versão corrigida em ferramentas de desenvolvimento devem ser
  monitorados; não use overrides incompatíveis apenas para zerar um relatório.
