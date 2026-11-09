import { ArrowRight } from "lucide-react";

import type {
  HeroAction,
  HeroContent,
} from "@/components/sections/hero/hero.types";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Link } from "@/components/ui/link";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";

type HeroActionContext = "default" | "on-image";

const onImageActionClasses = {
  default:
    "border-on-image bg-on-image text-on-image-action-foreground hover:bg-on-image/90 active:bg-on-image/80",
  secondary:
    "border-on-image/30 bg-on-image/15 text-on-image hover:bg-on-image/25 hover:text-on-image",
  outline:
    "border-on-image/70 bg-overlay/40 text-on-image hover:border-on-image hover:bg-on-image hover:text-on-image-action-foreground",
  ghost: "text-on-image hover:bg-on-image/15 hover:text-on-image",
} satisfies Record<NonNullable<HeroAction["variant"]>, string>;

function Action({
  action,
  context,
}: {
  action: HeroAction;
  context: HeroActionContext;
}) {
  const isPrimary = !action.variant || action.variant === "default";
  const variant = action.variant ?? "default";

  return (
    <Button
      asChild
      size="lg"
      variant={variant}
      className={cn(
        context === "on-image" &&
          "focus-visible:ring-on-image focus-visible:ring-offset-overlay-strong",
        context === "on-image" && onImageActionClasses[variant],
      )}
    >
      <Link
        href={action.href}
        target={action.target}
        rel={
          action.rel ?? (action.target === "_blank" ? "noreferrer" : undefined)
        }
        variant="unstyled"
      >
        {action.label}
        {isPrimary ? <ArrowRight aria-hidden="true" /> : null}
      </Link>
    </Button>
  );
}

export function HeroActions({
  primaryAction,
  secondaryAction,
  align = "left",
  context = "default",
}: Pick<HeroContent, "primaryAction" | "secondaryAction"> & {
  align?: "left" | "center" | "right";
  context?: HeroActionContext;
}) {
  if (!primaryAction && !secondaryAction) return null;

  return (
    <div
      className={cn(
        "mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap",
        align === "center" && "sm:justify-center",
        align === "right" && "sm:justify-end",
      )}
    >
      {primaryAction ? (
        <Action action={primaryAction} context={context} />
      ) : null}
      {secondaryAction ? (
        <Action action={secondaryAction} context={context} />
      ) : null}
    </div>
  );
}

export function HeroCopy({
  eyebrow,
  title,
  description,
  titleAs = "h1",
  primaryAction,
  secondaryAction,
  align = "left",
  inverted = false,
}: HeroContent & {
  align?: "left" | "center" | "right";
  inverted?: boolean;
}) {
  return (
    <div className={cn(align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <Text
          size="sm"
          tone={inverted ? "inherit" : "primary"}
          className="mb-4 font-semibold tracking-[0.16em] uppercase"
        >
          {eyebrow}
        </Text>
      ) : null}
      <Heading as={titleAs} size="display" align={align}>
        {title}
      </Heading>
      {description ? (
        <Text
          size="lead"
          tone={inverted ? "inherit" : "muted"}
          measure
          className={cn(
            "mt-6",
            align === "center" && "mx-auto",
            align === "right" && "ml-auto",
          )}
        >
          {description}
        </Text>
      ) : null}
      <HeroActions
        primaryAction={primaryAction}
        secondaryAction={secondaryAction}
        align={align}
        context={inverted ? "on-image" : "default"}
      />
    </div>
  );
}
