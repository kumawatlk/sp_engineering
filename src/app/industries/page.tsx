"use client";

import { Section } from "@/components/layout/Section";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Factory,
  Building2,
  Home,
  Hospital,
  Warehouse,
  Hotel,
  ShoppingBag,
  Microscope,
  Utensils,
  School,
  FlameKindling,
  ShieldCheck,
  Cpu,
  Clock,
  HardHat,
  Users,
  ChevronDown,
  ArrowRight,
  Wind,
  Snowflake,
  Flame,
  Zap,
} from "lucide-react";

// --- DATA STRUCTURES ---

const STATS = [
  { label: "Industries Served", value: "12+" },
  { label: "Projects Completed", value: "240+" },
  { label: "Industrial Clients", value: "85+" },
  { label: "Expert Engineers", value: "45+" },
];

const INDUSTRIES_GRID = [
  {
    title: "Industrial Plants",
    icon: Factory,
    desc: "Heavy-duty infrastructure for refineries and chemical units.",
    services: "Cryogenics, High-Pressure Piping, Fire Suppression",
  },
  {
    title: "Healthcare & Hospitals",
    icon: Hospital,
    desc: "Critical climate control and specialized gas pipeline systems.",
    services: "Medical HVAC, Oxygen Plants, Cleanroom Ventilation",
  },
  {
    title: "Commercial Buildings",
    icon: Building2,
    desc: "Energy-efficient centralized cooling for modern workspaces.",
    services: "VRF Systems, Electrical Panels, Fire Hydrants",
  },
  {
    title: "Warehouses & Logistics",
    icon: Warehouse,
    desc: "Large-scale ventilation and safety arrays for storage hubs.",
    services: "Smoke Extraction, High-bay Lighting, Fire Safety",
  },
  {
    title: "Manufacturing Units",
    icon: Cpu,
    desc: "Precision engineering for automotive and electronic assembly.",
    services: "Process Cooling, Power Distribution, AMC Support",
  },
  {
    title: "Food Processing",
    icon: Utensils,
    desc: "Hygienic and temperature-controlled environments.",
    services: "Cold Storage, Stainless Steel Piping, Ventilation",
  },
  {
    title: "Residential Infrastructure",
    icon: Home,
    desc: "Premium firefighting and electrical setups for townships.",
    services: "Internal Fire Safety, Meter Rooms, Pumping Systems",
  },
  {
    title: "Hotels & Hospitality",
    icon: Hotel,
    desc: "Uninterrupted luxury through robust utility management.",
    services: "Centralized HVAC, Emergency Lighting, Fire Sprinklers",
  },
  {
    title: "Laboratories",
    icon: Microscope,
    desc: "Ultra-precise atmospheric control for R&D centers.",
    services: "Exhaust Systems, Cryo-Gas Piping, Specialized Electrical",
  },
  {
    title: "Malls & Retail",
    icon: ShoppingBag,
    desc: "High-occupancy safety and comfort engineering.",
    services: "Smoke Management, HVAC, Integrated Security",
  },
  {
    title: "Offices & Institutions",
    icon: School,
    desc: "Sustainable and smart infrastructure for learning.",
    services: "Energy Audit, Low Voltage Cabling, Ventilation",
  },
  {
    title: "Gas Plants",
    icon: FlameKindling,
    desc: "Hazardous environment engineering with zero-fail tolerance.",
    services: "Explosion Proofing, Cryo-Manifolds, Fire Deluge",
  },
];

const SERVICE_APPLICATIONS = [
  {
    id: "hvac",
    title: "HVAC",
    icon: Wind,
    content:
      "Centralized Chilled Water Plants, VRF Systems, Ducting, and Precision Cooling for Data Centers.",
  },
  {
    id: "cryo",
    title: "Cryogenic",
    icon: Snowflake,
    content: "VIV Pipelines, Liquid Oxygen Tanks, Vaporizers, and Vacuum Jacketed Valve Boxes.",
  },
  {
    id: "fire",
    title: "Fire Fighting",
    icon: Flame,
    content: "Hydrant Systems, Automated Sprinklers, CO2 Flooding, and Fire Alarm Integration.",
  },
  {
    id: "elec",
    title: "Electrical",
    icon: Zap,
    content: "HT/LT Panels, Transformer Installation, Industrial Wiring, and Lighting Protection.",
  },
];

