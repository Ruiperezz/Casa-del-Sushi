import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MENU_ITEMS } from "../data/menu";
import { Sparkles, HelpCircle, Trophy, ShoppingBag, Beer, Flame, Leaf } from "lucide-react";

export default function MenuFilter() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "Todos" },
    { id: "buffet-starters", label: "Entrantes" },
    { id: "nigiri-sashimi", label: "Nigiri & Sashimi" },
    { id: "special-rolls", label: "Rolls de Autor" },
    { id: "drinks-cocktails", label: "Bebidas y Cócteles" }
  ];

  const filteredItems = activeCategory === "all"
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="carta" className="py-24 bg-sushi-dark relative gold-veins">
      {/* Visual background highlights */}
      <div className="absolute top-1/3 left-10 w-80 h-80 rounded-full bg-sushi-neon/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-80 h-80 rounded-full bg-sushi-coral/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-accent text-xs font-bold uppercase tracking-[0.25em] text-sushi-gold">
            CORTES Y TRADICIÓN DE AUTOR
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-white mt-3 mb-6">
            Nuestra Carta Digital
          </h2>
          <div className="h-0.5 w-24 bg-gradient-to-r from-sushi-neon via-sushi-gold to-sushi-coral mx-auto my-4" />
          <p className="font-sans text-gray-400 text-sm sm:text-base leading-relaxed">
            Consulte la selección de platos que se elaboran bajo demanda por nuestros maestros silleros. El buffet libre incluye todas las categorías excepto bebidas que disponen de precios individuales.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 max-w-4xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full font-accent text-xs uppercase tracking-wider font-semibold transition-all duration-300 border cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-white text-sushi-dark border-white shadow-[0_0_15px_rgba(255,255,255,0.25)]"
                  : "bg-sushi-green/40 text-gray-400 border-white/[0.08] hover:border-sushi-gold/40 hover:text-sushi-gold"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className="bg-sushi-green/30 border border-white/[0.06] hover:border-sushi-gold/30 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 shadow-lg hover:shadow-black/70 group"
              >
                <div>
                  {/* Card Header Tags */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex flex-wrap gap-1">
                      {item.tags.slice(0, 2).map((tag, i) => (
                        <span
                          key={i}
                          className={`text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-md ${
                            tag === "Buffet Incluido"
                              ? "bg-sushi-neon/10 text-sushi-neon border border-sushi-neon/20 shadow-[0_0_8px_rgba(0,F,F,0.15)] animate-pulse"
                              : tag === "Favorito del Chef" || tag === "Premium" || tag === "Especialidad de la Casa"
                              ? "bg-sushi-gold/10 text-sushi-gold border border-sushi-gold/20"
                              : "bg-sushi-coral/10 text-sushi-coral border border-sushi-coral/20"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Popular/Featured Crown Icon */}
                    {item.isPopular && (
                      <div className="p-1 rounded-full bg-sushi-gold/15 text-sushi-gold border border-sushi-gold/20 shadow-[0_0_6px_rgba(197,160,89,0.3)]">
                        <Trophy className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>

                  {/* Pricing / Category Header */}
                  <div className="flex items-baseline justify-between gap-2 mb-2">
                    <h3 className="font-display text-base font-bold text-white group-hover:text-sushi-gold transition-colors duration-300">
                      {item.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-xs text-gray-400 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Footer and Price/Allergens */}
                <div className="border-t border-white/[0.05] pt-4 mt-auto">
                  <div className="flex items-center justify-between gap-2">
                    {/* Allergens Details */}
                    {item.allergens.length > 0 ? (
                      <div className="flex items-center gap-1">
                        <span className="text-[10px] text-gray-500 font-accent uppercase tracking-wider font-medium">Alérgenos:</span>
                        <div className="flex gap-1">
                          {item.allergens.map((alg, k) => (
                            <span
                              key={k}
                              title={`Contiene ${alg}`}
                              className="text-[9px] text-gray-300 bg-white/[0.04] px-1 rounded border border-white/[0.04]"
                            >
                              {alg}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1 text-emerald-500/80">
                        <Leaf className="w-3 h-3" />
                        <span className="text-[9px] uppercase tracking-wider font-bold">Sin Alérgenos</span>
                      </div>
                    )}

                    {/* Price or Buffet Indicator */}
                    <div>
                      {item.price ? (
                        <span className="font-display text-sm font-bold text-sushi-coral">
                          {item.price.toFixed(2)}€
                        </span>
                      ) : (
                        <div className="flex flex-col items-end">
                          <span className="font-accent text-[9px] font-bold text-sushi-gold leading-none uppercase tracking-wide">
                            Incluido en
                          </span>
                          <span className="font-display text-xs font-semibold text-white leading-none mt-1">
                            Buffet 17.80€
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Highlight Banner under menu */}
        <div className="mt-16 bg-gradient-to-r from-sushi-neon/10 via-sushi-green to-sushi-coral/10 border border-sushi-gold/25 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-start gap-4 text-left max-w-xl">
            <div className="p-3 bg-sushi-gold/15 text-sushi-gold rounded-xl shrink-0 mt-1 border border-sushi-gold/20">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display text-lg font-bold text-white mb-1">
                ¿Alergias o requisitos dietéticos especiales?
              </h4>
              <p className="font-sans text-xs text-gray-400 leading-normal">
                Indíquelo con total tranquilidad a nuestros camareros al llegar o al rellenar el formulario de reserva rápida. Ofrecemos alternativas adaptadas con salsa de soja sin gluten y cortes sin pescados crudos para embarazadas.
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              const element = document.getElementById("reserva");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-3 bg-white text-sushi-dark rounded-lg font-accent font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:bg-sushi-gold hover:text-white cursor-pointer hover:shadow-lg shadow-white/10 shrink-0"
          >
            Reservar mesa ahora
          </button>
        </div>

      </div>
    </section>
  );
}
