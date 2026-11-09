import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import {
  SectionHeading,
  type SectionHeadingContent,
  type SectionTitleLevel,
} from "@/components/sections/shared/section-heading";
import {
  SectionMediaFrame,
  type SectionImage,
} from "@/components/sections/shared/section-media";
import { Heading } from "@/components/ui/heading";
import { Link } from "@/components/ui/link";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";

export type Project = {
  id: string;
  title: string;
  category?: string;
  description?: string;
  href: string;
  image: SectionImage;
};

export type ProjectsGridProps = {
  id?: string;
  className?: string;
  header?: SectionHeadingContent;
  projects: readonly Project[];
  columns?: 2 | 3;
  variant?: "uniform" | "editorial";
  itemTitleAs?: SectionTitleLevel;
};

type ProjectCardProps = {
  project: Project;
  titleAs: SectionTitleLevel;
  variant: "uniform" | "editorial";
  index: number;
  columns: 2 | 3;
};

function ProjectCard({
  project,
  titleAs,
  variant,
  index,
  columns,
}: ProjectCardProps) {
  const isEditorialLead = index % columns === 0;

  return (
    <article
      className={cn(
        "group min-w-0",
        variant === "editorial" &&
          (columns === 2
            ? isEditorialLead
              ? "md:col-span-7"
              : "md:col-span-5"
            : isEditorialLead
              ? "md:col-span-7 xl:col-span-6"
              : "md:col-span-5 xl:col-span-3"),
      )}
    >
      <Link
        href={project.href}
        variant="unstyled"
        aria-label={`Ver projeto: ${project.title}`}
        className="block rounded-3xl"
      >
        <SectionMediaFrame
          image={project.image}
          className={cn(
            "group-focus-within:shadow-raised group-hover:shadow-raised transition-shadow [transition-duration:var(--duration-normal)] motion-reduce:transition-none",
            variant === "uniform"
              ? "aspect-[4/3]"
              : isEditorialLead
                ? "aspect-[4/3] md:aspect-[16/10]"
                : "aspect-[4/3] md:aspect-[4/5]",
          )}
        />
      </Link>
      <div className="pt-5">
        {project.category ? (
          <Text
            size="sm"
            tone="primary"
            className="mb-2 font-semibold tracking-[0.12em] uppercase"
          >
            {project.category}
          </Text>
        ) : null}
        <Heading as={titleAs} size="h4">
          <Link
            href={project.href}
            variant="unstyled"
            className="group/link gap-2"
          >
            {project.title}
            <ArrowUpRight
              aria-hidden="true"
              className="size-4 shrink-0 transition-transform [transition-duration:var(--duration-fast)] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 motion-reduce:transition-none"
            />
          </Link>
        </Heading>
        {project.description ? (
          <Text tone="muted" className="mt-3 max-w-2xl">
            {project.description}
          </Text>
        ) : null}
      </div>
    </article>
  );
}

export function ProjectsGrid({
  id,
  className,
  header,
  projects,
  columns = 3,
  variant = "uniform",
  itemTitleAs = "h3",
}: ProjectsGridProps) {
  return (
    <Section id={id} spacing="lg" className={className}>
      <Container>
        {header ? <SectionHeading {...header} className="mb-10" /> : null}
        <div
          className={cn(
            "grid min-w-0 gap-x-6 gap-y-12",
            variant === "uniform"
              ? columns === 2
                ? "md:grid-cols-2"
                : "md:grid-cols-2 xl:grid-cols-3"
              : "md:grid-cols-12",
          )}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              titleAs={itemTitleAs}
              variant={variant}
              index={index}
              columns={columns}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
