import { type MouseEvent } from "react";
import { useMotionValue, useTransform, useSpring, motion } from "motion/react";
import { CalendarDays } from "lucide-react";
import { PHILOSOPHY_IMAGE } from "../data/venue";
import { SITE } from "../data/site";
import { scrollToSection } from "../lib/scroll";
import { useParallax } from "../lib/useParallax";

const highlights = [
  { value: SITE.buffetPrice, label: "Buffet libre completo", tone: "text-sushi-coral", glow: "glow-coral" },
  { value: `${SITE.googleRating} ★`, label: "Valoración en Google", tone: "text-sushi-neon", glow: "glow-neon" },
  { value: "Al momento", label: "Cada ronda desde la barra", tone: "text-sushi-gold-light", glow: "glow-gold" },
];

export default function Philosophy() {
  const philoImgRef = useParallax<HTMLImageElement>({
    scale: [1.1, 1.0],
    yPercent: [-5, 5],
    scrub: 1.8,
  });

  const xRaw = useMotionValue(0);
  const yRaw = useMotionValue(0);

  const rotateX = useSpring(useTransform(yRaw, [-0.5, 0.5], [7, -7]), {
    stiffness: 180,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(xRaw, [-0.5, 0.5], [-7, 7]), {
    stiffness: 180,
    damping: 22,
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    xRaw.set((e.clientX - rect.left) / rect.width - 0.5);
    yRaw.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    xRaw.set(0);
    yRaw.set(0);
  };

  return (
    <section
      id="historia"
      className="py-20 md:py-28 bg-sushi-dark border-t border-white/[0.05]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── 3D tiltable image panel ── */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <motion.div
              style={{ transformPerspective: 1100, rotateX, rotateY }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] shadow-[0_24px_80px_rgba(0,0,0,0.6)]">
                <img
                  ref={philoImgRef}
                  src={PHILOSOPHY_IMAGE}
                  alt="Interior de Casa del Sushi en Plaza del Rey: neón azul, vidriera de colores y salón con luz dorada"
                  className="w-full h-[360px] sm:h-[440px] lg:h-[520px] object-cover"
                  style={{ willChange: "transform" }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sushi-dark/75 via-transparent to-transparent" />
                <p className="absolute bottom-5 left-5 font-sans text-sm text-white/90">
                  {SITE.name} · {SITE.location}
                </p>
              </div>

              {/* Floating reservation CTA on image */}
              <button
                type="button"
                onClick={() => scrollToSection("reserva")}
                className="absolute top-4 right-4 z-10 animate-float flex items-center gap-2 bg-sushi-coral text-white font-sans text-xs font-semibold px-4 py-2.5 rounded-full shadow-[0_4px_24px_rgba(255,92,23,0.45)] hover:bg-sushi-coral-dark transition-colors"
              >
                <CalendarDays className="w-3.5 h-3.5" aria-hidden />
                Reservar mesa
              </button>
            </motion.div>

            {/* Decorative glow beneath image */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-10 bg-sushi-neon/[0.04] blur-2xl rounded-full pointer-events-none" />
          </motion.div>

          {/* ── Text content ── */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="order-1 lg:order-2"
          >
            <p className="font-sans text-sm text-sushi-gold mb-3">Nuestra filosofía</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-snug mb-5">
              Buen sushi y un sitio que{" "}
              <span className="text-sushi-coral italic">apetece volver</span>
            </h2>
            <div className="space-y-4 mb-10 font-sans text-[15px] text-gray-300 leading-relaxed">
              <p>
                Abrimos en {SITE.location} con una idea sencilla: que puedas comer sushi de verdad,
                en cantidad, sin renunciar al cariño con el que se prepara cada pieza.
              </p>
              <p className="text-sushi-muted text-sm">
                El salón es parte de la experiencia: banquetas naranja, sillas azul, mesas de mármol
                negro con detalle dorado, el neón de nuestro nombre y una vidriera que llena el espacio
                de color. Lo que ves en la galería es lo que encontrarás al llegar.
              </p>
              <p className="text-sushi-muted text-sm">
                El buffet libre a {SITE.buffetPrice} incluye la carta de autor. Pides en rondas, lo
                recibes recién hecho en mesa, y si quieres maridar, en la barra te orientamos.
              </p>

              {/* Voz del equipo */}
              <div className="mt-2 rounded-xl bg-white/[0.03] border border-sushi-gold/15 px-6 py-5">
                <p className="font-display text-base italic text-white/80 leading-relaxed">
                  "Cartagena merecía un sitio así. Lo hemos construido con cariño, para los de aquí y para quien nos visita."
                </p>
                <p className="font-sans text-xs text-sushi-gold font-semibold mt-3">
                  — El equipo de Casa del Sushi
                </p>
              </div>
            </div>

            <ul className="grid grid-cols-3 gap-3 pt-8 border-t border-white/[0.08]">
              {highlights.map((item) => (
                <li
                  key={item.label}
                  className="rounded-xl px-4 py-3 bg-white/[0.025] border border-white/[0.06] text-center"
                >
                  <p className={`font-display text-xl sm:text-2xl font-bold tabular-nums leading-none ${item.tone} ${item.glow}`}>
                    {item.value}
                  </p>
                  <p className="font-sans text-[10px] text-sushi-muted mt-1.5 leading-snug uppercase tracking-wide">{item.label}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
