import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 font-semibold whitespace-nowrap rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none overflow-hidden group",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-brand text-primary-foreground glow-brand-sm hover:glow-brand hover:-translate-y-0.5",
        outline:
          "border border-primary/40 text-foreground hover:bg-primary/10 hover:border-primary",
        ghost:
          "text-foreground hover:bg-secondary/60",
        metallic:
          "bg-gradient-to-br from-metallic to-metallic/60 text-ink hover:-translate-y-0.5 hover:shadow-elevated",
        glass: "glass text-foreground hover:bg-card/80",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-13 px-8 text-base",
        xl: "h-14 px-10 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export interface AnimatedButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon?: ReactNode;
}

export const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, variant, size, children, icon, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      >
        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <span className="relative flex items-center gap-2">
          {children}
          {icon && <span className="transition-transform group-hover:translate-x-0.5">{icon}</span>}
        </span>
      </button>
    );
  },
);
AnimatedButton.displayName = "AnimatedButton";

export { buttonVariants };
