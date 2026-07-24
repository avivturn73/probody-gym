"use client";

import { Clock } from "lucide-react";
import SectionReveal from "./SectionReveal";

const HOURS = [
  { day: "ראשון - חמישי", time: "06:00 - 23:00" },
  { day: "שישי", time: "07:00 - 17:00" },
  { day: "שבת", time: "08:00 - 15:00" },
];

export default function Hours() {
  return (
    <section className="relative py-24 md:py-28 bg-ink">
      <div className="container-px mx-auto max-w-5xl">
        <div className="rounded-3xl glass p-8 md:p-14 grid md:grid-cols-2 gap-10 items-center">
          <SectionReveal>
            <div className="w-14 h-14 rounded-2xl bg-red-600/15 flex items-center justify-center text-red-500">
              <Clock size={28} />
            </div>
            <h2 className="mt-6 font-display font-black text-3xl md:text-4xl text-white leading-tight">
              שעות פעילות <span className="text-gradient-red">המכון</span>
            </h2>
            <p className="mt-4 text-cream/65 leading-relaxed">
              המכון פתוח כמעט לאורך כל שעות היממה, כדי שתוכלו להתאמן מתי שנוח
              לכם - בבוקר, בצהריים או בערב.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.15} className="space-y-3">
            {HOURS.map((h) => (
              <div
                key={h.day}
                className="flex items-center justify-between rounded-xl border border-line bg-surface2/60 px-6 py-4"
              >
                <span className="font-display font-bold text-white">{h.day}</span>
                <span className="text-red-500 font-bold tabular-nums" dir="ltr">
                  {h.time}
                </span>
              </div>
            ))}
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
