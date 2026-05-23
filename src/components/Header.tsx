import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, CalendarDays } from "lucide-react";
import { scrollToSection } from "../lib/scroll";

const NAV_ITEMS = [
  { id: "experiencia", label: "Buffet" },
  { id: "carta", label: "Carta" },
  { id: "galeria", label: "Espacios" },
  { id: "matchmaker", label: "Maridaje" },
  { id: "ubicacion", label: "Contacto" },
] as const;

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
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
        className={`fixed left-0 w-full z-50 transition-all duration-500 border-b ${
          isScrolled
            ? "bg-sushi-dark/95 backdrop-blur-md py-3 border-white/[0.08] shadow-lg shadow-black/40"
            : "bg-sushi-dark/40 backdrop-blur-sm py-4 border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex flex-col items-start cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sushi-gold rounded-sm"
            aria-label="Ir al inicio"
          >
            <span className="font-wide text-base sm:text-lg font-bold tracking-[0.15em] text-white group-hover:text-sushi-gold transition-colors duration-300">
              CASA DEL SUSHI
            </span>
            <span className="font-accent text-[9px] tracking-[0.25em] text-sushi-muted font-medium uppercase leading-none mt-1">
              Plaza del Rey · Cartagena
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-7" aria-label="Principal">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => goTo(item.id)}
                className="font-sans text-xs tracking-wide text-gray-300 hover:text-white font-medium transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <button
              type="button"
              onClick={() => goTo("reserva")}
              className="btn-primary !py-2.5 !px-5 !text-[11px] rounded-full"
            >
              <CalendarDays className="w-4 h-4" aria-hidden />
              Reservar
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-sushi-gold"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
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
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{ top: "calc(var(--announcement-height) + 4.25rem)" }}
            className="fixed inset-x-0 bg-sushi-dark/98 backdrop-blur-lg border-b border-white/[0.08] z-40 md:hidden flex flex-col py-5 px-6 gap-1 shadow-2xl"
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => goTo(item.id)}
                className="text-left font-sans text-sm text-gray-300 hover:text-white py-3 border-b border-white/[0.05] last:border-0"
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => goTo("reserva")}
              className="btn-primary w-full mt-4 rounded-full"
            >
              <CalendarDays className="w-4 h-4" aria-hidden />
              Reservar mesa
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
