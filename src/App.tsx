import { Analytics } from "@vercel/analytics/react";
import { Instagram } from "lucide-react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import Philosophy from "./components/Philosophy";
import BuffetPromo from "./components/BuffetPromo";
import MenuFilter from "./components/MenuFilter";
import Matchmaker from "./components/Matchmaker";
import WhyChooseUs from "./components/WhyChooseUs";
import SpaceGallery from "./components/SpaceGallery";
import PromoTicker from "./components/PromoTicker";
import Testimonials from "./components/Testimonials";
import BookingForm from "./components/BookingForm";
import FAQ from "./components/FAQ";
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

      {/* Announcement bar */}
      <div
        className="fixed top-0 left-0 right-0 z-[60] text-center overflow-hidden"
        style={{
          height: "var(--announcement-height)",
          background: "linear-gradient(90deg, #07101E 0%, #0A1628 40%, #0A1628 60%, #07101E 100%)",
          borderBottom: "1px solid rgba(26,140,255,0.18)",
        }}
        role="status"
      >
        <div
          className="absolute inset-x-0 bottom-0 h-[1px]"
          style={{ background: "linear-gradient(90deg, transparent, rgba(26,140,255,0.4), transparent)" }}
          aria-hidden
        />
        <p className="h-full flex items-center justify-center gap-2 px-4 font-sans text-xs text-white/80">
          <span className="font-semibold text-sushi-coral">Buffet libre {SITE.buffetPrice}</span>
          <span className="text-white/25">·</span>
          <span className="hidden sm:inline">{SITE.location}</span>
          <span className="text-white/25 hidden sm:inline">·</span>
          <a
            href="#reserva"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("reserva")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-sushi-neon hover:text-white transition-colors underline-offset-2 hover:underline font-medium"
          >
            Reservar mesa →
          </a>
        </p>
        <a
          href={SITE.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-4 inset-y-0 flex items-center gap-1.5 text-white/40 hover:text-sushi-coral transition-colors duration-200 group"
          aria-label={`Instagram ${SITE.instagramHandle}`}
        >
          <Instagram className="w-3.5 h-3.5 group-hover:scale-110 transition-transform duration-200" />
          <span className="hidden lg:inline font-sans text-[10px] tracking-wide">{SITE.instagramHandle}</span>
        </a>
      </div>

      <Header />

      <main>
        <Hero />
        <TrustStrip />
        <Philosophy />
<BuffetPromo />
        <MenuFilter />
        <Matchmaker />
        <WhyChooseUs />
        <SpaceGallery />
        <PromoTicker />
        <Testimonials />
        <BookingForm />
        <FAQ />
        <LocationReviews />
      </main>

      <Footer />
      <Analytics />
    </div>
  );
}
