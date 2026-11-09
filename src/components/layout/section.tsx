import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const sectionVariants = cva("relative", {
  variants: {
    spacing: {
      none: "py-0",
      sm: "py-section-sm",
      md: "py-section-md",
      lg: "py-section-lg",
    },
    surface: {
      default: "bg-background text-foreground",
      muted: "bg-muted text-foreground",
      surface: "bg-surface text-surface-foreground",
      primary: "bg-primary text-primary-foreground",
    },
  },
  defaultVariants: {
    spacing: "md",
    surface: "default",
  },
});

type SectionProps = React.ComponentPropsWithoutRef<"section"> &
  VariantProps<typeof sectionVariants>;

export function Section({
  className,
  spacing,
  surface,
  ...props
}: SectionProps) {
  return (
    <section
      data-slot="section"
      className={cn(sectionVariants({ spacing, surface }), className)}
      {...props}
    />
  );
}

export { sectionVariants };
