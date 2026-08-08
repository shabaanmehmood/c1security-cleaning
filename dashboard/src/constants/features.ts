import {
  FaMapMarkedAlt,
  FaRegFileAlt,
  FaBell,
  FaComments,
  FaStar,
  FaShieldAlt,
} from "react-icons/fa";

export type Feature = {
  icon: React.ElementType;
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    icon: FaMapMarkedAlt,
    title: "On-Site Check-In & Tracking",
    description:
      "Guards must check in using GPS + live photo verification. Employers can view attendance in real time.",
  },
  {
    icon: FaRegFileAlt,
    title: "Daily Activity & Incident Reporting",
    description:
      "Submit DARs and incident reports with time, location, notes, and media uploads — visible instantly to employers.",
  },
  {
    icon: FaBell,
    title: "SOS & Emergency Alerts",
    description:
      "Guards can trigger SOS during emergencies. Instant alerts are sent with live GPS tracking to all parties.",
  },
  {
    icon: FaComments,
    title: "Live Chat & File Sharing",
    description:
      "Encrypted in-app communication with support for text, images, documents, and location sharing.",
  },
  {
    icon: FaStar,
    title: "Ratings & Reviews",
    description:
      "Rating system powers a guard ranking algorithm for future job prioritization.",
  },
  {
    icon: FaShieldAlt,
    title: "Compliance & Safety Built In",
    description:
      "License verification, incident reporting, SOS alerts, and document management with expiry tracking.",
  },
];
