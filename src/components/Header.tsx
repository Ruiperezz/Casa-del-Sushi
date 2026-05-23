import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, CalendarDays, Instagram } from "lucide-react";
import { scrollToSection } from "../lib/scroll";
import { SITE } from "../data/site";

const NAV_ITEMS = [
  { id: "historia", label: "El local" },
  { id: "experiencia", label: "Buffet" },
  { id: "carta", label: "Carta" },
  { id: "galeria", label: "Fotos" },
  { id: "ubicacion", label: "Contacto" },
] as const;

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 32);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const goTo = (id: string) => {
    setMobileMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <>
      <header
        id="main-header"
        style={{ top: "var(--announcement-height)" }}
        className={`fixed left-0 w-full z-50 transition-colors duration-300 border-b ${
          isScrolled
            ? "bg-sushi-dark/95 backdrop-blur-md py-3 border-white/[0.08]"
            : "bg-transparent py-4 border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-left group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sushi-gold rounded-sm"
            aria-label="Ir al inicio"
          >
            <span className="font-display text-lg font-semibold text-white group-hover:text-sushi-gold transition-colors">
              {SITE.name}
            </span>
            <span className="font-sans text-xs text-sushi-muted block">{SITE.location}</span>
          </button>

          <nav className="hidden md:flex items-center gap-6" aria-label="Principal">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => goTo(item.id)}
                className="font-sans text-sm text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram ${SITE.instagramHandle}`}
              className="p-2 rounded-lg text-gray-400 hover:text-sushi-coral hover:bg-sushi-coral/8 border border-transparent hover:border-sushi-coral/20 transition-all duration-200"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <button type="button" onClick={() => goTo("reserva")} className="btn-primary !py-2.5 !px-5 !text-xs">
              <CalendarDays className="w-4 h-4" aria-hidden />
              Reservar
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            id="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ top: "calc(var(--announcement-height) + 4rem)" }}
            className="fixed inset-x-0 bg-sushi-dark border-b border-white/[0.08] z-40 md:hidden py-4 px-6"
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => goTo(item.id)}
                className="block w-full text-left font-sans text-base text-gray-300 py-3 border-b border-white/[0.05] last:border-0"
              >
                {item.label}
              </button>
            ))}
            <button type="button" onClick={() => goTo("reserva")} className="btn-primary w-full mt-4">
              Reservar mesa
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
