"use client";

import { Dumbbell, Users, Sparkles, Clock, ShieldCheck, TrendingUp } from "lucide-react";
import SectionReveal from "./SectionReveal";

const ITEMS = [
  {
    icon: Dumbbell,
    title: "ציוד מהמתקדם בעולם",
    desc: "מכשירי כוח, משקולות חופשיות ואזור פונקציונלי ברמת עולם - כל מה שצריך במקום אחד.",
  },
  {
    icon: Users,
    title: "מאמנים מוסמכים",
    desc: "צוות מקצועי שילווה אתכם צעד אחר צעד, יבנה תוכנית אישית וידחוף אתכם לתוצאות אמיתיות.",
  },
  {
    icon: Sparkles,
    title: "אווירה שמדביקה מוטיבציה",
    desc: "עיצוב נקי, תאורה עוצמתית ואנרגיה שמרגישים ברגע שנכנסים בדלת.",
  },
  {
    icon: Clock,
    title: "גמישות מלאה",
    desc: "פתוחים כל השבוע בשעות נוחות, כדי שהאימון יתאים בול ללוח הזמנים שלכם.",
  },
  {
    icon: ShieldCheck,
    title: "נקיון והיגיינה",
    desc: "סטנדרט נקיון גבוה, חיטוי קבוע של הציוד ומרחב מסודר ומטופח.",
  },
  {
    icon: TrendingUp,
    title: "מעקב תוצאות",
    desc: "מדידות והתקדמות מתועדת, כדי שתראו במו עינכם כל שיפור בדרך.",
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="relative py-24 md:py-32 bg-surface">
      <div className="container-px mx-auto max-w-7xl">
        <SectionReveal className="max-w-2xl mx-auto text-center">
          <p className="section-label text-red-500 font-display font-bold text-sm tracking-[0.3em] mb-4">
            למה PRO BODY GYM
          </p>
          <h2 className="font-display font-black text-4xl md:text-5xl text-white leading-tight">
            הסיבות שהופכות אותנו
            <span className="text-gradient-red"> למכון ברמה אחרת</span>
          </h2>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {ITEMS.map((item, i) => (
            <SectionReveal key={item.title} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-line bg-surface2/60 p-7 transition-all duration-300 hover:border-red-600/60 hover:bg-surface2 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-red-600/15 flex items-center justify-center text-red-500 transition-colors group-hover:bg-red-600 group-hover:text-white">
                  <item.icon size={24} />
                </div>
                <h3 className="mt-5 font-display font-bold text-xl text-white">{item.title}</h3>
                <p className="mt-2.5 text-cream/65 leading-relaxed">{item.desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
