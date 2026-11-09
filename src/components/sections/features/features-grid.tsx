import type { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import {
  SectionHeading,
  type SectionHeadingContent,
  type SectionTitleLevel,
} from "@/components/sections/shared/section-heading";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

export type FeatureItem = {
  id: string;
  title: string;
  description: string;
  visual?: ReactNode;
};

const featureGridVariants = cva("grid gap-x-8 gap-y-10", {
  variants: {
    columns: {
      2: "md:grid-cols-2",
      3: "md:grid-cols-2 xl:grid-cols-3",
    },
  },
  defaultVariants: { columns: 3 },
});

export type FeaturesGridProps = VariantProps<typeof featureGridVariants> & {
  id?: string;
  className?: string;
  header?: SectionHeadingContent;
  items: readonly FeatureItem[];
  itemTitleAs?: SectionTitleLevel;
};

export function FeaturesGrid({
  id,
  className,
  header,
  items,
  columns,
  itemTitleAs = "h3",
}: FeaturesGridProps) {
  return (
    <Section id={id} spacing="lg" surface="muted" className={className}>
      <Container>
        {header ? <SectionHeading {...header} className="mb-12" /> : null}
        <div className={featureGridVariants({ columns })}>
          {items.map((item, index) => (
            <article key={item.id} className="min-w-0 border-t pt-6">
              <div className="mb-8 flex min-h-12 items-start justify-between gap-5">
                {item.visual ? (
                  <div className="text-primary [&_svg]:size-8">
                    {item.visual}
                  </div>
                ) : (
                  <span
                    aria-hidden="true"
                    className="text-primary font-mono text-sm font-semibold"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                )}
                <span
                  aria-hidden="true"
                  className="text-muted-foreground font-mono text-xs"
                >
                  FEATURE
                </span>
              </div>
              <Heading as={itemTitleAs} size="h4">
                {item.title}
              </Heading>
              <Text tone="muted" className="mt-3">
                {item.description}
              </Text>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
