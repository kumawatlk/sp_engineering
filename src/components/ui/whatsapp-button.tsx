import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton({ phone = "918097604693" }: { phone?: string }) {
  return (
    <motion.a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 220, damping: 16 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-2xl animate-pulse-glow"
    >
      <MessageCircle className="h-6 w-6" fill="currentColor" />
      <span className="absolute -inset-1 rounded-full ring-2 ring-[#25D366]/40 animate-ping" />
    </motion.a>
  );
}
