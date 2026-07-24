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
    id: "food",
    title: "Food Area & Processing Cleaning",
    shortDesc: "HACCP-compliant sanitation, grease extraction, and food safety hygiene for production zones.",
    fullDesc: "Specialised deep cleaning and pathogen management designed for food manufacturing plants, commercial kitchens, preparation areas, and dining facilities to eliminate cross-contamination and guarantee food safety compliance.",
    iconName: "Utensils",
    badge: "HACCP Compliant",
    standards: ["HACCP Food Safety Standards", "TGA-Approved Food-Safe Chemicals", "Bio-Film Removal Protocol"],
    features: [
      "Commercial kitchen & food prep equipment deep degreasing",
      "Exhaust canopy, grease trap & ventilation duct cleaning",
      "ATP bioluminescence testing for surface cleanliness verification",
      "Cold room, walk-in freezer & food storage wall sanitisation"
    ],
    idealFor: ["Food Production Plants", "Commercial Kitchens", "Bakeries & Bottling Plants", "Food Courts"],
    isoCertified: true
  },
  {
    id: "hospital",
    title: "Hospital Cleaning",
    shortDesc: "Kitchen grease hood degreasing, dining floor deep scrub, and bar zone sanitisation.",
    fullDesc: "Ensuring food safety compliance for restaurants, hotels, clubs, and event venues with deep grease extraction and overnight front/back of house cleaning.",
    iconName: "Hospital",
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
    id: "government",
    title: "Government Cleaning",
    shortDesc: "High-security, compliant facility sanitisation and maintenance for public sector agencies.",
    fullDesc: "Specialised cleaning solutions designed for municipal offices, courthouses, civic centres, and secure public facilities adhering to strict government procurement, compliance, and security clearance protocols.",
    iconName: "Building2", 
    badge: "Security Cleared",
    standards: ["Police Cleared Personnel", "Strict ISO & WHS Compliance", "Secure Access Protocols"],
    features: [
      "Vetted, background-checked cleaning personnel",
      "Public assembly & high-traffic civic area sanitisation",
      "Secure document area & council chamber maintenance",
      "Eco-friendly green cleaning for public sector sustainability targets"
    ],
    idealFor: ["Civic Centres", "Courthouses", "Municipal Offices", "Government Agencies"],
    isoCertified: true
  }
];
