import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, RefreshCw, Bookmark, Calendar, GlassWater } from "lucide-react";

interface Option {
  id: string;
  label: string;
  desc: string;
}

interface Step {
  id: number;
  title: string;
  subtitle: string;
  options: Option[];
}

export default function Matchmaker() {
  const [step, setStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [result, setResult] = useState<any | null>(null);

  const steps: Step[] = [
    {
      id: 1,
      title: "¿Cuál es tu nivel de atrevimiento gastronómico hoy?",
      subtitle: "Adaptamos las sugerencias a tu espíritu aventurero.",
      options: [
        { id: "classic", label: "Purista de la Tradición", desc: "Prefiero los cortes limpios, nigiris tradicionales y sabores tradicionales limpios." },
        { id: "modern", label: "Vanguardista y Curioso", desc: "Me encantan las salsas ricas, trufa flameada, combinaciones creativas y contrastes." },
        { id: "spicy", label: "Fascinado por el Picante", desc: "Busco ese toque picante y sabroso (mayonesas picantes, tatakis vigorosos)." }
      ]
    },
    {
      id: 2,
      title: "¿Qué tipo de textura prefieres en tus piezas?",
      subtitle: "Crujiente, sedoso, fresco... cada bocado cuenta.",
      options: [
        { id: "raw", label: "Fresco y Sedoso (Pescado Crudo)", desc: "Aprecio el sabor natural del atún bluefin de almadraba o el salmón noruego crudo." },
        { id: "crispy", label: "Crujiente y Dorado (Tempura / Panko)", desc: "Adoro el contraste de tempura caliente, cebollas crujientes y rolls fritos." },
        { id: "smoked", label: "Ahumados y Sabor Profundo", desc: "Prefiero anguila ahumada, pollo teriyaki dulce o pescados sutilmente braseados." }
      ]
    },
    {
      id: 3,
      title: "¿Con qué copa o maridaje te gustaría brindar?",
      subtitle: "Bebidas premium seleccionadas (desde 3€) para coronar la comida.",
      options: [
        { id: "beer", label: "Cerveza de Importación Japonesa", desc: "Kirin Ichiban helada para limpiar el paladar de forma ligera y refrescante." },
        { id: "cocktail", label: "Cóctel Luminiscente Neon Zen", desc: "Cóctel premium con curaçao azul brillante, ginebra premium, sake y tónica de yuzu." },
        { id: "sake", label: "Sake Caliente Tradicional Gekkeikan", desc: "El calor reconfortante del sake servido en cerámica para una inmersión nipona." }
      ]
    }
  ];

  const handleSelect = (optionId: string) => {
    const updatedAnswers = { ...answers, [step]: optionId };
    setAnswers(updatedAnswers);

    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      calculateResult(updatedAnswers);
    }
  };

  const calculateResult = (finalAnswers: Record<number, string>) => {
    const q1 = finalAnswers[0];
    const q2 = finalAnswers[1];
    const q3 = finalAnswers[2];

    let match: any = {
      title: "Explorador Imperial",
      tag: "Vanguardia Premium",
      sushiName: "Neon Blue Dragon Roll + Volcano Coral Roll",
      sushiDesc: "Nuestra mítica combinación de rollos de autor rellenos de langostino en tempura, cubiertos con aguacate, anguila ahumada, y coronas crujientes con mayonesa picante.",
      drinkName: "Cóctel Neon Zen Especial",
      drinkDesc: "Perfecto para maridar con rollos ricos en salsas, gracias a su frescor cítrico del yuzu y el destello de su color azul eléctrico.",
      why: "Tus respuestas reflejan que buscas una inmersión total en el ambiente moderno de Casa del Sushi. El resplandor de los neones, sumado al frescor de los rolls estrella, te garantiza una experiencia inefable.",
      coralBanquetsQuote: "Te recomendamos reservar uno de nuestros exclusivos Banquetes Coral con vistas directas a la barra hexagonal."
    };

    if (q1 === "classic" && q2 === "raw") {
      match = {
        title: "Sushiman Purista",
        tag: "Máxima Tradición",
        sushiName: "Trilogía de Sashimi Fresco y Nigiri Premium",
        sushiDesc: "Cortes limpios de atún rojo bluefin de primera, salmón noruego y pez mantequilla pincelados sutilmente con wasabi original.",
        drinkName: "Sake Caliente Gekkeikan Tradicional",
        drinkDesc: "Servido de forma ritual en vasija caliente para fundirse delicadamente en tu boca junto con la grasa noble del pescado azul.",
        why: "Valorar el producto en bruto es el pilar de la cocina japonesa de prestigio. Este maridaje te transporta directamente a Ginza, combinando a la perfección con la sobriedad clásica de nuestra vajilla de piedra.",
        coralBanquetsQuote: "El sitio perfecto para ti es nuestra barra de mármol negro con vetas doradas, viendo el corte en directo."
      };
    } else if (q1 === "spicy" || q2 === "crispy") {
      match = {
        title: "Aventurero del Sol Naciente",
        tag: "Sabores Intensos y Crujientes",
        sushiName: "Volcano Coral Roll + Tori Panko Golden",
        sushiDesc: "Combinación dinámica donde el picante fundente de la salsa No-Taré y el pollo crujiente rebozado en panko bailan de forma vibrante en tu paladar.",
        drinkName: "Cerveza Premium Japonesa Kirin Ichiban",
        drinkDesc: "Una cerveza ligera y de burbuja fina que limpia perfectamente las notas picantes y grasas para afrontar la siguiente ronda de buffet.",
        why: "Adoras las texturas definidas y el contraste de temperatura y picor. La cerveza Kirin potencia los crujientes, permitiéndote exprimir al máximo el buffet libre sin límites por solo 17,80€.",
        coralBanquetsQuote: "Nuestra mesa bajo el jardín vertical de neón azul te dará ese impacto visual idóneo para acompañar tu cena."
      };
    }

    setResult(match);
  };

  const handleReset = () => {
    setStep(0);
    setAnswers({});
    setResult(null);
  };

  return (
    <section id="matchmaker" className="py-24 bg-sushi-marble relative overflow-hidden border-t border-sushi-gold/10">
      {/* Background aesthetics */}
      <div className="absolute inset-0 gold-veins opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-sushi-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header Title */}
        <div className="text-center mb-12">
          <span className="font-accent text-xs font-bold uppercase tracking-[0.25em] text-sushi-gold">
            INTERACTIVO Y PERSONALIZADO
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white mt-2 mb-4">
            Maridaje Recomendado AI
          </h2>
          <p className="font-sans text-xs sm:text-sm text-gray-400 max-w-xl mx-auto">
            ¿No estás seguro de por dónde empezar? Responde estas 3 breves preguntas y nuestro sommelier virtual diseñará tu combinación perfecta para el buffet de hoy.
          </p>
        </div>

        {/* Step-by-Step interactive box */}
        <div className="bg-sushi-green border border-sushi-gold/30 rounded-2xl p-6 sm:p-10 shadow-2xl relative min-h-[380px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            {!result ? (
              <motion.div
                key={`step-${step}`}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col justify-between h-full"
              >
                <div>
                  {/* Progress Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-accent text-[10px] uppercase tracking-widest text-sushi-gold font-bold">
                      Pregunta {step + 1} de {steps.length}
                    </span>
                    <div className="flex gap-1.5">
                      {steps.map((_, i) => (
                        <div
                          key={i}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            i === step ? "w-8 bg-sushi-neon shadow-[0_0_8px_#00F0FF]" : "w-2 bg-white/10"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Title of active Question */}
                  <h3 className="font-display text-lg sm:text-xl font-semibold text-white mb-1">
                    {steps[step].title}
                  </h3>
                  <p className="font-sans text-xs text-gray-400 mb-8">
                    {steps[step].subtitle}
                  </p>

                  {/* Multiple Choices */}
                  <div className="grid grid-cols-1 gap-3.5">
                    {steps[step].options.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => handleSelect(option.id)}
                        className="w-full text-left bg-sushi-dark/60 hover:bg-sushi-dark/95 border border-white/[0.06] hover:border-sushi-gold/40 p-4 rounded-xl transition-all duration-300 flex items-center justify-between group cursor-pointer"
                      >
                        <div className="flex flex-col pr-4">
                          <span className="font-sans text-xs sm:text-sm font-semibold text-white group-hover:text-sushi-gold transition-colors">
                            {option.label}
                          </span>
                          <span className="font-sans text-[11px] text-gray-400 mt-1">
                            {option.desc}
                          </span>
                        </div>
                        <div className="w-5 h-5 rounded-full border border-white/20 group-hover:border-sushi-gold shrink-0 flex items-center justify-center transition-colors">
                          <div className="w-2.5 h-2.5 rounded-full bg-sushi-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/[0.04] text-[10px] text-gray-500 font-sans text-center">
                  Selecciona una opción para avanzar
                </div>
              </motion.div>
            ) : (
              // Results Presentation Page
              <motion.div
                key="result-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-left"
              >
                {/* Result Title */}
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-6">
                  <div>
                    <span className="font-accent text-[9px] uppercase tracking-widest text-sushi-gold font-bold">
                      {result.tag}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-white mt-1">
                      Menú: {result.title}
                    </h3>
                  </div>
                  <button
                    onClick={handleReset}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-white/10 text-[10px] font-accent uppercase tracking-wider text-gray-400 hover:text-white hover:border-white transition-colors cursor-pointer"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>Reiniciar</span>
                  </button>
                </div>

                {/* Match Details Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Food Match */}
                  <div className="bg-sushi-dark/50 border border-sushi-coral/25 p-4 rounded-xl">
                    <span className="font-accent text-[9px] uppercase tracking-widest text-sushi-coral font-bold flex items-center gap-1.5 mb-1">
                      <Sparkles className="w-3 h-3" />
                      <span>Sushi Recomendado</span>
                    </span>
                    <h4 className="font-sans text-xs sm:text-sm font-bold text-white mb-2 leading-snug">
                      {result.sushiName}
                    </h4>
                    <p className="font-sans text-[11px] text-gray-400 leading-relaxed">
                      {result.sushiDesc}
                    </p>
                  </div>

                  {/* Drink Match */}
                  <div className="bg-sushi-dark/50 border border-sushi-neon/25 p-4 rounded-xl">
                    <span className="font-accent text-[9px] uppercase tracking-widest text-sushi-neon font-bold flex items-center gap-1.5 mb-1">
                      <GlassWater className="w-3 h-3" />
                      <span>Maridaje Ideal</span>
                    </span>
                    <h4 className="font-sans text-xs sm:text-sm font-bold text-white mb-2 leading-snug">
                      {result.drinkName}
                    </h4>
                    <p className="font-sans text-[11px] text-gray-400 leading-relaxed">
                      {result.drinkDesc}
                    </p>
                  </div>
                </div>

                <div className="bg-sushi-dark/80 p-5 rounded-xl border border-sushi-gold/20 mb-8">
                  <h4 className="font-accent text-[10px] uppercase tracking-wider font-bold text-sushi-gold mb-1">
                    ¿Por qué esta propuesta encaja contigo?
                  </h4>
                  <p className="font-sans text-xs text-gray-300 leading-relaxed mb-3">
                    {result.why}
                  </p>
                  <p className="font-sans text-xs text-sushi-neon leading-snug italic">
                    💡 {result.coralBanquetsQuote}
                  </p>
                </div>

                {/* Reservation Invitation CTA */}
                <div className="flex flex-col sm:flex-row gap-4 justify-end items-center">
                  <span className="font-sans text-[10px] text-gray-500 text-center sm:text-left">
                    * Puedes degustar estos platos ilimitadamente con el Buffet Libre de 17.80€
                  </span>
                  <button
                    onClick={() => {
                      const element = document.getElementById("reserva");
                      if (element) element.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full sm:w-auto px-6 py-2.5 bg-sushi-coral hover:bg-sushi-coral/95 text-white font-accent font-semibold text-[11px] uppercase tracking-wider rounded-lg transition-all hover:shadow-[0_0_15px_rgba(255,95,73,0.4)] cursor-pointer text-center"
                  >
                    Hacer mi Reserva en directo
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
