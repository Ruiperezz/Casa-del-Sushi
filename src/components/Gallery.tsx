import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Eye, X, ZoomIn, ArrowRight } from "lucide-react";

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

export default function Gallery() {
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  const images: GalleryImage[] = [
    {
      src: interiorHero,
      alt: "Vistas del lujoso salón de Casa del Sushi en Cartagena",
      title: "Salón Principal & Banquetas Coral",
      description: "Atmósfera moderna dominada por nuestra emblemática iluminación de neón azul, banquetas coralinas y refinadas luminarias doradas hexagonales.",
      aspect: "md:col-span-2 aspect-[16/9]"
    },
    {
      src: sushiPlate,
      alt: "Surtido Gourmet de Sushi artesanal sobre mármol negro veteado en oro",
      title: "Nuestra Selección de Sushi",
      description: "Delicadas piezas de nigiri flameado con trufa y uramakis de autor elaborados al instante sobre mármol negro de vetas doradas.",
      aspect: "md:col-span-1 aspect-[4/3] md:aspect-auto"
    },
    {
      src: gardenNeon,
      alt: "Espectacular jardín vertical con neón azul de Casa del Sushi",
      title: "El Espectacular Jardín Vertical",
      description: "Nuestro icónico espacio verde diseñado para brindar frescura natural a la vanguardia de las luces de neón en Plaza del Rey.",
      aspect: "md:col-span-3 aspect-[12/5]"
    }
  ];

  return (
    <section id="galeria" className="py-24 bg-sushi-dark relative overflow-hidden">
      {/* Decorative ambient color spots */}
      <div className="absolute top-1/4 right-[5%] w-96 h-96 bg-sushi-neon/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-[5%] w-96 h-96 bg-sushi-coral/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-accent text-xs font-bold uppercase tracking-[0.25em] text-sushi-gold">
            ELEGANCIA EN DISEÑO
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-white mt-3 mb-6">
            Nuestros Espacios & Arte Visual
          </h2>
          <div className="h-0.5 w-24 bg-gradient-to-r from-sushi-neon via-sushi-gold to-sushi-coral mx-auto my-4" />
          <p className="font-sans text-gray-400 text-sm sm:text-base leading-relaxed">
            Hemos capturado la cuidada esencia decorativa de nuestro restaurante en Plaza del Rey. Un entorno premium concebido para inspirar confianza y deleitar la vista tanto como el paladar.
          </p>
        </div>

        {/* Masonry-like Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              key={index}
              onClick={() => setActiveImage(img)}
              className={`group relative overflow-hidden rounded-2xl border border-white/[0.06] hover:border-sushi-gold/30 bg-sushi-green/25 cursor-pointer shadow-lg hover:shadow-black/60 transition-colors ${img.aspect}`}
            >
              {/* Image element */}
              <div className="w-full h-full overflow-hidden relative">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover scale-[1.01] group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-sushi-dark via-sushi-dark/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Glassy detail elements */}
                <div className="absolute top-4 right-4 p-2.5 rounded-full bg-sushi-dark/60 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Eye className="w-4 h-4 text-sushi-gold" />
                </div>

                {/* Floating Content Card */}
                <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col items-start text-left">
                  <span className="font-accent text-[9px] uppercase tracking-widest text-sushi-gold font-bold mb-1.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sushi-neon shadow-[0_0_6px_#00F0FF]" />
                    <span>Plaza del Rey, Cartagena</span>
                  </span>
                  <h3 className="font-display text-lg font-bold text-white mb-1.5">
                    {img.title}
                  </h3>
                  <p className="font-sans text-[11px] text-gray-300 leading-relaxed translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    {img.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Lightbox Popup */}
        <AnimatePresence>
          {activeImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveImage(null)}
              className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="relative bg-sushi-dark border border-sushi-gold/30 rounded-2xl overflow-hidden max-w-5xl w-full shadow-2xl"
              >
                {/* Close Button Top-right */}
                <button
                  onClick={() => setActiveImage(null)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white hover:text-sushi-coral transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Split detail display inside lightbox */}
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  <div className="lg:col-span-8 bg-black relative flex items-center justify-center aspect-video lg:aspect-auto lg:h-[70vh]">
                    <img
                      src={activeImage.src}
                      alt={activeImage.alt}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="lg:col-span-4 p-8 flex flex-col justify-between text-left h-full bg-sushi-green/20">
                    <div>
                      <span className="font-accent text-[9px] uppercase tracking-widest text-sushi-gold font-bold mb-1">
                        Casa del Sushi Cartagena
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-4">
                        {activeImage.title}
                      </h3>
                      <p className="font-sans text-xs text-gray-400 leading-relaxed mb-6">
                        {activeImage.description}
                      </p>
                      <div className="space-y-3.5 border-t border-white/[0.08] pt-6">
                        <div className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-sushi-coral shrink-0" />
                          <span className="font-sans text-xs text-gray-300">Banquetas Coral Premium</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-sushi-neon shrink-0" />
                          <span className="font-sans text-xs text-gray-300">Luces de Neón Azul Eléctrico</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-sushi-gold shrink-0" />
                          <span className="font-sans text-xs text-gray-300">Lámparas Hexagonales Metálicas</span>
                        </div>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => {
                        setActiveImage(null);
                        const element = document.getElementById("reserva");
                        if (element) element.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="mt-8 w-full py-3 bg-sushi-coral hover:bg-sushi-coral/95 text-white font-accent font-semibold text-xs uppercase tracking-wider rounded-lg transition-all text-center flex items-center justify-center gap-2 group cursor-pointer"
                    >
                      <span>Quiero ir a este rincón</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
