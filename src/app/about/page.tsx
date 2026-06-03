"use client";

import Link from "next/link";
import { motion, type Variants } from "motion/react";
import {
  ArrowRight,
  Target,
  Eye,
  ShieldCheck,
  Award,
  Users,
  Cpu,
  Clock,
  HeartHandshake,
  HardHat,
  Wrench,
  Gauge,
  Sparkles,
  CheckCircle2,
  Trophy,
  Factory,
  BadgeCheck,
} from "lucide-react";
import { Section } from "@/components/layout/Section";
import { AnimatedButton } from "@/components/ui/animated-button";
import { StatCard } from "@/components/ui/stat-card";
import { CTASection } from "@/components/ui/cta-section";
import { AnimatedBackground } from "@/components/ui/animated-background";
import aboutHero from "@/assets/about-hero.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import aboutPreview from "@/assets/about-preview.jpg";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] as const } },
};

const HIGHLIGHTS = [
  {
    icon: Users,
    title: "Skilled & Experienced Team",
    desc: "Certified engineers and technicians with decades of combined field expertise.",
  },
  {
    icon: Cpu,
    title: "Latest Tools & Technology",
    desc: "Modern equipment, calibrated instruments and digital workflows for precision.",
  },
  {
    icon: Clock,
    title: "On-Time Project Completion",
    desc: "Disciplined planning and execution to honour every milestone and deadline.",
  },
  {
    icon: HeartHandshake,
    title: "Customer Satisfaction Guaranteed",
    desc: "Transparent communication and quality assurance from kick-off to handover.",
  },
];

const EXPERTISE = [
  {
    icon: Wrench,
    title: "Industrial Fabrication",
    desc: "Heavy-duty fabrication for plants, refineries and process industries.",
  },
  {
    icon: Gauge,
    title: "Precision Engineering",
    desc: "Tight-tolerance machining, assembly and quality-controlled deliverables.",
  },
  {
    icon: Factory,
    title: "Turnkey Projects",
    desc: "End-to-end delivery — design, supply, installation, testing and commissioning.",
  },
  {
    icon: HardHat,
    title: "Plant Maintenance",
    desc: "Preventive, predictive and breakdown maintenance with rapid response.",
  },
];

const SAFETY = [
  "Documented HSE protocols on every site",
  "PPE compliance and toolbox talks",
  "Risk assessments before execution",
  "Trained safety officers on critical jobs",
  "Zero-incident commitment culture",
  "Compliance with statutory regulations",
];

const CERTS = [
  { label: "ISO 9001", sub: "Quality Management" },
  { label: "ISO 45001", sub: "Occupational Safety" },
  { label: "MSME", sub: "Registered Enterprise" },
  { label: "GST 27ALFPU1008A1ZL", sub: "Compliant Business" },
];

const TRUST = [
  {
    icon: ShieldCheck,
    title: "Reliability First",
    desc: "We deliver what we commit — predictable timelines and predictable quality.",
  },
  {
    icon: Award,
    title: "Premium Standards",
    desc: "Materials, workmanship and finishing held to the highest industrial benchmarks.",
  },
  {
    icon: BadgeCheck,
    title: "Documented Quality",
    desc: "Inspection reports, test certificates and full traceability with every project.",
  },
];

const ACHIEVEMENTS = [
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 75, suffix: "+", label: "Industrial Clients" },
  { value: 12, suffix: "+", label: "Years Experience" },
  { value: 99, suffix: "%", label: "Client Retention" },
];

const TIMELINE = [
  {
    year: "2012",
    title: "Founded",
    desc: "SP Engineering established with a focus on industrial fabrication services.",
  },
  {
    year: "2015",
    title: "Expanded Capabilities",
    desc: "Added HVAC, electrical and plant maintenance verticals to the portfolio.",
  },
  {
    year: "2018",
    title: "100+ Projects Milestone",
    desc: "Crossed 100 successful project deliveries across Maharashtra and beyond.",
  },
  {
    year: "2021",
    title: "Certified Processes",
    desc: "Adopted ISO-aligned quality and safety management systems across operations.",
  },
  {
    year: "2024",
    title: "Pan-India Reach",
    desc: "Serving manufacturing, pharma, hospitality and infrastructure clients nationwide.",
  },
];

