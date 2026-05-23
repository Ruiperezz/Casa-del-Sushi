import { useState, useEffect } from "react";
import { REVIEWS } from "../data/menu";
import {
  MapPin, Phone, Star, ShieldCheck, ExternalLink,
  Clock, Baby, GlassWater, CalendarDays, PenLine,
} from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { SITE } from "../data/site";
import { motion } from "motion/react";

// ─── Google G logo (official brand colours) ──────────────────
function GoogleG({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );
}

// ─── Initials avatar (Google-style) ──────────────────────────
const AVATAR_COLORS = ["#4285F4","#34A853","#EA4335","#FBBC05","#9C27B0","#F57C00","#00796B","#C2185B"];

function InitialsAvatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((p) => [...p][0] ?? "")  // spread handles multi-byte chars (CJK)
    .join("")
    .toUpperCase()
    .slice(0, 2);
  const colorIdx = [...name].reduce((acc, c) => acc + c.charCodeAt(0), 0) % AVATAR_COLORS.length;
  return (
    <div
      className="w-9 h-9 rounded-full flex items-center justify-center font-sans font-semibold text-sm text-white shrink-0 select-none"
      style={{ backgroundColor: AVATAR_COLORS[colorIdx] }}
      aria-hidden
    >
      {initials}
    </div>
  );
}

