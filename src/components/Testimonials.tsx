import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
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
    role: "Local Guide · 17 reseñas",
    text: "Ayer fuimos a cenar 3 personas y todas coincidimos en lo bueno que está todo. La calidad es excepcional, los camareros súper atentos y el servicio rapidísimo. Volveremos seguro.",
    rating: 5,
    date: "Hace 4 días",
    avatar: "EM",
  },
  {
    id: "test-2",
    author: "Yixuan Jia",
    role: "4 reseñas · 7 fotos",
    text: "¡Menudo descubrimiento! Ubicación perfecta, aparcar facilísimo. El sitio es precioso y elegante. Buffet variado, raciones generosas y sabor espectacular. Auténtico sabor asiático. ¡Superrecomendado!",
    rating: 5,
    date: "Hace una semana",
    avatar: "YJ",
  },
  {
    id: "test-3",
    author: "郑金峰 (Zheng)",
    role: "Local Guide · 12 reseñas",
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
  const [featured, ...rest] = TESTIMONIALS;

  return (
    <section
      id="testimonios"
      className="section-pad bg-sushi-dark relative border-t border-white/[0.05] overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-sushi-coral/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-sushi-neon/3 rounded-full blur-2xl" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <SectionHeading
          align="left"
          eyebrow="Nuestros clientes hablan"
          title="Testimonios reales de visitantes"
          description="Estas son las primeras opiniones de quienes ya han probado Casa del Sushi."
        />

        {/* Featured testimonial — full width */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-5"
        >
          <div className="card-surface p-8 sm:p-10 relative overflow-hidden border border-sushi-coral/20">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-sushi-coral via-sushi-gold to-sushi-coral opacity-80" />
            <Quote className="w-8 h-8 text-sushi-coral/20 mb-5" aria-hidden />
            <div className="flex gap-0.5 mb-5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 text-sushi-gold fill-sushi-gold" aria-hidden />
              ))}
            </div>
            <p className="font-display text-lg sm:text-xl italic text-white/90 leading-relaxed mb-8 max-w-2xl">
              "{featured.text}"
            </p>
            <div className="flex items-center gap-4">
              <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${AVATAR_COLORS[0]} flex items-center justify-center font-sans font-bold text-sm text-white shrink-0`}>
                {featured.avatar}
              </div>
              <div>
                <p className="font-sans font-semibold text-white">{featured.author}</p>
                <p className="font-sans text-xs text-sushi-muted">{featured.role} · {featured.date}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Supporting testimonials — 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {rest.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -3 }}
              className="card-surface p-6 relative overflow-hidden transition-all duration-300"
            >
              <div
                className="absolute inset-x-0 top-0 h-[2px]"
                style={{ background: idx === 0 ? "rgba(26,140,255,0.7)" : "rgba(201,169,110,0.7)" }}
              />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-sushi-gold fill-sushi-gold" aria-hidden />
                ))}
              </div>
              <p className="font-sans text-sm leading-relaxed text-white/80 mb-5 line-clamp-4">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3 border-t border-white/[0.06] pt-4">
                <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${AVATAR_COLORS[idx + 1]} flex items-center justify-center font-sans font-semibold text-xs text-white shrink-0`}>
                  {testimonial.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-sans font-semibold text-sm text-white truncate">{testimonial.author}</p>
                  <p className="font-sans text-xs text-sushi-muted truncate">{testimonial.role} · {testimonial.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews badge + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          {/* Verifiable Google badge */}
          <a
            href={SITE.reviewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-5 py-3.5 rounded-xl transition-all duration-200 group"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.09)",
            }}
            aria-label="Ver reseñas en Google"
          >
            {/* Google coloured G */}
            <svg viewBox="0 0 24 24" className="w-7 h-7 shrink-0" aria-hidden>
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <div>
              <div className="flex items-center gap-1.5 mb-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-sushi-gold fill-sushi-gold" aria-hidden />
                ))}
                <span className="font-display text-base font-bold text-white ml-1">{SITE.googleRating}</span>
              </div>
              <p className="font-sans text-xs text-sushi-muted group-hover:text-white/70 transition-colors">
                Verificado en Google · Ver todas las reseñas →
              </p>
            </div>
          </a>

          <p className="font-sans text-sm text-sushi-muted text-center sm:text-right max-w-xs">
            ¿Has estado en Casa del Sushi? Cuéntanos tu experiencia.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
