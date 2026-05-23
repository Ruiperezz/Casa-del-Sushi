import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MENU_ITEMS } from "../data/menu";
import { Leaf, Trophy } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { scrollToSection } from "../lib/scroll";

const CATEGORIES = [
  { id: "all",              label: "Todo el menú" },
  { id: "buffet-starters",  label: "Entrantes" },
  { id: "nigiri-sashimi",   label: "Nigiri y sashimi" },
  { id: "special-rolls",    label: "Rolls de autor" },
  { id: "drinks-cocktails", label: "Bebidas" },
] as const;

type CatId = typeof CATEGORIES[number]["id"];

const CATEGORY_LABELS: Record<string, string> = {
  "buffet-starters":  "Entrantes",
  "nigiri-sashimi":   "Nigiri y Sashimi",
  "special-rolls":    "Rolls de Autor",
  "drinks-cocktails": "Bebidas y Cócteles",
};

export default function MenuFilter() {
  const [active, setActive] = useState<CatId>("all");

  const filtered =
    active === "all"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === active);

  // Agrupa items por categoría para mostrar cabeceras de sección
  const grouped = CATEGORIES.filter(c => c.id !== "all").reduce<
    Record<string, typeof MENU_ITEMS>
  >((acc, cat) => {
    const items = filtered.filter(i => i.category === cat.id);
    if (items.length) acc[cat.id] = items;
    return acc;
  }, {});

  return (
    <section id="carta" className="section-pad bg-gradient-to-t from-sushi-dark to-sushi-marble relative border-t border-sushi-gold/10 overflow-hidden">
      <div className="absolute inset-0 gold-veins pointer-events-none opacity-70" />
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-sushi-neon/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <SectionHeading
          eyebrow="La carta"
          title={<>Elaborado bajo<em className="italic font-normal text-sushi-gold"> demanda</em></>}
          description="Todo el menú incluido en el buffet libre, excepto bebidas. Cada pieza preparada al momento por nuestros sushimen."
        />

        {/* Filtros tipo tab — minimal, elegantes */}
        <div
          className="flex flex-wrap gap-2 mb-12 justify-center"
          role="tablist"
          aria-label="Filtrar carta por categoría"
        >
          {CATEGORIES.map(cat => {
            const isActive = active === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(cat.id)}
                className={`
                  px-5 py-2 font-accent text-[12px] uppercase tracking-[0.12em] font-semibold
                  border-b-2 transition-all duration-200 cursor-pointer
                  ${isActive
                    ? "border-sushi-coral text-sushi-coral drop-shadow-[0_0_8px_rgba(255,92,23,0.45)]"
                    : "border-transparent text-sushi-muted hover:text-white hover:border-white/20"
                  }
                `}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Contenido tipo menú de restaurante */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {Object.entries(grouped).map(([catId, items]) => (
              <div key={catId} className="mb-14 last:mb-0">
                {/* Cabecera de categoría */}
                {active === "all" && (
                  <div className="flex items-center gap-6 mb-6">
                    <h3 className="font-display text-2xl font-bold text-white whitespace-nowrap">
                      {CATEGORY_LABELS[catId]}
                    </h3>
                    <div className="flex-1 h-px bg-sushi-gold/20" />
                  </div>
                )}

                {/* Lista de platos */}
                <ul className="divide-y divide-white/[0.05]">
                  {items.map(item => (
                    <li
                      key={item.id}
                      className="group py-5 px-3 -mx-3 rounded-lg hover:bg-white/[0.02] transition-colors"
                    >
                      <div className="flex items-start justify-between gap-6">
                        {/* Info izquierda */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2.5 flex-wrap mb-1.5">
                            <span className="font-display text-[17px] text-white group-hover:text-sushi-gold-light transition-colors leading-snug">
                              {item.name}
                            </span>
                            {item.isPopular && (
                              <span
                                className="flex items-center gap-1 font-accent text-[9px] uppercase tracking-widest text-sushi-gold border border-sushi-gold/30 rounded px-1.5 py-0.5"
                                title="Popular"
                              >
                                <Trophy className="w-2.5 h-2.5" />
                                Top
                              </span>
                            )}
                          </div>

                          <p className="font-sans text-sm text-gray-400 leading-relaxed mb-2">
                            {item.description}
                          </p>

                          {/* Alérgenos */}
                          {item.allergens.length > 0 ? (
                            <p className="font-sans text-[11px] text-gray-600">
                              Alérgenos: {item.allergens.join(" · ")}
                            </p>
                          ) : (
                            <p className="flex items-center gap-1 font-sans text-[11px] text-emerald-700/80">
                              <Leaf className="w-3 h-3" aria-hidden />
                              Sin alérgenos declarados
                            </p>
                          )}
                        </div>

                        {/* Precio derecha */}
                        <div className="shrink-0 text-right pt-0.5">
                          {item.price ? (
                            <span className="font-display text-xl text-sushi-coral tabular-nums">
                              {item.price.toFixed(2)}€
                            </span>
                          ) : (
                            <div>
                              <span className="font-accent text-[10px] uppercase tracking-widest text-sushi-gold block">
                                Incluido
                              </span>
                              <span className="font-sans text-xs text-gray-500">en el buffet</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Banner alergias */}
        <div className="mt-14 border-t border-white/[0.06] pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-display text-lg font-semibold text-white mb-1">
              Alergias o dietas especiales
            </p>
            <p className="font-sans text-sm text-sushi-muted max-w-lg leading-relaxed">
              Coméntalo al reservar o al llegar. Disponemos de alternativas sin gluten
              y opciones sin pescado crudo cuando lo necesites.
            </p>
          </div>
          <button
            type="button"
            onClick={() => scrollToSection("reserva")}
            className="btn-primary shrink-0"
          >
            Indicarlo al reservar
          </button>
        </div>
      </div>
    </section>
  );
}
