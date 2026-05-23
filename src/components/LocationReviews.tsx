import { useState, useEffect } from "react";
import { REVIEWS } from "../data/menu";
import { MapPin, Phone, Star, ShieldCheck, ExternalLink } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";

function selectReviewAvatar(seed: string) {
  const avatars: Record<string, string> = {
    elena: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    fran: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    carmen: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
  };
  return (
    avatars[seed] ??
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150&h=150"
  );
}

function getOpenStatus(): { open: boolean; label: string } {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const time = hour + minute / 60;

  const lunchOpen = time >= 13 && time < 16.5;
  const dinnerOpen = time >= 20 && time < 24;

  if (lunchOpen || dinnerOpen) {
    return { open: true, label: "Abierto ahora" };
  }
  return { open: false, label: "Cerrado · Consulta horario" };
}

const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.0!2d-0.9864!3d37.6029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zUGxhemEgZGVsIFJleSwgQ2FydGFnZW5h!5e0!3m2!1ses!2ses!4v1!5m2!1ses!2ses";

export default function LocationReviews() {
  const [status, setStatus] = useState(getOpenStatus());

  useEffect(() => {
    setStatus(getOpenStatus());
  }, []);

  return (
    <section id="ubicacion" className="section-pad bg-sushi-dark relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Visítanos"
          title="Ubicación y opiniones"
          description="En Plaza del Rey, en el centro histórico de Cartagena. Fácil acceso a pie desde el puerto y el Teatro Romano."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-6 space-y-6">
            <article className="card-surface p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4 border-b border-white/[0.08] pb-5 mb-6">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-sushi-coral shrink-0" aria-hidden />
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">Casa del Sushi</h3>
                    <p className="font-sans text-sm text-sushi-gold">Plaza del Rey · Cartagena</p>
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
                    className={`w-1.5 h-1.5 rounded-full ${status.open ? "bg-emerald-400" : "bg-gray-500"}`}
                    aria-hidden
                  />
                  {status.label}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm font-sans">
                <div>
                  <p className="font-accent text-[10px] uppercase font-semibold text-gray-500 mb-2">Horario</p>
                  <p className="text-white font-medium">Lunes a domingo</p>
                  <p className="text-gray-300 mt-1">13:00 – 16:30 (comida)</p>
                  <p className="text-gray-300">20:00 – 00:00 (cena)</p>
                </div>
                <div>
                  <p className="font-accent text-[10px] uppercase font-semibold text-gray-500 mb-2">Teléfono</p>
                  <a
                    href="tel:+34968501234"
                    className="text-white font-medium flex items-center gap-2 hover:text-sushi-gold transition-colors"
                  >
                    <Phone className="w-4 h-4" aria-hidden />
                    +34 968 50 12 34
                  </a>
                  <p className="text-sushi-muted text-xs mt-2">Reservas y consultas en horario de servicio</p>
                </div>
              </div>
            </article>

            <div className="rounded-2xl overflow-hidden border border-white/[0.08] aspect-[4/3] bg-sushi-surface">
              <iframe
                title="Mapa: Casa del Sushi en Plaza del Rey, Cartagena"
                src={MAP_EMBED}
                className="w-full h-full border-0 grayscale-[0.35] contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Plaza+del+Rey+Cartagena+Spain"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-accent text-xs uppercase tracking-wide text-sushi-gold hover:text-white transition-colors"
            >
              Abrir en Google Maps
              <ExternalLink className="w-3.5 h-3.5" aria-hidden />
            </a>
          </div>

          <div className="lg:col-span-6">
            <article className="card-surface p-6 sm:p-8 h-full flex flex-col">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-5 mb-6">
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">Opiniones</h3>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="font-sans text-sm font-semibold text-sushi-gold">4,9</span>
                    <div className="flex" aria-label="5 de 5 estrellas">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-3.5 h-3.5 text-sushi-gold fill-sushi-gold" />
                      ))}
                    </div>
                    <span className="font-sans text-xs text-sushi-muted">· Google Maps</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-5 flex-grow">
                {REVIEWS.map((review) => (
                  <li
                    key={review.id}
                    className="p-5 rounded-xl bg-sushi-dark/50 border border-white/[0.05] flex gap-4"
                  >
                    <img
                      src={selectReviewAvatar(review.avatarSeed)}
                      alt=""
                      className="w-10 h-10 rounded-full object-cover border border-sushi-gold/25 shrink-0"
                      loading="lazy"
                    />
                    <div className="min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="font-sans text-sm font-semibold text-white">{review.author}</span>
                        <span className="font-sans text-[10px] text-gray-500 shrink-0">{review.date}</span>
                      </div>
                      <div className="flex mb-2" aria-hidden>
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-sushi-gold fill-sushi-gold" />
                        ))}
                      </div>
                      <blockquote className="font-sans text-sm text-gray-300 leading-relaxed">
                        {review.text}
                      </blockquote>
                    </div>
                  </li>
                ))}
              </ul>

              <p className="mt-6 pt-5 border-t border-white/[0.06] flex items-center gap-2 font-sans text-xs text-sushi-muted">
                <ShieldCheck className="w-4 h-4 text-sushi-gold shrink-0" aria-hidden />
                Cumplimos normativa de higiene alimentaria y tratamiento antiparasitario en pescado crudo.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
