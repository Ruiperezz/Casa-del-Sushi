import { Shield, Instagram, Facebook, ArrowUp } from "lucide-react";
import { scrollToSection } from "../lib/scroll";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#experiencia", label: "Buffet 17,80 €" },
  { href: "#carta", label: "Carta" },
  { href: "#galeria", label: "Espacios" },
  { href: "#reserva", label: "Reservar" },
];

export default function Footer() {
  return (
    <footer className="bg-sushi-dark text-sushi-muted border-t border-white/[0.08] py-14 relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5 space-y-4">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-left group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sushi-gold rounded-sm cursor-pointer"
          >
            <span className="font-wide text-base font-bold tracking-[0.12em] text-white group-hover:text-sushi-gold transition-colors">
              CASA DEL SUSHI
            </span>
            <span className="font-accent text-[9px] tracking-[0.2em] text-sushi-muted uppercase block mt-1">
              Plaza del Rey · Cartagena
            </span>
          </button>
          <p className="font-sans text-sm leading-relaxed max-w-sm">
            Sushi artesanal y buffet libre premium en el centro de Cartagena. Producto de primera,
            servicio en mesa y ambiente de autor.
          </p>
          <div className="flex gap-3 pt-1">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-white/10 text-gray-400 hover:text-sushi-coral hover:border-sushi-coral/30 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        <nav className="md:col-span-3" aria-label="Pie de página">
          <h4 className="font-accent text-[10px] uppercase tracking-widest text-sushi-gold font-semibold mb-4">
            Navegación
          </h4>
          <ul className="space-y-2.5 font-sans text-sm">
            {links.map((link) => (
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

        <div className="md:col-span-4 space-y-4">
          <h4 className="font-accent text-[10px] uppercase tracking-widest text-sushi-gold font-semibold">
            Información legal
          </h4>
          <p className="font-sans text-sm leading-relaxed">
            Pescado destinado a consumo crudo sometido a congelación preventiva según el RD 1420/2006
            para prevención de anisakis.
          </p>
          <p className="flex items-center gap-2 font-accent text-[10px] uppercase font-semibold text-white/80 tracking-wide">
            <Shield className="w-4 h-4 text-sushi-gold" aria-hidden />
            Registro sanitario · Alérgenos en carta
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-white/[0.06] mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-sans text-xs text-center sm:text-left">
          © {new Date().getFullYear()} Casa del Sushi Cartagena. Todos los derechos reservados.
        </p>
        <div className="flex items-center gap-6 text-xs">
          <a href="#privacidad" className="hover:text-gray-300 transition-colors">
            Privacidad
          </a>
          <a href="#cookies" className="hover:text-gray-300 transition-colors">
            Cookies
          </a>
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
