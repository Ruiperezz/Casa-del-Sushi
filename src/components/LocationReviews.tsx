import { useState, useEffect } from "react";
import { REVIEWS } from "../data/menu";
import { MapPin, Phone, Star, ShieldCheck, ExternalLink, Clock, Baby, GlassWater, CalendarDays } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { motion } from "motion/react";

// ─── Avatar de reseña ──────────────────────────────────────────────
function reviewAvatar(seed: string) {
  const map: Record<string, string> = {
    elena:  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    fran:   "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    carmen: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
  };
  return map[seed] ?? "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150&h=150";
}

// ─── Estado de apertura ────────────────────────────────────────────
function getOpenStatus() {
  const now  = new Date();
  const time = now.getHours() + now.getMinutes() / 60;
  const open = (time >= 13 && time < 16.5) || (time >= 20 && time < 24);
  return { open, label: open ? "Abierto ahora" : "Cerrado · Consulta horario" };
}

// ─── Mapa — dirección real: C. San Agustín, 6, Cartagena ──────────
const MAPS_SEARCH_URL =
  "https://maps.google.com/maps?q=Calle+San+Agust%C3%ADn+6%2C+30201+Cartagena%2C+Murcia%2C+Espa%C3%B1a&output=embed&hl=es&z=17";

const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=Calle+San+Agust%C3%ADn+6%2C+30201+Cartagena%2C+Murcia";

// ─── Servicios adicionales ─────────────────────────────────────────
const EXTRAS = [
  { icon: GlassWater, label: "Catas de sake",      detail: "Maridaje guiado sake + sushi" },
  { icon: CalendarDays, label: "Specials semanales", detail: "Nuevas piezas cada semana" },
  { icon: Baby,        label: "Menú infantil",      detail: "Opciones adaptadas para niños" },
];

