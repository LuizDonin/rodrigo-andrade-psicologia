import { Container } from "@/components/layout/container";
import { ContactSection } from "@/components/sections/contact";
import { CTASection } from "@/components/sections/cta";
import { FAQSection, type FAQItem } from "@/components/sections/faq";
import {
  TestimonialsSection,
  type Testimonial,
} from "@/components/sections/testimonials";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

const testimonials: readonly Testimonial[] = [
  {
    id: "marina",
    quote:
      "O novo sistema trouxe clareza para apresentar projetos muito diferentes sem perder a identidade do estúdio. A navegação ficou direta e a equipe consegue manter o conteúdo com confiança.",
    author: "Marina Costa",
    identification: "Diretora de estratégia, Estúdio Norte",
    avatar: {
      src: "/images/showcase/project-interior.svg",
      alt: "Retrato abstrato de Marina Costa",
      sizes: "48px",
      objectPosition: "center",
    },
  },
  {
    id: "lucas",
    quote:
      "Conseguimos lançar uma presença institucional consistente sem transformar o projeto em uma estrutura difícil de evoluir.",
    author: "Lucas Andrade",
    identification: "Sócio e arquiteto",
  },
  {
    id: "ana",
    quote:
      "A atenção à acessibilidade e ao desempenho apareceu desde as primeiras decisões, não como uma correção no final do processo.",
    author: "Ana Ribeiro",
    identification: "Líder de produto, Horizonte",
    avatar: {
      src: "/images/showcase/project-courtyard.svg",
      alt: "Retrato abstrato de Ana Ribeiro",
      sizes: "48px",
    },
  },
] as const;

const faqItems: readonly FAQItem[] = [
  {
    id: "timeline",
    question: "Quanto tempo leva um projeto?",
    answer:
      "O prazo depende do volume de páginas, da maturidade do conteúdo e das integrações necessárias. Um escopo enxuto pode avançar em poucas semanas; projetos institucionais maiores são organizados em entregas progressivas.",
  },
  {
    id: "content",
    question: "Precisamos ter todo o conteúdo pronto antes de começar?",
    answer:
      "Não. Podemos iniciar com uma arquitetura de informação aprovada e trabalhar com conteúdo real por etapas. O importante é evitar que textos genéricos escondam decisões de hierarquia, tamanho e navegação que precisam ser validadas cedo.",
  },
  {
    id: "maintenance",
    question: "O site poderá evoluir depois do lançamento?",
    answer:
      "Sim. Os componentes recebem dados tipados e são organizados para composição. Novas páginas e conteúdos podem reutilizar a mesma linguagem visual sem exigir que toda a base seja reconstruída.",
  },
  {
    id: "accessibility",
    question: "Como acessibilidade entra no processo?",
    answer:
      "Hierarquia semântica, navegação por teclado, contraste, foco visível, textos alternativos e comportamento em zoom fazem parte dos contratos da biblioteca. A validação continua durante a composição das páginas, pois conteúdo e contexto também influenciam o resultado.",
  },
] as const;

function CategoryIntro() {
  return (
    <section
      id="conversion-sections"
      className="bg-surface py-section-sm scroll-mt-28 border-y"
    >
      <Container>
        <Text
          size="sm"
          tone="primary"
          className="mb-3 font-semibold tracking-[0.16em] uppercase"
        >
          06 / Conversion Sections
        </Text>
        <Heading as="h2" size="h2">
          Confiança, respostas e caminhos claros para contato.
        </Heading>
        <Text size="lead" tone="muted" measure className="mt-4">
          Chamadas para ação, prova social, dúvidas frequentes e canais de
          contato concluem narrativas sem adicionar estado ou integrações
          desnecessárias.
        </Text>
      </Container>
    </section>
  );
}

export function ConversionSectionExamples() {
  return (
    <>
      <CategoryIntro />

      <CTASection
        eyebrow="Próximo passo"
        title="Vamos transformar uma direção clara em uma experiência consistente."
        titleAs="h3"
        description="Uma chamada centralizada de alto contraste para encerrar landing pages e conduzir a uma conversa objetiva."
        primaryAction={{ label: "Iniciar conversa", href: "#contact-complete" }}
        secondaryAction={{
          label: "Rever projetos",
          href: "#portfolio-gallery",
          variant: "outline",
        }}
      />

      <CTASection
        eyebrow="Composição dividida"
        title="Uma ação pode conviver com contexto mais longo."
        titleAs="h3"
        description="No layout split, conteúdo e ações ocupam áreas independentes em telas amplas e retornam a uma sequência linear confortável no mobile."
        primaryAction={{ label: "Ver perguntas", href: "#faq-showcase" }}
        secondaryAction={{
          label: "Conhecer depoimentos",
          href: "#testimonials-editorial",
          variant: "ghost",
        }}
        layout="split"
        surface="muted"
      />

      <TestimonialsSection
        header={{
          eyebrow: "Depoimentos em cards",
          title: "Perspectivas diferentes, apresentadas com o mesmo cuidado.",
          titleAs: "h3",
          description:
            "Avatares são opcionais e textos de extensões distintas crescem naturalmente, sem carrossel ou truncamento.",
        }}
        items={testimonials}
      />

      <TestimonialsSection
        id="testimonials-editorial"
        className="bg-muted"
        header={{
          eyebrow: "Composição editorial",
          title: "Um relato principal pode conduzir a prova social.",
          titleAs: "h3",
        }}
        items={testimonials}
        layout="editorial"
      />

      <TestimonialsSection
        header={{
          eyebrow: "Depoimento único",
          title: "A composição continua completa com apenas uma voz.",
          titleAs: "h3",
        }}
        items={testimonials.slice(0, 1)}
        layout="editorial"
      />

      <FAQSection
        id="faq-showcase"
        surface="muted"
        header={{
          eyebrow: "Perguntas frequentes",
          title: "Respostas diretas antes do próximo passo.",
          titleAs: "h3",
          description:
            "Os itens usam details e summary nativos, funcionam por teclado e permanecem úteis mesmo sem JavaScript.",
        }}
        items={faqItems}
      />

      <ContactSection
        id="contact-complete"
        eyebrow="Contato completo"
        title="Conte o que você precisa construir."
        titleAs="h3"
        description="Compartilhe contexto, objetivos e momento do projeto. Os canais abaixo são demonstrativos e permanecem inteiramente configuráveis pelo consumidor."
        email={{ value: "contato@example.com" }}
        phone={{ value: "+55 (11) 4000-1234" }}
        whatsapp={{
          label: "Conversar pelo WhatsApp",
          href: "https://wa.me/551140001234",
        }}
        address={
          <>
            Avenida Exemplo, 100
            <br />
            São Paulo — SP
          </>
        }
        socialLinks={[
          { label: "Instagram", href: "https://instagram.com" },
          { label: "LinkedIn", href: "https://linkedin.com" },
        ]}
        action={{ label: "Ver início da página", href: "#overview" }}
      />

      <ContactSection
        className="bg-surface"
        eyebrow="Contato essencial"
        title="Nem todos os projetos precisam exibir todos os canais."
        titleAs="h3"
        description="Este exemplo omite telefone, WhatsApp, endereço, redes sociais e CTA adicional sem deixar espaços artificiais."
        email={{ label: "Novos projetos", value: "novos-projetos@example.com" }}
      />
    </>
  );
}
