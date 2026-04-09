import audiLogo from "../assets/carlogo/image 3 (4).png";
import bmwLogo from "../assets/carlogo/image 3 (5).png";
import fordLogo from "../assets/carlogo/image 3 (6).png";
import mercedesLogo from "../assets/carlogo/image 3 (7).png";
import peugeotLogo from "../assets/carlogo/image 3 (8).png";
import { inventoryListings } from "./inventoryData";

export const aboutHero = {
  breadcrumb: "Cars for Sale",
  title: "We Value Our Clients And Want Them To Have A Nice Experience",
  intro:
    "BoxCar is built around cleaner inventory discovery, transparent pricing, and a calmer buying flow from first search to final handoff.",
  body: [
    "We keep the product surface practical. Buyers should be able to compare trims, pricing bands, and dealership context without opening five different pages to understand one car.",
    "That is why the platform combines clearer listing cards, stronger editorial guidance, and public pages that support trust instead of acting like decoration around the catalog.",
    "The goal is straightforward: reduce friction, improve confidence, and make the next action obvious whether the user is browsing, comparing, or contacting a dealer.",
  ],
};

export const aboutStats = [
  { value: "45", label: "Years in Business" },
  { value: "12k+", label: "Cars Delivered" },
  { value: "4.8/5", label: "Average Review Score" },
];

export const aboutBenefits = [
  {
    title: "Special Financing Offers",
    copy:
      "A cleaner finance flow with faster approvals and monthly options that fit the stock shown across the marketplace.",
  },
  {
    title: "Trusted Car Dealership",
    copy:
      "Listings are arranged to feel dealership-grade instead of an unstructured marketplace feed with weak context.",
  },
  {
    title: "Transparent Pricing",
    copy:
      "Trim, value signals, and pricing hierarchy stay visible so buyers can compare quickly and with less guesswork.",
  },
  {
    title: "Expert Car Service",
    copy:
      "Ownership-minded guidance keeps the platform useful after the first impression and before the final decision.",
  },
];

export const aboutPrinciples = [
  "Clear product information before decorative detail.",
  "Consistent route structure across inventory, shop, and editorial content.",
  "A public-facing experience that works on desktop first without collapsing on smaller screens.",
  "Practical trust signals such as reviews, dealer context, and transparent actions.",
];

export const contactPage = {
  breadcrumb: "Cars for Sale",
  title: "Get In Touch",
  intro:
    "Questions about inventory, finance, dealer access, or product direction can come through the same channel. The page is kept simple on purpose.",
  note:
    "Etiam pharetra egestas interdum blandit viverra morbi consequat mi non bibendum egestas quam egestas nulla.",
};

export const contactDetails = [
  {
    label: "Address",
    value: "329 Queensberry Street, North Melbourne VIC 3051, Australia.",
  },
  {
    label: "Email",
    value: "ali@boxcars.com",
  },
  {
    label: "Phone",
    value: "+76 956 039 967",
  },
  {
    label: "Support",
    value: "Mon - Sat / 10:00 - 18:00",
  },
];

export const contactHours = [
  { day: "Sunday", hours: "10:00 - 17:00" },
  { day: "Monday", hours: "09:00 - 18:00" },
  { day: "Tuesday", hours: "09:00 - 18:00" },
  { day: "Wednesday", hours: "09:00 - 18:00" },
  { day: "Thursday", hours: "09:00 - 18:00" },
  { day: "Friday", hours: "09:00 - 18:00" },
  { day: "Saturday", hours: "10:00 - 17:00" },
];

const countInventoryByBrand = (brand) =>
  inventoryListings.filter((vehicle) => vehicle.brand === brand).length;

export const teamPage = {
  breadcrumb: "Pages",
  title: "Meet The Team Behind The BoxCar Marketplace",
  intro:
    "These are the operators, dealer partners, and product-minded leads keeping the catalog practical from listing quality to customer response time.",
};

export const teamStats = [
  { value: "6", label: "Core Team Leads" },
  { value: "18m", label: "Average Response Window" },
  { value: "32", label: "Dealer Partners Managed" },
];

