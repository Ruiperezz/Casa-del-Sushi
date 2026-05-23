import { motion } from "motion/react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import interiorHeroImage from "../assets/images/interior_hero_1779464146821.png";
import { scrollToSection } from "../lib/scroll";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[calc(100vh-var(--scroll-offset))] bg-sushi-dark flex items-center overflow-hidden"
      style={{ paddingTop: "var(--scroll-offset)" }}
    >
      {/* Atmospheric glows */}
      <div className="absolute top-1/4 left-0 w-[32rem] h-[32rem] rounded-full bg-sushi-neon/[0.05] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[28rem] h-[28rem] rounded-full bg-sushi-coral/[0.07] blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 gold-veins pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 w-full">

        {/* Left: Copy */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-accent text-[11px] font-semibold uppercase tracking-[0.25em] text-sushi-gold mb-6"
          >
            Sushi artesanal · Plaza del Rey · Cartagena
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mb-7 leading-none"
          >
            <span className="block font-display text-[3.25rem] sm:text-6xl md:text-7xl font-bold text-white leading-[0.95] tracking-tight">
              Buffet libre
            </span>
            <span className="block font-display text-[3.25rem] sm:text-6xl md:text-7xl italic font-normal text-sushi-gold leading-[1.05] tracking-tight">
              de autor
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="font-sans text-gray-300 text-base md:text-[17px] leading-relaxed max-w-lg mb-10"
          >
            Sushi elaborado al momento desde la barra. Cada ronda, recién cortada
            por nuestros sushimen. Sin bandejas en exposición, sin atajos.
          </motion.p>

          {/* Price display */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="flex flex-wrap gap-8 sm:gap-12 mb-10 pb-9 border-b border-white/[0.07] w-full max-w-md"
          >
            <div>
              <p className="font-accent text-[10px] uppercase tracking-[0.2em] text-sushi-muted mb-1.5">
                Buffet libre
              </p>
              <p className="font-display text-[2.25rem] font-bold text-white tabular-nums leading-none">
                17,80<span className="text-xl text-sushi-gold ml-0.5">€</span>
              </p>
              <p className="font-sans text-xs text-sushi-muted mt-1.5">por persona · IVA incluido</p>
            </div>
            <div>
              <p className="font-accent text-[10px] uppercase tracking-[0.2em] text-sushi-muted mb-1.5">
                Bebidas
              </p>
              <p className="font-display text-[2.25rem] font-bold text-white leading-none">desde 3€</p>
              <p className="font-sans text-xs text-sushi-muted mt-1.5">sake, cerveza y cócteles</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
          >
            <button type="button" onClick={() => scrollToSection("reserva")} className="btn-primary">
              Reservar mesa
              <ArrowRight className="w-4 h-4" aria-hidden />
            </button>
            <button type="button" onClick={() => scrollToSection("carta")} className="btn-secondary">
              Ver la carta
            </button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex items-center gap-2 font-sans text-xs text-sushi-muted"
          >
            <ShieldCheck className="w-4 h-4 text-sushi-gold shrink-0" aria-hidden />
            Pescado crudo con tratamiento antiparasitario según normativa vigente
          </motion.p>
        </div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative"
        >
          {/* Neon ambient glow behind image */}
          <div className="absolute -inset-4 bg-sushi-neon/[0.06] blur-3xl rounded-3xl pointer-events-none" />

          <figure className="relative rounded-2xl overflow-hidden border border-sushi-gold/20 shadow-2xl shadow-black/60">
            <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] bg-sushi-surface">
              <img
                src={interiorHeroImage}
                alt="Salón principal de Casa del Sushi en Plaza del Rey, Cartagena"
                className="object-cover w-full h-full"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sushi-dark/80 via-sushi-dark/10 to-transparent" />
              <figcaption className="absolute bottom-0 inset-x-0 p-5 sm:p-6">
                <p className="font-accent text-[10px] uppercase tracking-[0.2em] text-sushi-gold font-semibold mb-1">
                  Nuestro salón
                </p>
                <p className="font-sans text-sm text-white/85 leading-snug">
                  Ambiente íntimo con jardín vertical, neón de autor y barra en mármol negro.
                </p>
              </figcaption>
            </div>
          </figure>
        </motion.div>
      </div>
    </section>
  );
}
