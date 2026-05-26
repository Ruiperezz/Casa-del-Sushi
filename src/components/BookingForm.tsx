import { useState, FormEvent, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Calendar,
  Users,
  Clock,
  Mail,
  Phone,
  User,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

const timeslots = {
  lunch:  ["12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00"],
  dinner: ["19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00", "22:30", "23:00", "23:30"],
};

export default function BookingForm() {
  const todayISO = new Date().toISOString().split("T")[0];
  const formRef = useRef<HTMLDivElement>(null);
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState(todayISO);
  const [selectedTime, setSelectedTime] = useState("21:00");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingRef, setBookingRef] = useState<string | null>(null);

  // Scroll automático al formulario cuando se muestra el success state
  useEffect(() => {
    if (bookingRef && formRef.current) {
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 300);
    }
  }, [bookingRef]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !date) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setBookingRef(`CDS-${Math.floor(1000 + Math.random() * 9000)}`);
      setIsSubmitting(false);
    }, 1600);
  };

  const handleReset = () => {
    setBookingRef(null);
    setName("");
    setEmail("");
    setPhone("");
    setNotes("");
    setGuests(2);
    setDate(todayISO);
    setSelectedTime("21:00");
  };

  return (
    <section
      id="reserva"
      className="section-pad bg-gradient-to-b from-sushi-dark via-sushi-marble to-sushi-dark relative border-t border-sushi-gold/10 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-sushi-coral/3 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-sushi-neon/2 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sushi-coral/10 border border-sushi-coral/30 mb-5">
            <Sparkles className="w-4 h-4 text-sushi-coral" />
            <span className="font-accent text-[11px] font-semibold uppercase tracking-[0.15em] text-sushi-coral">
              Sin pago por adelantado
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-[0_0_20px_rgba(255,92,23,0.18)]">
            Reserva tu mesa
          </h2>
          <p className="font-sans text-base text-sushi-muted max-w-lg mx-auto">
            Rellena el formulario y te confirmamos personalmente en 24 horas por teléfono o correo.
          </p>
        </motion.div>

        <motion.div
          ref={formRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          <div className="card-surface p-8 md:p-12 border border-white/[0.05]">
            <AnimatePresence mode="wait">
              {!bookingRef ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  {/* 1. FECHA Y COMENSALES */}
                  <div className="space-y-4">
                    <h3 className="font-display text-lg font-bold text-white flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-sushi-coral" />
                      Cuándo te gustaría venir
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block font-accent text-xs uppercase tracking-[0.12em] text-gray-400 font-semibold">
                          Fecha
                        </label>
                        <input
                          type="date"
                          value={date}
                          min={todayISO}
                          onChange={(e) => setDate(e.target.value)}
                          className="w-full bg-sushi-dark/50 border border-white/10 rounded-lg py-3.5 px-4 font-sans text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-sushi-coral focus:ring-2 focus:ring-sushi-coral/20 transition-all"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block font-accent text-xs uppercase tracking-[0.12em] text-gray-400 font-semibold">
                          Comensales: <span className="text-sushi-coral font-bold text-base">{guests}</span>
                        </label>
                        <div className="flex items-center gap-4">
                          <input
                            type="range"
                            min={1}
                            max={10}
                            value={guests}
                            onChange={(e) => setGuests(parseInt(e.target.value, 10))}
                            className="flex-1 h-2 accent-sushi-coral cursor-pointer"
                            aria-valuenow={guests}
                          />
                          <span className="font-display text-xl font-bold text-white whitespace-nowrap">{guests}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="h-px bg-white/[0.08]" />

                  {/* 2. HORA */}
                  <div className="space-y-4">
                    <h3 className="font-display text-lg font-bold text-white flex items-center gap-2">
                      <Clock className="w-5 h-5 text-sushi-neon" />
                      Elige tu hora
                    </h3>
                    <div className="space-y-4">
                      {(["lunch", "dinner"] as const).map((turn) => (
                        <div key={turn}>
                          <p className="font-accent text-[10px] uppercase tracking-[0.15em] text-gray-500 font-semibold mb-3">
                            {turn === "lunch" ? "Comida" : "Cena"}
                          </p>
                          <div className="grid grid-cols-5 sm:grid-cols-6 gap-2">
                            {timeslots[turn].map((t) => (
                              <motion.button
                                key={t}
                                type="button"
                                onClick={() => setSelectedTime(t)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`py-2.5 px-3 rounded-lg font-sans text-sm font-semibold border transition-all ${
                                  selectedTime === t
                                    ? "bg-sushi-coral border-sushi-coral text-white shadow-[0_0_14px_rgba(255,92,23,0.35)]"
                                    : "bg-sushi-dark/50 border-white/10 text-gray-300 hover:border-white/20"
                                }`}
                              >
                                {t}
                              </motion.button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="h-px bg-white/[0.08]" />

                  {/* 3. CONTACTO */}
                  <div className="space-y-4">
                    <h3 className="font-display text-lg font-bold text-white flex items-center gap-2">
                      <User className="w-5 h-5 text-sushi-neon" />
                      Tu información
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="block font-accent text-xs uppercase tracking-[0.12em] text-gray-400 font-semibold">
                          Nombre completo
                        </label>
                        <input
                          type="text"
                          placeholder="ej. Juan García"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full bg-sushi-dark/50 border border-white/10 rounded-lg py-3 px-4 font-sans text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-sushi-coral focus:ring-2 focus:ring-sushi-coral/20 transition-all"
                          required
                          autoComplete="name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block font-accent text-xs uppercase tracking-[0.12em] text-gray-400 font-semibold">
                          Teléfono
                        </label>
                        <input
                          type="tel"
                          placeholder="ej. 641 11 47 78"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-sushi-dark/50 border border-white/10 rounded-lg py-3 px-4 font-sans text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-sushi-coral focus:ring-2 focus:ring-sushi-coral/20 transition-all"
                          required
                          autoComplete="tel"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="block font-accent text-xs uppercase tracking-[0.12em] text-gray-400 font-semibold">
                        Correo electrónico
                      </label>
                      <input
                        type="email"
                        placeholder="ej. juan@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-sushi-dark/50 border border-white/10 rounded-lg py-3 px-4 font-sans text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-sushi-coral focus:ring-2 focus:ring-sushi-coral/20 transition-all"
                        required
                        autoComplete="email"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block font-accent text-xs uppercase tracking-[0.12em] text-gray-400 font-semibold">
                        Notas especiales (opcional)
                      </label>
                      <textarea
                        placeholder="Alergias, celebraciones, peticiones especiales..."
                        rows={3}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="w-full bg-sushi-dark/50 border border-white/10 rounded-lg py-3 px-4 font-sans text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-sushi-coral focus:ring-2 focus:ring-sushi-coral/20 transition-all resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full bg-gradient-to-r from-sushi-coral to-sushi-coral-light hover:from-sushi-coral-dark hover:to-sushi-coral disabled:from-gray-600 disabled:to-gray-600 text-white font-accent font-bold uppercase tracking-[0.1em] py-4 px-6 rounded-lg transition-all disabled:opacity-60 shadow-[0_0_20px_rgba(255,92,23,0.22)] hover:shadow-[0_0_30px_rgba(255,92,23,0.42)]"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <motion.div
                          className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Procesando...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <span>Confirmar reserva</span>
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    )}
                  </motion.button>

                  {/* WhatsApp alternative */}
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-px bg-white/[0.08]" />
                    <span className="font-sans text-[10px] text-gray-500 uppercase tracking-widest">o</span>
                    <div className="flex-1 h-px bg-white/[0.08]" />
                  </div>
                  <a
                    href={`https://wa.me/34641114778?text=${encodeURIComponent(
                      `Hola, me gustaría reservar una mesa en Casa del Sushi.\n📅 Fecha: ${date}\n⏰ Hora: ${selectedTime}\n👥 Personas: ${guests}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-lg font-accent font-bold uppercase tracking-[0.08em] text-sm text-white transition-all"
                    style={{
                      background: "#25D366",
                      boxShadow: "0 4px 20px rgba(37,211,102,0.25)",
                    }}
                  >
                    <MessageCircle className="w-4 h-4" aria-hidden />
                    Reservar por WhatsApp
                  </a>

                  <p className="font-sans text-[10px] text-gray-500 text-center leading-relaxed">
                    Sin pago anticipado · Confirmación por teléfono en 24h
                  </p>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 180, damping: 20 }}
                  className="text-center py-6 relative"
                >
                  {/* Emojis flotantes */}
                  <motion.div
                    className="absolute -top-8 -left-8 text-5xl"
                    animate={{ y: [-30, -50], opacity: [1, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    🎉
                  </motion.div>
                  <motion.div
                    className="absolute -top-6 -right-6 text-5xl"
                    animate={{ y: [-25, -45], opacity: [1, 0] }}
                    transition={{ duration: 2.2, repeat: Infinity }}
                  >
                    ✨
                  </motion.div>

                  {/* Success icon */}
                  <motion.div
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-sushi-coral/20 to-sushi-neon/10 border-2 border-sushi-coral/40 flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(255,92,23,0.32)]"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <CheckCircle2 className="w-10 h-10 text-sushi-coral" />
                    </motion.div>
                  </motion.div>

                  <h3 className="font-display text-4xl font-bold text-white mb-2 drop-shadow-[0_0_20px_rgba(255,92,23,0.22)]">
                    ¡Recibido!
                  </h3>
                  <p className="font-sans text-sushi-muted text-sm mb-8">
                    Hemos recibido tu solicitud de reserva
                  </p>

                  {/* Booking reference box */}
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="bg-sushi-dark/50 border border-sushi-coral/30 rounded-lg p-6 mb-8"
                  >
                    <p className="font-accent text-[10px] uppercase tracking-[0.15em] text-sushi-coral font-semibold mb-3">
                      Tu localizador
                    </p>
                    <p className="font-display text-3xl font-bold text-white mb-4 font-mono drop-shadow-[0_0_14px_rgba(255,92,23,0.35)]">
                      {bookingRef}
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-left">
                      <div>
                        <span className="font-accent text-[9px] uppercase tracking-[0.12em] text-gray-500 font-semibold block">Fecha</span>
                        <span className="text-white font-semibold">{date}</span>
                      </div>
                      <div>
                        <span className="font-accent text-[9px] uppercase tracking-[0.12em] text-gray-500 font-semibold block">Hora</span>
                        <span className="text-white font-semibold">{selectedTime}</span>
                      </div>
                      <div>
                        <span className="font-accent text-[9px] uppercase tracking-[0.12em] text-gray-500 font-semibold block">Comensales</span>
                        <span className="text-white font-semibold">{guests}</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Details card */}
                  <div className="bg-sushi-neon/5 border border-sushi-neon/20 rounded-lg p-4 mb-8">
                    <div className="flex gap-3">
                      <AlertCircle className="w-5 h-5 text-sushi-neon shrink-0 mt-0.5" />
                      <p className="font-sans text-sm text-gray-300 leading-relaxed text-left">
                        <strong>Próximos pasos:</strong> Recibirás una confirmación por teléfono o email en las próximas 24 horas. Buffet 17,80€ por persona. Sin pago anticipado.
                      </p>
                    </div>
                  </div>

                  <motion.button
                    type="button"
                    onClick={handleReset}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-sushi-dark border border-white/10 hover:border-white/20 text-white font-accent font-bold uppercase tracking-[0.1em] py-3 px-6 rounded-lg transition-all"
                  >
                    Hacer otra reserva
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
