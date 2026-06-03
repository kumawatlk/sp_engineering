import { motion } from "motion/react";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
  href?: string;
  className?: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  index = 0,
  className,
}: ServiceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
      className={cn("group relative overflow-hidden rounded-2xl glass p-7 hover-lift", className)}
    >
      <div className="absolute inset-0 bg-gradient-radial opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative">
        <div className="inline-grid h-14 w-14 place-items-center rounded-xl bg-gradient-brand glow-brand-sm">
          <Icon className="h-6 w-6 text-primary-foreground" />
        </div>

        <h3 className="mt-6 text-xl font-semibold text-foreground">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>

        <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary opacity-80 group-hover:opacity-100 transition">
          Learn more
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </motion.article>
  );
}
