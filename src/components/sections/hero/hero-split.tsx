import { cva, type VariantProps } from "class-variance-authority";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { HeroCopy } from "@/components/sections/hero/hero-content";
import { HeroImageFrame } from "@/components/sections/hero/hero-image";
import type {
  HeroImage,
  HeroSectionProps,
} from "@/components/sections/hero/hero.types";
import { cn } from "@/lib/utils";

const mediaVariants = cva("w-full min-w-0", {
  variants: {
    ratio: {
      landscape: "aspect-[4/3]",
      square: "aspect-square",
      portrait: "aspect-[4/5]",
    },
    fit: {
      cover: "[&>img]:object-cover",
      contain: "[&>img]:object-contain [&>img]:p-4 sm:[&>img]:p-8",
    },
  },
  defaultVariants: { ratio: "landscape", fit: "cover" },
});

export type HeroSplitProps = HeroSectionProps &
  VariantProps<typeof mediaVariants> & {
    image: HeroImage;
    imagePosition?: "left" | "right";
  };

export function HeroSplit({
  id,
  className,
  image,
  imagePosition = "right",
  ratio,
  fit,
  ...content
}: HeroSplitProps) {
  return (
    <Section id={id} spacing="lg" className={className}>
      <Container>
        <div className="grid min-w-0 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div
            className={cn("min-w-0", imagePosition === "left" && "lg:order-2")}
          >
            <HeroCopy {...content} />
          </div>
          <HeroImageFrame
            image={image}
            className={cn(
              "shadow-raised",
              mediaVariants({ ratio, fit }),
              imagePosition === "left" && "lg:order-1",
            )}
          />
        </div>
      </Container>
    </Section>
  );
}
