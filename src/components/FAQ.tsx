import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "¿Es necesario hacer reserva?",
    answer: "No, los clientes sin reserva son bienvenidos. Aunque durante los fines de semana (viernes y sábado) recomendamos reservar para garantizar mesa. Los martes a jueves puedes llegar sin previo aviso.",
    category: "Reservas",
  },
  {
    id: "faq-2",
    question: "¿Dónde aparcar?",
    answer: "Casa del Sushi está en Plaza del Rey, en el centro histórico. A menos de 100 metros hay un aparcamiento público con muy buena disponibilidad. Además, el barrio es muy accesible a pie.",
    category: "Ubicación",
  },
  {
    id: "faq-3",
    question: "¿Qué incluye el buffet libre?",
    answer: "El buffet incluye toda nuestra carta de sushi: rolls, nigiri, sashimi, entrada calientes, postres y refrescos. Las bebidas alcohólicas (cerveza, sake, cócteles) tienen un costo adicional desde 3€.",
    category: "Menú",
  },
  {
    id: "faq-4",
    question: "¿Tenéis opciones para alergias o restricciones dietarias?",
    answer: "Sí, tomamos muy en serio las alergias. Comunícanos tus restricciones al reservar o al llegar. Nuestro chef puede adaptar platos o preparar opciones veganas. Consulta siempre con el personal.",
    category: "Alergias",
  },
  {
    id: "faq-5",
    question: "¿El pescado es fresco o congelado?",
    answer: "Utilizamos pescado de máxima calidad, tratado según la normativa de consumo seguro de pescado crudo. Todos nuestros ingredientes son frescos y seleccionados diariamente.",
    category: "Calidad",
  },
  {
    id: "faq-6",
    question: "¿Cómo funciona el sistema de rondas del buffet?",
    answer: "En cada ronda pides lo que quieras de toda la carta, sin límite de rondas. Lo preparamos al momento en la barra y lo llevamos directamente a tu mesa recién hecho. Solo pedimos que consumas lo que pides: tenemos política anti-desperdicio para cuidar la calidad de cada plato.",
    category: "Buffet",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="section-pad bg-gradient-to-b from-sushi-dark via-sushi-surface/8 to-sushi-dark relative border-t border-white/[0.05]"
    >
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeading
          eyebrow="Preguntas frecuentes"
          title="Todo lo que necesitas saber"
          description="Respuestas a las preguntas más comunes de nuestros clientes."
        />

        <div className="mt-12 space-y-3">
          {FAQ_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <button
                type="button"
                onClick={() => toggleItem(item.id)}
                className="w-full card-surface !rounded-lg px-6 py-5 flex items-center justify-between gap-4 hover:border-sushi-gold/30 transition-all duration-300 group"
              >
                <div className="text-left flex-1">
                  <p className="font-sans font-semibold text-white text-sm group-hover:text-sushi-gold transition-colors">
                    {item.question}
                  </p>
                  {item.category && (
                    <p className="font-accent text-[10px] uppercase tracking-wider text-sushi-gold/60 mt-1">
                      {item.category}
                    </p>
                  )}
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-sushi-gold shrink-0 transition-transform duration-300 ${
                    openId === item.id ? "rotate-180" : ""
                  }`}
                  aria-hidden
                />
              </button>

              <AnimatePresence>
                {openId === item.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-5 bg-sushi-surface/30 border border-t-0 border-white/[0.04] rounded-b-lg">
                      <p className="font-sans text-sm text-white/70 leading-relaxed">{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 p-6 bg-gradient-to-r from-sushi-coral/8 to-sushi-neon/8 border border-sushi-gold/15 rounded-lg text-center"
        >
          <p className="font-sans text-sm text-white/80 mb-3">
            ¿No encuentras la respuesta? Estamos aquí para ayudarte.
          </p>
          <a href="tel:+34641114778" className="btn-secondary">
            Llamar directamente
          </a>
        </motion.div>
      </div>
    </section>
  );
}
