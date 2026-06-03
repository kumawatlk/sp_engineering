"use client";

import { Section } from "@/components/layout/Section";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  ArrowUpRight,
  Mail,
  Loader2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

// --- TECHNICAL DATA ARCHITECTURE ---
const CATEGORIES = ["All", "HVAC", "Cryogenic", "Fire Fighting", "Electrical", "Industrial Safety"];

const ARTICLES_DATA = [
  {
    id: "ART-01",
    title: "The Future of Industrial HVAC Systems",
    category: "HVAC",
    excerpt:
      "An engineering breakdown of thermodynamic parametric calibration, cleanroom pressure loops, and integrated smart-sensor energy configurations.",
    date: "MAY 26, 2026",
    readTime: "08 MIN",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    id: "ART-02",
    title: "Industrial Cryogenic Safety Standards",
    category: "Cryogenic",
    excerpt:
      "Analyzing mass flow distribution limits and sub-zero structural vacuum containment shielding under -185°C pipeline states.",
    date: "MAY 19, 2026",
    readTime: "12 MIN",
    img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
    featured: false,
  },
  {
    id: "ART-03",
    title: "Fire Fighting System Maintenance Guide",
    category: "Fire Fighting",
    excerpt:
      "Optimizing automated hydrant grid response loops and testing water deluge monitoring valves against zero-latency guidelines.",
    date: "MAY 10, 2026",
    readTime: "06 MIN",
    img: "https://images.unsplash.com/photo-1599740831464-5cbe1d14f87a?auto=format&fit=crop&w=600&q=80",
    featured: false,
  },
  {
    id: "ART-04",
    title: "Smart Electrical Infrastructure Optimization",
    category: "Electrical",
    excerpt:
      "Engineering dual-redundant HT/LT distribution panels and high-voltage transformer synchronization maps for modular assets.",
    date: "APR 28, 2026",
    readTime: "10 MIN",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
    featured: false,
  },
  {
    id: "ART-05",
    title: "Maximizing Efficiency via AMC Architecture",
    category: "Industrial Safety",
    excerpt:
      "Quantifying how continuous parametric telemetry loops reduce multi-line component downtime variances by up to 42%.",
    date: "APR 15, 2026",
    readTime: "05 MIN",
    img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80",
    featured: false,
  },
  {
    id: "ART-06",
    title: "Industrial Ventilation Best Practices",
    category: "HVAC",
    excerpt:
      "Calibrating dynamic velocity cleanroom supply fans without triggering turbulent ambient air stagnation zones.",
    date: "APR 02, 2026",
    readTime: "07 MIN",
    img: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=600&q=80",
    featured: false,
  },
];

// --- REUSABLE CARD WRAPPER COMPONENT ---
interface CardProps {
  article: (typeof ARTICLES_DATA)[0];
}

