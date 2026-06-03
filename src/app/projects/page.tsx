"use client";

import { Section } from "@/components/layout/Section";
import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import {
  Building2,
  MapPin,
  Layers,
  CheckCircle2,
  ArrowUpRight,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
  Quote,
  Flame,
  Wind,
  Zap,
  Snowflake,
  ShieldAlert,
  Wrench,
  Gauge,
  Briefcase,
} from "lucide-react";

// --- MOCK DATA FOR INDUSTRIAL PORTFOLIO ---
const CATEGORIES = ["All", "HVAC", "Cryogenic", "Fire Fighting", "Electrical"];

const STATS = [
  { value: "240+", label: "Projects Completed" },
  { value: "85+", label: "Industrial Clients" },
  { value: "45+", label: "Expert Engineers" },
  { value: "18+", label: "Cities Served" },
];

const PROJECTS_DATA = [
  {
    id: 1,
    title: "Apex Cryogenic Oxygen Plant Arrays",
    category: "Cryogenic",
    location: "Pune Industrial Zone",
    desc: "Turnkey installation of ultra-low temperature liquid oxygen storage vacuum pipelines and high-pressure vaporization manifolds.",
    tech: ["Vacuum Insulated Lines", "SCADA Integration", "Cryo-valves"],
    status: "Completed",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    before: "Raw open-plot layout with uncalibrated structural footing.",
    after: "Fully operational -185°C containment center with triple-redundancy safety.",
  },
  {
    id: 2,
    title: "Nexus Mega Manufacturing HVAC Infrastructure",
    category: "HVAC",
    location: "Chakan MIDC",
    desc: "Variable Refrigerant Flow (VRF) and heavy-duty air handling unit deployment optimizing atmospheric conditions across 120,000 sq ft.",
    tech: ["Chilled Water Loop", "HEPA Filtration", "Smart Dampers"],
    status: "Completed",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    before: "Stagnant, high-humidity assembly floor prone to component oxidation.",
    after: "Precision balanced positive-pressure cleanroom climate control.",
  },
  {
    id: 3,
    title: "Titan Refinery Integrated Fire Suppression Matrix",
    category: "Fire Fighting",
    location: "Mumbai Port Trust Area",
    desc: "Automated high-velocity water deluge arrays and foam monitors linked directly to chemical containment zones.",
    tech: ["Deluge Valves", "Linear Heat Detection", "Foam Skids"],
    status: "Completed",
    image:
      "https://images.unsplash.com/photo-1599740831464-5cbe1d14f87a?auto=format&fit=crop&w=800&q=80",
    before: "Outdated manual hydrant loops failing modernized compliance scales.",
    after: "Zero-latency automated suppression network with flame-signature recognition.",
  },
  {
    id: 4,
    title: "Vanguard Data Center High-Voltage Busway",
    category: "Electrical",
    location: "Navi Mumbai",
    desc: "Design and deployment of dual-redundant 33KV substations, structural transformer arrays, and automated transit switch panels.",
    tech: ["33KV Ring Main Unit", "Cast Resin Transformers", "ATS"],
    status: "Completed",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    before: "Unstable grid feed risking localized multi-rack server dropouts.",
    after: "Tier-IV compliant concurrently maintainable electrical core.",
  },
];

const INDUSTRIES = [
  { name: "Industrial Plants", icon: Building2 },
  { name: "Commercial Complexes", icon: Layers },
  { name: "Hospitals & Labs", icon: Snowflake },
  { name: "Mega Warehouses", icon: Wind },
  { name: "Luxury Hospitality", icon: Zap },
  { name: "Manufacturing Units", icon: Flame },
];

const TESTIMONIALS = [
  {
    quote:
      "SP Engineering delivered our cryogenic infrastructure arrays ahead of schedule. Their parameter verification methods are flawless.",
    author: "Director of Operations",
    company: "Apex Chemical Logistics",
  },
  {
    quote:
      "The complex HVAC retrofitting handled on our production floor has significantly lowered ambient particle pollution counts.",
    author: "Chief Infrastructure Architect",
    company: "Nexus Auto-Components",
  },
];

// --- ANIMATION SCHEMAS ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

