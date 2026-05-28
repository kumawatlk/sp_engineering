import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Wind, Snowflake, Flame, Zap, ArrowRight, CheckCircle2, Gauge,
  ShieldCheck, Wrench, Settings, Activity, ThermometerSnowflake,
  Droplets, Siren, Plug, CircuitBoard, Building2, Factory, Hotel,
  Hospital, Cpu, ChevronRight, Sparkles, type LucideIcon,
} from "lucide-react";
import { Section } from "@/components/layout/Section";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { AnimatedButton } from "@/components/ui/animated-button";
import { CTASection } from "@/components/ui/cta-section";
import hvacImg from "@/assets/service-hvac.jpg";
import cryoImg from "@/assets/service-cryogenic.jpg";
import fireImg from "@/assets/service-firefighting.jpg";
import elecImg from "@/assets/service-electrical.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — HVAC, Cryogenic, Fire Fighting & Electrical | SP Engineering" },
      {
        name: "description",
        content:
          "Industrial engineering services by SP Engineering — HVAC systems, cryogenic services, fire fighting systems, and electrical installations delivered with precision and safety.",
      },
      { property: "og:title", content: "Engineering Services — SP Engineering" },
      {
        property: "og:description",
        content:
          "Premium HVAC, cryogenic, fire fighting and electrical engineering solutions for industrial and commercial projects.",
      },
    ],
  }),
  component: ServicesPage,
});

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

type ServiceBlock = {
  id: string;
  eyebrow: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  icon: LucideIcon;
  features: { icon: LucideIcon; title: string; desc: string }[];
  applications: { icon: LucideIcon; label: string }[];
  benefits: string[];
  process: { step: string; title: string; desc: string }[];
};

