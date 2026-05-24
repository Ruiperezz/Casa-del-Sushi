import { motion } from "motion/react";
import { Star, MessageCircle } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { SITE } from "../data/site";

interface Testimonial {
  id: string;
  author: string;
  role: string;
  text: string;
  rating: number;
  date: string;
  avatar: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    author: "Encarni Martínez",
    role: "Cliente desde el primer día",
    text: "Ayer fuimos a cenar 3 personas y todas coincidimos en lo bueno que está todo. La calidad es excepcional, los camareros súper atentos y el servicio rapidísimo. Volveremos seguro.",
    rating: 5,
    date: "Hace 4 días",
    avatar: "EM",
  },
  {
    id: "test-2",
    author: "Yixuan Jia",
    role: "Visitante de Cartagena",
    text: "¡Menudo descubrimiento! Ubicación perfecta, aparcar facilísimo. El sitio es precioso y elegante. Buffet variado, raciones generosas y sabor espectacular. Auténtico sabor asiático. ¡Superrecomendado!",
    rating: 5,
    date: "Hace una semana",
    avatar: "YJ",
  },
  {
    id: "test-3",
    author: "郑金峰 (Zheng)",
    role: "Local Guide en Google",
    text: "La comida estaba buenísima, el ambiente muy agradable y bonito. Todo muy limpio, servicio excelente. La experiencia fue perfecta en todos los sentidos.",
    rating: 5,
    date: "Hace una semana",
    avatar: "ZG",
  },
];

const AVATAR_COLORS = [
  "from-sushi-coral to-sushi-coral-light",
  "from-sushi-neon to-sushi-gold",
  "from-sushi-gold-light to-sushi-coral",
];

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      className="section-pad bg-sushi-dark relative border-t border-white/[0.05] overflow-hidden"
    >
      {/* Ambient elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-sushi-coral/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-sushi-neon/3 rounded-full blur-2xl" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <SectionHeading
          eyebrow="Nuestros clientes hablan"
          title="Testimonios reales de visitantes"
          description="Casa del Sushi lleva abierto poco más de una semana. Estos son los primeros clientes que confían en nosotros."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0, 170, 255, 0.12)" }}
              className="card-surface p-6 relative transition-all duration-300 group"
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                style={{
                  background:
                    idx === 0
                      ? "radial-gradient(ellipse at top-right, rgba(255, 92, 23, 0.08), transparent)"
                      : idx === 1
                      ? "radial-gradient(ellipse at top-right, rgba(0, 170, 255, 0.08), transparent)"
                      : "radial-gradient(ellipse at top-right, rgba(200, 149, 42, 0.08), transparent)",
                }}
              />

              {/* Quote mark icon */}
              <MessageCircle
                className="w-5 h-5 text-white/10 mb-4 group-hover:text-white/20 transition-colors"
                aria-hidden
              />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-sushi-gold fill-sushi-gold" aria-hidden />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="font-sans text-sm leading-relaxed text-white/80 mb-6 line-clamp-5">
                "{testimonial.text}"
              </p>

              {/* Author info */}
              <div className="flex items-center gap-3 border-t border-white/[0.06] pt-6">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${AVATAR_COLORS[idx]} flex items-center justify-center font-sans font-semibold text-xs text-white shrink-0`}
                >
                  {testimonial.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-sans font-semibold text-sm text-white truncate">{testimonial.author}</p>
                  <p className="font-sans text-xs text-sushi-muted truncate">{testimonial.role}</p>
                </div>
              </div>

              {/* Date */}
              <p className="font-sans text-xs text-gray-500 mt-3">{testimonial.date}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA to Google Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="font-sans text-sm text-sushi-muted mb-4">
            ¿Has estado en Casa del Sushi? Cuéntale tu experiencia a otros visitantes.
          </p>
          <a
            href={SITE.reviewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Ver más reseñas en Google
          </a>
        </motion.div>
      </div>
    </section>
  );
}
