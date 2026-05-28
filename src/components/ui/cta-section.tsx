import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { AnimatedButton } from "./animated-button";

interface CTASectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTASection({
  eyebrow = "Let's Build Together",
  title = "Engineering precision, delivered on time.",
  description = "Partner with SP Engineering for industrial solutions that perform under pressure. From concept to commissioning, we deliver excellence.",
  primaryLabel = "Start Your Project",
  primaryHref = "/contact",
  secondaryLabel = "+91 80976 04693",
  secondaryHref = "tel:+918097604693",
}: CTASectionProps) {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container mx-auto px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl glass-strong px-8 py-16 md:px-16 md:py-20 text-center"
        >
          <div className="absolute inset-0 bg-grid-animated opacity-20" />
          <div className="absolute inset-0 bg-gradient-radial" />
          <div className="absolute -inset-32 bg-aurora opacity-30 pointer-events-none" />

          <div className="relative max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
              {eyebrow}
            </span>
            <h2 className="mt-6 text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              {title}
            </h2>
            <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to={primaryHref}>
                <AnimatedButton size="lg" icon={<ArrowRight className="h-4 w-4" />}>
                  {primaryLabel}
                </AnimatedButton>
              </Link>
              <a href={secondaryHref}>
                <AnimatedButton variant="glass" size="lg" icon={<Phone className="h-4 w-4" />}>
                  {secondaryLabel}
                </AnimatedButton>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
