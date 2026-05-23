import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, ChevronDown } from "lucide-react";
import interiorHeroImage from "../assets/images/interior_hero_1779464146821.png";
import { scrollToSection } from "../lib/scroll";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-sushi-marble"
      style={{ paddingTop: "var(--scroll-offset)" }}
    >
      {/* ── Imagen full-bleed ── */}
      <div className="relative h-[100svh] min-h-[600px] max-h-[960px]">
        <img
          src={interiorHeroImage}
          alt="Salón principal de Casa del Sushi — banquetas coral, neón azul y barra de mármol. C. San Agustín 6, Cartagena"
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
        />

        {/* Gradientes superpuestos: oscurece esquina inferior-izquierda donde va el texto */}
        <div className="absolute inset-0 bg-gradient-to-t from-sushi-dark via-sushi-dark/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-sushi-dark/70 via-sushi-dark/20 to-transparent" />

        {/* ── Contenido: anclado abajo-izquierda ── */}
        <div className="absolute inset-0 flex flex-col justify-end px-6 sm:px-10 md:px-16 lg:px-20 pb-14 md:pb-20">

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-accent text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.28em] text-sushi-gold mb-5"
          >
            C. San Agustín, 6 · Cartagena, Murcia
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            <span className="block font-display font-bold text-white leading-[0.92] tracking-tight
                             text-[3rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[7rem]">
              Buffet libre
            </span>
            <span className="block font-display font-normal italic text-sushi-coral leading-[1.05] tracking-tight
                             text-[3rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[7rem]">
              de autor
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="flex flex-wrap items-center gap-6 sm:gap-10 mb-8"
          >
            {/* Precio */}
            <div className="flex items-baseline gap-1.5">
              <span className="font-display text-[2.25rem] font-bold text-white tabular-nums leading-none">
                17,80
              </span>
              <span className="font-display text-xl text-sushi-gold leading-none">€</span>
              <span className="font-accent text-[11px] uppercase tracking-[0.15em] text-white/50 ml-2">
                / persona
              </span>
            </div>

            <div className="h-8 w-px bg-white/20 hidden sm:block" aria-hidden />

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => scrollToSection("reserva")}
                className="btn-primary"
              >
                Reservar mesa
                <ArrowRight className="w-4 h-4" aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("carta")}
                className="btn-secondary"
              >
                Ver la carta
              </button>
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
        </div>

        {/* ── Indicador de scroll ── */}
        <motion.button
          type="button"
          onClick={() => scrollToSection("experiencia")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
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

        {/* ── Rating badge esquina superior derecha ── */}
        <motion.div
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="absolute top-8 right-6 md:right-12 flex items-center gap-2.5 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2"
        >
          <div className="flex gap-0.5">
            {[1,2,3,4,5].map(i => (
              <svg key={i} className="w-3 h-3 fill-sushi-gold text-sushi-gold" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="font-accent text-[11px] font-semibold text-white/80 tracking-wide">4,9 Google</span>
        </motion.div>
      </div>
    </section>
  );
}
