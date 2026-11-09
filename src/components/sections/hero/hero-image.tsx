import type { HeroImage } from "@/components/sections/hero/hero.types";
import { SectionMediaFrame } from "@/components/sections/shared/section-media";

export function HeroImageFrame({
  image,
  className,
  imageClassName,
}: {
  image: HeroImage;
  className?: string;
  imageClassName?: string;
}) {
  const preload = image.preload ?? image.priority;

  return (
    <SectionMediaFrame
      image={{ ...image, preload }}
      className={className}
      imageClassName={imageClassName}
    />
  );
}
