"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { RiMenuFill } from "react-icons/ri";
import { Home, Info, PhoneCall, FileText } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../../security/_components/ui/button";

const NAV_LINKS = [
  { href: "/", label: "<- Home", icon: Home },
  { href: "/night-audit/about", label: "About", icon: Info },
  { href: "/night-audit/contacts", label: "Contact", icon: PhoneCall },
];

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();
  const { scrollY, scrollYProgress } = useScroll();

  // Close mobile drawer on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Smooth navbar hiding on scroll down, revealing on scroll up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 80) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Brand Logo */}
        <Link href="/night-audit" className="flex items-center group">
          <Image
            src="/C1_navbar_logo.png"
            alt="Control-1 Security Logo"
            width={120}
            height={40}
            priority
            className="h-8 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
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
                className={`o-outfit text-base font-semibold transition-colors duration-200 relative py-1 ${
                  isActive ? "text-blue-700" : "text-slate-700 hover:text-blue-700"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-700 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}

          <Link href="/night-audit/get-a-qoutes">
            <Button className="bg-blue-800 hover:bg-blue-700 text-white o-outfit text-base px-5 py-2 rounded-lg shadow-sm transition-all duration-200 hover:shadow-md cursor-pointer">
              Get a Quote
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="sm:hidden flex items-center">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="p-2 rounded-lg text-slate-800 hover:bg-slate-100 hover:text-blue-700 transition-colors focus:outline-none">
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
                    href="/night-audit"
                    onClick={() => setIsOpen(false)}
                    className="inline-block"
                  >
                    <Image
                      src="/C1_navbar_logo.png"
                      alt="Control-1 Security Logo"
                      width={130}
                      height={45}
                      className="h-10 w-auto object-contain"
                    />
                  </Link>
                </SheetHeader>

                {/* Mobile Links */}
                <div className="flex flex-col gap-2 mt-6">
                  {NAV_LINKS.map((link) => {
                    const isActive = pathname === link.href;
                    const Icon = link.icon;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`o-outfit text-base font-semibold px-3 py-2.5 rounded-xl flex items-center gap-3 transition-all duration-200 ${
                          isActive
                            ? "bg-blue-100/70 text-blue-800 font-bold"
                            : "text-slate-700 hover:bg-slate-100 hover:text-blue-700 hover:translate-x-1"
                        }`}
                      >
                        <Icon className="w-5 h-5 opacity-80" />
                        <span>{link.label}</span>
                      </Link>
                    );
                  })}

                  <div className="my-3 border-t border-slate-200/60" />

                  <Link href="/night-audit/get-a-qoutes" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-blue-800 hover:bg-blue-700 text-white text-base py-5 rounded-xl shadow-md transition-all o-outfit">
                      Get a Quote
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
        className="h-[2px] bg-blue-600 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    </motion.nav>
  );
};

export default Navbar;