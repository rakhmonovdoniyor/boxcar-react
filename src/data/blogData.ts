import blogImageOne from "../assets/homepage/blog1.png";
import blogImageTwo from "../assets/homepage/blog2.png";
import blogImageThree from "../assets/homepage/blog3.png";

export type BlogCategory =
  | "All"
  | "Auto Detailing"
  | "Car News"
  | "Buying Guides"
  | "Insurance Advice";

export interface BlogPost {
  slug: string;
  title: string;
  category: Exclude<BlogCategory, "All">;
  author: string;
  date: string;
  image: string;
  excerpt: string;
  readTime: string;
  tags: string[];
  content: string[];
}

export interface BlogSidebarCategory {
  label: string;
  count: number;
}

export const blogCategories: BlogCategory[] = [
  "All",
  "Auto Detailing",
  "Car News",
  "Buying Guides",
  "Insurance Advice",
];

export const blogPosts: BlogPost[] = [
  {
    slug: "long-awaited-technology-change-world",
    title: "This Long-Awaited Technology May Finally Change the World",
    category: "Car News",
    author: "Ali Tufan",
    date: "April 20, 2023",
    image: blogImageOne,
    excerpt:
      "Why software-defined cars, cleaner charging infrastructure, and faster in-car services are starting to matter at the same time.",
    readTime: "6 min read",
    tags: ["Technology", "EV", "Industry"],
    content: [
      "The biggest shift in automotive retail is not one single feature. It is the way software, charging, dealer service, and buying behavior are converging into one cleaner ownership flow.",
      "For buyers, that means the best technology is no longer only about speed or screen size. It is about fewer friction points: cleaner route planning, easier updates, and more confidence that the car will improve after purchase rather than age out immediately.",
      "For dealers and marketplaces, the implication is obvious. Product information has to become clearer, comparisons have to become faster, and pages must highlight practical value instead of generic marketing copy.",
    ],
  },
  {
    slug: "save-on-fuel-costs-ultimate-guide",
    title: "How To Save On Car Fuel Costs - The Ultimate Guide",
    category: "Buying Guides",
    author: "Ali Tufan",
    date: "April 20, 2023",
    image: blogImageTwo,
    excerpt:
      "Small changes in driving style, maintenance, and tire setup still make a measurable difference on a monthly fuel bill.",
    readTime: "5 min read",
    tags: ["Fuel", "Maintenance", "Guides"],
    content: [
      "Most buyers search for fuel savings by looking only at the car itself. That matters, but the daily cost story is just as affected by tire pressure, maintenance timing, route planning, and how aggressively the car is driven between lights.",
      "If a car is already in your garage, the cheapest improvement is often not a modification. It is restoring the baseline condition of the car and removing waste from ordinary use.",
      "This is also why better listing pages matter. A clear view of fuel type, mileage, service history, and intended use helps buyers choose the right vehicle before the first payment is made.",
    ],
  },
  {
    slug: "selling-modified-car-best-price",
    title: "Selling a Modified Car: How to Secure the Best Price",
    category: "Buying Guides",
    author: "Ali Tufan",
    date: "April 20, 2023",
    image: blogImageThree,
    excerpt:
      "The best sale outcome usually comes from documenting the quality of the build rather than assuming every buyer values every modification.",
    readTime: "4 min read",
    tags: ["Selling", "Modified Cars", "Pricing"],
    content: [
      "Modified cars are harder to price because buyers split into two groups quickly: people who appreciate the work and people who would rather buy standard. Good documentation is what narrows that gap.",
      "Service records, part invoices, and a clear explanation of why the changes were made create confidence. Without that, modifications often look like risk instead of value.",
      "A strong listing should show where the money went, what was professionally installed, and what remains practical for the next owner.",
    ],
  },
  {
    slug: "used-ev-searches-rising-london",
    title: "Searches For Used EVs in London Are Rising",
    category: "Car News",
    author: "Ali Tufan",
    date: "April 20, 2023",
    image: blogImageOne,
    excerpt:
      "Urban buyers are placing more weight on charging convenience, lower running costs, and cleaner short-distance ownership models.",
    readTime: "5 min read",
    tags: ["EV", "Market", "Urban"],
    content: [
      "Demand patterns for used EVs in major cities are changing because the value proposition is becoming more practical, not just more fashionable.",
      "Lower operating costs still matter, but the stronger signal is convenience: fewer fuel stops, smoother city driving, and better compatibility with short recurring trips.",
      "Listings and dealer pages have to adapt by surfacing battery, charging, and use-case information more clearly.",
    ],
  },
  {
    slug: "best-used-electric-cars-under-30k",
    title: "Best Used Electric Cars for Under $30K",
    category: "Buying Guides",
    author: "Ali Tufan",
    date: "April 20, 2023",
    image: blogImageTwo,
    excerpt:
      "Value in this price band is defined less by hype and more by battery confidence, charging speed, and everyday usability.",
    readTime: "7 min read",
    tags: ["EV", "Budget", "Used Cars"],
    content: [
      "The strongest used EV options under this budget line tend to be the cars with the least friction in daily life. That usually means dependable charging behavior, proven software, and a battery reputation buyers can verify quickly.",
      "Range figures alone are not enough. The better buy is often the car with the cleaner ownership record and more realistic urban efficiency.",
      "A useful marketplace should help buyers compare practical value rather than flooding the page with decorative metrics.",
    ],
  },
  {
    slug: "top-10-car-shows-around-london",
    title: "Top 10 Car Shows and Events in & around London",
    category: "Car News",
    author: "Ali Tufan",
    date: "April 20, 2023",
    image: blogImageThree,
    excerpt:
      "From enthusiast meetups to premium manufacturer showcases, the strongest events blend community, product discovery, and real-world culture.",
    readTime: "4 min read",
    tags: ["Events", "Community", "London"],
    content: [
      "Car culture events remain useful because they create direct comparison opportunities that static listings never fully replace. People see proportion, finish quality, and real-world modifications in person.",
      "For brands and dealers, these shows also work as trust builders. The conversation around a car is often just as persuasive as the specification sheet itself.",
      "A well-designed digital platform should reflect that same clarity: fewer distractions, stronger comparison, and more confidence in the next action.",
    ],
  },
  {
    slug: "golf-vs-polo-volkswagen-classics",
    title: "Golf vs Polo: A Comparison of Two Volkswagen Classics",
    category: "Buying Guides",
    author: "Ali Tufan",
    date: "April 20, 2023",
    image: blogImageOne,
    excerpt:
      "The better car depends less on badge perception and more on how much space, comfort, and road-speed stability you actually need.",
    readTime: "5 min read",
    tags: ["Comparison", "Volkswagen", "Hatchback"],
    content: [
      "The Golf usually wins on maturity, space, and long-distance comfort, while the Polo often wins on simplicity, lower running costs, and easier city use.",
      "That distinction sounds obvious, but it matters because buyers frequently overpay for size or underbuy for comfort when they look only at headline price.",
      "The right listing should make that tradeoff visible in seconds: dimensions, practical ownership cost, and intended use should be easy to read.",
    ],
  },
  {
    slug: "best-used-cars-insurance-policies",
    title: "The Best Used Cars For Affordable Insurance Policies",
    category: "Insurance Advice",
    author: "Ali Tufan",
    date: "April 20, 2023",
    image: blogImageTwo,
    excerpt:
      "Insurance-friendly used cars tend to balance repair cost, theft profile, and driver demographics better than buyers expect.",
    readTime: "6 min read",
    tags: ["Insurance", "Used Cars", "Costs"],
    content: [
      "Affordable insurance usually comes from predictable repair cost and lower claims risk, not from one magic badge or body style.",
      "Buyers who ignore insurance until the end often underestimate the monthly swing it can create. A slightly more practical model can outperform a cheaper purchase price over a year.",
      "That is why strong inventory and blog content should place running-cost decisions close to the top of the page rather than burying them.",
    ],
  },
  {
    slug: "battle-of-the-suvs-kia-sportage-vs-hyundai-tucson",
    title: "Battle of the SUVs - Kia Sportage vs Hyundai Tucson",
    category: "Buying Guides",
    author: "Ali Tufan",
    date: "April 20, 2023",
    image: blogImageThree,
    excerpt:
      "These two SUVs overlap heavily on paper, so interior feel, drivetrain choice, and pricing discipline become the real decision points.",
    readTime: "6 min read",
    tags: ["SUV", "Comparison", "Family Cars"],
    content: [
      "When two cars are this close in size and price, the better decision usually comes from cabin quality, noise control, and whether the trim level actually includes the features you care about.",
      "The Sportage and Tucson both make sense, but the value winner changes depending on route mix, passenger needs, and whether hybrid efficiency is part of the brief.",
      "A better digital buying experience surfaces those differences immediately rather than relying on badge familiarity alone.",
    ],
  },
  {
    slug: "ceramic-coating-vs-wax-what-lasts-longer",
    title: "Ceramic Coating vs Wax: What Actually Lasts Longer",
    category: "Auto Detailing",
    author: "Ali Tufan",
    date: "April 20, 2023",
    image: blogImageOne,
    excerpt:
      "Protection products are not interchangeable, and the right choice depends on maintenance habits more than marketing claims.",
    readTime: "5 min read",
    tags: ["Detailing", "Paint Care", "Maintenance"],
    content: [
      "Ceramic coatings and waxes solve the same problem at different levels. Wax is cheaper and easier to refresh, while ceramic coatings ask for more preparation and usually reward buyers with longer protection.",
      "The mistake most owners make is comparing durability claims without comparing maintenance habits. A product that lasts longer on paper may still be the wrong choice if the owner will not prep, wash, and maintain the finish correctly.",
      "A useful ownership guide should help buyers choose the process they will actually keep up with, not the most impressive label on a bottle.",
    ],
  },
  {
    slug: "how-to-restore-headlights-without-damaging-finish",
    title: "How to Restore Headlights Without Damaging the Finish",
    category: "Auto Detailing",
    author: "Ali Tufan",
    date: "April 20, 2023",
    image: blogImageTwo,
    excerpt:
      "A clean headlight restoration depends on controlled sanding, proper sealing, and avoiding shortcuts that cloud the lens again.",
    readTime: "4 min read",
    tags: ["Detailing", "Headlights", "DIY"],
    content: [
      "Headlight restoration works best when oxidation is removed gradually and the lens is protected properly afterward. Most poor results come from rushing the sanding steps or skipping the final seal.",
      "The goal is not only a clearer lens on day one. It is a finish that stays clearer after rain, washing, and ordinary road use.",
      "Good guides should show buyers where the real risk is: not effort, but using aggressive methods without proper protection at the end.",
    ],
  },
  {
    slug: "interior-detailing-checklist-before-selling-car",
    title: "Interior Detailing Checklist Before Selling Your Car",
    category: "Auto Detailing",
    author: "Ali Tufan",
    date: "April 20, 2023",
    image: blogImageThree,
    excerpt:
      "A cleaner cabin increases trust faster than most cosmetic upgrades because buyers read wear and smell as ownership signals.",
    readTime: "5 min read",
    tags: ["Detailing", "Interior", "Selling"],
    content: [
      "Before listing a car, the interior should feel neutral, clean, and documented. Buyers notice dust, worn trim, and lingering smells faster than sellers expect.",
      "That is why good pre-sale detailing starts with surfaces and storage areas, then moves into fabric, leather, glass, and odor control.",
      "The objective is straightforward: reduce friction in the first viewing and make the car feel easier to trust from the first minute.",
    ],
  },
];

