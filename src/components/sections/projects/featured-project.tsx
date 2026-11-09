import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import {
  SectionHeading,
  type SectionHeadingContent,
} from "@/components/sections/shared/section-heading";
import {
  SectionMediaFrame,
  type SectionImage,
} from "@/components/sections/shared/section-media";
import { Link } from "@/components/ui/link";
import { cn } from "@/lib/utils";

export type FeaturedProjectProps = SectionHeadingContent & {
  id?: string;
  className?: string;
  image: SectionImage;
  href?: string;
  linkLabel?: string;
  layout?: "split" | "editorial";
  imagePosition?: "left" | "right";
  ratio?: "landscape" | "wide" | "portrait";
};

const ratioClasses = {
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/9]",
  portrait: "aspect-[4/5]",
} as const;

export function FeaturedProject({
  id,
  className,
  image,
  href,
  linkLabel = "Ver projeto",
  layout = "split",
  imagePosition = "left",
  ratio = "landscape",
  ...heading
}: FeaturedProjectProps) {
  if (layout === "editorial") {
    return (
      <Section id={id} spacing="lg" className={className}>
        <Container>
          <div className="grid min-w-0 gap-8 lg:grid-cols-12 lg:items-end">
            <SectionHeading {...heading} className="lg:col-span-8" />
            {href ? (
              <Link
                href={href}
                className="w-fit font-medium lg:col-span-4 lg:justify-self-end"
              >
                {linkLabel}
                <ArrowUpRight aria-hidden="true" className="ml-1 size-4" />
              </Link>
            ) : null}
          </div>
          <SectionMediaFrame
            image={image}
            className={cn("shadow-raised mt-10", ratioClasses[ratio])}
          />
        </Container>
      </Section>
    );
  }

  const media = (
    <SectionMediaFrame
      key="media"
      image={image}
      className={cn(
        "shadow-raised",
        ratioClasses[ratio],
        imagePosition === "right" ? "lg:order-2" : "lg:order-1",
      )}
    />
  );

  const content = (
    <div
      key="content"
      className={cn(
        "min-w-0",
        imagePosition === "right" ? "lg:order-1" : "lg:order-2",
      )}
    >
      <SectionHeading {...heading} />
      {href ? (
        <Link href={href} className="mt-7 w-fit font-medium">
          {linkLabel}
          <ArrowUpRight aria-hidden="true" className="ml-1 size-4" />
        </Link>
      ) : null}
    </div>
  );

  return (
    <Section id={id} spacing="lg" className={className}>
      <Container>
        <div className="grid min-w-0 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          {media}
          {content}
        </div>
      </Container>
    </Section>
  );
}
