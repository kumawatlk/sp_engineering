"use client";

import { Section } from "@/components/layout/Section";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wind, Snowflake, Flame, Zap, Layers, Eye, Play, MapPin, X } from "lucide-react";

// --- TECHNICAL DATA STRUCTURES ---

const CATEGORIES = [
  "All",
  "HVAC Systems",
  "Cryogenic Services",
  "Fire Fighting",
  "Electrical Services",
];

const GALLERY_ITEMS = [
  // HVAC
  {
    id: 1,
    title: "Centralized Chilled Water Loops",
    category: "HVAC Systems",
    section: "HVAC Engineering",
    location: "Chakan Industrial Zone",
    desc: "Heavy-duty chiller plant manifolds engineered for high-volume automated thermal regulation.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Precision Cleanroom AHU/FCU Setup",
    category: "HVAC Systems",
    section: "HVAC Engineering",
    location: "Pune Biotech SEZ",
    desc: "Positive pressure air handling layout optimized for strict particulate filtration controls.",
    img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Industrial Copper Piping Network",
    category: "HVAC Systems",
    section: "HVAC Engineering",
    location: "Nashik Manufacturing Plant",
    desc: "High-grade calibrated multi-line refrigerant transit pipelines.",
    img: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=800&q=80",
  },

  // CRYOGENIC
  {
    id: 4,
    title: "Vacuum Jacketed VIP Pipeline Arrays",
    category: "Cryogenic Services",
    section: "Cryogenic Engineering",
    location: "Mumbai Chemical Port",
    desc: "Ultra-low temperature liquid storage feed line structures handling volatile sub-zero media.",
    img: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "LOX/LIN Cryogenic Containment Tanks",
    category: "Cryogenic Services",
    section: "Cryogenic Engineering",
    location: "Dahej Gas Infrastructure",
    desc: "High-capacity vacuum insulated pressure vessels for storage loops.",
    img: "https://images.unsplash.com/photo-1535557142533-b5e1cc6e2a5d?auto=format&fit=crop&w=800&q=80",
  },

  // FIRE FIGHTING
  {
    id: 6,
    title: "Automated High-Velocity Hydrant Grid",
    category: "Fire Fighting",
    section: "Fire Fighting Systems",
    location: "Nagpur Fulfillment Hub",
    desc: "Autonomous flame signature zone mapping water deluge network installations.",
    img: "https://images.unsplash.com/photo-1599740831464-5cbe1d14f87a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    title: "CO2 Total Flooding Pump Setup",
    category: "Fire Fighting",
    section: "Fire Fighting Systems",
    location: "Navi Mumbai Tech Core",
    desc: "Zero-latency automated chemical suppression manifold arrays for power cores.",
    img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
  },

  // ELECTRICAL
  {
    id: 8,
    title: "Heavy Duty HT/LT Distribution Panels",
    category: "Electrical Services",
    section: "Electrical Engineering",
    location: "Aurangabad Heavy Engineering",
    desc: "High-voltage synchronization main distribution switchgear nodes built for massive factory draws.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    title: "Industrial Grid Earthing & Cabling",
    category: "Electrical Services",
    section: "Electrical Engineering",
    location: "Thane Power Substation",
    desc: "Calibrated low-resistance protection grounding grids and cable tray arrays.",
    img: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=800&q=80",
  },
];

