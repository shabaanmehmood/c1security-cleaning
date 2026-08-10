"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CityButton from "../Citybutton";
import {
  ChevronDown,
  Building2,
  MapPin,
  ArrowRight,
  LogIn,
  UserPlus,
  LogOut,
  Shield,
  User as UserIcon,
} from "lucide-react";

import { useAuthStore } from "@/store/useAuthStore";
import { AuthService } from "@/lib/auth.service";
import { useRouter } from "next/navigation";

const SERVICES_DATA = [
  { id: "commercial", title: "Commercial Cleaning", shortDesc: "Office and corporate spaces" },
  { id: "medical", title: "Medical Cleaning", shortDesc: "Hospitals and clinics" },
  { id: "industrial", title: "Industrial Cleaning", shortDesc: "Warehouses and factories" },
  { id: "hospitality", title: "Hospitality Care", shortDesc: "Hotels and restaurants" },
  { id: "school", title: "Educational Cleaning", shortDesc: "Schools and universities" },
  { id: "carpet", title: "Carpet & Floor Care", shortDesc: "Deep cleaning solutions" },
];

const CITIES = [
  { name: "Brisbane", slug: "brisbane" },
  { name: "Gold Coast", slug: "gold-coast" },
  { name: "Sunshine Coast", slug: "sunshine-coast" },
  { name: "Townsville", slug: "townsville" },
  { name: "Cairns", slug: "cairns" },
  { name: "Toowoomba", slug: "toowoomba" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [megaMenu, setMegaMenu] = useState<"services" | "locations" | null>(null);
    const router=useRouter();
  const { user, setUser } = useAuthStore();
  


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setMegaMenu(null);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`fixed inset-x-0 z-50 flex justify-center px-3 sm:px-6 transition-all duration-500 ${
        scrolled ? "top-3" : "top-0"
      }`}
    >
      <motion.div
        layout
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`
          w-full
          max-w-7xl
          flex
          items-center
          justify-between
          transition-all
          duration-500
          ${
            scrolled || isOpen
              ? `
                rounded-3xl lg:rounded-full
                px-4 lg:px-6 xl:px-8
                py-2.5 lg:py-3
                bg-white/90
                backdrop-blur-xl
                border
                border-slate-200/70
                shadow-xl
                shadow-black/5
              `
              : `
                px-2
                py-5 lg:py-6
                bg-transparent
                border-transparent
                shadow-none
              `
          }
        `}
      >
        {/* Logo */}
        <Link href="/cleaning" className="flex items-center gap-2 shrink-0 z-50">
          <Image
            src="/C1_navbar_logo.png"
            alt="C1SCURITY Logo"
            width={140}
            height={36}
            className="h-8 lg:h-9 xl:h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-7 text-sm xl:text-base">
          <Link href="/" className="group relative">
            <span
              className={`font-medium transition-colors duration-300 ${
                pathname === "/" ? "text-blue-600" : "text-slate-700 group-hover:text-blue-600"
              }`}
            >
              {`<- Home`}
            </span>
            {pathname === "/" && (
              <motion.span
                layoutId="navbar-active"
                className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-blue-600"
                transition={{ duration: 0.3 }}
              />
            )}
          </Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setMegaMenu("services")}
            onMouseLeave={() => setMegaMenu(null)}
          >
            <button className="flex items-center gap-1 font-medium text-slate-700 hover:text-blue-600 transition-colors py-1">
              <span>Services</span>
              <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-300 ${megaMenu === "services" ? "rotate-180 text-blue-600" : ""}`} />
            </button>

            {megaMenu === "services" && (
              <div className="absolute top-full -left-12 w-[560px] mt-2 bg-white border border-slate-200/80 rounded-2xl p-3 z-50 shadow-2xl grid grid-cols-2 gap-1 animate-in fade-in duration-200">
                {SERVICES_DATA.map((service) => (
                  <Link
                    key={service.id}
                    href={`/cleaning/services#${service.id}`}
                    className="flex items-center gap-2.5 rounded-xl px-2.5 py-2 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0 group-hover/item:scale-105 transition-transform">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-700 group-hover/item:text-blue-600 transition-colors">
                        {service.title}
                      </div>
                      <div className="text-xs text-slate-500 font-normal line-clamp-1 mt-0.5">
                        {service.shortDesc}
                      </div>
                    </div>
                  </Link>
                ))}
                <div className="col-span-2 pt-2.5 mt-1 border-t border-slate-100 flex items-center justify-between text-xs px-2">
                  <span className="text-slate-500 font-medium">ISO 9001 & TGA Accredited Sanitisation</span>
                  <Link href="/cleaning/services" className="text-blue-600 hover:text-blue-700 flex items-center gap-1 font-bold">
                    View All Services <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Locations Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setMegaMenu("locations")}
            onMouseLeave={() => setMegaMenu(null)}
          >
            <button className="flex items-center gap-1 font-medium text-slate-700 hover:text-blue-600 transition-colors py-1">
              <span>Locations</span>
              <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-300 ${megaMenu === "locations" ? "rotate-180 text-blue-600" : ""}`} />
            </button>

            {megaMenu === "locations" && (
              <div className="absolute top-full -left-20 w-[500px] mt-2 bg-white border border-slate-200/80 rounded-2xl p-3 z-50 shadow-2xl animate-in fade-in duration-200">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2 px-2 pt-1 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5" /> 20 Commercial Hubs Across Queensland
                </div>
                <div className="grid grid-cols-3 gap-1">
                  {CITIES.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/cleaning/${city.slug}`}
                      className="flex items-center justify-between rounded-xl px-2.5 py-1.5 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    >
                      <span>{city.name}</span>
                      <span className="text-[10px] text-slate-400 font-mono">QLD</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/cleaning/industries" className="group relative">
            <span
              className={`font-medium transition-colors duration-300 ${
                pathname === "/cleaning/industries" ? "text-blue-600" : "text-slate-700 group-hover:text-blue-600"
              }`}
            >
              Industries
            </span>
            {pathname === "/cleaning/industries" && (
              <motion.span
                layoutId="navbar-active"
                className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-blue-600"
                transition={{ duration: 0.3 }}
              />
            )}
          </Link>

          <Link href="/cleaning/career" className="group relative">
            <span
              className={`font-medium transition-colors duration-300 ${
                pathname === "/cleaning/careers" ? "text-blue-600" : "text-slate-700 group-hover:text-blue-600"
              }`}
            >
              Careers
            </span>
            {pathname === "/cleaning/career" && (
              <motion.span
                layoutId="navbar-active"
                className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-blue-600"
                transition={{ duration: 0.3 }}
              />
            )}
          </Link>

          <Link href="/cleaning/about" className="group relative">
            <span
              className={`font-medium transition-colors duration-300 ${
                pathname === "/cleaning/about" ? "text-blue-600" : "text-slate-700 group-hover:text-blue-600"
              }`}
            >
              About
            </span>
            {pathname === "/cleaning/about" && (
              <motion.span
                layoutId="navbar-active"
                className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-blue-600"
                transition={{ duration: 0.3 }}
              />
            )}
          </Link>
        </nav>

        {/* CTA + Auth Buttons (Desktop) */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-3 text-xs xl:text-sm">
          <CityButton />

          
            

          <Link
            href="/cleaning/get-a-quote"
            className="
              shrink-0
              rounded-full
              bg-blue-600
              px-4 xl:px-5
              py-2 xl:py-2.5
              font-semibold
              text-white
              shadow-md
              shadow-blue-600/20
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-blue-700
              hover:shadow-lg
              hover:shadow-blue-600/30
            "
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="lg:hidden z-50 p-2 text-slate-700 focus:outline-none"
        >
          <div className="w-6 h-5 flex flex-col justify-between items-center relative">
            <span
              className={`h-0.5 w-full bg-slate-800 rounded-full transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-slate-800 rounded-full transition-all duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-0.5 w-full bg-slate-800 rounded-full transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            />
          </div>
        </button>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-full left-0 right-0 mt-2 p-6 bg-white/95 backdrop-blur-xl border border-slate-200/70 rounded-3xl shadow-2xl overflow-hidden lg:hidden flex flex-col gap-6"
            >
              <nav className="flex flex-col gap-4">
                <Link
                  href="/"
                  className={`text-lg font-medium transition-colors ${
                    pathname === "/" ? "text-blue-600" : "text-slate-700"
                  }`}
                >
                  Home
                </Link>

                <Link
                  href="/cleaning/services"
                  className={`text-lg font-medium transition-colors flex items-center justify-between ${
                    pathname.startsWith("/cleaning/services") ? "text-blue-600" : "text-slate-700"
                  }`}
                >
                  <span>Services</span>
                  <span className="text-xs text-blue-600 font-bold">View All</span>
                </Link>

                <Link
                  href="/cleaning/industries"
                  className={`text-lg font-medium transition-colors ${
                    pathname === "/cleaning/industries" ? "text-blue-600" : "text-slate-700"
                  }`}
                >
                  Industries
                </Link>

                <div className="py-2 border-y border-slate-100">
                  <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
                    Locations (20 Queensland Cities)
                  </div>
                  <div className="grid grid-cols-2 gap-1 max-h-36 overflow-y-auto">
                    {CITIES.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/cleaning/${c.slug}`}
                        className="flex items-center rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-colors duration-200"
                      >
                        {c.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  href="/cleaning/career"
                  className={`text-lg font-medium transition-colors ${
                    pathname === "/cleaning/careers" ? "text-blue-600" : "text-slate-700"
                  }`}
                >
                  Careers
                </Link>

                <Link
                  href="/cleaning/about"
                  className={`text-lg font-medium transition-colors ${
                    pathname === "/cleaning/about" ? "text-blue-600" : "text-slate-700"
                  }`}
                >
                  About
                </Link>
              </nav>

              <hr className="border-slate-200" />

              <div className="flex flex-col gap-3">
                <div className="flex justify-start pb-2">
                  <CityButton />
                </div>

              
                <Link
                  href="/cleaning/get-a-quote"
                  className="w-full text-center rounded-full bg-blue-600 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700"
                >
                  Get a Quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.header>
  );
}