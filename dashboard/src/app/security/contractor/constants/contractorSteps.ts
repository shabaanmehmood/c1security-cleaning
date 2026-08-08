"use client"
import {
  FaUserCheck,
  FaClipboardList,
  FaHandshake,
  FaMapMarkedAlt,
  FaFileAlt,
  FaCreditCard,
} from "react-icons/fa";

export const contractorSteps = [
  {
    step: "Sign Up & Verify",
    desc: "Register your company, verify your ABN, and set up your business profile.",
    icon: FaUserCheck,
  },
  {
    step: "Post a Job",
    desc: "Fill in location, time, rate, required licenses, and special instructions.",
    icon: FaClipboardList,
  },
  {
    step: "Get Matched Instantly",
    desc: "C1 finds and notifies qualified guards nearby. View profiles, licenses, and ratings.",
    icon: FaHandshake,
  },
  {
    step: "Track in Real Time",
    desc: "Monitor guard check-in, job progress, and activity reports live on your dashboard.",
    icon: FaMapMarkedAlt,
  },
  {
    step: "Review Reports",
    desc: "Access all guard reports and incident logs with photos, timestamps, and GPS verification.",
    icon: FaFileAlt,
  },
  {
    step: "Pay & Rate",
    desc: "Choose prepay or invoice (30-day credit). Rate guards after each job.",
    icon: FaCreditCard,
  },
];
