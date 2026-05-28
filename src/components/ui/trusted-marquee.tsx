import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import aaronLogo from "@/assets/clients/aaron.png";
import primeFocusLogo from "@/assets/clients/prime-focus.png";
import phoenixLogo from "@/assets/clients/phoenix.png";
import hcgLogo from "@/assets/clients/hcg.png";
import crisilLogo from "@/assets/clients/crisil.png";
import iciciLogo from "@/assets/clients/icici.jpg";
import nxtraLogo from "@/assets/clients/nxtra.png";
import medicoverLogo from "@/assets/clients/medicover.png";
import petrofacLogo from "@/assets/clients/petrofac.jpg";
import srvLogo from "@/assets/clients/srv.jpg";
const CLIENTS = [
  {
    name: "Aaron",
    logo: aaronLogo,
  },
  {
    name: "Prime Focus",
    logo: primeFocusLogo,
  },
  {
    name: "Phoenix Palladium",
    logo: phoenixLogo,
  },
  {
    name: "HCG",
    logo: hcgLogo,
  },
  {
    name: "CRISIL",
    logo: crisilLogo,
  },
  {
    name: "ICICI Bank",
    logo: iciciLogo,
  },
  {
    name: "Nxtra by Airtel",
    logo: nxtraLogo,
  },
  {
    name: "Medicover",
    logo: medicoverLogo,
  },
  {
    name: "Petrofac",
    logo: petrofacLogo,
  },
  {
    name: "SRV Hospitals",
    logo: srvLogo,
  },
];
type Client = {
  name: string;
  logo: string;
};

type RowProps = {
  direction?: "left" | "right";
  speed?: number;
  items: Client[];
};
function LogoCard({ client }: { client: Client }) {
  return (
    <div
      className={cn(
        "group relative mx-4 flex h-28 w-[240px] items-center justify-center overflow-hidden",
        "rounded-3xl border border-white/10",
        "bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-transparent",
        "backdrop-blur-xl",
        "transition-all duration-500 ease-out",
        "hover:-translate-y-1 hover:border-primary/40",
        "hover:shadow-[0_10px_50px_-12px_hsl(var(--primary)/0.45)]"
      )}
    >
      {/* Background Glow */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at center, hsl(var(--primary)/0.18), transparent 70%)",
        }}
      />

      {/* Inner Glass Layer */}
      <div className="absolute inset-[1px] rounded-3xl bg-black/30 backdrop-blur-xl" />

      {/* Logo */}
      <div className="relative z-10 flex items-center justify-center px-8">
        <img
          src={client.logo}
          alt={client.name}
          className={cn(
            "h-14 w-auto object-contain",
            "opacity-80 grayscale",
            "transition-all duration-500",
            "group-hover:opacity-100 group-hover:grayscale-0",
            "group-hover:scale-110"
          )}
        />
      </div>

      {/* Top Shine */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
      />
    </div>
  );
}

function MarqueeRow({ direction = "left", speed = 40, items }: RowProps) {
  const loop = [...items, ...items];

  return (
    <div className="group relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <motion.div
        className="flex w-max"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
        style={{ willChange: "transform" }}
      >
        <div className="flex group-hover:[animation-play-state:paused]">
          {loop.map((client, i) => (
            <LogoCard key={`${client.name}-${i}`} client={client} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export function TrustedMarquee() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Blueprint grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)/0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)/0.5) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />
      {/* Animated drifting grid layer */}
      <motion.div
        aria-hidden
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)/0.6) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)/0.6) 1px, transparent 1px)",
          backgroundSize: "120px 120px",
        }}
        animate={{ backgroundPosition: ["0px 0px", "120px 120px"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      {/* Red radial glows */}
      <div
        aria-hidden
        className="absolute -top-32 left-1/4 h-[420px] w-[420px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(closest-side, hsl(var(--primary)/0.22), transparent)" }}
      />
      <div
        aria-hidden
        className="absolute -bottom-32 right-1/4 h-[420px] w-[420px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(closest-side, hsl(var(--primary)/0.18), transparent)" }}
      />

      <div className="container relative mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary))]" />
            Trusted Partnerships
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Trusted By{" "}
            <span className="bg-gradient-to-r from-primary via-primary to-[#A27273] bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-foreground/65 leading-relaxed">
            We proudly deliver engineering solutions for leading industrial,
            healthcare, commercial, and corporate organizations.
          </p>
        </motion.div>

        {/* Marquee rows */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative space-y-6 overflow-hidden rounded-[32px] border border-white/10 bg-black/30 p-8 md:p-10 backdrop-blur-2xl"
        >
          {/* Soft radial light behind logos */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-3xl"
            style={{
              background:
                "radial-gradient(ellipse at center, hsl(var(--primary)/0.08), transparent 70%)",
            }}
          />
          <MarqueeRow direction="left" speed={45} items={CLIENTS} />
          <MarqueeRow direction="right" speed={50} items={[...CLIENTS].reverse()} />
        </motion.div>
      </div>
    </section>
  );
}
