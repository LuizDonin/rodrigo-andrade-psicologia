import { cva, type VariantProps } from "class-variance-authority";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import {
  SectionHeading,
  type SectionHeadingContent,
} from "@/components/sections/shared/section-heading";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";

export type StatItem = {
  id: string;
  value: string;
  unit?: string;
  label: string;
};

const statsGridVariants = cva(
  "grid grid-cols-1 gap-px overflow-hidden rounded-2xl border bg-border",
  {
    variants: {
      columns: {
        2: "sm:grid-cols-2",
        3: "sm:grid-cols-2 md:grid-cols-3",
        4: "sm:grid-cols-2 lg:grid-cols-4",
      },
    },
    defaultVariants: { columns: 4 },
  },
);

export type StatsSectionProps = VariantProps<typeof statsGridVariants> & {
  id?: string;
  className?: string;
  header?: SectionHeadingContent;
  items: readonly StatItem[];
  surface?: "default" | "muted" | "primary";
};

export function StatsSection({
  id,
  className,
  header,
  items,
  columns,
  surface = "default",
}: StatsSectionProps) {
  const inverted = surface === "primary";

  return (
    <Section id={id} spacing="lg" surface={surface} className={className}>
      <Container>
        {header ? (
          <SectionHeading {...header} inverted={inverted} className="mb-10" />
        ) : null}
        <dl className={statsGridVariants({ columns })}>
          {items.map((item) => (
            <div
              key={item.id}
              className={cn(
                "flex min-w-0 flex-col p-6 sm:p-8",
                inverted
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-foreground",
              )}
            >
              <dt className="order-2">
                <Text
                  as="span"
                  size="sm"
                  tone={inverted ? "inherit" : "muted"}
                  className="mt-3 block"
                >
                  {item.label}
                </Text>
              </dt>
              <dd className="font-heading text-heading-2 order-1 leading-none font-semibold tracking-tight [overflow-wrap:anywhere]">
                {item.value}
                {item.unit ? (
                  <span className="ml-1 text-[0.45em] tracking-normal">
                    {item.unit}
                  </span>
                ) : null}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </Section>
  );
}
