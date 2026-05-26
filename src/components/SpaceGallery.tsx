import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, ArrowRight, Instagram } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "./ui/SectionHeading";
import { VENUE_PHOTOS, type VenuePhoto } from "../data/venue";

gsap.registerPlugin(ScrollTrigger);
import { SITE } from "../data/site";
import { scrollToSection } from "../lib/scroll";

const layoutClass: Record<VenuePhoto["layout"], string> = {
  hero: "md:col-span-2 md:row-span-2 min-h-[300px] md:min-h-[480px]",
  wide: "md:col-span-2 min-h-[240px]",
  tall: "md:row-span-2 min-h-[300px] md:min-h-[480px]",
  standard: "min-h-[240px]",
};

export default function SpaceGallery() {
  const [active, setActive] = useState<VenuePhoto | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // Keyboard / scroll-lock for lightbox
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  // GSAP parallax: each gallery image expands as it scrolls into view
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".gallery-card");
      cards.forEach((card) => {
        const img = card.querySelector<HTMLImageElement>(".gallery-img");
        if (!img) return;

        gsap.fromTo(
          img,
          { scale: 1.14, yPercent: -6 },
          {
            scale: 1.0,
            yPercent: 6,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
          }
        );
      });
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="galeria" className="section-pad bg-sushi-marble border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Fotos del local"
          title="Un sitio que no esperabas en Cartagena"
          description={`Imágenes reales de ${SITE.name}: neón azul, banquetas naranja, mármol negro y jardín vertical. Lo que ves es lo que encontrarás.`}
        />

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 md:grid-flow-dense gap-3 mb-10">
          {VENUE_PHOTOS.map((photo) => (
            <button
              key={photo.id}
              type="button"
              onClick={() => setActive(photo)}
              className={`gallery-card group relative overflow-hidden rounded-xl border border-white/[0.08] hover:border-sushi-gold/35 text-left cursor-pointer ${layoutClass[photo.layout]}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="gallery-img absolute inset-0 w-full h-full object-cover"
                style={{
                  filter: "saturate(1.12) contrast(1.04) brightness(1.02)",
                  willChange: "transform",
                }}
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sushi-dark/90 via-sushi-dark/20 to-transparent" aria-hidden />
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5">
                <h3 className="font-display text-lg font-semibold text-white">{photo.title}</h3>
                <p className="font-sans text-sm text-gray-300/90 mt-1 line-clamp-2">{photo.description}</p>
              </div>
            </button>
          ))}
        </div>
        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-2xl border border-white/10 hover:border-sushi-coral/40 hover:bg-sushi-coral/5 transition-all duration-300"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] flex items-center justify-center shrink-0">
              <Instagram className="w-4 h-4 text-white" />
            </div>
            <div className="text-left">
              <p className="font-sans text-sm font-semibold text-white group-hover:text-sushi-coral transition-colors leading-tight">
                Más fotos del local en Instagram
              </p>
              <p className="font-sans text-xs text-sushi-muted mt-0.5">{SITE.instagramHandle}</p>
            </div>
            <ArrowRight className="w-4 h-4 text-sushi-muted group-hover:text-sushi-coral group-hover:translate-x-1 transition-all duration-200 ml-2" />
          </a>
        </motion.div>
      </div>

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
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.98 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.98 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full card-surface overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setActive(null)}
                className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/70 text-white"
                aria-label="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>
              <img src={active.src} alt={active.alt} className="w-full max-h-[65vh] object-cover" style={{ filter: "saturate(1.12) contrast(1.04)" }} />
              <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-semibold text-white">{active.title}</h3>
                  <p className="font-sans text-sm text-sushi-muted mt-2">{active.description}</p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setActive(null);
                    scrollToSection("reserva");
                  }}
                  className="btn-primary shrink-0"
                >
                  Reservar
                  <ArrowRight className="w-4 h-4" aria-hidden />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
