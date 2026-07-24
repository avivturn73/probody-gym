"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const LINKS = [
  { href: "#about", label: "אודות" },
  { href: "#why", label: "למה אנחנו" },
  { href: "#gallery", label: "גלריה" },
  { href: "#pricing", label: "מנויים" },
  { href: "#trainers", label: "מאמנים" },
  { href: "#equipment", label: "ציוד" },
  { href: "#testimonials", label: "המלצות" },
  { href: "#faq", label: "שאלות" },
  { href: "#contact", label: "צור קשר" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "py-2 glass shadow-lg shadow-black/30" : "py-4 bg-transparent"
        }`}
      >
        <nav className="container-px mx-auto max-w-7xl flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 shrink-0">
            <div className="relative w-11 h-11 md:w-12 md:h-12">
              <Image
                src="/images/logo.jpg"
                alt="PRO BODY GYM"
                fill
                className="object-contain rounded-lg"
                priority
              />
            </div>
          </a>

          <ul className="hidden lg:flex items-center gap-7 font-display text-sm font-medium tracking-wide">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative text-cream/85 hover:text-white transition-colors group"
                >
                  {l.label}
                  <span className="absolute -bottom-1 right-0 w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+972500000000"
              className="flex items-center gap-2 text-sm text-cream/85 hover:text-white transition-colors"
            >
              <Phone size={16} />
              התקשרו עכשיו
            </a>
            <a
              href="#contact"
              className="relative overflow-hidden rounded-full bg-red-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-red-900/40 transition-transform hover:scale-105 active:scale-95"
            >
              הצטרפו עכשיו
            </a>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="lg:hidden text-white p-2"
            aria-label="פתח תפריט"
          >
            <Menu size={26} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink/98 backdrop-blur-xl lg:hidden"
          >
            <div className="flex justify-between items-center container-px py-5">
              <div className="relative w-11 h-11">
                <Image src="/images/logo.jpg" alt="PRO BODY GYM" fill className="object-contain rounded-lg" />
              </div>
              <button onClick={() => setOpen(false)} className="text-white p-2" aria-label="סגור תפריט">
                <X size={28} />
              </button>
            </div>
            <motion.ul
              className="flex flex-col items-center gap-6 mt-10 font-display text-2xl font-bold"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.06 } } }}
            >
              {LINKS.map((l) => (
                <motion.li
                  key={l.href}
                  variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                >
                  <a href={l.href} onClick={() => setOpen(false)} className="text-cream hover:text-red-500 transition-colors">
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
            <div className="flex flex-col items-center gap-4 mt-10 container-px">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="w-full max-w-xs text-center rounded-full bg-red-600 px-6 py-3.5 font-bold text-white"
              >
                הצטרפו עכשיו
              </a>
              <a
                href="tel:+972500000000"
                className="w-full max-w-xs text-center rounded-full border border-line px-6 py-3.5 font-bold text-cream"
              >
                התקשרו עכשיו
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
