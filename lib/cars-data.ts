export interface Car {
  id: string
  brand: string
  model: string
  year: number
  price: number
  mileage: number
  fuel: string
  transmission: string
  power: string
  image: string
  images: string[]
  features: string[]
  color: string
  doors: number
  seats: number
  previousOwners: number
  warranty: string
  location: string
  isNew: boolean
  isFeatured: boolean
}

export const cars: Car[] = [
  {
    id: "1",
    brand: "BMW",
    model: "Série 3 320d",
    year: 2022,
    price: 38900,
    mileage: 32000,
    fuel: "Diesel",
    transmission: "Automático",
    power: "190 cv",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?w=800&h=600&fit=crop"
    ],
    features: ["GPS", "Sensores de Estacionamento", "Câmara Traseira", "LED", "Cruise Control"],
    color: "Preto",
    doors: 4,
    seats: 5,
    previousOwners: 1,
    warranty: "24 meses",
    location: "Lisboa",
    isNew: false,
    isFeatured: true
  },
  {
    id: "2",
    brand: "Mercedes-Benz",
    model: "Classe A 180d",
    year: 2023,
    price: 34500,
    mileage: 15000,
    fuel: "Diesel",
    transmission: "Automático",
    power: "116 cv",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop"
    ],
    features: ["MBUX", "Apple CarPlay", "Android Auto", "Faróis LED", "Ar Condicionado Automático"],
    color: "Branco",
    doors: 5,
    seats: 5,
    previousOwners: 1,
    warranty: "24 meses",
    location: "Porto",
    isNew: true,
    isFeatured: true
  },
  {
    id: "3",
    brand: "Audi",
    model: "A4 Avant 2.0 TDI",
    year: 2021,
    price: 36200,
    mileage: 48000,
    fuel: "Diesel",
    transmission: "Automático",
    power: "150 cv",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop"
    ],
    features: ["Virtual Cockpit", "MMI Navigation", "Sensores de Estacionamento", "Teto de Abrir"],
    color: "Cinza",
    doors: 5,
    seats: 5,
    previousOwners: 1,
    warranty: "12 meses",
    location: "Braga",
    isNew: false,
    isFeatured: true
  },
  {
    id: "4",
    brand: "Volkswagen",
    model: "Golf 8 GTI",
    year: 2022,
    price: 42000,
    mileage: 22000,
    fuel: "Gasolina",
    transmission: "Automático DSG",
    power: "245 cv",
    image: "https://images.unsplash.com/photo-1471444928139-48c5bf5173f8?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1471444928139-48c5bf5173f8?w=800&h=600&fit=crop"
    ],
    features: ["Digital Cockpit Pro", "Harman Kardon", "ACC", "Lane Assist", "Bancos Desportivos"],
    color: "Vermelho",
    doors: 5,
    seats: 5,
    previousOwners: 1,
    warranty: "24 meses",
    location: "Lisboa",
    isNew: false,
    isFeatured: true
  },
  {
    id: "5",
    brand: "Toyota",
    model: "Corolla Hybrid",
    year: 2023,
    price: 29900,
    mileage: 8000,
    fuel: "Híbrido",
    transmission: "Automático CVT",
    power: "140 cv",
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=600&fit=crop"
    ],
    features: ["Toyota Safety Sense", "Ecrã 10.5\"", "JBL Audio", "Wireless Charging"],
    color: "Azul",
    doors: 5,
    seats: 5,
    previousOwners: 1,
    warranty: "36 meses",
    location: "Coimbra",
    isNew: true,
    isFeatured: false
  },
  {
    id: "6",
    brand: "Peugeot",
    model: "3008 GT",
    year: 2022,
    price: 35500,
    mileage: 28000,
    fuel: "Diesel",
    transmission: "Automático",
    power: "180 cv",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop"
    ],
    features: ["i-Cockpit", "Night Vision", "Grip Control", "Teto Panorâmico"],
    color: "Verde",
    doors: 5,
    seats: 5,
    previousOwners: 1,
    warranty: "24 meses",
    location: "Faro",
    isNew: false,
    isFeatured: false
  },
  {
    id: "7",
    brand: "Volvo",
    model: "XC40 T4 Recharge",
    year: 2023,
    price: 45900,
    mileage: 12000,
    fuel: "Híbrido Plug-in",
    transmission: "Automático",
    power: "211 cv",
    image: "https://images.unsplash.com/photo-1612825173281-9a193378527e?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1612825173281-9a193378527e?w=800&h=600&fit=crop"
    ],
    features: ["Pilot Assist", "Google Built-in", "Harman Kardon", "360° Camera"],
    color: "Branco",
    doors: 5,
    seats: 5,
    previousOwners: 1,
    warranty: "36 meses",
    location: "Lisboa",
    isNew: true,
    isFeatured: true
  },
  {
    id: "8",
    brand: "Renault",
    model: "Mégane E-Tech",
    year: 2023,
    price: 38900,
    mileage: 5000,
    fuel: "Elétrico",
    transmission: "Automático",
    power: "220 cv",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=600&fit=crop"
    ],
    features: ["OpenR Link", "Multi-Sense", "Autonomia 450km", "Carregamento Rápido"],
    color: "Cinza",
    doors: 5,
    seats: 5,
    previousOwners: 1,
    warranty: "36 meses",
    location: "Porto",
    isNew: true,
    isFeatured: false
  }
]

export const brands = ["BMW", "Mercedes-Benz", "Audi", "Volkswagen", "Toyota", "Peugeot", "Volvo", "Renault"]
export const fuelTypes = ["Diesel", "Gasolina", "Híbrido", "Híbrido Plug-in", "Elétrico"]
export const transmissions = ["Manual", "Automático", "Automático DSG", "Automático CVT"]
export const locations = ["Lisboa", "Porto", "Braga", "Coimbra", "Faro"]