export const teamMembers = [
  {
    slug: "amir-safarov",
    name: "Amir Safarov",
    role: "Head of Inventory",
    initials: "AS",
    accent: "linear-gradient(135deg, #405ff2 0%, #141b45 100%)",
    office: "Tashkent HQ",
    phone: "+998 90 445 10 12",
    email: "amir@boxcars.com",
    availability: "Mon - Fri / 10:00 - 18:00",
    focus: "Dealer onboarding and listing quality control",
    shortBio:
      "Keeps pricing signals, dealer compliance, and trim-level clarity aligned before cars reach the public catalog.",
    bio: [
      "Amir leads the inventory side of BoxCar with a bias toward clean structure. Each listing should expose the important context fast: pricing, mileage, dealer confidence, and the next best action.",
      "He works directly with partner dealers to reduce weak stock uploads, inconsistent trim naming, and the common formatting drift that makes inventory pages harder to trust.",
    ],
    quote:
      "A cleaner marketplace starts before the first user session. It starts with disciplined inventory inputs.",
    specialties: [
      "Inventory QA",
      "Dealer onboarding",
      "Pricing review",
      "Catalog consistency",
    ],
    languages: ["Uzbek", "English", "Russian"],
    metrics: [
      { value: "2.4k+", label: "Cars Curated" },
      { value: "11", label: "Years Experience" },
      { value: "4.9/5", label: "Partner Score" },
    ],
    featuredVehicleIds: [
      "inv-audi-q7-prestige",
      "inv-bmw-x5-xdrive",
      "inv-porsche-cayenne",
    ],
    relatedDealerSlugs: ["audi-premium-house", "bavaria-selection-center"],
  },
  {
    slug: "dilnoza-karimova",
    name: "Dilnoza Karimova",
    role: "Finance Experience Lead",
    initials: "DK",
    accent: "linear-gradient(135deg, #17b26a 0%, #074f2f 100%)",
    office: "Finance Operations",
    phone: "+998 90 771 28 18",
    email: "dilnoza@boxcars.com",
    availability: "Mon - Sat / 09:30 - 17:30",
    focus: "Monthly payment clarity and finance journey simplification",
    shortBio:
      "Owns the finance messaging layer so monthly estimates, offer steps, and lead forms stay clear across public pages.",
    bio: [
      "Dilnoza works on reducing friction between catalog browsing and credit intent. Her focus is making finance entry points understandable without turning every listing into a dense application form.",
      "She collaborates with dealer groups and support teams to keep funding language realistic, especially on higher-value inventory and used-car offers.",
    ],
    quote:
      "Finance should feel transparent and calm, not like a wall of hidden conditions.",
    specialties: [
      "Finance UX",
      "Offer workflows",
      "Payment messaging",
      "Lead qualification",
    ],
    languages: ["Uzbek", "English"],
    metrics: [
      { value: "430+", label: "Offers Guided" },
      { value: "8", label: "Years Experience" },
      { value: "91%", label: "Lead Completion" },
    ],
    featuredVehicleIds: [
      "inv-mercedes-glc-300",
      "inv-mercedes-eqa-250",
      "inv-peugeot-408-allure",
    ],
    relatedDealerSlugs: ["signature-star-motors", "french-auto-gallery"],
  },
  {
    slug: "jamshid-rakhimov",
    name: "Jamshid Rakhimov",
    role: "Dealer Partnerships Manager",
    initials: "JR",
    accent: "linear-gradient(135deg, #ff8a1f 0%, #7a2e00 100%)",
    office: "Partner Network",
    phone: "+998 90 663 22 40",
    email: "jamshid@boxcars.com",
    availability: "Mon - Fri / 10:00 - 19:00",
    focus: "Partner growth and dealer performance standards",
    shortBio:
      "Works across the dealer network to keep response time, stock freshness, and customer follow-through on a measurable standard.",
    bio: [
      "Jamshid is responsible for how dealer partners show up inside the product, from listing quality and response expectations to branch-level trust signals.",
      "He spends most of his time balancing commercial growth with operational discipline so public routes can scale without losing clarity.",
    ],
    quote:
      "Dealer growth only matters if the customer experience becomes easier, not noisier.",
    specialties: [
      "Dealer operations",
      "Partner growth",
      "SLA management",
      "Performance reporting",
    ],
    languages: ["Uzbek", "English", "Russian"],
    metrics: [
      { value: "32", label: "Partner Branches" },
      { value: "14", label: "Years Experience" },
      { value: "96%", label: "SLA Adherence" },
    ],
    featuredVehicleIds: [
      "inv-ford-escape-titanium",
      "inv-audi-a5-s-line",
      "inv-bmw-530e",
    ],
    relatedDealerSlugs: ["ford-city-drive", "porsche-sport-garage"],
  },
  {
    slug: "malika-yusupova",
    name: "Malika Yusupova",
    role: "Customer Success Lead",
    initials: "MY",
    accent: "linear-gradient(135deg, #f04488 0%, #67103a 100%)",
    office: "Customer Success",
    phone: "+998 90 505 94 06",
    email: "malika@boxcars.com",
    availability: "Tue - Sat / 10:00 - 18:00",
    focus: "Lead handoff, buyer support, and service trust signals",
    shortBio:
      "Shapes the post-click experience so dealer contact, scheduling, and follow-up do not break after a strong first impression.",
    bio: [
      "Malika works between customers and partner dealers to improve how handoffs happen after the shopper commits to the next step.",
      "Her team watches where trust drops, which routes lead to stalled conversations, and what signals need to stay visible in order for customers to keep moving.",
    ],
    quote:
      "A beautiful listing is wasted if the follow-up feels careless or inconsistent.",
    specialties: [
      "Customer support ops",
      "Test-drive workflows",
      "Escalation handling",
      "Feedback loops",
    ],
    languages: ["Uzbek", "English"],
    metrics: [
      { value: "12k+", label: "Buyer Threads" },
      { value: "9", label: "Years Experience" },
      { value: "93%", label: "Positive Reviews" },
    ],
    featuredVehicleIds: [
      "inv-audi-q5-sport",
      "inv-ford-kuga-st-line",
      "inv-mercedes-c-300",
    ],
    relatedDealerSlugs: ["audi-premium-house", "ford-city-drive"],
  },
  {
    slug: "timur-azimov",
    name: "Timur Azimov",
    role: "Performance Marketing Strategist",
    initials: "TA",
    accent: "linear-gradient(135deg, #0ba5ec 0%, #06344f 100%)",
    office: "Growth Team",
    phone: "+998 90 118 47 52",
    email: "timur@boxcars.com",
    availability: "Mon - Fri / 11:00 - 18:00",
    focus: "Audience acquisition and landing-page intent quality",
    shortBio:
      "Bridges ad traffic and onsite action quality so public routes attract higher-intent shoppers instead of low-signal volume.",
    bio: [
      "Timur focuses on the match between acquisition channels and landing-page quality. He studies where users enter the experience, what they expect to see, and how quickly they understand the value of the next click.",
      "That makes him closely involved in homepage, inventory-list, and dealer route refinement.",
    ],
    quote:
      "Traffic only matters when the destination earns the click.",
    specialties: [
      "Growth strategy",
      "Landing page CRO",
      "Acquisition quality",
      "Campaign reporting",
    ],
    languages: ["Uzbek", "English"],
    metrics: [
      { value: "37%", label: "Higher CTR" },
      { value: "7", label: "Years Experience" },
      { value: "2.1x", label: "Lead Quality Lift" },
    ],
    featuredVehicleIds: [
      "inv-peugeot-3008-gt",
      "inv-porsche-macan-4",
      "inv-audi-a5-s-line",
    ],
    relatedDealerSlugs: ["french-auto-gallery", "porsche-sport-garage"],
  },
  {
    slug: "nargiza-sobirova",
    name: "Nargiza Sobirova",
    role: "Editorial & Blog Lead",
    initials: "NS",
    accent: "linear-gradient(135deg, #875bf7 0%, #2a1766 100%)",
    office: "Content Studio",
    phone: "+998 90 220 60 90",
    email: "nargiza@boxcars.com",
    availability: "Mon - Fri / 09:00 - 17:00",
    focus: "Editorial clarity across blog, guides, and trust content",
    shortBio:
      "Owns the content layer that supports public trust, from comparison guides to dealer-facing advice and buyer education.",
    bio: [
      "Nargiza keeps BoxCar’s editorial surface useful. Her work connects the catalog to supporting content that answers real questions about ownership, value, and dealer expectations.",
      "She also shapes how About, FAQ, and other public pages support conversion without feeling like filler.",
    ],
    quote:
      "Editorial content should reduce uncertainty, not just occupy space.",
    specialties: [
      "Editorial strategy",
      "Buyer education",
      "Content systems",
      "Brand narrative",
    ],
    languages: ["Uzbek", "English", "Russian"],
    metrics: [
      { value: "180+", label: "Articles Published" },
      { value: "10", label: "Years Experience" },
      { value: "4.8/5", label: "Reader Rating" },
    ],
    featuredVehicleIds: [
      "inv-bmw-530i-m-sport",
      "inv-mercedes-cla-250",
      "inv-peugeot-308-gt",
    ],
    relatedDealerSlugs: ["bavaria-selection-center", "signature-star-motors"],
  },
];

