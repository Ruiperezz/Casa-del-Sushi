import { Shield, Instagram, MapPin, Phone, Clock, ArrowUp } from "lucide-react";
import { scrollToSection } from "../lib/scroll";
import { SITE } from "../data/site";

const NAV = [
  { href: "#inicio", label: "Inicio" },
  { href: "#historia", label: "El local" },
  { href: "#experiencia", label: "Buffet" },
  { href: "#carta", label: "Carta" },
  { href: "#galeria", label: "Fotos" },
  { href: "#reserva", label: "Reservar" },
];

const HOURS = [
  { shift: "Comida", time: "12:00 – 16:30" },
  { shift: "Cena (lun–jue, dom)", time: "19:00 – 23:30" },
  { shift: "Cena (vie–sáb)", time: "19:00 – 00:00" },
];

export default function Footer() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${SITE.mapsLinkQuery}`;

  return (
    <footer className="bg-sushi-dark border-t border-white/[0.08] text-sushi-muted">
      <div className="border-b border-white/[0.06] py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display text-2xl font-semibold text-white">¿Reservamos tu mesa?</p>
            <p className="font-sans text-sm text-sushi-muted mt-1">
              Sin pago por adelantado. Te confirmamos por teléfono o correo.
            </p>
          </div>
          <button type="button" onClick={() => scrollToSection("reserva")} className="btn-primary shrink-0">
            Reservar
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5 space-y-4">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-left group cursor-pointer"
          >
            <span className="font-display text-lg font-semibold text-white group-hover:text-sushi-gold transition-colors">
              {SITE.name}
            </span>
            <span className="font-sans text-sm text-sushi-muted block mt-1">{SITE.location}</span>
          </button>

          <p className="font-sans text-sm leading-relaxed max-w-sm">
            Sushi artesanal y buffet libre en {SITE.location}. Cocina al momento, salón con neón,
            banquetas naranja y barra con jardín vertical.
          </p>

          <div className="space-y-2 pt-2">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 font-sans text-sm hover:text-white transition-colors"
            >
              <MapPin className="w-4 h-4 text-sushi-gold shrink-0 mt-0.5" aria-hidden />
              {SITE.location} · {SITE.locationDetail}
            </a>
            <a href={`tel:${SITE.phone}`} className="flex items-center gap-2 font-sans text-sm hover:text-white transition-colors">
              <Phone className="w-4 h-4 text-sushi-gold shrink-0" aria-hidden />
              {SITE.phoneDisplay}
            </a>
            <div className="flex items-start gap-2 font-sans text-sm">
              <Clock className="w-4 h-4 text-sushi-gold shrink-0 mt-0.5" aria-hidden />
              <div className="text-sushi-muted">
                {HOURS.map(({ shift, time }) => (
                  <p key={shift}>
                    <span className="text-gray-500">{shift}:</span> {time}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <a
            href="https://instagram.com/casadelsushi.cartagena"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex p-2.5 rounded-lg border border-white/10 text-gray-400 hover:text-sushi-coral transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>
        </div>

        <nav className="lg:col-span-3" aria-label="Pie de página">
          <h4 className="font-sans text-sm font-medium text-white mb-4">Enlaces</h4>
          <ul className="space-y-2 font-sans text-sm">
            {NAV.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.startsWith("#")) {
                      e.preventDefault();
                      scrollToSection(link.href.slice(1));
                    }
                  }}
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-4 space-y-3">
          <h4 className="font-sans text-sm font-medium text-white">Legal</h4>
          <p className="font-sans text-sm leading-relaxed">
            Pescado crudo con congelación preventiva según RD 1420/2006 (anisakis). Alérgenos indicados en carta.
          </p>
          <p className="flex items-center gap-2 font-sans text-xs text-white/70">
            <Shield className="w-4 h-4 text-sushi-gold" aria-hidden />
            Registro sanitario
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-white/[0.05] py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <p>© {new Date().getFullYear()} {SITE.name}. Todos los derechos reservados.</p>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="p-2 rounded-full border border-white/10 hover:border-sushi-gold transition-colors"
          aria-label="Volver arriba"
        >
          <ArrowUp className="w-4 h-4 text-white" />
        </button>
      </div>
    </footer>
  );
}
