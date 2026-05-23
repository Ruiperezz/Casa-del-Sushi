import { motion } from "motion/react";
import { Armchair, Zap, Gem, Hexagon, Palette, Leaf } from "lucide-react";
import { SPACE_SIGNATURES } from "../data/venue";

const ICONS = [
  { Icon: Armchair, color: "text-sushi-coral",      bg: "bg-sushi-coral/10",  border: "border-sushi-coral/25"     },
  { Icon: Zap,      color: "text-sushi-neon",       bg: "bg-sushi-neon/10",   border: "border-sushi-neon/25"      },
  { Icon: Gem,      color: "text-sushi-gold",       bg: "bg-sushi-gold/10",   border: "border-sushi-gold/25"      },
  { Icon: Hexagon,  color: "text-sushi-gold-light", bg: "bg-sushi-gold/8",    border: "border-sushi-gold/20"      },
  { Icon: Palette,  color: "text-sushi-coral-light",bg: "bg-sushi-coral/8",   border: "border-sushi-coral-light/20"},
  { Icon: Leaf,     color: "text-emerald-400",      bg: "bg-emerald-900/30",  border: "border-emerald-700/30"     },
] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.07, ease: "easeOut" },
  }),
};

export default function AmbienteSignature() {
  return (
    <section
      aria-label="Detalles del local"
      className="py-12 md:py-16 bg-sushi-surface-green border-y border-white/[0.05] relative overflow-hidden"
    >
      {/* Background hex texture */}
      <div className="absolute inset-0 hex-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <p className="font-sans text-sm text-sushi-gold text-center mb-10 tracking-wide">
          Lo que encontrarás al entrar
        </p>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
          {SPACE_SIGNATURES.map(({ title, desc }, i) => {
            const { Icon, color, bg, border } = ICONS[i];
            return (
              <motion.li
                key={title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-20px" }}
                variants={fadeUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`group flex flex-col items-center text-center p-5 rounded-2xl border ${border} bg-sushi-surface/40 hover:bg-sushi-surface transition-all duration-300 cursor-default`}
              >
                <div className={`w-11 h-11 rounded-xl ${bg} border ${border} flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className={`w-5 h-5 ${color}`} strokeWidth={1.5} aria-hidden />
                </div>
                <h3 className="font-sans text-sm font-semibold text-white mb-1.5 leading-tight">
                  {title}
                </h3>
                <p className="font-sans text-[11px] text-sushi-muted leading-relaxed">{desc}</p>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
