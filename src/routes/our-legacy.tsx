import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/layout/Section";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ownerimg from "@/assets/owner.jpeg";
import { 
  Award, 
  ShieldCheck, 
  Users, 
  Briefcase, 
  FileCheck, 
  Zap, 
  Wind, 
  Snowflake, 
  Flame, 
  Compass, 
  TrendingUp, 
  ChevronDown, 
  Quote, 
  CheckCircle,
  Clock,
  HeartHandshake,
  ArrowRight
} from "lucide-react";

export const Route = createFileRoute("/our-legacy")({ component: () => <Page /> });

// --- DATA STRUCTURES ---
const TIMELINE_STEPS = [
  {
    era: "Phase 01",
    title: "Beginning of Career",
    year: "Early Milestones",
    desc: "Acquiring core analytical foundational values on dynamic fluid logistics and heavy industrial site safety protocols.",
  },
  {
    era: "Phase 02",
    title: "Technical Experience Integration",
    year: "Refining Expertise",
    desc: "Supervising deep HVAC configurations, load calculations, and complex high-voltage industrial asset infrastructure.",
  },
  {
    era: "Phase 03",
    title: "Industrial Cryogenic Mastery",
    year: "Specialized Vectors",
    desc: "Mastering vacuum insulated sub-zero pipelines and critical fire deluge design architectures across volatile hazard layouts.",
  },
  {
    era: "Phase 04",
    title: "Company Foundation",
    year: "SP Engineering Genesis",
    desc: "Unifying all major mechanical, electrical, and plumbing engineering disciplines under one premier corporate banner.",
  },
  {
    era: "Phase 05",
    title: "Growth, Scale & Future Vision",
    year: "Present & Beyond",
    desc: "Expanding footprints to critical national infrastructures, automated SCADA integrations, and greenfield manufacturing assets.",
  }
];

const EXPERTISE_METRICS = [
  { discipline: "HVAC Infrastructure", icon: Wind, capability: "98%", summary: "Centralized chiller loops & precision cleanroom air handling vectors." },
  { discipline: "Cryogenic Engineering", icon: Snowflake, capability: "94%", summary: "Ultra-low temperature liquid distribution vacuum jacketed piping." },
  { discipline: "Fire Fighting Matrices", icon: Flame, capability: "96%", summary: "Automated high-velocity water deluge & chemical foam arrays." },
  { discipline: "Electrical Systems", icon: Zap, capability: "92%", summary: "HT/LT panels, transformer allocation, & grid load synchronization." },
  { discipline: "Project Management", icon: Briefcase, capability: "99%", summary: "Turnkey delivery, parametric risk monitoring, & resource timeline lock." },
];

const CORPORATE_VALUES = [
  { name: "Absolute Quality", icon: FileCheck, description: "Uncompromised build standards following international ISO and ASME guidelines." },
  { name: "Zero-Fail Safety", icon: ShieldCheck, description: "Instilling strict structural protocols to guarantee lifetime asset reliability." },
  { name: "Ironclad Commitment", icon: Clock, description: "Delivering massive industrial arrays strictly inside projected timeframe parameters." },
  { name: "Agile Innovation", icon: TrendingUp, description: "Integrating cloud automation, thermodynamic telemetry, and smart energy optimization." },
  { name: "Operational Reliability", icon: Compass, description: "Forging lifetime engineering assets through continuous preventive monitoring structures." },
  { name: "Client Synchronization", icon: HeartHandshake, description: "Formulating custom tailored master plans that cleanly adapt to site realities." },
];

const PremiumGlassCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-[#160E0E]/40 border border-[#EBCDCB]/10 backdrop-blur-xl rounded-sm p-6 sm:p-8 relative overflow-hidden group hover:border-[#981618]/50 transition-all duration-500 ${className}`}>
    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#981618]/5 to-transparent pointer-events-none" />
    {children}
  </div>
);

