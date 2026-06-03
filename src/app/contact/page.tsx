"use client";

import { Section } from "@/components/layout/Section";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring, type Variants } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  FileText,
  CheckCircle2,
  Loader2,
  ChevronDown,
  ArrowRight,
  MessageSquare,
  Copy,
  Check,
  ArrowUp,
  Flame,
  Wind,
  Zap,
  Snowflake,
} from "lucide-react";

// --- TYPES & INTERFACES ---
interface FormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  service: string;
  projectType: string;
  location: string;
  message: string;
}

// --- ANIMATION CONFIGURATIONS ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

function Page() {
  // --- STATES ---
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    service: "",
    projectType: "",
    location: "",
    message: "",
  });
  const [activeFocused, setActiveFocused] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // --- SCROLL PROGRESS ---
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- HELPER UTILS ---
  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:5000/api/inquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit inquiry");
      }

      setIsSubmitting(false);
      setSubmitSuccess(true);
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          fullName: "",
          companyName: "",
          email: "",
          phone: "",
          service: "",
          projectType: "",
          location: "",
          message: "",
        });
      }, 4000);
    } catch (err) {
      console.error(err);
      setIsSubmitting(false);
    }
  };

  return (
    <Section
      eyebrow="Contact"
      title="Get In Touch With SP Engineering"
      description="Professional HVAC, Cryogenic, Fire Fighting, and Electrical Engineering Solutions."
      className="relative min-h-screen bg-[#160E0E] text-[#EBCDCB] overflow-x-hidden selection:bg-[#981618] selection:text-white"
    >
      {/* 1. SCROLL PROGRESS INDICATOR */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#981618] z-50 origin-left shadow-[0_0_10px_#981618]"
        style={{ scaleX }}
      />

      {/* 2. BACKGROUND INDUSTRIAL AMBIENCE */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Dynamic Blueprint Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(#EBCDCB 1px, transparent 1px), linear-gradient(90deg, #EBCDCB 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        {/* Cinematic Radial Glows */}
        <div className="absolute top-[10%] left-[-20%] w-[60vw] h-[60vw] rounded-full bg-[#981618] opacity-[0.12] blur-[150px]" />
        <div className="absolute top-[50%] right-[-20%] w-[50vw] h-[50vw] rounded-full bg-[#A27273] opacity-[0.06] blur-[130px]" />
      </div>

      {/* 3. HERO QUICK ACTIONS */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap justify-center gap-4 mt-8 mb-24 relative z-10"
      >
        <a
          href="tel:+918097604693"
          className="px-8 py-4 bg-[#981618] text-white font-medium text-sm rounded-sm shadow-[0_0_20px_rgba(152,22,24,0.3)] hover:shadow-[0_0_35px_rgba(152,22,24,0.6)] transition-all duration-300 border border-[#A27273]/20 flex items-center gap-2 hover:-translate-y-0.5"
        >
          <Phone className="w-4 h-4" /> Call Executive Now
        </a>
        <a
          href="#inquiry-form"
          className="px-8 py-4 bg-[#160E0E]/80 text-[#EBCDCB] font-medium text-sm rounded-sm border border-[#EBCDCB]/20 hover:border-[#981618] transition-all duration-300 backdrop-blur-md flex items-center gap-2 hover:-translate-y-0.5"
        >
          Send Inquiry <ArrowRight className="w-4 h-4" />
        </a>
      </motion.div>

      {/* 4. CONTACT INFO CARDS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-28 relative z-10"
      >
        {/* PHONE CARD */}
        <motion.div
          variants={fadeInUp}
          className="group relative bg-[#160E0E]/40 border border-[#EBCDCB]/10 p-8 rounded-sm backdrop-blur-xl transition-all duration-500 hover:border-[#981618]/50 hover:shadow-[0_0_40px_rgba(152,22,24,0.15)] flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 bg-[#981618]/10 border border-[#981618]/30 flex items-center justify-center rounded-sm text-[#981618] mb-6 group-hover:bg-[#981618] group-hover:text-white transition-all duration-300">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="text-md font-bold tracking-wider uppercase text-white mb-2">
              Voice Comms
            </h3>
            <p className="text-xs text-[#A27273] mb-4">Available for critical escalations</p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <a
                  href="tel:+918097604693"
                  className="text-[#EBCDCB] hover:text-[#981618] font-mono transition-colors"
                >
                  +91 80976 04693
                </a>
                <button
                  onClick={() => handleCopy("+918097604693", "p1")}
                  className="text-[#A27273] hover:text-white transition-colors"
                >
                  {copiedText === "p1" ? (
                    <Check className="w-3.5 h-3.5 text-green-500" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
              <div className="flex items-center justify-between">
                <a
                  href="tel:+918552077798"
                  className="text-[#EBCDCB] hover:text-[#981618] font-mono transition-colors"
                >
                  +91 85520 77798
                </a>
                <button
                  onClick={() => handleCopy("+918552077798", "p2")}
                  className="text-[#A27273] hover:text-white transition-colors"
                >
                  {copiedText === "p2" ? (
                    <Check className="w-3.5 h-3.5 text-green-500" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* EMAIL CARD */}
        <motion.div
          variants={fadeInUp}
          className="group relative bg-[#160E0E]/40 border border-[#EBCDCB]/10 p-8 rounded-sm backdrop-blur-xl transition-all duration-500 hover:border-[#981618]/50 hover:shadow-[0_0_40px_rgba(152,22,24,0.15)] flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 bg-[#981618]/10 border border-[#981618]/30 flex items-center justify-center rounded-sm text-[#981618] mb-6 group-hover:bg-[#981618] group-hover:text-white transition-all duration-300">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="text-md font-bold tracking-wider uppercase text-white mb-2">
              Correspondence
            </h3>
            <p className="text-xs text-[#A27273] mb-4">For formal technical RFQs</p>
            <div className="flex items-center justify-between text-sm">
              <a
                href="mailto:spengineering185@gmail.com"
                className="text-[#EBCDCB] hover:text-[#981618] font-mono break-all text-xs transition-colors"
              >
                spengineering185@gmail.com
              </a>
              <button
                onClick={() => handleCopy("spengineering185@gmail.com", "email")}
                className="text-[#A27273] hover:text-white ml-2 transition-colors"
              >
                {copiedText === "email" ? (
                  <Check className="w-3.5 h-3.5 text-green-500" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </div>
        </motion.div>

        {/* ADDRESS CARD */}
        <motion.div
          variants={fadeInUp}
          className="group relative bg-[#160E0E]/40 border border-[#EBCDCB]/10 p-8 rounded-sm backdrop-blur-xl transition-all duration-500 hover:border-[#981618]/50 hover:shadow-[0_0_40px_rgba(152,22,24,0.15)] flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 bg-[#981618]/10 border border-[#981618]/30 flex items-center justify-center rounded-sm text-[#981618] mb-6 group-hover:bg-[#981618] group-hover:text-white transition-all duration-300">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-md font-bold tracking-wider uppercase text-white mb-2">
              Corporate HQ
            </h3>
            <p className="text-[11px] text-[#EBCDCB]/80 leading-relaxed font-sans">
              10th Floor, Lotus Building, Flat No.1001, Deep Garden, Chedha Nagar, Nalasopara East,
              Vasai - 401209
            </p>
          </div>
        </motion.div>

        {/* GST CARD */}
        <motion.div
          variants={fadeInUp}
          className="group relative bg-[#160E0E]/40 border border-[#EBCDCB]/10 p-8 rounded-sm backdrop-blur-xl transition-all duration-500 hover:border-[#981618]/50 hover:shadow-[0_0_40px_rgba(152,22,24,0.15)] flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 bg-[#981618]/10 border border-[#981618]/30 flex items-center justify-center rounded-sm text-[#981618] mb-6 group-hover:bg-[#981618] group-hover:text-white transition-all duration-300">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="text-md font-bold tracking-wider uppercase text-white mb-2">
              Compliance
            </h3>
            <div className="flex items-center justify-between bg-[#160E0E] p-2.5 rounded border border-[#EBCDCB]/5 font-mono text-xs">
              <span className="text-white font-bold tracking-wider">27ALFPU1008A1ZL</span>
              <button
                onClick={() => handleCopy("27ALFPU1008A1ZL", "gst")}
                className="text-[#A27273] hover:text-white transition-colors"
              >
                {copiedText === "gst" ? (
                  <Check className="w-3.5 h-3.5 text-green-500" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* 5. INTERACTIVE SERVICE SELECTION */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="mb-28 relative z-10"
      >
        <div className="text-center mb-12">
          <h2 className="text-xs uppercase tracking-[0.25em] text-[#981618] font-bold mb-3">
            Core Capabilities
          </h2>
          <p className="text-xl sm:text-3xl font-bold text-white tracking-tight">
            Select Systems Required for Procurement
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "HVAC Systems",
              icon: Wind,
              desc: "Industrial climate optimization & complex ventilation systems.",
            },
            {
              name: "Cryogenic Services",
              icon: Snowflake,
              desc: "Ultra-low temperature infrastructure & vacuum pipelines.",
            },
            {
              name: "Fire Fighting",
              icon: Flame,
              desc: "Integrated automated suppression & safety arrays.",
            },
            {
              name: "Electrical Services",
              icon: Zap,
              desc: "High voltage distribution & industrial panel design.",
            },
          ].map((service, idx) => {
            const IconComp = service.icon;
            const isSelected = formData.service === service.name;
            return (
              <motion.div
                key={idx}
                variants={fadeInUp}
                onClick={() => setFormData({ ...formData, service: service.name })}
                className={`cursor-pointer p-6 rounded-sm transition-all duration-300 border backdrop-blur-md flex flex-col justify-between h-44 relative overflow-hidden ${
                  isSelected
                    ? "bg-[#981618]/20 border-[#981618] shadow-[0_0_30px_rgba(152,22,24,0.25)]"
                    : "bg-[#160E0E]/50 border-[#EBCDCB]/10 hover:border-[#981618]/40"
                }`}
              >
                <div>
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-sm border mb-4 ${
                      isSelected
                        ? "bg-[#981618] border-none text-white"
                        : "bg-[#160E0E] border-[#EBCDCB]/10 text-[#A27273]"
                    }`}
                  >
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-white tracking-wide mb-1">
                    {service.name}
                  </h3>
                  <p className="text-xs text-[#A27273] line-clamp-2">{service.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* 6. COMPREHENSIVE INQUIRY FORM */}
      <div
        id="inquiry-form"
        className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mb-28 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-1 space-y-4"
        >
          <div className="border-l-2 border-[#981618] pl-4">
            <span className="text-xs uppercase tracking-widest text-[#981618] font-bold block mb-1">
              Project Deployment
            </span>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Submit Engineering Brief
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#A27273] leading-relaxed font-light">
            Our estimation engineering matrix evaluates parameter sets within 12 structural loops.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 bg-[#160E0E]/40 border border-[#EBCDCB]/10 p-6 sm:p-10 rounded-sm backdrop-blur-2xl relative"
        >
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="relative">
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  onFocus={() => setActiveFocused("fullName")}
                  onBlur={() => setActiveFocused(null)}
                  className="w-full bg-[#160E0E]/80 border border-[#EBCDCB]/10 rounded-sm px-4 py-3.5 text-white focus:outline-none focus:border-[#981618] transition-all text-sm"
                  placeholder=" "
                />
                <label
                  className={`absolute left-4 top-3.5 text-sm text-[#A27273] pointer-events-none transition-all origin-left 
                  ${activeFocused === "fullName" || formData.fullName ? "-translate-y-6 scale-75 text-[#981618] bg-[#160E0E] px-1" : ""}`}
                >
                  Full Name *
                </label>
              </div>

              {/* Company Name */}
              <div className="relative">
                <input
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  onFocus={() => setActiveFocused("companyName")}
                  onBlur={() => setActiveFocused(null)}
                  className="w-full bg-[#160E0E]/80 border border-[#EBCDCB]/10 rounded-sm px-4 py-3.5 text-white focus:outline-none focus:border-[#981618] transition-all text-sm"
                  placeholder=" "
                />
                <label
                  className={`absolute left-4 top-3.5 text-sm text-[#A27273] pointer-events-none transition-all origin-left 
                  ${activeFocused === "companyName" || formData.companyName ? "-translate-y-6 scale-75 text-[#981618] bg-[#160E0E] px-1" : ""}`}
                >
                  Enterprise Name *
                </label>
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={() => setActiveFocused("email")}
                  onBlur={() => setActiveFocused(null)}
                  className="w-full bg-[#160E0E]/80 border border-[#EBCDCB]/10 rounded-sm px-4 py-3.5 text-white focus:outline-none focus:border-[#981618] transition-all text-sm"
                  placeholder=" "
                />
                <label
                  className={`absolute left-4 top-3.5 text-sm text-[#A27273] pointer-events-none transition-all origin-left 
                  ${activeFocused === "email" || formData.email ? "-translate-y-6 scale-75 text-[#981618] bg-[#160E0E] px-1" : ""}`}
                >
                  Corporate Email *
                </label>
              </div>

              {/* Phone */}
              <div className="relative">
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  onFocus={() => setActiveFocused("phone")}
                  onBlur={() => setActiveFocused(null)}
                  className="w-full bg-[#160E0E]/80 border border-[#EBCDCB]/10 rounded-sm px-4 py-3.5 text-white focus:outline-none focus:border-[#981618] transition-all text-sm"
                  placeholder=" "
                />
                <label
                  className={`absolute left-4 top-3.5 text-sm text-[#A27273] pointer-events-none transition-all origin-left 
                  ${activeFocused === "phone" || formData.phone ? "-translate-y-6 scale-75 text-[#981618] bg-[#160E0E] px-1" : ""}`}
                >
                  Phone Number *
                </label>
              </div>

              {/* Service Selection Dropdown */}
              <div className="relative">
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-[#160E0E] border border-[#EBCDCB]/10 rounded-sm px-4 py-3.5 text-white focus:outline-none focus:border-[#981618] transition-all text-sm appearance-none"
                >
                  <option value="" disabled>
                    Select Core System Discipline
                  </option>
                  <option value="HVAC Systems">HVAC Systems</option>
                  <option value="Cryogenic Services">Cryogenic Services</option>
                  <option value="Fire Fighting">Fire Fighting</option>
                  <option value="Electrical Services">Electrical Services</option>
                </select>
                <ChevronDown className="w-4 h-4 text-[#A27273] absolute right-4 top-4.5 pointer-events-none" />
              </div>

              {/* Project Infrastructure Type */}
              <div className="relative">
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full bg-[#160E0E] border border-[#EBCDCB]/10 rounded-sm px-4 py-3.5 text-white focus:outline-none focus:border-[#981618] transition-all text-sm appearance-none"
                >
                  <option value="" disabled>
                    Project Infrastructure Type
                  </option>
                  <option value="Greenfield Commercial">Greenfield Commercial</option>
                  <option value="Industrial Manufacturing">Industrial Manufacturing</option>
                  <option value="Government Infrastructure">Government Infrastructure</option>
                  <option value="Retrofit / Maintenance AMC">Retrofit / Maintenance AMC</option>
                </select>
                <ChevronDown className="w-4 h-4 text-[#A27273] absolute right-4 top-4.5 pointer-events-none" />
              </div>
            </div>

            {/* Location Input */}
            <div className="relative">
              <input
                type="text"
                required
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                onFocus={() => setActiveFocused("location")}
                onBlur={() => setActiveFocused(null)}
                className="w-full bg-[#160E0E]/80 border border-[#EBCDCB]/10 rounded-sm px-4 py-3.5 text-white focus:outline-none focus:border-[#981618] transition-all text-sm"
                placeholder=" "
              />
              <label
                className={`absolute left-4 top-3.5 text-sm text-[#A27273] pointer-events-none transition-all origin-left 
                ${activeFocused === "location" || formData.location ? "-translate-y-6 scale-75 text-[#981618] bg-[#160E0E] px-1" : ""}`}
              >
                Site Location (City / State) *
              </label>
            </div>

            {/* Message Area */}
            <div className="relative">
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                onFocus={() => setActiveFocused("message")}
                onBlur={() => setActiveFocused(null)}
                className="w-full bg-[#160E0E]/80 border border-[#EBCDCB]/10 rounded-sm px-4 py-3.5 text-white focus:outline-none focus:border-[#981618] transition-all text-sm resize-none"
                placeholder=" "
              />
              <label
                className={`absolute left-4 top-3.5 text-sm text-[#A27273] pointer-events-none transition-all origin-left 
                ${activeFocused === "message" || formData.message ? "-translate-y-6 scale-75 text-[#981618] bg-[#160E0E] px-1" : ""}`}
              >
                Detailed Scope of Requirements *
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-gradient-to-r from-[#981618] to-[#6e0f10] text-white font-medium rounded-sm text-xs tracking-widest uppercase transition-all shadow-[0_4px_25px_rgba(152,22,24,0.3)] hover:shadow-[0_4px_40px_rgba(152,22,24,0.5)] disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Transferring System Packets...
                </>
              ) : (
                <>
                  Transmit Brief Architecture <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            {/* Success Micro-Overlay */}
            <AnimatePresence>
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                  animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
                  exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                  className="absolute inset-0 bg-[#160E0E]/95 rounded-sm flex flex-col items-center justify-center text-center p-6 z-20"
                >
                  <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
                    <CheckCircle2 className="w-12 h-12 text-[#981618] mb-3 drop-shadow-[0_0_10px_#981618]" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-1">
                    Transmission Successful
                  </h3>
                  <p className="text-xs text-[#A27273] max-w-sm">
                    Data safely logged. Technical team will verify shortly.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>

      {/* 7. OPERATIONAL TIMELINE FLOW */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="mb-28 relative z-10"
      >
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-[0.25em] text-[#981618] font-bold mb-2">
            Operational Flow
          </h2>
          <p className="text-xl sm:text-3xl font-bold text-white tracking-tight">
            Execution Roadmap
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {[
            { step: "01", name: "Secure Intake", desc: "Digital design specs processed securely." },
            {
              step: "02",
              name: "Site Inspection",
              desc: "Physical mapping and load calibrations verification.",
            },
            {
              step: "03",
              name: "Quotation Delivery",
              desc: "Parametric calculations bills of material deployed.",
            },
            {
              step: "04",
              name: "Execution Deploy",
              desc: "Precision deployment managed under field experts.",
            },
          ].map((proc, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="bg-[#160E0E]/50 border border-[#EBCDCB]/5 p-6 rounded-sm hover:border-[#981618]/30 transition-all"
            >
              <span className="font-mono text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#981618] to-transparent block mb-2">
                {proc.step}
              </span>
              <h4 className="text-sm font-semibold text-white mb-1 tracking-wide">{proc.name}</h4>
              <p className="text-xs text-[#A27273] leading-relaxed">{proc.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 8. EMBEDDED MAP DISPLAY */}
      <div className="bg-[#160E0E]/60 border border-[#EBCDCB]/10 p-4 rounded-sm shadow-2xl relative overflow-hidden group mb-28 z-10">
        <div className="w-full h-[400px] rounded-sm filter grayscale contrast-125 brightness-75 transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-90 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.5413346903827!2d72.82299837597542!3d19.388915542035655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a964be16a3a7%3A0xcb13e8b83597b764!2sNalasopara%20East%2C%20Nala%20Sopara%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1716630000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            className="absolute inset-0"
          />
        </div>
      </div>

      {/* 9. FAQ ACCORDION MATRIX */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-4xl mx-auto mb-28 relative z-10"
      >
        <div className="text-center mb-12">
          <h2 className="text-xs uppercase tracking-[0.25em] text-[#981618] font-bold mb-2">
            Knowledge Base
          </h2>
          <p className="text-xl sm:text-3xl font-bold text-white tracking-tight">
            Technical Resolution Matrix
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "What is your standard mobilization timeline for industrial site inspections?",
              a: "For facilities located within regional hubs, engineering crews deploy within 24 to 48 hours.",
            },
            {
              q: "Do you offer ongoing Annual Maintenance Contracts (AMC)?",
              a: "Yes, SP Engineering manages long-term preventative compliance metrics through automated priority AMCs.",
            },
            {
              q: "Can your fire fighting arrays integrate with legacy BMS systems?",
              a: "Our electrical engineering divisions build specialized relays to bridge safety arrays into legacy code environments seamlessly.",
            },
          ].map((faq, index) => (
            <div
              key={index}
              className="border border-[#EBCDCB]/10 rounded-sm bg-[#160E0E]/30 overflow-hidden"
            >
              <button
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center bg-[#160E0E]/40"
              >
                <span className="text-xs sm:text-sm font-semibold text-white tracking-wide">
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: activeFaq === index ? 180 : 0 }}
                  className="text-[#981618]"
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {activeFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 pb-4 pt-2 text-xs text-[#A27273] border-t border-[#EBCDCB]/5 bg-[#160E0E]/20">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.div>

      {/* 10. CLOSING SYSTEM CTA */}
      <div className="relative bg-gradient-to-b from-[#160E0E]/80 to-[#221011]/80 border border-[#981618]/40 p-8 sm:p-12 rounded-sm text-center shadow-[0_0_50px_rgba(152,22,24,0.15)] mb-12 z-10">
        <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight mb-4">
          Ready To Start Your Engineering Project?
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:+918097604693"
            className="px-6 py-3 bg-[#981618] text-white font-semibold text-xs tracking-widest uppercase rounded-sm"
          >
            Initiate Secure Call
          </a>
        </div>
      </div>

      {/* FIXED PREMIUM FLOATERS */}
      <a
        href="https://wa.me/918097604693"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
      >
        <MessageSquare className="w-5 h-5 fill-white text-[#25D366]" />
      </a>

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-20 right-7 z-40 bg-[#160E0E] border border-[#981618] text-[#981618] p-2 rounded-sm"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </Section>
  );
}

export default function ContactPage() {
  return <Page />;
}
