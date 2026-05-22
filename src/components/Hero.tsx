import { motion } from "motion/react";
import { Sparkles, ArrowRight, Compass, ShieldCheck } from "lucide-react";
import interiorHeroImage from "../assets/images/interior_hero_1779464146821.png";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-sushi-dark pt-32 pb-20 flex items-center overflow-hidden gold-veins"
    >
      {/* Absolute Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-sushi-neon/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-sushi-coral/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 w-full">
        {/* Left Side: Text and Brand Messaging */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Tagline/Header Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-sushi-green border border-sushi-gold/30 rounded-full px-4 py-1.5 mb-6 shadow-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-sushi-gold" />
            <span className="font-accent text-[10px] tracking-widest uppercase text-sushi-gold font-bold">
              Alta Cocina Japonesa Artesanal
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl text-white font-semibold tracking-tight leading-[1.1] mb-6"
          >
            Donde el lujo y el sushi artesanal <br className="hidden md:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-sushi-gold to-sushi-coral">
              se encuentran en Cartagena
            </span>
          </motion.h1>

          {/* Core Description expressing the exact interior colors requested */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-sans text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mb-10"
          >
            Ubicado en la mítica <strong className="text-white font-medium">Plaza del Rey</strong>, descubre una experiencia multisensorial. Sumérgete en un espacio sublime envuelto en <span className="text-sushi-neon font-medium">neones azul eléctrico</span>, cálidas banquetas de terciopelo coral, majestuosas luminarias de diseño hexagonal y un espectacular jardín vertical que eleva la gastronomía a obra de arte.
          </motion.p>

          {/* Key Pricing Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 gap-4 sm:gap-6 w-full max-w-md mb-10"
          >
            {/* Buffet Stat Card */}
            <div className="bg-sushi-green/60 border border-sushi-gold/20 rounded-xl p-4 flex flex-col backdrop-blur-sm shadow-md hover:border-sushi-neon/40 transition-colors">
              <span className="font-accent text-[10px] uppercase tracking-widest text-sushi-gold font-semibold mb-1">
                Buffet Libre Premium
              </span>
              <div className="flex items-baseline gap-1.5">
                <span className="font-display text-2xl sm:text-3xl font-bold text-white">17,80€</span>
                <span className="text-gray-400 text-xs font-sans">/persona</span>
              </div>
              <p className="font-sans text-[10px] text-gray-400 mt-1 leading-tight">
                Pide todo el sushi que desees recién hecho en mesa.
              </p>
            </div>

            {/* Beverage Stat Card */}
            <div className="bg-sushi-green/60 border border-sushi-gold/20 rounded-xl p-4 flex flex-col backdrop-blur-sm shadow-md hover:border-sushi-coral/40 transition-colors">
              <span className="font-accent text-[10px] uppercase tracking-widest text-sushi-gold font-semibold mb-1">
                Bebidas Premium
              </span>
              <div className="flex items-baseline gap-1.5">
                <span className="font-display text-2xl sm:text-3xl font-bold text-white">desde 3€</span>
              </div>
              <p className="font-sans text-[10px] text-gray-400 mt-1 leading-tight">
                Refrescos, sake tradicional y cócteles de autor.
              </p>
            </div>
          </motion.div>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => scrollToSection("reserva")}
              className="px-8 py-4 bg-sushi-coral border border-sushi-coral text-white font-accent font-semibold uppercase text-xs tracking-wider rounded-lg shadow-lg shadow-sushi-coral/20 hover:bg-sushi-coral/90 hover:shadow-[0_0_20px_rgba(255,95,73,0.4)] transition-all cursor-pointer flex items-center justify-center gap-2 group"
            >
              <span>Reserva Inmediata</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => scrollToSection("carta")}
              className="px-8 py-4 border border-sushi-gold/40 text-sushi-gold font-accent font-semibold uppercase text-xs tracking-wider rounded-lg hover:border-sushi-gold hover:text-white hover:bg-sushi-gold/5 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Explorar la Carta</span>
            </button>
          </motion.div>
        </div>

        {/* Right Side: Floating Premium Image Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:col-span-5 relative"
        >
          {/* Framed Graphic Container representing luxury dining room */}
          <div className="relative z-10 rounded-2xl overflow-hidden border border-sushi-gold/30 p-1 bg-gradient-to-br from-sushi-gold/20 via-transparent to-sushi-neon/20 shadow-2xl">
            <div className="rounded-xl overflow-hidden relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] bg-sushi-dark">
              <img
                src={interiorHeroImage}
                alt="Interiores modernos de Casa del Sushi en Plaza del Rey, Cartagena"
                className="object-cover w-full h-full scale-[1.02] hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sushi-dark via-transparent to-transparent opacity-80" />

              {/* Float Badge Interior Details (Neons / Garden) */}
              <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-sushi-dark/85 border border-sushi-gold/25 p-4 rounded-xl flex items-center gap-4">
                <div className="p-3 bg-sushi-neon/10 rounded-lg text-sushi-neon animate-neon-pulse">
                  <Compass className="w-5 h-5 shadow-[0_0_10px_#00F0FF]" />
                </div>
                <div>
                  <h4 className="font-accent text-[11px] uppercase tracking-wider text-sushi-gold font-bold">
                    Decoración Vanguardista
                  </h4>
                  <p className="font-sans text-[11px] text-gray-300 leading-normal">
                    Neón azul eléctrico, banquetas acolchadas coral, detalles dorados y jardín vertical.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Hexagons / Backdrops matching internal design elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 border border-sushi-gold/20 rounded-xl rotate-12 pointer-events-none" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-sushi-neon/20 rounded-3xl -rotate-12 pointer-events-none" />
          {/* Hexagonal pendant lights stylized as custom glowing orb */}
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-12 bg-sushi-gold/20 blur-md rounded-full pointer-events-none" />
        </motion.div>
      </div>

      {/* Elegant Curved or Diagonal Bottom Separator */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-sushi-marble to-transparent pointer-events-none" />
    </section>
  );
}
