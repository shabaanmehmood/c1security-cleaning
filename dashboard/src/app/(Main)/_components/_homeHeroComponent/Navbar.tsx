"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CityButton from "../Citybutton";

const navItems = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contacts" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu automatically when changing routes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`fixed inset-x-0 z-50 flex justify-center px-4 sm:px-6 transition-all duration-500 ${
        scrolled ? "top-4" : "top-0"
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
                px-6 lg:px-8
                py-3
                bg-white/90
                backdrop-blur-xl
                border
                border-slate-200/70
                shadow-xl
                shadow-black/5
              `
              : `
                px-2
                py-6
                bg-transparent
                border-transparent
                shadow-none
              `
          }
        `}
      >
        {/* ---------------- Logo ---------------- */}

        <Link
          href="/"
          className="flex items-center gap-2 shrink-0 z-50"
        >
          <Image
            src="/Logo.svg"
            alt="C1SCURITY Logo"
            width={160}
            height={40}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* ---------------- Desktop Navigation ---------------- */}

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="group relative"
              >
                <span
                  className={`font-medium transition-colors duration-300 ${
                    active
                      ? "text-blue-600"
                      : "text-slate-700 group-hover:text-blue-600"
                  }`}
                >
                  {item.title}
                </span>

                <motion.span
                  layoutId="navbar-active"
                  className={`
                    absolute
                    -bottom-2
                    left-0
                    h-[2px]
                    rounded-full
                    bg-blue-600
                  `}
                  initial={false}
                  animate={{
                    width: active ? "100%" : "0%",
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                />

                {!active && (
                  <span
                    className="
                      absolute
                      left-0
                      -bottom-2
                      h-[2px]
                      w-0
                      rounded-full
                      bg-blue-600
                      transition-all
                      duration-300
                      group-hover:w-full
                    "
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* ---------------- CTA + CityButton (Desktop) ---------------- */}

        <div className="hidden lg:flex items-center gap-4">
          {/* 📍 Placed here on Desktop */}
          <CityButton />

          <Link
            href="/login"
            className="font-medium text-slate-700 transition hover:text-blue-600"
          >
            Login
          </Link>

          <Link
            href="/get-a-quote"
            className="
              rounded-full
              bg-blue-600
              px-6
              py-3
              font-semibold
              text-white
              shadow-lg
              shadow-blue-600/20
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-blue-700
              hover:shadow-xl
              hover:shadow-blue-600/30
            "
          >
            Get a Quote
          </Link>
        </div>

        {/* ---------------- Mobile Hamburger Button ---------------- */}

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

        {/* ---------------- Mobile Menu Drawer ---------------- */}

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
                {navItems.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`text-lg font-medium transition-colors ${
                        active ? "text-blue-600" : "text-slate-700"
                      }`}
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </nav>

              <hr className="border-slate-200" />

              <div className="flex flex-col gap-3">
                {/* 📍 Placed here on Mobile */}
                <div className="flex justify-start pb-2">
                  <CityButton />
                </div>

                <Link
                  href="/login"
                  className="w-full text-center py-2.5 font-medium text-slate-700 hover:text-blue-600"
                >
                  Login
                </Link>

                <Link
                  href="/get-a-quote"
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