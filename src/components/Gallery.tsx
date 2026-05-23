import React, { useState, useEffect, useRef, type CSSProperties } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowRight } from "lucide-react";
import { scrollToSection } from "../lib/scroll";

// ─── Hook 3D tilt ────────────────────────────────────────────────────
function useTilt(intensity = 10) {
  const ref = useRef<HTMLButtonElement>(null);
  const [style, setStyle] = useState<CSSProperties>({});

  const onMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width  - 0.5) * intensity;
    const y = ((e.clientY - r.top)  / r.height - 0.5) * -intensity;
    setStyle({
      transform: `perspective(900px) rotateX(${y}deg) rotateY(${x}deg) scale3d(1.02,1.02,1.02)`,
      transition: "transform 0.08s ease-out",
    });
  };

  const onLeave = () => {
    setStyle({
      transform: "perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)",
      transition: "transform 0.55s cubic-bezier(0.22,1,0.36,1)",
    });
  };

  return { ref, style, onMove, onLeave };
}

import interiorHero from "../assets/images/interior_hero_1779464146821.png";
import sushiPlate   from "../assets/images/sushi_plate_1779464165142.png";
import gardenNeon   from "../assets/images/garden_neon_1779464181841.png";

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  description: string;
  caption: string;
}

const images: GalleryImage[] = [
  {
    src: interiorHero,
    alt: "Salón principal con banquetas coral, lámparas hexagonales doradas y neón azul",
    title: "Salón principal",
    description: "Espacio diseñado al detalle: banquetas de coral, iluminación de autor y barra de mármol negro con vetas doradas.",
    caption: "El ambiente",
  },
  {
    src: sushiPlate,
    alt: "Selección de sushi artesanal elaborada al momento sobre mármol negro",
    title: "Sushi de autor",
    description: "Nigiris flameados, uramakis y sashimi premium. Cada pieza preparada al momento por nuestros sushimen.",
    caption: "La cocina",
  },
  {
    src: gardenNeon,
    alt: "Jardín vertical con iluminación de neón azul en el restaurante",
    title: "Jardín vertical",
    description: "El rincón más fotografiado del local. Vegetación viva, neón azul y el ambiente más íntimo de Plaza del Rey.",
    caption: "El jardín",
  },
];