const TIMELINE = [
  { stage: "Consultation", desc: "Requirement analysis and site assessment." },
  { stage: "Planning", desc: "Detailed engineering design and blueprinting." },
  { stage: "Installation", desc: "Precision execution by certified technical teams." },
  { stage: "Testing", desc: "Rigorous quality checks and stress testing." },
  { stage: "Maintenance", desc: "Ongoing AMC and technical support." },
];

const FAQS = [
  {
    q: "Which industries do you specialize in?",
    a: "We specialize in Industrial Manufacturing, Healthcare, Commercial Real Estate, and Food Processing, though our systems are scalable for any enterprise sector.",
  },
  {
    q: "Do you handle large industrial projects?",
    a: "Yes, SP Engineering is equipped to handle turnkey industrial projects, from greenfield gas plants to mega manufacturing units.",
  },
  {
    q: "Are AMC services available?",
    a: "We provide comprehensive Annual Maintenance Contracts to ensure your systems remain compliant and efficient 24/7.",
  },
  {
    q: "Do you provide customized engineering solutions?",
    a: "Every project is unique. Our design team creates bespoke blueprints tailored specifically to your site's thermal and load requirements.",
  },
  {
    q: "Are your services safety compliant?",
    a: "We adhere strictly to NBC, ISO, and industry-specific safety standards (like ASHRAE for HVAC or NFPA for Fire Fighting).",
  },
];

// --- COMPONENTS ---

const CardGradientBorder = ({ children }: { children: React.ReactNode }) => (
  <div className="relative group p-[1px] rounded-sm overflow-hidden bg-[#EBCDCB]/10 hover:bg-gradient-to-br hover:from-[#981618] hover:to-[#A27273] transition-all duration-500">
    <div className="bg-[#160E0E] rounded-sm h-full w-full">{children}</div>
  </div>
);

