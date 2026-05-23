import { Check, Info, Flame, Wine, Award } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { scrollToSection } from "../lib/scroll";

const features = [
  {
    icon: Award,
    title: "Hecho al momento",
    description:
      "Pides desde la mesa y la barra prepara cada ronda recién elaborada, sin bandejas en exposición.",
  },
  {
    icon: Flame,
    title: "Carta de autor incluida",
    description:
      "Uramakis, gyozas, nigiris flameados y entrantes premium dentro del precio del buffet.",
  },
  {
    icon: Wine,
    title: "Bebidas desde 3 €",
    description:
      "Sake, cervezas japonesas, refrescos y cócteles de la casa, con maridaje recomendado por nuestro equipo.",
  },
];

const rules = [
  "Buffet libre de lunes a domingo: 17,80 € por persona (IVA incluido).",
  "Las bebidas no están incluidas en el precio del buffet.",
  "Máximo 4 piezas por persona y ronda para garantizar temperatura y calidad.",
  "Política anti-desperdicio: platos sin consumir pueden generar un suplemento.",
];

export default function BuffetPromo() {
  return (
    <section id="experiencia" className="section-pad relative bg-sushi-marble border-t border-white/[0.06] overflow-hidden">
      <div className="absolute inset-0 gold-veins opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          eyebrow="Experiencia buffet"
          title={
            <>
              Calidad de restaurante,{" "}
              <span className="italic font-normal text-sushi-gold">servicio ilimitado</span>
            </>
          }
          description="Redefinimos el buffet en Cartagena: sushi de nivel gastronómico, servido en rondas a tu mesa como en un restaurante a la carta."
        />

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-stretch">
          <article className="xl:col-span-5 card-surface p-8 flex flex-col justify-between">
            <div>
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
                <span className="font-display text-5xl sm:text-6xl font-bold text-white tabular-nums">
                  17,80€
                </span>
                <span className="font-sans text-sm text-sushi-muted">/ persona</span>
              </div>

              <p className="font-sans text-sm text-gray-300 leading-relaxed">
                <span className="text-white font-medium">Bebidas desde 3,00 €</span>
                {" "}— refrescos, cerveza japonesa, sake y cócteles de autor.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-2">
              <span className="font-accent text-[10px] uppercase tracking-widest text-sushi-gold font-semibold">
                C. San Agustín, 6 · Cartagena
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

          <div className="xl:col-span-7 flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {features.map(({ icon: Icon, title, description }, i) => (
                <article
                  key={title}
                  className="card-surface p-6 gold-border-glow-hover flex flex-col"
                >
                  <span className="font-display text-4xl font-bold text-sushi-gold/20 leading-none mb-4 select-none" aria-hidden>
                    0{i + 1}
                  </span>
                  <h4 className="font-accent text-[13px] font-semibold text-white uppercase tracking-[0.12em] mb-2.5">
                    {title}
                  </h4>
                  <p className="font-sans text-sm text-sushi-muted leading-relaxed">{description}</p>
                </article>
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

              {/* Servicios adicionales — fuente: sushify.es */}
              <div className="mt-6 pt-5 border-t border-white/[0.06] grid grid-cols-3 gap-4">
                {[
                  { label: "Specials semanales", detail: "Nuevas piezas cada semana" },
                  { label: "Catas de sake",      detail: "Maridaje sake + sushi guiado" },
                  { label: "Menú infantil",       detail: "Opciones para los más pequeños" },
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
