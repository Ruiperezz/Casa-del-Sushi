import Header from "./components/Header";
import Hero from "./components/Hero";
import BuffetPromo from "./components/BuffetPromo";
import MenuFilter from "./components/MenuFilter";
import Matchmaker from "./components/Matchmaker";
import Gallery from "./components/Gallery";
import BookingForm from "./components/BookingForm";
import LocationReviews from "./components/LocationReviews";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-sushi-dark text-white font-sans overflow-x-hidden selection:bg-sushi-coral selection:text-white">
      {/* Sleek Announcement Bar */}
      <div className="bg-gradient-to-r from-sushi-green via-sushi-dark to-sushi-coral/75 border-b border-sushi-gold/25 py-2 px-4 text-center text-[10px] sm:text-xs font-accent font-bold uppercase tracking-widest text-white relative z-50">
        ✨ Buffet Libre Premium sin límites por 17,80€ de Lunes a Domingo • Reserva tu banqueta coral
      </div>

      {/* Primary Floating Header */}
      <Header />

      {/* Core Layout Sections */}
      <main>
        {/* Hero Section displaying space preview & prices */}
        <Hero />

        {/* Detailed Buffet Pricing & Safety trust indicators */}
        <BuffetPromo />

        {/* Filterable, Interactive Sushi & Drink Menu */}
        <MenuFilter />

        {/* Interactive Virtual Sommelier Matchmaker */}
        <Matchmaker />

        {/* Visual High-Resolution Space & Dish Gallery */}
        <Gallery />

        {/* Live booking dynamic scheduler form */}
        <BookingForm />

        {/* Localized Cartagena Landmarks Map & Google reviews */}
        <LocationReviews />
      </main>

      {/* Brand Footer */}
      <Footer />
    </div>
  );
}