export const getTeamMemberBySlug = (slug) =>
  teamMembers.find((member) => member.slug === slug) ?? null;

export const dealerPage = {
  breadcrumb: "Pages",
  title: "Browse Dealers That Match The Inventory Quality Standard",
  intro:
    "Each branch profile highlights stock depth, response expectation, and the people attached to the buying flow so customers can judge the partner before they submit a lead.",
};

export const dealerStats = [
  { value: "6", label: "Featured Dealer Branches" },
  { value: "4.8/5", label: "Average Branch Rating" },
  { value: "18", label: "Minutes Avg Response" },
];

export const dealerBenefits = [
  {
    title: "Cleaner branch profiles",
    copy:
      "Dealers are surfaced with operating context, not just a logo and a phone number.",
  },
  {
    title: "Inventory tied to the branch",
    copy:
      "Every dealer page shows the cars, categories, and brand range customers can actually act on.",
  },
  {
    title: "Named contact points",
    copy:
      "Advisor ownership stays visible, which reduces the anonymous feel common to marketplace lead forms.",
  },
];

export const dealerPartners = [
  {
    slug: "audi-premium-house",
    name: "Audi Premium House",
    brand: "Audi",
    logo: audiLogo,
    initials: "A",
    accent: "linear-gradient(135deg, #405ff2 0%, #0f1735 100%)",
    badge: "Premium Partner",
    location: "45 Amir Temur Avenue, Tashkent",
    phone: "+998 90 445 11 22",
    email: "sales@audipremiumhouse.uz",
    hours: "Mon - Sat / 09:00 - 19:00",
    responseTime: "Replies within 20 minutes",
    rating: "4.9/5",
    reviewCount: "128 reviews",
    description:
      "A premium branch focused on Audi performance, certified used inventory, and fast-response showroom handoff.",
    services: [
      "Certified used cars",
      "Trade-in valuation",
      "Finance guidance",
      "Test-drive scheduling",
    ],
    highlights: [
      "Dedicated quattro inventory specialist",
      "Virtual walkaround support",
      "Same-day valuation slots",
    ],
    advisorSlugs: ["amir-safarov", "malika-yusupova"],
  },
  {
    slug: "bavaria-selection-center",
    name: "Bavaria Selection Center",
    brand: "BMW",
    logo: bmwLogo,
    initials: "B",
    accent: "linear-gradient(135deg, #111827 0%, #4b5563 100%)",
    badge: "Executive Dealer",
    location: "17 Yunusobod Street, Tashkent",
    phone: "+998 90 212 77 44",
    email: "hello@bavariaselection.uz",
    hours: "Mon - Sat / 10:00 - 19:30",
    responseTime: "Replies within 15 minutes",
    rating: "4.9/5",
    reviewCount: "141 reviews",
    description:
      "Handles BMW sedan and SUV inventory with strong executive-package positioning and dealership-grade aftercare.",
    services: [
      "Premium used stock",
      "Warranty support",
      "Corporate fleet consultation",
      "Finance comparison",
    ],
    highlights: [
      "M Sport trim specialists",
      "Same-day test-drive coordination",
      "Detailed ownership history checks",
    ],
    advisorSlugs: ["jamshid-rakhimov", "nargiza-sobirova"],
  },
  {
    slug: "ford-city-drive",
    name: "Ford City Drive",
    brand: "Ford",
    logo: fordLogo,
    initials: "F",
    accent: "linear-gradient(135deg, #1d4ed8 0%, #102a75 100%)",
    badge: "Family Focus Dealer",
    location: "106 Small Ring Road, Tashkent",
    phone: "+998 90 338 90 00",
    email: "team@fordcitydrive.uz",
    hours: "Mon - Sat / 09:00 - 18:30",
    responseTime: "Replies within 30 minutes",
    rating: "4.7/5",
    reviewCount: "96 reviews",
    description:
      "Focused on hybrid SUVs, practical family trims, and clear trade-in conversations for everyday buyers.",
    services: [
      "Family SUV consultation",
      "Trade-in assistance",
      "Hybrid model guidance",
      "Accessory packages",
    ],
    highlights: [
      "Comfort-spec inventory picks",
      "Trade-in support desk",
      "Flexible handover times",
    ],
    advisorSlugs: ["jamshid-rakhimov", "malika-yusupova"],
  },
  {
    slug: "signature-star-motors",
    name: "Signature Star Motors",
    brand: "Mercedes-Benz",
    logo: mercedesLogo,
    initials: "M",
    accent: "linear-gradient(135deg, #6b7280 0%, #111827 100%)",
    badge: "Luxury Partner",
    location: "8 Shota Rustaveli Street, Tashkent",
    phone: "+998 90 556 18 88",
    email: "sales@signaturestar.uz",
    hours: "Mon - Sat / 10:00 - 19:00",
    responseTime: "Replies within 10 minutes",
    rating: "4.9/5",
    reviewCount: "167 reviews",
    description:
      "A high-touch Mercedes-Benz partner with strong luxury inventory presentation and a faster finance handoff.",
    services: [
      "Luxury trim consultation",
      "Lease and finance guidance",
      "Certified inspection",
      "Priority test drives",
    ],
    highlights: [
      "Fast finance support",
      "Premium delivery experience",
      "AMG line product specialists",
    ],
    advisorSlugs: ["dilnoza-karimova", "nargiza-sobirova"],
  },
  {
    slug: "french-auto-gallery",
    name: "French Auto Gallery",
    brand: "Peugeot",
    logo: peugeotLogo,
    initials: "P",
    accent: "linear-gradient(135deg, #0f172a 0%, #334155 100%)",
    badge: "Urban Mobility Dealer",
    location: "63 Chilonzor Avenue, Tashkent",
    phone: "+998 90 120 33 66",
    email: "care@frenchautogallery.uz",
    hours: "Mon - Sat / 09:30 - 18:30",
    responseTime: "Replies within 25 minutes",
    rating: "4.8/5",
    reviewCount: "84 reviews",
    description:
      "Specializes in city-focused Peugeot hatchback and crossover inventory with practical ownership positioning.",
    services: [
      "Urban car consultation",
      "Ownership cost guidance",
      "Used inventory sourcing",
      "After-sales coordination",
    ],
    highlights: [
      "Hatchback and crossover expertise",
      "Transparent ownership notes",
      "Comfort-first trim selection",
    ],
    advisorSlugs: ["dilnoza-karimova", "timur-azimov"],
  },
  {
    slug: "porsche-sport-garage",
    name: "Porsche Sport Garage",
    brand: "Porsche",
    logo: null,
    initials: "PS",
    accent: "linear-gradient(135deg, #a16207 0%, #451a03 100%)",
    badge: "Performance Dealer",
    location: "9 Furqat Street, Tashkent",
    phone: "+998 90 777 20 20",
    email: "drive@porschesportgarage.uz",
    hours: "Mon - Sat / 10:00 - 19:30",
    responseTime: "Replies within 10 minutes",
    rating: "4.9/5",
    reviewCount: "113 reviews",
    description:
      "Covers Porsche SUV and performance inventory with stronger enthusiast context and faster appointment handling.",
    services: [
      "Performance consultation",
      "Reservation handling",
      "Specification walkthroughs",
      "High-value trade-ins",
    ],
    highlights: [
      "Performance-focused advisors",
      "Spec-by-spec walkthroughs",
      "Priority weekend appointments",
    ],
    advisorSlugs: ["amir-safarov", "timur-azimov"],
  },
].map((dealer) => ({
  ...dealer,
  inventoryCount: countInventoryByBrand(dealer.brand),
  metrics: [
    { value: `${countInventoryByBrand(dealer.brand)}`, label: "Cars In Stock" },
    { value: dealer.responseTime.replace("Replies within ", ""), label: "Avg Response" },
    { value: dealer.rating, label: "Customer Score" },
  ],
}));

