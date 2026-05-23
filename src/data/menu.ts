import { MenuItem, Review } from "../types";

export const MENU_ITEMS: MenuItem[] = [
  // Buffet Starters
  {
    id: "star-1",
    name: "Edamame Flambeado al Sésamo",
    description: "Vainas de soja tiernas salteadas al wok con escamas de sal de Maldon y aceite curado de sésamo.",
    category: "buffet-starters",
    tags: ["Buffet Incluido", "Vegano", "Sin Gluten"],
    allergens: ["Sésamo", "Soja"],
    isPopular: false
  },
  {
    id: "star-2",
    name: "Gyozas Crujientes de Langostino (4 uds)",
    description: "Empanadillas japonesas artesanales rellenas de langostinos y jengibre fresco, servidas con salsa dulce de soja.",
    category: "buffet-starters",
    tags: ["Buffet Incluido", "Se Recomienda Caliente"],
    allergens: ["Gluten", "Crustáceos", "Soja"],
    isPopular: true
  },
  {
    id: "star-3",
    name: "Tártaro Premium de Salmón y Aguacate",
    description: "Cama de aguacate cremoso coronada con salmón fresco picado a cuchillo, marinado en salsa Ponzu y huevas de tobiko.",
    category: "buffet-starters",
    tags: ["Buffet Incluido", "Top Selección"],
    allergens: ["Pescado", "Soja", "Gluten"],
    isPopular: true
  },
  {
    id: "star-4",
    name: "Wakame con Sésamo Tostado",
    description: "Ensalada de alga marina crujiente e hidratada, aliñada con vinagre de arroz dulce y sésamo negro.",
    category: "buffet-starters",
    tags: ["Buffet Incluido", "Vegano"],
    allergens: ["Sésamo", "Soja"],
  },

  // Nigiri / Sashimi
  {
    id: "nig-1",
    name: "Nigiri de Salmón Flameado con Trufa",
    description: "Bola de arroz artesanal cubierta de salmón de primera calidad flameado con soplete, finalizado con un toque de crema de trufa negra.",
    category: "nigiri-sashimi",
    tags: ["Buffet Incluido", "Favorito del Chef"],
    allergens: ["Pescado"],
    isPopular: true
  },
  {
    id: "nig-2",
    name: "Nigiri de Atún Rojo Bluefin con Lámina de Oro",
    description: "Atún rojo de almadraba seleccionado, corte limpio sobre arroz con un toque delicado de wasabi fresco.",
    category: "nigiri-sashimi",
    tags: ["Buffet Incluido", "Premium"],
    allergens: ["Pescado"],
    isPopular: true
  },
  {
    id: "nig-3",
    name: "Sashimi de Salmón Noruego (5 cortes)",
    description: "Filetes gruesos y frescos de salmón noruego premium cortados al momento por nuestros sushimen.",
    category: "nigiri-sashimi",
    tags: ["Buffet Incluido", "Sin Gluten"],
    allergens: ["Pescado"],
    isPopular: false
  },
  {
    id: "nig-4",
    name: "Nigiri de Pez Mantequilla con Trufa Negra",
    description: "Corte suave y sedoso de pez mantequilla pincelado con aceite de trufa y ralladura sutil de lima fresca.",
    category: "nigiri-sashimi",
    tags: ["Buffet Incluido", "Textura Melosa"],
    allergens: ["Pescado"]
  },

  // Special Rolls
  {
    id: "roll-1",
    name: "Volcano Coral Roll (8 uds)",
    description: "Uramaki relleno de aguacate y queso crema, cubierto de salmón fundente y una corona crujiente de tempura bañada en mayonesa japonesa picante y salsa No-Taré.",
    category: "special-rolls",
    tags: ["Buffet Incluido", "Picante Suave", "Top Selección"],
    allergens: ["Gluten", "Lácteos", "Pescado", "Huevo", "Soja"],
    isPopular: true
  },
  {
    id: "roll-2",
    name: "Neon Blue Dragon Roll (8 uds)",
    description: "Homenaje a nuestro neón eléctrico. Relleno de langostino en tempura crujiente, espárrago triguero, coronado con una fina lámina de aguacate de la huerta, anguila ahumada y salsa Unagi ahumada.",
    category: "special-rolls",
    tags: ["Buffet Incluido", "Especialidad de la Casa"],
    allergens: ["Gluten", "Crustáceos", "Pescado", "Soja"],
    isPopular: true
  },
  {
    id: "roll-3",
    name: "Uramaki Cartagena Imperial (8 uds)",
    description: "Inspirado en nuestra bahía. Relleno de atún picante picado a cuchillo, coronado con lubina marinada, cebolla roja caramelizada y un sutil toque de alioli de ajo asado.",
    category: "special-rolls",
    tags: ["Buffet Incluido", "Sabor Intenso"],
    allergens: ["Pescado", "Huevo", "Soja"],
    isPopular: false
  },
  {
    id: "roll-4",
    name: "Tori Panko Golden Roll (8 uds)",
    description: "Roll totalmente crujiente rebozado en panko japonés, relleno de pollo marinado al teriyaki, queso philadelphia fundido y sutil cebollino fresco.",
    category: "special-rolls",
    tags: ["Buffet Incluido", "Crujiente"],
    allergens: ["Gluten", "Lácteos", "Soja"],
    isPopular: false
  },

  // Drinks & Cocktails
  {
    id: "drink-1",
    name: "Cerveza Japonesa Kirin Ichiban",
    description: "Cerveza premium japonesa elaborada mediante un exclusivo proceso de primer prensado para un sabor limpio y refrescante.",
    price: 3.50,
    category: "drinks-cocktails",
    tags: ["Bebida", "Importación"],
    allergens: ["Gluten"],
    isPopular: true
  },
  {
    id: "drink-2",
    name: "Agua Mineral de Sierra Nevada (500ml)",
    description: "Premium agua pura de manantial para refrescar el paladar.",
    price: 3.00,
    category: "drinks-cocktails",
    tags: ["Bebida", "Esencial"],
    allergens: [],
  },
  {
    id: "drink-3",
    name: "Sake Caliente Gekkeikan (Tradicional)",
    description: "Sake japonés artesanal servido caliente en jarra Tokkuri tradicional. Ideal para maridar con nigiri de salmón.",
    price: 5.00,
    category: "drinks-cocktails",
    tags: ["Bebida", "Tradición Japonesa"],
    allergens: [],
    isPopular: false
  },
  {
    id: "drink-4",
    name: "Cóctel Neon Zen (Especial Casa)",
    description: "Inspirado en el neón azul de nuestro local. Una cautivadora mezcla de sake filtrado, gin premium, curaçao azul para un resplandor eléctrico, sirope de jazmín y tónica de yuzu.",
    price: 7.50,
    category: "drinks-cocktails",
    tags: ["Bebida", "Combinado Premium"],
    allergens: [],
    isPopular: true
  }
];

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    author: "María García",
    rating: 5,
    text: "Un descubrimiento increíble en Cartagena. El buffet llega todo recién hecho a la mesa y a ese precio es una pasada. Los nigiris flameados están espectaculares y el local tiene un ambiente muy especial. Las banquetas naranja y el neón azul le dan un carácter único. Repetiremos sin duda.",
    date: "Hace 2 semanas",
    avatarSeed: "maria"
  },
  {
    id: "rev-2",
    author: "Javier Molina",
    rating: 5,
    text: "Llevaba tiempo queriendo venir y no me ha decepcionado. El sushi es de los mejores que he probado en la Región, y eso a precio de buffet es una maravilla. La barra con el jardín vertical es preciosa. Todo el personal muy atento y agradable.",
    date: "Hace 1 mes",
    avatarSeed: "javier"
  },
  {
    id: "rev-3",
    author: "Ana Martínez",
    rating: 5,
    text: "Fuimos a celebrar un cumpleaños y acertamos de pleno. El salmón flameado y el Dragon Roll son deliciosos. El personal muy atento y el precio muy justo para la calidad que ofrecen. El salón está precioso, se nota que cuidan mucho los detalles.",
    date: "Hace 3 semanas",
    avatarSeed: "ana"
  },
  {
    id: "rev-4",
    author: "Carlos Navarro",
    rating: 5,
    text: "Una de las mejores experiencias gastronómicas en Cartagena. El formato de buffet con todo recién hecho en rondas es una idea genial. La relación calidad-precio es imbatible. Los rolls de autor son creativos y muy sabrosos. El ambiente del local es muy especial.",
    date: "Hace 2 meses",
    avatarSeed: "carlos"
  },
  {
    id: "rev-5",
    author: "Laura Sánchez",
    rating: 5,
    text: "Muy buen sushi a un precio excelente. El local tiene mucho encanto: las lámparas hexagonales, la vidriera de colores y las banquetas naranja crean un ambiente precioso. Todo llega caliente y recién preparado. Lo recomiendo a todo el mundo.",
    date: "Hace 1 semana",
    avatarSeed: "laura"
  },
];
