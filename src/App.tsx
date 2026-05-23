import { Analytics } from "@vercel/analytics/react";
import Header        from "./components/Header";
import Hero          from "./components/Hero";
import TrustStrip    from "./components/TrustStrip";
import Philosophy    from "./components/Philosophy";
import BuffetPromo   from "./components/BuffetPromo";
import MenuFilter    from "./components/MenuFilter";
import WhyChooseUs   from "./components/WhyChooseUs";
import Matchmaker    from "./components/Matchmaker";
import RecentPhotos  from "./components/RecentPhotos";
import LiveStatus    from "./components/LiveStatus";
import BookingForm   from "./components/BookingForm";
import LocationReviews from "./components/LocationReviews";
import ToastNotification from "./components/ToastNotification";
import Footer        from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-sushi-dark text-white font-sans overflow-x-hidden selection:bg-sushi-coral/80 selection:text-white">

      {/* Accesibilidad: salto al contenido */}
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-sushi-coral focus:text-white focus:rounded-lg focus:text-sm focus:font-semibold"
      >
        Saltar al contenido
      </a>

      {/* Barra de anuncio */}
      <div
        className="fixed top-0 left-0 right-0 z-[60] bg-sushi-green/95 backdrop-blur-sm border-b border-sushi-gold/15 text-center"
        style={{ height: "var(--announcement-height)" }}
        role="status"
        aria-live="polite"
      >
        <p className="h-full flex items-center justify-center gap-3 px-4 font-accent text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-white/75">
          <span className="text-sushi-gold/60" aria-hidden>◆</span>
          <span>Buffet libre · 17,80 € / persona · Todos los días</span>
          <span className="text-sushi-gold/60 hidden sm:inline" aria-hidden>◆</span>
          <a
            href="#reserva"
            onClick={e => { e.preventDefault(); document.getElementById("reserva")?.scrollIntoView({ behavior: "smooth" }); }}
            className="text-sushi-gold hover:text-sushi-gold-light transition-colors hover:underline underline-offset-2"
          >
            Reservar
          </a>
        </p>
      </div>

      <Header />

      {/* Toast notifications para urgencia y FOMO */}
      <ToastNotification />

      <main>
        {/* 1. Hero — primera impresión, full-bleed */}
        <Hero />

        {/* 2. TrustStrip — señales de confianza rápidas */}
        <TrustStrip />

        {/* 3. Filosofía — historia de la marca */}
        <Philosophy />

        {/* 4. BuffetPromo — propuesta de valor detallada */}
        <BuffetPromo />

        {/* 5. MenuFilter — carta completa estilo restaurante */}
        <MenuFilter />

        {/* 6. WhyChooseUs — diferenciadores clave */}
        <WhyChooseUs />

        {/* 7. Matchmaker — sommelier virtual interactivo (educación antes del espacio) */}
        <Matchmaker />

        {/* 8. RecentPhotos — fotos reales del local */}
        <RecentPhotos />

        {/* 9. LiveStatus — indicadores en tiempo real de urgencia */}
        <LiveStatus />

        {/* 10. BookingForm — formulario de reserva */}
        <BookingForm />

        {/* 11. LocationReviews — dónde estamos + opiniones */}
        <LocationReviews />
      </main>

      <Footer />
      
      <Analytics />
    </div>
  );
}
