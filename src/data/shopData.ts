export type ShopCategoryId =
  | "all"
  | "accessories"
  | "battery"
  | "brakes"
  | "engine"
  | "interior"
  | "wheels";

export type ShopProductIcon =
  | "battery"
  | "brake"
  | "engine"
  | "interior"
  | "cooling"
  | "wheel";

export interface ShopCategory {
  id: ShopCategoryId;
  label: string;
}

export interface ShopProduct {
  id: string;
  name: string;
  sku: string;
  category: Exclude<ShopCategoryId, "all">;
  brand: string;
  price: number;
  rating: number;
  reviewCount: number;
  icon: ShopProductIcon;
  summary: string;
  availability: string;
  shipping: string;
  compatibility: string;
  details: string[];
  highlights: string[];
}

export interface ShopSortOption {
  value: "featured" | "lowest-price" | "highest-price" | "name";
  label: string;
}

export type ShopSortValue = ShopSortOption["value"];

export interface ShopProductSpecification {
  label: string;
  value: string;
}

export interface ShopProductReview {
  id: string;
  author: string;
  role: string;
  rating: number;
  title: string;
  body: string;
  date: string;
}

export interface ShopProductDetail extends ShopProduct {
  categoryLabel: string;
  specifications: ShopProductSpecification[];
  reviews: ShopProductReview[];
}

export const shopCategories: ShopCategory[] = [
  { id: "all", label: "All Products" },
  { id: "accessories", label: "Accessories" },
  { id: "battery", label: "Battery & Charge" },
  { id: "brakes", label: "Brake System" },
  { id: "engine", label: "Engine Parts" },
  { id: "interior", label: "Interior Care" },
  { id: "wheels", label: "Wheels & Tires" },
];

export const shopSortOptions: ShopSortOption[] = [
  { value: "featured", label: "Best Match" },
  { value: "lowest-price", label: "Lowest Price" },
  { value: "highest-price", label: "Highest Price" },
  { value: "name", label: "Name" },
];

export const shopPriceBounds = {
  min: 85,
  max: 429,
};

