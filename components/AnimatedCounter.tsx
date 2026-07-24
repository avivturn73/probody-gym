"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

export default function AnimatedCounter({
  value,
  suffix = "",
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 24, stiffness: 60 });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString("he-IL") + suffix;
      }
    });
  }, [springValue, suffix]);

  return (
    <div className="text-center">
      <motion.span
        ref={ref}
        className="font-display font-black text-4xl md:text-5xl text-gradient-red"
      >
        0{suffix}
      </motion.span>
      <p className="mt-2 text-xs md:text-sm text-muted tracking-widest section-label">
        {label}
      </p>
    </div>
  );
}
