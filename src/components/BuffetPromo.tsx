import { motion } from "motion/react";
import { Check, Info, Flame, Wine, Compass, Award } from "lucide-react";

export default function BuffetPromo() {
  const features = [
    {
      icon: <Award className="w-5 h-5 text-sushi-gold" />,
      title: "Elaboración Al Momento",
      description: "Olvídate de bandejas templadas. Pides cómodamente desde tu mesa y nuestros chefs de la barra lo enrollan y flamean al instante para ti."
    },
    {
      icon: <Flame className="w-5 h-5 text-sushi-coral" />,
      title: "Variedad de Autor Incluida",
      description: "Uramakis creativos, Gyozas crujientes, ensaladas crujientes y Nigiris clásicos flameados con salsas secretas y trufa negra premium."
    },
    {
      icon: <Wine className="w-5 h-5 text-sushi-neon" />,
      title: "Bebidas desde 3€",
      description: "Desde cervezas de importación como Kirin Ichiban, sake de alta calidad fría o tibia, refrescos de la casa y cócteles luminiscentes de autor."
    }
  ];

  const rules = [
    "Precio de Buffet Libre de Lunes a Domingo por solo 17,80€.",
    "Bebidas no incluidas en el precio base del buffet (a partir de 3,00€).",
    "Pide rondas continuas de hasta 4 platos por persona para asegurar que disfrutes de cada pieza en su temperatura óptima.",
    "Evita el desperdicio: platos que queden completamente rascados o sin consumir tendrán un suplemento estipulado para fomentar un consumo consciente."
  ];

  return (
    <section id="experiencia" className="relative py-24 bg-sushi-marble border-t border-b border-sushi-gold/10 overflow-hidden">
      {/* Decorative Gold Veins Background lines */}
      <div className="absolute inset-0 gold-veins opacity-50 pointer-events-none" />
      <div className="absolute -top-[10%] -right-[15%] w-96 h-96 bg-sushi-coral/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-[10%] -left-[15%] w-96 h-96 bg-sushi-neon/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-accent text-xs font-bold uppercase tracking-[0.2em] text-sushi-neon drop-shadow-[0_0_8px_rgba(0,240,255,0.6)]">
            ESTILO BUFFET DE AUTOR
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-white mt-3 mb-6">
            La Experiencia <span className="italic font-normal">Gourmet</span> Ilimitada
          </h2>
          <div className="h-0.5 w-24 bg-gradient-to-r from-sushi-neon via-sushi-gold to-sushi-coral mx-auto my-4" />
          <p className="font-sans text-gray-400 text-sm sm:text-base leading-relaxed">
            Hemos redefinido el concepto de buffet libre en Cartagena. Ofrecemos sushi recién enrollado de calidad gastronómica con el servicio de un restaurante premium a la carta.
          </p>
        </div>

        {/* Pricing Layout Callout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Main Pricing Hero Card */}
          <div className="lg:col-span-12 xl:col-span-5 bg-sushi-green border border-sushi-gold/30 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl">
            {/* Dark green decorative accent overlay */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-sushi-gold/10 to-transparent rounded-bl-full pointer-events-none" />
            
            <div>
              <div className="inline-block bg-sushi-coral/10 border border-sushi-coral/30 rounded-full px-3 py-1 mb-6">
                <span className="font-accent text-[9px] uppercase tracking-wider text-sushi-coral font-bold">
                  El Favorito de Cartagena
                </span>
              </div>
              <h3 className="font-display text-4xl font-semibold text-white tracking-tight leading-none mb-2">
                Buffet Libre Artesanal
              </h3>
              <p className="font-sans text-xs text-gray-400 mb-6">
                Servido directamente a tu mesa, de forma ilimitada y recién hecho.
              </p>

              {/* Big Price Tag */}
              <div className="flex items-baseline gap-2 mb-6 border-b border-white/[0.08] pb-6">
                <span className="font-accent text-lg text-gray-400 font-light">Solo</span>
                <span className="font-display text-5xl sm:text-6xl font-black text-white tracking-tight">
                  17,80€
                </span>
                <span className="font-sans text-sm text-gray-400">/persona</span>
              </div>

              {/* Drinks callout */}
              <div className="flex items-center gap-3 p-3 bg-sushi-dark/60 rounded-xl border border-sushi-gold/10">
                <div className="w-2.5 h-2.5 rounded-full bg-sushi-neon animate-pulse shrink-0" />
                <p className="font-sans text-xs text-gray-300">
                  <strong className="text-white">Bebidas a partir de 3,00€</strong> — Refrescos locales, cervezas japonesas heladas, sake premium e increíbles combinados.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between">
              <span className="font-accent text-[10px] uppercase tracking-widest text-sushi-gold font-bold">
                Plaza del Rey, Cartagena
              </span>
              <span className="font-sans text-[10px] text-gray-500">
                IVA Incluido • Todos los días
              </span>
            </div>
          </div>

          {/* Core Features Column Grid */}
          <div className="lg:col-span-12 xl:col-span-7 flex flex-col gap-6 justify-between">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feat, index) => (
                <div
                  key={index}
                  className="bg-sushi-dark border border-white/[0.06] rounded-xl p-6 transition-all duration-300 hover:border-sushi-gold/30 gold-border-glow-hover flex flex-col justify-start"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/[0.02] flex items-center justify-center border border-white/[0.08] mb-4">
                    {feat.icon}
                  </div>
                  <h4 className="font-accent text-[13px] font-bold text-white uppercase tracking-wider mb-2">
                    {feat.title}
                  </h4>
                  <p className="font-sans text-xs text-gray-400 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Practical Rules Checklist (Trust Factors) */}
            <div className="bg-sushi-green/45 border border-sushi-gold/15 rounded-xl p-6">
              <h4 className="font-accent text-[11px] font-bold text-sushi-gold uppercase tracking-widest mb-4 flex items-center gap-2">
                <Info className="w-4 h-4 text-sushi-gold shrink-0" />
                <span>Información & Pautas de Confianza</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {rules.map((rule, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <div className="p-0.5 rounded-full bg-sushi-gold/20 text-sushi-gold mt-1 shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <p className="font-sans text-[11px] text-gray-300 leading-normal">
                      {rule}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