const VIDEOS = [
  {
    id: 1,
    title: "LOX Gas Pipeline Pressure Test Sequence",
    duration: "03:45",
    category: "Cryogenics",
  },
  { id: 2, title: "450,000 CFM AHU Air Balancing Operation", duration: "02:15", category: "HVAC" },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxItem, setLightboxItem] = useState<(typeof GALLERY_ITEMS)[0] | null>(null);

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => activeFilter === "All" || item.category === activeFilter,
  );

  return (
    <Section
      eyebrow="SP ENGINEERING EXECUTION RECORDS"
      title="Engineering Excellence Gallery"
      description="Explore our HVAC, Cryogenic, Fire Fighting, and Electrical engineering project executions."
      className="relative min-h-screen bg-[#160E0E] text-[#EBCDCB] overflow-hidden pb-32"
    >
      {/* ========================================================
          AMBIENT BLUEPRINT FILTERS & FLOATING PARTICLES
         ======================================================== */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#EBCDCB 1px, transparent 1px), linear-gradient(90deg, #EBCDCB 1px, transparent 1px)`,
            backgroundSize: "55px 55px",
          }}
        />
        <div className="absolute top-[15%] left-[-10%] w-[55vw] h-[55vw] rounded-full bg-[#981618] opacity-[0.07] blur-[150px]" />
        <div className="absolute bottom-[30%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#A27273] opacity-[0.05] blur-[130px]" />
      </div>

      {/* ========================================================
          DYNAMIC FILTRATION MATRIX CONTROLLERS
         ======================================================== */}
      <div className="relative z-10 flex flex-wrap gap-2 justify-center mb-16 bg-[#160E0E]/60 border border-[#EBCDCB]/10 p-2 rounded-sm backdrop-blur-md max-w-4xl mx-auto">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-5 py-2.5 rounded-sm text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
              activeFilter === cat
                ? "bg-[#981618] text-white shadow-[0_0_15px_rgba(152,22,24,0.4)] border-none"
                : "text-[#A27273] hover:text-white hover:bg-white/5"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ========================================================
          ULTRA-PREMIUM STRUCTURAL GALLERY MASONRY MATRIX
         ======================================================== */}
      <div className="relative z-10 mb-32">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-[#160E0E] border border-[#EBCDCB]/10 rounded-sm overflow-hidden group hover:border-[#981618]/50 transition-all duration-300 flex flex-col justify-between relative"
              >
                {/* Visual Cover Frame */}
                <div className="relative h-64 w-full overflow-hidden bg-neutral-900">
                  <div className="absolute inset-0 bg-[#981618]/10 mix-blend-color z-10 group-hover:opacity-0 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#160E0E] via-transparent to-transparent z-10 pointer-events-none" />

                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale brightness-[0.85] group-hover:grayscale-0 group-hover:scale-103 group-hover:brightness-95 transition-all duration-500"
                  />

                  {/* Trigger Action Diagnostic overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <button
                      onClick={() => setLightboxItem(item)}
                      className="p-3 bg-[#981618] text-white rounded-full shadow-[0_0_20px_#981618] hover:scale-105 transition-transform"
                      aria-label="Launch visual inspection matrix"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                  </div>

                  <span className="absolute top-4 left-4 bg-[#160E0E]/90 border border-[#981618]/40 px-2.5 py-1 text-[9px] font-mono uppercase tracking-widest font-bold text-white z-20">
                    {item.category}
                  </span>
                </div>

                {/* Content Info Sheet Layer */}
                <div className="p-6 space-y-3 relative z-10">
                  <div className="flex items-center text-[10px] font-mono text-[#A27273] uppercase tracking-wider gap-1.5">
                    <MapPin className="w-3 h-3 text-[#981618]" /> {item.location}
                  </div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wide group-hover:text-[#981618] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#A27273] font-light leading-relaxed line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ========================================================
          DISCIPLINE DISTINCT WATERMARK BACKGROUND LABELS
         ======================================================== */}
      {activeFilter !== "All" && (
        <div className="w-full text-center overflow-hidden select-none pointer-events-none mb-24 opacity-[0.02]">
          <span
            className="text-[14vw] font-black uppercase font-sans tracking-tight block leading-none"
            style={{ WebkitTextStroke: "1px #981618", WebkitTextFillColor: "transparent" }}
          >
            {activeFilter}
          </span>
        </div>
      )}

      {/* ========================================================
          ENTERPRISE INDUSTRIAL VIDEO PLACEHOLDERS
         ======================================================== */}
      <div className="relative z-10 mb-32">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase font-mono font-black tracking-[0.3em] text-[#981618] block mb-2">
            TELEMETRY LOOPS
          </span>
          <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white">
            FIELD TESTING BROADCASTS
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {VIDEOS.map((video) => (
            <div
              key={video.id}
              className="bg-[#160E0E]/60 border border-[#EBCDCB]/10 p-6 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-6 group hover:border-[#981618]/40 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#981618]/10 border border-[#981618]/30 text-[#981618] group-hover:bg-[#981618] group-hover:text-white transition-all rounded-sm flex items-center justify-center flex-shrink-0 cursor-pointer shadow-md">
                  <Play className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <span className="text-[9px] font-mono text-[#981618] font-bold uppercase tracking-widest block mb-0.5">
                    {video.category} LOG
                  </span>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                    {video.title}
                  </h4>
                </div>
              </div>
              <span className="text-xs font-mono bg-neutral-900 border border-white/5 text-[#A27273] px-3 py-1 rounded-sm">
                {video.duration} Mins
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================
          INFINITE LOGO/CLIENT TRACK MARQUEE
         ======================================================== */}
      <div className="relative z-10 mb-32 overflow-hidden select-none opacity-40 pointer-events-none w-full">
        <div className="flex space-x-6 animate-marquee mb-4">
          {Array(2)
            .fill([
              "APEX CHEMICALS",
              "TITAN MONITORS",
              "NEXUS CORES",
              "CHAKAN METRICS",
              "MUMBAI REFINERY",
            ])
            .flat()
            .map((item, i) => (
              <div
                key={i}
                className="px-8 py-4 border border-[#EBCDCB]/10 bg-[#160E0E] text-white font-mono text-[10px] uppercase tracking-[0.4em]"
              >
                {item}
              </div>
            ))}
        </div>
      </div>

      {/* ========================================================
          TERMINAL ACTION CTA ROW
         ======================================================== */}
      <div className="relative z-10 bg-gradient-to-b from-[#160E0E]/90 to-[#231112]/90 border border-[#981618]/40 p-10 sm:p-16 rounded-sm text-center shadow-2xl overflow-hidden mb-12">
        <h2 className="text-xl sm:text-3xl font-black uppercase text-white tracking-tight mb-4 max-w-2xl mx-auto leading-tight">
          LET'S BUILD YOUR NEXT ENGINEERING ASSET MATRIX
        </h2>
        <p className="text-xs sm:text-sm text-[#A27273] max-w-xl mx-auto mb-8 font-light">
          Deploy certified zero-variance procurement arrays under structural engineer oversight
          workflows.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/contact"
            className="px-8 py-3.5 bg-[#981618] text-white font-bold text-xs tracking-widest uppercase rounded-sm shadow-[0_4px_20px_rgba(152,22,24,0.4)]"
          >
            Get Free Consultation
          </a>
        </div>
      </div>

      {/* ========================================================
          DIAGNOSTICS SPECIFICATION LIGHTBOX WINDOW
         ======================================================== */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.97, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.97, y: 15 }}
              className="bg-[#160E0E] border border-[#981618]/40 max-w-2xl w-full rounded-sm p-6 sm:p-8 space-y-6 overflow-y-auto max-h-[90vh] relative shadow-2xl"
            >
              <div className="flex justify-between items-start border-b border-white/10 pb-4">
                <div>
                  <span className="text-[9px] font-mono font-black uppercase bg-[#981618] text-white px-2.5 py-1 rounded-sm tracking-widest">
                    DIAGNOSTIC MATRIX
                  </span>
                  <h4 className="text-lg sm:text-xl font-black uppercase tracking-tight text-white mt-3">
                    {lightboxItem.title}
                  </h4>
                </div>
                <button
                  onClick={() => setLightboxItem(null)}
                  className="text-[#A27273] hover:text-white border border-white/10 p-2 hover:border-[#981618] transition-colors rounded-sm"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="aspect-video w-full rounded-sm overflow-hidden bg-neutral-900 border border-white/5">
                <img
                  src={lightboxItem.img}
                  alt={lightboxItem.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <p className="text-[#A27273] font-light leading-relaxed">{lightboxItem.desc}</p>
                <div className="p-4 bg-[#160E0E] border border-white/5 grid grid-cols-2 gap-2 text-xs font-mono">
                  <div>
                    <span className="text-[#A27273]">Anchor Node:</span>{" "}
                    <span className="text-white">{lightboxItem.location}</span>
                  </div>
                  <div>
                    <span className="text-[#A27273]">Status Sequence:</span>{" "}
                    <span className="text-green-500 font-bold">Verified</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
