"use client";

import Image from "next/image";
import SectionReveal from "./SectionReveal";

const IMAGES = [
  { src: "/images/gym-strength.jpg", alt: "אזור אימוני כוח" },
  { src: "/images/gym-weights.jpg", alt: "אזור מכשירי כבלים ומשקולות" },
  { src: "/images/gym-functional.jpg", alt: "אזור אימון פונקציונלי" },
  { src: "/images/gym-cardio.jpg", alt: "אזור קרדיו" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24 md:py-32 bg-ink">
      <div className="container-px mx-auto max-w-7xl">
        <SectionReveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="section-label text-red-500 font-display font-bold text-sm tracking-[0.3em] mb-4">
              גלריה
            </p>
            <h2 className="font-display font-black text-4xl md:text-5xl text-white leading-tight">
              הצצה <span className="text-gradient-red">למכון</span>
            </h2>
          </div>
          <p className="text-cream/60 max-w-sm">
            כל פינה תוכננה כדי לתת לכם את חוויית האימון הטובה ביותר.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mt-14">
          {IMAGES.map((img, i) => (
            <SectionReveal key={img.src} delay={i * 0.1} className={i === 0 ? "col-span-2 row-span-2" : ""}>
              <div className={`group relative rounded-2xl overflow-hidden ${i === 0 ? "aspect-square md:aspect-auto md:h-full min-h-[280px]" : "aspect-square"}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/0 to-ink/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <p className="absolute bottom-4 right-4 text-white font-display font-bold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  {img.alt}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
