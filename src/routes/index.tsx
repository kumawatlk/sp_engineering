import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, AnimatePresence, type Variants } from "motion/react";
import { useRef, useState, useEffect } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Wind,
  Snowflake,
  Flame,
  Zap,
  Users,
  Cpu,
  Clock,
  ShieldCheck,
  Building2,
  Factory,
  Hospital,
  Hotel,
  Warehouse,
  ShoppingBag,
  ChevronDown,
  Quote,
  Phone,
  Mail,
  Star,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Section } from "@/components/layout/Section";
import { StatCard } from "@/components/ui/stat-card";
import { CTASection } from "@/components/ui/cta-section";
import { TrustedMarquee } from "@/components/ui/trusted-marquee";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import heroImg from "@/assets/hero-industrial.jpg";
import aboutImg from "@/assets/about-preview.jpg";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import { LegacySection } from "@/components/home/LegacySection";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      {
        title:
          "SP Engineering — HVAC, Cryogenic, Fire Fighting & Electrical Engineering Services",
      },
      {
        name: "description",
        content:
          "Complete industrial & commercial engineering solutions across HVAC, cryogenic systems, fire fighting and electrical services — delivered with quality, safety and reliability.",
      },
      { property: "og:title", content: "SP Engineering — Complete Engineering Solutions" },
      {
        property: "og:description",
        content:
          "Premium HVAC, cryogenic, fire fighting and electrical engineering services for industry leaders.",
      },
    ],
  }),
});