export default function IndustriesPage() {
  const [activeTab, setActiveTab] = useState("hvac");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

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
      eyebrow="Market Sectors"
      title="Industries We Serve"
      description="Delivering reliable engineering solutions across industrial, commercial, healthcare, residential, and manufacturing sectors."
      className="bg-[#160E0E] text-[#EBCDCB] overflow-hidden"
    >
      {/* 1. CINEMATIC BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(#EBCDCB 1px, transparent 1px), linear-gradient(90deg, #EBCDCB 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_20%,#9816181a_0%,transparent_50%)]" />
      </div>

      {/* 2. OVERVIEW & COUNTERS */}
      <div className="relative z-10 mt-12 grid lg:grid-cols-2 gap-12 items-center mb-32">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="p-8 sm:p-12 bg-[#160E0E]/40 border border-[#EBCDCB]/10 backdrop-blur-xl rounded-sm"
        >
          <p className="text-lg sm:text-xl font-light leading-relaxed mb-8">
            <span className="text-white font-semibold">SP Engineering</span> provides specialized
            HVAC, Cryogenic, Fire Fighting, and Electrical solutions for diverse industries with
            strong focus on safety, performance, and quality execution.
          </p>
          <div className="grid grid-cols-2 gap-6">
            {STATS.map((stat, i) => (
              <div key={i} className="border-l-2 border-[#981618] pl-4">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-[#A27273] font-bold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="flex justify-center lg:justify-end gap-4 relative">
          <div className="absolute inset-0 bg-[#981618] opacity-[0.05] blur-[100px] rounded-full" />
          <div className="grid grid-cols-2 gap-4">
            <a
              href="#explore"
              className="px-8 py-4 bg-[#981618] text-white font-bold text-xs uppercase tracking-widest shadow-[0_0_20px_#98161833] hover:shadow-[0_0_40px_#98161866] transition-all"
            >
              Explore Services
            </a>
            <a
              href="/contact"
              className="px-8 py-4 bg-transparent border border-[#EBCDCB]/20 text-white font-bold text-xs uppercase tracking-widest hover:bg-[#EBCDCB]/5 transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* 3. INDUSTRIES GRID */}
      <div id="explore" className="relative z-10 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-[0.3em] text-[#981618] font-black mb-4">
            Enterprise Sectors
          </h2>
          <p className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Industrial Strength Coverage
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES_GRID.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <CardGradientBorder>
                  <div className="p-8 h-full flex flex-col group/item relative overflow-hidden">
                    <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover/item:opacity-[0.07] transition-opacity duration-500">
                      <Icon size={120} />
                    </div>
                    <div className="w-12 h-12 bg-[#9816181a] border border-[#98161833] rounded-sm flex items-center justify-center text-[#981618] mb-6 group-hover/item:bg-[#981618] group-hover/item:text-white transition-all duration-300">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 tracking-wide">
                      {industry.title}
                    </h3>
                    <p className="text-xs text-[#A27273] leading-relaxed mb-6 font-light">
                      {industry.desc}
                    </p>
                    <div className="mt-auto pt-4 border-t border-[#EBCDCB]/5 text-[10px] text-white/40 uppercase tracking-widest font-mono">
                      {industry.services}
                    </div>
                  </div>
                </CardGradientBorder>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* 4. SERVICE APPLICATION (INTERACTIVE TABS) */}
      <div className="relative z-10 mb-32 bg-[#160E0E]/60 border border-[#EBCDCB]/10 p-8 sm:p-12 rounded-sm backdrop-blur-md">
        <div className="text-center mb-12">
          <h2 className="text-xs uppercase tracking-[0.3em] text-[#981618] font-black mb-4">
            Core Applications
          </h2>
          <p className="text-xl sm:text-3xl font-bold text-white">
            System Deployments by Discipline
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {SERVICE_APPLICATIONS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-widest transition-all ${
                activeTab === tab.id
                  ? "bg-[#981618] text-white shadow-[0_0_15px_#9816184d]"
                  : "bg-[#160E0E] text-[#A27273] border border-[#EBCDCB]/10 hover:border-[#98161833]"
              }`}
            >
              <div className="flex items-center gap-2">
                <tab.icon size={16} /> {tab.title}
              </div>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white uppercase tracking-wider">
                {SERVICE_APPLICATIONS.find((t) => t.id === activeTab)?.title} Applications
              </h3>
              <p className="text-[#A27273] leading-relaxed">
                {SERVICE_APPLICATIONS.find((t) => t.id === activeTab)?.content}
              </p>
              <div className="flex items-center gap-4 text-xs font-mono text-[#981618] font-bold uppercase tracking-[0.2em]">
                <ShieldCheck size={20} /> Zero-Fail Safety Standards
              </div>
            </div>
            <div className="aspect-video bg-neutral-900 border border-[#EBCDCB]/10 rounded-sm relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#9816181a] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute inset-0 flex items-center justify-center font-mono text-[10px] text-white/20 tracking-tighter uppercase">
                [ Industrial Schematic Visual ]
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 5. PROCESS TIMELINE */}
      <div className="relative z-10 mb-32">
        <div className="text-center mb-20">
          <h2 className="text-xs uppercase tracking-[0.3em] text-[#981618] font-black mb-4">
            Engineering Workflow
          </h2>
          <p className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            From Briefing to Maintenance
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#981618] to-transparent" />
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {TIMELINE.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-[#160E0E] p-6 text-center group"
              >
                <div className="w-10 h-10 bg-[#160E0E] border border-[#981618] rounded-full flex items-center justify-center text-white font-mono text-sm mx-auto mb-6 relative z-10 group-hover:bg-[#981618] transition-all shadow-[0_0_10px_#9816184d]">
                  {i + 1}
                </div>
                <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-2">
                  {item.stage}
                </h4>
                <p className="text-[11px] text-[#A27273] leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 6. WHY TRUST US */}
      <div className="relative z-10 mb-32 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: "Skilled Technical Team", icon: HardHat },
          { title: "Industry Compliance", icon: ShieldCheck },
          { title: "Timely Execution", icon: Clock },
          { title: "Modern Equipment", icon: Cpu },
          { title: "Safety Focused", icon: ShieldCheck },
          { title: "Reliable Support", icon: Users },
        ].map((feature, i) => (
          <div
            key={i}
            className="p-8 bg-[#160E0E]/40 border border-[#EBCDCB]/5 hover:border-[#98161833] transition-all rounded-sm flex items-center gap-6 group"
          >
            <div className="text-[#981618] group-hover:scale-110 transition-transform">
              <feature.icon size={32} />
            </div>
            <h4 className="text-sm font-bold text-white uppercase tracking-widest">
              {feature.title}
            </h4>
          </div>
        ))}
      </div>

      {/* 7. INFINITE CLIENT MARQUEE */}
      <div className="relative z-10 mb-32 overflow-hidden select-none opacity-50">
        <div className="flex space-x-8 animate-marquee mb-4">
          {Array(2)
            .fill(["RELIANCE", "TATA", "GODREJ", "L&T", "SIEMENS", "ADANI"])
            .flat()
            .map((client, i) => (
              <div
                key={i}
                className="px-10 py-6 border border-[#EBCDCB]/10 bg-[#160E0E] text-white font-mono text-xs uppercase tracking-[0.5em] flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500"
              >
                {client}
              </div>
            ))}
        </div>
        <div className="flex space-x-8 animate-marquee--reverse">
          {Array(2)
            .fill(["HOSPITAL CORE", "CHAKAN IND", "APEX FOODS", "TITAN GAS", "METRO RAIL", "NHPC"])
            .flat()
            .map((client, i) => (
              <div
                key={i}
                className="px-10 py-6 border border-[#EBCDCB]/10 bg-[#160E0E] text-white font-mono text-xs uppercase tracking-[0.5em] flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500"
              >
                {client}
              </div>
            ))}
        </div>
      </div>

      {/* 8. FAQ ACCORDION */}
      <div className="relative z-10 max-w-3xl mx-auto mb-32">
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-[0.3em] text-[#981618] font-black mb-4">
            Q&A Matrix
          </h2>
          <p className="text-xl sm:text-3xl font-bold text-white tracking-tight">
            Industry-Specific Resolutions
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className="border border-[#EBCDCB]/10 rounded-sm bg-[#160E0E]/30 overflow-hidden"
            >
              <button
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-[#EBCDCB]/5 transition-all"
              >
                <span className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wider">
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: activeFaq === index ? 180 : 0 }}
                  className="text-[#981618]"
                >
                  <ChevronDown size={18} />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {activeFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pt-2 text-xs text-[#A27273] border-t border-[#EBCDCB]/5 leading-relaxed bg-[#160E0E]/20">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* 9. FINAL CTA BANNER */}
      <div className="relative z-10 bg-gradient-to-b from-[#160E0E]/80 to-[#221011]/80 border border-[#981618]/40 p-12 sm:p-20 rounded-sm text-center shadow-[0_0_50px_#9816181a] mb-20">
        <h2 className="text-2xl sm:text-5xl font-bold text-white tracking-tight mb-6">
          Looking For Engineering Solutions For Your Industry?
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <button className="px-10 py-4 bg-[#981618] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#7a1214] transition-all flex items-center gap-2">
            Request Consultation <ArrowRight size={16} />
          </button>
          <a
            href="/contact"
            className="px-10 py-4 bg-transparent border border-[#EBCDCB]/20 text-white font-bold text-xs uppercase tracking-widest hover:bg-white/5 transition-all"
          >
            Contact SP Engineering
          </a>
        </div>
      </div>
    </Section>
    </>
  );
}
