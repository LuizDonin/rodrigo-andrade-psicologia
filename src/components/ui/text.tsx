import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const textVariants = cva("", {
  variants: {
    size: {
      sm: "text-sm leading-6",
      body: "text-base leading-7",
      lead: "text-lead",
    },
    tone: {
      default: "text-foreground",
      muted: "text-muted-foreground",
      primary: "text-primary",
      inherit: "text-inherit",
    },
    measure: {
      true: "max-w-[var(--measure)]",
      false: "",
    },
  },
  defaultVariants: {
    size: "body",
    tone: "default",
    measure: false,
  },
});

type TextElement = "p" | "span" | "div";

type TextProps = React.ComponentPropsWithoutRef<"p"> &
  VariantProps<typeof textVariants> & {
    as?: TextElement;
  };

export function Text({
  as: Tag = "p",
  className,
  size,
  tone,
  measure,
  ...props
}: TextProps) {
  return (
    <Tag
      data-slot="text"
      className={cn(textVariants({ size, tone, measure }), className)}
      {...props}
    />
  );
}

export { textVariants };
