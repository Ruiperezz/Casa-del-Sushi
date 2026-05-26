import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CalendarDays, MessageCircle } from "lucide-react";
import { SITE } from "../data/site";
import { scrollToSection } from "../lib/scroll";

export default function MobileReserveCTA() {
  const [visible, setVisible] = useState(false);
  const [hiddenByForm, setHiddenByForm] = useState(false);
  const formRef = useRef<Element | null>(null);

  useEffect(() => {
    // Show after scrolling past the hero
    const onScroll = () => setVisible(window.scrollY > 420);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Hide when booking form is visible so CTAs don't duplicate
    formRef.current = document.getElementById("reserva");
    if (!formRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHiddenByForm(entry.isIntersecting),
      { threshold: 0.25 }
    );
    observer.observe(formRef.current);
    return () => observer.disconnect();
  }, []);

  const waMessage = encodeURIComponent(
    "Hola, me gustaría reservar una mesa en Casa del Sushi. ¿Tenéis disponibilidad?"
  );

  return (
    <AnimatePresence>
      {visible && !hiddenByForm && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 inset-x-0 z-50 md:hidden"
          style={{
            background: "linear-gradient(to top, #07101E 0%, rgba(7,16,30,0.97) 100%)",
            borderTop: "1px solid rgba(201,169,110,0.2)",
            boxShadow: "0 -8px 32px rgba(0,0,0,0.5)",
            paddingBottom: "env(safe-area-inset-bottom)",
          }}
        >
          <div className="flex items-center gap-2.5 px-4 py-3">
            <button
              type="button"
              onClick={() => scrollToSection("reserva")}
              className="btn-primary flex-1 !py-3 !text-sm"
            >
              <CalendarDays className="w-4 h-4" aria-hidden />
              Reservar mesa
            </button>
            <a
              href={`https://wa.me/34641114778?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Reservar por WhatsApp"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-sans font-semibold text-white shrink-0 transition-all duration-200"
              style={{
                background: "#25D366",
                boxShadow: "0 4px 16px rgba(37,211,102,0.3)",
              }}
            >
              <MessageCircle className="w-4 h-4" aria-hidden />
              WhatsApp
            </a>
          </div>
          <p className="text-center font-sans text-[10px] text-sushi-muted pb-2">
            {SITE.phoneDisplay} · Sin pago por adelantado
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
