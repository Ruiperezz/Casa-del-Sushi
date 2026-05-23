import { Shield, Instagram, MapPin, Phone, Clock, ArrowUp } from "lucide-react";
import { scrollToSection } from "../lib/scroll";

const NAV = [
  { href: "#inicio",      label: "Inicio" },
  { href: "#historia",    label: "Nuestra historia" },
  { href: "#experiencia", label: "Buffet 17,80 €" },
  { href: "#carta",       label: "La carta" },
  { href: "#galeria",     label: "El espacio" },
  { href: "#matchmaker",  label: "Maridaje AI" },
  { href: "#reserva",     label: "Reservar mesa" },
];

const HOURS = [
  { shift: "Comida",  time: "13:00 – 16:30" },
  { shift: "Cena",    time: "20:00 – 00:00" },
];

export default function Footer() {
  return (
    <footer className="bg-sushi-marble border-t border-white/[0.07] text-sushi-muted">

      {/* Banda superior — CTA de reserva */}
      <div className="border-b border-white/[0.06] py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display text-2xl font-bold text-white">
              ¿Listo para reservar?
            </p>
            <p className="font-sans text-sm text-gray-400 mt-1">
              Sin pago previo. Confirmación inmediata. 15 minutos de cortesía.
            </p>
          </div>
          <button
            type="button"
            onClick={() => scrollToSection("reserva")}
            className="btn-primary shrink-0"
          >
            Reservar mesa
          </button>
        </div>
      </div>

      {/* Cuerpo del footer */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">

        {/* Marca + descripción */}
        <div className="lg:col-span-4 space-y-5">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-left group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sushi-gold rounded-sm cursor-pointer"
          >
            <span className="font-wide text-sm font-bold tracking-[0.14em] text-white group-hover:text-sushi-gold transition-colors block">
              CASA DEL SUSHI
            </span>
            <span className="font-accent text-[10px] tracking-[0.2em] text-sushi-muted uppercase block mt-1">
              C. San Agustín, 6 · Cartagena
            </span>
          </button>

          <p className="font-sans text-sm leading-relaxed max-w-sm">
            Sushi artesanal y buffet libre premium en el centro histórico de
            Cartagena. Producto de primera, servicio en mesa y ambiente de autor.
          </p>

          {/* Contacto */}
          <div className="space-y-2.5 pt-1">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Calle+San+Agust%C3%ADn+6%2C+30201+Cartagena%2C+Murcia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2.5 font-sans text-sm hover:text-white transition-colors group"
            >
              <MapPin className="w-4 h-4 text-sushi-gold shrink-0 mt-0.5" aria-hidden />
              <span>C. San Agustín, 6 · 30201 Cartagena, Murcia</span>
            </a>
            <a
              href="tel:+34968501234"
              className="flex items-center gap-2.5 font-sans text-sm hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4 text-sushi-gold shrink-0" aria-hidden />
              +34 968 50 12 34
            </a>
            <div className="flex items-start gap-2.5 font-sans text-sm">
              <Clock className="w-4 h-4 text-sushi-gold shrink-0 mt-0.5" aria-hidden />
              <div>
                {HOURS.map(({ shift, time }) => (
                  <p key={shift}>
                    <span className="text-gray-500">{shift}:</span>{" "}
                    <span className="text-gray-300">{time}</span>
                  </p>
                ))}
                <p className="text-gray-500 text-xs mt-0.5">Lunes a domingo</p>
              </div>
            </div>
          </div>

          {/* Redes */}
          <div className="flex gap-3 pt-1">
            <a
              href="https://instagram.com/casadelsushi.cartagena"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-white/10 text-gray-400 hover:text-sushi-coral hover:border-sushi-coral/30 transition-colors"
              aria-label="Instagram de Casa del Sushi"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Navegación */}
        <nav className="lg:col-span-3 lg:col-start-6" aria-label="Pie de página">
          <h4 className="font-accent text-[10px] uppercase tracking-[0.2em] text-sushi-gold font-semibold mb-5">
            Navegación
          </h4>
          <ul className="space-y-3 font-sans text-sm">
            {NAV.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={e => {
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

        {/* Legal */}
        <div className="lg:col-span-4 lg:col-start-9 space-y-4">
          <h4 className="font-accent text-[10px] uppercase tracking-[0.2em] text-sushi-gold font-semibold">
            Información legal
          </h4>
          <p className="font-sans text-sm leading-relaxed">
            Pescado destinado a consumo crudo sometido a congelación preventiva
            según el RD 1420/2006 para prevención de anisakis.
          </p>
          <p className="flex items-center gap-2 font-accent text-[10px] uppercase font-semibold text-white/70 tracking-wide">
            <Shield className="w-4 h-4 text-sushi-gold" aria-hidden />
            Registro sanitario · Alérgenos en carta
          </p>
          <p className="font-sans text-xs text-gray-600 leading-relaxed pt-2">
            Máximo 4 piezas por ronda para garantizar frescura y temperatura.
            Política anti-desperdicio activa.
          </p>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="max-w-7xl mx-auto px-6 border-t border-white/[0.05] py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-sans text-xs">
          © {new Date().getFullYear()} Casa del Sushi Cartagena. Todos los derechos reservados.
        </p>
        <div className="flex items-center gap-6 text-xs">
          <a href="#privacidad" className="hover:text-gray-300 transition-colors">Privacidad</a>
          <a href="#cookies"    className="hover:text-gray-300 transition-colors">Cookies</a>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="p-2.5 rounded-full border border-white/10 text-white hover:border-sushi-gold hover:bg-sushi-gold/10 transition-colors cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-sushi-gold"
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