export default function Gallery() {
  const [active, setActive] = useState<GalleryImage | null>(null);

  // 3D tilt — un hook por card (reglas de React: hooks en nivel superior)
  const tilt0 = useTilt(6);
  const tilt1 = useTilt(8);
  const tilt2 = useTilt(8);

  useEffect(() => {
    if (!active) return;
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") setActive(null); };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [active]);

  return (
    <section id="galeria" className="section-pad bg-sushi-dark border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Cabecera editorial: título izquierda, texto derecha */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 md:mb-16"
        >
          <div>
            <p className="font-accent text-[11px] font-semibold uppercase tracking-[0.22em] text-sushi-gold mb-3">
              El espacio
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Un salón diseñado{" "}
              <em className="block italic font-normal text-sushi-coral sm:inline">
                para la experiencia
              </em>
            </h2>
          </div>
          <p className="font-sans text-sm text-gray-400 max-w-xs sm:text-right leading-relaxed">
            Mármol negro, jardín vertical y neón azul en el corazón de Cartagena.
          </p>
        </motion.div>

        {/* Grid asimétrico con 3D tilt en cada card */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 auto-rows-[220px]" style={{ perspective: "1200px" }}>

          {/* Interior — protagonista, 8 cols × 2 filas */}
          <motion.button
            ref={tilt0.ref}
            type="button"
            onClick={() => setActive(images[0])}
            onMouseMove={tilt0.onMove}
            onMouseLeave={tilt0.onLeave}
            style={{ ...tilt0.style, transformStyle: "preserve-3d" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden md:col-span-8 md:row-span-2 bg-sushi-surface cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-sushi-coral
                       border-2 border-transparent hover:border-sushi-coral/40 transition-all duration-300 hover:shadow-[0_0_24px_rgba(242,88,71,0.3)]"
            aria-label={`Ver ${images[0].title}`}
          >
            <img src={images[0].src} alt={images[0].alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
            <div className="absolute inset-0 bg-gradient-to-t from-sushi-dark/85 via-sushi-dark/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-gradient-to-br from-sushi-coral/0 to-sushi-coral/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 inset-x-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <p className="font-accent text-[10px] uppercase tracking-[0.25em] text-sushi-gold mb-1">{images[0].caption}</p>
              <p className="font-display text-2xl font-bold text-white">{images[0].title}</p>
              <p className="font-sans text-sm text-gray-300 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-sm">{images[0].description}</p>
            </div>
          </motion.button>

          {/* Sushi — 4 cols, fila 1 */}
          <motion.button
            ref={tilt1.ref}
            type="button"
            onClick={() => setActive(images[1])}
            onMouseMove={tilt1.onMove}
            onMouseLeave={tilt1.onLeave}
            style={{ ...tilt1.style, transformStyle: "preserve-3d" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative overflow-hidden md:col-span-4 md:row-span-1 bg-sushi-surface cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-sushi-gold
                       border-2 border-transparent hover:border-sushi-neon-dim/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(27,189,206,0.25)]"
            aria-label={`Ver ${images[1].title}`}
          >
            <img src={images[1].src} alt={images[1].alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
            <div className="absolute inset-0 bg-gradient-to-t from-sushi-dark/75 via-transparent to-transparent" />
            <div className="absolute bottom-0 inset-x-0 p-5">
              <p className="font-accent text-[9px] uppercase tracking-widest text-sushi-gold mb-0.5">{images[1].caption}</p>
              <p className="font-display text-lg font-bold text-white">{images[1].title}</p>
            </div>
          </motion.button>

          {/* Jardín — 4 cols, fila 2 — neon prominente */}
          <motion.button
            ref={tilt2.ref}
            type="button"
            onClick={() => setActive(images[2])}
            onMouseMove={tilt2.onMove}
            onMouseLeave={tilt2.onLeave}
            style={{ ...tilt2.style, transformStyle: "preserve-3d" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative overflow-hidden md:col-span-4 md:row-span-1 bg-sushi-surface cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-sushi-neon
                       border-2 border-transparent hover:border-sushi-neon/60 transition-all duration-300 hover:shadow-[0_0_28px_rgba(15,232,255,0.4)]"
            aria-label={`Ver ${images[2].title}`}
          >
            <img src={images[2].src} alt={images[2].alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
            <div className="absolute inset-0 bg-gradient-to-t from-sushi-dark/75 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-sushi-neon/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 inset-x-0 p-5">
              <p className="font-accent text-[9px] uppercase tracking-widest text-sushi-neon mb-0.5 drop-shadow-[0_0_8px_rgba(15,232,255,0.5)] animate-pulse">{images[2].caption}</p>
              <p className="font-display text-lg font-bold text-white">{images[2].title}</p>
            </div>
          </motion.button>

        </div>

        {/* CTA bajo galería */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-center font-sans text-sm text-gray-500"
        >
          ¿Te ha gustado lo que ves?{" "}
          <button
            type="button"
            onClick={() => scrollToSection("reserva")}
            className="text-sushi-gold hover:text-sushi-gold-light transition-colors underline-offset-2 hover:underline"
          >
            Reserva tu mesa
          </button>
        </motion.p>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
            onClick={() => setActive(null)}
            className="fixed inset-0 bg-black/92 z-50 flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={e => e.stopPropagation()}
              className="relative bg-sushi-surface border border-white/[0.08] overflow-hidden max-w-4xl w-full"
            >
              <button
                type="button"
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/60 text-white hover:bg-black transition-colors rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                aria-label="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-span-3 bg-black">
                  <img
                    src={active.src}
                    alt={active.alt}
                    className="w-full h-full max-h-[60vh] object-cover"
                  />
                </div>
                <div className="lg:col-span-2 p-7 sm:p-9 flex flex-col justify-between">
                  <div>
                    <p className="font-accent text-[10px] uppercase tracking-widest text-sushi-gold mb-2">
                      {active.caption}
                    </p>
                    <h3 className="font-display text-2xl font-bold text-white mb-4">
                      {active.title}
                    </h3>
                    <p className="font-sans text-sm text-gray-400 leading-relaxed">
                      {active.description}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => { setActive(null); scrollToSection("reserva"); }}
                    className="btn-primary w-full mt-8"
                  >
                    Reservar en este ambiente
                    <ArrowRight className="w-4 h-4" aria-hidden />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
