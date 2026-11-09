import type { CTASectionProps } from "@/components/sections/cta";
import type { FAQItem } from "@/components/sections/faq";
import type { FeatureItem } from "@/components/sections/features";
import type { HeroCenteredProps } from "@/components/sections/hero";
import type { StatItem } from "@/components/sections/stats";
import type { Testimonial } from "@/components/sections/testimonials";

export const landingContent = {
  hero: {
    eyebrow: "Operação conectada em um só fluxo",
    title: "Transforme prioridades dispersas em decisões claras.",
    description:
      "Nexo Flow reúne prioridades, indicadores e conversas para que equipes em crescimento saibam o que fazer agora — e por quê.",
    titleAs: "h1",
    primaryAction: { label: "Descobrir como funciona", href: "#beneficios" },
    secondaryAction: {
      label: "Ver resultados simulados",
      href: "#resultados",
      variant: "outline",
    },
    image: {
      src: "/images/showcase/hero-dashboard.svg",
      alt: "Painel ilustrativo da plataforma fictícia Nexo Flow",
      sizes: "(max-width: 1024px) 100vw, 1024px",
      preload: true,
    },
  } satisfies HeroCenteredProps,
  features: [
    {
      id: "priorities",
      title: "Prioridades visíveis",
      description:
        "Objetivos, responsáveis e próximos passos aparecem no mesmo contexto, sem depender de planilhas paralelas.",
    },
    {
      id: "signals",
      title: "Sinais que fazem sentido",
      description:
        "Indicadores essenciais ganham contexto para apoiar conversas, em vez de apenas ocupar mais um painel.",
    },
    {
      id: "cadence",
      title: "Ritmo compartilhado",
      description:
        "Rituais de acompanhamento ficam mais leves quando cada pessoa sabe o que mudou e por que isso importa.",
    },
  ] satisfies readonly FeatureItem[],
  stats: [
    { id: "alignment", value: "1", label: "visão compartilhada do trabalho" },
    { id: "cycles", value: "4", label: "ciclos simulados para a demonstração" },
    { id: "noise", value: "-32%", label: "de ruído em um cenário ilustrativo" },
  ] satisfies readonly StatItem[],
  testimonials: [
    {
      id: "helena-demo",
      quote:
        "Em nosso cenário fictício, a equipe finalmente enxerga a mesma prioridade sem perder o contexto das decisões.",
      author: "Helena Prado",
      identification: "Persona fictícia · Operações",
    },
    {
      id: "caio-demo",
      quote:
        "A demonstração deixa claro como menos telas podem gerar conversas mais objetivas.",
      author: "Caio Nunes",
      identification: "Persona fictícia · Produto",
    },
  ] satisfies readonly Testimonial[],
  faq: [
    {
      id: "what-is-it",
      question: "A Nexo Flow é uma empresa real?",
      answer:
        "Não. Marca, produto, pessoas e indicadores foram criados exclusivamente para demonstrar este preset.",
    },
    {
      id: "adaptation",
      question: "Este layout pode receber outra identidade visual?",
      answer:
        "Sim. Conteúdo, navegação e tokens de marca ficam separados da biblioteca de componentes e podem ser substituídos para cada projeto.",
    },
    {
      id: "integrations",
      question: "A demonstração inclui cadastro ou integrações?",
      answer:
        "Não. Esta fase valida somente a composição visual. Formulários, analytics e integrações devem ser adicionados apenas quando houver requisitos reais.",
    },
  ] satisfies readonly FAQItem[],
  cta: {
    eyebrow: "Próximo passo",
    title: "Dê à sua equipe uma visão compartilhada do trabalho.",
    description:
      "Explore a demonstração e veja como uma narrativa direta conduz da proposta de valor ao próximo passo.",
    titleAs: "h2",
    primaryAction: { label: "Voltar ao início", href: "#preset-content" },
    secondaryAction: {
      label: "Rever dúvidas",
      href: "#duvidas",
      variant: "outline",
    },
    surface: "primary",
  } satisfies CTASectionProps,
} as const;
