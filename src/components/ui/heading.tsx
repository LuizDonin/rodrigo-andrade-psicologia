import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const headingVariants = cva("font-heading font-semibold tracking-tight", {
  variants: {
    size: {
      display: "text-display",
      h1: "text-heading-1",
      h2: "text-heading-2",
      h3: "text-heading-3",
      h4: "text-xl leading-snug",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
    balance: {
      true: "text-balance",
      false: "",
    },
  },
  defaultVariants: {
    size: "h2",
    align: "left",
    balance: true,
  },
});

type HeadingElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type HeadingProps = React.ComponentPropsWithoutRef<"h2"> &
  VariantProps<typeof headingVariants> & {
    as?: HeadingElement;
  };

export function Heading({
  as: Tag = "h2",
  className,
  size,
  align,
  balance,
  ...props
}: HeadingProps) {
  return (
    <Tag
      data-slot="heading"
      className={cn(headingVariants({ size, align, balance }), className)}
      {...props}
    />
  );
}

export { headingVariants };
