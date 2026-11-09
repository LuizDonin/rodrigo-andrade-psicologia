import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { AboutSplit } from "@/components/sections/about";
import { CTASection } from "@/components/sections/cta";
import { ImageGallery } from "@/components/sections/gallery";
import { HeroSplit } from "@/components/sections/hero";
import { FeaturedProject } from "@/components/sections/projects";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { createStudioOrlaMetadata, studioOrlaPath } from "@/config/studio-orla";
import {
  getNextStudioProject,
  getStudioProject,
  studioProjects,
} from "@/content/site-orla/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return studioProjects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getStudioProject(slug);

  if (!project) notFound();

  return createStudioOrlaMetadata(
    project.seo.title,
    project.seo.description,
    project.seo.socialImage,
  );
}

export default async function StudioOrlaProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = getStudioProject(slug);

  if (!project) notFound();

  const nextProject = getNextStudioProject(slug);

  return (
    <>
      <HeroSplit
        eyebrow={`${project.project.category} · ${project.location} · ${project.year}`}
        title={project.project.title}
        description={project.project.description}
        titleAs="h1"
        primaryAction={{
          label: "Ver imagens",
          href: "#galeria",
        }}
        secondaryAction={{
          label: "Todos os projetos",
          href: `${studioOrlaPath}/projetos`,
          variant: "outline",
        }}
        image={{
          ...project.project.image,
          sizes: "(max-width: 1024px) 100vw, 50vw",
          preload: true,
        }}
        ratio="landscape"
      />

      <AboutSplit
        eyebrow="Contexto"
        title="Uma resposta construída a partir do cotidiano."
        description={project.narrative.introduction}
        titleAs="h2"
        image={{
          ...project.gallery[0],
          sizes: "(max-width: 1024px) 100vw, 50vw",
        }}
        imagePosition="left"
        mobileContentOrder="text-first"
        ratio="landscape"
      />

      <Section spacing="md" surface="muted">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Text
                size="sm"
                tone="primary"
                className="mb-3 font-semibold tracking-[0.16em] uppercase"
              >
                Conceito
              </Text>
              <Heading as="h2" size="h3">
                Matéria e proporção como instrumentos de orientação.
              </Heading>
              {project.narrative.concept ? (
                <Text size="lead" tone="muted" measure className="mt-5">
                  {project.narrative.concept}
                </Text>
              ) : null}
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
              <div>
                <Heading as="h3" size="h4">
                  Escopo demonstrativo
                </Heading>
                <ul className="mt-4 space-y-2">
                  {project.scope.map((item) => (
                    <li key={item}>
                      <Text tone="muted">{item}</Text>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Heading as="h3" size="h4">
                  Créditos
                </Heading>
                <dl className="mt-4 space-y-3">
                  {project.credits.map((credit) => (
                    <div key={`${credit.role}-${credit.name}`}>
                      <dt>
                        <Text size="sm" tone="muted">
                          {credit.role}
                        </Text>
                      </dt>
                      <dd>
                        <Text>{credit.name}</Text>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <ImageGallery
        id="galeria"
        header={{
          eyebrow: "Sequência visual",
          title: "Luz, percurso e encontros de materiais.",
          titleAs: "h2",
        }}
        images={project.gallery}
        variant="editorial"
      />

      {nextProject ? (
        <FeaturedProject
          eyebrow="Próximo projeto"
          title={nextProject.project.title}
          description={nextProject.project.description}
          titleAs="h2"
          image={nextProject.project.image}
          href={nextProject.project.href}
          linkLabel="Abrir próximo projeto"
          layout="split"
          imagePosition="right"
          ratio="landscape"
          className="bg-surface border-y"
        />
      ) : null}

      <CTASection
        eyebrow="Novos projetos"
        title="Vamos conversar sobre contexto, lugar e possibilidades."
        titleAs="h2"
        primaryAction={{
          label: "Ver contato",
          href: `${studioOrlaPath}/contato`,
        }}
        secondaryAction={{
          label: "Voltar ao portfólio",
          href: `${studioOrlaPath}/projetos`,
          variant: "outline",
        }}
        surface="primary"
      />
    </>
  );
}
