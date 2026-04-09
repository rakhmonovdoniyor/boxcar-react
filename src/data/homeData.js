import audiLogo from "../assets/carlogo/image 3 (4).png";
import bmwLogo from "../assets/carlogo/image 3 (5).png";
import fordLogo from "../assets/carlogo/image 3 (6).png";
import mercedesLogo from "../assets/carlogo/image 3 (7).png";
import peugeotLogo from "../assets/carlogo/image 3 (8).png";
import audiQ7 from "../assets/cars/audi-q7.jpg";
import audiSportback from "../assets/cars/audi-a5-sportback.jpg";
import bmw530i from "../assets/cars/bmw-5-series.jpg";
import fordEscape from "../assets/cars/ford-escape.jpg";
import mercedesCla from "../assets/cars/mercedes-cla.jpg";
import peugeot308 from "../assets/cars/peugeot-308.jpg";
import porscheCayenne from "../assets/cars/porsche-cayenne.jpg";
import blogImageOne from "../assets/homepage/blog1.png";
import blogImageTwo from "../assets/homepage/blog2.png";
import blogImageThree from "../assets/homepage/blog3.png";
import testimonialAvatar from "../assets/home/user (2) 1 (1).png";

export const navLinks = [
  { label: "Home", path: "/" },
  { label: "Inventory", path: "/inventory" },
  { label: "Blog", path: "/blog" },
  { label: "Shop", path: "/shop" },
  {
    label: "Pages",
    children: [
      {
        label: "Dashboard",
        path: "/dashboard",
        description: "Sidebar, overview, listings, messages, and profile routes.",
      },
      {
        label: "About Us",
        path: "/about",
        description: "Marketplace story, trust signals, and product direction.",
      },
      {
        label: "Team",
        path: "/team",
        description: "Public profiles for operational and partner-facing leads.",
      },
      {
        label: "Dealers",
        path: "/dealers",
        description: "Branch pages tied to real inventory and response timing.",
      },
      {
        label: "FAQ",
        path: "/faq",
        description: "Answers around inventory, finance, dealer flow, and support.",
      },
      {
        label: "Membership Plans",
        path: "/membership-plans",
        description: "Dealer-facing pricing tiers and branch growth options.",
      },
      {
        label: "Loan Calculator",
        path: "/loan-calculator",
        description: "Quick monthly payment planning against live vehicle data.",
      },
      {
        label: "Compare Vehicle",
        path: "/compare",
        description: "Side-by-side comparison for price, specs, and value.",
      },
      {
        label: "404 Page",
        path: "/404",
        description: "Fallback page for unsupported or missing routes.",
      },
    ],
  },
  { label: "Contact", path: "/contact" },
];

export const conditionOptions = ["All", "New", "Used"];

export const filterOptions = {
  make: [
    "Any Make",
    "Audi",
    "BMW",
    "Ford",
    "Mercedes-Benz",
    "Peugeot",
    "Porsche",
  ],
  category: [
    "Any Category",
    "SUV",
    "Sedan",
    "Hatchback",
    "Coupe",
    "Hybrid",
  ],
  priceRange: ["Any Price", "Under $25k", "$25k - $40k", "$40k+"],
};

export const inventoryTabs = ["View All", "New Cars", "Used Cars", "In Stock"];

export const brands = [
  {
    name: "Audi",
    logo: audiLogo,
    inventory: "18 curated listings",
    highlight: "Executive SUVs and sharp grand tourers.",
  },
  {
    name: "BMW",
    logo: bmwLogo,
    inventory: "14 curated listings",
    highlight: "Driver-focused sedans and touring models.",
  },
  {
    name: "Ford",
    logo: fordLogo,
    inventory: "22 curated listings",
    highlight: "Flexible daily drivers and road-trip picks.",
  },
  {
    name: "Mercedes-Benz",
    logo: mercedesLogo,
    inventory: "11 curated listings",
    highlight: "Premium comfort with modern cockpit tech.",
  },
  {
    name: "Peugeot",
    logo: peugeotLogo,
    inventory: "9 curated listings",
    highlight: "Compact European hatchbacks with character.",
  },
  {
    name: "Porsche",
    logo: null,
    monogram: "POR",
    inventory: "12 curated listings",
    highlight: "Performance SUVs and unmistakable sports silhouettes.",
  },
];

