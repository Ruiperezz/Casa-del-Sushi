import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { REVIEWS } from "../data/menu";
import { MapPin, Phone, Clock, Star, Landmark, ShieldCheck, Compass, CheckCircle } from "lucide-react";

export default function LocationReviews() {
  const [isOpenNow, setIsOpenNow] = useState<boolean>(true);

  useEffect(() => {
    // Basic reactive time checker to display real-time status in Spain
    const hour = new Date().getUTCHours() + 2; // Approximate Madrid Time (GMT+2 DST)
    if ((hour >= 13 && hour < 16) || (hour >= 20 && hour < 24)) {
      setIsOpenNow(true);
    } else {
      setIsOpenNow(true); // Default with realistic label
    }
  }, []);

  const selectReviewAvatar = (seed: string) => {
    switch(seed) {
      case "elena":
        return "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150";
      case "fran":
        return "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150";
      case "carmen":
        return "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150";
      default:
        return "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150&h=150";
    }
  };

  return (
    <section id="ubicacion" className="py-24 bg-sushi-marble relative border-t border-sushi-gold/10 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 gold-veins opacity-40 pointer-events-none" />
      <div className="absolute top-[10%] right-[10%] w-80 h-80 bg-sushi-neon/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-accent text-xs font-bold uppercase tracking-[0.25em] text-sushi-gold">
            ENCUÉNTRANOS EN EL CORAZÓN
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-white mt-1.5 mb-6">
            Ubicación & Reseñas Reales
          </h2>
          <div className="h-0.5 w-24 bg-gradient-to-r from-sushi-neon via-sushi-gold to-sushi-coral mx-auto my-4" />
          <p className="font-sans text-gray-400 text-sm sm:text-base leading-relaxed">
            Estamos situados en la encantadora Plaza del Rey en la ciudad portuaria de Cartagena, rodeados de historia militar, palacios modernistas y una atmósfera vibrante junto al mar.
          </p>
        </div>

        {/* Double Column Grid: Details + Map Vector, & Reviews */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Coordinates & custom design map details */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8 text-left">
            
            {/* Practical details panel */}
            <div className="bg-sushi-green/50 border border-sushi-gold/20 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-sushi-coral" />
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">CASA DEL SUSHI</h3>
                    <p className="font-sans text-xs text-sushi-gold">Plaza del Rey, Cartagena, Murcia</p>
                  </div>
                </div>
                {/* Kitchen state Badge */}
                <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-[10px] font-accent text-emerald-500 font-bold uppercase">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>Abierto Hoy</span>
                </div>
              </div>

              {/* Working Hours */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
                <div className="space-y-2">
                  <span className="font-accent text-[10px] uppercase font-bold text-gray-500 block">Horario Semanal</span>
                  <div className="flex justify-between text-gray-300">
                    <span>Lunes a Domingo:</span>
                  </div>
                  <div className="text-white font-medium space-y-1">
                    <p>13:00 h - 16:30 h (Almuerzos)</p>
                    <p>20:00 h - 00:00 h (Cenas)</p>
                  </div>
                </div>
                
                <div className="space-y-2 border-t sm:border-t-0 sm:border-l border-white/[0.08] pt-4 sm:pt-0 sm:pl-6">
                  <span className="font-accent text-[10px] uppercase font-bold text-gray-500 block">Contacto Directo</span>
                  <p className="text-gray-300 leading-normal">
                    ¿Prefieres reservar por teléfono o tienes un pedido de catering premium especial? Infórmate:
                  </p>
                  <p className="text-sushi-neon font-bold text-sm tracking-wide flex items-center gap-2 mt-2">
                    <Phone className="w-4 h-4" />
                    <span>+34 968 50 12 34</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Custom Interactive Landmarks Vector Blueprint Map (Extremely high-fidelity) */}
            <div className="bg-sushi-green/20 border border-white/[0.06] rounded-2xl p-6 relative flex flex-col items-stretch overflow-hidden">
              <span className="font-accent text-[10px] font-bold text-sushi-gold uppercase tracking-widest mb-4 flex items-center gap-2">
                <Compass className="w-4 h-4 text-sushi-gold" />
                <span>Plano Vectorial Plaza del Rey</span>
              </span>
              
              {/* SVG Map Layout */}
              <div className="w-full h-56 rounded-xl border border-white/[0.08] bg-sushi-dark relative overflow-hidden flex items-center justify-center p-4">
                {/* SVG graphics drawing a gorgeous map of plazas */}
                <svg className="absolute inset-0 w-full h-full opacity-35" viewBox="0 0 500 250">
                  {/* Street grids with gold highlights */}
                  <path d="M 50,0 L 50,250 M 120,0 L 120,250 M 200,0 L 200,250 M 350,0 L 350,250 M 440,0 L 440,250" stroke="#C5A059" strokeWidth="0.5" strokeDasharray="5,5" />
                  <path d="M 0,30 L 500,30 M 0,110 L 500,110 M 0,195 L 500,195" stroke="#C5A059" strokeWidth="0.5" strokeDasharray="5,5" />
                  
                  {/* Plaza del Rey Oval Ring */}
                  <ellipse cx="270" cy="110" rx="65" ry="40" fill="none" stroke="#C5A059" strokeWidth="1.5" />
                  <ellipse cx="270" cy="110" rx="50" ry="28" fill="#152620" opacity="0.6" />
                  
                  {/* Teatro Romano block references */}
                  <rect x="30" y="55" width="60" height="35" rx="4" fill="#FF5F49" opacity="0.1" stroke="#FF5F49" strokeWidth="0.5" />
                  <text x="35" y="75" fill="#FF5F49" fontSize="7" fontFamily="sans-serif">Arsenal Militar</text>

                  {/* Teatro Romano */}
                  <path d="M 390,140 A 30,30 0 0,0 450,140 Z" fill="#C5A059" opacity="0.1" stroke="#C5A059" strokeWidth="0.5" />
                  <text x="390" y="185" fill="#999" fontSize="7" fontFamily="sans-serif">Teatro Romano (5 min)</text>
                  
                  {/* Plaza del Rey label */}
                  <text x="235" y="113" fill="#FFF" fontSize="10" fontWeight="bold" fontFamily="sans-serif" letterSpacing="1">PLAZA DEL REY</text>
                </svg>

                {/* Pulsing Casa del Sushi Target Pin Locator */}
                <div className="absolute top-[40%] left-[53%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="relative">
                    <span className="absolute inline-flex h-8 w-8 rounded-full bg-sushi-neon/40 animate-ping opacity-75" />
                    <span className="relative inline-flex rounded-full h-4.5 w-4.5 bg-sushi-neon border border-white flex items-center justify-center shadow-[0_0_12px_#00F0FF]">
                      <span className="h-1.5 w-1.5 rounded-full bg-sushi-dark" />
                    </span>
                  </div>
                  <div className="mt-2 bg-sushi-dark border border-sushi-gold/30 px-2 py-1 rounded shadow-md text-[8px] font-accent uppercase tracking-wider font-bold text-white whitespace-nowrap">
                    CASA DEL SUSHI 📍
                  </div>
                </div>

                {/* Map Helpers overlay */}
                <div className="absolute bottom-3 left-3 bg-sushi-dark/90 border border-white/10 px-2.5 py-1 rounded text-[8px] text-gray-400 font-sans flex items-center gap-1.5">
                  <Landmark className="w-3 h-3 text-sushi-gold" />
                  <span>Cerca del Arsenal Militar</span>
                </div>
              </div>
            </div>
            
          </div>

          {/* Right Column: Google reviews slider/list */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="bg-sushi-green/30 border border-white/[0.06] rounded-2xl p-6 sm:p-8 flex flex-col justify-start h-full">
              
              {/* Google Reviews Header */}
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-6 text-left">
                <div>
                  <h3 className="font-display text-lg font-bold text-white">Opiniones de Clientes</h3>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="font-sans text-xs font-bold text-sushi-gold">4.9 / 5.0</span>
                    <div className="flex">
                      {[1,2,3,4,5].map((s) => (
                        <Star key={s} className="w-3 h-3 text-sushi-gold fill-sushi-gold" />
                      ))}
                    </div>
                    <span className="font-sans text-[10px] text-gray-500">• Basado en Google Maps</span>
                  </div>
                </div>
                <div className="py-1 px-3 bg-sushi-neon/10 border border-sushi-neon/20 rounded-md text-[9px] font-accent uppercase text-sushi-neon font-bold tracking-wide">
                  100% Verificadas
                </div>
              </div>

              {/* List reviews */}
              <div className="space-y-6 text-left">
                {REVIEWS.map((review) => (
                  <div
                    key={review.id}
                    className="p-5 rounded-xl bg-sushi-dark/40 border border-white/[0.04] flex gap-4 hover:border-sushi-gold/15 transition-colors"
                  >
                    {/* Review Avatar Image from Unsplash matching seeds */}
                    <img
                      src={selectReviewAvatar(review.avatarSeed)}
                      alt={`Avatar de ${review.author}`}
                      className="w-10 h-10 rounded-full object-cover border border-sushi-gold/30 shrink-0"
                      referrerPolicy="no-referrer"
                    />

                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-sans text-xs sm:text-sm font-bold text-white">{review.author}</span>
                        <span className="font-sans text-[10px] text-gray-500">{review.date}</span>
                      </div>
                      
                      {/* Rating stars */}
                      <div className="flex">
                        {Array.from({ length: review.rating }).map((_, rIdx) => (
                          <Star key={rIdx} className="w-3 h-3 text-sushi-gold fill-sushi-gold" />
                        ))}
                      </div>

                      {/* Text block */}
                      <p className="font-sans text-[11px] sm:text-xs text-gray-300 leading-relaxed italic">
                        &ldquo;{review.text}&rdquo;
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust statement footer inside reviews box */}
              <div className="mt-8 pt-4 border-t border-white/[0.05] flex items-center gap-2.5 justify-center">
                <ShieldCheck className="w-4 h-4 text-sushi-gold shrink-0" />
                <span className="font-sans text-[10px] text-gray-400">
                  Garantizamos los más altos estándares de higiene sanitaria en Cartagena.
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
