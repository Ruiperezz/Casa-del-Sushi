import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { RefreshCw, GlassWater, Utensils } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { scrollToSection } from "../lib/scroll";

interface Option {
  id: string;
  label: string;
  desc: string;
}

interface Step {
  title: string;
  subtitle: string;
  options: Option[];
}

interface MatchResult {
  title: string;
  tag: string;
  sushiName: string;
  sushiDesc: string;
  drinkName: string;
  drinkDesc: string;
  why: string;
  seatingTip: string;
}

const steps: Step[] = [
  {
    title: "¿Qué perfil de sabor buscas hoy?",
    subtitle: "Adaptamos la recomendación a tu preferencia.",
    options: [
      {
        id: "classic",
        label: "Tradición y pureza",
        desc: "Nigiris limpios, sashimi y sabores directos del producto.",
      },
      {
        id: "modern",
        label: "Creativo y contundente",
        desc: "Salsas, trufa, tempura y combinaciones de autor.",
      },
      {
        id: "spicy",
        label: "Intenso y picante",
        desc: "Mayonesas picantes, tataki y rolls con carácter.",
      },
    ],
  },
  {
    title: "¿Qué textura te apetece más?",
    subtitle: "Cada bocado puede marcar la experiencia.",
    options: [
      {
        id: "raw",
        label: "Fresco y sedoso",
        desc: "Pescado crudo de primera: atún, salmón o pez mantequilla.",
      },
      {
        id: "crispy",
        label: "Crujiente y caliente",
        desc: "Tempura, panko y contrastes dorados.",
      },
      {
        id: "smoked",
        label: "Ahumado y profundo",
        desc: "Anguila, teriyaki y notas braseadas.",
      },
    ],
  },
  {
    title: "¿Con qué bebida lo acompañarías?",
    subtitle: "Bebidas desde 3 €, seleccionadas por nuestro equipo.",
    options: [
      {
        id: "beer",
        label: "Cerveza japonesa",
        desc: "Kirin Ichiban, ligera y ideal para limpiar el paladar.",
      },
      {
        id: "cocktail",
        label: "Cóctel de autor",
        desc: "Combinados con cítricos y toques de yuzu.",
      },
      {
        id: "sake",
        label: "Sake tradicional",
        desc: "Caliente o frío, para una experiencia más clásica.",
      },
    ],
  },
];

const DRINK_BY_CHOICE: Record<string, { drinkName: string; drinkDesc: string }> = {
  beer: {
    drinkName: "Cerveza Japonesa Kirin Ichiban",
    drinkDesc: "Primer prensado, burbuja fina. Limpia el paladar entre ronda y ronda sin saturar el gusto.",
  },
  cocktail: {
    drinkName: "Cóctel Neon Zen — Especial de la Casa",
    drinkDesc: "Sake filtrado, ginebra premium, curaçao azul y tónica de yuzu. El signature bajo la luz de neón.",
  },
  sake: {
    drinkName: "Sake Caliente Gekkeikan Tradicional",
    drinkDesc: "Servido en vasija tokkuri caliente. Funde las grasas del pescado azul con elegancia clásica nipona.",
  },
};

function calculateResult(answers: Record<number, string>): MatchResult {
  const q1 = answers[0]; // atrevimiento: classic | modern | spicy
  const q2 = answers[1]; // textura: raw | crispy | smoked
  const q3 = answers[2]; // bebida: beer | cocktail | sake

  const drink = DRINK_BY_CHOICE[q3] ?? DRINK_BY_CHOICE.cocktail;

  let match: MatchResult = {
    title: "Explorador de autor",
    tag: "Recomendación equilibrada",
    sushiName: "Neon Blue Dragon + Volcano Coral",
    sushiDesc: "Rolls con tempura de langostino, aguacate, anguila ahumada y toques picantes en salseo cremoso.",
    ...drink,
    why: "Combinas creatividad y textura. Esta selección refleja lo mejor de nuestra carta de autor dentro del buffet.",
    seatingTip: "Te sugerimos una mesa con banqueta coral cerca del jardín vertical.",
  };

  if (q1 === "classic" && q2 === "raw") {
    match = {
      title: "Purista del producto",
      tag: "Máxima tradición",
      sushiName: "Trilogía sashimi + nigiri premium",
      sushiDesc: "Atún, salmón y pez mantequilla cortados al momento, con wasabi fresco.",
      ...drink,
      why: "Priorizas el sabor limpio del pescado. Es la expresión más fiel de la cocina japonesa de autor.",
      seatingTip: "La barra de mármol te permite ver el corte en directo.",
    };
  } else if (q1 === "spicy" || q2 === "crispy") {
    match = {
      title: "Intensidad y contraste",
      tag: "Sabores vibrantes",
      sushiName: "Volcano Coral + Tori Panko Golden",
      sushiDesc: "Picante equilibrado, crujiente de panko y pollo teriyaki en la misma ronda.",
      ...drink,
      why: "Buscas dinamismo en textura y temperatura. Esta combinación exprime el buffet sin saturar.",
      seatingTip: "El rincón del jardín vertical aporta el ambiente más envolvente para esta experiencia.",
    };
  }

  return match;
}

