import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/link";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";

export type CTAAction = {
  label: string;
  href: string;
  variant?: "default" | "secondary" | "outline" | "ghost";
  target?: "_blank" | "_self";
  rel?: string;
};

export type CTASectionProps = {
  id?: string;
  className?: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  titleAs?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  primaryAction?: CTAAction;
  secondaryAction?: CTAAction;
  layout?: "centered" | "split";
  surface?: "default" | "muted" | "surface" | "primary";
};

function CTAActions({
  primaryAction,
  secondaryAction,
  inverted,
  centered,
}: {
  primaryAction?: CTAAction;
  secondaryAction?: CTAAction;
  inverted: boolean;
  centered: boolean;
}) {
  const actions = [primaryAction, secondaryAction].filter(
    (action): action is CTAAction => Boolean(action),
  );

  if (actions.length === 0) return null;

  return (
    <div
      className={cn(
        "flex flex-col gap-3 sm:flex-row sm:flex-wrap",
        centered && "sm:justify-center",
      )}
    >
      {actions.map((action, index) => {
        const variant = action.variant ?? (index === 0 ? "default" : "outline");

        return (
          <Button
            key={`${action.href}-${action.label}`}
            asChild
            size="lg"
            variant={variant}
            className={cn(
              inverted &&
                variant === "default" &&
                "bg-primary-foreground text-primary hover:bg-primary-foreground/90 active:bg-primary-foreground/85 focus-visible:ring-primary-foreground",
              inverted &&
                variant !== "default" &&
                "border-primary-foreground/60 text-primary-foreground hover:bg-primary-foreground/12 hover:text-primary-foreground focus-visible:ring-primary-foreground bg-transparent",
            )}
          >
            <Link
              href={action.href}
              target={action.target}
              rel={
                action.rel ??
                (action.target === "_blank" ? "noreferrer" : undefined)
              }
              variant="unstyled"
            >
              {action.label}
            </Link>
          </Button>
        );
      })}
    </div>
  );
}

export function CTASection({
  id,
  className,
  eyebrow,
  title,
  description,
  titleAs = "h2",
  primaryAction,
  secondaryAction,
  layout = "centered",
  surface = "primary",
}: CTASectionProps) {
  const centered = layout === "centered";
  const inverted = surface === "primary";

  return (
    <Section id={id} spacing="lg" surface={surface} className={className}>
      <Container>
        <div
          className={cn(
            centered
              ? "mx-auto max-w-4xl text-center"
              : "grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16",
          )}
        >
          <div className="min-w-0">
            {eyebrow ? (
              <Text
                size="sm"
                tone={inverted ? "inherit" : "primary"}
                className="mb-3 font-semibold tracking-[0.16em] uppercase"
              >
                {eyebrow}
              </Text>
            ) : null}
            <Heading
              as={titleAs}
              size="h2"
              align={centered ? "center" : "left"}
            >
              {title}
            </Heading>
            {description ? (
              <Text
                size="lead"
                tone={inverted ? "inherit" : "muted"}
                measure
                className={cn("mt-5", centered && "mx-auto")}
              >
                {description}
              </Text>
            ) : null}
          </div>
          <div className={cn(centered && "mt-8")}>
            <CTAActions
              primaryAction={primaryAction}
              secondaryAction={secondaryAction}
              inverted={inverted}
              centered={centered}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
