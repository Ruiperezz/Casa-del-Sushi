import { Check, Info, Flame, Wine, Award } from "lucide-react";
import { motion } from "motion/react";
import SectionHeading from "./ui/SectionHeading";
import TiltCard from "./ui/TiltCard";
import { SITE } from "../data/site";
import { scrollToSection } from "../lib/scroll";

const features = [
  {
    icon: Award,
    title: "Hecho al momento",
    description:
      "Pides desde la mesa y la barra prepara cada ronda recién elaborada, sin bandejas en exposición.",
    accent: "text-sushi-gold",
    bar: "rgba(200,149,42,0.85)",
  },
  {
    icon: Flame,
    title: "Carta de autor incluida",
    description:
      "Uramakis, gyozas, nigiris flameados y entrantes premium dentro del precio del buffet.",
    accent: "text-sushi-coral",
    bar: "rgba(255,92,23,0.85)",
  },
  {
    icon: Wine,
    title: "Bebidas desde 3 €",
    description:
      "Sake, cervezas japonesas, refrescos y cócteles de la casa. Acompañamientos ideales para tu experiencia.",
    accent: "text-sushi-neon",
    bar: "rgba(0,170,255,0.85)",
  },
];

const rules = [
  "Buffet libre de lunes a domingo: 17,80 € por persona (IVA incluido).",
  "Las bebidas no están incluidas en el precio del buffet.",
  "Política anti-desperdicio: aprecia cada plato que pidas.",
];

export default function BuffetPromo() {
  return (
    <section
      id="experiencia"
      className="section-pad relative bg-gradient-to-b from-sushi-surface-alt via-sushi-dark to-sushi-dark border-t border-sushi-gold/15 overflow-hidden"
    >
      <div className="absolute inset-0 gold-veins opacity-60 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-sushi-coral/[0.06] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sushi-neon/[0.05] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          eyebrow="Experiencia buffet"
          title={
            <>
              Calidad de restaurante,{" "}
              <span className="italic font-normal text-sushi-gold">servicio ilimitado</span>
            </>
          }
          description="Sushi de nivel gastronómico en rondas a tu mesa, en un salón con banquetas naranja, neón azul y mármol negro con oro. Todo por 17,80 €."
        />

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-stretch">

          {/* ── Price card ── */}
          <TiltCard
            intensity={6}
            className="xl:col-span-5"
          >
            <article className="card-surface p-8 flex flex-col justify-between h-full border border-sushi-gold/20 shadow-[0_0_60px_rgba(200,149,42,0.07)] relative overflow-hidden">
              {/* Scan shimmer */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl">
                <div className="absolute inset-y-0 w-[15%] bg-gradient-to-r from-transparent via-sushi-gold/[0.04] to-transparent animate-scan" />
              </div>

              <div className="relative z-10">
                <span className="inline-block font-accent text-[10px] uppercase tracking-wider text-sushi-coral font-semibold mb-4">
                  Precio cerrado
                </span>
                <h3 className="font-display text-3xl font-semibold text-white tracking-tight mb-2">
                  Buffet libre artesanal
                </h3>
                <p className="font-sans text-sm text-sushi-muted mb-8">
                  Todo el menú de sushi incluido, excepto bebidas.
                </p>

                <div className="flex items-baseline gap-2 pb-8 border-b border-white/[0.08]">
                  <span className="font-display text-5xl sm:text-6xl font-bold text-white tabular-nums price-glow">
                    17,80€
                  </span>
                  <span className="font-sans text-sm text-sushi-muted">/ persona</span>
                </div>

                <p className="font-sans text-sm text-gray-300 leading-relaxed mt-6">
                  <span className="text-white font-medium">Bebidas desde 3,00 €</span>
                  {" "}— refrescos, cerveza japonesa, sake y cócteles de autor.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-2 relative z-10">
                <span className="font-sans text-sm text-sushi-muted">
                  {SITE.location}
                </span>
                <button
                  type="button"
                  onClick={() => scrollToSection("reserva")}
                  className="btn-primary !py-2 !px-4 !text-[10px]"
                >
                  Reservar
                </button>
              </div>
            </article>
          </TiltCard>

          {/* ── Feature cards + rules ── */}
          <div className="xl:col-span-7 flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {features.map(({ icon: Icon, title, description, accent, bar }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <TiltCard intensity={12} className="h-full">
                    <article className="card-surface p-6 h-full flex flex-col relative overflow-hidden">
                      <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl" style={{ background: bar }} />
                      <Icon className={`w-7 h-7 ${accent} mb-5 mt-2`} strokeWidth={1.25} aria-hidden />
                      <h4 className="font-display text-base font-semibold text-white mb-2 leading-snug">
                        {title}
                      </h4>
                      <p className="font-sans text-sm text-sushi-muted leading-relaxed flex-1">{description}</p>
                    </article>
                  </TiltCard>
                </motion.div>
              ))}
            </div>

            <div className="card-surface p-6 md:p-7">
              <h4 className="font-accent text-xs font-semibold text-sushi-gold uppercase tracking-widest mb-5 flex items-center gap-2">
                <Info className="w-4 h-4 shrink-0" aria-hidden />
                Información transparente
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {rules.map((rule) => (
                  <li key={rule} className="flex items-start gap-3">
                    <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-sushi-gold/15 flex items-center justify-center text-sushi-gold">
                      <Check className="w-3 h-3" strokeWidth={2.5} />
                    </span>
                    <p className="font-sans text-sm text-gray-300 leading-relaxed">{rule}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-5 border-t border-white/[0.06] grid grid-cols-3 gap-4">
                {[
                  { label: "Specials semanales", detail: "Nuevas piezas cada semana" },
                  { label: "Sin gluten",         detail: "Alternativas disponibles" },
                  { label: "Menú infantil",      detail: "Opciones para los más pequeños" },
                ].map(({ label, detail }) => (
                  <div key={label} className="text-center">
                    <p className="font-accent text-[10px] uppercase tracking-wide text-sushi-gold font-semibold leading-tight">
                      {label}
                    </p>
                    <p className="font-sans text-[10px] text-gray-500 mt-0.5 leading-snug">{detail}</p>
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
