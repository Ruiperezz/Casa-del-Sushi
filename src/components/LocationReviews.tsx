import { useState, useEffect } from "react";
import { REVIEWS } from "../data/menu";
import {
  MapPin, Phone, Star, ShieldCheck, ExternalLink,
  Clock, Baby, GlassWater, CalendarDays, PenLine, Quote,
} from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { SITE } from "../data/site";
import { motion } from "motion/react";

// ─── Avatar ──────────────────────────────────────────────────────────
function reviewAvatar(seed: string) {
  const map: Record<string, string> = {
    maria:  "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150",
    javier: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=150&h=150",
    ana:    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    carlos: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    laura:  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
  };
  return map[seed] ?? "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150&h=150";
}

// ─── Horarios reales ─────────────────────────────────────────────────
//  Lunes–Jueves, Domingo:  12:00–16:30 / 19:00–23:30
//  Viernes–Sábado:         12:00–16:30 / 19:00–24:00

function getOpenStatus() {
  const now    = new Date();
  const h      = now.getHours() + now.getMinutes() / 60;
  const day    = now.getDay(); // 0=Dom, 5=Vie, 6=Sáb
  const isFriSat = day === 5 || day === 6;

  const lunchOpen  = h >= 12 && h < 16.5;
  const dinnerClose = isFriSat ? 24 : 23.5;
  const dinnerOpen  = h >= 19 && h < dinnerClose;

  const open = lunchOpen || dinnerOpen;
  let label: string;
  if (open) {
    label = "Abierto ahora";
  } else if (h >= 16.5 && h < 19) {
    label = "Abre a las 19:00";
  } else {
    label = "Cerrado · Abre a las 12:00";
  }
  return { open, label };
}

const HOURS_TABLE = [
  { days: "Lunes – Jueves",  lunch: "12:00–16:30", dinner: "19:00–23:30" },
  { days: "Viernes",         lunch: "12:00–16:30", dinner: "19:00–00:00" },
  { days: "Sábado",          lunch: "12:00–16:30", dinner: "19:00–00:00" },
  { days: "Domingo",         lunch: "12:00–16:30", dinner: "19:00–23:30" },
];

const MAPS_EMBED = `https://maps.google.com/maps?cid=5432541503168016239&output=embed&hl=es`;
const MAPS_LINK = SITE.mapsDirectLink;
const REVIEW_LINK = SITE.reviewLink;

const EXTRAS = [
  { icon: GlassWater,   label: "Bebidas desde 3€",    detail: "Sake, cerveza, cócteles de autor" },
  { icon: CalendarDays, label: "Specials semanales",  detail: "Nuevas piezas cada semana" },
  { icon: Baby,         label: "Menú infantil",       detail: "Opciones para los más pequeños" },
];

