import React from "react";
import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, ctaText, ctaLink }) => {
  return (
    <section className="py-20 text-center">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-semibold o-outfit text-blue-950 mb-4">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">{subtitle}</p>
        <Link
          href={ctaLink}
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all"
        >
          {ctaText}
        </Link>
      </div>
    </section>
  );
};

export default Hero;
