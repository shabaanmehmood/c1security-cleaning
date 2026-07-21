"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Industries", href: "/industries" },
  { title: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    /* Floating container with pointer-events-none so surrounding empty space is clickable */
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none"
    >
      {/* Rounded Floating Pill Navigation Container */}
      <div
        className={`pointer-events-auto flex items-center justify-between w-full max-w-7xl px-6 py-3 rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-white/80 border border-slate-200/80 shadow-lg backdrop-blur-xl"
            : "bg-white/95 border border-slate-100 shadow-md backdrop-blur-md"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-blue-700"
        >
          C1SCURITY-CLEANING
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                pathname === item.href ? "text-blue-600" : "text-slate-700"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-2 md:flex">
          <Link href="/login">
            <Button variant="ghost" className="rounded-full">
              Login
            </Button>
          </Link>

          <Link href="/sign-up">
            <Button variant="outline" className="rounded-full">
              Sign Up
            </Button>
          </Link>

          <Link href="/get-a-quote">
            <Button className="rounded-full bg-blue-600 text-white hover:bg-blue-700">
              Get a Quote
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger
              className={buttonVariants({
                variant: "ghost",
                size: "icon",
                className: "rounded-full",
              })}
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>

            <SheetContent side="right">
              <div className="mt-10 flex flex-col gap-5">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-lg ${
                      pathname === item.href
                        ? "font-semibold text-blue-600"
                        : "text-slate-700"
                    }`}
                  >
                    {item.title}
                  </Link>
                ))}

                <div className="mt-6 flex flex-col gap-3">
                  <Link href="/login">
                    <Button className="w-full rounded-full" variant="ghost">
                      Login
                    </Button>
                  </Link>

                  <Link href="/sign-up">
                    <Button className="w-full rounded-full" variant="outline">
                      Sign Up
                    </Button>
                  </Link>

                  <Link href="/get-a-quote">
                    <Button className="w-full rounded-full bg-blue-600 hover:bg-blue-700">
                      Get a Quote
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}