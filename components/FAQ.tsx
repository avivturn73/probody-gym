"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import SectionReveal from "./SectionReveal";

const FAQS = [
  {
    q: "האם יש אימון ניסיון חינם?",
    a: "בהחלט. אנחנו מזמינים כל מתעניין לאימון ניסיון חינם, כדי שתכירו את המכון, את הציוד ואת הצוות לפני שאתם מחליטים.",
  },
  {
    q: "האם יש התחייבות לתקופה מסוימת?",
    a: "יש לנו מסלולים גמישים בלי התחייבות, וגם מסלולים משתלמים יותר עם התחייבות לתקופה. נשמח להתאים לכם את המסלול הנכון בשיחה קצרה.",
  },
  {
    q: "האם מתאים למתחילים לגמרי?",
    a: "כן. חלק גדול מהמתאמנים שלנו התחילו כמתחילים מוחלטים. המאמנים בונים לכם תוכנית מדורגת, מלווים בטכניקה נכונה ודואגים שתתקדמו בבטחה.",
  },
  {
    q: "מה שעות הפעילות של המכון?",
    a: "אנחנו פתוחים בימים ראשון עד חמישי בין 06:00 ל-23:00, בימי שישי בין 07:00 ל-17:00, ובשבת בין 08:00 ל-15:00.",
  },
  {
    q: "האם יש חניה זמינה ליד המכון?",
    a: "כן, יש חניה נוחה וזמינה בסמוך למכון ברחוב ההתחדשות 4, חריש.",
  },
  {
    q: "איך אני נרשם למנוי?",
    a: "הכי פשוט - לחצו על אחד מכפתורי 'הצטרפו עכשיו' באתר, השאירו פרטים או כתבו לנו בוואטסאפ, ואנחנו נחזור אליכם תוך זמן קצר לתיאום.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 md:py-32 bg-ink">
      <div className="container-px mx-auto max-w-4xl">
        <SectionReveal className="max-w-2xl mx-auto text-center">
          <p className="section-label text-red-500 font-display font-bold text-sm tracking-[0.3em] mb-4">
            שאלות ותשובות
          </p>
          <h2 className="font-display font-black text-4xl md:text-5xl text-white leading-tight">
            יש לכם <span className="text-gradient-red">שאלות?</span>
          </h2>
        </SectionReveal>

        <div className="mt-14 space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <SectionReveal key={item.q} delay={i * 0.05}>
                <div className="overflow-hidden rounded-2xl border border-line bg-surface2/50">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-right"
                  >
                    <span className="font-display font-bold text-white">
                      {item.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-red-600/15 text-red-500"
                    >
                      <Plus size={18} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-cream/65 leading-relaxed">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
