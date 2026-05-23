import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ShieldCheck, ChevronDown } from "lucide-react";
import interiorHeroImage from "../assets/images/interior_hero_1779464146821.png";
import { scrollToSection } from "../lib/scroll";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax: imagen se mueve más lentamente que el contenido al hacer scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY    = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const contentY  = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const overlayO  = useTransform(scrollYProgress, [0, 0.6], [0.0, 0.45]);

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative overflow-hidden bg-sushi-marble"
      style={{ paddingTop: "var(--scroll-offset)" }}
    >
      <div className="relative h-[100svh] min-h-[600px] max-h-[960px]">

        {/* ── Imagen full-bleed con parallax ── */}
        <motion.img
          src={interiorHeroImage}
          alt="Salón principal de Casa del Sushi — banquetas coral, neón azul y barra de mármol. C. San Agustín 6, Cartagena"
          style={{ y: imageY }}
          className="absolute inset-0 w-full h-[115%] -top-[7.5%] object-cover object-center will-change-transform"
          fetchPriority="high"
        />

        {/* Capa extra de oscurecimiento que se intensifica al scrollear */}
        <motion.div
          style={{ opacity: overlayO }}
          className="absolute inset-0 bg-sushi-dark pointer-events-none"
        />

        {/* Gradientes fijos — ahora con coral y neón vibrante */}
        <div className="absolute inset-0 bg-gradient-to-t from-sushi-dark via-sushi-dark/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-sushi-dark/85 via-sushi-dark/30 to-sushi-coral/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-sushi-coral/5 pointer-events-none" />

        {/* ── Contenido con contra-parallax leve ── */}
        <motion.div
          style={{ y: contentY }}
          className="absolute inset-0 flex flex-col justify-end px-6 sm:px-10 md:px-16 lg:px-20 pb-14 md:pb-20 will-change-transform"
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-accent text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.28em] text-sushi-gold mb-5"
          >
            C. San Agustín, 6 · Cartagena, Murcia
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            <span className="block font-display font-bold text-white leading-[0.92] tracking-tight
                             text-[3rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[7rem]
                             drop-shadow-[0_0_30px_rgba(242,88,71,0.15)]">
              Buffet libre
            </span>
            <span className="block font-display font-normal italic text-sushi-coral leading-[1.05] tracking-tight
                             text-[3rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[7rem]
                             drop-shadow-[0_0_60px_rgba(255,107,86,0.5)] animate-pulse">
              de autor
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-6 sm:gap-10 mb-8"
          >
            <div className="flex items-baseline gap-1.5">
              <span className="font-display text-[2.25rem] font-bold text-white tabular-nums leading-none drop-shadow-[0_0_16px_rgba(242,88,71,0.2)]">17,80</span>
              <span className="font-display text-xl text-sushi-coral leading-none drop-shadow-[0_0_12px_rgba(242,88,71,0.3)]">€</span>
              <span className="font-accent text-[11px] uppercase tracking-[0.15em] text-white/50 ml-2">/ persona</span>
            </div>
            <div className="h-8 w-px bg-gradient-to-b from-transparent via-sushi-gold/40 to-transparent hidden sm:block" aria-hidden />
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.button
                type="button"
                onClick={() => scrollToSection("reserva")}
                className="btn-primary group"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>Reservar mesa</span>
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowRight className="w-4 h-4" aria-hidden />
                </motion.div>
              </motion.button>
              <motion.button
                type="button"
                onClick={() => scrollToSection("carta")}
                className="btn-secondary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Ver la carta
              </motion.button>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-2 font-sans text-xs text-white/40"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-sushi-gold/60 shrink-0" aria-hidden />
            Pescado crudo con tratamiento antiparasitario según normativa vigente
          </motion.p>
        </motion.div>

        {/* Indicador de scroll */}
        <motion.button
          type="button"
          onClick={() => scrollToSection("experiencia")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          aria-label="Desplazarse hacia abajo"
          className="absolute bottom-10 right-8 md:right-14 flex flex-col items-center gap-2 cursor-pointer group"
        >
          <span className="font-accent text-[9px] uppercase tracking-[0.3em] text-white/30 group-hover:text-white/60 transition-colors">
            Descubrir
          </span>
          <ChevronDown
            className="w-5 h-5 text-white/30 group-hover:text-sushi-gold transition-colors"
            style={{ animation: "scroll-hint 2s ease-in-out infinite" }}
          />
        </motion.button>

        {/* Rating badge — neon glow */}
        <motion.div
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.65 }}
          className="absolute top-8 right-6 md:right-12 flex items-center gap-2.5 bg-black/60 backdrop-blur-md border border-sushi-gold/30 rounded-full px-4 py-2
                     shadow-[0_0_24px_rgba(212,166,83,0.3)] hover:shadow-[0_0_32px_rgba(212,166,83,0.5)] hover:border-sushi-gold/60 transition-all duration-300"
        >
          <div className="flex gap-0.5">
            {[1,2,3,4,5].map(i => (
              <svg key={i} className="w-3 h-3 fill-sushi-gold text-sushi-gold drop-shadow-[0_0_4px_rgba(212,166,83,0.4)]" viewBox="0 0 20 20" aria-hidden>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="font-accent text-[11px] font-semibold text-sushi-gold-light tracking-wide">4,9 Google</span>
        </motion.div>

      </div>
    </section>
  );
}
