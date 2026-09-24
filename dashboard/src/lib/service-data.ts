
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
    shortDesc:
      "Professional cleaning and facility maintenance for offices, commercial buildings, and busy workplaces.",
    fullDesc:
      "Our commercial cleaning service provides reliable cleaning and maintenance for corporate buildings, shared facilities, and high-traffic commercial spaces across Australia.",
    iconName: "Building2",
    badge: "Professional Service",
    standards: [
      "Consistent Cleaning Standards",
      "Regular Quality Checks",
      "Environmentally Responsible Cleaning",
    ],
    features: [
      "Flexible daily, weekly, or regular cleaning schedules",
      "Cleaning and disinfecting frequently used areas",
      "Floor cleaning and general floor care",
      "Dedicated support and regular service checks",
    ],
    idealFor: ["Corporate Hubs", "Multi-Tenant Towers", "Financial Centers"],
    isoCertified: true,
  },

  {
    id: "office",
    title: "Office Cleaning",
    shortDesc:
      "Reliable cleaning for workspaces, meeting rooms, kitchens, and shared areas to keep workplaces fresh and comfortable.",
    fullDesc:
      "Our office cleaning services help maintain clean, fresh, and comfortable work environments. We carefully clean workspaces, glass areas, shared facilities, kitchens, and other commonly used areas.",
    iconName: "Briefcase",
    badge: "Workplace Ready",
    standards: [
      "Flexible Cleaning Times",
      "Detailed Cleaning",
      "Minimal Workplace Disruption",
    ],
    features: [
      "Cleaning desks, workspaces, and frequently used surfaces",
      "Careful cleaning of meeting rooms and glass areas",
      "Waste and recycling management",
      "Fresh and comfortable workplace environments",
    ],
    idealFor: ["Tech Hubs", "Law Firms", "Marketing Agencies", "Co-working Spaces"],
    isoCertified: true,
  },

  {
    id: "medical",
    title: "Medical Cleaning",
    shortDesc:
      "Detailed cleaning and disinfection for clinics, healthcare facilities, treatment rooms, and other medical environments.",
    fullDesc:
      "Our medical cleaning services are designed for clinics, dental practices, treatment rooms, and other healthcare facilities. We provide detailed cleaning and disinfection to help maintain clean and safe environments.",
    iconName: "Stethoscope",
    badge: "Healthcare Cleaning",
    standards: [
      "Detailed Cleaning Procedures",
      "Careful Hygiene Practices",
      "Consistent Quality Checks",
    ],
    features: [
      "Detailed cleaning of treatment and patient areas",
      "Safe handling of general healthcare waste",
      "Cleaning of healthcare areas and surfaces",
      "Regular cleaning checks to maintain high standards",
    ],
    idealFor: ["Hospitals", "Dental Clinics", "Surgical Centers", "Pathology Labs"],
    isoCertified: true,
  },

  {
    id: "industrial",
    title: "Industrial Cleaning",
    shortDesc:
      "Heavy-duty cleaning and maintenance for factories, workshops, manufacturing facilities, and industrial workplaces.",
    fullDesc:
      "Our industrial cleaning services are designed for manufacturing facilities, workshops, production areas, and other large industrial environments where thorough cleaning and workplace safety are important.",
    iconName: "Factory",
    badge: "Heavy Duty Cleaning",
    standards: [
      "Workplace Safety Focus",
      "Thorough Cleaning",
      "Responsible Waste Handling",
    ],
    features: [
      "Deep cleaning of industrial floors and work areas",
      "Cleaning of high and difficult-to-reach areas",
      "Removal of dirt, oil, and built-up residue",
      "Safe response to cleaning and spill requirements",
    ],
    idealFor: ["Manufacturing Plants", "Chemical Depots", "Assembly Facilities"],
    isoCertified: true,
  },

  {
    id: "warehouse",
    title: "Warehouse Cleaning",
    shortDesc:
      "Reliable cleaning for warehouses, storage areas, loading spaces, and distribution facilities.",
    fullDesc:
      "Our warehouse cleaning services help keep storage and distribution areas clean, organised, and safe. We focus on floors, storage areas, loading spaces, and other commonly used sections.",
    iconName: "Warehouse",
    badge: "Logistics Ready",
    standards: [
      "Regular Cleaning",
      "Dust and Dirt Control",
      "Workplace Safety Focus",
    ],
    features: [
      "Cleaning high storage and shelving areas",
      "Floor cleaning and removal of marks and dirt",
      "Loading area cleaning and waste removal",
      "Cleaning of walkways, storage areas, and workspaces",
    ],
    idealFor: ["Logistics Depots", "Fulfillment Centers", "Cold Storage Plants"],
    isoCertified: true,
  },

  {
    id: "school",
    title: "School Cleaning",
    shortDesc:
      "Safe and thorough cleaning for classrooms, offices, shared areas, sports facilities, and educational environments.",
    fullDesc:
      "Our school cleaning services help create clean, safe, and comfortable learning environments for schools and educational institutions. We provide regular cleaning and detailed cleaning during quieter periods.",
    iconName: "GraduationCap",
    badge: "Education Ready",
    standards: [
      "Safe Cleaning Practices",
      "Detailed Hygiene Care",
      "Flexible School Schedules",
    ],
    features: [
      "Cleaning desks, chairs, classrooms, and shared areas",
      "Careful cleaning of specialist learning areas",
      "Cleaning of sports and activity areas",
      "Detailed cleaning of kitchens, bathrooms, and high-use areas",
    ],
    idealFor: [
      "Private Schools",
      "Universities",
      "Grammar Academies",
      "TAPE Campuses",
    ],
    isoCertified: true,
  },

  {
    id: "food",
    title: "Food Area & Processing Cleaning",
    shortDesc:
      "Thorough cleaning for food facilities, kitchens, preparation areas, storage spaces, and processing environments.",
    fullDesc:
      "Our food area and processing cleaning services are designed for food facilities, commercial kitchens, preparation areas, and processing spaces. We focus on detailed cleaning and hygiene to help maintain a clean and safe environment.",
    iconName: "Utensils",
    badge: "Food Area Cleaning",
    standards: [
      "High Hygiene Standards",
      "Detailed Cleaning",
      "Regular Quality Checks",
    ],
    features: [
      "Deep cleaning of kitchen and food preparation areas",
      "Cleaning of cooking and ventilation areas",
      "Detailed cleaning checks for commonly used surfaces",
      "Cleaning of storage, cold areas, and preparation spaces",
    ],
    idealFor: [
      "Food Production Plants",
      "Commercial Kitchens",
      "Bakeries & Bottling Plants",
      "Food Courts",
    ],
    isoCertified: true,
  },

  {
    id: "hospital",
    title: "Hospital Cleaning",
    shortDesc:
      "Detailed cleaning for hospitals, healthcare facilities, patient areas, shared spaces, and support areas.",
    fullDesc:
      "Our hospital cleaning services provide detailed cleaning and disinfection for hospitals and other healthcare environments. We help maintain clean, comfortable, and safe areas for patients, visitors, and staff.",
    iconName: "Hospital",
    badge: "Healthcare Ready",
    standards: [
      "Detailed Cleaning",
      "High Hygiene Standards",
      "Regular Quality Checks",
    ],
    features: [
      "Cleaning patient rooms and healthcare areas",
      "Cleaning shared spaces and frequently used areas",
      "Bathroom and floor cleaning",
      "Cleaning kitchens, staff areas, and support spaces",
    ],
    idealFor: ["Hospitals", "Healthcare Facilities", "Medical Centres", "Care Facilities"],
    isoCertified: true,
  },

  {
    id: "government",
    title: "Government Cleaning",
    shortDesc:
      "Professional cleaning and maintenance for government offices, public buildings, civic facilities, and shared spaces.",
    fullDesc:
      "Our government cleaning services are designed for public offices, courthouses, civic buildings, and other government facilities. We provide reliable cleaning while respecting workplace safety, access, and operational requirements.",
    iconName: "Building2",
    badge: "Professional Service",
    standards: [
      "Workplace Safety Focus",
      "Consistent Cleaning Standards",
      "Secure Access Procedures",
    ],
    features: [
      "Professional and reliable cleaning staff",
      "Cleaning of public and high-traffic areas",
      "Careful cleaning of offices and meeting spaces",
      "Environmentally responsible cleaning practices",
    ],
    idealFor: [
      "Civic Centres",
      "Courthouses",
      "Municipal Offices",
      "Government Agencies",
    ],
    isoCertified: true,
  },
];
