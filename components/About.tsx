"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-ink overflow-hidden">
      <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-2 gap-14 items-center">
        <SectionReveal className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
            <Image
              src="/images/gym-functional.jpg"
              alt="אזור אימון פונקציונלי ב-PRO BODY GYM"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute -bottom-8 -right-6 md:-right-10 glass rounded-2xl px-6 py-5 md:px-8 md:py-6"
          >
            <p className="font-display font-black text-3xl md:text-4xl text-gradient-red">2019</p>
            <p className="text-xs md:text-sm text-muted mt-1 tracking-widest">שנת ההקמה</p>
          </motion.div>
        </SectionReveal>

        <div className="order-1 lg:order-2">
          <SectionReveal>
            <p className="section-label text-red-500 font-display font-bold text-sm tracking-[0.3em] mb-4">
              אודות המכון
            </p>
            <h2 className="font-display font-black text-4xl md:text-5xl leading-[1.05] text-white">
              לא עוד חדר כושר.
              <br />
              <span className="text-gradient-red">מכון לבניית משמעת.</span>
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <p className="mt-6 text-cream/70 leading-relaxed text-base md:text-lg">
              PRO BODY GYM הוקם מתוך אמונה אחת: שהגוף והנפש מתחזקים יחד. ברחוב
              ההתחדשות 4 בחריש בנינו מרחב אימון נקי, עוצמתי ומדויק — עם ציוד
              מהמתקדם שיש כיום, תאורה ואווירה שנועדו למקד אתכם במטרה אחת בלבד:
              להיות הגרסה החזקה ביותר של עצמכם.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.25}>
            <p className="mt-4 text-cream/70 leading-relaxed text-base md:text-lg">
              כל פינה במכון תוכננה במחשבה — מאזורי הכוח והמשקולות החופשיות, דרך
              המכשירים הפונקציונליים ועד אזור הקרדיו המשוכלל. זה המקום שבו
              מתאמנים רציניים הופכים להיות בלתי ניתנים לעצירה.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.35} className="mt-8 flex flex-wrap gap-3">
            {["ציוד פרימיום", "מאמנים מוסמכים", "אווירה מדבקת", "נקיון ללא פשרות"].map(
              (tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-line px-4 py-2 text-sm text-cream/80 font-medium"
                >
                  {tag}
                </span>
              )
            )}
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