function PremiumBlogCard({ article }: CardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group relative bg-[#160E0E]/40 border border-[#EBCDCB]/10 p-5 rounded-sm backdrop-blur-xl flex flex-col justify-between hover:border-[#981618]/50 hover:shadow-[0_0_40px_rgba(152,22,24,0.15)] transition-all duration-500 overflow-hidden"
    >
      {/* Cyber-Industrial Tech Corner Line Details */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#981618]/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 text-[8px] font-mono text-white/5 uppercase tracking-[0.4em] p-4 select-none">
        SP_ENG // LOG_{article.id}
      </div>

      <div>
        {/* Core Media Window Frame */}
        <div className="relative h-56 w-full overflow-hidden bg-neutral-900 border border-white/5 rounded-sm mb-6">
          <div className="absolute inset-0 bg-[#981618]/5 mix-blend-color z-10 group-hover:opacity-0 transition-opacity duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#160E0E] via-transparent to-transparent z-10 pointer-events-none" />
          <img
            src={article.img}
            alt={article.title}
            className="w-full h-full object-cover grayscale brightness-[0.85] contrast-115 group-hover:grayscale-0 group-hover:scale-103 group-hover:brightness-95 transition-transform duration-500"
          />
          <span className="absolute bottom-4 left-4 bg-[#160E0E]/90 border border-[#981618]/40 px-3 py-1 text-[9px] font-mono uppercase tracking-widest font-black text-white z-20">
            {article.category} Module
          </span>
        </div>

        {/* Content Details Block */}
        <div className="space-y-3 px-1">
          <div className="flex items-center space-x-4 text-[9px] font-mono text-[#A27273]">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-[#981618]" /> {article.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" /> {article.readTime}
            </span>
          </div>
          <h4 className="text-base font-bold text-white uppercase tracking-wide leading-snug group-hover:text-[#981618] transition-colors duration-300">
            {article.title}
          </h4>
          <p className="text-xs text-[#A27273] font-light leading-relaxed line-clamp-2">
            {article.excerpt}
          </p>
        </div>
      </div>

      <div className="pt-6 px-1">
        <Link
          href={`/blog/${article.id}`}
          className="w-full py-3 bg-[#160E0E] border border-white/10 text-white font-mono text-[10px] font-black uppercase tracking-[0.25em] rounded-sm hover:border-[#981618] hover:bg-gradient-to-r hover:from-[#981618]/10 to-transparent transition-all duration-300 flex items-center justify-center gap-2"
        >
          Read Technical Log <ArrowUpRight className="w-3.5 h-3.5 text-[#981618]" />
        </Link>
      </div>
    </motion.div>
  );
}

export default function BlogPage() {
  const [filter, setFilter] = useState("All");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [articles, setArticles] = useState<typeof ARTICLES_DATA>(ARTICLES_DATA);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/blogs");
        if (res.ok) {
          const data = await res.json();
          if (data && data.length > 0) {
            interface ArticleItem {
              _id?: string;
              title: string;
              category?: string;
              excerpt?: string;
              dateString?: string;
              readTime?: string;
              image?: string;
              featured?: boolean;
            }
            const mappedData = data.map((item: ArticleItem, index: number) => ({
              id: item._id || `ART-${index + 1}`,
              title: item.title,
              category: item.category || "HVAC",
              excerpt: item.excerpt || "Engineering insights.",
              date: item.dateString || "MAY 26, 2026",
              readTime: item.readTime || "08 MIN",
              img:
                item.image ||
                "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
              featured: item.featured || false,
            }));

            // Ensure at least one article is featured if none is marked featured
            const hasFeatured = mappedData.some((art: ArticleItem) => art.featured);
            if (!hasFeatured && mappedData.length > 0) {
              mappedData[0].featured = true;
            }

            setArticles(mappedData);
          }
        }
      } catch (err) {
        console.error("Failed to load articles from server, falling back to static dataset.", err);
      }
    };
    fetchArticles();
  }, []);

  const filteredArticles = articles.filter(
    (art) => !art.featured && (filter === "All" || art.category === filter),
  );

  const featuredArticle = articles.find((art) => art.featured);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail("");
      setTimeout(() => setIsSuccess(false), 3500);
    }, 1200);
  };

  return (
    <Section
      eyebrow="SP Engineering Knowledge Matrix"
      title="Engineering Insights"
      description="Industrial knowledge, engineering innovations, and technical expertise from SP Engineering."
      className="relative min-h-screen bg-[#160E0E] text-[#EBCDCB] overflow-x-hidden pb-24"
    >
      {/* ========================================================
          GIANT OUTLINED BACKGROUND BRAND WATERMARK LAYER
         ======================================================== */}
      <div className="absolute top-[8%] left-0 right-0 overflow-hidden select-none pointer-events-none z-0 whitespace-nowrap text-center opacity-[0.02]">
        <span
          className="text-[20vw] font-black uppercase font-sans tracking-tighter block leading-none"
          style={{ WebkitTextStroke: "2px #981618", WebkitTextFillColor: "transparent" }}
        >
          SP ENGINEERING
        </span>
      </div>

      {/* AMBIENT SPOTLIGHT GLOWS */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#EBCDCB 1px, transparent 1px), linear-gradient(90deg, #EBCDCB 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-[20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#981618] opacity-[0.07] blur-[150px]" />
      </div>

      {/* HERO ROUTE ACCELERATORS */}
      <div className="relative z-10 flex flex-wrap gap-4 mt-6 mb-24">
        <a
          href="#featured-manifest"
          className="px-6 py-3.5 bg-[#981618] text-white font-bold text-xs uppercase tracking-[0.2em] rounded-sm shadow-[0_0_20px_rgba(152,22,24,0.3)]"
        >
          Explore Articles
        </a>
        <a
          href="/contact"
          className="px-6 py-3.5 bg-transparent border border-white/10 text-white font-bold text-xs uppercase tracking-[0.2em] rounded-sm hover:border-[#981618] transition-all"
        >
          Contact Us
        </a>
      </div>

      {/* ========================================================
          MODERN PILL-STYLE FILTER MATRIX
         ======================================================== */}
      <div className="relative z-10 flex flex-wrap gap-2 justify-start mb-16 border-b border-white/10 pb-6 max-w-7xl mx-auto">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${
              filter === cat
                ? "bg-[#981618] text-white border-[#981618] shadow-[0_0_15px_rgba(152,22,24,0.4)]"
                : "text-[#A27273] bg-transparent border-white/10 hover:border-[#981618]/50 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ========================================================
          ULTRA-PREMIUM LARGE FEATURED BLOG CARD
         ======================================================== */}
      {featuredArticle && filter === "All" && (
        <div id="featured-manifest" className="relative z-10 mb-24 max-w-7xl mx-auto">
          <div className="bg-[#160E0E]/40 border border-[#EBCDCB]/10 p-6 sm:p-10 rounded-sm backdrop-blur-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#981618]/5 to-transparent pointer-events-none" />

            {/* Featured Image Window */}
            <div className="lg:col-span-7 relative h-64 sm:h-[380px] overflow-hidden rounded-sm bg-neutral-900 border border-white/5">
              <div className="absolute inset-0 bg-[#981618]/5 mix-blend-color z-10 group-hover:opacity-0 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#160E0E] via-transparent to-transparent z-10 pointer-events-none" />
              <img
                src={featuredArticle.img}
                alt={featuredArticle.title}
                className="w-full h-full object-cover grayscale brightness-75 contrast-115 group-hover:grayscale-0 group-hover:scale-[1.01] transition-transform duration-700"
              />
              <span className="absolute bottom-4 left-4 bg-[#981618] text-white font-mono text-[9px] uppercase tracking-widest font-black px-3 py-1">
                FEATURED MANIFEST // {featuredArticle.category}
              </span>
            </div>

            {/* Featured Metadata window */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6 py-2">
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-[10px] font-mono text-[#A27273]">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#981618]" /> {featuredArticle.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {featuredArticle.readTime}
                  </span>
                </div>

                <h3 className="text-xl sm:text-3xl font-black uppercase tracking-tight text-white leading-tight group-hover:text-[#981618] transition-colors duration-300">
                  {featuredArticle.title}
                </h3>

                <p className="text-xs sm:text-sm font-light text-[#A27273] leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-mono text-white flex items-center gap-1.5 uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />{" "}
                  Authorized Dispatch
                </span>
                <Link
                  href={`/blog/${featuredArticle.id}`}
                  className="px-6 py-3 bg-[#981618] hover:bg-[#7a1214] text-white font-mono text-[10px] font-black uppercase tracking-widest rounded-sm transition-all flex items-center gap-2 shadow-md"
                >
                  Access Core Data <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          PREMIUM LUXURY BLOG CARDS GRID
         ======================================================== */}
      <div className="relative z-10 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredArticles.map((art) => (
              <PremiumBlogCard key={art.id} article={art} />
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* ========================================================
          LOAD MORE MATRIX CONTROL
         ======================================================== */}
      <div className="relative z-10 text-center mb-28">
        <button className="px-8 py-3.5 bg-[#160E0E] border border-white/10 hover:border-[#981618] text-[#EBCDCB] hover:text-white font-mono text-[10px] font-black uppercase tracking-[0.3em] rounded-sm transition-all duration-300">
          Load More Manifest Logs
        </button>
      </div>

      {/* ========================================================
          SLIM PREMIUM NEWSLETTER STRIP
         ======================================================== */}
      <div className="relative z-10 max-w-7xl mx-auto mb-12">
        <div className="bg-[#160E0E]/80 border border-white/10 rounded-sm p-6 sm:p-10 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left max-w-xl">
            <h3 className="text-sm sm:text-base font-black uppercase tracking-wider text-white">
              Stay Updated With Engineering Insights
            </h3>
            <p className="text-xs text-[#A27273] font-light leading-relaxed">
              Join our technical distribution network to receive bi-weekly validation parameter
              updates.
            </p>
          </div>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-2 w-full md:w-auto max-w-md relative flex-shrink-0"
          >
            <div className="relative flex-grow sm:w-64">
              <Mail className="w-4 h-4 text-[#A27273] absolute left-3.5 top-3.5 pointer-events-none" />
              <input
                type="email"
                required
                placeholder="Corporate Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting || isSuccess}
                className="w-full bg-[#160E0E] border border-white/10 rounded-sm pl-10 pr-4 py-3 text-white focus:outline-none focus:border-[#981618] text-xs font-mono disabled:opacity-50"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting || isSuccess}
              className="px-6 py-3 bg-[#981618] hover:bg-[#7a1214] text-white font-bold text-xs uppercase tracking-widest rounded-sm transition-colors flex-shrink-0 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isSubmitting ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : "Subscribe"}
            </button>

            <AnimatePresence>
              {isSuccess && (
                <div className="absolute inset-0 bg-[#160E0E] border border-green-900 rounded-sm flex items-center justify-center text-center px-4 z-20">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-[10px] font-mono text-white uppercase tracking-wider">
                    Feed subscription sequence authorized.
                  </span>
                </div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </Section>
  );
}
