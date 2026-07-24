import Image from "next/image";
import { Instagram, Facebook, Phone, MapPin, Mail } from "lucide-react";

const LINKS = [
  { href: "#about", label: "אודות" },
  { href: "#why", label: "למה אנחנו" },
  { href: "#gallery", label: "גלריה" },
  { href: "#pricing", label: "מנויים ומחירון" },
  { href: "#trainers", label: "מאמנים" },
  { href: "#equipment", label: "ציוד המכון" },
  { href: "#testimonials", label: "המלצות" },
  { href: "#faq", label: "שאלות ותשובות" },
  { href: "#contact", label: "יצירת קשר" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-ink pt-16 pb-8">
      <div className="container-px mx-auto max-w-7xl grid md:grid-cols-[1.3fr_1fr_1fr] gap-12">
        <div>
          <div className="flex items-center gap-3">
            <div className="relative h-11 w-11">
              <Image
                src="/images/logo.jpg"
                alt="PRO BODY GYM"
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <span className="font-display font-black text-xl text-white">
              PRO BODY GYM
            </span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/60">
            מכון הכושר היוקרתי ביותר בחריש. ציוד מהמתקדם בעולם, מאמנים
            מקצועיים ואווירה שמדליקה אתכם להיות הגרסה הכי חזקה של עצמכם.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="#"
              aria-label="עקבו אחרינו באינסטגרם"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-cream/70 transition-colors hover:border-red-600 hover:text-red-500"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              aria-label="עקבו אחרינו בפייסבוק"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-cream/70 transition-colors hover:border-red-600 hover:text-red-500"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display font-bold text-white text-sm tracking-widest section-label">
            ניווט מהיר
          </h3>
          <ul className="mt-5 space-y-3">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-cream/60 transition-colors hover:text-red-500"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display font-bold text-white text-sm tracking-widest section-label">
            פרטי התקשרות
          </h3>
          <ul className="mt-5 space-y-4">
            <li className="flex items-start gap-3 text-sm text-cream/60">
              <MapPin size={17} className="mt-0.5 shrink-0 text-red-500" />
              רחוב ההתחדשות 4, חריש
            </li>
            <li className="flex items-start gap-3 text-sm text-cream/60">
              <Phone size={17} className="mt-0.5 shrink-0 text-red-500" />
              <span dir="ltr">050-000-0000</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-cream/60">
              <Mail size={17} className="mt-0.5 shrink-0 text-red-500" />
              <span dir="ltr">info@probodygym.co.il</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-px mx-auto max-w-7xl mt-14 flex flex-col-reverse items-center gap-4 border-t border-line pt-6 md:flex-row md:justify-between">
        <p className="text-xs text-cream/40">
          © {new Date().getFullYear()} PRO BODY GYM. כל הזכויות שמורות.
        </p>
        <p className="text-xs text-cream/40">
          עוצב ונבנה באהבה עבור מתאמנים רציניים בלבד.
        </p>
      </div>
    </footer>
  );
}
