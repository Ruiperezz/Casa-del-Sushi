import { Compass, Heart, Shield, Send, Instagram, Facebook, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-sushi-dark text-gray-400 border-t border-sushi-gold/25 py-16 relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10">
        
        {/* Leftmost Column Brand Details */}
        <div className="md:col-span-5 flex flex-col items-start text-left space-y-4">
          <button
            onClick={scrollToTop}
            className="group flex flex-col items-start focus:outline-none cursor-pointer"
          >
            <span className="font-wide text-lg font-bold tracking-widest text-white group-hover:text-sushi-neon transition-colors duration-300">
              CASA DEL <span className="text-sushi-neon drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]">SUSHI</span>
            </span>
            <span className="font-accent text-[9px] tracking-[0.3em] text-sushi-gold font-semibold uppercase mt-1 leading-none">
              Plaza del Rey, Cartagena
            </span>
          </button>
          <p className="font-sans text-xs text-gray-400 leading-relaxed max-w-sm">
            Saborea el auténtico arte gastronómico de vanguardia. Elaboramos sushi artesanal de primera calidad servido al instante mediante nuestro afamado buffet gourmet por 17,80€.
          </p>
          {/* Social Icons links */}
          <div className="flex gap-4 pt-2">
            <a
              href="#instagram"
              className="p-2 rounded-full bg-white/[0.03] hover:bg-sushi-coral/10 hover:text-sushi-coral border border-white/10 hover:border-sushi-coral/30 transition-all text-gray-400"
              aria-label="Instagram Link"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#facebook"
              className="p-2 rounded-full bg-white/[0.03] hover:bg-sushi-neon/10 hover:text-sushi-neon border border-white/10 hover:border-sushi-neon/30 transition-all text-gray-400"
              aria-label="Facebook Link"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Center column navigation */}
        <div className="md:col-span-3 text-left space-y-4">
          <h4 className="font-accent text-[10px] uppercase tracking-widest text-sushi-gold font-bold">
            Explorar
          </h4>
          <ul className="space-y-2.5 font-sans text-xs">
            <li>
              <a href="#inicio" className="hover:text-white transition-colors">
                Inicio / Reserva
              </a>
            </li>
            <li>
              <a href="#experiencia" className="hover:text-white transition-colors">
                Experiencia Buffet de 17.80€
              </a>
            </li>
            <li>
              <a href="#carta" className="hover:text-white transition-colors">
                Platos de la Carta
              </a>
            </li>
            <li>
              <a href="#matchmaker" className="hover:text-white transition-colors">
                Tu Maridaje Recomendado
              </a>
            </li>
            <li>
              <a href="#galeria" className="hover:text-white transition-colors">
                Galería de Espacios
              </a>
            </li>
          </ul>
        </div>

        {/* Right column legal notifications */}
        <div className="md:col-span-4 text-left space-y-4">
          <h4 className="font-accent text-[10px] uppercase tracking-widest text-sushi-gold font-bold">
            Garantías Legales & Alérgenos
          </h4>
          <p className="font-sans text-xs text-gray-400 leading-relaxed">
            Nuestros pescados destinados a consumo crudo han sido sometidos a congelación preventiva a temperaturas inferiores a -20ºC durante al menos 24 horas, según exige el RD 1420/2006 para la prevención del anisakis.
          </p>
          <div className="flex items-center gap-2 text-white/80 font-accent text-[10px] uppercase font-bold tracking-wider">
            <Shield className="w-4 h-4 text-sushi-gold" />
            <span>Alimentos Seguros • Sanidad Registrada</span>
          </div>
        </div>

      </div>

      {/* Under line Copyright block and return arrow */}
      <div className="max-w-7xl mx-auto px-6 border-t border-white/[0.05] mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-gray-500">
        <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center sm:justify-start">
          <span>&copy; 2026 CASA DEL SUSHI CARTAGENA. Todos los derechos reservados.</span>
          <a href="#privacy" className="hover:text-gray-300 transition-colors">Aviso de Privacidad</a>
          <a href="#cookies" className="hover:text-gray-300 transition-colors">Cookies</a>
        </div>
        
        {/* Scroll back to top premium button */}
        <button
          onClick={scrollToTop}
          className="p-3 bg-sushi-green/60 hover:bg-sushi-gold border border-white/10 hover:border-sushi-gold rounded-full text-white transition-all group shadow-md cursor-pointer"
          title="Subir de nuevo"
        >
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </footer>
  );
}
