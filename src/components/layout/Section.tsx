import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  containerClassName?: string;
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  centered?: boolean;
  as?: "section" | "div";
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, containerClassName, eyebrow, title, description, centered, children, ...props }, ref) => {
    return (
      <section
        ref={ref as never}
        className={cn("relative py-20 md:py-24 overflow-hidden bg-[#160E0E]", className)}
        {...props}
      >
        <div className={cn("container mx-auto px-5 lg:px-8 relative z-10", containerClassName)}>
          {(eyebrow || title || description) && (
            <div className={cn("mb-14 max-w-4xl", centered && "mx-auto text-center")}>
              
              {eyebrow && (
                <span className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
                  {eyebrow}
                </span>
              )}
              
              {title && (
                <h2 className="mt-5 text-4xl md:text-5xl font-black tracking-tight text-white uppercase">
                  {title}
                </h2>
              )}



              {description && (
                <p className="mt-4 text-base md:text-lg text-[#A27273] leading-relaxed font-light">
                  {description}
                </p>
              )}
              
            </div>
          )}
          
          <div className="w-full relative z-20">
            {children}
          </div>
        </div>
      </section>
    );
  },
);
Section.displayName = "Section";