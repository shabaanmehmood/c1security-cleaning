"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  { Icon: FaFacebook, href: "#" },
  { Icon: FaTwitter, href: "#" },
  { Icon: FaInstagram, href: "#" },
  { Icon: FaLinkedin, href: "#" },
];

const Footer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <footer className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
        {/* Glow background effect */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
        </div>

        {/* Main Content */}
        <div className="relative max-w-7xl mx-auto px-6 py-16 flex flex-col items-center text-center space-y-10">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <Image
              src="/C1_navbar_logo_white.png"
              alt="Logo"
              width={160}
              height={120}
              className="hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          {/* Quick Links */}
          <motion.nav
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ul className="flex space-x-8 text-lg font-medium">
              <li className="relative px-3 py-1 transition-colors hover:text-yellow-400 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full">
                <Link href="/security/contractor">Contractor</Link>
              </li>
              <li className="relative px-3 py-1 transition-colors hover:text-yellow-400 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full">
                <Link href="/security/guardPage">Guard</Link>
              </li>
              <li className="relative px-3 py-1 transition-colors hover:text-yellow-400 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full">
                <Link href="/security/contact">Contact Us</Link>
              </li>
            </ul>
          </motion.nav>

          {/* App Store Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex gap-6 items-center"
          >
            <a
              href="https://play.google.com/store/apps/developer?id=C1+Security"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/google-play.png"
                alt="Google Play"
                width={140}
                height={60}
                className="hover:scale-110 transition-transform duration-300"
              />
            </a>

            {/* ✅ iOS App Store Button Triggering the Dialog */}
            <button
              onClick={() => setIsOpen(true)}
              className="focus:outline-none"
            >
              <Image
                src="/apple-store.png"
                alt="App Store"
                width={140}
                height={60}
                className="hover:scale-110 transition-transform duration-300 cursor-pointer"
              />
            </button>
          </motion.div>
        </div>

        {/* Bottom Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="backdrop-blur-md bg-white/10 border-t border-white/20 py-4 text-center text-sm text-gray-200 relative"
        >
          © {new Date().getFullYear()} Control-1 Security. All rights reserved.
        </motion.div>
      </footer>

      {/* ✅ Coming Soon Modal Dialog */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl p-6 max-w-sm w-full text-center shadow-2xl border border-gray-100 text-gray-800"
            >
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                📱
              </div>
              <h3 className="text-xl font-bold mb-2">iOS App Coming Soon</h3>
              <p className="text-gray-600 text-sm mb-6">
                Our iOS application is currently in development. Stay tuned for updates!
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-xl transition-colors duration-200"
              >
                Got it
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Footer;