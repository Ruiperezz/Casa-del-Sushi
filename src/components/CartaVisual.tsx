import { useRef, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FOOD_IMAGE } from "../data/venue";
import { SITE } from "../data/site";
import { scrollToSection } from "../lib/scroll";

gsap.registerPlugin(ScrollTrigger);

const DESTACADOS = [
  {
    categoria: "Uramakis",
    platos: ["California Roll", "Spicy Tuna Roll", "Dragon Roll", "Ebi Tempura"],
    color: "text-sushi-coral",
    bar: "rgba(232,103,60,0.8)",
  },
  {
    categoria: "Nigiris",
    platos: ["Salmón Flameado", "Atún Akami", "Gambas Rojas", "Vieira"],
    color: "text-sushi-gold",
    bar: "rgba(201,169,110,0.8)",
  },
  {
    categoria: "Entrantes",
    platos: ["Gyoza de Cerdo", "Edamame", "Sopa Miso", "Ensalada Wakame"],
    color: "text-sushi-neon",
    bar: "rgba(26,140,255,0.8)",
  },
];

export default function CartaVisual() {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!imgRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        { scale: 1.1, yPercent: -5 },
        {
          scale: 1.0,
          yPercent: 5,
          ease: "none",
          scrollTrigger: {
            trigger: imgRef.current!.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="carta-visual"
      className="section-pad border-t border-white/[0.05] relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0D1F1A 0%, #0A1628 60%, #0A1628 100%)" }}
    >
      {/* Verde jardín decorativo */}
      <div
        className="absolute inset-y-0 left-0 w-1/3 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 0% 50%, rgba(27,61,47,0.25) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Foto del plato */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative overflow-hidden rounded-2xl" style={{ border: "1px solid rgba(201,169,110,0.2)" }}>
              <img
                ref={imgRef}
                src={FOOD_IMAGE}
                alt="Plato de sushi artesanal de Casa del Sushi: nigiris flameados y uramakis servidos en presentación premium"
                className="w-full h-[420px] sm:h-[500px] object-cover"
                style={{ willChange: "transform", filter: "saturate(1.15) contrast(1.05)" }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sushi-dark/60 via-transparent to-transparent" />
            </div>

            {/* Badge precio */}
            <div
              className="absolute -bottom-5 -right-3 sm:right-6 flex flex-col items-center justify-center w-24 h-24 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(232,103,60,0.15) 0%, rgba(10,22,40,0.95) 100%)",
                border: "1px solid rgba(232,103,60,0.4)",
                boxShadow: "0 0 40px rgba(232,103,60,0.2)",
              }}
            >
              <span className="font-display text-2xl font-bold text-white leading-none">{SITE.buffetPrice.replace(" €", "")}</span>
              <span className="font-sans text-[9px] text-sushi-coral font-semibold uppercase tracking-widest mt-1">€ / persona</span>
              <span className="font-sans text-[8px] text-sushi-muted mt-0.5">todo incluido</span>
            </div>
          </motion.div>

          {/* Carta */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <p className="font-sans text-xs text-sushi-gold uppercase tracking-[0.2em] mb-4">Lo que encontrarás</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold text-white leading-[1.1] mb-4">
              Carta de autor,<br />
              <em className="text-sushi-coral not-italic">todo incluido</em>
            </h2>
            <p className="font-sans text-[15px] text-sushi-muted leading-relaxed mb-10 max-w-md">
              No es un buffet de bandeja. Pides en rondas, la barra lo prepara al momento y llega recién hecho a tu mesa.
              Todo por {SITE.buffetPrice} por persona, sin sorpresas.
            </p>

            <div className="space-y-6 mb-10">
              {DESTACADOS.map(({ categoria, platos, color, bar }) => (
                <div key={categoria} className="relative pl-4">
                  <div
                    className="absolute left-0 top-1 bottom-1 w-[2px] rounded-full"
                    style={{ background: bar }}
                  />
                  <p className={`font-display text-base font-semibold mb-2 ${color}`}>{categoria}</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1">
                    {platos.map((p) => (
                      <span key={p} className="font-sans text-sm text-white/75">{p}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-6 border-t border-white/[0.07]">
              <button
                type="button"
                onClick={() => scrollToSection("carta")}
                className="btn-primary"
              >
                Ver carta completa
                <ArrowRight className="w-4 h-4" aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("reserva")}
                className="btn-secondary"
              >
                Reservar
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
