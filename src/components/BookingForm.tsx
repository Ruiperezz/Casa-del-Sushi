import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, Users, Clock, Compass, Mail, Phone, User, CheckCircle, Ticket, FileText, Download, AlertCircle } from "lucide-react";
import { BookingData } from "../types";

export default function BookingForm() {
  const [guests, setGuests] = useState<number>(2);
  const [date, setDate] = useState<string>("2026-05-22");
  const [selectedTime, setSelectedTime] = useState<string>("21:30");
  const [seating, setSeating] = useState<string>("indifferent");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [bookingRef, setBookingRef] = useState<string | null>(null);

  const timeslots = {
    lunch: ["13:00", "13:30", "14:00", "14:30", "15:00"],
    dinner: ["20:30", "21:00", "21:30", "22:00", "22:30", "23:00"]
  };

  const seatingOptions = [
    { id: "indifferent", label: "Indiferente (Cualquier Mesa)" },
    { id: "coral-banquet", label: "Mesa con Banqueta Coral" },
    { id: "garden-wall", label: "Cerca de la Pared del Jardín Vertical" },
    { id: "sushi-bar", label: "Barra de Mármol Negro y Oro" }
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;

    setIsSubmitting(true);

    // Simulate luxury API response time
    setTimeout(() => {
      const generatedCode = `CDS-${Math.floor(1000 + Math.random() * 9000)}`;
      setBookingRef(generatedCode);
      setIsSubmitting(false);
    }, 1800);
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

  return (
    <section id="reserva" className="py-24 bg-sushi-dark relative overflow-hidden text-white border-t border-b border-white/[0.05]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sushi-coral/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left column: Booking benefits copy */}
        <div className="lg:col-span-5 text-left flex flex-col items-start">
          <span className="font-accent text-xs font-bold uppercase tracking-[0.2em] text-sushi-coral drop-shadow-[0_0_8px_rgba(255,95,73,0.5)]">
            PLANIFICACIÓN INSTANTÁNEA
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-white mt-3 mb-6 leading-tight">
            Reserva tu Mesa <br />
            <span className="italic font-normal">en Tiempo Real</span>
          </h2>
          <div className="h-0.5 w-16 bg-sushi-coral mb-6" />
          
          <p className="font-sans text-gray-300 text-sm leading-relaxed mb-8 max-w-lg">
            Asegura tu experiencia gastronómica. En Casa del Sushi mantenemos una alta demanda diaria de nuestras banquetas coral y la barra de autor. Nuestro sistema rápido bloquea tu espacio de forma inmediata con confirmación digital automática.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-sushi-neon/10 border border-sushi-neon/20 rounded-xl text-sushi-neon">
                <CheckCircle className="w-5 h-5 shadow-[0_0_8px_#00F0FF]" />
              </div>
              <div>
                <h4 className="font-accent text-xs uppercase tracking-wide font-bold text-white">Consumo Garantizado</h4>
                <p className="font-sans text-xs text-gray-400">Acceso completo al buffet libre de 17,80€ ilimitado recién cocinado.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-sushi-gold/10 border border-sushi-gold/20 rounded-xl text-sushi-gold">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-accent text-xs uppercase tracking-wide font-bold text-white">Elección de Ambiente</h4>
                <p className="font-sans text-xs text-gray-400">Puedes seleccionar tu ubicación decorativa favorita sin recargo.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-sushi-coral/10 border border-sushi-coral/30 rounded-xl text-sushi-coral">
                <Ticket className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-accent text-xs uppercase tracking-wide font-bold text-white">Soporte Express</h4>
                <p className="font-sans text-xs text-gray-400">Dispones de 15 minutos de cortesía con tu mesa reservada si surge algún imprevisto.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: Interactive form panel */}
        <div className="lg:col-span-7">
          <div className="bg-sushi-green/40 border border-sushi-gold/30 rounded-2xl p-6 sm:p-10 shadow-2xl relative">
            
            <AnimatePresence mode="wait">
              {!bookingRef ? (
                // BOOKING ENTER MODE
                <motion.form
                  key="form-entry"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  onSubmit={handleSubmit}
                  className="space-y-6 text-left"
                >
                  <div className="border-b border-white/[0.08] pb-4 mb-2">
                    <h3 className="font-display text-lg font-bold text-white">Formulario Virtual de Reserva</h3>
                    <p className="font-sans text-[11px] text-gray-400">Sencillo, rápido y sin pagos previos.</p>
                  </div>

                  {/* Date & Guests selectors */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Date Picker */}
                    <div>
                      <label className="font-accent text-[10px] uppercase font-bold text-sushi-gold tracking-widest block mb-2 flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Fecha de Visita</span>
                      </label>
                      <input
                        type="date"
                        value={date}
                        min="2026-05-22"
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full bg-sushi-dark border border-white/10 rounded-lg py-3 px-4 font-sans text-xs text-white focus:outline-none focus:border-sushi-gold transition-colors"
                        required
                      />
                    </div>

                    {/* Guests Count Selector */}
                    <div>
                      <label className="font-accent text-[10px] uppercase font-bold text-sushi-gold tracking-widest block mb-2 flex items-center gap-2">
                        <Users className="w-3.5 h-3.5" />
                        <span>Comensales: {guests} {guests === 1 ? "persona" : "personas"}</span>
                      </label>
                      <div className="flex items-center gap-2">
                        <input
                          type="range"
                          min="1"
                          max="10"
                          value={guests}
                          onChange={(e) => setGuests(parseInt(e.target.value))}
                          className="w-full h-1.5 bg-sushi-dark rounded-lg appearance-none cursor-pointer accent-sushi-coral"
                        />
                        <span className="font-display font-bold text-sm bg-sushi-dark border border-white/10 px-3 py-1.5 rounded-lg shrink-0 w-10 text-center">
                          {guests}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Hour Selector shifts */}
                  <div>
                    <label className="font-accent text-[10px] uppercase font-bold text-sushi-gold tracking-widest block mb-1 flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Horario Seleccionado</span>
                    </label>
                    <p className="font-sans text-[10px] text-gray-400 mb-2">Por favor, elija un turno disponible:</p>
                    
                    <div className="space-y-3">
                      {/* Lunch hours */}
                      <div>
                        <span className="text-[10px] font-accent uppercase text-gray-500 font-bold block mb-1.5">Turno del Almuerzo (Comidas)</span>
                        <div className="flex flex-wrap gap-1.5">
                          {timeslots.lunch.map((t) => (
                            <button
                              type="button"
                              key={t}
                              onClick={() => setSelectedTime(t)}
                              className={`px-3 py-1.5 rounded text-[11px] font-sans transition-colors cursor-pointer border ${
                                selectedTime === t
                                  ? "bg-sushi-neon border-sushi-neon text-sushi-dark font-bold shadow-[0_0_8px_rgba(0,240,255,0.4)]"
                                  : "bg-sushi-dark hover:bg-neutral-800 text-gray-300 border-white/[0.06]"
                              }`}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Dinner hours */}
                      <div>
                        <span className="text-[10px] font-accent uppercase text-gray-500 font-bold block mb-1.5">Turno de la Cena</span>
                        <div className="flex flex-wrap gap-1.5">
                          {timeslots.dinner.map((t) => (
                            <button
                              type="button"
                              key={t}
                              onClick={() => setSelectedTime(t)}
                              className={`px-3 py-1.5 rounded text-[11px] font-sans transition-colors cursor-pointer border ${
                                selectedTime === t
                                  ? "bg-sushi-coral border-sushi-coral text-white font-bold shadow-[0_0_8px_rgba(255,95,73,0.4)]"
                                  : "bg-sushi-dark hover:bg-neutral-800 text-gray-300 border-white/[0.06]"
                              }`}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Seating Preference Selector */}
                  <div>
                    <label className="font-accent text-[10px] uppercase font-bold text-sushi-gold tracking-widest block mb-2 flex items-center gap-2">
                      <Compass className="w-3.5 h-3.5" />
                      <span>Sugerencia de Distribución</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {seatingOptions.map((opt) => (
                        <button
                          type="button"
                          key={opt.id}
                          onClick={() => setSeating(opt.id)}
                          className={`text-left p-3 rounded-xl border font-sans text-xs transition-colors cursor-pointer ${
                            seating === opt.id
                              ? "bg-sushi-gold/15 border-sushi-gold text-sushi-gold font-semibold"
                              : "bg-sushi-dark/50 hover:bg-sushi-dark/90 border-white/[0.06] text-gray-300"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Divider line */}
                  <div className="h-px bg-white/[0.06]" />

                  {/* Customer Information Form Fields */}
                  <div className="space-y-4">
                    <label className="font-accent text-[10px] uppercase font-bold text-sushi-gold tracking-widest block mb-1">
                      Información de Contacto
                    </label>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Name fields */}
                      <div className="relative">
                        <User className="w-4 h-4 text-gray-500 absolute left-3 top-3.5" />
                        <input
                          type="text"
                          placeholder="Nombre completo"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full bg-sushi-dark border border-white/10 rounded-lg py-3 pl-10 pr-4 font-sans text-xs text-white focus:outline-none focus:border-sushi-gold transition-colors"
                          required
                        />
                      </div>

                      {/* Telephone fields */}
                      <div className="relative">
                        <Phone className="w-4 h-4 text-gray-500 absolute left-3 top-3.5" />
                        <input
                          type="tel"
                          placeholder="Teléfono móvil (+34...)"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-sushi-dark border border-white/10 rounded-lg py-3 pl-10 pr-4 font-sans text-xs text-white focus:outline-none focus:border-sushi-gold transition-colors"
                          required
                        />
                      </div>
                    </div>

                    {/* Email field */}
                    <div className="relative">
                      <Mail className="w-4 h-4 text-gray-500 absolute left-3 top-3.5" />
                      <input
                        type="email"
                        placeholder="Correo electrónico de confirmación"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-sushi-dark border border-white/10 rounded-lg py-3 pl-10 pr-4 font-sans text-xs text-white focus:outline-none focus:border-sushi-gold transition-colors"
                        required
                      />
                    </div>

                    {/* Dietary warnings notes */}
                    <div>
                      <textarea
                        placeholder="¿Alguna alergia alimentaria, intolerancia al gluten, embarazo o celebración de cumpleaños? Háznoslo saber..."
                        rows={2}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="w-full bg-sushi-dark border border-white/10 rounded-lg py-3 px-4 font-sans text-xs text-white focus:outline-none focus:border-sushi-gold transition-colors resize-none"
                      />
                    </div>
                  </div>

                  {/* Button Submission */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4.5 bg-sushi-coral text-white font-accent font-bold uppercase text-xs tracking-widest rounded-xl hover:shadow-[0_0_20px_rgba(255,95,73,0.5)] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 rounded-full border-2 border-white/20 border-t-white animate-spin shrink-0" />
                        <span>Verificando Disponibilidad...</span>
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-4 h-4" />
                        <span>Confirmar Reserva de Mesa</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                // SUCCESS GORGEOUS TICKET COMPONENT
                <motion.div
                  key="form-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="space-y-6 text-center py-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 flex items-center justify-center mx-auto mb-4 animate-bounce">
                    <CheckCircle className="w-8 h-8" />
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white">¡Mesa Confirmada!</h3>
                  <p className="font-sans text-xs text-gray-400 max-w-md mx-auto leading-normal">
                    Tu mesa para disfrutar del buffet libre premium ya está garantizada en nuestro sistema para el día <strong className="text-white">{date}</strong> a las <strong className="text-white">{selectedTime} h</strong>.
                  </p>

                  {/* Aesthetic Voucher Card Representation */}
                  <div className="bg-sushi-dark/90 border border-sushi-gold/30 rounded-xl p-6 shadow-2xl relative overflow-hidden max-w-md mx-auto text-left">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-sushi-gold/10 to-transparent rounded-bl-full pointer-events-none" />
                    
                    {/* Brand Banner Inside Ticket */}
                    <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-4">
                      <div>
                        <h4 className="font-wide text-xs font-bold text-white tracking-widest">CASA DEL SUSHI</h4>
                        <p className="font-sans text-[8px] text-gray-500 uppercase tracking-widest leading-none mt-1">Plaza del Rey, Cartagena</p>
                      </div>
                      <div className="px-2.5 py-1 bg-sushi-gold/10 border border-sushi-gold/30 rounded text-[9px] font-accent text-sushi-gold font-bold">
                        {bookingRef}
                      </div>
                    </div>

                    {/* Specs columns */}
                    <div className="grid grid-cols-2 gap-4 text-xs font-sans mb-4">
                      <div>
                        <span className="text-[10px] text-gray-500 block">Titular:</span>
                        <span className="text-white font-medium">{name}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-gray-500 block">Comensales:</span>
                        <span className="text-white font-medium">{guests} Comensales</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-gray-500 block">Fecha & Hora:</span>
                        <span className="text-sushi-neon font-medium">{date} • {selectedTime} h</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-gray-500 block">Ubicación Solicitada:</span>
                        <span className="text-sushi-coral font-medium uppercase font-accent text-[9px]">
                          {seatingOptions.find(opt => opt.id === seating)?.label.split(" (")[0] || "Indiferente"}
                        </span>
                      </div>
                    </div>

                    {/* Simulated paper cut marks */}
                    <div className="border-t border-dashed border-white/20 pt-4 mt-2">
                      <div className="flex items-center gap-2.5 bg-sushi-green/60 p-3 rounded-lg border border-white/[0.04]">
                        <AlertCircle className="w-4 h-4 text-sushi-gold shrink-0" />
                        <p className="font-sans text-[10px] text-gray-300 leading-normal">
                          <strong className="text-white">Recordatorio:</strong> Te esperaremos hasta 15 min después del turno acordado. El precio base del Buffet Libre es de 17,80€ por persona, con bebidas aparte desde 3,00€.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Actions under confirmation ticket */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center">
                    <button
                      onClick={() => alert(`Su localizador de reserva es ${bookingRef}. Hemos enviado los detalles al correo ${email}. ¡Gracias por confiar en Casa del Sushi!`)}
                      className="px-5 py-2.5 bg-neutral-800 text-gray-300 font-accent font-bold uppercase text-[10px] tracking-wider rounded-lg border border-white/10 hover:text-white transition-colors cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Descargar Localizador</span>
                    </button>

                    <button
                      onClick={handleReset}
                      className="px-5 py-2.5 bg-sushi-coral text-white font-accent font-bold uppercase text-[10px] tracking-wider rounded-lg hover:shadow-lg transition-all cursor-pointer"
                    >
                      <span>Realizar otra reserva</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

      </div>
    </section>
  );
}
