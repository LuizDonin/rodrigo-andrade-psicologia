# Website Starter Kit — Real Site Workflow

Este workflow transforma um briefing aprovado em um site publicável sem converter
o starter em page builder. Cada cliente possui conteúdo, decisões e aprovação
próprios; Design System, Section Library e critérios de qualidade são reutilizados.

```text
Briefing → Blueprint → Conteúdo → Implementação → Validação → Aprovação → Publicação
```

Não avance silenciosamente quando uma decisão pendente puder alterar escopo,
arquitetura, identidade, custo ou prazo. Registre a pendência, seu responsável e a
data necessária.

## 1. Briefing

### Entradas

- Conversa com responsáveis pela marca e pelo conteúdo.
- Objetivos de negócio, público, conversão e escopo inicial.
- Identidade, referências, materiais e restrições disponíveis.
- Canais de contato, requisitos técnicos e critérios de aprovação.

Use `docs/BRIEFING_TEMPLATE.md` para coletar somente informações relevantes.

### Entregável

Briefing preenchido, com campos obrigatórios resolvidos, materiais pendentes
identificados e uma pessoa responsável pela aprovação final.

### Critério de conclusão

- Objetivo e CTA principal não são ambíguos.
- Páginas e integrações do lançamento estão delimitadas.
- Materiais existentes e ausentes são conhecidos.
- Restrições legais, técnicas e de marca estão registradas.

### Aprovação

Responsável pela marca ou contratante com autoridade sobre escopo e posicionamento.

## 2. Blueprint

### Entradas

- Briefing aprovado.
- Componentes e presets disponíveis no starter.
- Inventário inicial de conteúdo e assets.
- Restrições de prazo, plataforma e publicação.

### Entregável

Documento com identidade, arquitetura da informação, rotas, composição por página,
modelo de conteúdo, SEO, estrutura futura de arquivos e critérios de aceite.

### Critério de conclusão

- Cada página possui papel e CTA compreensíveis.
- Cada seção existente tem uma função narrativa clara.
- Lacunas reais estão separadas de preferências visuais.
- Não há páginas, integrações ou abstrações sem justificativa.
- Decisões pendentes têm responsável.

### Aprovação

Responsável pela marca aprova estrutura e prioridades; responsável técnico confirma
viabilidade e aderência à arquitetura.

## 3. Conteúdo

### Entradas

- Blueprint aprovado.
- Textos, projetos, imagens, créditos e dados de contato.
- Regras de SEO e metadata por página.

### Entregável

Conteúdo final ou suficientemente estável, organizado conforme contratos TypeScript,
com origem, licença, créditos e status de aprovação conhecidos.

### Critério de conclusão

- Não existem textos genéricos usados como se fossem finais.
- Projetos possuem slug único, resumo, capa e conteúdo mínimo.
- Imagens têm permissão, finalidade, `alt` e enquadramento planejados.
- Contatos e destinos foram verificados.
- Titles e descriptions estão aprovados.

### Aprovação

Responsável pelo conteúdo e, quando aplicável, titulares de imagens, depoimentos e
créditos. Conteúdo pode ser implementado em lotes, mas o status de cada lote precisa
estar explícito.

## 4. Implementação

### Entradas

- Blueprint e lote de conteúdo aprovados.
- Identidade visual definida.
- Critérios técnicos do starter.

### Entregável

Páginas no App Router compostas explicitamente com a Section Library, conteúdo
tipado, configuração separada e metadata correspondente.

### Critério de conclusão

- Server Components são o padrão; Client Components existem apenas em folhas
  realmente interativas.
- Tokens semânticos expressam a identidade sem valores de cliente em componentes
  compartilhados.
- Rotas, links, headings, imagens e estados vazios funcionam.
- Nenhuma dependência, backend ou integração foi adicionada sem aprovação.
- Alterações estão divididas em incrementos revisáveis.

### Aprovação

Responsável técnico revisa arquitetura e qualidade. A pessoa responsável pela marca
pode revisar a direção visual em preview, sem substituir a validação formal.

## 5. Validação

### Entradas

- Implementação completa para o escopo acordado.
- Conteúdo e assets finais do ciclo.
- Ambiente de preview representativo.

### Entregável

Relatório objetivo de verificações automáticas e manuais, problemas corrigidos,
limitações conhecidas e riscos restantes.