export const shopProducts: ShopProduct[] = [
  {
    id: "battery-jump-starter",
    name: "Battery Jump Starter",
    sku: "BXC-20355",
    category: "battery",
    brand: "BoxCar Garage",
    price: 329,
    rating: 5,
    reviewCount: 24,
    icon: "battery",
    summary: "Portable booster pack with smart clamp protection.",
    availability: "In stock",
    shipping: "Ships within 24 hours",
    compatibility: "Universal 12V platform",
    details: [
      "This jump starter is built for quick roadside recovery without carrying oversized workshop hardware. The casing stays compact enough for the trunk while the clamps are clearly marked and easy to handle at night.",
      "The internal safety logic protects against reverse polarity, over-current, and overheating. It is a straightforward product page item: useful, practical, and easy to compare with the rest of the catalog.",
    ],
    highlights: [
      "Smart clamp protection",
      "USB charging output",
      "Compact travel format",
    ],
  },
  {
    id: "ceramic-brake-kit",
    name: "Ceramic Brake Kit",
    sku: "BXC-44192",
    category: "brakes",
    brand: "Brembo",
    price: 279,
    rating: 5,
    reviewCount: 18,
    icon: "brake",
    summary: "Low-dust pad and rotor bundle for daily comfort braking.",
    availability: "In stock",
    shipping: "Ships within 48 hours",
    compatibility: "BMW 3/5 Series and similar fitment",
    details: [
      "A balanced brake refresh kit for buyers who want cleaner stopping performance without a harsh track-focused setup. The ceramic compound reduces visible brake dust and keeps the day-to-day drive civil.",
      "This kit is positioned as a premium maintenance upgrade rather than a cosmetic accessory. Product information is surfaced clearly so fitment and value are obvious before checkout.",
    ],
    highlights: [
      "Low-dust ceramic pads",
      "Balanced street comfort",
      "Dealer-grade fitment bundle",
    ],
  },
  {
    id: "air-intake-system",
    name: "Performance Air Intake",
    sku: "BXC-18804",
    category: "engine",
    brand: "K&N",
    price: 189,
    rating: 4,
    reviewCount: 13,
    icon: "engine",
    summary: "Sharper throttle response with washable cone filter.",
    availability: "In stock",
    shipping: "Ships within 24 hours",
    compatibility: "Turbo petrol and light hybrid platforms",
    details: [
      "A cleaner induction upgrade aimed at drivers who want modest response gains and a more direct intake note. The washable filter keeps long-term maintenance simple.",
      "The construction and silicone joiners are intended for repeated service intervals, making it an upgrade that still fits a practical daily-driver workflow.",
    ],
    highlights: [
      "Washable performance filter",
      "Sharper throttle response",
      "Cleaner engine-bay finish",
    ],
  },
  {
    id: "all-weather-floor-mats",
    name: "All-Weather Floor Mats",
    sku: "BXC-75015",
    category: "interior",
    brand: "WeatherGuard",
    price: 99,
    rating: 5,
    reviewCount: 42,
    icon: "interior",
    summary: "Heavy-duty cabin mats cut for easy seasonal cleaning.",
    availability: "In stock",
    shipping: "Ships within 24 hours",
    compatibility: "Sedan, SUV, and coupe cabin layouts",
    details: [
      "This set is designed for buyers who use the car daily and want a cabin that stays easier to clean in wet or dusty conditions. The channels hold debris instead of spreading it across the carpet.",
      "It is a simple product, but it still benefits from clearer presentation: dimensions, fit, and cleaning practicality matter more than decorative marketing copy.",
    ],
    highlights: [
      "Raised edge spill control",
      "Quick hose-down cleaning",
      "Textured anti-slip backing",
    ],
  },
  {
    id: "radiator-cooling-kit",
    name: "Radiator Cooling Kit",
    sku: "BXC-31540",
    category: "engine",
    brand: "Mishimoto",
    price: 359,
    rating: 4,
    reviewCount: 9,
    icon: "cooling",
    summary: "Cooling refresh set with hoses, clamps, and thermostat.",
    availability: "Limited stock",
    shipping: "Ships within 72 hours",
    compatibility: "Mid-size petrol and diesel drivetrains",
    details: [
      "A cooling-focused maintenance package for buyers addressing aging hoses, weak clamps, or unstable temperature behavior before it becomes a larger repair issue.",
      "The listing is positioned for practical service-minded users who want clear bundle contents and fast confidence on compatibility.",
    ],
    highlights: [
      "Thermostat included",
      "Preventive service bundle",
      "Suitable for daily-use fleets",
    ],
  },
  {
    id: "sport-suspension-pack",
    name: "Sport Suspension Pack",
    sku: "BXC-61240",
    category: "accessories",
    brand: "Bilstein",
    price: 389,
    rating: 5,
    reviewCount: 15,
    icon: "wheel",
    summary: "Lower, tighter setup for cleaner body control.",
    availability: "In stock",
    shipping: "Ships within 48 hours",
    compatibility: "European sport sedan and wagon platforms",
    details: [
      "This suspension package is aimed at buyers who want a more disciplined stance and less float without building a dedicated track car. The focus stays on usable road control.",
      "Compared with a basic lowering spring set, the product copy emphasizes a more complete handling package and a cleaner confidence signal for street use.",
    ],
    highlights: [
      "Cleaner cornering balance",
      "Matched spring and damper feel",
      "Sharper everyday handling",
    ],
  },
  {
    id: "wheel-care-bundle",
    name: "Wheel Care Bundle",
    sku: "BXC-44110",
    category: "wheels",
    brand: "Detail Lab",
    price: 119,
    rating: 4,
    reviewCount: 21,
    icon: "wheel",
    summary: "Brush, cleaner, and dressing set for weekly detailing.",
    availability: "In stock",
    shipping: "Ships within 24 hours",
    compatibility: "Painted, diamond-cut, and matte wheels",
    details: [
      "A maintenance bundle for owners who want the wheels to look presentable between bigger detailing sessions. The products are grouped for regular weekly use rather than showroom-only work.",
      "The emphasis here is convenience: fewer separate decisions, clearer value, and enough information to judge whether the bundle matches the finish on the car.",
    ],
    highlights: [
      "Finish-safe wheel cleaner",
      "Soft barrel brush",
      "Simple weekly kit",
    ],
  },
  {
    id: "smart-trunk-organizer",
    name: "Smart Trunk Organizer",
    sku: "BXC-80019",
    category: "accessories",
    brand: "BoxCar Utility",
    price: 139,
    rating: 5,
    reviewCount: 17,
    icon: "interior",
    summary: "Modular cargo storage with fold-flat compartments.",
    availability: "In stock",
    shipping: "Ships within 24 hours",
    compatibility: "SUV, sedan, and hatchback luggage bays",
    details: [
      "A practical cargo solution for buyers who use the trunk as a real utility space. Compartments fold flat quickly when the extra structure is not needed.",
      "The product avoids over-design and focuses on visible daily value: keeping tools, cleaning gear, and loose shopping items under control.",
    ],
    highlights: [
      "Fold-flat construction",
      "Modular compartments",
      "Easy carry handles",
    ],
  },
  {
    id: "led-light-upgrade",
    name: "LED Light Upgrade",
    sku: "BXC-91230",
    category: "accessories",
    brand: "Osram",
    price: 169,
    rating: 4,
    reviewCount: 26,
    icon: "cooling",
    summary: "Sharper headlight output with a cleaner white tone.",
    availability: "In stock",
    shipping: "Ships within 48 hours",
    compatibility: "Projector and reflector housings",
    details: [
      "A lighting upgrade aimed at visibility and a cleaner front-end signature. The tone is sharper than stock halogen setups while remaining practical for everyday driving.",
      "It is presented as a functional improvement first, with a modernized look as the secondary benefit.",
    ],
    highlights: [
      "Sharper white output",
      "Simple install format",
      "Improved night visibility",
    ],
  },
  {
    id: "winter-tire-set",
    name: "Winter Tire Set",
    sku: "BXC-55174",
    category: "wheels",
    brand: "Michelin",
    price: 429,
    rating: 5,
    reviewCount: 11,
    icon: "wheel",
    summary: "Cold-weather grip package for confident winter driving.",
    availability: "Limited stock",
    shipping: "Ships within 72 hours",
    compatibility: "SUV and crossover winter wheel sizes",
    details: [
      "This tire package is for buyers planning ahead for seasonal weather instead of reacting late. Tread design and compound are aimed at cold-surface grip rather than summer efficiency.",
      "The catalog treatment keeps fitment, stock status, and value readable at a glance because winter products are often bought under time pressure.",
    ],
    highlights: [
      "Cold-weather compound",
      "Snow-focused tread design",
      "Seasonal fitment support",
    ],
  },
  {
    id: "engine-tune-kit",
    name: "Engine Tune-Up Kit",
    sku: "BXC-20264",
    category: "engine",
    brand: "Bosch",
    price: 149,
    rating: 4,
    reviewCount: 19,
    icon: "engine",
    summary: "Plugs, filters, and service essentials in one box.",
    availability: "In stock",
    shipping: "Ships within 24 hours",
    compatibility: "Routine petrol service intervals",
    details: [
      "A maintenance-first package for owners who want a predictable service refresh without ordering multiple part numbers one by one. It is intended to reduce friction in the purchase path.",
      "For the UI, the important thing is clarity: parts included, value, and fitment confidence should be more visible than generic marketing language.",
    ],
    highlights: [
      "Routine service essentials",
      "Fewer separate part orders",
      "Predictable maintenance value",
    ],
  },
  {
    id: "wireless-dash-mount",
    name: "Wireless Dash Mount",
    sku: "BXC-61008",
    category: "interior",
    brand: "Anker",
    price: 89,
    rating: 4,
    reviewCount: 33,
    icon: "battery",
    summary: "Fast-charge phone mount with low-profile dashboard arm.",
    availability: "In stock",
    shipping: "Ships within 24 hours",
    compatibility: "Universal smartphone sizes",
    details: [
      "A low-profile charging mount for drivers who want the phone visible and powered without a messy cabin setup. The charging head locks into a stable viewing angle for navigation use.",
      "The product is best sold through clean, practical information: charging support, mount format, and daily usability.",
    ],
    highlights: [
      "Fast wireless charging",
      "Stable low-profile arm",
      "Navigation-friendly position",
    ],
  },
];

