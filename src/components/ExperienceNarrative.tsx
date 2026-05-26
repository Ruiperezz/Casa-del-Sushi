import { useRef, useEffect } from "react";
import { motion } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { scrollToSection } from "../lib/scroll";

gsap.registerPlugin(ScrollTrigger);

import neonVidriera from "../assets/images/local-neon-vidriera.png";
import salonHexagonos from "../assets/images/local-salon-hexagonos.png";
import sushiPlate from "../assets/images/sushi_plate_1779464165142.png";
import barraJardin from "../assets/images/local-barra-jardin.png";

const MOMENTS = [
  {
    num: "01",
    title: "Llegas",
    body: "El neón azul te recibe desde la puerta. Adentro, el salón te sorprende: mármol, terciopelo coral y luz íntima.",
    img: neonVidriera,
    alt: "Entrada de Casa del Sushi con rótulo de neón azul y vidriera de colores",
    accent: "rgba(26,140,255,0.7)",
  },
  {
    num: "02",
    title: "Te sientas",
    body: "Mesa de mármol negro con ribete dorado. Pides la primera ronda. La barra ya está preparando tu sushi.",
    img: salonHexagonos,
    alt: "Salón de Casa del Sushi con banquetas naranja, sillas azul y lámparas hexagonales",
    accent: "rgba(232,103,60,0.7)",
  },
  {
    num: "03",
    title: "Pruebas",
    body: "Llega recién hecho. Uramakis, nigiris flameados, gyozas. Todo de carta, todo al momento, todo incluido.",
    img: sushiPlate,
    alt: "Plato de sushi artesanal de Casa del Sushi preparado al momento",
    accent: "rgba(201,169,110,0.7)",
  },
  {
    num: "04",
    title: "Te quedas",
    body: "Otra ronda. La barra, el jardín vertical, las copas. No hay prisa. Casa del Sushi se disfruta despacio.",
    img: barraJardin,
    alt: "Barra de Casa del Sushi con jardín vertical y ambiente íntimo",
    accent: "rgba(26,140,255,0.5)",
  },
];

export default function ExperienceNarrative() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card) => {
        if (!card) return;
        const img = card.querySelector<HTMLImageElement>(".narrative-img");
        if (!img) return;
        gsap.fromTo(img,
          { scale: 1.12, yPercent: -5 },
          {
            scale: 1.0,
            yPercent: 5,
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
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="section-pad border-t border-white/[0.05] relative overflow-hidden"
      style={{ background: "#07101E" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 80% 20%, rgba(26,140,255,0.04) 0%, transparent 55%), radial-gradient(ellipse at 10% 80%, rgba(27,61,47,0.15) 0%, transparent 50%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-xl"
        >
          <p className="font-sans text-xs text-sushi-neon uppercase tracking-[0.2em] mb-4">La experiencia</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-[1.08]">
            Una noche en<br />
            <em className="text-sushi-coral not-italic">Casa del Sushi</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {MOMENTS.map(({ num, title, body, img, alt, accent }, i) => (
            <motion.div
              key={num}
              ref={(el) => { cardRefs.current[i] = el; }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden flex flex-col"
              style={{
                border: "1px solid rgba(255,255,255,0.06)",
                minHeight: "420px",
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden flex-1" style={{ minHeight: "260px" }}>
                <img
                  src={img}
                  alt={alt}
                  className="narrative-img absolute inset-0 w-full h-full object-cover"
                  style={{ willChange: "transform", filter: "saturate(1.1) contrast(1.05)" }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07101E] via-[#07101E]/40 to-transparent" />

                {/* Accent bar top */}
                <div
                  className="absolute top-0 inset-x-0 h-[2px]"
                  style={{ background: accent }}
                />

                {/* Number */}
                <div className="absolute top-4 left-4">
                  <span
                    className="font-display text-5xl font-bold leading-none select-none"
                    style={{ color: accent, opacity: 0.35 }}
                  >
                    {num}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div className="p-5 bg-sushi-surface" style={{ border: "none" }}>
                <h3 className="font-display text-xl font-semibold text-white mb-2">{title}</h3>
                <p className="font-sans text-sm text-sushi-muted leading-relaxed">{body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex justify-center"
        >
          <button
            type="button"
            onClick={() => scrollToSection("reserva")}
            className="btn-primary"
          >
            Reservar mi noche
            <ArrowRight className="w-4 h-4" aria-hidden />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
