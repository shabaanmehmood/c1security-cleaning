"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type HeaderProps = {
  title: string;
  description: string;
  imageSrc: string;
  reverse?: boolean;
  googlePlayImg?: string;
  googlePlayLink?: string;
  appStoreImg?: string;
  appStoreLink?: string;
};

export default function Header({
  title,
  description,
  imageSrc,
  reverse = false,
  googlePlayImg,
  googlePlayLink,
  appStoreImg,
  appStoreLink,
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative top-10 bg-blue-900 text-white overflow-hidden">
      <div
        className={`max-w-7xl mx-auto px-6 lg:px-12 py-24 grid grid-cols-1 md:grid-cols-2 items-center gap-10 ${
          reverse ? "md:grid-flow-col-dense" : ""
        }`}
      >
        {/* Left Side Content */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? 80 : -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className={`space-y-6 ${
            reverse ? "md:order-2" : "md:order-1"
          } text-center md:text-left`}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight o-outfit"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h1>

          <motion.p
            className="text-lg leading-relaxed text-blue-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {description}
          </motion.p>

          {/* App Store Buttons Section */}
          {(googlePlayImg || appStoreImg) && (
            <motion.div
              className="flex flex-col sm:flex-row gap-6 items-center justify-center md:justify-start mt-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {googlePlayImg && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Link href={googlePlayLink || "#"} target="_blank">
                    <Image
                      src={googlePlayImg}
                      alt="Get it on Google Play"
                      width={140}
                      height={60}
                      className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                    />
                  </Link>
                </motion.div>
              )}

              {appStoreImg && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {appStoreLink ? (
                    <Link href={appStoreLink} target="_blank">
                      <Image
                        src={appStoreImg}
                        alt="Download on the App Store"
                        width={140}
                        height={60}
                        className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                      />
                    </Link>
                  ) : (
                    <button
                      onClick={() => setIsOpen(true)}
                      className="focus:outline-none"
                    >
                      <Image
                        src={appStoreImg}
                        alt="Download on the App Store"
                        width={140}
                        height={60}
                        className="rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                      />
                    </button>
                  )}
                </motion.div>
              )}
            </motion.div>
          )}
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? -80 : 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className={`flex justify-center ${
            reverse
              ? "md:justify-start md:order-1"
              : "md:justify-end md:order-2"
          }`}
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
              transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <Image
              src={imageSrc}
              alt="Header Illustration"
              width={500}
              height={400}
              className="rounded-xl shadow-2xl"
              priority
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Bottom Curve */}
      <motion.div
        className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]"
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="w-full h-[80px]"
        >
          <path
            d="M0,50 C150,150 350,-50 500,50 L500,150 L0,150 Z"
            className="fill-white"
          ></path>
        </svg>
      </motion.div>
    </header>
  );
}