const TEAM = [
  { name: "Project Engineers", role: "Design, planning & site execution", img: aboutTeam },
  { name: "Safety Officers", role: "HSE compliance & risk control", img: aboutHero },
  {
    name: "Skilled Technicians",
    role: "Fabrication, installation & commissioning",
    img: aboutPreview,
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-8 pb-20">
        <div className="absolute inset-0">
          <img
            src={aboutHero.src}
            alt="SP Engineering at work"
            className="h-full w-full object-cover opacity-40"
            width={1536}
            height={1024}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
        </div>
        <AnimatedBackground />

        <div className="container relative mx-auto px-5 lg:px-8">
          {/* ========================================================
                  MASSIVE FRONT-SIDE FOREGROUND TYPEWRITER BRAND BANNER
                 ======================================================== */}
          <div className="w-full overflow-hidden select-none py-4 my-2 relative z-30 flex justify-start items-center">
            <div className="font-mono text-3xl sm:text-5xl md:text-[4.5rem] font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-[#EBCDCB] to-[#A27273] drop-shadow-[0_0_20px_rgba(152,22,24,0.25)]">
              <span className="typewriter-horizontal">SP ENGINEERING</span>
            </div>
          </div>
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
              About SP Engineering
            </span>
            <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
              Engineering trust, <span className="text-brand-gradient">built to last.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              SP Engineering is a reliable and experienced technical service provider specializing
              in industrial and commercial engineering projects — with a strong focus on quality,
              safety and timely execution.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/services">
                <AnimatedButton size="lg" icon={<ArrowRight className="h-4 w-4" />}>
                  Our Services
                </AnimatedButton>
              </Link>
              <Link href="/contact">
                <AnimatedButton variant="glass" size="lg">
                  Talk to Our Team
                </AnimatedButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <Section eyebrow="Who We Are" title="A partner you can engineer with.">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-6 bg-gradient-radial opacity-60 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl glass-strong">
              <img
                src={aboutPreview.src}
                alt="SP Engineering site"
                loading="lazy"
                width={1536}
                height={1024}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              From precision fabrication to complete turnkey installations, SP Engineering brings
              together skilled craftsmanship, modern tooling and rigorous safety culture to deliver
              dependable engineering outcomes for industry leaders.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              We operate as a long-term partner — engineering systems that perform under real-world
              pressure and standing behind every weld, every wire and every commissioning report.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 pt-4">
              {[
                "Industrial & commercial expertise",
                "Quality-controlled deliverables",
                "Safety-first execution",
                "Pan-India project capability",
              ].map((t) => (
                <div key={t} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/90">{t}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* MISSION & VISION */}
      <Section className="pt-0">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: Target,
              eyebrow: "Our Mission",
              title: "Deliver engineering excellence on every project.",
              desc: "To execute industrial and commercial engineering work with uncompromising quality, safety and timeliness — empowering clients to run reliable operations.",
            },
            {
              icon: Eye,
              eyebrow: "Our Vision",
              title: "Be India's most trusted industrial engineering partner.",
              desc: "To become the first call for organisations that demand precision, accountability and premium standards in fabrication and turnkey delivery.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.eyebrow}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-3xl glass p-10"
            >
              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
              <div className="relative">
                <div className="inline-grid h-14 w-14 place-items-center rounded-xl bg-gradient-brand grid-cols-1 justify-items-center items-center glow-brand-sm">
                  <item.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  {item.eyebrow}
                </p>
                <h3 className="mt-2 text-2xl md:text-3xl font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* HIGHLIGHTS */}
      <Section
        eyebrow="What Sets Us Apart"
        title="Built on four uncompromising commitments."
        centered
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl glass p-7 hover-lift"
            >
              <div className="absolute inset-0 bg-gradient-radial opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="inline-grid h-12 w-12 place-items-center rounded-xl bg-gradient-brand grid-cols-1 justify-items-center items-center glow-brand-sm">
                  <h.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{h.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* EXPERTISE */}
      <Section eyebrow="Our Expertise" title="Capabilities engineered for industrial demand.">
        <div className="grid gap-6 md:grid-cols-2">
          {EXPERTISE.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl glass p-7 flex gap-5 hover-lift"
            >
              <div className="inline-grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-gradient-brand grid-cols-1 justify-items-center items-center glow-brand-sm">
                <e.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">{e.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* SAFETY STANDARDS */}
      <Section eyebrow="Safety First" title="A culture of zero compromise.">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Safety is not a checklist for us — it is a discipline embedded into every project,
              from kickoff to handover. Our teams operate under documented HSE protocols and
              statutory compliance.
            </p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {SAFETY.map((s) => (
                <li key={s} className="flex items-start gap-2.5">
                  <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/90">{s}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl glass-strong"
          >
            <img
              src={aboutHero.src}
              alt="Safety standards at SP Engineering"
              loading="lazy"
              width={1536}
              height={1024}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-primary/20" />
          </motion.div>
        </div>
      </Section>

      {/* CERTIFICATIONS */}
      <Section
        eyebrow="Certifications & Compliance"
        title="Credentials that back our work."
        centered
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CERTS.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl glass p-7 text-center hover-lift"
            >
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="mx-auto inline-grid h-14 w-14 place-items-center rounded-full bg-gradient-brand grid-cols-1 justify-items-center items-center glow-brand-sm">
                  <BadgeCheck className="h-6 w-6 text-primary-foreground" />
                </div>
                <p className="mt-5 text-lg font-bold text-foreground">{c.label}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {c.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* WHY CLIENTS TRUST US */}
      <Section
        eyebrow="Why Clients Trust Us"
        title="Engineering you can take to the bank."
        centered
      >
        <div className="grid gap-6 md:grid-cols-3">
          {TRUST.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl glass p-8 hover-lift"
            >
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-all" />
              <div className="relative">
                <div className="inline-grid h-14 w-14 place-items-center rounded-xl bg-gradient-brand grid-cols-1 justify-items-center items-center glow-brand-sm">
                  <t.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">{t.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ACHIEVEMENTS / STATS */}
      <Section eyebrow="By The Numbers" title="A track record built project by project." centered>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ACHIEVEMENTS.map((s, i) => (
            <StatCard key={s.label} value={s.value} suffix={s.suffix} label={s.label} index={i} />
          ))}
        </div>
      </Section>

      {/* TIMELINE */}
      <Section eyebrow="Our Journey" title="Milestones that shaped SP Engineering.">
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent md:-translate-x-1/2" />
          <div className="space-y-10">
            {TIMELINE.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.05 * i }}
                className={`relative md:grid md:grid-cols-2 md:gap-12 ${
                  i % 2 === 0 ? "" : "md:[&>*:first-child]:col-start-2"
                }`}
              >
                <div
                  className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}
                >
                  <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                    <Trophy className="h-3.5 w-3.5" /> {m.year}
                  </div>
                  <h3 className="mt-3 text-2xl font-bold text-foreground">{m.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-md md:inline-block">
                    {m.desc}
                  </p>
                </div>
                <div
                  className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 grid h-4 w-4 place-items-center rounded-full bg-primary glow-brand-sm ring-4 ring-background"
                  aria-hidden
                />
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* TEAM */}
      <Section eyebrow="Our People" title="The team behind every project." centered>
        <div className="grid gap-6 md:grid-cols-3">
          {TEAM.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl glass hover-lift"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={t.img.src}
                  alt={t.name}
                  loading="lazy"
                  width={1536}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="inline-flex items-center gap-2 rounded-full glass px-2.5 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary">
                    <Sparkles className="h-3 w-3" /> SP Crew
                  </div>
                  <h3 className="mt-3 text-xl font-bold text-foreground">{t.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        eyebrow="Partner With Us"
        title="Have a project? Let's engineer it right."
        description="From quick service calls to multi-site turnkey projects, our team is ready to mobilize. Tell us about your requirement and get a response within 24 hours."
        primaryLabel="Request a Quote"
        primaryHref="/contact"
      />
    </main>
  );
}
