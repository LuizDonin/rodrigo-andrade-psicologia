import NextLink from "next/link";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const linkVariants = cva(
  "focus-visible:ring-ring inline-flex rounded-sm underline-offset-4 transition-colors [transition-duration:var(--duration-fast)] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none motion-reduce:transition-none",
  {
    variants: {
      variant: {
        default: "text-link hover:text-link-hover underline",
        subtle: "text-muted-foreground hover:text-foreground no-underline",
        unstyled: "text-inherit no-underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

type LinkProps = React.ComponentProps<typeof NextLink> &
  VariantProps<typeof linkVariants>;

export function Link({ className, variant, ...props }: LinkProps) {
  return (
    <NextLink
      data-slot="link"
      className={cn(linkVariants({ variant }), className)}
      {...props}
    />
  );
}

export { linkVariants };
