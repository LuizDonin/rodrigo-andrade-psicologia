import Image from "next/image";
import { cva, type VariantProps } from "class-variance-authority";

import { Container } from "@/components/layout/container";
import { HeroCopy } from "@/components/sections/hero/hero-content";
import type {
  HeroImage,
  HeroSectionProps,
} from "@/components/sections/hero/hero.types";
import { cn } from "@/lib/utils";

const fullBleedVariants = cva(
  "text-on-image relative isolate flex overflow-hidden",
  {
    variants: {
      height: {
        compact: "min-h-[32rem]",
        default: "min-h-[40rem] lg:min-h-[44rem]",
        tall: "min-h-[46rem] lg:min-h-[52rem]",
      },
      verticalAlign: {
        top: "items-start",
        center: "items-center",
        bottom: "items-end",
      },
    },
    defaultVariants: { height: "default", verticalAlign: "center" },
  },
);

const overlayVariants = cva("absolute inset-0 z-[-1]", {
  variants: {
    overlay: {
      soft: "bg-overlay-soft",
      medium: "bg-overlay",
      strong: "bg-overlay-strong",
    },
  },
  defaultVariants: { overlay: "medium" },
});

export type HeroFullBleedProps = HeroSectionProps &
  VariantProps<typeof fullBleedVariants> &
  VariantProps<typeof overlayVariants> & {
    image: HeroImage;
    align?: "left" | "center" | "right";
  };

export function HeroFullBleed({
  id,
  className,
  image,
  align = "left",
  height,
  verticalAlign,
  overlay,
  ...content
}: HeroFullBleedProps) {
  return (
    <section
      id={id}
      className={cn(fullBleedVariants({ height, verticalAlign }), className)}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={image.sizes}
        preload={image.preload ?? image.priority}
        className="z-[-2] object-cover"
        style={{ objectPosition: image.objectPosition }}
      />
      <div aria-hidden="true" className={overlayVariants({ overlay })} />
      <Container className="py-section-md">
        <div
          className={cn(
            "max-w-3xl",
            align === "center" && "mx-auto text-center",
            align === "right" && "ml-auto",
          )}
        >
          <HeroCopy {...content} align={align} inverted />
        </div>
      </Container>
    </section>
  );
}