function Page() {
  const [activeTimeline, setActiveTimeline] = useState(3);

  return (
    <Section
      eyebrow="Executive Legacy"
      title="Building Engineering Excellence Through Vision & Experience"
      description="Discover the historical milestones, strategic leadership philosophy, and technical values that drive the machinery of SP Engineering."
      className="bg-[#160E0E] text-[#EBCDCB] overflow-hidden"
    >
      
      {/* 1. BLUEPRINT BACKGROUND GRID & RED SPOTLIGHT GLOWS */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `linear-gradient(#EBCDCB 1px, transparent 1px), linear-gradient(90deg, #EBCDCB 1px, transparent 1px)`,
            backgroundSize: '45px 45px' 
          }} 
        />
        <div className="absolute top-[10%] left-1/4 w-[60vw] h-[60vw] rounded-full bg-[#981618] opacity-[0.09] blur-[150px]" />
        <div className="absolute top-[40%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-[#A27273] opacity-[0.06] blur-[130px]" />
      </div>

      {/* ========================================================
          SPACE-OPTIMIZED CINEMATIC HERO SECTION
         ======================================================== */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-6 mb-32">
        
        {/* LEFT COMPOSITION: PACKED CONTENT WITH ZERO WASTED SPACE */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
          <div className="inline-flex self-start items-center gap-2.5 bg-[#981618]/10 border border-[#981618]/30 px-3.5 py-1.5 rounded-sm text-[10px] font-mono font-bold tracking-widest text-white uppercase">
            <Award className="w-3.5 h-3.5 text-[#981618]" /> Founder Authority Sequence Active
          </div>

          <div className="space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white uppercase font-sans">
              Driven by Experience, Built on Trust.
            </h3>
            <p className="text-sm sm:text-base font-light leading-relaxed text-[#A27273]">
              SP Engineering's industrial infrastructure roots are anchored by decades of unyielding execution metrics. Masterminded by enterprise-focused engineering leadership, we deploy optimized turn-key safety arrays and environmental control architectures across global mechanical corridors.
            </p>
            <p className="text-xs sm:text-sm font-light leading-relaxed text-[#A27273]/80">
              From localized thermodynamic management parameters to massive sub-zero vacuum containment solutions, our operational timeline is built with zero room for error.
            </p>
          </div>

          {/* Quick Metrics Injection to completely occupy vertical canvas space */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="border-l border-[#981618] pl-3">
              <span className="block text-xl font-bold text-white font-mono">15+ Years</span>
              <span className="text-[10px] uppercase text-[#A27273] tracking-wider font-semibold">Industrial Mastery</span>
            </div>
            <div className="border-l border-[#981618] pl-3">
              <span className="block text-xl font-bold text-white font-mono">240+ Units</span>
              <span className="text-[10px] uppercase text-[#A27273] tracking-wider font-semibold">Handovers Executed</span>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <a href="#timeline-matrix" className="px-6 py-3.5 bg-[#981618] text-white text-xs font-bold uppercase tracking-[0.2em] rounded-sm shadow-[0_0_20px_rgba(152,22,24,0.3)] hover:shadow-[0_0_35px_rgba(152,22,24,0.6)] transition-all flex items-center gap-2">
              Explore Timeline Matrix <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a href="/contact" className="px-6 py-3.5 bg-transparent border border-[#EBCDCB]/20 text-white text-xs font-bold uppercase tracking-[0.2em] rounded-sm hover:border-[#981618] transition-all">
              Establish Connection
            </a>
          </div>
        </div>

        {/* RIGHT COMPOSITION: EXECUTIVE HERO PORTRAIT */}
        <div className="lg:col-span-6 relative group w-full lg:max-w-xl lg:justify-self-end">
          {/* Futuristic Cyber-Industrial Outer Framework Borders */}
          <div className="absolute -inset-4 border border-[#981618]/20 rounded-sm pointer-events-none group-hover:border-[#981618]/50 transition-colors duration-500" />
          <div className="absolute top-0 left-0 w-4 h-[1px] bg-[#981618]" />
          <div className="absolute top-0 left-0 w-[1px] h-4 bg-[#981618]" />
          <div className="absolute bottom-0 right-0 w-4 h-[1px] bg-[#981618]" />
          <div className="absolute bottom-0 right-0 w-[1px] h-4 bg-[#981618]" />

          <div className="relative aspect-[4/5] sm:aspect-[16/14] lg:aspect-[4/5] bg-neutral-900 border border-[#EBCDCB]/10 rounded-sm overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-[#160E0E] via-[#160E0E]/20 to-transparent z-10" />
            <img 
            //   src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80" 
              src={ownerimg} 
              alt="Mr. Pradeep Upadhyay - Managing Director"
              className="w-full h-full object-cover grayscale brightness-[0.85] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700"
            />
            {/* Embedded Structural ID Tag Overlay */}
            <div className="absolute bottom-6 left-6 z-20">
              <h4 className="text-white font-mono text-xl font-bold tracking-wide">Mr. Pradeep Upadhyay</h4>
              <span className="text-[#981618] text-[10px] uppercase tracking-widest font-bold font-mono block mt-0.5">Managing Director & Chief Visionary</span>
            </div>
          </div>
        </div>

      </div>

      {/* ========================================================
          EXECUTIVE LEADERSHIP PHILOSOPHY & STATISTICS GRID
         ======================================================== */}
      <div className="relative z-10 mb-32 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        <PremiumGlassCard className="lg:col-span-1 flex flex-col justify-between border-l-2 border-l-[#981618]">
          <div>
            <span className="text-[10px] font-mono uppercase text-[#981618] tracking-widest block mb-2">Core Ethos</span>
            <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4">Leadership Philosophy</h3>
            <p className="text-xs sm:text-sm text-[#A27273] font-light leading-relaxed">
              "True industrial validation is achieved when mechanical configuration complexity transitions seamlessly into operational safety. We do not simply mount pipelines; we anchor structural safety matrix networks designed to endure generations."
            </p>
          </div>
          <div className="pt-6 border-t border-[#EBCDCB]/5 mt-6">
            <div className="text-xs text-white/40 font-mono italic">Operational System Signature Verified</div>
          </div>
        </PremiumGlassCard>

        {/* Quantifiable Data Framework Cards */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { value: "15+", metric: "Years Active Field Mastery", desc: "Direct oversight of volatile refinery environments.", icon: Award },
            { value: "240+", metric: "Commissioned Project Vectors", desc: "Turnkey handovers without parameter variance.", icon: CheckCircle },
            { value: "12+", metric: "Distinct Enterprise Sectors", desc: "From sub-zero cryo loops to high-voltage hubs.", icon: Briefcase },
            { value: "100%", metric: "Regulatory Compliance Metric", desc: "Absolute NBC, ISO, and safety compliance.", icon: FileCheck }
          ].map((stat, i) => (
            <div key={i} className="bg-[#160E0E]/60 border border-[#EBCDCB]/5 p-6 rounded-sm group hover:border-[#981618]/30 transition-all flex flex-col justify-between">
              <div>
                <stat.icon className="w-5 h-5 text-[#981618] mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-2xl sm:text-4xl font-black text-white font-mono tracking-tight mb-1">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-[#EBCDCB] mb-2">{stat.metric}</div>
              </div>
              <p className="text-[11px] text-[#A27273] leading-normal font-light">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================
          CHRONOLOGICAL JOURNEY TIMELINE MATRIX
         ======================================================== */}
      <div id="timeline-matrix" className="relative z-10 mb-32">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-widest text-[#981618] font-bold block mb-2">Historical Records</span>
          <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">The Chronological Evolution</h3>
        </div>

        {/* Interactive Linear Grid Controller */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {TIMELINE_STEPS.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTimeline(idx)}
              className={`text-left p-6 rounded-sm border transition-all duration-300 relative ${
                activeTimeline === idx 
                  ? "bg-[#981618]/10 border-[#981618] shadow-[0_0_20px_rgba(152,22,24,0.15)]" 
                  : "bg-[#160E0E]/40 border-[#EBCDCB]/5 hover:border-[#EBCDCB]/20"
              }`}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-mono text-[10px] text-[#A27273] font-bold tracking-widest uppercase">{step.era}</span>
                <div className={`w-2 h-2 rounded-full ${activeTimeline === idx ? "bg-[#981618] shadow-[0_0_8px_#981618]" : "bg-neutral-800"}`} />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-white tracking-wide truncate">{step.title}</h4>
            </button>
          ))}
        </div>

        {/* Step Breakdown Output Window */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTimeline}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="bg-[#160E0E]/80 border border-[#EBCDCB]/10 p-8 rounded-sm backdrop-blur-md relative overflow-hidden"
          >
            <div className="absolute -right-10 -bottom-10 font-mono text-8xl font-black text-[#981618]/5 select-none">
              {TIMELINE_STEPS[activeTimeline].era}
            </div>
            <div className="max-w-2xl">
              <span className="text-[10px] font-mono tracking-widest text-[#981618] uppercase font-bold block mb-1">
                {TIMELINE_STEPS[activeTimeline].year}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 tracking-wide">
                {TIMELINE_STEPS[activeTimeline].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#A27273] leading-relaxed font-light">
                {TIMELINE_STEPS[activeTimeline].desc}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ========================================================
          TECHNICAL EXPERTISE PROGRESSION SHOWCASE
         ======================================================== */}
      <div className="relative z-10 mb-32">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-widest text-[#981618] font-bold block mb-2">Technical Capabilities</span>
          <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">System Deployment Calibration</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERTISE_METRICS.map((exp, i) => {
            const Icon = exp.icon;
            return (
              <PremiumGlassCard key={i} className="flex flex-col justify-between min-h-48">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-9 h-9 bg-[#160E0E] border border-[#EBCDCB]/10 rounded-sm flex items-center justify-center text-[#981618]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-sm font-bold text-[#981618]">{exp.capability}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wide mb-1">{exp.discipline}</h4>
                  <p className="text-xs text-[#A27273] leading-relaxed font-light">{exp.summary}</p>
                </div>
                <div className="w-full h-[1px] bg-neutral-900 mt-6 relative overflow-hidden">
                  <div className="absolute top-0 left-0 h-full bg-[#981618]" style={{ width: exp.capability }} />
                </div>
              </PremiumGlassCard>
            );
          })}
        </div>
      </div>

      {/* ========================================================
          CORPORATE PILLARS (VALUES ARRAY)
         ======================================================== */}
      <div className="relative z-10 mb-32">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-widest text-[#981618] font-bold block mb-2">Corporate Pillars</span>
          <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">Core Engineering Values</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORPORATE_VALUES.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div key={idx} className="p-6 bg-[#160E0E]/40 border border-[#EBCDCB]/5 hover:border-[#981618]/30 transition-all rounded-sm group flex gap-4">
                <div className="text-[#981618] flex-shrink-0 pt-0.5 group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-1">{val.name}</h4>
                  <p className="text-[11px] text-[#A27273] leading-relaxed font-light">{val.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ========================================================
          MESSAGE FROM THE FOUNDER
         ======================================================== */}
      <div className="relative z-10 mb-32 max-w-4xl mx-auto">
        <div className="relative p-[1px] rounded-sm overflow-hidden bg-gradient-to-b from-[#981618]/30 via-transparent to-transparent">
          <div className="bg-[#160E0E]/90 border border-[#EBCDCB]/10 p-8 sm:p-14 rounded-sm relative backdrop-blur-md">
            <Quote className="w-12 h-12 text-[#981618]/10 absolute top-6 left-6 pointer-events-none" />
            
            <div className="space-y-6 text-center relative z-10">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#981618] font-bold block">
                Official Operational Message
              </span>
              <p className="text-sm sm:text-lg text-white font-light italic leading-relaxed max-w-2xl mx-auto">
                "Our history isn't documented purely by balance sheets; it's forged deep inside the structural integrity of every localized ventilation manifold and cryogenic containment skid we have commissioned since our genesis. We engineer infrastructure parameters so your business executes safely."
              </p>
              
              <div className="pt-4">
                <div className="text-sm font-bold tracking-wide text-white font-sans">Mr. Pradeep Upadhyay</div>
                <div className="text-[10px] text-[#A27273] font-mono uppercase tracking-widest mt-0.5">
                  Managing Director · SP Engineering Core
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          INFINITE LOGO/CLIENT MARQUEE
         ======================================================== */}
      <div className="relative z-10 mb-32 overflow-hidden select-none opacity-40 pointer-events-none">
        <div className="flex space-x-6 animate-marquee mb-4">
          {Array(2).fill(["APEX INDUSTRIES", "CHAKAN LOGISTICS", "TITAN METRO CORE", "NEXUS REFINERIES", "MUMBAI FUEL HUB"]).flat().map((item, i) => (
            <div key={i} className="px-8 py-4 border border-[#EBCDCB]/10 bg-[#160E0E] text-white font-mono text-[10px] uppercase tracking-[0.4em]">
              {item}
            </div>
          ))}
        </div>
        <div className="flex space-x-6 animate-marquee--reverse">
          {Array(2).fill(["VANGUARD LABS", "LOTUS INFRASTRUCTURE", "GODREJ ASSETS", "SIEMENS THERMAL", "L&T COMPLIANT"]).flat().map((item, i) => (
            <div key={i} className="px-8 py-4 border border-[#EBCDCB]/10 bg-[#160E0E] text-white font-mono text-[10px] uppercase tracking-[0.4em]">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================
          FINAL TERMINAL CTA BANNER
         ======================================================== */}
      <div className="relative z-10 bg-gradient-to-b from-[#160E0E]/80 to-[#221011]/80 border border-[#981618]/40 p-10 sm:p-16 rounded-sm text-center shadow-[0_0_50px_rgba(152,22,24,0.15)] mb-12">
        <h2 className="text-xl sm:text-3xl font-bold text-white tracking-tight uppercase mb-4">
          Partner With Experience & Engineering Excellence
        </h2>
        <p className="text-xs sm:text-sm text-[#A27273] max-w-xl mx-auto mb-8 font-light leading-relaxed">
          Unlock high-grade parametric calibration for your next industrial infrastructure asset deployment. Contact our executive office.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/contact" className="px-8 py-3.5 bg-[#981618] text-white font-semibold text-xs tracking-widest uppercase rounded-sm hover:bg-[#7d1214] transition-colors">
            Start Your Project Blueprint
          </a>
        </div>
      </div>

    </Section>
  );
}