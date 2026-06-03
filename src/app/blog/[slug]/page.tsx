"use client";

import { Section } from "@/components/layout/Section";
import React, { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Calendar, Clock, ArrowLeft, ShieldCheck, CheckCircle, Loader2 } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function BlogPostPage() {
  const params = useParams();
  const slug = (params?.slug as string) || "ART-01";

  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Dynamic reading scroll progress bar asset
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  // Fallback structural data loop matching your specific entry IDs
  const article = {
    slug: slug || "ART-01",
    title:
      slug === "ART-05"
        ? "How AMC Services Reduce Maintenance Costs"
        : "The Future of Industrial HVAC Systems",
    category: slug === "ART-05" ? "Maintenance & AMC" : "HVAC Systems",
    date: slug === "ART-05" ? "APRIL 15, 2026" : "MAY 26, 2026",
    readTime: slug === "ART-05" ? "05 MIN READ" : "08 MIN READ",
    author: "Mr. Pradeep Upadhyay",
    authorTitle: "Managing Director, SP Engineering",
    intro:
      slug === "ART-05"
        ? "Quantifying how continuous parametric telemetry loops reduce multi-line component downtime variances by up to 42% across critical industrial assets."
        : "An executive evaluation of thermodynamic parametric calibration, closed cleanroom pressure loops, and integrated smart-sensor automation matrices inside heavy automotive manufacturing plants.",
    heroImg:
      slug === "ART-05"
        ? "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1600&q=80"
        : "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80",
    metrics:
      slug === "ART-05"
        ? [
            { value: "42%", label: "Downtime Minimization" },
            { value: "24/7", label: "Telemetry Stability" },
          ]
        : [
            { value: "42%", label: "Carbon Minimization" },
            { value: "450K+", label: "CFM Air Flow Balancing" },
          ],
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail("");
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1200);
  };

  return (
    <Section
      eyebrow={`MANIFEST // ${article.category}`}
      title={article.title}
      description={article.intro}
      className="relative min-h-screen bg-[#160E0E] text-[#EBCDCB] pb-24"
    >
      {/* Dynamic reading timeline tracking gauge */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#981618] z-50 origin-left shadow-[0_0_10px_#981618]"
        style={{ scaleX }}
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
        {/* LEFT COLUMN: CORE DOCUMENTATION DISPLAY LAYOUT */}
        <div className="lg:col-span-8 space-y-8 font-sans text-sm sm:text-base leading-relaxed text-[#A27273] font-light">
          {/* Main Context Image Banner */}
          <div className="relative aspect-[16/10] bg-neutral-900 border border-white/10 rounded-sm overflow-hidden shadow-xl">
            <img
              src={article.heroImg}
              alt={article.title}
              className="w-full h-full object-cover grayscale brightness-90"
            />
          </div>

          {/* Article Detailed Content Text Blocks */}
          <div className="space-y-6 pt-4">
            <p>
              Industrial scaling configurations require precise parametric telemetry tracking to
              eliminate field failure loops entirely. When implementing heavy utility grids inside
              volatile operating environments, continuous load tracking protects equipment
              lifespans.
            </p>

            <h3 className="text-lg font-bold text-white uppercase tracking-wide pt-2">
              01 // Parametric Validation Analysis
            </h3>

            <p>
              By isolating dynamic performance values, estimating teams can map energy optimization
              curves accurately. Following certified regulatory guidelines ensures systems handle
              variable draws while remaining fully safe and compliant.
            </p>
          </div>

          {/* Metric Performance Data Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {article.metrics.map((m, i) => (
              <div key={i} className="p-5 bg-neutral-950/60 border border-white/5 rounded-sm">
                <span className="block text-2xl sm:text-3xl font-black font-mono text-white tracking-tight mb-1">
                  {m.value}
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#A27273] font-bold">
                  {m.label}
                </span>
              </div>
            ))}
          </div>

          {/* Compliance Specs Panel Container */}
          <div className="border border-white/10 bg-[#160E0E]/50 p-6 rounded-sm space-y-4">
            <div className="flex items-center gap-2 text-white font-bold text-xs uppercase font-mono tracking-widest border-b border-white/5 pb-2">
              <ShieldCheck className="w-4 h-4 text-[#981618]" /> SYSTEM INTEGRITY VERIFICATION
            </div>
            <ul className="text-xs sm:text-sm space-y-2 list-none font-light">
              <li className="flex items-start gap-2">
                <span className="text-[#981618] font-bold font-mono">■</span> Direct telemetry loop
                integration matching active Modbus backbones.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#981618] font-bold font-mono">■</span> Rigorous pressure
                testing following international ISO compliance mandates.
              </li>
            </ul>
          </div>

          {/* Back to Blog Hub Link */}
          <div className="pt-8 border-t border-white/5">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-white hover:text-[#981618] uppercase tracking-wider"
            >
              <ArrowLeft className="w-4 h-4 text-[#981618]" /> Back To Insights Manifest
            </Link>
          </div>
        </div>

        {/* RIGHT COLUMN: EXECUTIVE PANEL & TELEMETRY INSIGHTS */}
        <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-28">
          {/* Author Specification Details Block */}
          <div className="p-6 bg-[#160E0E] border border-white/10 rounded-sm space-y-4">
            <span className="text-[9px] font-mono font-black text-[#981618] tracking-widest block uppercase">
              DOCUMENT OWNER
            </span>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#981618]/10 border border-[#981618]/30 flex items-center justify-center text-[#981618] font-mono text-sm font-bold">
                SP
              </div>
              <div>
                <span className="block text-xs font-bold text-white uppercase tracking-wide">
                  {article.author}
                </span>
                <span className="block text-[10px] text-[#A27273] font-mono">
                  {article.authorTitle}
                </span>
              </div>
            </div>
          </div>

          {/* Telemetry Tracking Status Block */}
          <div className="p-5 border border-white/5 bg-neutral-950/20 rounded-sm text-xs font-mono space-y-2.5">
            <span className="text-[9px] uppercase tracking-widest font-black text-[#981618] block mb-1">
              SYSTEM META STATUS
            </span>
            <div className="flex justify-between border-b border-white/5 pb-1">
              <span>• Registry Token:</span>{" "}
              <span className="text-white font-bold">{article.slug}</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-1">
              <span>• System Loop:</span> <span className="text-green-500 font-bold">ONLINE</span>
            </div>
            <div className="flex justify-between">
              <span>• Safety Sync:</span> <span className="text-green-500 font-bold">STABLE</span>
            </div>
          </div>

          {/* Slim Subscriber Data Field Box */}
          <div className="bg-[#160E0E] border border-white/10 p-6 rounded-sm space-y-4">
            <h4 className="text-xs font-bold uppercase text-white tracking-wider">
              Stay Updated With Engineering Insights
            </h4>
            <form onSubmit={handleSubscribe} className="space-y-2 relative">
              <input
                type="email"
                required
                placeholder="Corporate Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting || isSuccess}
                className="w-full bg-[#160E0E] border border-white/10 rounded-sm px-3 py-2 text-white focus:outline-none focus:border-[#981618] text-xs font-mono disabled:opacity-50 uppercase"
              />
              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className="w-full py-2 bg-[#981618] text-white font-bold text-xs uppercase tracking-widest rounded-sm transition-colors"
              >
                {isSubmitting ? (
                  <Loader2 className="w-3.5 h-3.5 animate-spin mx-auto" />
                ) : (
                  "Subscribe Feed"
                )}
              </button>

              {isSuccess && (
                <div className="absolute inset-0 bg-[#160E0E] border border-green-900 rounded-sm flex items-center justify-center text-center px-4 z-20">
                  <span className="text-[10px] font-mono text-white uppercase tracking-wider">
                    Configured.
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Terminal Concluding System Callout Banner */}
      <div className="relative bg-gradient-to-b from-[#160E0E] to-[#201011] border border-[#981618]/30 p-8 sm:p-12 rounded-sm text-center shadow-lg mt-24 max-w-7xl mx-auto z-10">
        <h2 className="text-lg sm:text-2xl font-black uppercase text-white tracking-tight mb-4">
          NEED PROFESSIONAL ENGINEERING SOLUTIONS FOR YOUR FACILITY?
        </h2>
        <a
          href="/contact"
          className="inline-block px-8 py-3.5 bg-[#981618] text-white font-bold text-xs tracking-widest uppercase rounded-sm"
        >
          Request Site Consultation Matrix
        </a>
      </div>
    </Section>
  );
}
