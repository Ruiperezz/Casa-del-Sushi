import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Calendar,
  Users,
  Clock,
  Compass,
  Mail,
  Phone,
  User,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const timeslots = {
  lunch: ["13:00", "13:30", "14:00", "14:30", "15:00"],
  dinner: ["20:30", "21:00", "21:30", "22:00", "22:30", "23:00"],
};

const seatingOptions = [
  { id: "indifferent", label: "Sin preferencia" },
  { id: "coral-banquet", label: "Banqueta coral" },
  { id: "garden-wall", label: "Jardín vertical" },
  { id: "sushi-bar", label: "Barra de mármol" },
];

const inputClass =
  "w-full bg-sushi-dark border border-white/10 rounded-lg py-3 px-4 font-sans text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-sushi-gold transition-colors";

export default function BookingForm() {
  const todayISO = new Date().toISOString().split("T")[0];
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState(todayISO);
  const [selectedTime, setSelectedTime] = useState("21:30");
  const [seating, setSeating] = useState("indifferent");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingRef, setBookingRef] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setBookingRef(`CDS-${Math.floor(1000 + Math.random() * 9000)}`);
      setIsSubmitting(false);
    }, 1400);
  };

  const handleReset = () => {
    setBookingRef(null);
    setName("");
    setEmail("");
    setPhone("");
    setNotes("");
    setGuests(2);
    setSeating("indifferent");
  };

  const seatingLabel = seatingOptions.find((o) => o.id === seating)?.label ?? "Sin preferencia";

  return (
    <section
      id="reserva"
      className="section-pad bg-sushi-marble relative border-t border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-5">
          <p className="font-accent text-[11px] font-semibold uppercase tracking-[0.2em] text-sushi-coral mb-3">
            Reservas
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white leading-tight mb-5">
            Solicita tu mesa
          </h2>
          <p className="font-sans text-sushi-muted text-sm leading-relaxed mb-8 max-w-md">
            Completa el formulario y recibirás un localizador de referencia. Nuestro equipo
            confirmará disponibilidad por teléfono o correo en horario de servicio.
          </p>

          <ul className="space-y-5">
            {[
              { title: "Buffet 17,80 €", desc: "Precio por persona, bebidas aparte." },
              { title: "Ubicación preferida", desc: "Indica banqueta, jardín o barra sin coste extra." },
              { title: "Cortesía de 15 min", desc: "Mantenemos la mesa tras la hora acordada." },
            ].map((item) => (
              <li key={item.title} className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-sushi-gold shrink-0 mt-0.5" aria-hidden />
                <div>
                  <p className="font-sans text-sm font-medium text-white">{item.title}</p>
                  <p className="font-sans text-sm text-sushi-muted">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-7">
          <div className="card-surface p-6 sm:p-9">
            <AnimatePresence mode="wait">
              {!bookingRef ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  onSubmit={handleSubmit}
                  className="space-y-6 text-left"
                >
                  <div className="pb-4 border-b border-white/[0.08]">
                    <h3 className="font-display text-lg font-semibold text-white">
                      Datos de la reserva
                    </h3>
                    <p className="font-sans text-xs text-sushi-muted mt-1">
                      Sin pago anticipado. Confirmación sujeta a disponibilidad.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="form-label">
                        <Calendar className="w-3.5 h-3.5" aria-hidden />
                        Fecha
                      </label>
                      <input
                        type="date"
                        value={date}
                        min={todayISO}
                        onChange={(e) => setDate(e.target.value)}
                        className={inputClass}
                        required
                      />
                    </div>
                    <div>
                      <label className="form-label">
                        <Users className="w-3.5 h-3.5" aria-hidden />
                        Comensales ({guests})
                      </label>
                      <input
                        type="range"
                        min={1}
                        max={10}
                        value={guests}
                        onChange={(e) => setGuests(parseInt(e.target.value, 10))}
                        className="w-full h-1.5 accent-sushi-coral cursor-pointer mt-3"
                        aria-valuenow={guests}
                      />
                    </div>
                  </div>

                  <fieldset>
                    <legend className="form-label mb-2">
                      <Clock className="w-3.5 h-3.5" aria-hidden />
                      Hora
                    </legend>
                    {(["lunch", "dinner"] as const).map((turn) => (
                      <div key={turn} className="mb-3">
                        <span className="text-[10px] font-accent uppercase text-gray-500 font-semibold block mb-2">
                          {turn === "lunch" ? "Comida" : "Cena"}
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {timeslots[turn].map((t) => (
                            <button
                              key={t}
                              type="button"
                              onClick={() => setSelectedTime(t)}
                              className={`px-3 py-1.5 rounded-md text-sm font-sans border transition-colors cursor-pointer ${
                                selectedTime === t
                                  ? "bg-sushi-coral border-sushi-coral text-white font-medium"
                                  : "bg-sushi-dark border-white/[0.08] text-gray-300 hover:border-white/20"
                              }`}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </fieldset>

                  <fieldset>
                    <legend className="form-label mb-2">
                      <Compass className="w-3.5 h-3.5" aria-hidden />
                      Ubicación preferida
                    </legend>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {seatingOptions.map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setSeating(opt.id)}
                          className={`text-left p-3 rounded-xl border text-sm font-sans transition-colors cursor-pointer ${
                            seating === opt.id
                              ? "bg-sushi-gold/15 border-sushi-gold text-sushi-gold font-medium"
                              : "bg-sushi-dark/50 border-white/[0.08] text-gray-300 hover:border-white/15"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </fieldset>

                  <div className="h-px bg-white/[0.06]" />

                  <div className="space-y-4">
                    <p className="form-label">Contacto</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative">
                        <User className="w-4 h-4 text-gray-500 absolute left-3 top-3.5" aria-hidden />
                        <input
                          type="text"
                          placeholder="Nombre completo"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className={`${inputClass} pl-10`}
                          required
                          autoComplete="name"
                        />
                      </div>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-gray-500 absolute left-3 top-3.5" aria-hidden />
                        <input
                          type="tel"
                          placeholder="Teléfono"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className={`${inputClass} pl-10`}
                          required
                          autoComplete="tel"
                        />
                      </div>
                    </div>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-gray-500 absolute left-3 top-3.5" aria-hidden />
                      <input
                        type="email"
                        placeholder="Correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`${inputClass} pl-10`}
                        required
                        autoComplete="email"
                      />
                    </div>
                    <textarea
                      placeholder="Alergias, celebraciones o peticiones especiales (opcional)"
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button type="submit" disabled={isSubmitting} className="btn-primary w-full !py-4 disabled:opacity-60">
                    {isSubmitting ? (
                      <>
                        <span className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" aria-hidden />
                        Enviando solicitud…
                      </>
                    ) : (
                      "Enviar solicitud de reserva"
                    )}
                  </button>

                  <p className="font-sans text-[11px] text-gray-500 text-center leading-relaxed">
                    Demostración web: el localizador es orientativo. En producción, conectar con
                    sistema de reservas o canal telefónico del restaurante.
                  </p>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-2"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-7 h-7" aria-hidden />
                  </div>

                  <h3 className="font-display text-2xl font-semibold text-white mb-2">
                    Solicitud registrada
                  </h3>
                  <p className="font-sans text-sm text-sushi-muted max-w-md mx-auto mb-8">
                    Hemos generado el localizador <strong className="text-white">{bookingRef}</strong> para
                    el {date} a las {selectedTime}. Te contactaremos para confirmar.
                  </p>

                  <div className="card-surface !rounded-xl p-6 max-w-md mx-auto text-left mb-8">
                    <div className="grid grid-cols-2 gap-4 text-sm font-sans">
                      <div>
                        <span className="text-sushi-muted text-xs block">Titular</span>
                        <span className="text-white">{name}</span>
                      </div>
                      <div>
                        <span className="text-sushi-muted text-xs block">Comensales</span>
                        <span className="text-white">{guests}</span>
                      </div>
                      <div>
                        <span className="text-sushi-muted text-xs block">Ubicación</span>
                        <span className="text-sushi-gold">{seatingLabel}</span>
                      </div>
                      <div>
                        <span className="text-sushi-muted text-xs block">Referencia</span>
                        <span className="text-white font-mono text-xs">{bookingRef}</span>
                      </div>
                    </div>
                    <div className="mt-5 pt-4 border-t border-dashed border-white/10 flex gap-2">
                      <AlertCircle className="w-4 h-4 text-sushi-gold shrink-0 mt-0.5" aria-hidden />
                      <p className="text-xs text-gray-400 leading-relaxed">
                        Buffet 17,80 € / persona. Bebidas desde 3 €. Tolerancia de llegada: 15 minutos.
                      </p>
                    </div>
                  </div>

                  <button type="button" onClick={handleReset} className="btn-secondary">
                    Nueva solicitud
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

    </section>
  );
}
