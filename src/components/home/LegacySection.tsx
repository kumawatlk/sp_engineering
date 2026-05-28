import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Award, ShieldCheck, Users, Briefcase } from "lucide-react";
import { Link } from "@tanstack/react-router";
import ownerimg from "@/assets/owner.jpeg";
const stats = [
  { label: "Years Experience", value: "15+", icon: Award },
  { label: "Industrial Expertise", value: "Core", icon: Briefcase },
  { label: "Trusted Clients", value: "85+", icon: Users },
  { label: "Projects Delivered", value: "240+", icon: ShieldCheck },
];

export function LegacySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax effect for the background industrial image
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center justify-center py-24 overflow-hidden bg-[#160E0E]"
    >
      {/* 1. PARALLAX INDUSTRIAL BACKGROUND */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 z-0 opacity-30"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#160E0E] via-[#160E0E]/80 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80" 
          alt="Industrial Background"
          className="w-full h-[120%] object-cover grayscale"
        />
      </motion.div>

      {/* 2. FLOATING GLOW PARTICLES */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i,
            }}
            className="absolute w-1 h-1 bg-[#981618] rounded-full blur-sm"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: CONTENT (Glassmorphism) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Ambient Glow behind content */}
            <div className="absolute -inset-10 bg-[#981618] opacity-[0.05] blur-[100px] rounded-full pointer-events-none" />

            <div className="relative bg-[#160E0E]/40 border border-[#EBCDCB]/10 backdrop-blur-xl p-8 sm:p-12 rounded-sm shadow-2xl">
              <motion.span 
                initial={{ opacity: 0, tracking: "0.1em" }}
                whileInView={{ opacity: 1, tracking: "0.3em" }}
                className="text-[10px] uppercase tracking-[0.3em] text-[#981618] font-black block mb-4"
              >
                Leadership & Vision
              </motion.span>
              
              <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                Driven By Experience, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EBCDCB] to-[#A27273]">
                  Built On Trust
                </span>
              </h2>

              <p className="text-[#A27273] text-sm sm:text-base leading-relaxed mb-10 font-light max-w-lg">
                SP Engineering is built on years of industrial expertise, technical excellence, and commitment to quality engineering solutions across HVAC, Cryogenic, Fire Fighting, and Electrical services.
              </p>

              {/* HIGHLIGHT CARDS GRID */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                {stats.map((stat, i) => (
                  <div key={i} className="p-4 bg-[#160E0E]/60 border border-[#EBCDCB]/5 rounded-sm group hover:border-[#981618]/40 transition-colors">
                    <stat.icon className="w-5 h-5 text-[#981618] mb-2" />
                    <div className="text-lg font-bold text-white font-mono">{stat.value}</div>
                    <div className="text-[9px] uppercase tracking-wider text-[#A27273]">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Link
                to="/our-legacy"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#981618] text-white text-xs font-bold uppercase tracking-[0.2em] rounded-sm group overflow-hidden relative"
              >
                <span className="relative z-10">Explore Our Legacy</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>

          {/* RIGHT: FOUNDER IMAGE AREA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Metallic Decorative Frame */}
            <div className="absolute -inset-4 border border-[#EBCDCB]/5 rounded-sm pointer-events-none group-hover:border-[#981618]/20 transition-colors duration-500" />
            
            {/* The Image Container */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
              {/* Red glow highlight on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#160E0E] via-transparent to-transparent z-10" />
              <div className="absolute inset-0 bg-[#981618] mix-blend-overlay opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10" />
              
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                // src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80" 
                src={ownerimg} 
                alt="Founder of SP Engineering"
                className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700"
              />

              {/* Founder Tag */}
              <div className="absolute bottom-8 left-8 z-20">
                <div className="text-white font-bold text-xl tracking-wide">Mr. Pradeep Upadhyay</div>
                <div className="text-[#981618] text-xs font-mono uppercase tracking-widest font-bold">Managing Director</div>
              </div>
            </div>

            {/* Accent Elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-r-2 border-b-2 border-[#981618] pointer-events-none" />
            <div className="absolute -top-6 -left-6 w-12 h-12 border-l-2 border-t-2 border-[#EBCDCB]/20 pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}