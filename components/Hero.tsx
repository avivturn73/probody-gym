"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, MessageCircle, Calendar } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="hero" ref={ref} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="/images/gym-strength.jpg"
          alt="PRO BODY GYM - אולם אימונים"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-l from-ink/60 via-transparent to-ink/60" />
        <div className="absolute inset-0 bg-red-glow" />
      </motion.div>

      {/* floating elements */}
      <div className="absolute top-[18%] left-[8%] w-24 h-24 rounded-full bg-red-600/20 blur-2xl animate-floaty hidden md:block" />
      <div className="absolute bottom-[24%] right-[10%] w-32 h-32 rounded-full bg-red-500/10 blur-3xl animate-floaty hidden md:block" style={{ animationDelay: "1.5s" }} />

      <motion.div style={{ opacity }} className="relative z-10 h-full flex flex-col justify-center container-px mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="h-[3px] w-24 origin-right bg-gradient-to-l from-red-400 to-red-800 mb-6 animate-pulseline"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="section-label text-red-500 font-display font-bold text-sm md:text-base tracking-[0.3em] mb-4"
        >
          PRO BODY GYM · חריש
        </motion.p>

        <h1 className="font-display font-black text-white leading-[0.95] text-[13vw] sm:text-6xl md:text-7xl lg:text-8xl">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="block"
          >
            הכוח שלך
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.15 }}
            className="block text-gradient-red"
          >
            מתחיל כאן
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.4 }}
          className="mt-6 max-w-xl text-cream/75 text-base md:text-lg leading-relaxed"
        >
          מכון הכושר היוקרתי ביותר בחריש. ציוד מהמתקדם בעולם, מאמנים מקצועיים
          ואווירה שמדליקה בכם את המשמעת להיות הגרסה הכי חזקה של עצמכם.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.6 }}
          className="mt-9 flex flex-wrap gap-4"
        >
          <a
            href="#contact"
            className="group flex items-center gap-2 rounded-full bg-red-600 px-7 py-4 font-display font-bold text-white shadow-xl shadow-red-900/40 transition-all hover:scale-105 hover:shadow-red-600/40 active:scale-95"
          >
            <Calendar size={19} />
            קבעו אימון ניסיון
          </a>
          <a
            href="https://wa.me/972500000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full glass px-7 py-4 font-display font-bold text-white transition-all hover:scale-105 active:scale-95"
          >
            <MessageCircle size={19} />
            דברו איתנו בוואטסאפ
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="mt-14 grid grid-cols-3 gap-6 max-w-md glass rounded-2xl px-6 py-5"
        >
          <AnimatedCounter value={500} suffix="+" label="מתאמנים" />
          <AnimatedCounter value={12} suffix="" label="מאמנים" />
          <AnimatedCounter value={7} suffix="" label="ימים בשבוע" />
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="גללו למטה"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { delay: 2.2, duration: 0.6 }, y: { repeat: Infinity, duration: 1.8 } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/70 hover:text-white"
      >
        <ChevronDown size={30} />
      </motion.a>
    </section>
  );
}
