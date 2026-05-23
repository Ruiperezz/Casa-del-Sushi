import { SITE } from "../data/site";

const items = [
  { value: `${SITE.googleRating} ★`, label: "Google Maps", detail: "Opiniones de clientes" },
  { value: SITE.buffetPrice, label: "Buffet libre", detail: "IVA incluido" },
  { value: "Plaza del Rey", label: "Cartagena", detail: "Centro histórico" },
  { value: "12:00–00:00", label: "Comida y cena", detail: "Consulta horario completo" },
];

export default function TrustStrip() {
  return (
    <section aria-label="Datos del restaurante" className="border-y border-white/[0.06] bg-sushi-surface/60">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {items.map(({ value, label, detail }) => (
            <li key={label}>
              <p className="font-display text-lg font-semibold text-white tabular-nums">{value}</p>
              <p className="font-sans text-sm text-sushi-coral mt-0.5">{label}</p>
              <p className="font-sans text-xs text-sushi-muted">{detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
