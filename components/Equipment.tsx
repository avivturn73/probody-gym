"use client";

import Image from "next/image";
import { Dumbbell, Bike, Weight, Zap } from "lucide-react";
import SectionReveal from "./SectionReveal";

const CATEGORIES = [
  { icon: Weight, title: "משקולות חופשיות", desc: "מלא עד 60 ק״ג, מוטות אולימפיים ומתקני סקוואט מקצועיים." },
  { icon: Dumbbell, title: "מכשירי כוח", desc: "סדרת מכשירים ביומכניים לכל קבוצות השרירים, בדיוק מלא." },
  { icon: Zap, title: "אזור פונקציונלי", desc: "מתקני Cable Cross, TRX, קטלבלים וציוד קרוספיט." },
  { icon: Bike, title: "אזור קרדיו", desc: "הליכונים, אופני ספינינג ומכשירי אליפטיקל עם מסכי מגע." },
];

export default function Equipment() {
  return (
    <section id="equipment" className="relative py-24 md:py-32 bg-ink overflow-hidden">
      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <SectionReveal>
            <p className="section-label text-red-500 font-display font-bold text-sm tracking-[0.3em] mb-4">
              ציוד המכון
            </p>
            <h2 className="font-display font-black text-4xl md:text-5xl text-white leading-tight">
              ציוד מהמתקדם ביותר
              <br />
              <span className="text-gradient-red">שיש היום בשוק</span>
            </h2>
            <p className="mt-5 text-cream/65 leading-relaxed text-base md:text-lg">
              השקענו בציוד ברמה בינלאומית כדי שכל אימון — בין אם כוח, פונקציונלי
              או קרדיו — יהיה מדויק, בטוח ויעיל.
            </p>
          </SectionReveal>

          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {CATEGORIES.map((c, i) => (
              <SectionReveal key={c.title} delay={i * 0.1}>
                <div className="group rounded-2xl border border-line bg-surface2/50 p-6 transition-all duration-300 hover:border-red-600/60 hover:-translate-y-1">
                  <div className="w-11 h-11 rounded-xl bg-red-600/15 flex items-center justify-center text-red-500 transition-colors group-hover:bg-red-600 group-hover:text-white">
                    <c.icon size={20} />
                  </div>
                  <h3 className="mt-4 font-display font-bold text-white">
                    {c.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-cream/60 leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>

        <SectionReveal delay={0.15} className="relative">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
            <Image
              src="/images/gym-weights.jpg"
              alt="ציוד אימון מקצועי ב-PRO BODY GYM"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
          </div>
          <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-red-600/20 blur-2xl animate-floaty hidden md:block" />
        </SectionReveal>
      </div>
    </section>
  );
}
