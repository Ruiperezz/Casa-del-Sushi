import { motion } from "motion/react";
import { SPACE_SIGNATURES } from "../data/venue";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.06, ease: "easeOut" },
  }),
};

export default function AmbienteSignature() {
  return (
    <section
      aria-label="Detalles del local"
      className="py-14 md:py-18 bg-sushi-surface-green border-y border-white/[0.05] relative overflow-hidden"
    >
      <div className="absolute inset-0 hex-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <p className="font-sans text-xs text-sushi-gold uppercase tracking-[0.22em] font-semibold text-center mb-10">
          Lo que encontrarás al entrar
        </p>

        <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8 md:gap-y-10">
          {SPACE_SIGNATURES.map(({ title, desc }, i) => (
            <motion.li
              key={title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-20px" }}
              variants={fadeUp}
              className="group"
            >
              <div className="flex items-start gap-4">
                <span
                  className="font-display text-[2rem] font-bold leading-none tabular-nums shrink-0 select-none"
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "1px rgba(200,149,42,0.35)",
                    transition: "all 0.3s",
                  }}
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="pt-1 min-w-0">
                  <h3 className="font-sans text-sm font-semibold text-white leading-tight mb-1.5 group-hover:text-sushi-gold transition-colors duration-300">
                    {title}
                  </h3>
                  <p className="font-sans text-[12px] text-sushi-muted leading-relaxed">{desc}</p>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
