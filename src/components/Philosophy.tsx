import { motion } from "motion/react";
import { PHILOSOPHY_IMAGE } from "../data/venue";
import { SITE } from "../data/site";

const highlights = [
  { value: SITE.buffetPrice, label: "Buffet libre completo", tone: "text-sushi-coral" },
  { value: `${SITE.googleRating} ★`, label: "Valoración en Google", tone: "text-sushi-neon" },
  { value: "Al momento", label: "Cada ronda desde la barra", tone: "text-sushi-gold-light" },
];

export default function Philosophy() {
  return (
    <section
      id="historia"
      className="py-20 md:py-28 bg-sushi-dark border-t border-white/[0.05]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.08]">
              <img
                src={PHILOSOPHY_IMAGE}
                alt="Interior de Casa del Sushi en Plaza del Rey: neón azul, vidriera de colores y salón con luz dorada"
                className="w-full h-[360px] sm:h-[440px] lg:h-[520px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sushi-dark/75 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-5 font-sans text-sm text-white/90">
                {SITE.name} · {SITE.location}
              </p>
            </div>
          </motion.div>

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
            </div>

            <ul className="grid grid-cols-3 gap-4 pt-8 border-t border-white/[0.08]">
              {highlights.map((item) => (
                <li key={item.label}>
                  <p className={`font-display text-xl sm:text-2xl font-semibold tabular-nums ${item.tone}`}>
                    {item.value}
                  </p>
                  <p className="font-sans text-xs text-sushi-muted mt-1 leading-snug">{item.label}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
