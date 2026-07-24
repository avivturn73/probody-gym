"use client";

import { Check, Star } from "lucide-react";
import SectionReveal from "./SectionReveal";

const PLANS = [
  {
    name: "בסיסי",
    price: "129",
    period: "לחודש",
    desc: "מושלם למי שרוצה להתחיל להתאמן בעצמאות.",
    features: ["כניסה חופשית לאולם הכוח והקרדיו", "שימוש בכל הציוד", "הדרכת פתיחה ראשונית", "ללא התחייבות שנתית"],
    highlighted: false,
  },
  {
    name: "פרו",
    price: "199",
    period: "לחודש",
    desc: "המנוי הפופולרי ביותר - הכי משתלם לתוצאות.",
    features: [
      "כל מה שיש במסלול הבסיסי",
      "2 אימונים אישיים בחודש",
      "תוכנית אימונים מותאמת אישית",
      "מעקב התקדמות חודשי",
      "הנחה על מוצרי תזונה",
    ],
    highlighted: true,
  },
  {
    name: "אליטה",
    price: "349",
    period: "לחודש",
    desc: "ליווי צמוד למי שרוצה תוצאות מקסימליות.",
    features: [
      "כל מה שיש במסלול פרו",
      "אימון אישי פרטי שבועי",
      "תוכנית תזונה מלאה",
      "גישה מועדפת לשעות שיא",
      "זמינות ישירה למאמן האישי",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 md:py-32 bg-surface">
      <div className="container-px mx-auto max-w-7xl">
        <SectionReveal className="max-w-2xl mx-auto text-center">
          <p className="section-label text-red-500 font-display font-bold text-sm tracking-[0.3em] mb-4">
            מנויים ומחירון
          </p>
          <h2 className="font-display font-black text-4xl md:text-5xl text-white leading-tight">
            בחרו את המסלול <span className="text-gradient-red">שמתאים לכם</span>
          </h2>
        </SectionReveal>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-16 items-stretch">
          {PLANS.map((plan, i) => (
            <SectionReveal key={plan.name} delay={i * 0.1} className="h-full">
              <div
                className={`relative h-full flex flex-col rounded-3xl p-8 transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-gradient-to-b from-red-700 to-red-900 shadow-2xl shadow-red-900/50 md:-translate-y-4 md:scale-105"
                    : "bg-surface2 border border-line hover:border-red-600/50"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-4 right-1/2 translate-x-1/2 flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-xs font-bold text-red-700">
                    <Star size={13} fill="currentColor" /> הכי פופולרי
                  </span>
                )}
                <h3 className="font-display font-black text-2xl text-white">{plan.name}</h3>
                <p className={`mt-2 text-sm ${plan.highlighted ? "text-white/80" : "text-cream/60"}`}>
                  {plan.desc}
                </p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-display font-black text-5xl text-white">₪{plan.price}</span>
                  <span className={plan.highlighted ? "text-white/70" : "text-cream/50"}>{plan.period}</span>
                </div>

                <ul className="mt-7 space-y-3.5 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check
                        size={18}
                        className={`mt-0.5 shrink-0 ${plan.highlighted ? "text-white" : "text-red-500"}`}
                      />
                      <span className={plan.highlighted ? "text-white/90" : "text-cream/75"}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-8 text-center rounded-full py-3.5 font-display font-bold transition-transform hover:scale-105 active:scale-95 ${
                    plan.highlighted
                      ? "bg-white text-red-700"
                      : "bg-red-600 text-white"
                  }`}
                >
                  הצטרפו עכשיו
                </a>
              </div>
            </SectionReveal>
          ))}
        </div>
        <SectionReveal delay={0.3}>
          <p className="text-center text-cream/50 text-sm mt-8">
            * המחירים להמחשה בלבד ואינם כוללים מע״מ. דמי הרשמה חד־פעמיים עשויים לחול. לפרטים מלאים ומבצעים עדכניים, צרו קשר.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
