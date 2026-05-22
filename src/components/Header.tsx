import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, Clock, Compass, Heart, CalendarDays } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
          isScrolled
            ? "bg-sushi-dark/95 backdrop-blur-md py-4 border-sushi-gold/30 shadow-lg shadow-black/50"
            : "bg-transparent py-6 border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo Brand with Neon Feel */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex flex-col items-start cursor-pointer focus:outline-none"
          >
            <span className="font-wide text-lg sm:text-xl font-bold tracking-widest text-white group-hover:text-sushi-neon transition-colors duration-300">
              CASA DEL <span className="text-sushi-neon drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]">SUSHI</span>
            </span>
            <span className="font-accent text-[10px] tracking-[0.3em] text-sushi-gold font-semibold uppercase leading-none mt-1">
              Cartagena • Plaza del Rey
            </span>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("experiencia")}
              className="font-sans text-xs tracking-wider uppercase text-gray-300 hover:text-sushi-neon font-medium transition-colors cursor-pointer"
            >
              Experiencia Buffet
            </button>
            <button
              onClick={() => scrollToSection("carta")}
              className="font-sans text-xs tracking-wider uppercase text-gray-300 hover:text-sushi-neon font-medium transition-colors cursor-pointer"
            >
              La Carta
            </button>
            <button
              onClick={() => scrollToSection("matchmaker")}
              className="font-sans text-xs tracking-wider uppercase text-gray-300 hover:text-sushi-neon font-medium transition-colors cursor-pointer"
            >
              Tu Maridaje AI
            </button>
            <button
              onClick={() => scrollToSection("galeria")}
              className="font-sans text-xs tracking-wider uppercase text-gray-300 hover:text-sushi-neon font-medium transition-colors cursor-pointer"
            >
              Galería
            </button>
            <button
              onClick={() => scrollToSection("ubicacion")}
              className="font-sans text-xs tracking-wider uppercase text-gray-300 hover:text-sushi-neon font-medium transition-colors cursor-pointer"
            >
              Contacto
            </button>
          </nav>

          {/* Action Call for Quick Reservation */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => scrollToSection("reserva")}
              className="relative inline-flex items-center gap-2 group cursor-pointer overflow-hidden rounded-full border border-sushi-coral bg-sushi-coral/10 py-2.5 px-6 font-semibold font-accent text-xs uppercase tracking-wider text-white transition-all duration-300 hover:bg-sushi-coral hover:shadow-[0_0_15px_rgba(255,95,73,0.4)]"
            >
              <CalendarDays id="ico-header-cal" className="w-4 h-4 text-sushi-coral group-hover:text-white transition-colors" />
              <span>Reserva Mesa</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-sushi-neon transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[73px] bg-sushi-dark/98 backdrop-blur-lg border-b border-sushi-gold/20 z-40 md:hidden flex flex-col py-6 px-6 gap-5 shadow-2xl"
          >
            <button
              onClick={() => scrollToSection("experiencia")}
              className="text-left font-sans text-sm tracking-widest uppercase text-gray-300 hover:text-sushi-neon py-2 border-b border-white/[0.04]"
            >
              Experiencia Buffet
            </button>
            <button
              onClick={() => scrollToSection("carta")}
              className="text-left font-sans text-sm tracking-widest uppercase text-gray-300 hover:text-sushi-neon py-2 border-b border-white/[0.04]"
            >
              La Carta
            </button>
            <button
              onClick={() => scrollToSection("matchmaker")}
              className="text-left font-sans text-sm tracking-widest uppercase text-gray-300 hover:text-sushi-neon py-2 border-b border-white/[0.04]"
            >
              Tu Maridaje AI
            </button>
            <button
              onClick={() => scrollToSection("galeria")}
              className="text-left font-sans text-sm tracking-widest uppercase text-gray-300 hover:text-sushi-neon py-2 border-b border-white/[0.04]"
            >
              Galería
            </button>
            <button
              onClick={() => scrollToSection("ubicacion")}
              className="text-left font-sans text-sm tracking-widest uppercase text-gray-300 hover:text-sushi-neon py-2 border-b border-white/[0.04]"
            >
              Contacto
            </button>
            <button
              onClick={() => scrollToSection("reserva")}
              className="flex items-center justify-center gap-2 w-full mt-2 rounded-full bg-sushi-coral text-white py-3 font-semibold font-accent uppercase text-xs tracking-wider shadow-lg hover:shadow-[0_0_15px_rgba(255,95,73,0.5)] transition-all"
            >
              <CalendarDays className="w-4 h-4" />
              <span>Reservar Mesa</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
