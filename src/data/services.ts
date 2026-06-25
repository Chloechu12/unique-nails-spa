export const SERVICE_TYPES = [
  "Pedicure",
  "Manicure",
  "Acrylic",
  "Dipping Powder",
  "Builder Gel",
  "Gel X",
  "Additional Services",
  "Kid Menu (under 12)",
  "Waxing",
  "Lash"
];

export type ServiceType = (typeof SERVICE_TYPES)[number];

export type Menu = {
  title: string;
  image: string;
  alt: string;
  description: string;
  type: ServiceType;
  price: string;
};

export const services: Menu[] = [

  // Pedicure
  {
    title: "24K Golden Champagne Pedicure",
    image: "/images/ped1.JPG",
    alt: "Pedicure",
    description:
      "Includes: 18-mins of Deep Tissue with Hot Steamer & 10-mins Hot Stone massage, Champagne Bath with Rose Petal, Sensual sugar scrub, Callus treatment, Paraffin wax, 24K Gold Mask with Hot Towel, Warm neck wrap",
    type: "Pedicure",
    price: "$106",
  },
  {
    title: "Fuji Collagen Pearl Pedicure",
    image: "/images/ped1.JPG",
    alt: "Pedicure",
    description:
      "Includes: 15-mins massage with Hot Steamer & 10-mins of Hot Stone massage, Detox Fuji Volcano Pearl Bath, Pearly sugar scrub, Callus treatment, Paraffin Wax, Mask with Hot Towel, Warm neck wrap",
    type: "Pedicure",
    price: "$86",
  },
  {
    title: "Medicated CBD Soothe Pedicure",
    image: "/images/ped1.JPG",
    alt: "Pedicure",
    description:
      "Includes: 20-mins of Deep Tissue massage with Medicated Oil Hot Steamer and Hot Stone, Peppermint Soothe Bath, Peppermint Sugar scrub, Callus treatment, Paraffin wax, Mask with Hot Towel, Warm neck wrap",
    type: "Pedicure",
    price: "$78",
  },
  {
    title: "Café Au Sole Pedicure",
    image: "/images/ped1.JPG",
    alt: "Pedicure",
    description:
      "Includes: 20-mins Massage with Hot Stone, Detox Coffee Bath, Exfoliating Coffee Sugar scrub, Callus treatment, Paraffin wax, Mask with Hot Towel, Warm neck wrap",
    type: "Pedicure",
    price: "$75",
  },
  {
    title: "Milk & Honey Pedicure",
    image: "/images/ped1.JPG",
    alt: "Pedicure",
    description:
      "Includes: 15-mins of Hot Stone massage, Milky Bath with Rose Petal, Milk & Honey Sugar scrub, Callus treatment, Paraffin wax, Mask with Hot Towel, Warm neck wrap",
    type: "Pedicure",
    price: "$65",
  },
  {
    title: "Lavish Lavender Pedicure",

    image: "/images/ped1.JPG",
    alt: "Pedicure",
    description:
      "Includes: 12-mins of massage with Hot Stone, Warm Sea Salt Bath, Lavender Sugar scrub, Callus treatment, Paraffin Wax, Mask with Hot Towel, Warm neck wrap",
    type: "Pedicure",
    price: "$58",
  },
  {
    title: "Citrus Tropical Pedicure",
    image: "/images/ped1.JPG",
    alt: "Pedicure",
    description:
      "Includes: 7-mins of massage with Hot Stone, Warm Sea Salt Bath, Citrus Sugar Scrub, Callus treatment, Mask with Hot Towel, Warm neck wrap",
    type: "Pedicure",
    price: "$45",
  },
  {
    title: "Express Pedicure",
    image: "/images/ped1.JPG",
    alt: "Pedicure",
    description:
      "Includes: 4-mins of massage, Warm Sea Salt Bath, Sugar Scrub, Callus treatment, Regular polish",
    type: "Pedicure",
    price: "$30",
  },

  // Manicure
  {
    title: "Gel Manicure",
    image: "/images/nailcare.PNG",
    alt: "Manicure",
    description:
      "Includes: Hand Soak, Cuticle Care, Nail Trimming, Buffing, Hand Massage, Gel Polish.\n• Clear Gel Manicure: $35",
    type: "Manicure",
    price: "$40",
  },
  {
    title: "Sensual Milk & Rose Manicure",
    image: "/images/nailcare.PNG",
    alt: "Manicure",
    description:
      "Includes: Milky hand soak with Rose Petal, Merlot Wine – Scented Hot Steamer, Cuticle Care, Nail Trimming, Buffing, Milk & Honey Sugar Scrub, Mask with Hot Towel, 10-mins Hot Stone Massage, Paraffin wax, and warm neck wrap.",
    type: "Manicure",
    price: "$58",
  },
  {
    title: "Lavish Lavender Manicure",
    image: "/images/nailcare.PNG",
    alt: "Manicure ",
    description:
      "Includes:Includes: Hand soak, Cuticle Care, Nail Trimming, Buffing, Lavender Sugar scrub, Mask with Hot Towel, 8-mins Hot Stone Massage, Paraffin wax, and warm neck wrap.",
    type: "Manicure",
    price: "$45",
  },
  {
    title: "D'Luxe Manicure",
    image: "/images/nailcare.PNG",
    alt: "Manicure ",
    description:
      "Includes:Includes: Hand soak, Cuticle Care, Nail Trimming, Buffing, Orange Sugar scrub, 4-mins Hand Massage.",
    type: "Manicure",
    price: "$30",
  },
  {
    title: "Classic Manicure",
    image: "/images/nailcare.PNG",
    alt: "Manicure",
    description:
      "Includes: Hand soak, Cuticle Care, Nail Trimming, Buffing, 3-mins Hand Massage and regular Polish.",
    type: "Manicure",
    price: "$20",
  },

  // Acrylic
  {
    title: "Fullset Powder Color",
    image: "/images/nail1.PNG",
    alt: "Acrylic",
    description: "",
    type: "Acrylic",
    price: "$50+",
  },
  {
    title: "Fullset Gel Polish",
    image: "/images/nail1.PNG",
    alt: "Acrylic",
    description: "",
    type: "Acrylic",
    price: "$60+",
  },
  {
    title: "Fullset Ombre",
    image: "/images/nail1.PNG",
    alt: "Acrylic",
    description: "",
    type: "Acrylic",
    price: "$65+",
  },
  {
    title: "Fullset Pink & White",
    image: "/images/nail1.PNG",
    alt: "Acrylic",
    description: "",
    type: "Acrylic",
    price: "$50+",
  },
  {
    title: "Refill Power (same color) ",
    image: "/images/nail1.PNG",
    alt: "Acrylic",
    description: "",
    type: "Acrylic",
    price: "$40+",
  },
  {
    title: "Refill Power (different color) ",
    image: "/images/nail1.PNG",
    alt: "Acrylic",
    description: "",
    type: "Acrylic",
    price: "$55+",
  },
  {
    title: "Refill Gel Polish ",
    image: "/images/nail1.PNG",
    alt: "Acrylic",
    description: "",
    type: "Acrylic",
    price: "$50+",
  },
  {
    title: "Refill Ombre ",
    image: "/images/nail1.PNG",
    alt: "Acrylic",
    description: "",
    type: "Acrylic",
    price: "$55+",
  },
  {
    title: "Refill Pink & White",
    image: "/images/nail1.PNG",
    alt: "Acrylic",
    description: "",
    type: "Acrylic",
    price: "$55+",
  },
  {
    title: "Remove w/service",
    image: "/images/nail1.PNG",
    alt: "Acrylic",
    description: "",
    type: "Acrylic",
    price: "$5",
  },

  // Dipping Powder
  {
    title: "Dipping Powder",
    image: "/images/nail2.JPG",
    alt: "Dipping Powder",
    description: "",
    type: "Dipping Powder",
    price: "$50+",
  },
  {
    title: "Dipping Ombre",
    image: "/images/nail2.JPG",
    alt: "Dipping Powder",
    description: "",
    type: "Dipping Powder",
    price: "$60+",
  },
  {
    title: "Dipping Pink & White",
    image: "/images/nail2.JPG",
    alt: "Dipping Powder",
    description: "",
    type: "Dipping Powder",
    price: "$60+",
  },
  {
    title: "Remove w/service",
    image: "/images/nail2.JPG",
    alt: "Dipping Powder",
    description: "",
    type: "Dipping Powder",
    price: "$5",
  },

  // Builder Gel
  {
    title: "Fullset Builder Gel",
    image: "/images/nail2.JPG",
    alt: "Builder Gel",
    description: "",
    type: "Builder Gel",
    price: "$60+",
  },
  {
    title: "Refill Builder Gel",
    image: "/images/nail2.JPG",
    alt: "Builder Gel",
    description: "",
    type: "Builder Gel",
    price: "$55+",
  },
  {
    title: "Remove w/service",
    image: "/images/nail2.JPG",
    alt: "Builder Gel",
    description: "",
    type: "Builder Gel",
    price: "$5",
  },

  // Gel X
  {
    title: "Fullset Gel-X",
    image: "/images/nail1.PNG",
    alt: "Gel X",
    description: "X-short/short/medium/long(NO REFILL)",
    type: "Gel X",
    price: "$60+",
  },
  {
    title: "Remove w/service",
    image: "/images/nail2.JPG",
    alt: "Gel X",
    description: "",
    type: "Builder Gel",
    price: "$5",
  },

  // Additional Services
  {
    title: "REMOVER W/O SERVICE",
    image: "/images/nailcare.PNG",
    alt: "Additional Services",
    description:
      "",
    type: "Additional Services",
    price: "$10",
  },
  {
    title: "Cuticle Trim",
    image: "/images/nailcare.PNG",
    alt: "Additional Services",
    description:
      "",
    type: "Additional Services",
    price: "$5",
  },
  {
    title: "SHAPE",
    image: "/images/nailcare.PNG",
    alt: "Additional Services",
    description: "",
    type: "Additional Services",
    price: "$5 ~ $10",
  },
  {
    title: "LENGTH",
    image: "/images/nailcare.PNG",
    alt: "Additional Services",
    description: "",
    type: "Additional Services",
    price: "$5 ~ $100+",
  },
  {
    title: "NAIL FIX",
    image: "/images/nailcare.PNG",
    alt: "Additional Services",
    description: "",
    type: "Additional Services",
    price: "$5+",
  },
  {
    title: "NAIL ART DESIGN",
    image: "/images/nailcare.PNG",
    alt: "Additional Services",
    description: "",
    type: "Additional Services",
    price: "$5+",
  },
  {
    title: "FRENCH",
    image: "/images/nailcare.PNG",
    alt: "Additional Services",
    description: "",
    type: "Additional Services",
    price: "$5+",
  },
  {
    title: "Chrome",
    image: "/images/nailcare.PNG",
    alt: "Additional Services",
    description: "",
    type: "Additional Services",
    price: "$15",
  },
  {
    title: "Cat Eye",
    image: "/images/nailcare.PNG",
    alt: "Additional Services",
    description: "",
    type: "Additional Services",
    price: "$15",
  },
  {
    title: "Regular POLISH CHANGE (hands/toes)",
    image: "/images/nailcare.PNG",
    alt: "Additional Services",
    description: "",
    type: "Additional Services",
    price: "$15",
  },
  {
    title: "GEL POLISH CHANGE",
    image: "/images/nailcare.PNG",
    alt: "Additional Services",
    description: "",
    type: "Additional Services",
    price: "$25+",
  },
  {
    title: "PARAFFIN WAX",
    image: "/images/nailcare.PNG",
    alt: "Additional Services",
    description: "",
    type: "Additional Services",
    price: "$10",
  },
  {
    title: "Kawaii-Keratin Hand Mask",
    image: "/images/nailcare.PNG",
    alt: "Additional Services",
    description: "",
    type: "Additional Services",
    price: "$10",
  },
  {
    title: "Scented-Hot Steamer",
    image: "/images/nailcare.PNG",
    alt: "Additional Services",
    description: "",
    type: "Additional Services",
    price: "$10",
  },
  {
    title: "Extra Massage",
    image: "/images/nailcare.PNG",
    alt: "Additional Services",
    description: "",
    type: "Additional Services",
    price: "$1.50 / min",
  },

  // Kid Menu (under 12)

  {
    title: "Kid Polish Change Regular",
    image: "/images/nailcare.PNG",
    alt: "Kid Menu",
    description: "",
    type: "Kid Menu (under 12)",
    price: "$8",
  },
  {
    title: "Kid Polish Change Gel",
    image: "/images/nailcare.PNG",
    alt: "Kid Menu",
    description: "",
    type: "Kid Menu (under 12)",
    price: "$15+",
  },
  {
    title: "Kid Pedicure",
    image: "/images/ped1.JPG",
    alt: "Kid Menu",
    description: "",
    type: "Kid Menu (under 12)",
    price: "$25+",
  },
  {
    title: "Kid Manicure",
    image: "/images/nailcare.PNG",
    alt: "Kid Menu",
    description: "",
    type: "Kid Menu (under 12)",
    price: "$10+",
  },



  // Waxing
  {
    title: "Eyebrows Wax",
    image: "/images/waxing.jpg",
    alt: "Waxing",
    description: "",
    type: "Waxing",
    price: "$12",
  },
   {
    title: "Lips Wax",
    image: "/images/waxing.jpg",
    alt: "Waxing",
    description: "",
    type: "Waxing",
    price: "$8",
  },
   {
    title: "Chin Wax",
    image: "/images/waxing.jpg",
    alt: "Waxing",
    description: "",
    type: "Waxing",
    price: "$10+",
  },
   {
    title: "Sideburns Wax",
    image: "/images/waxing.jpg",
    alt: "Waxing",
    description: "",
    type: "Waxing",
    price: "$15+",
  },
   {
    title: "Under Arm Wax",
    image: "/images/waxing.jpg",
    alt: "Waxing",
    description: "",
    type: "Waxing",
    price: "$15",
  },
   {
    title: "Whole Face Wax",
    image: "/images/waxing.jpg",
    alt: "Waxing",
    description: "",
    type: "Waxing",
    price: "$50",
  },
   {
    title: "Back Wax",
    image: "/images/waxing.jpg",
    alt: "Waxing",
    description: "",
    type: "Waxing",
    price: "$55",
  },
   {
    title: "Half Leg Wax",
    image: "/images/waxing.jpg",
    alt: "Waxing",
    description: "",
    type: "Waxing",
    price: "$45",
  },
   {
    title: "Full Leg Wax",
    image: "/images/waxing.jpg",
    alt: "Waxing",
    description: "",
    type: "Waxing",
    price: "$70",
  },
   {
    title: "Bikini Wax",
    image: "/images/waxing.jpg",
    alt: "Waxing",
    description: "",
    type: "Waxing",
    price: "$45",
  },
   {
    title: "Brazilian Wax",
    image: "/images/waxing.jpg",
    alt: "Waxing",
    description: "",
    type: "Waxing",
    price: "$55",
  },
];
