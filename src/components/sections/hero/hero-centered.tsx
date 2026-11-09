import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { HeroCopy } from "@/components/sections/hero/hero-content";
import { HeroImageFrame } from "@/components/sections/hero/hero-image";
import type {
  HeroImage,
  HeroSectionProps,
} from "@/components/sections/hero/hero.types";
import { cn } from "@/lib/utils";

type HeroCenteredMedia =
  | { image: HeroImage; visual?: never }
  | { image?: never; visual: ReactNode }
  | { image?: never; visual?: never };

export type HeroCenteredProps = HeroSectionProps & HeroCenteredMedia;

export function HeroCentered({
  id,
  className,
  image,
  visual,
  ...content
}: HeroCenteredProps) {
  return (
    <Section id={id} spacing="lg" className={className}>
      <Container size="lg">
        <div className="mx-auto max-w-4xl">
          <HeroCopy {...content} align="center" />
        </div>
        {image ? (
          <HeroImageFrame
            image={image}
            className="shadow-raised mt-12 aspect-[16/9] sm:mt-16"
          />
        ) : null}
        {visual ? <div className={cn("mt-12 sm:mt-16")}>{visual}</div> : null}
      </Container>
    </Section>
  );
}
