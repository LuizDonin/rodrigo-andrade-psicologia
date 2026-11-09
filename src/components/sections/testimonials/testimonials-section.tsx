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
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  identification: string;
  avatar?: SectionImage;
};

export type TestimonialsSectionProps = {
  id?: string;
  className?: string;
  header?: SectionHeadingContent;
  items: readonly Testimonial[];
  layout?: "cards" | "editorial";
};

function TestimonialAuthor({
  item,
  inverted = false,
}: {
  item: Testimonial;
  inverted?: boolean;
}) {
  return (
    <figcaption className="mt-7 flex min-w-0 items-center gap-4">
      {item.avatar ? (
        <SectionMediaFrame
          image={item.avatar}
          className="size-12 shrink-0 rounded-full"
        />
      ) : null}
      <div className="min-w-0">
        <cite className="font-heading block font-semibold not-italic">
          {item.author}
        </cite>
        <Text
          size="sm"
          tone={inverted ? "inherit" : "muted"}
          className="[overflow-wrap:anywhere]"
        >
          {item.identification}
        </Text>
      </div>
    </figcaption>
  );
}

function TestimonialFigure({
  item,
  featured = false,
}: {
  item: Testimonial;
  featured?: boolean;
}) {
  return (
    <figure
      className={cn(
        "min-w-0 rounded-2xl border",
        featured
          ? "bg-primary text-primary-foreground shadow-raised p-8 sm:p-10"
          : "bg-surface shadow-soft p-6 sm:p-8",
      )}
    >
      <blockquote>
        <Text
          size={featured ? "lead" : "body"}
          tone={featured ? "inherit" : "default"}
          className={cn(
            featured && "font-heading text-heading-3 font-semibold",
          )}
        >
          “{item.quote}”
        </Text>
      </blockquote>
      <TestimonialAuthor item={item} inverted={featured} />
    </figure>
  );
}

export function TestimonialsSection({
  id,
  className,
  header,
  items,
  layout = "cards",
}: TestimonialsSectionProps) {
  const [featured, ...remaining] = items;

  return (
    <Section id={id} spacing="lg" className={className}>
      <Container>
        {header ? <SectionHeading {...header} className="mb-10" /> : null}
        {layout === "editorial" && featured ? (
          <div className="grid min-w-0 gap-5 lg:grid-cols-12">
            <div className="min-w-0 lg:col-span-7">
              <TestimonialFigure item={featured} featured />
            </div>
            {remaining.length > 0 ? (
              <div className="grid min-w-0 gap-5 lg:col-span-5">
                {remaining.map((item) => (
                  <TestimonialFigure key={item.id} item={item} />
                ))}
              </div>
            ) : null}
          </div>
        ) : (
          <div className="grid min-w-0 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {items.map((item) => (
              <TestimonialFigure key={item.id} item={item} />
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}
