import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

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

type ServiceVisual =
  | { icon: ReactNode; image?: never }
  | { icon?: never; image: SectionImage }
  | { icon?: never; image?: never };

export type ServiceItem = ServiceVisual & {
  id: string;
  title: string;
  description: string;
  link?: { label: string; href: string };
};

const gridVariants = cva("grid gap-5", {
  variants: {
    columns: {
      2: "md:grid-cols-2",
      3: "md:grid-cols-2 xl:grid-cols-3",
      4: "sm:grid-cols-2 xl:grid-cols-4",
    },
  },
  defaultVariants: { columns: 3 },
});

const cardVariants = cva("flex min-w-0 flex-col overflow-hidden rounded-2xl", {
  variants: {
    variant: {
      elevated: "bg-surface shadow-soft border",
      bordered: "bg-background border",
    },
  },
  defaultVariants: { variant: "elevated" },
});

export type ServicesGridProps = VariantProps<typeof gridVariants> &
  VariantProps<typeof cardVariants> & {
    id?: string;
    className?: string;
    header?: SectionHeadingContent;
    items: readonly ServiceItem[];
    itemTitleAs?: SectionTitleLevel;
  };

export function ServicesGrid({
  id,
  className,
  header,
  items,
  columns,
  variant,
  itemTitleAs = "h3",
}: ServicesGridProps) {
  return (
    <Section id={id} spacing="lg" className={className}>
      <Container>
        {header ? <SectionHeading {...header} className="mb-10" /> : null}
        <div className={gridVariants({ columns })}>
          {items.map((item) => (
            <article key={item.id} className={cardVariants({ variant })}>
              {item.image ? (
                <SectionMediaFrame
                  image={item.image}
                  className="aspect-[16/9] rounded-none border-0 border-b"
                />
              ) : null}
              <div className="flex flex-1 flex-col p-6">
                {item.icon ? (
                  <div className="bg-primary/10 text-primary mb-6 flex size-11 items-center justify-center rounded-xl [&_svg]:size-5">
                    {item.icon}
                  </div>
                ) : null}
                <Heading as={itemTitleAs} size="h4">
                  {item.title}
                </Heading>
                <Text tone="muted" className="mt-3 flex-1">
                  {item.description}
                </Text>
                {item.link ? (
                  <Link
                    href={item.link.href}
                    className="mt-6 w-fit font-medium"
                  >
                    {item.link.label}
                    <ArrowUpRight aria-hidden="true" className="ml-1 size-4" />
                  </Link>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
