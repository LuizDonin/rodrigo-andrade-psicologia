import type { ReactNode } from "react";

import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";

export type SectionTitleLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type SectionHeadingContent = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  titleAs?: SectionTitleLevel;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  titleAs = "h2",
  align = "left",
  inverted = false,
  className,
}: SectionHeadingContent & {
  align?: "left" | "center";
  inverted?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <Text
          size="sm"
          tone={inverted ? "inherit" : "primary"}
          className="mb-3 font-semibold tracking-[0.16em] uppercase"
        >
          {eyebrow}
        </Text>
      ) : null}
      <Heading as={titleAs} size="h2" align={align}>
        {title}
      </Heading>
      {description ? (
        <Text
          size="lead"
          tone={inverted ? "inherit" : "muted"}
          measure
          className={cn("mt-5", align === "center" && "mx-auto")}
        >
          {description}
        </Text>
      ) : null}
    </div>
  );
}