// ─── Horarios reales ──────────────────────────────────────────
function getOpenStatus() {
  const now    = new Date();
  const h      = now.getHours() + now.getMinutes() / 60;
  const day    = now.getDay();
  const isFriSat = day === 5 || day === 6;

  const lunchOpen   = h >= 12 && h < 16.5;
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
const MAPS_LINK  = SITE.mapsDirectLink;
const REVIEW_LINK = SITE.reviewLink;

const RATING_BARS = [
  { stars: 5, pct: 89 },
  { stars: 4, pct: 8  },
  { stars: 3, pct: 2  },
  { stars: 2, pct: 1  },
  { stars: 1, pct: 0  },
];

const EXTRAS = [
  { icon: GlassWater,   label: "Bebidas desde 3€",   detail: "Sake, cerveza, cócteles de autor" },
  { icon: CalendarDays, label: "Specials semanales",  detail: "Nuevas piezas cada semana" },
  { icon: Baby,         label: "Menú infantil",       detail: "Opciones para los más pequeños" },
];

// ─── Componente ───────────────────────────────────────────────
export default function LocationReviews() {
  const [status, setStatus] = useState(getOpenStatus());
  useEffect(() => { setStatus(getOpenStatus()); }, []);

  return (
    <section
      id="ubicacion"
      className="section-pad bg-gradient-to-b from-sushi-dark via-sushi-marble to-sushi-dark relative border-t border-white/[0.05]
                 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-sushi-neon/[0.01] before:to-transparent before:pointer-events-none"
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Visítanos"
          title="Dónde encontrarnos"
          description={`${SITE.location}. En el centro histórico, a pocos pasos del Teatro Romano y el puerto.`}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* ── Columna izquierda: info + mapa ── */}
          <div className="lg:col-span-6 space-y-5">

            <motion.article
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ boxShadow: "0 0 24px rgba(0, 170, 255, 0.18)" }}
              className="card-surface p-6 sm:p-8 transition-shadow duration-300"
            >
              <div className="flex items-start justify-between gap-4 border-b border-white/[0.08] pb-5 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-sushi-coral shrink-0 mt-0.5" aria-hidden />
                  <div>
                    <h3 className="font-display text-lg font-bold text-white leading-tight">Casa del Sushi</h3>
                    <p className="font-sans text-sm text-sushi-gold mt-0.5">{SITE.location} · {SITE.locationDetail}</p>
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
                  <p className="text-sushi-muted text-xs mt-1.5">Reservas y consultas en horario de servicio</p>
                </div>
              </div>

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

          {/* ── Columna derecha: Google Business Profile + reseñas ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 flex flex-col gap-5"
          >
            {/* ── Google Business Profile card ── */}
            <div className="card-surface overflow-hidden border border-white/[0.07]">

              {/* Header: logo + rating + bars */}
              <div className="px-6 pt-6 pb-5 border-b border-white/[0.06]">
                <div className="flex items-center gap-2 mb-5">
                  <GoogleG size={18} />
                  <span className="font-sans text-xs text-gray-400 font-medium tracking-wide">Reseñas de Google</span>
                </div>

                <div className="flex items-center gap-6">
                  {/* Big rating number */}
                  <div className="text-center shrink-0">
                    <p className="font-display text-5xl font-bold text-white leading-none drop-shadow-[0_0_20px_rgba(200,149,42,0.35)]">
                      {SITE.googleRating}
                    </p>
                    <div className="flex gap-0.5 mt-2 justify-center" aria-label="4.9 de 5 estrellas">
                      {[1,2,3,4,5].map(s => (
                        <Star key={s} className="w-3.5 h-3.5 text-sushi-gold fill-sushi-gold" />
                      ))}
                    </div>
                    <p className="font-sans text-[10px] text-gray-500 mt-1.5">de 5</p>
                  </div>

                  {/* Star distribution bars */}
                  <div className="flex-1 space-y-1.5" aria-label="Distribución de valoraciones">
                    {RATING_BARS.map(({ stars, pct }) => (
                      <div key={stars} className="flex items-center gap-2">
                        <span className="font-sans text-[10px] text-gray-500 w-2.5 text-right tabular-nums">{stars}</span>
                        <Star className="w-2.5 h-2.5 text-sushi-gold fill-sushi-gold shrink-0" aria-hidden />
                        <div className="flex-1 h-1.5 bg-white/[0.07] rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-sushi-gold rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${pct}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: (5 - stars) * 0.07, ease: "easeOut" }}
                          />
                        </div>
                        <span className="font-sans text-[10px] text-gray-500 w-6 tabular-nums">{pct}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Write-a-review CTA */}
              <div className="px-6 py-4 border-b border-white/[0.06] flex items-center justify-between gap-4">
                <p className="font-sans text-xs text-gray-500">¿Has venido? Cuéntaselo a los demás.</p>
                <a
                  href={REVIEW_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white font-sans text-xs font-semibold hover:opacity-90 active:scale-95 transition-all shrink-0"
                  style={{ backgroundColor: "#4285F4" }}
                >
                  <PenLine className="w-3.5 h-3.5" aria-hidden />
                  Escribir reseña
                </a>
              </div>

              {/* Review list */}
              <ul className="divide-y divide-white/[0.04]">
                {REVIEWS.map((review, idx) => (
                  <motion.li
                    key={review.id}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.07 }}
                    className="px-5 py-4 hover:bg-white/[0.02] transition-colors duration-200"
                  >
                    <div className="flex items-start justify-between mb-2.5">
                      <div className="flex items-center gap-3">
                        <InitialsAvatar name={review.author} />
                        <div>
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <p className="font-sans text-sm font-semibold text-white leading-tight">{review.author}</p>
                            {review.badge && (
                              <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[9px] font-accent font-semibold uppercase tracking-wide bg-[#4285F4]/15 text-[#4285F4] border border-[#4285F4]/25">
                                {review.badge}
                              </span>
                            )}
                          </div>
                          {review.reviewCount && (
                            <p className="font-sans text-[10px] text-gray-600 mt-0.5">{review.reviewCount}</p>
                          )}
                          <p className="font-sans text-[11px] text-gray-500 mt-0.5">{review.date}</p>
                        </div>
                      </div>
                      <div className="shrink-0 opacity-50 hover:opacity-80 transition-opacity">
                        <GoogleG size={14} />
                      </div>
                    </div>

                    <div className="flex gap-0.5 mb-2" aria-label={`${review.rating} de 5 estrellas`}>
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-sushi-gold fill-sushi-gold" aria-hidden />
                      ))}
                    </div>

                    <p className="font-sans text-[13px] text-gray-300 leading-relaxed">
                      {review.text}
                    </p>
                  </motion.li>
                ))}
              </ul>

              {/* See all on Google */}
              <div className="px-6 py-4 border-t border-white/[0.04]">
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-sans text-xs text-gray-500 hover:text-[#4285F4] transition-colors"
                >
                  <GoogleG size={12} />
                  Ver en Google Maps
                  <ExternalLink className="w-3 h-3" aria-hidden />
                </a>
              </div>
            </div>

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