export const getDealerBySlug = (slug) =>
  dealerPartners.find((dealer) => dealer.slug === slug) ?? null;

export const faqPage = {
  breadcrumb: "Pages",
  title: "Frequently Asked Questions",
  intro:
    "The FAQ stays focused on the real friction points inside a marketplace flow: inventory trust, dealer response, finance visibility, and what happens after the first lead.",
};

export const faqSections = [
  {
    title: "Buying & Inventory",
    items: [
      {
        question: "How current is the stock shown on BoxCar?",
        answer:
          "Inventory is refreshed around dealer availability and manual quality checks. Some vehicles may move faster than the public feed, so detail pages are designed to push the user quickly toward contact or test-drive scheduling.",
      },
      {
        question: "Can I compare similar trims before contacting a dealer?",
        answer:
          "Yes. Inventory and compare pages are structured to surface category, mileage, fuel type, pricing, and transmission before the user needs to open a conversation with a branch.",
      },
      {
        question: "Do all listings come from verified dealers?",
        answer:
          "The current public experience is oriented around dealer-grade inventory. Branch pages and response-time signals are shown so users can judge the partner before submitting a lead.",
      },
    ],
  },
  {
    title: "Finance & Offers",
    items: [
      {
        question: "Are monthly payments final offers?",
        answer:
          "No. Monthly payment figures are directional estimates based on approved credit assumptions. Final terms depend on vehicle price, down payment, term, and dealer finance review.",
      },
      {
        question: "What is the quickest path to a finance estimate?",
        answer:
          "The cleanest path is to open the relevant vehicle detail page, review the monthly note, and then continue through offer or contact actions. The loan calculator page is intended as a fast planning tool, not a final approval surface.",
      },
      {
        question: "Can I use my current car as a trade-in?",
        answer:
          "Yes. Several dealer pages explicitly highlight trade-in support, and the handoff is designed to keep that context visible instead of burying it after form submission.",
      },
    ],
  },
  {
    title: "Dealer & Support",
    items: [
      {
        question: "How quickly do dealers respond?",
        answer:
          "Response timing varies by branch, which is why dealer pages expose an expected reply window directly on the public page. Current featured partners average roughly 18 minutes.",
      },
      {
        question: "Who do I contact if I need help after submitting a lead?",
        answer:
          "You can continue through the contact page or work from the relevant team and dealer profile pages. Those routes are there to make ownership of the next step visible.",
      },
      {
        question: "Do public pages work on smaller screens too?",
        answer:
          "Yes. The public shell is being built with desktop-first structure but the sections are designed to collapse cleanly across tablet and smaller viewport widths.",
      },
    ],
  },
];

