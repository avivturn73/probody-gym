"use client";

import { Phone, MapPin, Mail, MessageCircle, Send } from "lucide-react";
import SectionReveal from "./SectionReveal";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-surface overflow-hidden">
      <div className="absolute inset-0 bg-red-glow opacity-40 pointer-events-none" />
      <div className="container-px relative mx-auto max-w-7xl">
        <SectionReveal className="max-w-2xl mx-auto text-center">
          <p className="section-label text-red-500 font-display font-bold text-sm tracking-[0.3em] mb-4">
            יצירת קשר
          </p>
          <h2 className="font-display font-black text-4xl md:text-5xl text-white leading-tight">
            מוכנים <span className="text-gradient-red">להתחיל?</span>
          </h2>
          <p className="mt-4 text-cream/65 leading-relaxed">
            השאירו פרטים ונחזור אליכם, או דברו איתנו ישירות. אימון הניסיון
            הראשון עלינו.
          </p>
        </SectionReveal>

        <div className="mt-16 grid lg:grid-cols-5 gap-8">
          <SectionReveal className="lg:col-span-3">
            <form
              className="glass rounded-3xl p-7 md:p-9 space-y-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm text-cream/70 mb-2">
                    שם מלא
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="השם שלך"
                    className="w-full rounded-xl border border-line bg-surface2/70 px-4 py-3 text-white placeholder:text-cream/30 outline-none transition-colors focus:border-red-600"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm text-cream/70 mb-2">
                    טלפון
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder="050-0000000"
                    dir="ltr"
                    className="w-full rounded-xl border border-line bg-surface2/70 px-4 py-3 text-white placeholder:text-cream/30 outline-none transition-colors focus:border-red-600 text-right"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-cream/70 mb-2">
                  אימייל
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  dir="ltr"
                  className="w-full rounded-xl border border-line bg-surface2/70 px-4 py-3 text-white placeholder:text-cream/30 outline-none transition-colors focus:border-red-600 text-right"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-cream/70 mb-2">
                  הודעה
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="ספרו לנו מה המטרה שלכם..."
                  className="w-full rounded-xl border border-line bg-surface2/70 px-4 py-3 text-white placeholder:text-cream/30 outline-none transition-colors focus:border-red-600 resize-none"
                />
              </div>
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-red-600 py-4 font-display font-bold text-white shadow-xl shadow-red-900/40 transition-all hover:scale-[1.02] hover:shadow-red-600/40 active:scale-95"
              >
                <Send size={18} className="transition-transform group-hover:-translate-x-1" />
                קבעו אימון ניסיון
              </button>
            </form>
          </SectionReveal>

          <SectionReveal delay={0.15} className="lg:col-span-2 flex flex-col gap-5">
            <a
              href="tel:+972500000000"
              className="group flex items-center gap-4 rounded-2xl border border-line bg-surface2/60 p-6 transition-all hover:border-red-600/60 hover:-translate-y-0.5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-600/15 text-red-500 transition-colors group-hover:bg-red-600 group-hover:text-white">
                <Phone size={20} />
              </div>
              <div>
                <p className="font-display font-bold text-white">התקשרו עכשיו</p>
                <p className="text-sm text-cream/60" dir="ltr">050-000-0000</p>
              </div>
            </a>

            <a
              href="https://wa.me/972500000000"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-line bg-surface2/60 p-6 transition-all hover:border-red-600/60 hover:-translate-y-0.5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-600/15 text-red-500 transition-colors group-hover:bg-red-600 group-hover:text-white">
                <MessageCircle size={20} />
              </div>
              <div>
                <p className="font-display font-bold text-white">וואטסאפ</p>
                <p className="text-sm text-cream/60">מענה מהיר לכל שאלה</p>
              </div>
            </a>

            <a
              href="mailto:info@probodygym.co.il"
              className="group flex items-center gap-4 rounded-2xl border border-line bg-surface2/60 p-6 transition-all hover:border-red-600/60 hover:-translate-y-0.5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-600/15 text-red-500 transition-colors group-hover:bg-red-600 group-hover:text-white">
                <Mail size={20} />
              </div>
              <div>
                <p className="font-display font-bold text-white">אימייל</p>
                <p className="text-sm text-cream/60" dir="ltr">info@probodygym.co.il</p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-line bg-surface2/60 p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-600/15 text-red-500">
                <MapPin size={20} />
              </div>
              <div>
                <p className="font-display font-bold text-white">הכתובת שלנו</p>
                <p className="text-sm text-cream/60">רחוב ההתחדשות 4, חריש</p>
              </div>
            </div>
          </SectionReveal>
        </div>

        <SectionReveal delay={0.2} className="mt-8">
          <div className="overflow-hidden rounded-3xl border border-line h-[380px] md:h-[420px]">
            <iframe
              title="PRO BODY GYM על המפה - רחוב ההתחדשות 4, חריש"
              src="https://www.google.com/maps?q=%D7%94%D7%AA%D7%97%D7%93%D7%A9%D7%95%D7%AA%204%2C%20%D7%97%D7%A8%D7%99%D7%A9&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              style={{ border: 0, filter: "invert(92%) hue-rotate(180deg) contrast(90%)" }}
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
