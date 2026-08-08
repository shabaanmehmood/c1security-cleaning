"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  LayoutDashboard,
} from "lucide-react";

import { useAuthStore } from "@/store/useAuthStore";
import { AuthService } from "@/lib/auth.service";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [megaMenu, setMegaMenu] = useState<"services" | "locations" | null>(null);

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
    setUserMenuOpen(false);
    setMegaMenu(null);
  }, [pathname]);

  const handleLogout = async () => {
    try {
      await AuthService.logout();
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setUser(null);
      router.push("/login");
    }
  };

  // Helper to extract first letter for avatar
  const userInitial = user?.name
    ? user.name.charAt(0).toUpperCase()
    : user?.email
    ? user.email.charAt(0).toUpperCase()
    : "U";

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
            src="/Logo.svg"
            alt="C1SECURITY Logo"
            width={140}
            height={36}
            className="h-8 lg:h-9 xl:h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Authentication / Profile Controls */}
        <div className="hidden lg:flex items-center gap-3">
          {user ? (
            <div className="flex items-center gap-3">
              {/* Admin Button (Visible only if user.role === 'admin') */}
              {user.role === "admin" && (
                <Link
                  href="/admin"
                  className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-amber-900 bg-amber-100 hover:bg-amber-200 rounded-full transition-colors border border-amber-300/60"
                >
                  <Shield size={16} className="text-amber-700" />
                  <span>Admin Panel</span>
                </Link>
              )}

              {/* User Avatar & Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-2 p-1 pr-3 bg-slate-100 hover:bg-slate-200/80 rounded-full transition-colors focus:outline-none"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm shadow-sm">
                    {userInitial}
                  </div>
                  <span className="text-sm font-medium text-slate-800 max-w-[100px] truncate">
                    {user.name || "Account"}
                  </span>
                  <ChevronDown size={14} className="text-slate-500" />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {userMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50 overflow-hidden"
                    >
                      <div className="px-4 py-2 border-b border-slate-100">
                        <p className="text-xs text-slate-400">Signed in as</p>
                        <p className="text-sm font-semibold text-slate-800 truncate">
                          {user.email}
                        </p>
                      </div>

                      

                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-rose-600 hover:bg-rose-50 transition-colors text-left"
                      >
                        <LogOut size={16} />
                        Log Out
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ) : (
            /* Logged Out State */
            <div className="flex items-center gap-2">
              <Link
                href="/login"
                className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
              >
                <LogIn size={16} />
                <span>Log In</span>
              </Link>

              <Link
                href="/signup"
                className="flex items-center gap-1.5 px-5 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-full shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/30"
              >
                <UserPlus size={16} />
                <span>Sign Up</span>
              </Link>
            </div>
          )}
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
              {/* Mobile Auth Controls */}
              <div className="pt-2 border-t border-slate-100 flex flex-col gap-3">
                {user ? (
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl">
                      <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shadow-sm">
                        {userInitial}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-800">
                          {user.name || "User"}
                        </span>
                        <span className="text-xs text-slate-500">
                          {user.email}
                        </span>
                      </div>
                    </div>

                    {user.role === "admin" && (
                      <Link
                        href="/admin"
                        className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-amber-900 bg-amber-100 rounded-xl"
                      >
                        <Shield size={16} />
                        <span>Admin Dashboard</span>
                      </Link>
                    )}

                    <button
                      onClick={handleLogout}
                      className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-rose-600 bg-rose-50 rounded-xl"
                    >
                      <LogOut size={16} />
                      <span>Log Out</span>
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    <Link
                      href="/login"
                      className="flex items-center justify-center gap-2 py-3 text-sm font-semibold text-slate-700 bg-slate-100 rounded-2xl"
                    >
                      <LogIn size={16} />
                      <span>Log In</span>
                    </Link>

                    <Link
                      href="/signup"
                      className="flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-blue-600 rounded-2xl shadow-md shadow-blue-500/20"
                    >
                      <UserPlus size={16} />
                      <span>Sign Up</span>
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.header>
  );
}