export const membershipPage = {
  breadcrumb: "Pages",
  title: "Membership Plans For Dealers And Marketplace Teams",
  intro:
    "These plans are positioned as operational tiers rather than generic pricing cards. The focus is on stock visibility, response tools, and how much public trust surface a branch can control.",
};

export const membershipPlans = [
  {
    name: "Starter",
    price: "$79",
    period: "/month",
    badge: "For small branches",
    description:
      "Built for compact dealer teams that want a cleaner listing surface without needing a heavy workflow layer.",
    features: [
      "Up to 15 active vehicle listings",
      "Basic dealer profile page",
      "Lead email routing",
      "Simple stock performance summary",
    ],
  },
  {
    name: "Growth",
    price: "$159",
    period: "/month",
    badge: "Most popular",
    description:
      "Adds stronger branch presentation, faster lead handling, and more room for inventory depth.",
    features: [
      "Up to 60 active vehicle listings",
      "Enhanced dealer page with team profiles",
      "Priority lead notifications",
      "Finance and trade-in entry points",
      "Monthly performance insights",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "$329",
    period: "/month",
    badge: "Dealer groups",
    description:
      "For multi-branch operations that need catalog consistency, advisor attribution, and higher service visibility.",
    features: [
      "Unlimited inventory slots",
      "Multi-branch management",
      "Advanced dealer and advisor pages",
      "Custom support workflows",
      "Priority onboarding and reporting",
    ],
  },
];

export const membershipSignals = [
  "Cleaner inventory presentation for public routes",
  "Better lead ownership through branch and advisor visibility",
  "Operational control without hiding pricing context from buyers",
  "A structured public shell that scales across more pages",
];

export const loanCalculatorPage = {
  breadcrumb: "Pages",
  title: "Auto Loan Calculator",
  intro:
    "This calculator is meant for quick planning. It keeps the inputs small, the math clear, and the next action obvious if the user wants to move from estimate to vehicle detail.",
};

export const loanCalculatorPresets = {
  downPaymentRate: 0.2,
  interestRate: 6.5,
  termMonths: 60,
};

export const comparePage = {
  breadcrumb: "Pages",
  title: "Compare Vehicles Side By Side",
  intro:
    "The compare route exists to remove low-signal decision making. Put two cars next to each other, keep the important fields visible, and let the user judge value before opening more tabs.",
};

export const compareHighlights = [
  "Price, monthly estimate, mileage, and powertrain in one row",
  "Side-by-side view built from live inventory data already used elsewhere",
  "Direct continuation into inventory detail once a winner is clear",
];

export const notFoundPage = {
  code: "404",
  title: "The page you are looking for does not exist",
  intro:
    "The route may have moved, the URL may be incomplete, or the page has not been wired into the public navigation yet.",
};
