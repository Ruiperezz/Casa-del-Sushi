import { motion } from "motion/react";
import { Star, MapPin, Clock, Utensils } from "lucide-react";
import { SITE } from "../data/site";

const items = [
  {
    icon: Star,
    value: SITE.googleRating,
    suffix: "★",
    label: "Google Maps",
    detail: "Opiniones verificadas",
    accent: "text-sushi-gold",
    iconColor: "text-sushi-gold",
    bg: "bg-sushi-gold/10",
    border: "border-sushi-gold/20",
    glowClass: "glow-gold",
  },
  {
    icon: Utensils,
    value: SITE.buffetPrice,
    suffix: "",
    label: "Buffet libre",
    detail: "IVA incluido · todo el menú",
    accent: "text-sushi-coral",
    iconColor: "text-sushi-coral",
    bg: "bg-sushi-coral/10",
    border: "border-sushi-coral/20",
    glowClass: "glow-coral",
  },
  {
    icon: MapPin,
    value: "Plaza del Rey",
    suffix: "",
    label: "Cartagena",
    detail: "Centro histórico · Murcia",
    accent: "text-sushi-neon",
    iconColor: "text-sushi-neon",
    bg: "bg-sushi-neon/10",
    border: "border-sushi-neon/20",
    glowClass: "glow-neon",
  },
  {
    icon: Clock,
    value: "12:00",
    suffix: "–00:00",
    label: "Comida y cena",
    detail: "Lunes a domingo",
    accent: "text-sushi-gold-light",
    iconColor: "text-sushi-gold-light",
    bg: "bg-sushi-gold/8",
    border: "border-sushi-gold/15",
    glowClass: "glow-gold",
  },
] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.08, ease: "easeOut" },
  }),
};

export default function TrustStrip() {
  return (
    <section
      aria-label="Datos del restaurante"
      className="border-y border-white/[0.06] bg-sushi-surface-green/70 relative overflow-hidden"
    >
      {/* Horizontal scan shimmer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-y-0 w-[20%] bg-gradient-to-r from-transparent via-sushi-gold/[0.03] to-transparent animate-scan" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6">
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {items.map(
            ({ icon: Icon, value, suffix, label, detail, accent, iconColor, bg, border, glowClass }, i) => (
              <motion.li
                key={label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className={`flex items-center gap-3.5 p-4 rounded-xl border ${border} ${bg} cursor-default transition-all duration-300 hover:border-opacity-50 hover:shadow-lg`}
              >
                <div className={`shrink-0 w-9 h-9 rounded-lg ${bg} border ${border} flex items-center justify-center`}>
                  <Icon className={`w-4 h-4 ${iconColor}`} strokeWidth={1.5} aria-hidden />
                </div>
                <div className="min-w-0">
                  <p className={`font-display text-lg font-bold leading-none tabular-nums ${accent} ${glowClass}`}>
                    {value}
                    {suffix && <span className="text-base ml-0.5 font-normal">{suffix}</span>}
                  </p>
                  <p className="font-sans text-xs font-semibold text-white mt-0.5 truncate">{label}</p>
                  <p className="font-sans text-[10px] text-sushi-muted truncate">{detail}</p>
                </div>
              </motion.li>
            )
          )}
        </ul>
      </div>
    </section>
  );
}
