import { useRef, type MouseEvent } from "react";
import { useMotionValue, useTransform, useSpring, motion } from "motion/react";
import { ArrowRight, ShieldCheck, Star, MapPin, ChevronDown } from "lucide-react";
import { HERO_IMAGE } from "../data/venue";
import { SITE } from "../data/site";
import { scrollToSection } from "../lib/scroll";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateY = useSpring(useTransform(mouseX, [0, 1], [6, -6]), {
    stiffness: 80,
    damping: 22,
  });
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [-4, 4]), {
    stiffness: 80,
    damping: 22,
  });

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative overflow-hidden bg-sushi-dark"
      style={{ paddingTop: "var(--scroll-offset)" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Ambient blobs — naranja de las banquetas + azul del neón */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute -bottom-40 right-0 w-[600px] h-[500px] coral-blob"
          style={{ background: "rgba(255,92,23,0.07)" }}
        />
        <div
          className="absolute top-0 -right-20 w-[300px] h-[300px] coral-blob"
          style={{ background: "rgba(0,170,255,0.06)", animationDelay: "3.5s" }}
        />
      </div>

      <div className="relative min-h-[88svh] max-h-[840px] flex flex-col lg:flex-row z-10">

        {/* ── Panel imagen con paralaje 3D ── */}
        <motion.div
          className="relative flex-1 min-h-[50vh] lg:min-h-0"
          style={{
            rotateX,
            rotateY,
            transformPerspective: 1400,
            transformOrigin: "center center",
          }}
        >
          <img
            src={HERO_IMAGE}
            alt="Salón de Casa del Sushi en Plaza del Rey: banquetas naranja vibrante, mesas de mármol negro con ribete dorado y rótulo de neón azul eléctrico"
            className="absolute inset-0 w-full h-full object-cover"
            fetchPriority="high"
          />
          {/* Gradiente lateral hacia el panel de texto */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sushi-dark/10 to-sushi-dark/90 lg:to-sushi-dark" />
          {/* Gradiente inferior en móvil */}
          <div className="absolute inset-0 bg-gradient-to-t from-sushi-dark/70 to-transparent lg:hidden" />

          {/* Badge flotante — rating Google */}
          <div className="absolute top-5 right-5 z-20 animate-float hidden sm:block">
            <div
              className="flex items-center gap-2.5 rounded-xl px-4 py-2.5"
              style={{
                background: "rgba(6,16,12,0.92)",
                border: "1px solid rgba(200,149,42,0.5)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.5), 0 0 20px rgba(200,149,42,0.1)",
              }}
            >
              <Star className="w-4 h-4 text-sushi-gold fill-sushi-gold" aria-hidden />
              <div className="leading-none">
                <span className="font-display text-base font-bold text-white">4,9</span>
                <span className="font-sans text-[10px] text-sushi-muted ml-1.5">Google</span>
              </div>
            </div>
          </div>

          {/* Badge flotante — ubicación */}
          <div className="absolute bottom-5 left-5 z-20 animate-float-slow hidden sm:block">
            <div
              className="flex items-center gap-2 rounded-lg px-3 py-2"
              style={{
                background: "rgba(6,16,12,0.88)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <MapPin className="w-3.5 h-3.5 text-sushi-coral shrink-0" aria-hidden />
              <span className="font-sans text-xs text-white/90">Plaza del Rey, Cartagena</span>
            </div>
          </div>
        </motion.div>

        {/* ── Panel contenido ── */}
        <div
          className="relative flex-1 flex flex-col justify-center px-6 sm:px-10 lg:px-12 py-12 lg:py-16"
          style={{ background: "linear-gradient(135deg, rgba(6,16,12,0.97) 0%, rgba(6,16,12,0.92) 100%)" }}
        >
          {/* Textura de venas de oro */}
          <div className="absolute inset-0 gold-veins opacity-50 pointer-events-none" />
          {/* Resplandor naranja en la esquina inferior — como el reflejo de las banquetas */}
          <div
            className="absolute -bottom-20 -left-20 w-80 h-80 pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(255,92,23,0.08) 0%, transparent 70%)" }}
          />

          <motion.div
            className="relative z-10 max-w-lg"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
            }}
          >
            {/* Location eyebrow */}
            <motion.p
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="inline-flex items-center gap-2 font-sans text-xs text-sushi-gold mb-5 tracking-widest uppercase"
            >
              <span className="w-5 h-px bg-sushi-gold/50" />
              {SITE.location}
              <span className="w-5 h-px bg-sushi-gold/50" />
            </motion.p>

            <motion.h1
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="font-display text-[2.15rem] sm:text-[2.8rem] lg:text-[3.1rem] font-semibold text-white leading-[1.06] mb-6"
            >
              Buffet libre de sushi artesanal en el centro de{" "}
              <em className="not-italic text-sushi-coral-light">Cartagena</em>
            </motion.h1>

            <motion.p
              variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="font-sans text-[15px] text-white/70 leading-relaxed mb-8"
            >
              Un restaurante con carácter propio: neón azul eléctrico, banquetas naranja,
              mármol negro y latón dorado. Todo el menú por{" "}
              <span className="text-white font-medium">{SITE.buffetPrice}</span> por persona,
              servido en tu mesa.
            </motion.p>

            {/* Precio — el gran diferencial */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="flex flex-wrap items-baseline gap-x-6 gap-y-2 mb-8 pb-8"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div className="flex items-baseline gap-1">
                <span className="font-display text-[3rem] sm:text-[3.5rem] font-bold text-white tabular-nums leading-none price-glow">
                  {SITE.buffetPrice.replace(" €", "")}
                </span>
                <span
                  className="font-display text-2xl font-bold ml-0.5 glow-coral"
                  style={{ color: "var(--color-sushi-coral)" }}
                >
                  €
                </span>
                <span className="font-sans text-sm text-sushi-muted ml-2">/ persona · IVA incl.</span>
              </div>
              <p className="font-sans text-sm text-sushi-muted">
                <span className="font-medium glow-gold" style={{ color: "var(--color-sushi-gold)" }}>
                  {SITE.googleRating} ★
                </span>
                {" "}en Google
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="flex flex-col sm:flex-row gap-3 mb-6"
            >
              <button
                type="button"
                onClick={() => scrollToSection("reserva")}
                className="btn-primary animate-pulse-ring"
              >
                Reservar mesa
                <ArrowRight className="w-4 h-4" aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("galeria")}
                className="btn-secondary"
              >
                Ver fotos del local
              </button>
            </motion.div>

            <motion.p
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5 } } }}
              className="flex items-start gap-2 font-sans text-xs text-sushi-muted leading-relaxed"
            >
              <ShieldCheck className="w-4 h-4 text-sushi-gold shrink-0 mt-0.5" aria-hidden />
              Pescado crudo tratado según normativa de consumo seguro.
            </motion.p>
          </motion.div>

          {/* Scroll indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-1.5 animate-scroll-hint pointer-events-none">
            <span className="font-sans text-[9px] uppercase tracking-[0.15em] text-white/30">
              Explorar
            </span>
            <ChevronDown className="w-4 h-4 text-white/30" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