/* ---------------- HERO ---------------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] flex items-center overflow-hidden isolate"
    >
      {/* Background image with parallax */}
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="SP Engineering industrial facility"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
      </motion.div>

      {/* Decorative layers */}
      <div className="absolute inset-0 bg-grid-animated opacity-[0.07] pointer-events-none" />
      <div className="absolute -top-32 -left-32 h-[36rem] w-[36rem] rounded-full bg-primary/25 blur-[160px] animate-pulse-glow" />
      <div className="absolute -bottom-32 -right-32 h-[30rem] w-[30rem] rounded-full bg-brand-soft/20 blur-[140px]" />

      {/* Floating particles */}
      <Particles />

      <div className="container mx-auto px-5 lg:px-8 relative z-10 py-32">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          className="max-w-4xl"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-primary"
          >
            <Sparkles className="h-3.5 w-3.5" />
            ISO-grade Engineering · Est. 2009
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-6 text-[2.6rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.04]"
          >
            Complete Engineering Solutions for{" "}
            <span className="text-brand-gradient text-glow">HVAC, Cryogenic,</span>{" "}
            <span className="text-brand-gradient text-glow">Fire Fighting</span> & Electrical
            Services
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 text-base md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            Professional industrial & commercial engineering services delivered with uncompromising{" "}
            <span className="text-foreground font-medium">quality, safety and reliability</span>{" "}
            — from concept to commissioning.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link to="/contact">
              <AnimatedButton size="xl" icon={<ArrowRight className="h-4 w-4" />}>
                Get Free Consultation
              </AnimatedButton>
            </Link>
            <Link to="/services">
              <AnimatedButton variant="glass" size="xl">
                Explore Services
              </AnimatedButton>
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-muted-foreground"
          >
            {["ISO Certified", "MEP Specialists", "Pan-India Delivery", "24/7 Support"].map(
              (item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  {item}
                </div>
              ),
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="grid h-9 w-9 place-items-center rounded-full glass"
        >
          <ChevronDown className="h-4 w-4 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] as const } },
};

function Particles() {
  // deterministic positions
  const dots = Array.from({ length: 26 }).map((_, i) => ({
    id: i,
    x: (i * 137) % 100,
    y: (i * 53) % 100,
    s: (i % 5) + 2,
    d: 6 + (i % 8),
  }));
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-primary/60"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.s, height: p.s }}
          animate={{ y: [0, -28, 0], opacity: [0.2, 0.9, 0.2] }}
          transition={{ duration: p.d, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

/* ---------------- STATS ---------------- */
function StatsStrip() {
  return (
    <Section className="py-16 md:py-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        <StatCard value={250} suffix="+" label="Projects Completed" />
        <StatCard value={45} suffix="+" label="Expert Engineers" index={1} />
        <StatCard value={180} suffix="+" label="Happy Clients" index={2} />
        <StatCard value={15} suffix="+" label="Years Experience" index={3} />
      </div>
    </Section>
  );
}

/* ---------------- ABOUT ---------------- */
function AboutPreview() {
  return (
    <Section className="pt-10">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden glass-strong">
            <img
              src={aboutImg}
              alt="SP Engineering team on site"
              className="w-full h-[460px] object-cover"
              loading="lazy"
              width={1280}
              height={960}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
          </div>
          {/* floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute -bottom-6 -right-4 md:-right-10 glass-strong rounded-2xl p-5 max-w-[240px] glow-brand-sm"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand">
                <ShieldCheck className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <p className="text-2xl font-bold text-brand-gradient">100%</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  Safety Record
                </p>
              </div>
            </div>
          </motion.div>
          <div className="absolute -inset-8 -z-10 bg-gradient-radial opacity-60" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
            About SP Engineering
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight">
            Built on precision. <br />
            <span className="text-brand-gradient">Powered by experience.</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-base md:text-lg leading-relaxed">
            For over a decade, SP Engineering has delivered turnkey MEP solutions for India's most
            demanding industrial and commercial projects. From mission-critical HVAC and cryogenic
            systems to life-safety fire networks and electrical infrastructure — we engineer
            outcomes our clients can rely on.
          </p>

          <ul className="mt-7 grid sm:grid-cols-2 gap-3">
            {[
              "Licensed MEP contractor",
              "In-house design & BIM team",
              "AMC & 24/7 plant support",
              "ISO 9001 quality processes",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-xl glass px-4 py-3 text-sm"
              >
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-9">
            <Link to="/about">
              <AnimatedButton variant="metallic" icon={<ArrowUpRight className="h-4 w-4" />}>
                Discover Our Story
              </AnimatedButton>
            </Link>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

/* ---------------- SERVICES ---------------- */
const SERVICES = [
  {
    icon: Wind,
    title: "HVAC Systems",
    desc: "Design, supply, install & commission of central air-conditioning, ventilation and climate-control systems for industrial, commercial and clean-room environments.",
    points: ["VRF & Chiller plants", "Ducting & AHUs", "Clean rooms", "AMC services"],
  },
  {
    icon: Snowflake,
    title: "Cryogenic Engineering",
    desc: "Engineering and execution of cryogenic storage, vacuum-insulated pipelines and gas distribution networks for LNG, LIN, LOX, LAR and medical gas applications.",
    points: ["VJ pipelines", "Storage tanks", "Vaporizers", "Manifold systems"],
  },
  {
    icon: Flame,
    title: "Fire Fighting",
    desc: "Code-compliant fire detection, hydrant, sprinkler and gas suppression systems engineered for industrial plants, warehouses and high-occupancy buildings.",
    points: ["Hydrant & sprinkler", "FM-200 & Novec", "Detection & alarm", "Pump rooms"],
  },
  {
    icon: Zap,
    title: "Electrical Services",
    desc: "End-to-end LV/HV electrical infrastructure including panels, distribution, earthing, lighting and automation — built to IS and IEC standards.",
    points: ["LT/HT panels", "Cable trays & lighting", "Earthing & LA", "Automation"],
  },
];

function Services() {
  return (
    <Section
      eyebrow="Our Core Services"
      title={
        <>
          Four disciplines.{" "}
          <span className="text-brand-gradient">One trusted partner.</span>
        </>
      }
      description="Specialist teams, integrated under one roof — so your project flows seamlessly from drawing board to handover."
      centered
    >
      <div className="grid md:grid-cols-2 gap-6">
        {SERVICES.map((s, i) => (
          <motion.article
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="group relative overflow-hidden rounded-3xl glass p-8 md:p-10 hover-lift"
          >
            <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-primary/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition" />

            <div className="relative flex items-start gap-5">
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-brand glow-brand-sm">
                <s.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
                <ul className="mt-5 grid grid-cols-2 gap-2">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-center gap-2 text-xs md:text-sm text-foreground/80"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Learn more
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- WHY CHOOSE US ---------------- */
const WHY = [
  {
    icon: Users,
    title: "Skilled Team",
    desc: "Licensed engineers, certified welders and project managers with deep MEP expertise.",
  },
  {
    icon: Cpu,
    title: "Latest Technology",
    desc: "BIM design, IoT-enabled monitoring and modern fabrication tools across every project.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "Disciplined planning and milestone tracking — we ship when we say we will.",
  },
  {
    icon: ShieldCheck,
    title: "Safety Standards",
    desc: "Zero-incident philosophy with rigorous HSE protocols on every site, every day.",
  },
];

function WhyChooseUs() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-blueprint bg-blueprint-fade opacity-30 pointer-events-none" />
      <div className="container mx-auto px-5 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <span className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
              Why Choose SP Engineering
            </span>
            <h2 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight">
              The advantages that <span className="text-brand-gradient">set us apart.</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-base md:text-lg leading-relaxed">
              We compete on engineering quality, not shortcuts. That's why blue-chip clients keep
              coming back.
            </p>
          </motion.div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {WHY.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className={cn(
                  "group rounded-2xl glass p-7 hover-lift",
                  i % 2 === 1 && "sm:translate-y-8",
                )}
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand glow-brand-sm">
                  <w.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- INDUSTRIES ---------------- */
const INDUSTRIES = [
  { icon: Factory, name: "Manufacturing" },
  { icon: Hospital, name: "Healthcare" },
  { icon: Building2, name: "Commercial" },
  { icon: Warehouse, name: "Warehousing" },
  { icon: Hotel, name: "Hospitality" },
  { icon: ShoppingBag, name: "Retail" },
];

function Industries() {
  return (
    <Section
      eyebrow="Industries We Serve"
      title={
        <>
          Trusted across <span className="text-brand-gradient">every sector.</span>
        </>
      }
      description="From precision pharma cleanrooms to high-bay logistics warehouses, our engineering scales to your environment."
      centered
    >
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {INDUSTRIES.map((ind, i) => (
          <motion.div
            key={ind.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group relative aspect-square rounded-2xl glass overflow-hidden hover-lift"
          >
            <div className="absolute inset-0 bg-gradient-radial opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative h-full w-full flex flex-col items-center justify-center gap-3 p-4">
              <div className="grid h-14 w-14 place-items-center rounded-xl bg-secondary/60 group-hover:bg-gradient-brand transition-colors duration-500">
                <ind.icon className="h-6 w-6 text-foreground group-hover:text-primary-foreground transition-colors" />
              </div>
              <p className="text-sm font-medium text-center">{ind.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- PROCESS ---------------- */
const STEPS = [
  { n: "01", title: "Consultation", desc: "Discover your goals, site constraints and load requirements." },
  { n: "02", title: "Planning", desc: "Engineering drawings, BOQ, scheduling and approvals." },
  { n: "03", title: "Execution", desc: "Skilled crews mobilized with strict HSE protocols." },
  { n: "04", title: "Testing", desc: "Commissioning, balancing and performance validation." },
  { n: "05", title: "Delivery", desc: "Documentation, training and ongoing AMC support." },
];

function Process() {
  return (
    <Section
      eyebrow="Our Process"
      title={
        <>
          A <span className="text-brand-gradient">proven workflow</span> from day one.
        </>
      }
      description="Every project follows the same disciplined five-step process — designed to remove surprises and protect your timeline."
      centered
    >
      <div className="relative">
        {/* Connecting line (desktop) */}
        <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="relative"
            >
              <div className="relative z-10 mx-auto grid h-24 w-24 place-items-center rounded-full glass-strong glow-brand-sm">
                <span className="text-2xl font-bold text-brand-gradient">{s.n}</span>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------------- PROJECTS ---------------- */
const PROJECTS = [
  { img: p1, title: "Central HVAC Plant", tag: "HVAC", location: "Mumbai" },
  { img: p2, title: "Cryogenic Gas Network", tag: "Cryogenic", location: "Pune" },
  { img: p3, title: "Industrial Sprinkler System", tag: "Fire Fighting", location: "Vasai" },
  { img: p4, title: "LT Panel Room Upgrade", tag: "Electrical", location: "Thane" },
];

function Projects() {
  return (
    <Section
      eyebrow="Project Showcase"
      title={
        <>
          Work we're <span className="text-brand-gradient">proud to put our name on.</span>
        </>
      }
      description="A small slice of recent engineering deliveries — explore the full portfolio for case studies."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {PROJECTS.map((p, i) => (
          <motion.a
            key={p.title}
            href="/projects"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55, delay: i * 0.08 }}
            className="group relative aspect-[4/5] overflow-hidden rounded-2xl glass"
          >
            <img
              src={p.img}
              alt={p.title}
              loading="lazy"
              width={1024}
              height={768}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute inset-0 ring-0 group-hover:ring-1 ring-primary/60 transition rounded-2xl" />

            <div className="absolute top-4 left-4">
              <span className="inline-flex rounded-full glass-strong px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary">
                {p.tag}
              </span>
            </div>
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-xs text-muted-foreground uppercase tracking-widest">
                {p.location}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-foreground">{p.title}</h3>
              <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition">
                View case study
                <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link to="/projects">
          <AnimatedButton variant="glass" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
            View All Projects
          </AnimatedButton>
        </Link>
      </div>
    </Section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
const TESTIMONIALS = [
  {
    quote:
      "SP Engineering delivered our HVAC retrofit two weeks ahead of schedule. Workmanship and documentation were exceptional.",
    name: "Rajesh Khanna",
    role: "Plant Head, Pharma Manufacturing",
  },
  {
    quote:
      "Their cryogenic pipeline work is best-in-class. Zero defects on hydro-test and clear engineering throughout.",
    name: "Anita Desai",
    role: "Project Director, Industrial Gases",
  },
  {
    quote:
      "From fire safety design to electrical commissioning, the SP team handled every discipline with the same precision.",
    name: "Vikram Mehta",
    role: "Facilities Manager, Commercial Realty",
  },
];

function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(id);
  }, []);
  const t = TESTIMONIALS[i];

  return (
    <Section
      eyebrow="Client Voices"
      title={
        <>
          What our <span className="text-brand-gradient">clients say.</span>
        </>
      }
      centered
    >
      <div className="relative max-w-3xl mx-auto">
        <div className="relative rounded-3xl glass-strong p-10 md:p-14 overflow-hidden">
          <Quote className="absolute -top-2 -left-2 h-32 w-32 text-primary/10" />
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="flex justify-center gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-6 text-xl md:text-2xl font-medium text-foreground/95 leading-relaxed text-center">
                "{t.quote}"
              </p>
              <footer className="mt-8 text-center">
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {TESTIMONIALS.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              aria-label={`Go to testimonial ${k + 1}`}
              className={cn(
                "h-1.5 rounded-full transition-all",
                k === i ? "w-8 bg-primary" : "w-4 bg-muted-foreground/30 hover:bg-muted-foreground/60",
              )}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------------- FAQ ---------------- */
const FAQS = [
  {
    q: "Which regions does SP Engineering operate in?",
    a: "Headquartered in Vasai, we deliver projects across Mumbai, Pune, Gujarat and pan-India through our network of certified site teams.",
  },
  {
    q: "Do you provide post-installation maintenance (AMC)?",
    a: "Yes — we offer comprehensive AMC packages with quarterly preventive maintenance, 24/7 breakdown support and spare-parts management.",
  },
  {
    q: "Can you handle design + build turnkey projects?",
    a: "Absolutely. Our in-house design and BIM team can take a project from concept drawings through statutory approvals, fabrication and commissioning.",
  },
  {
    q: "How quickly can you mobilize for a new project?",
    a: "Typical mobilization is 7–14 days post-PO depending on scope. Emergency response and breakdown support is available within 24 hours.",
  },
  {
    q: "Are your installations code-compliant?",
    a: "Every installation is engineered to IS, IEC and NFPA standards as applicable, with full test certificates and as-built documentation.",
  },
];

function FAQ() {
  return (
    <Section
      eyebrow="FAQ"
      title={
        <>
          Answers to the <span className="text-brand-gradient">questions you'll ask first.</span>
        </>
      }
      centered
      containerClassName="max-w-3xl"
    >
      <Accordion type="single" collapsible className="space-y-3">
        {FAQS.map((f, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="rounded-2xl glass border-0 px-6 data-[state=open]:glow-brand-sm transition"
          >
            <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:no-underline py-5">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed pb-5">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
        Still curious?
        <a
          href="tel:+918097604693"
          className="inline-flex items-center gap-2 text-primary hover:text-foreground transition"
        >
          <Phone className="h-4 w-4" /> +91 80976 04693
        </a>
        <span>·</span>
        <a
          href="mailto:spengineering185@gmail.com"
          className="inline-flex items-center gap-2 text-primary hover:text-foreground transition"
        >
          <Mail className="h-4 w-4" /> Email us
        </a>
      </div>
    </Section>
  );
}

/* ---------------- PAGE ---------------- */
function Home() {
  return (
    <>
      <Hero />
      <LegacySection/>
      <TrustedMarquee />
      <StatsStrip />
      <AboutPreview />
      <Services />
      <WhyChooseUs />
      <Industries />
      <Process />
      <Projects />
      <Testimonials />
      <FAQ />
      <CTASection />
    </>
  );
}
