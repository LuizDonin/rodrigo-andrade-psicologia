import Image, { type ImageProps } from "next/image";

import { cn } from "@/lib/utils";

export type SectionImage = {
  src: ImageProps["src"];
  alt: string;
  sizes: string;
  preload?: boolean;
  objectPosition?: string;
};

export function SectionMediaFrame({
  image,
  className,
  imageClassName,
}: {
  image: SectionImage;
  className?: string;
  imageClassName?: string;
}) {
  return (
    <div
      className={cn(
        "bg-muted relative min-w-0 overflow-hidden rounded-3xl border",
        className,
      )}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={image.sizes}
        preload={image.preload}
        className={cn("object-cover", imageClassName)}
        style={{ objectPosition: image.objectPosition }}
      />
    </div>
  );
}
