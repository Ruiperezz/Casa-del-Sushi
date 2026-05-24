import { SITE } from "../data/site";

const ITEMS = [
  { text: "Buffet artesanal al momento", color: "var(--color-sushi-coral)" },
  { text: `${SITE.googleRating} ★ en Google`, color: "var(--color-sushi-gold)" },
  { text: "Plaza del Rey · Cartagena", color: "var(--color-sushi-neon)" },
  { text: `Solo ${SITE.buffetPrice} por persona`, color: "var(--color-sushi-coral)" },
  { text: "Abierto los 7 días", color: "rgba(255,255,255,0.7)" },
  { text: "Cocina japonesa de autor", color: "var(--color-sushi-gold)" },
  { text: "Sushi recién hecho en tu mesa", color: "var(--color-sushi-neon)" },
  { text: "Jardín vertical en la barra", color: "rgba(255,255,255,0.7)" },
];

const DOUBLED = [...ITEMS, ...ITEMS];

export default function PromoTicker() {
  return (
    <div
      className="relative overflow-hidden select-none"
      style={{
        background: "linear-gradient(90deg, #0a0600 0%, #100A02 40%, #100A02 60%, #0a0600 100%)",
        borderTop: "1px solid rgba(255,92,23,0.2)",
        borderBottom: "1px solid rgba(255,92,23,0.12)",
        padding: "11px 0",
      }}
      aria-hidden
    >
      {/* Edge fades */}
      <div
        className="absolute left-0 inset-y-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #0a0600, transparent)" }}
      />
      <div
        className="absolute right-0 inset-y-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #0a0600, transparent)" }}
      />

      <div
        className="flex items-center whitespace-nowrap"
        style={{ animation: "ticker-scroll 32s linear infinite" }}
      >
        {DOUBLED.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 font-accent text-[11px] uppercase tracking-[0.2em] font-semibold mx-7"
          >
            <span style={{ color: item.color }}>{item.text}</span>
            <span
              className="text-[8px]"
              style={{ color: "rgba(255,92,23,0.5)" }}
            >
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
