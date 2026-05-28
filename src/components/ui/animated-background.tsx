import { cn } from "@/lib/utils";

/** Decorative blueprint + aurora glow background — drop into any section as an absolute layer. */
export function AnimatedBackground({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      <div className="absolute inset-0 bg-aurora opacity-50" />
      <div className="absolute inset-0 bg-grid-animated opacity-[0.07]" />
      <div className="absolute inset-0 bg-blueprint bg-blueprint-fade opacity-30" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[40rem] w-[40rem] rounded-full bg-primary/20 blur-[140px]" />
    </div>
  );
}
