"use client";

import { Star, Quote } from "lucide-react";
import SectionReveal from "./SectionReveal";

const REVIEWS = [
  {
    name: "דניאל שרעבי",
    role: "מתאמן כוח · שנה וחצי במכון",
    text: "עברתי כמה חדרי כושר בחריש והאזור, ו-PRO BODY פשוט ברמה אחרת. הציוד חדש, נקי ומטופל, והמאמנים באמת מלווים אותך ולא רק 'מוכרים מנוי'.",
  },
  {
    name: "שירה מזרחי",
    role: "מתאמנת · תוכנית אישית",
    text: "האווירה כאן נותנת מוטיבציה בלי מאמץ. נכנסת ומיד מרגישה שאת במקום רציני. תוך 3 חודשים ראיתי שינוי אמיתי בגוף ובביטחון העצמי.",
  },
  {
    name: "רון אביטן",
    role: "מתאמן פונקציונלי",
    text: "אזור הפונקציונלי מדהים - כל הציוד שהייתי צריך במקום אחד. הצוות מקצועי, שמים לב לטכניקה ותמיד יש מישהו שיעזור אם צריך.",
  },
  {
    name: "טל גרינברג",
    role: "מנוי אליטה · אימון אישי",
    text: "המאמן האישי שלי בנה לי תוכנית מדויקת שהתאימה בול למטרות שלי. הליווי הצמוד עשה את כל ההבדל. ממליץ בחום לכל מי שרציני לגבי התוצאות.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-surface overflow-hidden">
      <div className="container-px mx-auto max-w-7xl">
        <SectionReveal className="max-w-2xl mx-auto text-center">
          <p className="section-label text-red-500 font-display font-bold text-sm tracking-[0.3em] mb-4">
            המלצות מתאמנים
          </p>
          <h2 className="font-display font-black text-4xl md:text-5xl text-white leading-tight">
            לא רק המילים שלנו
            <span className="text-gradient-red"> — גם שלכם</span>
          </h2>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {REVIEWS.map((r, i) => (
            <SectionReveal key={r.name} delay={i * 0.08} className="h-full">
              <div className="group relative flex h-full flex-col rounded-2xl border border-line bg-surface2/60 p-7 transition-all duration-300 hover:border-red-600/60 hover:-translate-y-1">
                <Quote className="text-red-600/30" size={30} />
                <div className="mt-3 flex gap-1">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} size={14} className="text-red-500" fill="currentColor" />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-cream/75">
                  {r.text}
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-line pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600/15 font-display font-bold text-red-500">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-display font-bold text-sm text-white">
                      {r.name}
                    </p>
                    <p className="text-xs text-cream/50">{r.role}</p>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
