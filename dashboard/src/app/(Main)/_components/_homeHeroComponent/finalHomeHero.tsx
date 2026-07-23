"use client";

import Left from "./LeftDiv";
import Right from "./RigthDiv";

export default function HomeHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-transparent">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-20">
        {/* Large Glow */}
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-400/15 blur-[180px]" />

        {/* Left Glow */}
        <div className="absolute -left-32 top-40 h-80 w-80 rounded-full bg-cyan-400/10 blur-[140px]" />

        {/* Right Glow */}
        <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-blue-500/10 blur-[160px]" />
      </div>

      {/* Hero Content Grid */}
      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-28 pb-16 lg:grid-cols-12 lg:px-8">
        {/* Left Side */}
        <div className="flex w-full items-center lg:col-span-6 xl:col-span-7">
          <Left />
        </div>

        {/* Right Side */}
        <div className="flex w-full items-center justify-center lg:col-span-6 xl:col-span-5">
          <Right />
        </div>
      </div>
    </section>
  );
}