import { motion } from "motion/react";
import { SITE } from "../data/site";

const STATS = [
  {
    value: SITE.googleRating,
    unit: "★",
    label: "en Google",
    sub: "Opiniones verificadas de clientes reales",
    textClass: "text-sushi-gold glow-gold",
  },
  {
    value: SITE.buffetPrice,
    unit: "",
    label: "Buffet libre completo",
    sub: "IVA incluido · toda la carta de sushi",
    textClass: "text-sushi-coral glow-coral",
  },
  {
    value: "Plaza del Rey",
    unit: "",
    label: "Cartagena, Murcia",
    sub: "Centro histórico · aparcamiento a 100 m",
    textClass: "text-sushi-neon glow-neon",
  },
  {
    value: "Comida + Cena",
    unit: "",
    label: "Los 7 días",
    sub: "12:00–16:30 y 19:00–00:00 (vie–sáb)",
    textClass: "text-sushi-gold-light glow-gold",
  },
] as const;

export default function TrustStrip() {
  return (
    <section
      aria-label="Datos del restaurante"
      className="relative overflow-hidden"
      style={{
        background: "#07101E",
        borderTop: "1px solid rgba(201,169,110,0.28)",
        borderBottom: "1px solid rgba(26,140,255,0.12)",
      }}
    >
      {/* Scan shimmer */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-y-0 w-[20%] bg-gradient-to-r from-transparent via-sushi-gold/[0.025] to-transparent animate-scan" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.05]">
          {STATS.map(({ value, unit, label, sub, textClass }, i) => (
            <motion.li
              key={label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07, ease: "easeOut" }}
              className="bg-[#07101E] px-6 py-5 flex flex-col gap-1"
            >
              <p className={`font-display text-[1.6rem] sm:text-[1.85rem] font-bold leading-none tabular-nums ${textClass}`}>
                {value}
                {unit && (
                  <span className="text-lg ml-1 font-normal opacity-75">{unit}</span>
                )}
              </p>
              <p className="font-accent text-[10px] uppercase tracking-[0.2em] text-white/90 font-semibold mt-1.5">
                {label}
              </p>
              <p className="font-sans text-[10px] text-sushi-muted leading-snug mt-0.5">
                {sub}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
