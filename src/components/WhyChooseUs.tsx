import { Sparkles, Armchair, Hexagon, Leaf } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { SITE } from "../data/site";

const features = [
  {
    icon: Sparkles,
    title: "Carta incluida en el buffet",
    desc: "Uramakis, nigiris flameados y entrantes de autor por 17,80 €. Pides en rondas, llega recién hecho.",
  },
  {
    icon: Armchair,
    title: "Un salón con personalidad",
    desc: "Banquetas naranja, sillas azul, neón, vidriera y mármol negro con detalle dorado. Tal como en las fotos.",
  },
  {
    icon: Hexagon,
    title: "Barra y jardín vertical",
    desc: "Zona de barra con vegetación colgante, copas y vinos. Un rincón muy nuestro.",
  },
  {
    icon: Leaf,
    title: "Te adaptamos la carta",
    desc: "Opciones sin gluten, menú infantil y bebidas desde 3 €. Pregunta al reservar o al llegar.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-sushi-dark border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Por qué venir"
          title="Calidad, ambiente y trato cercano"
          description={`En ${SITE.location} reunimos buen producto, un local cuidado y un equipo que conoce la carta.`}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="card-surface p-6">
              <Icon className="w-5 h-5 text-sushi-coral mb-4" strokeWidth={1.5} aria-hidden />
              <h3 className="font-display text-xl font-semibold text-white mb-2">{title}</h3>
              <p className="font-sans text-sm text-sushi-muted leading-relaxed">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
