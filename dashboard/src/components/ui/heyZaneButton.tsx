"use client";

import React, { useRef, useState } from "react";

interface MagneticButtonProps {
  label?: string;
  url?: string;
  className?: string;
}

export default function MagneticButton({
  label = "Click Me",
  url = "https://heyzine.com/flip-book/66c2f13d82.html#page/1",
  className = "",
}: MagneticButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    setPosition({
      x: distanceX * 0.35,
      y: distanceY * 0.35,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const handleClick = () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative flex items-center justify-center w-full max-w-2xl h-96 overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/80 backdrop-blur-xl shadow-2xl shadow-blue-950/30 ${className}`}
    >
      {/* 1. Subtle Radial Tech Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-25 pointer-events-none" />

      {/* 2. Gradient Light Glow Orbs */}
      <div className="absolute -top-24 -left-24 w-60 h-60 bg-blue-600/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute -bottom-24 -right-24 w-60 h-60 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none animate-pulse" />

      {/* 3. Central Ambient Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12)_0%,transparent_70%)] pointer-events-none" />

      {/* 4. Interactive Magnetic Button */}
      <button
        onClick={handleClick}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0px)`,
        }}
        className="relative z-10 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold shadow-lg shadow-blue-500/25 border border-white/20 transition-transform duration-100 ease-out active:scale-95 cursor-pointer"
      >
        {label}
      </button>
    </div>
  );
}