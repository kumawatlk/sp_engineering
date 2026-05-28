import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo/finalfull_logo.png";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  // { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  // { label: "Projects", to: "/projects" },
  // { label: "Industries", to: "/industries" },
  { label: "Contact", to: "/contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "glass-strong border-b border-border/60 py-2"
          : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-5 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group" aria-label="SP Engineering home">
          <img
            src={logo}
            alt="SP Engineering"
            width={160}
            height={40}
            className="h-14 w-auto object-contain transition-transform group-hover:scale-[1.03]"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
              activeProps={{ className: "text-foreground" }}
            >
              <span className="relative z-10">{link.label}</span>
              <span className="absolute inset-x-3 -bottom-0.5 h-px scale-x-0 group-hover:scale-x-100 bg-gradient-to-r from-transparent via-primary to-transparent transition-transform duration-300 origin-center" />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center">
          <Link
            to="/contact"
            className="relative inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground glow-brand-sm hover:glow-brand transition-all hover:-translate-y-0.5"
          >
            Get a Quote
          </Link>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-secondary/60 transition"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-background/70 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="fixed top-0 right-0 z-50 h-full w-[85%] max-w-sm glass-strong border-l border-border lg:hidden"
            >
              <div className="flex items-center justify-between p-5 border-b border-border/60">
                <img src={logo} alt="SP Engineering" className="h-8 w-auto" />
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-md p-2 hover:bg-secondary/60"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex flex-col p-4">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04 }}
                  >
                    <Link
                      to={link.to}
                      className="flex items-center justify-between rounded-lg px-4 py-3.5 text-base font-medium text-muted-foreground hover:bg-secondary/60 hover:text-foreground transition"
                      activeProps={{ className: "text-foreground bg-secondary/40" }}
                    >
                      {link.label}
                      <span className="text-primary">→</span>
                    </Link>
                  </motion.div>
                ))}
                <Link
                  to="/contact"
                  className="mt-4 inline-flex justify-center rounded-full bg-gradient-brand px-5 py-3 font-semibold text-primary-foreground glow-brand-sm"
                >
                  Get a Quote
                </Link>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
