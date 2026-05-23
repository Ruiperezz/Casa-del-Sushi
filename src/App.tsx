import { Analytics } from "@vercel/analytics/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import Philosophy from "./components/Philosophy";
import AmbienteSignature from "./components/AmbienteSignature";
import BuffetPromo from "./components/BuffetPromo";
import MenuFilter from "./components/MenuFilter";
import WhyChooseUs from "./components/WhyChooseUs";
import SpaceGallery from "./components/SpaceGallery";
import Matchmaker from "./components/Matchmaker";
import BookingForm from "./components/BookingForm";
import LocationReviews from "./components/LocationReviews";
import Footer from "./components/Footer";
import { SITE } from "./data/site";

export default function App() {
  return (
    <div className="min-h-screen bg-sushi-dark text-white font-sans overflow-x-hidden selection:bg-sushi-coral/60 selection:text-white">
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-sushi-coral focus:text-white focus:rounded-lg focus:text-sm"
      >
        Saltar al contenido
      </a>

      <div
        className="fixed top-0 left-0 right-0 z-[60] bg-sushi-burgundy/90 border-b border-white/[0.06] text-center"
        style={{ height: "var(--announcement-height)" }}
        role="status"
      >
        <p className="h-full flex items-center justify-center gap-2 px-4 font-sans text-xs text-white/85">
          Buffet libre {SITE.buffetPrice} / persona · {SITE.location}
          <span className="text-white/25 hidden sm:inline">·</span>
          <a
            href="#reserva"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("reserva")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-sushi-gold hover:text-white transition-colors underline-offset-2 hover:underline"
          >
            Reservar
          </a>
        </p>
      </div>

      <Header />

      <main>
        <Hero />
        <TrustStrip />
        <Philosophy />
        <AmbienteSignature />
        <BuffetPromo />
        <MenuFilter />
        <WhyChooseUs />
        <SpaceGallery />
        <Matchmaker />
        <BookingForm />
        <LocationReviews />
      </main>

      <Footer />
      <Analytics />
    </div>
  );
}