// ─── Componente ───────────────────────────────────────────────────────
export default function LocationReviews() {
  const [status, setStatus] = useState(getOpenStatus());
  useEffect(() => { setStatus(getOpenStatus()); }, []);

  return (
    <section id="ubicacion" className="section-pad bg-gradient-to-b from-sushi-dark via-sushi-marble to-sushi-dark relative border-t border-white/[0.05]
                                      before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-sushi-neon/[0.01] before:to-transparent before:pointer-events-none">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Visítanos"
          title="Dónde encontrarnos"
          description={`${SITE.location}. En el centro histórico, a pocos pasos del Teatro Romano y el puerto.`}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* ── Columna izquierda: info + mapa ── */}
          <div className="lg:col-span-6 space-y-5">

            {/* Tarjeta info */}
            <motion.article
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ boxShadow: "0 0 24px rgba(0, 170, 255, 0.18)" }}
              className="card-surface p-6 sm:p-8 transition-shadow duration-300"
            >
              {/* Cabecera */}
              <div className="flex items-start justify-between gap-4 border-b border-white/[0.08] pb-5 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-sushi-coral shrink-0 mt-0.5" aria-hidden />
                  <div>
                    <h3 className="font-display text-lg font-bold text-white leading-tight">
                      Casa del Sushi
                    </h3>
                    <p className="font-sans text-sm text-sushi-gold mt-0.5">
                      {SITE.location} · {SITE.locationDetail}
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
                  <span className={`w-1.5 h-1.5 rounded-full ${status.open ? "bg-emerald-400 animate-pulse" : "bg-gray-500"}`} aria-hidden />
                  {status.label}
                </span>
              </div>

              {/* Horario detallado + teléfono */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm font-sans mb-6">
                <div>
                  <p className="font-accent text-[10px] uppercase tracking-[0.18em] font-semibold text-gray-500 mb-3 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    Horario
                  </p>
                  <div className="space-y-1.5">
                    {HOURS_TABLE.map(({ days, lunch, dinner }) => (
                      <div key={days} className="grid grid-cols-[auto_1fr] gap-x-3 text-xs">
                        <span className="text-gray-500 whitespace-nowrap">{days}</span>
                        <span className="text-gray-300">{lunch} · {dinner}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-accent text-[10px] uppercase tracking-[0.18em] font-semibold text-gray-500 mb-3 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5" />
                    Contacto
                  </p>
                  <a
                    href={`tel:${SITE.phone}`}
                    className="text-white font-semibold text-base hover:text-sushi-gold transition-colors tracking-wide"
                  >
                    {SITE.phoneDisplay}
                  </a>
                  <p className="text-sushi-muted text-xs mt-1.5">
                    Reservas y consultas en horario de servicio
                  </p>
                </div>
              </div>

              {/* Servicios extra */}
              <div className="border-t border-white/[0.06] pt-5 grid grid-cols-3 gap-3">
                {EXTRAS.map(({ icon: Icon, label, detail }) => (
                  <div key={label} className="flex flex-col items-center text-center gap-1.5 p-2">
                    <Icon className="w-4 h-4 text-sushi-gold" strokeWidth={1.5} aria-hidden />
                    <p className="font-accent text-[10px] uppercase tracking-wide text-white font-semibold leading-tight">{label}</p>
                    <p className="font-sans text-[10px] text-gray-500 leading-snug">{detail}</p>
                  </div>
                ))}
              </div>
            </motion.article>

            {/* Mapa real */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ boxShadow: "0 0 32px rgba(255, 92, 23, 0.22), 0 0 64px rgba(0, 170, 255, 0.08)" }}
              className="overflow-hidden border border-white/[0.07] aspect-[4/3] bg-sushi-surface relative group transition-shadow duration-300 rounded-lg"
            >
              <iframe
                title={`Mapa: ${SITE.name} — ${SITE.location}`}
                src={MAPS_EMBED}
                className="w-full h-full border-0 grayscale-[0.3] contrast-[1.1] brightness-[0.85] group-hover:grayscale-0 transition-all duration-500"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </motion.div>

            <div className="flex items-center gap-4">
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
          </div>

          {/* ── Columna derecha: reseñas ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 flex flex-col gap-5"
          >
            {/* ── Rating header card ── */}
            <div className="card-surface p-6 sm:p-7">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                  <h3 className="font-display text-lg font-bold text-white mb-2">
                    Lo que dicen nuestros clientes
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="font-display text-3xl font-bold text-sushi-gold-light leading-none drop-shadow-[0_0_14px_rgba(200,149,42,0.5)]">4,9</span>
                    <div>
                      <div className="flex gap-0.5 mb-0.5" aria-label="4.9 de 5 estrellas en Google">
                        {[1,2,3,4,5].map(s => (
                          <Star key={s} className="w-4 h-4 text-sushi-gold fill-sushi-gold drop-shadow-[0_0_6px_rgba(200,149,42,0.5)]" />
                        ))}
                      </div>
                      <span className="font-sans text-[11px] text-sushi-muted">Basado en reseñas de Google</span>
                    </div>
                  </div>
                </div>

                {/* Google review CTA */}
                <a
                  href={REVIEW_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-sushi-gold/35 text-sushi-gold font-accent text-[11px] font-semibold uppercase tracking-[0.12em] hover:bg-sushi-gold/10 hover:border-sushi-gold transition-all duration-200 shrink-0 group"
                >
                  <PenLine className="w-3.5 h-3.5 group-hover:rotate-6 transition-transform" aria-hidden />
                  Dejar reseña
                </a>
              </div>

              {/* Reviews list */}
              <ul className="space-y-3">
                {REVIEWS.map((review, idx) => (
                  <motion.li
                    key={review.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    whileHover={{ y: -2 }}
                    className="p-4 rounded-xl bg-sushi-dark/70 border border-white/[0.05] hover:border-sushi-gold/20 transition-all duration-300 cursor-default"
                  >
                    <div className="flex gap-3">
                      <img
                        src={reviewAvatar(review.avatarSeed)}
                        alt={`Foto de ${review.author}`}
                        className="w-9 h-9 rounded-full object-cover border border-sushi-gold/20 shrink-0"
                        loading="lazy"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="font-sans text-sm font-semibold text-white truncate">{review.author}</span>
                          <span className="font-sans text-[10px] text-gray-600 shrink-0">{review.date}</span>
                        </div>
                        <div className="flex gap-0.5 mb-2" aria-hidden>
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <Star key={i} className="w-3 h-3 text-sushi-gold fill-sushi-gold" />
                          ))}
                        </div>
                        <blockquote className="font-sans text-sm text-gray-300 leading-relaxed flex gap-1.5">
                          <Quote className="w-3.5 h-3.5 text-sushi-gold/30 shrink-0 mt-0.5" aria-hidden />
                          {review.text}
                        </blockquote>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* ── Google Review Banner ── */}
            <motion.a
              href={REVIEW_LINK}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.01, boxShadow: "0 0 32px rgba(200,149,42,0.18)" }}
              className="block rounded-2xl border border-sushi-gold/25 overflow-hidden transition-all duration-300 cursor-pointer"
              style={{
                background: "linear-gradient(135deg, rgba(200,149,42,0.08) 0%, rgba(6,16,12,0.95) 50%, rgba(0,170,255,0.06) 100%)",
              }}
            >
              <div className="px-6 py-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
                    <Star className="w-5 h-5 text-sushi-gold fill-sushi-gold" aria-hidden />
                  </div>
                  <div>
                    <p className="font-display text-base font-semibold text-white leading-snug">
                      ¿Has visitado Casa del Sushi?
                    </p>
                    <p className="font-sans text-xs text-sushi-muted mt-0.5">
                      Tu opinión en Google ayuda a otros clientes a descubrirnos.
                    </p>
                  </div>
                </div>
                <div className="shrink-0 flex items-center gap-1.5 font-accent text-[11px] uppercase tracking-[0.1em] font-semibold text-sushi-gold">
                  Valorar
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden />
                </div>
              </div>
            </motion.a>

            {/* ── Safety note ── */}
            <p className="flex items-center gap-2 font-sans text-xs text-sushi-muted px-1">
              <ShieldCheck className="w-4 h-4 text-sushi-gold shrink-0" aria-hidden />
              Normativa de higiene alimentaria y antiparasitario en pescado crudo.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
