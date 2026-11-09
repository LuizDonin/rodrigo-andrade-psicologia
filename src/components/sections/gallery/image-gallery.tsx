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

export type GalleryImage = SectionImage & {
  id: string;
  caption?: string;
};

export type ImageGalleryProps = {
  id?: string;
  className?: string;
  header?: SectionHeadingContent;
  images: readonly GalleryImage[];
  columns?: 2 | 3;
  variant?: "uniform" | "editorial";
  ratio?: "landscape" | "square" | "portrait";
};

const ratioClasses = {
  landscape: "aspect-[4/3]",
  square: "aspect-square",
  portrait: "aspect-[4/5]",
} as const;

export function ImageGallery({
  id,
  className,
  header,
  images,
  columns = 3,
  variant = "uniform",
  ratio = "landscape",
}: ImageGalleryProps) {
  return (
    <Section id={id} spacing="lg" className={className}>
      <Container>
        {header ? <SectionHeading {...header} className="mb-10" /> : null}
        <div
          className={cn(
            "grid min-w-0 gap-5",
            variant === "uniform"
              ? columns === 2
                ? "sm:grid-cols-2"
                : "sm:grid-cols-2 xl:grid-cols-3"
              : "md:grid-cols-12",
          )}
        >
          {images.map((image, index) => {
            const isEditorialLead = index % 2 === 0;

            return (
              <figure
                key={image.id}
                className={cn(
                  "min-w-0",
                  variant === "editorial" &&
                    (isEditorialLead ? "md:col-span-7" : "md:col-span-5"),
                )}
              >
                <SectionMediaFrame
                  image={image}
                  className={cn(
                    variant === "uniform"
                      ? ratioClasses[ratio]
                      : isEditorialLead
                        ? "aspect-[4/3] md:aspect-[16/10]"
                        : "aspect-[4/3] md:aspect-[4/5]",
                  )}
                />
                {image.caption ? (
                  <figcaption>
                    <Text size="sm" tone="muted" className="mt-3">
                      {image.caption}
                    </Text>
                  </figcaption>
                ) : null}
              </figure>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
