import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  value: number;
  suffix?: string;
  label: string;
  index?: number;
  className?: string;
}

export function StatCard({ value, suffix = "+", label, index = 0, className }: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration: 1.8, ease: [0.2, 0.8, 0.2, 1] });
      return controls.stop;
    }
  }, [inView, value, count]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={cn(
        "relative rounded-2xl glass p-7 text-center overflow-hidden",
        className,
      )}
    >
      <div className="absolute inset-x-0 -top-1/2 h-full bg-gradient-radial opacity-60" />
      <div className="relative">
        <div className="flex items-baseline justify-center gap-1">
          <motion.span className="text-4xl md:text-5xl font-bold text-brand-gradient">
            {rounded}
          </motion.span>
          <span className="text-3xl font-bold text-primary">{suffix}</span>
        </div>
        <p className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">{label}</p>
      </div>
    </motion.div>
  );
}
