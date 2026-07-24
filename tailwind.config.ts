import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0B",
        surface: "#141416",
        surface2: "#1D1D20",
        line: "#2A2A2E",
        red: {
          400: "#FF4141",
          500: "#F51818",
          600: "#E4111A",
          700: "#B60D14",
          800: "#7A0000",
          900: "#4A0000",
        },
        cream: "#F4F3F1",
        muted: "#9A9AA2",
      },
      fontFamily: {
        display: ["var(--font-rubik)", "sans-serif"],
        body: ["var(--font-heebo)", "sans-serif"],
      },
      backgroundImage: {
        "red-glow":
          "radial-gradient(60% 60% at 50% 40%, rgba(228,17,26,0.35) 0%, rgba(228,17,26,0) 70%)",
        "grain": "url('/images/noise.png')",
      },
      keyframes: {
        pulseline: {
          "0%, 100%": { opacity: "0.4", transform: "scaleX(0.96)" },
          "50%": { opacity: "1", transform: "scaleX(1)" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        pulseline: "pulseline 2.4s ease-in-out infinite",
        floaty: "floaty 6s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
