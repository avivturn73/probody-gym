"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 left-5 z-40 flex flex-col items-start gap-3 md:bottom-7 md:left-7">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.9 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="glass w-64 rounded-2xl p-4 shadow-2xl"
          >
            <p className="font-display font-bold text-white text-sm">
              יאללה, בואו נדבר 💪
            </p>
            <p className="mt-1 text-cream/65 text-xs leading-relaxed">
              שאלה על מנוי, אימון ניסיון או מחירים? כתבו לנו בוואטסאפ ונחזור
              אליכם מיד.
            </p>
            <a
              href="https://wa.me/972500000000?text=%D7%94%D7%99%D7%99%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A2%D7%9C%20%D7%9E%D7%A0%D7%95%D7%99%D7%99%D7%9D%20%D7%95%D7%90%D7%99%D7%9E%D7%95%D7%9F%20%D7%A0%D7%99%D7%A1%D7%99%D7%95%D7%9F%20%D7%91-PRO%20BODY%20GYM"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-[#25D366] py-2.5 text-sm font-bold text-black w-full transition-transform hover:scale-105 active:scale-95"
            >
              <MessageCircle size={16} />
              פתחו צ׳אט
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {visible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => setOpen((v) => !v)}
            aria-label="דברו איתנו בוואטסאפ"
            className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-black shadow-2xl shadow-black/40 md:h-16 md:w-16"
          >
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
            {open ? <X size={26} /> : <MessageCircle size={26} />}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