export default function Matchmaker() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [result, setResult] = useState<MatchResult | null>(null);

  const handleSelect = (optionId: string) => {
    const updated = { ...answers, [step]: optionId };
    setAnswers(updated);

    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      setResult(calculateResult(updated));
    }
  };

  const handleReset = () => {
    setStep(0);
    setAnswers({});
    setResult(null);
  };

  return (
    <section id="matchmaker" className="section-pad bg-sushi-dark relative border-t border-white/[0.06]">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeading
          eyebrow="Guía de maridaje"
          title="Tu combinación ideal en 3 pasos"
          description="Un asistente basado en las preferencias de nuestro equipo. Sin IA externa: lógica pensada para orientarte antes de pedir."
        />

        <div className="card-surface p-6 sm:p-9 min-h-[360px] flex flex-col">
          <AnimatePresence mode="wait">
            {!result ? (
              <motion.div
                key={`step-${step}`}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col flex-grow"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-accent text-[11px] uppercase tracking-widest text-sushi-gold font-semibold">
                    Paso {step + 1} de {steps.length}
                  </span>
                  <div className="flex gap-1.5" aria-hidden>
                    {steps.map((_, i) => (
                      <div
                        key={i}
                        className={`h-1 rounded-full transition-all duration-300 ${
                          i === step ? "w-8 bg-sushi-gold" : "w-2 bg-white/10"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <h3 className="font-display text-xl font-semibold text-white mb-1">
                  {steps[step].title}
                </h3>
                <p className="font-sans text-sm text-sushi-muted mb-6">{steps[step].subtitle}</p>

                <div className="space-y-3 flex-grow">
                  {steps[step].options.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => handleSelect(option.id)}
                      className="w-full text-left card-surface !rounded-xl p-4 hover:border-sushi-gold/35 transition-colors cursor-pointer group"
                    >
                      <span className="font-sans text-sm font-semibold text-white group-hover:text-sushi-gold transition-colors block">
                        {option.label}
                      </span>
                      <span className="font-sans text-sm text-sushi-muted mt-1 block">{option.desc}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
              >
                <div className="flex items-start justify-between gap-4 border-b border-white/[0.08] pb-5 mb-6">
                  <div>
                    <p className="font-accent text-[10px] uppercase tracking-widest text-sushi-gold font-semibold">
                      {result.tag}
                    </p>
                    <h3 className="font-display text-2xl font-semibold text-white mt-1">{result.title}</h3>
                  </div>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 text-xs text-sushi-muted hover:text-white hover:border-white/20 transition-colors cursor-pointer shrink-0"
                  >
                    <RefreshCw className="w-3.5 h-3.5" aria-hidden />
                    Reiniciar
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                  <article className="card-surface !rounded-xl p-4 border-sushi-coral/20">
                    <p className="font-accent text-[10px] uppercase text-sushi-coral font-semibold flex items-center gap-1.5 mb-2">
                      <Utensils className="w-3.5 h-3.5" aria-hidden />
                      Para comer
                    </p>
                    <h4 className="font-sans text-sm font-semibold text-white mb-2">{result.sushiName}</h4>
                    <p className="font-sans text-sm text-sushi-muted leading-relaxed">{result.sushiDesc}</p>
                  </article>
                  <article className="card-surface !rounded-xl p-4 border-sushi-neon/15">
                    <p className="font-accent text-[10px] uppercase text-sushi-neon font-semibold flex items-center gap-1.5 mb-2">
                      <GlassWater className="w-3.5 h-3.5" aria-hidden />
                      Para beber
                    </p>
                    <h4 className="font-sans text-sm font-semibold text-white mb-2">{result.drinkName}</h4>
                    <p className="font-sans text-sm text-sushi-muted leading-relaxed">{result.drinkDesc}</p>
                  </article>
                </div>

                <p className="font-sans text-sm text-gray-300 leading-relaxed mb-2">{result.why}</p>
                <p className="font-sans text-sm text-sushi-gold/90 mb-6">{result.seatingTip}</p>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/[0.06]">
                  <p className="font-sans text-xs text-sushi-muted">
                    Incluido en el buffet libre por 17,80 € / persona
                  </p>
                  <button type="button" onClick={() => scrollToSection("reserva")} className="btn-primary">
                    Reservar con esta guía
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
