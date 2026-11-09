import type { AboutSplitProps } from "@/components/sections/about";
import type { ContactSectionProps } from "@/components/sections/contact";
import type { CTASectionProps } from "@/components/sections/cta";
import type { FeatureItem } from "@/components/sections/features";
import type { HeroSplitProps } from "@/components/sections/hero";
import type { ServiceItem } from "@/components/sections/services";
import type { StatItem } from "@/components/sections/stats";

export const institutionalContent = {
  hero: {
    eyebrow: "Engenharia consultiva fictícia",
    title: "Engenharia que transforma complexidade em decisões claras.",
    description:
      "Diagnóstico, planejamento e acompanhamento técnico para organizações que precisam avançar com segurança e responsabilidade.",
    titleAs: "h1",
    primaryAction: { label: "Conhecer serviços", href: "#servicos" },
    secondaryAction: {
      label: "Falar com a equipe",
      href: "#contato",
      variant: "outline",
    },
    image: {
      src: "/images/presets/institutional-engineering.svg",
      alt: "Diagrama técnico de uma estrutura modular em perspectiva",
      sizes: "(max-width: 1024px) 100vw, 50vw",
      preload: true,
      objectPosition: "center",
    },
    imagePosition: "right",
    ratio: "landscape",
  } satisfies HeroSplitProps,
  about: {
    id: "empresa",
    eyebrow: "A empresa",
    title: "Método para reduzir incerteza em projetos complexos.",
    titleAs: "h2",
    description:
      "Nesta demonstração fictícia, equipes multidisciplinares conectam análise, planejamento e acompanhamento para tornar cada decisão compreensível e rastreável.",
    image: {
      src: "/images/showcase/project-courtyard.svg",
      alt: "Estrutura arquitetônica estilizada integrada a um pátio",
      sizes: "(max-width: 1024px) 100vw, 50vw",
    },
    imagePosition: "left",
    ratio: "landscape",
    action: { label: "Ver capacidades", href: "#capacidades" },
  } satisfies AboutSplitProps,
  services: [
    {
      id: "diagnosis",
      title: "Diagnóstico técnico",
      description:
        "Levantamento estruturado de contexto, restrições e riscos para orientar as primeiras decisões.",
      link: { label: "Ver processo", href: "#capacidades" },
    },
    {
      id: "planning",
      title: "Planejamento integrado",
      description:
        "Escopo, marcos e responsabilidades organizados em uma visão compartilhada entre as partes.",
      link: { label: "Ver processo", href: "#capacidades" },
    },
    {
      id: "oversight",
      title: "Acompanhamento executivo",
      description:
        "Comunicação objetiva de avanços e desvios para apoiar respostas no momento certo.",
      link: { label: "Solicitar conversa", href: "#contato" },
    },
  ] satisfies readonly ServiceItem[],
  features: [
    {
      id: "traceability",
      title: "Rastreabilidade",
      description:
        "Premissas e decisões permanecem documentadas ao longo do trabalho.",
    },
    {
      id: "governance",
      title: "Governança clara",
      description:
        "Papéis, aprovações e pontos de controle são definidos desde o início.",
    },
    {
      id: "communication",
      title: "Comunicação objetiva",
      description:
        "Informação técnica é traduzida para apoiar decisões executivas.",
    },
  ] satisfies readonly FeatureItem[],
  stats: [
    { id: "areas", value: "3", label: "frentes demonstradas neste preset" },
    {
      id: "stages",
      value: "5",
      label: "etapas no fluxo institucional fictício",
    },
    {
      id: "visibility",
      value: "100%",
      label: "dos indicadores identificados como simulação",
    },
  ] satisfies readonly StatItem[],
  cta: {
    eyebrow: "Conversa inicial",
    title: "Um bom projeto começa com contexto compartilhado.",
    description:
      "Use esta composição para apresentar um caminho claro até o contato, sem promessas genéricas ou informação escondida.",
    titleAs: "h2",
    primaryAction: { label: "Ir para contato", href: "#contato" },
    secondaryAction: {
      label: "Rever serviços",
      href: "#servicos",
      variant: "outline",
    },
    layout: "split",
    surface: "primary",
  } satisfies CTASectionProps,
  contact: {
    id: "contato",
    eyebrow: "Contato demonstrativo",
    title: "Converse com a Vértice.",
    titleAs: "h2",
    description:
      "Substitua todos os canais e endereços abaixo pelos dados verificados da organização antes da publicação.",
    email: { label: "Novos projetos", value: "contato@example.com" },
    phone: { label: "Telefone", value: "+55 (11) 4000-1234" },
    address: "Avenida Exemplo, 100 · São Paulo · SP",
  } satisfies ContactSectionProps,
} as const;