export const getBlogPostBySlug = (slug: string) =>
  blogPosts.find((post) => post.slug === slug) ?? null;

export const getRelatedBlogPosts = (slug: string, limit = 3) => {
  const currentPost = getBlogPostBySlug(slug);

  if (!currentPost) {
    return [];
  }

  const sameCategory = blogPosts.filter(
    (post) => post.slug !== slug && post.category === currentPost.category
  );
  const others = blogPosts.filter(
    (post) => post.slug !== slug && post.category !== currentPost.category
  );

  return [...sameCategory, ...others].slice(0, limit);
};

export const getRecentBlogPosts = (limit = 3, excludeSlug?: string) =>
  blogPosts.filter((post) => post.slug !== excludeSlug).slice(0, limit);

export const blogSidebarCategories: BlogSidebarCategory[] = [
  { label: "Accessories", count: 24 },
  { label: "Body Kit", count: 18 },
  { label: "Interior", count: 32 },
  { label: "Exterior", count: 21 },
  { label: "Sound", count: 11 },
  { label: "Fuel Systems", count: 9 },
  { label: "Wheels", count: 14 },
  { label: "Oil & Filters", count: 7 },
];

export const blogSidebarTags = [
  "Sound",
  "Interior",
  "Exterior",
  "Fuel System",
  "Wheels",
];