const services: ServiceBlock[] = [
  {
    id: "hvac",
    eyebrow: "01 — Climate Engineering",
    title: "HVAC Systems",
    tagline: "Precision climate control for mission-critical environments.",
    description:
      "End-to-end heating, ventilation, and air-conditioning solutions engineered for energy efficiency, indoor air quality, and uninterrupted comfort across industrial, commercial, and healthcare facilities.",
    image: hvacImg,
    icon: Wind,
    features: [
      { icon: Gauge, title: "Air Handling Units", desc: "Custom AHU design, ducting, and balancing tuned to your load profile." },
      { icon: ThermometerSnowflake, title: "Chiller Plants", desc: "Water and air-cooled chiller installation, piping, and commissioning." },
      { icon: Activity, title: "BMS Integration", desc: "Smart controls and monitoring for centralized HVAC management." },
      { icon: Wrench, title: "Retrofit & AMC", desc: "Performance upgrades and annual maintenance contracts." },
    ],
    applications: [
      { icon: Hospital, label: "Hospitals & Cleanrooms" },
      { icon: Building2, label: "Commercial Towers" },
      { icon: Factory, label: "Manufacturing Plants" },
      { icon: Hotel, label: "Hospitality" },
    ],
    benefits: [
      "Up to 30% energy savings with optimized design",
      "ASHRAE-compliant indoor air quality",
      "Low-noise, vibration-free operation",
      "24/7 monitoring and rapid response",
    ],
    process: [
      { step: "01", title: "Load Survey", desc: "Site audit and thermal load calculations." },
      { step: "02", title: "Engineering", desc: "Equipment sizing, layout & shop drawings." },
      { step: "03", title: "Installation", desc: "Ducting, piping, and equipment erection." },
      { step: "04", title: "Commissioning", desc: "Testing, balancing & handover." },
    ],
  },
  {
    id: "cryogenic",
    eyebrow: "02 — Ultra-Low Temperature",
    title: "Cryogenic Services",
    tagline: "Specialized cryogenic engineering for industrial gas systems.",
    description:
      "Design, installation, and maintenance of cryogenic infrastructure for liquid nitrogen, oxygen, argon, and LNG — engineered for thermal efficiency, safety, and uptime in demanding industrial environments.",
    image: cryoImg,
    icon: Snowflake,
    features: [
      { icon: Droplets, title: "Storage Tanks", desc: "Vacuum-insulated tank installation and validation." },
      { icon: Settings, title: "Vaporizers & Piping", desc: "Ambient and electric vaporizers with cryo-piping networks." },
      { icon: ShieldCheck, title: "Safety Systems", desc: "PSV, oxygen monitoring, and emergency shut-off integration." },
      { icon: Wrench, title: "Maintenance", desc: "Leak testing, recertification, and overhaul services." },
    ],
    applications: [
      { icon: Hospital, label: "Medical Gas Plants" },
      { icon: Factory, label: "Steel & Metallurgy" },
      { icon: Cpu, label: "Electronics & Semiconductor" },
      { icon: Building2, label: "Pharma & Biotech" },
    ],
    benefits: [
      "Minimized boil-off losses",
      "Compliance with PESO & ASME standards",
      "Safe handling of hazardous gases",
      "Turnkey project execution",
    ],
    process: [
      { step: "01", title: "Feasibility", desc: "Site evaluation and demand profiling." },
      { step: "02", title: "Design", desc: "PFD, P&ID, and 3D layout engineering." },
      { step: "03", title: "Fabrication", desc: "On-site assembly and pipeline routing." },
      { step: "04", title: "Validation", desc: "Pressure testing and statutory clearance." },
    ],
  },
  {
    id: "fire-fighting",
    eyebrow: "03 — Life Safety",
    title: "Fire Fighting Systems",
    tagline: "Code-compliant fire protection that activates when it matters.",
    description:
      "Comprehensive fire detection and suppression systems engineered to NBC, NFPA, and TAC standards — protecting people, assets, and continuity across high-risk industrial and commercial facilities.",
    image: fireImg,
    icon: Flame,
    features: [
      { icon: Droplets, title: "Hydrant & Sprinkler", desc: "Wet, dry, and pre-action sprinkler networks." },
      { icon: Siren, title: "Detection & Alarm", desc: "Addressable fire alarm, smoke & heat detection." },
      { icon: ShieldCheck, title: "Gas Suppression", desc: "FM-200, Novec 1230, and CO₂ systems for critical zones." },
      { icon: Wrench, title: "Pump Rooms", desc: "Jockey, electric & diesel pump installation per NFPA 20." },
    ],
    applications: [
      { icon: Factory, label: "Warehouses & Logistics" },
      { icon: Building2, label: "High-Rise Buildings" },
      { icon: Cpu, label: "Data Centers" },
      { icon: Hotel, label: "Malls & Hospitality" },
    ],
    benefits: [
      "Fully NOC-ready installations",
      "Rapid detection and response",
      "Low false-alarm rates",
      "Lifetime maintenance support",
    ],
    process: [
      { step: "01", title: "Risk Audit", desc: "Hazard classification & code review." },
      { step: "02", title: "System Design", desc: "Hydraulic calculations & layout." },
      { step: "03", title: "Installation", desc: "Piping, panels, and device deployment." },
      { step: "04", title: "Certification", desc: "Testing & fire department approvals." },
    ],
  },
  {
    id: "electrical",
    eyebrow: "04 — Power & Controls",
    title: "Electrical Services",
    tagline: "Reliable power infrastructure from LT to HT.",
    description:
      "Complete electrical engineering — from substations and switchgear to cabling, earthing, and automation — delivered with rigorous safety, IS compliance, and zero-downtime methodology.",
    image: elecImg,
    icon: Zap,
    features: [
      { icon: Plug, title: "LT & HT Panels", desc: "Custom switchboards, PCC, MCC, and APFC panels." },
      { icon: CircuitBoard, title: "Cabling & Trays", desc: "Power, control, and instrumentation cabling." },
      { icon: ShieldCheck, title: "Earthing & LPS", desc: "Maintenance-free earthing and lightning protection." },
      { icon: Activity, title: "Automation", desc: "PLC, SCADA, and IoT-based monitoring integration." },
    ],
    applications: [
      { icon: Factory, label: "Industrial Substations" },
      { icon: Building2, label: "Commercial Complexes" },
      { icon: Hospital, label: "Healthcare Facilities" },
      { icon: Cpu, label: "Data & Telecom" },
    ],
    benefits: [
      "Tested per IS/IEC standards",
      "Energy-efficient designs",
      "Safe, documented installations",
      "On-call breakdown support",
    ],
    process: [
      { step: "01", title: "Load Study", desc: "Power demand and single-line diagram." },
      { step: "02", title: "Engineering", desc: "Panel design, cable sizing, and BoQ." },
      { step: "03", title: "Execution", desc: "Erection, termination & testing." },
      { step: "04", title: "Energization", desc: "Commissioning and statutory approval." },
    ],
  },
];

function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesNav />
      {services.map((s, i) => (
        <ServiceBlockSection key={s.id} service={s} reversed={i % 2 === 1} />
      ))}
      <CTASection
        eyebrow="Build with SP Engineering"
        title="One partner. Every discipline. Delivered."
        description="HVAC, cryogenic, fire safety, electrical — under one accountable team. Let's engineer your next project together."
      />
    </>
  );
}

/* ============================== HERO ============================== */
function ServicesHero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      <AnimatedBackground />
      <div className="absolute inset-0 bg-blueprint bg-blueprint-fade opacity-40 pointer-events-none" />
      <div className="container relative mx-auto px-5 lg:px-8">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="max-w-4xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            Our Services
          </span>
          <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
            Engineering excellence,{" "}
            <span className="text-brand-gradient">across every discipline.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            From climate-critical HVAC to high-stakes cryogenic and fire safety systems —
            SP Engineering delivers integrated industrial solutions with uncompromising quality
            and on-time execution.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#hvac">
              <AnimatedButton size="lg" icon={<ArrowRight className="h-4 w-4" />}>
                Explore Services
              </AnimatedButton>
            </a>
            <a href="/contact">
              <AnimatedButton variant="glass" size="lg">Request a Quote</AnimatedButton>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================== QUICK NAV ============================== */
