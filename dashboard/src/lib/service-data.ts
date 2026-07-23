export interface ServiceDetail {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  badge: string;
  standards: string[];
  features: string[];
  idealFor: string[];
  isoCertified: boolean;
}

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: "commercial",
    title: "Commercial Cleaning",
    shortDesc: "Comprehensive enterprise-grade hygiene and facility maintenance for large multi-tenant sites.",
    fullDesc: "Our flagship commercial cleaning service delivers tailored maintenance blueprints for enterprise buildings, corporate headquarters, and high-footfall commercial spaces across Australia.",
    iconName: "Building2",
    badge: "Enterprise Standard",
    standards: ["ISO 9001 Certified", "Real-time Auditing", "100% Non-Toxic Green Hydro"],
    features: [
      "Customised daily, weekly, or 24/7 rotating shifts",
      "Full touchpoint disinfection & electrostatic spraying",
      "Floor scrub, high-gloss burnishing & polish",
      "Dedicated account manager & digital inspection reporting"
    ],
    idealFor: ["Corporate Hubs", "Multi-Tenant Towers", "Financial Centers"],
    isoCertified: true
  },
  {
    id: "office",
    title: "Office Cleaning",
    shortDesc: "Spotless desk setups, executive boardrooms, and common area sanitisation for productive teams.",
    fullDesc: "Transform work environments with ultra-detailed desk sanitisation, glass partition polishing, HVAC vent dusting, and premium kitchen/breakroom deep cleans.",
    iconName: "Briefcase",
    badge: "High Productivity",
    standards: ["Silent Night Shifts", "HEPA Filtration", "Zero-Disruption Protocol"],
    features: [
      "Keyboard, monitor, and desk surface pathogen eradication",
      "Executive boardroom glass & timber care",
      "Waste segregation & recycling management",
      "Aromatherapy-infused organic air purification"
    ],
    idealFor: ["Tech Hubs", "Law Firms", "Marketing Agencies", "Co-working Spaces"],
    isoCertified: true
  },
  {
    id: "medical",
    title: "Medical Cleaning",
    shortDesc: "Hospital-grade terminal sanitisation & infection control for clinics and surgical rooms.",
    fullDesc: "Adhering strictly to Australian Healthcare Hygiene Standards (NHMRC), our infection-control trained team utilizes hospital-grade TGA-approved disinfectants and colour-coded microfiber systems.",
    iconName: "Stethoscope",
    badge: "TGA Approved",
    standards: ["NHMRC Infection Control", "Cross-Contamination Zero Risk", "ATP Swab Auditing"],
    features: [
      "Operating room & clinical procedure bay terminal cleans",
      "Bio-hazard waste disposal protocols",
      "Ultrasound & medical diagnostic equipment wiping",
      "ATP bioluminescence swab test verification"
    ],
    idealFor: ["Hospitals", "Dental Clinics", "Surgical Centers", "Pathology Labs"],
    isoCertified: true
  },
  {
    id: "industrial",
    title: "Industrial Cleaning",
    shortDesc: "Heavy-duty machinery degreasing, high-pressure washing, and compliant facility maintenance.",
    fullDesc: "Designed for high-impact manufacturing environments, chemical processing plants, and heavy engineering facilities where workplace safety and compliance are non-negotiable.",
    iconName: "Factory",
    badge: "Heavy Duty Safe",
    standards: ["WHS Compliant", "Confined Space Certified", "High-Pressure Hydro Jetting"],
    features: [
      "High-pressure industrial floor degreasing",
      "Overhead gantry & high-beam structural dusting",
      "Machine oil & residue containment cleaning",
      "Hazmat & chemical spill emergency response"
    ],
    idealFor: ["Manufacturing Plants", "Chemical Depots", "Assembly Facilities"],
    isoCertified: true
  },
  {
    id: "warehouse",
    title: "Warehouse Cleaning",
    shortDesc: "High-level racking dusting, automated floor scrubber sweeping, and dock bay sanitisation.",
    fullDesc: "Keep distribution hubs, logistics centers, and cold storage facilities operating safely with specialized ride-on scrubber sweepers and dust containment machinery.",
    iconName: "Warehouse",
    badge: "Logistics Ready",
    standards: ["Ride-on Sweeper Scrubbing", "Dust Containment", "OSHA & WHS Aligned"],
    features: [
      "High-bay pallet rack ledge dusting & cobweb extraction",
      "Epoxy floor scrub & rubber tire mark removal",
      "Loading dock bay degreasing & rubbish clearance",
      "Mezzanine floor & conveyor belt line wiping"
    ],
    idealFor: ["Logistics Depots", "Fulfillment Centers", "Cold Storage Plants"],
    isoCertified: true
  },
  {
    id: "school",
    title: "School Cleaning",
    shortDesc: "Safe, non-toxic sanitisation for classrooms, science labs, auditoriums, and sports facilities.",
    fullDesc: "Creating healthy learning environments for primary, secondary, and tertiary educational institutions with eco-friendly non-toxic agents and police-checked staff.",
    iconName: "GraduationCap",
    badge: "Blue Card Cleared",
    standards: ["Working With Children Cleared", "Non-Toxic Hydro Clean", "Deep Term Breaks"],
    features: [
      "Desk, chair, and white/interactive board sanitisation",
      "Science lab chemical residue neutralisation",
      "Gymnasium hardwood floor buffing & disinfectant spray",
      "High-touch canteen & restroom deep steam cleans"
    ],
    idealFor: ["Private Schools", "Universities", "Grammar Academies", "TAPE Campuses"],
    isoCertified: true
  },
  {
    id: "retail",
    title: "Retail Cleaning",
    shortDesc: "Immaculate showroom floors, mirror-shine glass storefronts, and premium customer spaces.",
    fullDesc: "Elevate customer experience with pristine shopfront glass, polished terrazzo, polished display cabinets, and high-frequency fitting room sanitisation.",
    iconName: "ShoppingBag",
    badge: "Showroom Finish",
    standards: ["Ultra-High Gloss Buffing", "Storefront Glass Specialist", "Pre-Opening Shifts"],
    features: [
      "Streak-free storefront glass & mirror cleaning",
      "High-gloss marble/terrazzo floor diamond polishing",
      "Fitting room steam clean & garment rack dusting",
      "Point of Sale (POS) counter & terminal sanitisation"
    ],
    idealFor: ["Luxury Brands", "Shopping Centers", "Auto Showrooms", "Boutiques"],
    isoCertified: true
  },
  {
    id: "hospitality",
    title: "Hospitality Cleaning",
    shortDesc: "Kitchen grease hood degreasing, dining floor deep scrub, and bar zone sanitisation.",
    fullDesc: "Ensuring food safety compliance for restaurants, hotels, clubs, and event venues with deep grease extraction and overnight front/back of house cleaning.",
    iconName: "Utensils",
    badge: "Food Safety Grade",
    standards: ["HACCP Compliant", "Kitchen Exhaust Extraction", "Overnight Turnaround"],
    features: [
      "Commercial kitchen stainless steel & exhaust canopy degreasing",
      "Dining hall upholstery steam cleaning & floor scrub",
      "Bar counter, tap area, and drain bio-clearing",
      "Cold room & walk-in freezer wall/floor sanitisation"
    ],
    idealFor: ["Hotels", "Restaurants", "RSL Clubs", "Event Venues"],
    isoCertified: true
  },
  {
    id: "childcare",
    title: "Childcare Cleaning",
    shortDesc: "Pediatric-approved, 100% organic sanitisation protecting early learning environments.",
    fullDesc: "Zero harsh chemicals. We use pediatric-grade organic disinfectant steam and UV-C light technology to eliminate 99.999% of germs on toys, play mats, and nap areas.",
    iconName: "Baby",
    badge: "100% Organic Safe",
    standards: ["Pediatric Certified Non-Toxic", "UV-C Light Sterilisation", "Allergen Free"],
    features: [
      "Toy & sensory play equipment non-toxic sanitisation",
      "Play mat steam extraction & allergen removal",
      "Low-level wall & finger mark removal",
      "Nappy change station & high-chair sanitisation"
    ],
    idealFor: ["Childcare Centers", "Early Learning Hubs", "Kindergartens", "Creches"],
    isoCertified: true
  }
];
