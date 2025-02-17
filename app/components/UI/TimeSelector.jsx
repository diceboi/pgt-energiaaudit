"use client";

import { useState, useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { Context } from "../../Context";

export default function TimeIntervalGrid({tilename, name}) {

  const context = useContext(Context);
  const intervals = Array.from({ length: 23 }, (_, i) => `${i + 1}:00 - ${i + 2}:00`);
  const [selectedIntervals, setSelectedIntervals] = useState([]);

  useEffect(() => {
    const setterKey = `set${tilename.charAt(0).toUpperCase() + tilename.slice(1)}`;
    if (context[setterKey]) {
      const intervalsString = selectedIntervals.map(interval => name ? `${name} ${interval}` : interval).join(", ");
      context[setterKey](intervalsString);
    }
  }, [selectedIntervals, tilename, context, name]);

  const toggleInterval = (interval) => {
    setSelectedIntervals((prev) =>
      prev.includes(interval)
        ? prev.filter((i) => i !== interval)
        : [...prev, interval]
    );
  };

  const toggleAll = () => {
    setSelectedIntervals((prev) => (prev.length === intervals.length ? [] : intervals));
  };

  return (
    <>
      {/* Intervallumválasztó rács */}
      <div className="lg:grid-cols-8 grid grid-cols-3 gap-[1px] outline-1 rounded-xl overflow-hidden border border-[--antracit]">
        {intervals.map((interval) => (
          <motion.div
            key={interval}
            className={`w-auto h-12 flex items-center justify-center text-xs font-semibold outline-1 cursor-pointer transition-all ${
              selectedIntervals.includes(interval)
                ? "bg-[--green] text-black"
                : "bg-[--black] hover:bg-[--green] hover:text-black"
            }`}
            onClick={() => toggleInterval(interval)}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            {interval}
          </motion.div>
        ))}

        {/* "Egész nap" tile */}
        <motion.div
          key="all-day"
          className={`w-auto h-12 flex items-center justify-center text-xs font-semibold outline-1 cursor-pointer transition-all ${
            selectedIntervals.length === intervals.length
              ? "bg-[--yellow] text-black"
              : "bg-[--yellow] text-black"
          }`}
          onClick={toggleAll}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          Egész nap
        </motion.div>
      </div>
    </>
  );
}
