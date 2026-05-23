import { motion } from "motion/react";
import sushiPlate from "../assets/images/sushi_plate_1779464165142.png";

export default function Philosophy() {
  return (
    <section id="historia" className="py-24 md:py-36 bg-sushi-dark border-t border-white/[0.05] overflow-hidden">
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

            {/* Separador con datos clave */}
            <div className="border-t border-white/[0.08] pt-8 grid grid-cols-3 gap-6">
              {[
                { value: "2024",    label: "Año de apertura" },
                { value: "17,80€", label: "Buffet completo" },
                { value: "4,9★",   label: "Valoración media" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="font-display text-2xl font-bold text-sushi-gold">{value}</p>
                  <p className="font-sans text-xs text-gray-500 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
