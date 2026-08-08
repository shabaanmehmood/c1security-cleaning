"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CITIES = [
  "Brisbane",
  "Gold Coast",
  "Sunshine Coast",
  "Townsville",
  "Cairns",
  "Toowoomba",
  "Rockhampton",
  "Mackay",
  "Gladstone",
  "Bundaberg",
  "Hervey Bay",
  "Maryborough",
  "Mount Isa",
  "Emerald",
  "Gympie",
  "Warwick",
  "Charters Towers",
  "Kingaroy",
  "Roma",
  "Moranbah",
];

const slugify = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-");

export default function CityButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isFilled = isOpen || isHovered;

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileTap={{ scale: 0.97 }}
        className="relative flex items-center gap-2 overflow-hidden rounded-full border border-slate-200 bg-slate-50/80 px-4 py-2 text-sm font-medium text-slate-700 focus:outline-none shadow-sm"
        aria-expanded={isOpen}
      >
        {/* Left-to-Right Water Fill Background Layer */}
        <motion.span
          className="absolute inset-0 bg-blue-600 z-0"
          initial={{ width: "0%" }}
          animate={{ width: isFilled ? "100%" : "0%" }}
          transition={{
            duration: 0.45,
            ease: [0.4, 0, 0.2, 1], // Smooth fluid ease curve
          }}
        />

        {/* Button Content (Z-indexed above the fill layer) */}
        <MapPin
          className={`relative z-10 h-4 w-4 shrink-0 transition-colors duration-300 ${
            isFilled ? "text-white" : "text-blue-600"
          }`}
        />

        <span
          className={`relative z-10 transition-colors duration-300 ${
            isFilled ? "text-white" : "text-slate-700"
          }`}
        >
          Select City
        </span>

        <ChevronDown
          className={`relative z-10 h-4 w-4 transition-all duration-300 ${
            isOpen ? "rotate-180" : ""
          } ${isFilled ? "text-white" : "text-slate-500"}`}
        />
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
            }}
            className="absolute left-0 lg:right-0 lg:left-auto mt-2 w-56 rounded-2xl bg-white p-2 shadow-2xl border border-slate-200/80 z-50 overflow-hidden"
          >
            <div className="max-h-64 overflow-y-auto pr-1 space-y-1 custom-scrollbar">
              {CITIES.map((city) => {
                const slug = slugify(city);

                return (
                  <Link
                    key={city}
                    href={`/cleaning/${slug}`}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-colors duration-200"
                  >
                    {city}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}