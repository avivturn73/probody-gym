"use client";

import { Instagram, Award } from "lucide-react";
import SectionReveal from "./SectionReveal";

const TRAINERS = [
  {
    name: "עידן לוי",
    role: "מאמן ראשי · כוח והיפרטרופיה",
    tag: "12 שנות ניסיון",
    initials: "על",
  },
  {
    name: "נועה כהן",
    role: "מאמנת אישית · כושר פונקציונלי",
    tag: "מוסמכת ACE",
    initials: "נכ",
  },
  {
    name: "יובל אזולאי",
    role: "מאמן · הרזיה ותזונת ספורט",
    tag: "תזונאי קליני",
    initials: "יא",
  },
  {
    name: "מאיה ברק",
    role: "מאמנת · פילאטיס ואימוני ליבה",
    tag: "8 שנות ניסיון",
    initials: "מב",
  },
];

export default function Trainers() {
  return (
    <section id="trainers" className="relative py-24 md:py-32 bg-surface">
      <div className="container-px mx-auto max-w-7xl">
        <SectionReveal className="max-w-2xl mx-auto text-center">
          <p className="section-label text-red-500 font-display font-bold text-sm tracking-[0.3em] mb-4">
            הצוות שלנו
          </p>
          <h2 className="font-display font-black text-4xl md:text-5xl text-white leading-tight">
            מאמנים <span className="text-gradient-red">שמובילים אתכם קדימה</span>
          </h2>
          <p className="mt-4 text-cream/65 leading-relaxed">
            צוות מוסמך ומנוסה שילווה אתכם בכל שלב, יתאים תוכנית אישית ולא
            ירפה עד שתגיעו ליעד.
          </p>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {TRAINERS.map((t, i) => (
            <SectionReveal key={t.name} delay={i * 0.08}>
              <div className="group relative overflow-hidden rounded-2xl border border-line bg-surface2/60 p-7 text-center transition-all duration-300 hover:border-red-600/60 hover:-translate-y-1">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-red-900 font-display text-2xl font-black text-white shadow-lg shadow-red-900/40">
                  {t.initials}
                </div>
                <h3 className="mt-5 font-display font-bold text-lg text-white">
                  {t.name}
                </h3>
                <p className="mt-1 text-sm text-cream/60">{t.role}</p>
                <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-xs text-red-400">
                  <Award size={13} />
                  {t.tag}
                </div>
                <div className="mt-4 flex justify-center">
                  <a
                    href="#contact"
                    aria-label={`עקבו אחרי ${t.name}`}
                    className="text-cream/40 hover:text-red-500 transition-colors"
                  >
                    <Instagram size={18} />
                  </a>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