const categoryLabelMap = shopCategories.reduce<Record<ShopCategoryId, string>>(
  (accumulator, category) => {
    accumulator[category.id] = category.label;
    return accumulator;
  },
  {
    all: "All Products",
    accessories: "Accessories",
    battery: "Battery & Charge",
    brakes: "Brake System",
    engine: "Engine Parts",
    interior: "Interior Care",
    wheels: "Wheels & Tires",
  }
);

const buildSpecifications = (
  product: ShopProduct
): ShopProductSpecification[] => [
  { label: "SKU", value: product.sku },
  { label: "Category", value: categoryLabelMap[product.category] },
  { label: "Brand", value: product.brand },
  { label: "Compatibility", value: product.compatibility },
  { label: "Availability", value: product.availability },
  { label: "Shipping", value: product.shipping },
];

const buildReviews = (product: ShopProduct): ShopProductReview[] => [
  {
    id: `${product.id}-review-1`,
    author: "Ali Tufan",
    role: "Verified buyer",
    rating: product.rating,
    title: "Clean upgrade and easy install",
    body: `${product.name} arrived well packed and matched the product description. The value feels clear because the listing focuses on fitment, quality, and the parts that matter before checkout.`,
    date: "April 12, 2026",
  },
  {
    id: `${product.id}-review-2`,
    author: "Sardor Karimov",
    role: "Workshop customer",
    rating: Math.max(4, product.rating - 1),
    title: "Worth it for daily use",
    body: `I bought this mainly for a practical daily-driver setup and it did the job. Stock status and shipping were accurate, which matters more than inflated marketing promises on parts pages.`,
    date: "March 28, 2026",
  },
];

export const getShopProductById = (productId: string): ShopProductDetail | null => {
  const product = shopProducts.find((item) => item.id === productId);

  if (!product) {
    return null;
  }

  return {
    ...product,
    categoryLabel: categoryLabelMap[product.category],
    specifications: buildSpecifications(product),
    reviews: buildReviews(product),
  };
};

export const getRelatedShopProducts = (
  productId: string,
  limit = 4
): ShopProduct[] => {
  const currentProduct = shopProducts.find((item) => item.id === productId);

  if (!currentProduct) {
    return [];
  }

  const sameCategory = shopProducts.filter(
    (item) => item.id !== productId && item.category === currentProduct.category
  );
  const otherTopRated = shopProducts.filter(
    (item) => item.id !== productId && item.category !== currentProduct.category
  );

  return [...sameCategory, ...otherTopRated].slice(0, limit);
};
