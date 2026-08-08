"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { RiMenuFill } from "react-icons/ri";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Prevent SSR mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };

    const handleScroll = () => {
      const currentY = window.scrollY;
      setHidden(currentY > lastScrollY && currentY > 80);
      setLastScrollY(currentY);

      const scrolled =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
        100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  if (!isMounted) return null; 

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed w-full top-0 left-0 z-50 shadow-md backdrop-blur-sm transition-colors bg-white"
    >
      <div className="max-w-7xl px-6 mx-auto md:px-4 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/tac-logo.png"
            alt="Control-1 Security Logo"
            width={110}
            height={40}
            unoptimized
            className="cursor-pointer"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden sm:flex items-center gap-6">
          <Link
            href="/contractor"
            className="text-blue-950 hover:text-blue-700 o-outfit font-semibold transition-colors text-lg md:text-xl"
          >
            Contractor
          </Link>
          <Link
            href="/guardPage"
            className="text-blue-950 o-outfit text-lg hover:text-blue-700 font-semibold transition-colors md:text-xl"
          >
            Guard
          </Link>

          <Link href="/contact">
            <Button className="bg-blue-800 text-white o-outfit hover:bg-blue-700 text-lg cursor-pointer">
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="sm:hidden flex items-center gap-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-blue-950 hover:text-blue-700"
              >
                <RiMenuFill size={26} />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="left"
              className="bg-gradient-to-b from-blue-50 to-white px-6 py-8 h-full overflow-y-auto"
            >
              {/* Logo Section */}
              <SheetHeader className="mb-8">
                <SheetTitle asChild>
                  <Link
                    href="/"
                    className="flex items-center justify-center py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <Image
                      src="/tac-logo.png"
                      alt="Control-1 Security Logo"
                      width={130}
                      height={70}
                      className="cursor-pointer"
                    />
                  </Link>
                </SheetTitle>
              </SheetHeader>

              {/* Navigation Links */}
              <div className="flex flex-col gap-6">
                <Link
                  href="/contractor"
                  onClick={() => setIsOpen(false)}
                  className="text-blue-950 text-xl font-semibold hover:text-blue-700 o-outfit flex items-center gap-2 transition-all duration-200 hover:translate-x-1"
                >
                  🧰 Contractor
                </Link>

                <Link
                  href="/guardPage"
                  onClick={() => setIsOpen(false)}
                  className="text-blue-950 text-xl font-semibold hover:text-blue-700 o-outfit flex items-center gap-2 transition-all duration-200 hover:translate-x-1"
                >
                  🛡️ Guard
                </Link>

                <div className="border-t border-blue-200 my-4"></div>

                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-blue-800 text-white hover:bg-blue-700 text-lg py-5 rounded-xl shadow-md transition-all o-outfit duration-300">
                    Contact Us
                  </Button>
                </Link>
              </div>

              {/* Footer note */}
              <div className="absolute bottom-6 left-0 w-full text-center text-sm text-blue-950">
                © {new Date().getFullYear()} Control-1 Security
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="h-1 bg-indigo-500"
        initial={{ width: "0%" }}
        animate={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.2, ease: "linear" }}
      />
    </motion.nav>
  );
};

export default Navbar;
