"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { RiMenuFill } from "react-icons/ri";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";

const NAV_LINKS = [{ href: "/", label: "<- Home", icon: "🏠" },
  { href: "/security/services", label: "Services", icon: "⚙️" },
  { href: "/security/contractor", label: "Contractor", icon: "🧰" },
  { href: "/security/guardPage", label: "Guard", icon: "🛡️" },
];

const Navbar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();
  const { scrollY, scrollYProgress } = useScroll();

  // Prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle auto-closing menu on screen resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Optimized framer-motion scroll handler (doesn't trigger React state re-renders on every scroll pixel)
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 80) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  if (!isMounted) return null;

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Brand Logo */}
        <Link href="/security" className="flex items-center">
          <Image
            src="/C1_navbar_logo.png"
            alt="Control-1 Security Logo"
            width={120}
            height={40}
            priority
            className="h-8 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`o-outfit text-lg font-semibold transition-colors duration-200 ${isActive
                    ? "text-blue-700"
                    : "text-blue-950 hover:text-blue-700"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}

          <Link href="/security/contact">
            <Button className="bg-blue-800 hover:bg-blue-700 text-white o-outfit text-base px-5 py-2 rounded-lg shadow-sm transition-all duration-200 hover:shadow-md cursor-pointer">
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="sm:hidden flex items-center">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="p-2 rounded-lg text-blue-950 hover:bg-slate-100 hover:text-blue-700 transition-colors focus:outline-none">
              <RiMenuFill size={26} />
            </SheetTrigger>

            <SheetContent
              side="left"
              className="w-[280px] sm:w-[350px] bg-gradient-to-b from-blue-50/50 via-white to-white px-6 py-6 flex flex-col justify-between"
            >
              <div>
                <SheetHeader className="text-left pb-6 border-b border-slate-100">
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                  <Link
                    href="/security"
                    onClick={() => setIsOpen(false)}
                    className="inline-block"
                  >
                    <Image
                      src="/tac-logo.png"
                      alt="Control-1 Security Logo"
                      width={130}
                      height={45}
                      className="h-10 w-auto object-contain" // 👈 Added h-10 and object-contain
                    />
                    </Link>
                </SheetHeader>

                {/* Mobile Links */}
                <div className="flex flex-col gap-3 mt-6">
                  {NAV_LINKS.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`o-outfit text-lg font-semibold px-3 py-2 rounded-lg flex items-center gap-3 transition-all duration-200 ${isActive
                            ? "bg-blue-100/70 text-blue-800"
                            : "text-blue-950 hover:bg-slate-100 hover:text-blue-700 hover:translate-x-1"
                          }`}
                      >
                        <span>{link.icon}</span>
                        <span>{link.label}</span>
                      </Link>
                    );
                  })}

                  <div className="my-2 border-t border-slate-200/60" />

                  <Link href="/security/contact" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-blue-800 hover:bg-blue-700 text-white text-lg py-5 rounded-xl shadow-md transition-all o-outfit">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Mobile Drawer Footer */}
              <div className="text-center text-xs text-slate-500 pt-4 border-t border-slate-100">
                © {new Date().getFullYear()} Control-1 Security
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Animated Scroll Progress Indicator */}
      <motion.div
        className="h-[2px] bg-indigo-600 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    </motion.nav>
  );
};

export default Navbar;