function ServicesNav() {
  return (
    <Section className="py-10 md:py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.a
              key={s.id}
              href={`#${s.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl glass p-5 hover-lift"
            >
              <div className="absolute inset-0 bg-gradient-radial opacity-0 group-hover:opacity-100 transition" />
              <div className="relative flex items-center gap-4">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-brand glow-brand-sm">
                  <Icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-primary/80">
                    0{i + 1}
                  </div>
                  <div className="font-semibold">{s.title}</div>
                </div>
                <ChevronRight className="ml-auto h-4 w-4 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-primary" />
              </div>
            </motion.a>
          );
        })}
      </div>
    </Section>
  );
}

/* ============================== BLOCK ============================== */
function ServiceBlockSection({ service, reversed }: { service: ServiceBlock; reversed: boolean }) {
  const Icon = service.icon;
  return (
    <section id={service.id} className="relative py-20 md:py-28 scroll-mt-24">
      <div className="absolute inset-0 bg-blueprint bg-blueprint-fade opacity-20 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container mx-auto px-5 lg:px-8">
        {/* Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className={`grid lg:grid-cols-2 gap-10 lg:gap-14 items-center ${
            reversed ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div className="relative">
            <div className="absolute -inset-6 bg-primary/20 blur-3xl opacity-60 rounded-3xl" />
            <div className="relative overflow-hidden rounded-3xl glass-strong">
              <img
                src={service.image}
                alt={service.title}
                width={1600}
                height={900}
                loading="lazy"
                className="w-full h-[340px] md:h-[460px] object-cover transition-transform duration-[1.4s] hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
              <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
                Live Project Discipline
              </div>
            </div>
          </div>

          <div>
            <span className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-primary">
              <Icon className="h-3.5 w-3.5" />
              {service.eyebrow}
            </span>
            <h2 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight">{service.title}</h2>
            <p className="mt-4 text-lg text-foreground/80">{service.tagline}</p>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              {service.description}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="/contact">
                <AnimatedButton icon={<ArrowRight className="h-4 w-4" />}>Get a Proposal</AnimatedButton>
              </a>
              <a href="/projects">
                <AnimatedButton variant="outline">View Projects</AnimatedButton>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Features */}
        <div className="mt-16">
          <SubHeading eyebrow="Capabilities" title="What we deliver" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.features.map((f, i) => {
              const FIcon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="group relative overflow-hidden rounded-2xl glass p-6 hover-lift"
                >
                  <div className="absolute inset-0 bg-gradient-radial opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand glow-brand-sm">
                      <FIcon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <h4 className="mt-5 text-lg font-semibold">{f.title}</h4>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Applications + Benefits */}
        <div className="mt-16 grid lg:grid-cols-5 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 rounded-3xl glass p-8"
          >
            <SubHeading eyebrow="Applications" title="Where we deploy" compact />
            <div className="grid grid-cols-2 gap-4">
              {service.applications.map((a) => {
                const AIcon = a.icon;
                return (
                  <div
                    key={a.label}
                    className="group flex items-center gap-3 rounded-xl border border-white/5 bg-card/40 p-4 transition hover:border-primary/40 hover:bg-card/70"
                  >
                    <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/15 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                      <AIcon className="h-5 w-5" />
                    </div>
                    <span className="font-medium">{a.label}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 rounded-3xl glass-strong p-8 relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-primary/25 blur-3xl" />
            <SubHeading eyebrow="Benefits" title="Why choose us" compact />
            <ul className="space-y-3 relative">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 text-primary shrink-0" />
                  <span className="text-sm md:text-base text-foreground/90">{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Process */}
        <div className="mt-16">
          <SubHeading eyebrow="Process" title="How we execute" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
            <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            {service.process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative rounded-2xl glass p-6 hover-lift"
              >
                <div className="absolute -top-3 left-6 inline-flex items-center justify-center h-7 px-3 rounded-full bg-gradient-brand text-primary-foreground text-xs font-semibold glow-brand-sm">
                  Step {p.step}
                </div>
                <h4 className="mt-4 text-lg font-semibold">{p.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mini CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 relative overflow-hidden rounded-3xl glass-strong p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="absolute inset-0 bg-grid-animated opacity-15" />
          <div className="absolute -inset-20 bg-aurora opacity-25 pointer-events-none" />
          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-bold">
              Need {service.title.toLowerCase()} for your facility?
            </h3>
            <p className="mt-2 text-muted-foreground max-w-xl">
              Talk to our engineering team for a tailored proposal and timeline.
            </p>
          </div>
          <div className="relative flex gap-3">
            <a href="/contact">
              <AnimatedButton size="lg" icon={<ArrowRight className="h-4 w-4" />}>
                Start a Project
              </AnimatedButton>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================== HELPER ============================== */
function SubHeading({
  eyebrow,
  title,
  compact,
}: {
  eyebrow: string;
  title: string;
  compact?: boolean;
}) {
  return (
    <div className={compact ? "mb-6" : "mb-10"}>
      <span className="text-xs uppercase tracking-[0.22em] text-primary font-medium">
        {eyebrow}
      </span>
      <h3 className={`mt-2 font-bold tracking-tight ${compact ? "text-2xl" : "text-3xl md:text-4xl"}`}>
        {title}
      </h3>
    </div>
  );
}