function Page() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [projects, setProjects] = useState<typeof PROJECTS_DATA>(PROJECTS_DATA);
  const [selectedProject, setSelectedProject] = useState<(typeof PROJECTS_DATA)[0] | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/projects");
        if (res.ok) {
          const data = await res.json();
          if (data && data.length > 0) {
            interface ProjectItem {
              _id?: string;
              title: string;
              category: string;
              location?: string;
              description: string;
              tech?: string[];
              status?: string;
              image?: string;
              before?: string;
              after?: string;
            }
            const mappedData = data.map((item: ProjectItem, index: number) => ({
              id: item._id || index + 1,
              title: item.title,
              category: item.category,
              location: item.location || "Multiple Sites",
              desc: item.description,
              tech: item.tech || [],
              status: item.status || "Completed",
              image:
                item.image ||
                "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
              before: item.before || "Raw open-plot layout with uncalibrated structural footing.",
              after:
                item.after ||
                "Fully operational -185°C containment center with triple-redundancy safety.",
            }));
            setProjects(mappedData);
          }
        }
      } catch (err) {
        console.error("Failed to load projects from server, falling back to static dataset.", err);
      }
    };
    fetchProjects();
  }, []);

  const filteredProjects = projects.filter(
    (p) => activeCategory === "All" || p.category === activeCategory,
  );

  return (
    <>
      {/* ========================================================
                  MASSIVE FRONT-SIDE FOREGROUND TYPEWRITER BRAND BANNER
                 ======================================================== */}
      <div className="w-full overflow-hidden select-none py-4 px-8 my-2 relative z-30 flex justify-start items-center">
        <div className="font-mono text-3xl sm:text-5xl md:text-[4.5rem] font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-[#EBCDCB] to-[#A27273] drop-shadow-[0_0_20px_rgba(152,22,24,0.25)]">
          <span className="typewriter-horizontal">SP ENGINEERING</span>
        </div>
      </div>
      <Section
        eyebrow="Portfolio Architecture"
        title="Our Engineering Projects"
        description="Delivering high-quality industrial and commercial engineering solutions with precision, safety, and innovation."
        className="relative min-h-screen bg-[#160E0E] text-[#EBCDCB] overflow-x-hidden selection:bg-[#981618] selection:text-white"
      >
        {/* 1. BLUEPRINT BACKGROUND LAYER */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(#EBCDCB 1px, transparent 1px), linear-gradient(90deg, #EBCDCB 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
          <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#981618] opacity-[0.1] blur-[150px]" />
          <div className="absolute bottom-[30%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#A27273] opacity-[0.05] blur-[160px]" />
        </div>

        {/* 2. HERO QUICK INTERACTION CALLS */}
        <div className="flex flex-wrap justify-center gap-4 mt-8 mb-24 relative z-10">
          <a
            href="#project-grid"
            className="px-8 py-4 bg-[#981618] text-white font-semibold text-xs tracking-widest uppercase rounded-sm shadow-[0_0_20px_rgba(152,22,24,0.3)] hover:shadow-[0_0_35px_rgba(152,22,24,0.6)] transition-all duration-300 border border-[#A27273]/20"
          >
            Inspect Artifact Array
          </a>
          <a
            href="/contact"
            className="px-8 py-4 bg-[#160E0E]/80 text-[#EBCDCB] font-semibold text-xs tracking-widest uppercase rounded-sm border border-[#EBCDCB]/20 hover:border-[#981618] transition-all duration-300 backdrop-blur-md"
          >
            Initialize Briefing
          </a>
        </div>

        {/* 3. PREMIUM QUANTIFIABLE PROJECT STATS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-32 relative z-10"
        >
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="bg-[#160E0E]/40 border border-[#EBCDCB]/10 p-6 sm:p-8 rounded-sm backdrop-blur-md text-center group hover:border-[#981618]/40 transition-all duration-300"
            >
              <div className="font-mono text-3xl sm:text-5xl font-black text-white group-hover:text-[#981618] transition-colors duration-300 mb-2">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#A27273] font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 4. FILTERABLE METRIC DRIVEN GRID */}
        <div id="project-grid" className="mb-32 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-[#EBCDCB]/10 pb-6 mb-12 gap-6">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#981618] font-bold block mb-1">
                Portfolio Matrix
              </span>
              <h3 className="text-xl sm:text-3xl font-bold text-white tracking-tight">
                Verified Engineering Records
              </h3>
            </div>

            {/* Controls */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all ${
                    activeCategory === cat
                      ? "bg-[#981618] text-white shadow-md"
                      : "bg-[#160E0E] text-[#A27273] border border-[#EBCDCB]/10 hover:border-[#981618]/50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Project Grid Layout */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -6 }}
                  className="bg-[#160E0E]/50 border border-[#EBCDCB]/10 rounded-sm overflow-hidden group hover:border-[#981618]/50 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Visual Header Frame */}
                  <div className="relative h-64 w-full overflow-hidden bg-neutral-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale contrast-115 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#160E0E] via-transparent to-transparent" />
                    <span className="absolute bottom-4 left-4 bg-[#981618] text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Conceptual Content Frame */}
                  <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex items-center text-xs text-[#A27273] gap-2 mb-3 font-mono">
                        <MapPin className="w-3.5 h-3.5 text-[#981618]" />
                        <span>{project.location}</span>
                      </div>
                      <h4 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-[#981618] transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#A27273] leading-relaxed mb-6 font-light">
                        {project.desc}
                      </p>
                    </div>

                    <div>
                      {/* Tech badging */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.tech.map((t, i) => (
                          <span
                            key={i}
                            className="text-[10px] bg-[#160E0E] text-[#EBCDCB]/80 border border-[#EBCDCB]/5 px-2.5 py-1 rounded-sm font-mono"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Interactive Operational Call */}
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="w-full py-3 bg-[#160E0E] border border-[#EBCDCB]/10 hover:border-[#981618] text-[#EBCDCB] hover:text-white transition-all text-xs uppercase font-bold tracking-widest flex items-center justify-center gap-2"
                      >
                        Inspect System Topology <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* 5. INTERACTIVE STRUCTURAL COMPARISON (BEFORE / AFTER) */}
        <div className="mb-32 relative z-10">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-widest text-[#981618] font-bold block mb-2">
              Metrics Analysis
            </span>
            <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Deployment Metamorphosis
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {PROJECTS_DATA.slice(0, 2).map((project) => (
              <div
                key={project.id}
                className="bg-[#160E0E]/40 border border-[#EBCDCB]/10 p-6 sm:p-8 rounded-sm backdrop-blur-md"
              >
                <span className="text-xs uppercase text-[#A27273] tracking-widest font-mono block mb-3">
                  {project.title}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-[#160E0E] border border-red-950/40 p-4 rounded-sm">
                    <div className="text-[10px] uppercase tracking-wider text-[#A27273] font-bold mb-1 flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-600" /> Phase 01:
                      Pre-Execution
                    </div>
                    <p className="text-xs text-[#A27273]/90 leading-relaxed font-light">
                      {project.before}
                    </p>
                  </div>
                  <div className="bg-[#981618]/10 border border-[#981618]/30 p-4 rounded-sm">
                    <div className="text-[10px] uppercase tracking-wider text-white font-bold mb-1 flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_6px_#22c55e]" />{" "}
                      Phase 04: Commissioned
                    </div>
                    <p className="text-xs text-[#EBCDCB] leading-relaxed font-light">
                      {project.after}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6. SYSTEM STAGE TIMELINE SEGMENT */}
        <div className="mb-32 relative z-10">
          <div className="text-center mb-20">
            <span className="text-[10px] uppercase tracking-widest text-[#981618] font-bold block mb-2">
              Execution Protocol
            </span>
            <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              System Engineering Pipeline
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
            {[
              {
                step: "01",
                name: "Consultation",
                icon: Briefcase,
                d: "Parametric mapping alignment.",
              },
              {
                step: "02",
                name: "Planning",
                icon: SlidersHorizontal,
                d: "Structural calculation loops.",
              },
              { step: "03", name: "Installation", icon: Wrench, d: "Physical asset anchoring." },
              { step: "04", name: "Testing", icon: Gauge, d: "Stress loop verification vectors." },
              {
                step: "05",
                name: "Delivery",
                icon: CheckCircle2,
                d: "Formal handover commissioning.",
              },
            ].map((proc, idx) => {
              const IconComp = proc.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#160E0E]/70 border border-[#EBCDCB]/5 p-6 rounded-sm relative group hover:border-[#981618]/30 transition-all"
                >
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-mono text-xl font-bold text-[#981618]">{proc.step}</span>
                    <IconComp className="w-4 h-4 text-[#A27273]" />
                  </div>
                  <h4 className="text-sm font-bold text-white tracking-wide uppercase mb-1">
                    {proc.name}
                  </h4>
                  <p className="text-[11px] text-[#A27273] leading-relaxed">{proc.d}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 7. INDUSTRIES SERVED SHOWCASE */}
        <div className="mb-32 relative z-10">
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-widest text-[#981618] font-bold block mb-2">
              Operational Reach
            </span>
            <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Target Sectors Authorized
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {INDUSTRIES.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <div
                  key={i}
                  className="bg-[#160E0E]/40 border border-[#EBCDCB]/5 p-6 rounded-sm text-center group hover:border-[#981618]/30 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="w-10 h-10 bg-[#160E0E] border border-[#EBCDCB]/10 rounded-sm flex items-center justify-center mx-auto text-[#A27273] group-hover:bg-[#981618] group-hover:text-white transition-all duration-300 mb-4">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                    {ind.name}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>

        {/* 8. CLIENT VALIDATION ARRAY (SLIDER) */}
        <div className="mb-32 relative z-10 max-w-4xl mx-auto">
          <div className="bg-[#160E0E]/40 border border-[#EBCDCB]/10 p-8 sm:p-12 rounded-sm backdrop-blur-xl relative">
            <Quote className="w-10 h-10 text-[#981618]/20 absolute top-6 left-6 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
                className="text-center space-y-6"
              >
                <p className="text-sm sm:text-lg text-white font-light italic leading-relaxed">
                  "{TESTIMONIALS[activeTestimonial].quote}"
                </p>
                <div>
                  <h5 className="text-xs uppercase tracking-widest text-[#981618] font-bold">
                    {TESTIMONIALS[activeTestimonial].author}
                  </h5>
                  <span className="text-[11px] text-[#A27273] font-mono">
                    {TESTIMONIALS[activeTestimonial].company}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Steppers */}
            <div className="flex justify-center space-x-3 mt-8">
              <button
                onClick={() =>
                  setActiveTestimonial((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1))
                }
                className="p-2 border border-[#EBCDCB]/10 text-[#A27273] hover:text-white hover:border-[#981618] transition-all rounded-sm"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() =>
                  setActiveTestimonial((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1))
                }
                className="p-2 border border-[#EBCDCB]/10 text-[#A27273] hover:text-white hover:border-[#981618] transition-all rounded-sm"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 9. DOUBLE ROW OPPOSITE INFINITE MARQUEE */}
        <div className="mb-32 overflow-hidden pointer-events-none relative w-full select-none opacity-40">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#160E0E] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#160E0E] to-transparent z-10" />

          {/* Forward Loop */}
          <div className="flex space-x-8 animate-marquee whitespace-nowrap mb-4">
            {Array(10)
              .fill(["SP INFRA", "APEX LOGISTICS", "TITAN CORP", "NEXUS INDUSTRIAL"])
              .flat()
              .map((logo, i) => (
                <span
                  key={i}
                  className="font-mono text-xs uppercase tracking-[0.4em] text-[#A27273] border border-[#EBCDCB]/10 px-6 py-2.5 bg-[#160E0E]/50"
                >
                  {logo}
                </span>
              ))}
          </div>
          {/* Reverse Loop */}
          <div className="flex space-x-8 animate-marquee--reverse whitespace-nowrap">
            {Array(10)
              .fill(["VANGUARD COMPONENT", "CHAKAN SEZ MATRICES", "MUMBAI PETRO", "LOTUS CORE"])
              .flat()
              .map((logo, i) => (
                <span
                  key={i}
                  className="font-mono text-xs uppercase tracking-[0.4em] text-[#A27273] border border-[#EBCDCB]/10 px-6 py-2.5 bg-[#160E0E]/50"
                >
                  {logo}
                </span>
              ))}
          </div>
        </div>

        {/* 10. CLOSING SYSTEM CTA */}
        <div className="relative bg-gradient-to-b from-[#160E0E]/80 to-[#221011]/80 border border-[#981618]/40 p-8 sm:p-16 rounded-sm text-center shadow-[0_0_50px_rgba(152,22,24,0.15)] mb-12 z-10">
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Let’s Build Your Next Engineering Asset
          </h2>
          <p className="text-xs sm:text-sm text-[#A27273] max-w-xl mx-auto mb-8 font-light leading-relaxed">
            Connect with our estimation engineers to isolate optimization curves across HVAC, Cryo,
            or Safety disciplines.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="px-8 py-3.5 bg-[#981618] text-white font-semibold text-xs tracking-widest uppercase rounded-sm"
            >
              Get Free Consultation
            </a>
          </div>
        </div>

        {/* DETAILED SPECIFICATION POPUP MODAL */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                className="bg-[#160E0E] border border-[#981618]/40 max-w-2xl w-full rounded-sm p-6 sm:p-8 space-y-6 overflow-y-auto max-h-[90vh]"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-mono uppercase bg-[#981618] text-white px-2 py-0.5 rounded-sm">
                      {selectedProject.category}
                    </span>
                    <h4 className="text-xl font-bold text-white mt-2">{selectedProject.title}</h4>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-[#A27273] hover:text-white font-mono text-xs uppercase tracking-wider border border-[#EBCDCB]/10 px-2.5 py-1"
                  >
                    Close [X]
                  </button>
                </div>

                <div className="space-y-4 text-xs sm:text-sm">
                  <p className="text-[#A27273] leading-relaxed font-light">
                    {selectedProject.desc}
                  </p>
                  <div className="p-4 bg-[#160E0E] border border-[#EBCDCB]/5 space-y-2">
                    <span className="text-[10px] uppercase font-bold text-white tracking-widest block">
                      Structural Metadata
                    </span>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="text-[#A27273]">Location:</span>{" "}
                        <span className="text-[#EBCDCB]">{selectedProject.location}</span>
                      </div>
                      <div>
                        <span className="text-[#A27273]">Status:</span>{" "}
                        <span className="text-green-500 font-bold">{selectedProject.status}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Section>
    </>
  );
}

export default function ProjectsPage() {
  return <Page />;
}
