import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import sushiPlate from "../assets/images/sushi_plate_1779464165142.png";

// ─── Hook contador animado ────────────────────────────────────────────
function useCountUp(end: number, duration = 1200) {
  const [count, setCount] = useState(0);
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTriggered(true); },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!triggered) return;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(ease * end));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [triggered, end, duration]);

  return { count, ref };
}

// ─── Stats con contadores animados ───────────────────────────────────
function AnimatedStats() {
  const year  = useCountUp(2026, 1000);
  const price = useCountUp(1780, 1200); // 1780 → "17,80€"
  const score = useCountUp(49,   900);  // 49   → "4,9★"

  return (
    <div ref={year.ref} className="border-t border-sushi-coral/20 pt-8 grid grid-cols-3 gap-6">
      <div className="p-4 rounded-lg bg-gradient-to-br from-sushi-coral/5 to-transparent border border-sushi-coral/10 hover:border-sushi-coral/30 hover:bg-sushi-coral/10 transition-all duration-300">
        <p className="font-display text-2xl sm:text-3xl font-bold text-sushi-gold-light tabular-nums drop-shadow-[0_0_8px_rgba(212,166,83,0.3)]">
          {year.count}
        </p>
        <p className="font-sans text-xs text-gray-400 mt-1">Año de apertura</p>
      </div>
      <div className="p-4 rounded-lg bg-gradient-to-br from-sushi-coral/5 to-transparent border border-sushi-coral/10 hover:border-sushi-coral/30 hover:bg-sushi-coral/10 transition-all duration-300">
        <p className="font-display text-2xl sm:text-3xl font-bold text-sushi-coral tabular-nums drop-shadow-[0_0_8px_rgba(242,88,71,0.3)]">
          {(price.count / 100).toFixed(2).replace(".", ",")}€
        </p>
        <p className="font-sans text-xs text-gray-400 mt-1">Buffet completo</p>
      </div>
      <div className="p-4 rounded-lg bg-gradient-to-br from-sushi-neon/5 to-transparent border border-sushi-neon/10 hover:border-sushi-neon/40 hover:bg-sushi-neon/10 transition-all duration-300">
        <p className="font-display text-2xl sm:text-3xl font-bold text-sushi-neon tabular-nums drop-shadow-[0_0_8px_rgba(15,232,255,0.3)]">
          {(score.count / 10).toFixed(1).replace(".", ",")}★
        </p>
        <p className="font-sans text-xs text-gray-400 mt-1">Valoración Google</p>
      </div>
    </div>
  );
}

export default function Philosophy() {
  return (
    <section id="historia" className="py-24 md:py-36 bg-gradient-to-b from-sushi-dark to-sushi-dark/95 border-t border-white/[0.05] overflow-hidden
                                      relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-sushi-coral/[0.02] before:to-transparent before:pointer-events-none">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Imagen — ocupa toda la altura, sin bordes redondeados: editorial */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative overflow-hidden">
              <img
                src={sushiPlate}
                alt="Selección de sushi artesanal elaborada al momento en Casa del Sushi"
                className="w-full h-[400px] sm:h-[520px] lg:h-[600px] object-cover"
                loading="lazy"
              />
              {/* Overlay sutil para que la imagen no compita con el texto */}
              <div className="absolute inset-0 bg-gradient-to-t from-sushi-dark/60 via-transparent to-transparent" />

              {/* Caption flotante */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-accent text-[10px] uppercase tracking-[0.25em] text-sushi-gold">
                  Casa del Sushi · Cartagena
                </p>
                <p className="font-sans text-sm text-white/70 mt-1">
                  Elaborado al momento desde la barra
                </p>
              </div>
            </div>

            {/* Detalle decorativo: línea dorada lateral */}
            <div className="absolute -left-4 top-12 bottom-12 w-px bg-gradient-to-b from-transparent via-sushi-gold/40 to-transparent hidden lg:block" />
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2"
          >
            <p className="font-accent text-[11px] font-semibold uppercase tracking-[0.25em] text-sushi-gold mb-5">
              Nuestra filosofía
            </p>

            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-[1.05] mb-6">
              El buffet que{" "}
              <em className="italic font-normal text-sushi-coral block sm:inline">
                nunca imaginaste
              </em>
            </h2>

            <div className="space-y-4 mb-8">
              <p className="font-sans text-[15px] text-gray-300 leading-relaxed">
                Abrimos en Plaza del Rey con una convicción: disfrutar de sushi
                artesanal de primera no debería obligar a elegir entre calidad
                y cantidad.
              </p>
              <p className="font-sans text-sm text-gray-400 leading-relaxed">
                Cada ronda sale de nuestros sushimen directamente a tu mesa.
                Sin vitrinas, sin tiempos de espera, sin concesiones con la
                frescura. Todo el menú por <span className="text-white font-medium">17,80€</span>,
                elaborado al momento, ronda tras ronda.
              </p>
              <p className="font-sans text-sm text-gray-400 leading-relaxed">
                El espacio refleja esa misma ambición: mármol negro veteado en
                oro, jardín vertical, iluminación de neón que hace únicas cada
                visita. El restaurante que Cartagena y sus visitantes merecen.
              </p>
            </div>

            {/* Stats con contador animado */}
            <AnimatedStats />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
