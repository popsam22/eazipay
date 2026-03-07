import plugin from "tailwindcss/plugin";
import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Sora", "ui-sans-serif", "system-ui", "sans-serif"],
        funnel: ["Funnel Display", "sans-serif"],
      },
      colors: {
        black: "#191919",
        "black-coral": "#535D66",
        "slate-gray": "#78838D",
        "silver-sand": "#BAC2C7",
        "alice-blue": "#EDEFF6",
        cultured: "#F7F8FE",
        "azureish-white": "#E1E3ED",
        mangolia: "#F7F4FF",
        "ocean-blue": "#5732BF",
        "celtic-blue": "#1D62CA",
        shamrock: "#4DA66B",
      },
      borderRadius: {
        sm: "4px",
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".b1": {
          "font-size": "36px",
          "font-weight": "600",
          "line-height": "1.5",
        },
        ".b2": {
          "font-size": "24px",
          "font-weight": "600",
          "line-height": "1.5",
        },
        ".b3": {
          "font-size": "21px",
          "font-weight": "600",
          "line-height": "1.5",
        },
        ".b4": {
          "font-size": "18px",
          "font-weight": "600",
          "line-height": "1.5",
        },
        ".b5": {
          "font-size": "16px",
          "font-weight": "600",
          "line-height": "1.5",
        },
        ".b6": {
          "font-size": "14px",
          "font-weight": "600",
          "line-height": "1.5",
        },
        ".b7": {
          "font-size": "12px",
          "font-weight": "600",
          "line-height": "1.5",
        },
        ".r1": {
          "font-size": "36px",
          "font-weight": "400",
          "line-height": "1.5",
        },
        ".r2": {
          "font-size": "24px",
          "font-weight": "400",
          "line-height": "1.5",
        },
        ".r3": {
          "font-size": "21px",
          "font-weight": "400",
          "line-height": "1.5",
        },
        ".r4": {
          "font-size": "18px",
          "font-weight": "400",
          "line-height": "1.5",
        },
        ".r5": {
          "font-size": "16px",
          "font-weight": "400",
          "line-height": "1.5",
        },
        ".r6": {
          "font-size": "14px",
          "font-weight": "400",
          "line-height": "1.5",
        },
        ".r7": {
          "font-size": "12px",
          "font-weight": "400",
          "line-height": "1.5",
        },
      });
    }),
  ],
} satisfies Config;
