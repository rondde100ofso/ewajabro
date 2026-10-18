import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#08090B",
        black: {
          DEFAULT: "#08090B",
          pure: "#050607",
          deep: "#08090B",
        },
        graphite: {
          DEFAULT: "#141619",
          card: "#141619",
          hover: "#1A1D21",
        },
        charcoal: {
          DEFAULT: "#1D2024",
          light: "#282C32",
          border: "rgba(255, 255, 255, 0.08)",
          subtle: "rgba(255, 255, 255, 0.04)",
        },
        brand: {
          text: "#F5F5F3",
          muted: "#A4A7AC",
          dim: "#6B7078",
          red: {
            DEFAULT: "#E62935",
            bright: "#FF3846",
            glow: "rgba(230, 41, 53, 0.35)",
            dark: "#A31620",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        display: ["var(--font-display)", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        normal: "0em",
        wide: "0.04em",
        wider: "0.08em",
        widest: "0.15em",
        mega: "0.25em",
      },
      keyframes: {
        sweep: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(200%)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
      },
      animation: {
        sweep: "sweep 2.2s ease-in-out infinite",
        scanline: "scanline 8s linear infinite",
        pulseSubtle: "pulseSubtle 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
