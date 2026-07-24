# PRO BODY GYM — אתר Premium

אתר תדמית מלא ל-PRO BODY GYM, חריש. נבנה עם Next.js 15 (App Router), React 19,
TypeScript, Tailwind CSS ו-Framer Motion.

## הרצה מקומית

```bash
npm install
npm run dev
```

האתר יעלה בכתובת http://localhost:3000

## בנייה לפרודקשן

```bash
npm run build
npm start
```

## פריסה ל-Vercel

1. העלו את התיקייה הזו לריפו ב-GitHub / GitLab / Bitbucket (או גררו ישירות
   ל-vercel.com/new אם אתם לא רוצים ריפו).
2. היכנסו ל-https://vercel.com/new וייבאו את הפרויקט.
3. Vercel תזהה אוטומטית שזה פרויקט Next.js — אין צורך בהגדרות נוספות.
4. לחצו Deploy.

## מה חשוב לעדכן לפני עלייה לאוויר

- **מספרי טלפון / וואטסאפ**: חפשו `972500000000` בקבצי הקומפוננטות
  (`Navbar.tsx`, `Hero.tsx`, `WhatsAppButton.tsx`, `Contact.tsx`, `Footer.tsx`,
  `app/layout.tsx`) והחליפו במספר האמיתי של המכון.
- **אימייל**: חפשו `info@probodygym.co.il` והחליפו בכתובת האמיתית.
- **מחירון**: בקובץ `components/Pricing.tsx` — עדכנו מחירים ותנאים בפועל.
- **כתובת ל-Google Maps**: ב-`components/Contact.tsx` יש iframe שמצביע על
  "התחדשות 4, חריש" — אם תרצו הצמדה מדויקת יותר לבניין, ניתן להחליף את
  ה-embed בקישור ישיר מ-Google Maps ("שתף" → "הטמע מפה").
- **דומיין**: בקובץ `app/layout.tsx` ו-`app/sitemap.ts` מוגדר
  `https://probodygym.co.il` — עדכנו לדומיין האמיתי שתרכשו.
- **רשתות חברתיות**: הקישורים ב-`Footer.tsx` ו-`Trainers.tsx` הם placeholder
  (`href="#"`) — עדכנו לקישורים האמיתיים.

## מבנה הפרויקט

```
app/            נתיבי Next.js (layout, page, sitemap, globals.css)
components/     כל קטעי האתר (Hero, About, Pricing, Contact וכו')
public/images/  תמונות המכון (משופרות) והלוגו
```

## הערות טכניות

- האתר Mobile First, RTL מלא (`dir="rtl"`), עם תמיכה ב-`prefers-reduced-motion`.
- אנימציות Framer Motion מבוססות scroll-reveal, לא פוגעות ב-performance.
- SEO: מטא-תגיות מלאות, Open Graph, JSON-LD (Schema.org `ExerciseGym`),
  `sitemap.ts` ו-`robots.txt`.
- כל התמונות עברו שיפור חדות, קונטרסט וצבע (Pillow) תוך שמירה על מראה טבעי.
