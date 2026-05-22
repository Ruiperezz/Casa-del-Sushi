export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price?: number; // Optional if part of buffet but available a la carte
  category: "buffet-starters" | "nigiri-sashimi" | "special-rolls" | "drinks-cocktails";
  tags: string[]; // e.g., "Buffet Incluido", "Top Selección", "Picante", "Vegano"
  allergens: string[]; // e.g., "Gluten", "Pescado", "Sésamo"
  isPopular?: boolean;
}

export interface BookingData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  notes?: string;
  seatingPreference: "coral-banquet" | "garden-wall" | "sushi-bar" | "indifferent";
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  avatarSeed: string;
}

export interface QuizQuestion {
  id: number;
  text: string;
  options: {
    label: string;
    value: string;
    description: string;
  }[];
}