export const featuredVehicles = [
  {
    id: "audi-q7-premium",
    detailId: "inv-audi-q7-prestige",
    brand: "Audi",
    model: "Q7 Premium",
    category: "SUV",
    condition: "New",
    price: 68950,
    monthlyPrice: "$799/mo",
    year: 2024,
    mileage: "12 mi",
    fuel: "Hybrid",
    seats: 7,
    transmission: "Automatic AWD",
    availability: "Ready for delivery",
    inStock: true,
    highlights: ["Low Mileage", "Great Price"],
    location: "Tashkent Premium Garage",
    image: audiQ7,
  },
  {
    id: "bmw-530i-touring",
    detailId: "inv-bmw-530i-m-sport",
    brand: "BMW",
    model: "530i",
    category: "Sedan",
    condition: "Used",
    price: 32900,
    monthlyPrice: "$399/mo",
    year: 2021,
    mileage: "28k mi",
    fuel: "Petrol",
    seats: 5,
    transmission: "Automatic RWD",
    availability: "Certified pre-owned",
    inStock: true,
    highlights: ["Popular", "Single Owner"],
    location: "Yunusobod Selection Center",
    image: bmw530i,
  },
  {
    id: "ford-escape-titanium",
    detailId: "inv-ford-escape-titanium",
    brand: "Ford",
    model: "Escape Titanium",
    category: "SUV",
    condition: "Used",
    price: 27850,
    monthlyPrice: "$339/mo",
    year: 2022,
    mileage: "16k mi",
    fuel: "Hybrid",
    seats: 5,
    transmission: "Automatic FWD",
    availability: "Freshly detailed",
    inStock: true,
    highlights: ["Family Pick", "Hybrid"],
    location: "Mirzo Ulugbek Auto Mall",
    image: fordEscape,
  },
  {
    id: "mercedes-cla-250",
    detailId: "inv-mercedes-cla-250",
    brand: "Mercedes-Benz",
    model: "CLA 250",
    category: "Coupe",
    condition: "New",
    price: 47200,
    monthlyPrice: "$499/mo",
    year: 2024,
    mileage: "8 mi",
    fuel: "Petrol",
    seats: 5,
    transmission: "Automatic FWD",
    availability: "Showroom arrival",
    inStock: true,
    highlights: ["New Arrival", "Premium Trim"],
    location: "City Center Signature Motors",
    image: mercedesCla,
  },
  {
    id: "peugeot-308-gt",
    detailId: "inv-peugeot-308-gt",
    brand: "Peugeot",
    model: "308 GT",
    category: "Hatchback",
    condition: "Used",
    price: 24900,
    monthlyPrice: "$299/mo",
    year: 2021,
    mileage: "34k mi",
    fuel: "Petrol",
    seats: 5,
    transmission: "Automatic FWD",
    availability: "Inspection passed",
    inStock: false,
    highlights: ["Great Price", "Hot Offer"],
    location: "Chilonzor Drive House",
    image: peugeot308,
  },
  {
    id: "porsche-cayenne",
    detailId: "inv-porsche-cayenne",
    brand: "Porsche",
    model: "Cayenne",
    category: "SUV",
    condition: "Used",
    price: 56100,
    monthlyPrice: "$679/mo",
    year: 2021,
    mileage: "19k mi",
    fuel: "Petrol",
    seats: 5,
    transmission: "Automatic AWD",
    availability: "Performance package included",
    inStock: true,
    highlights: ["Performance", "Dealer Offer"],
    location: "Downtown Sport Garage",
    image: porscheCayenne,
  },
  {
    id: "audi-a5-sportback",
    detailId: "inv-audi-a5-s-line",
    brand: "Audi",
    model: "A5 Sportback",
    category: "Coupe",
    condition: "Used",
    price: 41750,
    monthlyPrice: "$459/mo",
    year: 2022,
    mileage: "22k mi",
    fuel: "Petrol",
    seats: 5,
    transmission: "Automatic quattro",
    availability: "One owner",
    inStock: true,
    highlights: ["Low Mileage", "Sportback"],
    location: "Riverside Auto Gallery",
    image: audiSportback,
  },
  {
    id: "ford-focus-active",
    detailId: "inv-ford-kuga-st-line",
    brand: "Ford",
    model: "Escape Active",
    category: "SUV",
    condition: "Used",
    price: 23900,
    monthlyPrice: "$289/mo",
    year: 2021,
    mileage: "37k mi",
    fuel: "Petrol",
    seats: 5,
    transmission: "Automatic AWD",
    availability: "Great family choice",
    inStock: false,
    highlights: ["Budget Friendly", "Popular"],
    location: "Bektemir Value Motors",
    image: fordEscape,
  },
];

export const sellOffer = {
  kicker: "Sell Your Car",
  title: "Get A Fair Price For Your Car",
  emphasis: "Sell To Us Today",
  copy:
    "We are committed to clear pricing, fast valuation, and a smoother handoff from your current car into your next one.",
  bullets: [
    "Nationwide partner coverage with more support points in more places.",
    "24/7 roadside assistance guidance after your purchase.",
    "Most routine issues are handled before they become major repairs.",
  ],
  cta: "Get Started",
};

