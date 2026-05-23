import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import BuffetPromo from "./components/BuffetPromo";
import MenuFilter from "./components/MenuFilter";
import Gallery from "./components/Gallery";
import Matchmaker from "./components/Matchmaker";
import BookingForm from "./components/BookingForm";
import LocationReviews from "./components/LocationReviews";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-sushi-dark text-white font-sans overflow-x-hidden selection:bg-sushi-coral/80 selection:text-white">
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-sushi-coral focus:text-white focus:rounded-lg focus:text-sm focus:font-semibold"
      >
        Saltar al contenido
      </a>

      <div
        className="fixed top-0 left-0 right-0 z-[60] bg-sushi-green/95 border-b border-sushi-gold/20 text-center"
        style={{ height: "var(--announcement-height)" }}
        role="status"
      >
        <p className="h-full flex items-center justify-center gap-3 px-4 font-accent text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
          <span className="text-sushi-gold/70">◆</span>
          <span>Buffet libre · 17,80 € / persona · Todos los días</span>
          <span className="text-sushi-gold/70">◆</span>
          <a href="#reserva" className="text-sushi-gold hover:text-white transition-colors underline-offset-2 hover:underline">
            Reservar
          </a>
        </p>
      </div>

      <Header />

      <main>
        <Hero />
        <TrustStrip />
        <BuffetPromo />
        <MenuFilter />
        <Gallery />
        <Matchmaker />
        <BookingForm />
        <LocationReviews />
      </main>

      <Footer />
    </div>
  );
}
