import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const containerVariants = cva("mx-auto w-full px-gutter", {
  variants: {
    size: {
      sm: "max-w-content-sm",
      md: "max-w-content-md",
      lg: "max-w-content-lg",
      xl: "max-w-content-xl",
      full: "max-w-none",
    },
  },
  defaultVariants: {
    size: "xl",
  },
});

type ContainerProps = React.ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof containerVariants>;

export function Container({ className, size, ...props }: ContainerProps) {
  return (
    <div
      data-slot="container"
      className={cn(containerVariants({ size }), className)}
      {...props}
    />
  );
}

export { containerVariants };
