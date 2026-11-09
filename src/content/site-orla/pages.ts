import type { ServiceItem } from "@/components/sections/services";

export const studioOrlaPages = {
  home: {
    title: "Arquitetura que aproxima luz, matéria e rotina.",
    description:
      "O Estúdio Orla desenvolve projetos fictícios de arquitetura e interiores com atenção ao cotidiano, à paisagem e ao tempo dos materiais.",
  },
  projects: {
    title: "Espaços construídos a partir de gestos essenciais.",
    description:
      "Uma seleção demonstrativa de residências, interiores e hospitalidade, criada para validar uma experiência editorial multipágina.",
  },
  about: {
    title: "Um estúdio atento ao que permanece.",
    description:
      "O Estúdio Orla é uma marca fictícia criada para demonstrar como estratégia, conteúdo e identidade podem ocupar uma arquitetura compartilhada sem perder singularidade.",
  },
  contact: {
    title: "Conte-nos sobre o lugar que você imagina.",
    description:
      "Os canais desta demonstração não recebem solicitações reais. Em um projeto publicado, este espaço deve explicar como iniciar uma conversa e quais informações ajudam no primeiro contato.",
  },
} as const;

export const studioOrlaServices = [
  {
    id: "architecture",
    title: "Arquitetura",
    description:
      "Casas, reformas e espaços de pequena escala desenvolvidos do estudo inicial ao detalhamento.",
  },
  {
    id: "interiors",
    title: "Interiores",
    description:
      "Ambientes, marcenaria e materialidade definidos em diálogo com a arquitetura e a rotina.",
  },
  {
    id: "follow-up",
    title: "Acompanhamento",
    description:
      "Suporte técnico demonstrativo para preservar decisões de projeto durante orçamento e execução.",
  },
] satisfies readonly ServiceItem[];
