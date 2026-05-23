import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowRight } from "lucide-react";
import { scrollToSection } from "../lib/scroll";

import interiorHero from "../assets/images/interior_hero_1779464146821.png";
import sushiPlate from "../assets/images/sushi_plate_1779464165142.png";
import gardenNeon from "../assets/images/garden_neon_1779464181841.png";

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  description: string;
  aspect: string;
}

const images: GalleryImage[] = [
  {
    src: interiorHero,
    alt: "Salón principal con banquetas coral y luminarias doradas",
    title: "Salón y banquetas",
    description: "Espacio principal con iluminación de autor, tonos coral y detalles dorados.",
    aspect: "md:col-span-2 md:row-span-1",
  },
  {
    src: sushiPlate,
    alt: "Selección de sushi artesanal sobre mármol negro",
    title: "Sushi de autor",
    description: "Piezas flameadas y uramakis servidos al momento sobre mármol veteado.",
    aspect: "md:col-span-1",
  },
  {
    src: gardenNeon,
    alt: "Jardín vertical con iluminación azul en el restaurante",
    title: "Jardín vertical",
    description: "Rincón emblemático que aporta frescura y contraste al salón de Plaza del Rey.",
    aspect: "md:col-span-3",
  },
];

export default function Gallery() {
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  useEffect(() => {
    if (!activeImage) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveImage(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeImage]);

  return (
    <section id="galeria" className="section-pad bg-sushi-marble relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 md:mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <p className="font-accent text-[11px] font-semibold uppercase tracking-[0.22em] text-sushi-gold mb-3">
              El espacio
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight">
              Un salón diseñado{" "}
              <em className="italic font-normal text-sushi-gold">para la experiencia</em>
            </h2>
          </div>
          <p className="font-sans text-sm text-gray-400 max-w-xs sm:text-right leading-relaxed">
            Mármol negro, jardín vertical y neón azul en Plaza del Rey.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-fr">
          {images.map((img) => (
            <button
              key={img.title}
              type="button"
              onClick={() => setActiveImage(img)}
              className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] hover:border-sushi-gold/35 bg-sushi-surface text-left cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sushi-gold ${img.aspect}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full min-h-[220px] md:min-h-[260px] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sushi-dark/95 via-sushi-dark/30 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6">
                <p className="font-accent text-[10px] uppercase tracking-widest text-sushi-gold font-semibold mb-1">
                  Plaza del Rey
                </p>
                <h3 className="font-display text-xl font-semibold text-white">{img.title}</h3>
                <p className="font-sans text-sm text-gray-300 mt-1 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {img.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={activeImage.title}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative card-surface overflow-hidden max-w-4xl w-full"
            >
              <button
                type="button"
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 text-white hover:bg-black transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                aria-label="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-span-3 bg-black">
                  <img src={activeImage.src} alt={activeImage.alt} className="w-full h-full max-h-[60vh] object-cover" />
                </div>
                <div className="lg:col-span-2 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-white mb-3">
                      {activeImage.title}
                    </h3>
                    <p className="font-sans text-sm text-sushi-muted leading-relaxed">
                      {activeImage.description}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveImage(null);
                      scrollToSection("reserva");
                    }}
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
