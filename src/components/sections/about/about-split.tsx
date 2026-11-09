import { cva, type VariantProps } from "class-variance-authority";

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
import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/link";
import { cn } from "@/lib/utils";

const aboutMediaVariants = cva("w-full min-w-0 shadow-raised", {
  variants: {
    ratio: {
      landscape: "aspect-[4/3]",
      square: "aspect-square",
      portrait: "aspect-[4/5]",
    },
  },
  defaultVariants: { ratio: "portrait" },
});

export type AboutSplitProps = SectionHeadingContent &
  VariantProps<typeof aboutMediaVariants> & {
    id?: string;
    className?: string;
    image: SectionImage;
    imagePosition?: "left" | "right";
    mobileContentOrder?: "image-first" | "text-first";
    verticalAlign?: "start" | "center";
    action?: {
      label: string;
      href: string;
      variant?: "default" | "secondary" | "outline";
    };
  };

export function AboutSplit({
  id,
  className,
  image,
  imagePosition = "left",
  mobileContentOrder = "image-first",
  verticalAlign = "center",
  ratio,
  action,
  ...heading
}: AboutSplitProps) {
  const media = (
    <SectionMediaFrame
      key="media"
      image={image}
      className={cn(
        aboutMediaVariants({ ratio }),
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
      {action ? (
        <Button
          asChild
          size="lg"
          variant={action.variant ?? "default"}
          className="mt-8"
        >
          <Link href={action.href} variant="unstyled">
            {action.label}
          </Link>
        </Button>
      ) : null}
    </div>
  );

  return (
    <Section id={id} spacing="lg" className={className}>
      <Container>
        <div
          className={cn(
            "grid min-w-0 gap-10 lg:grid-cols-2 lg:gap-16",
            verticalAlign === "center" ? "items-center" : "items-start",
          )}
        >
          {mobileContentOrder === "image-first"
            ? [media, content]
            : [content, media]}
        </div>
      </Container>
    </Section>
  );
}
