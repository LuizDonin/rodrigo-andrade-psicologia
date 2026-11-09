# Checklist de projeto de cliente

Use este checklist no projeto derivado. Ele complementa, sem substituir, o gate de
publicação de `PRODUCTION_READINESS.md`.

## Origem e governança

- [ ] Briefing e blueprint foram aprovados.
- [ ] Commit ou tag de origem do starter foi registrado.
- [ ] O cliente possui repositório e `origin` próprios.
- [ ] `git remote -v` não permite publicar acidentalmente no starter.
- [ ] Responsáveis por conteúdo, técnica e aprovação final estão definidos.

## Estrutura e biblioteca

- [ ] Rotas públicas estão em `src/app/(site)` e refletem o blueprint.
- [ ] Páginas usam composições React explícitas, sem renderer universal.
- [ ] Server Components são o padrão.
- [ ] Client Components existem somente em folhas interativas.
- [ ] `src/components/ui`, `layout` e `sections` permanecem compartilhados.
- [ ] Nenhum componente da Section Library foi copiado para uma pasta do cliente.
- [ ] Dados de marca e conteúdo não foram inseridos em componentes compartilhados.
- [ ] APIs compartilhadas alteradas possuem necessidade comprovada e documentação.

## Identidade e conteúdo

- [ ] Nome, posicionamento, tom e CTA principal correspondem ao briefing.
- [ ] `src/config/site.ts` não contém dados do Website Starter Kit.
- [ ] Navegação e footer contêm apenas destinos existentes.
- [ ] Tokens locais aplicam cores, fontes, radius, foco e estados da marca.
- [ ] Temas locais reutilizam `ThemeTokens` e `resolveThemeTokens` de
      `src/lib/theme.ts`, sem duplicar aliases semânticos.
- [ ] Tema do cliente não vaza para outras experiências.
- [ ] Textos, serviços, números, depoimentos e projetos foram aprovados.
- [ ] Não restam alegações fictícias apresentadas como fatos.
- [ ] E-mail, telefone, WhatsApp, redes e endereço foram confirmados.

## Assets

- [ ] Logo, favicon e imagens sociais pertencem ao cliente.
- [ ] Imagens e fontes possuem licença, origem e créditos registrados.
- [ ] Cada imagem informativa possui `alt` útil; imagens decorativas usam alt vazio.
- [ ] Proporções, dimensões, `sizes`, `objectPosition` e cortes foram revisados.
- [ ] Apenas imagens LCP justificadas usam prioridade/preload.
- [ ] Não há assets demonstrativos sem uso no bundle ou repositório derivado.

## Limpeza das demonstrações

- [ ] Um commit de segurança foi criado antes da limpeza, permitindo reversão.
- [ ] Imports e referências foram pesquisados antes de remover cada arquivo.
- [ ] `src/app/dev` foi removida ou está formalmente justificada e protegida.
- [ ] Nenhuma rota `/dev/site-orla` está exposta.
- [ ] Conteúdo de `src/content/site-orla` foi removido quando não utilizado.
- [ ] Conteúdo de `src/content/presets` foi removido quando não utilizado.
- [ ] Foi confirmado que presets e Estúdio Orla importam o mecanismo de tema do
      módulo neutro `src/lib/theme.ts`, sem dependência entre demonstrações.
- [ ] `src/lib/theme.ts` foi preservado quando o cliente utiliza temas locais.
- [ ] Configurações `studio-orla.ts` e `presets.ts` só foram removidas depois de
      confirmar que nenhuma implementação do cliente depende delas.
- [ ] Assets `showcase`, `presets` e `site-orla` sem uso foram removidos.
- [ ] Tipos exclusivamente demonstrativos foram removidos após checar imports.
- [ ] A Section Library não foi confundida com material demonstrativo e permanece.
- [ ] Typecheck, build e rotas afetadas foram validados após cada lote de limpeza.

Procure, no mínimo:

```bash
rg -n "/dev/|site-orla|Estúdio Orla|Website Starter Kit|example\.com|exemplo\.com|fictício|demonstrativo" src public
```

- [ ] Cada ocorrência restante foi revisada e justificada.

As buscas podem ser feitas com ripgrep (`rg`) ou pela busca global e busca de
referências do Cursor/VS Code.

## SEO e indexação

- [ ] `NEXT_PUBLIC_SITE_URL` usa a origem correta em cada ambiente.
- [ ] Desenvolvimento e preview mantêm `SITE_INDEXABLE=false`.
- [ ] Produção usa `SITE_INDEXABLE=true` somente após aprovação e com HTTPS.
- [ ] Toda rota possui title e description específicos.
- [ ] Toda rota pública indexável declara sua própria canonical.
- [ ] Nenhuma rota herda indevidamente a canonical da homepage.
- [ ] Open Graph e Twitter Cards não contêm marca ou imagens demonstrativas.
- [ ] Sitemap lista somente URLs públicas, válidas e indexáveis.
- [ ] Robots bloqueia ambientes não públicos.
- [ ] Rotas removidas ou alteradas possuem redirects quando necessário.
- [ ] Slugs inexistentes e páginas desconhecidas retornam 404 apropriado.

## Acessibilidade e experiência

- [ ] Cada página possui um único `h1` e hierarquia coerente.
- [ ] Skip link alcança o conteúdo principal.
- [ ] Navegação completa funciona por teclado.
- [ ] Foco visível e contraste atendem WCAG 2.2 AA.
- [ ] Links possuem nomes acessíveis e destinos inequívocos.
- [ ] Reduced motion é respeitado.
- [ ] 320px, 375px, 768px e 1440px não apresentam overflow horizontal.
- [ ] Zoom de 200% não trunca conteúdo nem impede conversão.
- [ ] Conteúdo longo, dados ausentes e falhas de imagem têm comportamento aceitável.

## Segurança e privacidade

- [ ] `.env.local` e segredos não estão versionados.
- [ ] Nenhum segredo usa prefixo `NEXT_PUBLIC_`.
- [ ] Links externos sensíveis usam protocolo e destino aprovados.
- [ ] Integrações, embeds, analytics e cookies foram aprovados e documentados.
- [ ] Política de privacidade e consentimento foram avaliados quando aplicáveis.
- [ ] Conteúdo privado ou material de aprovação não está em assets públicos.

## Qualidade e entrega

- [ ] `pnpm install --frozen-lockfile` funciona no ambiente de CI.
- [ ] `pnpm lint` passa.
- [ ] `pnpm typecheck` passa.
- [ ] `pnpm format:check` passa.
- [ ] `pnpm build` passa com as variáveis de preview.
- [ ] Build indexável foi validada com domínio HTTPS definitivo.
- [ ] Links internos, externos e canais de conversão foram testados.
- [ ] Preview corresponde ao commit candidato e recebeu aprovação registrada.
- [ ] Domínio, DNS, HTTPS e variáveis de produção estão configurados.
- [ ] Commit publicado e versão anterior para rollback foram registrados.
- [ ] Smoke test pós-deploy foi concluído.