### Critério de conclusão

- Lint, typecheck, format check e build passam.
- Fluxos críticos e links são exercitados por teclado.
- Foco, landmarks, headings, nomes acessíveis e contraste são revisados.
- 320px, 375px, 768px, 1440px e zoom de 200% não apresentam truncamento ou
  overflow horizontal.
- Reduced motion, imagens, LCP provável, metadata, sitemap e robots são conferidos.
- Rotas inexistentes e slugs inválidos retornam o comportamento esperado.
- Problemas bloqueantes foram corrigidos; limitações não bloqueantes estão
  documentadas.

### Aprovação

Responsável técnico confirma os gates. Questões de conteúdo ou marca retornam ao
respectivo responsável antes da próxima etapa.

## 6. Aprovação

### Entradas

- Preview validado.
- Relatório de validação.
- Checklist e critérios definidos no briefing.

### Entregável

Aceite registrado ou lista consolidada de ajustes, com prioridade e responsável.

### Critério de conclusão

- Uma única fonte reúne feedback, evitando instruções conflitantes.
- Ajustes solicitados pertencem ao escopo ou estão classificados como nova fase.
- Marca, conteúdo, navegação, responsividade e conversão foram aprovados.
- Domínio, contatos, créditos e requisitos legais estão confirmados.

### Aprovação

Responsável final indicado no briefing. Participantes consultivos enviam feedback,
mas não substituem essa autoridade.

Alterações após o aceite retornam à etapa apropriada e repetem a validação afetada.

## 7. Publicação

### Entradas

- Aceite registrado.
- Build validado e commit identificável.
- Acessos de domínio, hospedagem e variáveis de ambiente.
- Plano de reversão e responsável pela publicação.

Use o checklist de `docs/PRODUCTION_READINESS.md` para registrar domínio, variáveis,
commit candidato, smoke test e rollback.

### Entregável

Versão publicada no domínio correto, com smoke test concluído e registro da versão.

### Critério de conclusão

- Produção corresponde ao commit aprovado.
- HTTPS, canonical, sitemap, robots e compartilhamento social usam o domínio real.
- Variáveis e integrações funcionam sem expor segredos.
- Rotas e conversão principal passam por smoke test.
- Analytics e consentimento, quando aprovados, funcionam conforme a política.
- Responsáveis recebem links, acessos e instruções de manutenção necessárias.

### Aprovação

Responsável técnico autoriza a liberação; responsável final confirma o resultado no
domínio. Publicação não deve ser inferida a partir da aprovação de um preview.

## Reutilizando o processo

Para um novo cliente:

1. Duplique o conteúdo do briefing, não respostas de outro projeto.
2. Escolha o preset mais próximo da necessidade como referência, não como contrato
   visual rígido.
3. Produza um blueprint específico e remova seções sem função narrativa.
4. Reaproveite contratos existentes antes de criar componentes ou integrações.
5. Mantenha conteúdo e configuração do cliente fora da Section Library.
6. Defina responsáveis e gates de aprovação no início.
7. Registre decisões pendentes e retorne à etapa correspondente quando mudarem.
8. Preserve evidências de validação e o commit aprovado para publicação.

O workflow pode ser menor em projetos simples, mas suas decisões não devem ser
omitidas. Uma landing page ainda precisa de objetivo, conteúdo aprovado, validação,
aceite e publicação controlada.

## Validação do workflow

A Fase 6.3 validou este processo em um projeto derivado independente: quatro rotas
públicas, conteúdo tipado e identidade própria foram implementados; as
demonstrações foram removidas com verificação de imports; e a Section Library foi
preservada. O projeto derivado manteve histórico e repositório próprios, portanto
nenhum conteúdo específico do caso de validação foi incorporado ao Starter Kit.

## Controle de mudanças

- Mudança de texto ou asset retorna a Conteúdo e repete as verificações afetadas.
- Mudança de rota, objetivo ou conversão retorna ao Blueprint.
- Nova integração retorna ao Briefing para justificar necessidade, responsabilidade,
  privacidade, custo e operação.
- Nova variante compartilhada exige uma lacuna repetida e revisão da documentação
  do Design System ou da Section Library.
- Pedido fora do escopo é registrado para uma fase futura antes de ser implementado.