export const sellStats = [
  { value: "834M", label: "Cars For Sale" },
  { value: "732M", label: "Dealer Reviews" },
  { value: "90M", label: "Visitors Per Day" },
  { value: "236M", label: "Verified Dealers" },
];

export const whyChooseUs = [
  {
    icon: "financing",
    title: "Special Financing Offers",
    copy:
      "A cleaner finance flow with faster approvals and monthly options that fit the cars shown above.",
  },
  {
    icon: "trusted",
    title: "Trusted Car Dealership",
    copy:
      "Every featured listing is curated to feel dealership-grade instead of an unstructured marketplace dump.",
  },
  {
    icon: "pricing",
    title: "Transparent Pricing",
    copy:
      "You can compare trims, price bands, and value signals without hunting across multiple screens.",
  },
  {
    icon: "service",
    title: "Expert Car Service",
    copy:
      "Maintenance-minded copy and verified details keep the listing cards practical, not just decorative.",
  },
];

export const popularMakesByBrand = {
  Audi: [
    {
      id: "pm-audi-1",
      listingId: "inv-audi-a5-s-line",
      badge: "Low Mileage",
      title: "Audi A5 Sportback",
      subtitle: "2022 quattro S line Night Pack",
      mileage: "22k miles",
      fuel: "Petrol",
      transmission: "Automatic",
      price: "$41,750",
      image: audiSportback,
    },
    {
      id: "pm-audi-2",
      listingId: "inv-audi-q7-prestige",
      badge: "Great Price",
      title: "Audi Q7 Premium",
      subtitle: "2024 hybrid luxury SUV",
      mileage: "12 miles",
      fuel: "Hybrid",
      transmission: "Automatic",
      price: "$68,950",
      image: audiQ7,
    },
    {
      id: "pm-audi-3",
      listingId: "inv-audi-a5-s-line",
      badge: "Popular",
      title: "Audi A5 Sportback",
      subtitle: "One owner with full service history",
      mileage: "22k miles",
      fuel: "Petrol",
      transmission: "Automatic",
      price: "$41,750",
      image: audiSportback,
    },
    {
      id: "pm-audi-4",
      listingId: "inv-audi-q7-prestige",
      badge: "Great Price",
      title: "Audi Q7 Premium",
      subtitle: "Luxury SUV with seven seats",
      mileage: "12 miles",
      fuel: "Hybrid",
      transmission: "Automatic",
      price: "$68,950",
      image: audiQ7,
    },
  ],
  BMW: [
    {
      id: "pm-bmw-1",
      listingId: "inv-bmw-530i-m-sport",
      badge: "Low Mileage",
      title: "BMW 530i Touring",
      subtitle: "2021 M Sport mild hybrid",
      mileage: "28k miles",
      fuel: "Petrol",
      transmission: "Automatic",
      price: "$32,900",
      image: bmw530i,
    },
    {
      id: "pm-bmw-2",
      listingId: "inv-bmw-530i-m-sport",
      badge: "Dealer Offer",
      title: "BMW 530i Touring",
      subtitle: "Fresh arrival with premium package",
      mileage: "28k miles",
      fuel: "Petrol",
      transmission: "Automatic",
      price: "$32,900",
      image: bmw530i,
    },
    {
      id: "pm-bmw-3",
      listingId: "inv-bmw-530i-m-sport",
      badge: "Great Price",
      title: "BMW 530i Touring",
      subtitle: "Certified pre-owned estate",
      mileage: "28k miles",
      fuel: "Petrol",
      transmission: "Automatic",
      price: "$32,900",
      image: bmw530i,
    },
    {
      id: "pm-bmw-4",
      listingId: "inv-bmw-530i-m-sport",
      badge: "Popular",
      title: "BMW 530i Touring",
      subtitle: "Estate with tech and comfort pack",
      mileage: "28k miles",
      fuel: "Petrol",
      transmission: "Automatic",
      price: "$32,900",
      image: bmw530i,
    },
  ],
  Mercedes: [
    {
      id: "pm-merc-1",
      listingId: "inv-mercedes-cla-250",
      badge: "Low Mileage",
      title: "Mercedes-Benz CLA 250",
      subtitle: "2024 premium trim coupe",
      mileage: "8 miles",
      fuel: "Petrol",
      transmission: "Automatic",
      price: "$47,200",
      image: mercedesCla,
    },
    {
      id: "pm-merc-2",
      listingId: "inv-mercedes-cla-250",
      badge: "Great Price",
      title: "Mercedes-Benz CLA 250",
      subtitle: "Showroom arrival with driver assist",
      mileage: "8 miles",
      fuel: "Petrol",
      transmission: "Automatic",
      price: "$47,200",
      image: mercedesCla,
    },
    {
      id: "pm-merc-3",
      listingId: "inv-mercedes-cla-250",
      badge: "Popular",
      title: "Mercedes-Benz CLA 250",
      subtitle: "Strong monthly finance option",
      mileage: "8 miles",
      fuel: "Petrol",
      transmission: "Automatic",
      price: "$47,200",
      image: mercedesCla,
    },
    {
      id: "pm-merc-4",
      listingId: "inv-mercedes-cla-250",
      badge: "Great Price",
      title: "Mercedes-Benz CLA 250",
      subtitle: "Premium pack with night edition trim",
      mileage: "8 miles",
      fuel: "Petrol",
      transmission: "Automatic",
      price: "$47,200",
      image: mercedesCla,
    },
  ],
};

