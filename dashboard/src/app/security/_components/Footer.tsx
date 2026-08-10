"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  { Icon: FaFacebook, href: "#" },
  { Icon: FaTwitter, href: "#" },
  { Icon: FaInstagram, href: "#" },
  { Icon: FaLinkedin, href: "#" },
];

const Footer: React.FC = () => {
  return (
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
            {/* ✅ New Contact Us Link */}
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
          className="flex gap-6"
        >
          <a href="#">
            <Image
              src="/google-play.png"
              alt="Google Play"
              width={140}
              height={60}
              className="hover:scale-110 transition-transform duration-300"
            />
          </a>
          <a href="#">
            <Image
              src="/apple-store.png"
              alt="App Store"
              width={140}
              height={60}
              className="hover:scale-110 transition-transform duration-300"
            />
          </a>
        </motion.div>

        {/* Social Links */}
        {/* <motion.div
          className="flex space-x-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.15, duration: 0.5 },
            },
          }}
        >
          {socialLinks.map(({ Icon, href }, i) => (
            <motion.a
              key={i}
              href={href}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-yellow-400 hover:text-blue-900 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.15, rotate: 6 }}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div> */}
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
  );
};

export default Footer;
