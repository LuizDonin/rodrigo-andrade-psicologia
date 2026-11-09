import { Blocks, Compass, Gauge, Layers3, ShieldCheck } from "lucide-react";

import { Container } from "@/components/layout/container";
import { AboutSplit } from "@/components/sections/about";
import { FeaturesGrid } from "@/components/sections/features";
import { ServicesGrid } from "@/components/sections/services";
import { StatsSection } from "@/components/sections/stats";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

function CategoryIntro({
  id,
  eyebrow,
  title,
  description,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section id={id} className="bg-surface py-section-sm scroll-mt-28 border-y">
      <Container>
        <Text
          size="sm"
          tone="primary"
          className="mb-3 font-semibold tracking-[0.16em] uppercase"
        >
          {eyebrow}
        </Text>
        <Heading as="h2" size="h2">
          {title}
        </Heading>
        <Text size="lead" tone="muted" measure className="mt-4">
          {description}
        </Text>
      </Container>
    </section>
  );
}

const services = [
  {
    id: "strategy",
    title: "Estratégia digital",
    description:
      "Posicionamento, arquitetura de informação e prioridades que transformam objetivos amplos em uma direção clara.",
    icon: <Compass aria-hidden="true" />,
    link: { label: "Conhecer processo", href: "#statistics" },
  },
  {
    id: "design",
    title: "Design de interface",
    description:
      "Sistemas visuais flexíveis para experiências consistentes em diferentes páginas, conteúdos e dispositivos.",
    icon: <Layers3 aria-hidden="true" />,
  },
  {
    id: "delivery",
    title: "Entrega orientada à qualidade",
    description:
      "Implementação responsiva com atenção a desempenho, acessibilidade e manutenção depois do lançamento.",
    image: {
      src: "/images/showcase/hero-dashboard.svg",
      alt: "Interface abstrata representando uma entrega digital",
      sizes: "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw",
    },
    link: { label: "Ver padrões", href: "#services-features" },
  },
  {
    id: "support",
    title: "Evolução contínua",
    description:
      "Um serviço funciona mesmo sem ícone ou imagem, preservando hierarquia, alinhamento e espaço para textos maiores.",
  },
] as const;

const features = [
  {
    id: "composable",
    title: "Composição sem rigidez",
    description:
      "Primitives pequenos permitem ajustar a identidade do projeto sem duplicar estruturas ou esconder a semântica do documento.",
    visual: <Blocks aria-hidden="true" />,
  },
  {
    id: "accessible",
    title: "Acessibilidade desde o contrato",
    description:
      "Headings configuráveis, links nativos, foco visível e conteúdo independente de hover reduzem correções tardias.",
    visual: <ShieldCheck aria-hidden="true" />,
  },
  {
    id: "performance",
    title: "Base leve e previsível",
    description:
      "Server Components, imagens responsivas e ausência de interatividade desnecessária mantêm a experiência rápida.",
    visual: <Gauge aria-hidden="true" />,
  },
  {
    id: "adaptable",
    title: "Pronto para diferentes marcas",
    description:
      "Este item sem elemento visual demonstra que a composição editorial continua completa quando o conteúdo não precisa de ilustração.",
  },
] as const;

export function ContentSectionExamples() {
  return (
    <>
      <CategoryIntro
        id="content-sections"
        eyebrow="02 / Content Sections"
        title="Narrativa institucional com composições flexíveis."
        description="AboutSplit combina conteúdo editorial e mídia sem acoplar a direção da imagem ou o tamanho do texto a um projeto específico."
      />

      <AboutSplit
        eyebrow="Sobre o estúdio"
        title="Trabalho próximo, decisões claras e uma base preparada para evoluir."
        titleAs="h3"
        description="Unimos estratégia, design e implementação em um processo compacto. A imagem aparece primeiro no mobile e pode mudar de lado no desktop sem alterar a ordem de leitura do conteúdo."
        image={{
          src: "/images/showcase/hero-studio.svg",
          alt: "Composição arquitetônica abstrata representando um estúdio criativo",
          sizes: "(max-width: 1024px) 100vw, 50vw",
        }}
        imagePosition="left"
        ratio="portrait"
        action={{ label: "Conhecer a abordagem", href: "#services-features" }}
      />

      <AboutSplit
        className="bg-muted"
        eyebrow="Uma segunda direção"
        title="Conteúdo longo continua confortável em uma composição mais horizontal."
        titleAs="h3"
        description="Esta variação posiciona a imagem à direita e usa proporção landscape. O texto deliberadamente mais extenso verifica o alinhamento superior, a largura de leitura e a capacidade da seção de acomodar narrativas institucionais sem provocar overflow ou comprimir a mídia."
        image={{
          src: "/images/showcase/hero-landscape.svg",
          alt: "Paisagem costeira estilizada em tons de azul",
          sizes: "(max-width: 1024px) 100vw, 50vw",
          objectPosition: "center",
        }}
        imagePosition="right"
        mobileContentOrder="text-first"
        ratio="landscape"
        verticalAlign="start"
        action={{
          label: "Ver indicadores",
          href: "#statistics",
          variant: "outline",
        }}
      />

      <CategoryIntro
        id="services-features"
        eyebrow="03 / Services & Features"
        title="Serviços e diferenciais exercem papéis distintos."
        description="ServicesGrid organiza ofertas em cards acionáveis; FeaturesGrid apresenta benefícios em uma composição editorial mais leve."
      />

      <ServicesGrid
        header={{
          eyebrow: "Serviços",
          title: "Do direcionamento à evolução do produto.",
          titleAs: "h3",
          description:
            "Quatro itens demonstram cards com ícone, imagem, link e também conteúdo sem nenhum elemento visual.",
        }}
        items={services}
        columns={4}
        itemTitleAs="h4"
      />

      <FeaturesGrid
        header={{
          eyebrow: "Diferenciais",
          title: "Uma fundação que favorece boas decisões.",
          titleAs: "h3",
          description:
            "Conteúdos de comprimentos diferentes mantêm seu próprio ritmo sem forçar alturas artificiais ou esconder informações.",
        }}
        items={features}
        columns={2}
        itemTitleAs="h4"
      />

      <CategoryIntro
        id="statistics"
        eyebrow="04 / Statistics"
        title="Indicadores tratados como conteúdo editorial."
        description="Valores aceitam números, unidades ou expressões completas sem animação de contagem e sem pressupor dados numéricos puros."
      />

      <StatsSection
        header={{
          eyebrow: "Exemplo com três itens",
          title: "Escala compacta para uma história objetiva.",
          titleAs: "h3",
        }}
        items={[
          { id: "projects", value: "250+", label: "projetos ilustrativos" },
          { id: "quality", value: "98%", label: "índice editorial" },
          {
            id: "experience",
            value: "15 anos",
            label: "de experiência combinada",
          },
        ]}
        columns={3}
      />

      <StatsSection
        surface="primary"
        header={{
          eyebrow: "Exemplo com quatro itens",
          title: "Diferentes formatos convivem no mesmo ritmo visual.",
          titleAs: "h3",
          description:
            "Os dados abaixo são demonstrativos e validam unidades opcionais, textos curtos e quantidades diferentes.",
        }}
        items={[
          {
            id: "speed",
            value: "1.8",
            unit: "s",
            label: "tempo demonstrativo",
          },
          { id: "score", value: "AA", label: "meta de contraste" },
          { id: "pages", value: "12", label: "páginas editoriais" },
          {
            id: "detail",
            value: "Disponibilidade contínua",
            label: "valor editorial extenso sem truncamento",
          },
        ]}
        columns={4}
      />
    </>
  );
}