// ─── Componente ────────────────────────────────────────────────────
export default function LocationReviews() {
  const [status, setStatus] = useState(getOpenStatus());
  useEffect(() => { setStatus(getOpenStatus()); }, []);

  return (
    <section id="ubicacion" className="section-pad bg-sushi-dark relative border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Visítanos"
          title="Dónde encontrarnos"
          description="C. San Agustín, 6 — en el centro histórico de Cartagena, a pocos pasos del Teatro Romano y el puerto."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* ── Columna izquierda: Datos + Mapa ── */}
          <div className="lg:col-span-6 space-y-5">

            {/* Tarjeta de datos del local */}
            <motion.article
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card-surface p-6 sm:p-8"
            >
              {/* Cabecera: nombre + estado abierto/cerrado */}
              <div className="flex items-start justify-between gap-4 border-b border-white/[0.08] pb-5 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-sushi-coral shrink-0 mt-0.5" aria-hidden />
                  <div>
                    <h3 className="font-display text-lg font-bold text-white leading-tight">
                      Casa del Sushi
                    </h3>
                    <p className="font-sans text-sm text-sushi-gold mt-0.5">
                      C. San Agustín, 6 · 30201 Cartagena, Murcia
                    </p>
                  </div>
                </div>
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-accent font-bold uppercase shrink-0 ${
                    status.open
                      ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400"
                      : "bg-white/5 border border-white/10 text-sushi-muted"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${status.open ? "bg-emerald-400 animate-pulse" : "bg-gray-500"}`}
                    aria-hidden
                  />
                  {status.label}
                </span>
              </div>

              {/* Horario y teléfono */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm font-sans">
                <div>
                  <p className="font-accent text-[10px] uppercase tracking-[0.18em] font-semibold text-gray-500 mb-2.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    Horario
                  </p>
                  <p className="text-white font-medium">Lunes a domingo</p>
                  <p className="text-gray-300 mt-1">13:00 – 16:30 <span className="text-gray-600">· comida</span></p>
                  <p className="text-gray-300">20:00 – 00:00 <span className="text-gray-600">· cena</span></p>
                </div>
                <div>
                  <p className="font-accent text-[10px] uppercase tracking-[0.18em] font-semibold text-gray-500 mb-2.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5" />
                    Contacto
                  </p>
                  <a
                    href="tel:+34968501234"
                    className="text-white font-medium hover:text-sushi-gold transition-colors"
                  >
                    +34 968 50 12 34
                  </a>
                  <p className="text-sushi-muted text-xs mt-1.5">
                    Reservas en horario de servicio
                  </p>
                </div>
              </div>

              {/* Servicios extras */}
              <div className="mt-6 pt-5 border-t border-white/[0.06] grid grid-cols-3 gap-3">
                {EXTRAS.map(({ icon: Icon, label, detail }) => (
                  <div key={label} className="flex flex-col items-center text-center gap-1.5 p-2">
                    <Icon className="w-4 h-4 text-sushi-gold" strokeWidth={1.5} aria-hidden />
                    <p className="font-accent text-[10px] uppercase tracking-wide text-white font-semibold leading-tight">
                      {label}
                    </p>
                    <p className="font-sans text-[10px] text-gray-500 leading-snug">{detail}</p>
                  </div>
                ))}
              </div>
            </motion.article>

            {/* Mapa — dirección real */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="overflow-hidden border border-white/[0.07] aspect-[4/3] bg-sushi-surface"
            >
              <iframe
                title="Mapa: Casa del Sushi — C. San Agustín, 6, Cartagena"
                src={MAPS_SEARCH_URL}
                className="w-full h-full border-0 grayscale-[0.25] contrast-[1.1] brightness-[0.9]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </motion.div>

            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-accent text-xs uppercase tracking-[0.15em] text-sushi-gold hover:text-sushi-gold-light transition-colors"
            >
              Abrir en Google Maps
              <ExternalLink className="w-3.5 h-3.5" aria-hidden />
            </a>
          </div>

          {/* ── Columna derecha: Reseñas ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6"
          >
            <article className="card-surface p-6 sm:p-8 h-full flex flex-col">
              {/* Cabecera: puntuación */}
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-5 mb-6">
                <div>
                  <h3 className="font-display text-lg font-bold text-white">
                    Lo que dicen nuestros clientes
                  </h3>
                  <div className="flex items-center gap-2.5 mt-2">
                    <span className="font-display text-2xl font-bold text-sushi-gold leading-none">
                      4,9
                    </span>
                    <div className="flex gap-0.5" aria-label="4.9 de 5 estrellas">
                      {[1, 2, 3, 4, 5].map(s => (
                        <Star key={s} className="w-4 h-4 text-sushi-gold fill-sushi-gold" />
                      ))}
                    </div>
                    <span className="font-sans text-xs text-sushi-muted">en Google Maps</span>
                  </div>
                </div>
                {/* Badge de verificado */}
                <div className="text-right">
                  <span className="font-accent text-[9px] uppercase tracking-widest text-sushi-gold border border-sushi-gold/25 rounded px-2 py-1">
                    Verificado
                  </span>
                </div>
              </div>

              {/* Lista de reseñas */}
              <ul className="space-y-4 flex-grow">
                {REVIEWS.map(review => (
                  <li
                    key={review.id}
                    className="p-5 rounded-xl bg-sushi-dark/60 border border-white/[0.05]"
                  >
                    <div className="flex gap-3">
                      <img
                        src={reviewAvatar(review.avatarSeed)}
                        alt=""
                        className="w-9 h-9 rounded-full object-cover border border-sushi-gold/20 shrink-0"
                        loading="lazy"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <span className="font-sans text-sm font-semibold text-white truncate">
                            {review.author}
                          </span>
                          <span className="font-sans text-[10px] text-gray-600 shrink-0">
                            {review.date}
                          </span>
                        </div>
                        <div className="flex gap-0.5 mb-2.5" aria-hidden>
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <Star key={i} className="w-3 h-3 text-sushi-gold fill-sushi-gold" />
                          ))}
                        </div>
                        <blockquote className="font-sans text-sm text-gray-300 leading-relaxed">
                          "{review.text}"
                        </blockquote>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Aviso legal */}
              <p className="mt-6 pt-5 border-t border-white/[0.05] flex items-center gap-2 font-sans text-xs text-sushi-muted">
                <ShieldCheck className="w-4 h-4 text-sushi-gold shrink-0" aria-hidden />
                Normativa de higiene alimentaria y tratamiento antiparasitario en pescado crudo.
              </p>
            </article>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
