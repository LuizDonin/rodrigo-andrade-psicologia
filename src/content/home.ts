export const homeContent = {
  hero: {
    eyebrow: "Fase 1 — Foundation",
    title: "Comece cada site com decisões sólidas já resolvidas.",
    description:
      "Um starter enxuto para landing pages, portfólios e sites institucionais, com arquitetura previsível, acessibilidade e performance desde o primeiro commit.",
    primaryAction: { label: "Explorar fundamentos", href: "/#fundamentos" },
    secondaryAction: { label: "Ver arquitetura", href: "/#arquitetura" },
  },
  foundation: [
    "Next.js App Router e Server Components",
    "TypeScript strict e qualidade automatizada",
    "Tailwind CSS v4 e tokens semânticos",
    "shadcn/ui com componentes source-owned",
  ],
  features: [
    {
      title: "Composição reutilizável",
      description:
        "Primitivos claros e conteúdo tipado facilitam criar identidades distintas sem duplicar a fundação.",
    },
    {
      title: "Qualidade por padrão",
      description:
        "Tipagem estrita, lint e build de produção tornam problemas visíveis antes da entrega.",
    },
    {
      title: "Evolução sob demanda",
      description:
        "Integrações opcionais entram apenas quando um requisito real justificar a complexidade.",
    },
  ],
  principles: [
    {
      title: "Server-first",
      description:
        "Páginas e seções estáticas permanecem no servidor, reduzindo JavaScript enviado ao navegador.",
    },
    {
      title: "Design por tokens",
      description:
        "Cores, raios e superfícies usam papéis semânticos que podem mudar sem reescrever componentes.",
    },
    {
      title: "Configuração central",
      description:
        "Marca, metadados, contato e navegação ficam fora dos componentes de apresentação.",
    },
    {
      title: "Acessibilidade nativa",
      description:
        "HTML semântico, foco visível e hierarquia coerente formam a linha de base da interface.",
    },
  ],
} as const;