export const shopByColumns = [
  {
    title: "New Cars For Sale",
    links: [
      "Used Hatch Cars",
      "Used Hybrid Cars",
      "Used Midsize Cars",
      "Used Mercedes Cars",
      "Used BMW Cars",
      "Used Chevrolet Cars",
    ],
  },
  {
    title: "Used Cars For Sale",
    links: [
      "Used Chrysler Cars",
      "Used Electric Cars",
      "Used Coupe Cars",
      "Used Midsize Cars",
      "Used SUV Cars",
      "Used GT Cars",
    ],
  },
  {
    title: "Browse By Type",
    links: [
      "Used Ford Cars",
      "Used Honda Cars",
      "Used Hybrid Cars",
      "Used Infiniti Cars",
      "Used Jaguar Cars",
      "Used Jeep Cars",
    ],
  },
  {
    title: "Browse By Brand",
    links: [
      "Used Kia Cars",
      "Used Land Rover Cars",
      "Used Lexus Cars",
      "Used Mazda Cars",
      "Used Mercedes-Benz Cars",
      "Used Mini Cars",
    ],
  },
  {
    title: "Popular Searches",
    links: [
      "Used Mini Cars",
      "Used Mitsubishi Cars",
      "Used Nissan Cars",
      "Used Peugeot Cars",
      "Used Porsche Cars",
      "Used Ramal Cars",
    ],
  },
];

export const testimonial = {
  name: "Ali Tufan",
  role: "Designer",
  rating: "4.7",
  reviewCount: "2,150 reviews",
  quote:
    "I'd suggest Macklin Motors Nissan Glasgow South to a friend because I had great service from my salesman Patrick and all of the team.",
  avatar: testimonialAvatar,
};

export const latestBlogPosts = [
  {
    tag: "News",
    author: "Ali Tufan",
    date: "April 20, 2024",
    slug: "long-awaited-technology-change-world",
    title: "This Long-Awaited Technology May Finally Change the World",
    image: blogImageOne,
  },
  {
    tag: "Guides",
    author: "Ali Tufan",
    date: "April 20, 2024",
    slug: "save-on-fuel-costs-ultimate-guide",
    title: "How To Save On Car Fuel Costs - The Ultimate Guide",
    image: blogImageTwo,
  },
  {
    tag: "Advice",
    author: "Ali Tufan",
    date: "April 20, 2024",
    slug: "best-used-cars-insurance-policies",
    title: "The Best Used Cars For Affordable Insurance Policies",
    image: blogImageThree,
  },
];

export const ctaPanels = [
  {
    tone: "blue",
    icon: "car",
    title: "Are You Looking For A Car ?",
    copy:
      "We are committed to providing our customers with exceptional service and curated stock.",
    cta: "Get Started",
  },
  {
    tone: "pink",
    icon: "sell",
    title: "Do You Want to Sell a Car ?",
    copy:
      "We are committed to providing our customers with a quick valuation and smooth handoff.",
    cta: "Get Started",
  },
];

export const footerColumns = [
  {
    title: "Company",
    links: ["About Us", "Careers", "Blog", "FAQs", "Finance", "Contact Us"],
  },
  {
    title: "Quick Links",
    links: ["Get In Touch", "Help Center", "Live Chat", "How it works"],
  },
  {
    title: "Our Brands",
    links: ["Aston Martin", "Audi", "Bentley", "BMW", "Bugatti", "Ferrari"],
  },
  {
    title: "Vehicles Type",
    links: ["Pickup", "Coupe", "Family MPV", "Sedan", "SUV", "Wagon"],
  },
];

export const socialLinks = [
  { label: "Facebook", icon: "facebook", href: "https://www.facebook.com/" },
  { label: "Instagram", icon: "instagram", href: "https://www.instagram.com/" },
  { label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/" },
  { label: "X", icon: "x", href: "https://x.com/" },
];

export const footerMeta = {
  copyright: "(c) 2026 BoxCars.com. All rights reserved.",
  links: ["Terms & Conditions", "Privacy Notice"],
};
