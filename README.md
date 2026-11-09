# Rodrigo Criveleto de Andrade — Psicologia Clínica

Landing page institucional para atendimento psicológico online com abordagem psicanalítica.

Site: <https://luizdonin.github.io/rodrigo-andrade-psicologia/>

## Desenvolvimento

```bash
pnpm install
pnpm dev
```

O projeto permanece não indexável por padrão. Mantenha `SITE_INDEXABLE=false` durante desenvolvimento e preview.

## Antes de publicar

- aprovar o uso e o enquadramento do retrato profissional em `public/images/rodrigo-criveleto.jpeg`;
- confirmar domínio e detalhes administrativos do atendimento;
- revisar conteúdo e publicidade conforme as normas vigentes do CFP e do CRP;
- validar o fluxo de contato, metadata social, favicon e responsividade;
- habilitar `SITE_INDEXABLE=true` apenas com domínio HTTPS definitivo e publicação aprovada.

## Qualidade

```bash
pnpm lint
pnpm typecheck
pnpm format:check
pnpm build
```
