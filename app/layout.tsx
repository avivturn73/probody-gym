import type { Metadata } from "next";
import { Rubik, Heebo } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const rubik = Rubik({
  subsets: ["hebrew", "latin"],
  weight: ["500", "700", "800", "900"],
  variable: "--font-rubik",
  display: "swap",
});

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heebo",
  display: "swap",
});

const siteUrl = "https://probodygym.co.il";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "PRO BODY GYM | מכון הכושר המוביל בחריש",
  description:
    "PRO BODY GYM — מכון כושר יוקרתי בחריש, רחוב ההתחדשות 4. ציוד מקצועי מהחדשים בעולם, מאמנים אישיים, ואווירה שמדליקה אתכם לתוצאות. קבעו אימון ניסיון חינם עוד היום.",
  keywords: [
    "חדר כושר חריש",
    "מכון כושר חריש",
    "פרו בודי",
    "PRO BODY GYM",
    "אימון אישי חריש",
    "חדר כושר פרימיום",
  ],
  authors: [{ name: "PRO BODY GYM" }],
  openGraph: {
    title: "PRO BODY GYM | מכון הכושר המוביל בחריש",
    description:
      "ציוד מקצועי, מאמנים מומחים ואווירה עוצמתית. הצטרפו למכון ברמה אחרת ברחוב ההתחדשות 4, חריש.",
    url: siteUrl,
    siteName: "PRO BODY GYM",
    locale: "he_IL",
    type: "website",
    images: [{ url: "/images/gym-strength.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PRO BODY GYM | מכון הכושר המוביל בחריש",
    description: "ציוד פרימיום, מאמנים מומחים, אווירה עוצמתית. חריש, רחוב ההתחדשות 4.",
    images: ["/images/gym-strength.jpg"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/icon-180.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  name: "PRO BODY GYM",
  image: `${siteUrl}/images/gym-strength.jpg`,
  logo: `${siteUrl}/images/logo.jpg`,
  url: siteUrl,
  telephone: "+972500000000",
  priceRange: "₪₪",
  address: {
    "@type": "PostalAddress",
    streetAddress: "רחוב ההתחדשות 4",
    addressLocality: "חריש",
    addressCountry: "IL",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "06:00",
      closes: "23:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday"],
      opens: "07:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "15:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="he" dir="rtl" className={`${rubik.variable} ${heebo.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased bg-ink text-cream overflow-x-hidden">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
