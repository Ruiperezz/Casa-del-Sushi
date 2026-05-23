import { ArrowRight, ShieldCheck } from "lucide-react";
import { HERO_IMAGE } from "../data/venue";
import { SITE } from "../data/site";
import { scrollToSection } from "../lib/scroll";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-sushi-marble"
      style={{ paddingTop: "var(--scroll-offset)" }}
    >
      <div className="relative min-h-[88svh] max-h-[840px] flex flex-col lg:flex-row">
        <div className="relative flex-1 min-h-[50vh] lg:min-h-0">
          <img
            src={HERO_IMAGE}
            alt="Salón de Casa del Sushi en Plaza del Rey: banquetas naranja, sillas azul y lámparas hexagonales"
            className="absolute inset-0 w-full h-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sushi-dark/20 to-sushi-dark/80 lg:to-sushi-dark/95" />
          <div className="absolute inset-0 bg-gradient-to-t from-sushi-dark/60 to-transparent lg:hidden" />
        </div>

        <div className="relative flex-1 flex flex-col justify-center px-6 sm:px-10 lg:px-12 py-12 lg:py-16 bg-sushi-dark/95 lg:bg-sushi-dark/80">
          <p className="font-sans text-sm text-sushi-gold mb-4">{SITE.location}</p>

          <h1 className="font-display text-[2.25rem] sm:text-5xl lg:text-[3.25rem] font-semibold text-white leading-[1.08] mb-5">
            Buffet libre de sushi artesanal en el centro de Cartagena
          </h1>

          <p className="font-sans text-base text-gray-300 leading-relaxed max-w-md mb-8">
            Un restaurante con carácter propio: neón azul, banquetas naranja, mármol y oro.
            Todo el menú de sushi por {SITE.buffetPrice} por persona, servido en tu mesa.
          </p>

          <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2 mb-8 pb-8 border-b border-white/[0.08]">
            <div>
              <span className="font-display text-4xl font-semibold text-white tabular-nums">
                {SITE.buffetPrice.replace(" €", "")}
              </span>
              <span className="font-display text-2xl text-sushi-coral ml-0.5">€</span>
              <span className="font-sans text-sm text-sushi-muted ml-2">/ persona · IVA incluido</span>
            </div>
            <p className="font-sans text-sm text-sushi-muted">
              <span className="text-sushi-gold font-medium">{SITE.googleRating} ★</span> en Google
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <button type="button" onClick={() => scrollToSection("reserva")} className="btn-primary">
              Reservar mesa
              <ArrowRight className="w-4 h-4" aria-hidden />
            </button>
            <button type="button" onClick={() => scrollToSection("galeria")} className="btn-secondary">
              Ver fotos del local
            </button>
          </div>

          <p className="flex items-start gap-2 font-sans text-xs text-sushi-muted leading-relaxed">
            <ShieldCheck className="w-4 h-4 text-sushi-gold shrink-0 mt-0.5" aria-hidden />
            Pescado crudo tratado según normativa de consumo seguro.
          </p>
        </div>
      </div>
    </section>
  );
}
