import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/logo/sp-small_logo.png";

const QUICK = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Industries", to: "/industries" },
  { label: "Contact", to: "/contact" },
] as const;

const SERVICES = [
  "Industrial Fabrication",
  "Precision Engineering",
  "Plant Maintenance",
  "Structural Design",
  "Equipment Installation",
  "Project Consulting",
];

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border/60 bg-card/40">
      <div className="absolute inset-0 bg-blueprint bg-blueprint-fade opacity-40 pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="container mx-auto px-5 lg:px-8 pt-20 pb-10 relative">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <img src={logo} alt="SP Engineering" className="h-10 w-auto mb-5" />
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Engineering excellence built on precision, innovation, and decades of industrial
              expertise. SP Engineering delivers premium fabrication and turnkey solutions across
              India.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="grid h-10 w-10 place-items-center rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all hover:-translate-y-0.5"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {QUICK.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s} className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground mb-5">
              Contact
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <div className="text-muted-foreground">
                  <a href="tel:+918097604693" className="block hover:text-foreground">+91 80976 04693</a>
                  <a href="tel:+918552077798" className="block hover:text-foreground">+91 85520 77798</a>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <a href="mailto:spengineering185@gmail.com" className="text-muted-foreground hover:text-foreground break-all">
                  spengineering185@gmail.com
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <p className="text-muted-foreground leading-relaxed">
                  10th Floor, Lotus Building, Flat No.1001, Deep Garden, Chedha Nagar,
                  Nalasopara East, Vasai - 401209
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-border/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            <span className="text-foreground/80 font-medium">GST:</span> 27ALFPU1008A1ZL
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} SP Engineering. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
