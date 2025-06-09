import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        slate: {
          800: "#1e293b",
          900: "#0f172a",
        },
        red: {
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
        },
        orange: {
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
        },
        crimson: {
          400: "#ff6b6b",
          500: "#ff5252",
          600: "#f44336",
          700: "#d32f2f",
          800: "#c62828",
          900: "#b71c1c",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-glow": {
          "0%, 100%": {
            boxShadow: "0 0 5px #ef4444, 0 0 10px #ef4444, 0 0 15px #ef4444",
            transform: "scale(1)",
          },
          "50%": {
            boxShadow: "0 0 10px #ef4444, 0 0 20px #ef4444, 0 0 30px #ef4444",
            transform: "scale(1.02)",
          },
        },
        "neon-flicker": {
          "0%, 100%": { textShadow: "0 0 5px #ef4444, 0 0 10px #ef4444" },
          "50%": {
            textShadow: "0 0 10px #ef4444, 0 0 20px #ef4444, 0 0 30px #ef4444",
          },
        },
        "battle-shake": {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-1px)" },
          "75%": { transform: "translateX(1px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "neon-flicker": "neon-flicker 1.5s ease-in-out infinite",
        "battle-shake": "battle-shake 0.3s ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
