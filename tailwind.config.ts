import plugin from "tailwindcss/plugin";
import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Sora", "ui-sans-serif", "system-ui", "sans-serif"],
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
        indigo: "#270685",
        "majorelle-blue": "#6F45E9",
        lavendar: "#E6DDFF",
        "golden-gate-bridge": "#B83232",
        "sea-green": "#289B4F",
        "american-purple": "#540F55",
        violet: "#963898",
        "pearly-purple": "#B462B6",
        "bright-gray": "#F2E1F2",
        powder: "#FFF6FF",
        "dark-bronze": "#875202",
        golden: "#DDA921",
        mango: "#FDC228",
        blond: "#FFECBA",
        "floral-white": "#FFFAEC",
        maroon: "#6F1212",
        "jelly-bean": "#E05555",
        "pale-pink": "#FFD6D6",
        snow: "#FFF6F6",
        "la-salle-green": "#117031",
        "bright-green": "#E6F6EC",
        "mint-cream": "#F4FFF8",
        grass: "#0B453B",
        emerald: "#2A907E",
        verdigris: "#4FBCA8",
        "columbia-blue": "#C9EBE5",
        bubbles: "#E9FFFB",
        "catalina-blue": "#0D3674",
        "bleu-de-france": "#3B85F3",
        cloud: "#E4EFFF",
        "ghost-white": "#F5F9FF",
        white: "#FFFFFF",
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
        ".active-icon": {
          filter:
            "brightness(0) saturate(100%) invert(32%) sepia(88%) saturate(1200%) hue-rotate(238deg) brightness(97%) contrast(97%)",
        },
        ".inactive-icon": {
          filter: "brightness(0) opacity(70%)",
        },
        ".error-icon": {
          filter:
            "brightness(0) saturate(100%) invert(24%) sepia(81%) saturate(1014%) hue-rotate(327deg) brightness(96%) contrast(96%)",
        },
        ".success-icon": {
          filter:
            "brightness(0) saturate(100%) invert(56%) sepia(32%) saturate(761%) hue-rotate(97deg) brightness(97%) contrast(89%)",
        },
      });
    }),
  ],
} satisfies Config;
