"use client"
import {
  FaUserCheck,
  FaSearch,
  FaHandshake,
  FaMapMarkerAlt,
  FaClipboardCheck,
  FaDollarSign,
} from "react-icons/fa";

export const guardSteps = [
  {
    step: "Register & Verify",
    desc: "Sign up, upload your security license, RSA, ABN, and ID. Once approved, your profile goes live.",
    icon: FaUserCheck,
  },
  {
    step: "Find Jobs Instantly",
    desc: "Browse or get notifications for nearby jobs that match your license and availability.",
    icon: FaSearch,
  },
  {
    step: "Apply & Get Hired",
    desc: "Apply with one tap. Once accepted, view job details, shift timing, and location.",
    icon: FaHandshake,
  },
  {
    step: "Check-In Onsite",
    desc: "Confirm your location with GPS and upload a live photo for verification.",
    icon: FaMapMarkerAlt,
  },
  {
    step: "Start Shift & Report",
    desc: "Log daily reports, incidents, and observations. Upload photos and notes through the app.",
    icon: FaClipboardCheck,
  },
  {
    step: "Finish & Get Paid",
    desc: "C1 tracks your hours and sends payment after employer confirmation — instantly or same day.",
    icon: FaDollarSign,
  },
];
