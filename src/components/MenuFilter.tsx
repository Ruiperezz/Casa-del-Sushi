import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MENU_ITEMS } from "../data/menu";
import { Leaf, Trophy } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { scrollToSection } from "../lib/scroll";

const categories = [
  { id: "all", label: "Todos" },
  { id: "buffet-starters", label: "Entrantes" },
  { id: "nigiri-sashimi", label: "Nigiri y sashimi" },
  { id: "special-rolls", label: "Rolls de autor" },
  { id: "drinks-cocktails", label: "Bebidas" },
];

function tagStyles(tag: string) {
  if (tag === "Buffet Incluido") {
    return "bg-sushi-green/80 text-sushi-gold border-sushi-gold/25";
  }
  if (["Favorito del Chef", "Premium", "Especialidad de la Casa"].includes(tag)) {
    return "bg-sushi-gold/10 text-sushi-gold border-sushi-gold/20";
  }
  return "bg-white/[0.04] text-gray-400 border-white/[0.08]";
}

export default function MenuFilter() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems =
    activeCategory === "all"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="carta" className="section-pad bg-sushi-dark relative gold-veins">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          eyebrow="La carta"
          title="Platos elaborados bajo demanda"
          description="Selección de lo que preparan nuestros sushimen en cada servicio. El buffet incluye todas las categorías salvo bebidas, con precio individual."
        />

        <div
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
          role="tablist"
          aria-label="Filtrar por categoría"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full font-accent text-xs font-medium transition-all duration-300 border cursor-pointer ${
                  isActive
                    ? "bg-white text-sushi-dark border-white"
                    : "bg-transparent text-sushi-muted border-white/[0.1] hover:border-sushi-gold/40 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        <motion.ul
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 list-none p-0 m-0"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.li
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="card-surface p-5 flex flex-col gold-border-glow-hover"
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="flex flex-wrap gap-1">
                    {item.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className={`text-[9px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded border ${tagStyles(tag)}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {item.isPopular && (
                    <Trophy className="w-4 h-4 text-sushi-gold shrink-0" aria-label="Popular" />
                  )}
                </div>

                <h3 className="font-display text-lg font-semibold text-white mb-2">{item.name}</h3>
                <p className="font-sans text-sm text-sushi-muted mb-5 leading-relaxed flex-grow">
                  {item.description}
                </p>

                <footer className="border-t border-white/[0.06] pt-4 flex items-end justify-between gap-2">
                  {item.allergens.length > 0 ? (
                    <div className="min-w-0">
                      <span className="text-[10px] text-gray-500 font-medium block mb-1">Alérgenos</span>
                      <div className="flex flex-wrap gap-1">
                        {item.allergens.map((alg) => (
                          <span
                            key={alg}
                            title={`Contiene ${alg}`}
                            className="text-[10px] text-gray-400 bg-white/[0.04] px-1.5 py-0.5 rounded border border-white/[0.06]"
                          >
                            {alg}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <span className="flex items-center gap-1 text-[10px] text-emerald-600/90 font-medium">
                      <Leaf className="w-3 h-3" aria-hidden />
                      Sin alérgenos declarados
                    </span>
                  )}

                  {item.price ? (
                    <span className="font-display text-base font-bold text-sushi-coral tabular-nums shrink-0">
                      {item.price.toFixed(2)}€
                    </span>
                  ) : (
                    <span className="text-right shrink-0">
                      <span className="font-accent text-[9px] text-sushi-gold uppercase block">Incluido</span>
                      <span className="font-sans text-xs text-white">Buffet</span>
                    </span>
                  )}
                </footer>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        <aside className="mt-14 card-surface p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h4 className="font-display text-lg font-semibold text-white mb-2">
              Alergias o dietas especiales
            </h4>
            <p className="font-sans text-sm text-sushi-muted max-w-xl leading-relaxed">
              Coméntalo al reservar o al llegar. Disponemos de alternativas sin gluten y opciones sin
              pescado crudo cuando lo necesites.
            </p>
          </div>
          <button type="button" onClick={() => scrollToSection("reserva")} className="btn-primary shrink-0">
            Indicarlo al reservar
          </button>
        </aside>
      </div>
    </section>
  );
}
