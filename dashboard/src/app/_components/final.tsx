"use client";

import Left from "./LeftHomeHero";
import Right from "./RightHomeHeroo";

export default function HomeHero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Hero Content Grid */}
      <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-8 px-6 pb-16 pt-28 lg:grid-cols-12 lg:px-8">
        {/* Left Side (Smaller Column Share: 4/12) */}
        <div className="flex w-full items-center lg:col-span-4">
          <Left />
        </div>

        {/* Right Side (Larger Column Share: 8/12) */}
        <div className="flex w-full items-center justify-center lg:col-span-8">
          <Right />
        </div>
      </div>
    </section>
  );
}