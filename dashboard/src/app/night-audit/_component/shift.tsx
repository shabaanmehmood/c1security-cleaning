import { motion, useReducedMotion } from "framer-motion";

// Timeline spans a full 24h starting at 18:00 so the overnight window
// (23:00–07:00) sits as one unbroken band instead of wrapping at midnight.
const START_HOUR = 18;
const LABELS = ["6P", "9P", "12A", "3A", "6A", "9A", "12P", "3P", "6P"];

const NIGHT_START = 23;
const NIGHT_END = 31; // 07:00 next day, expressed on the shifted scale
const bandLeft = ((NIGHT_START - START_HOUR) / 24) * 100;
const bandWidth = ((NIGHT_END - NIGHT_START) / 24) * 100;

export default function ShiftTimeline() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-3">
        <span className="font-['JetBrains_Mono'] text-[11px] tracking-[0.18em] uppercase text-[#93A0B8]">
          24-hour front desk coverage
        </span>
        <span className="font-['JetBrains_Mono'] text-[11px] tracking-[0.18em] uppercase text-[#C9A24B]">
          Night Audit · 23:00–07:00
        </span>
      </div>

      <div className="relative h-2.5 rounded-full bg-[#1C2740] overflow-hidden">
        <motion.div
          className="absolute inset-y-0 rounded-full bg-gradient-to-r from-[#C9A24B] to-[#E4C878]"
          style={{ left: `${bandLeft}%` }}
          initial={{ width: 0 }}
          whileInView={{ width: `${bandWidth}%` }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0.01 : 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        />
        {!reduceMotion && (
          <motion.div
            className="absolute inset-y-0 w-10 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            initial={{ left: "-10%" }}
            animate={{ left: "110%" }}
            transition={{ duration: 2.6, repeat: Infinity, repeatDelay: 1.4, ease: "easeInOut" }}
          />
        )}
      </div>

      <div className="relative mt-2 h-4">
        {LABELS.map((label, i) => (
          <span
            key={label + i}
            className="absolute -translate-x-1/2 font-['JetBrains_Mono'] text-[10px] text-[#5C6883]"
            style={{ left: `${(i / (LABELS.length - 1)) * 100}%` }}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}