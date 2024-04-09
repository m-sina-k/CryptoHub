import tailwindcssAnimate from "tailwindcss-animate"
import { createThemes } from "tw-colors"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      borderWidth: {
        1: "1px",
      },
      fontSize: {
        heading: "24px",
      },
      fontFamily: {
        blink: ["var(--font-BlinkMacSystemFont)"],
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
        brand: "#2ea5fb",
        green: "#00a68c",
        red: "#d9475a",
        yellow: "#FFC312",
        twc_background: "hsl(var(--twc-background))",
        twc_foreground: "hsl(var(--twc-foreground))",
        twc_primary: "hsl(var(--twc-primary))",
        twc_secondary: "hsl(var(--twc-secondary))",
        twc_muted: "hsl(var(--twc-muted))",
        twc_border: "hsl(var(--twc-border))",
        twc_accent: "hsl(var(--twc-accent))",
        twc_inverse: "hsl(var(--twc-inverse))",
        twc_tooltip__background: "hsl(var(--twc-tooltip__background))",
        twc_tooltip__text: "hsl(var(--twc-tooltip__text))",
        twc_table_row__background: "hsl(var(--twc-table_row__background))",
        twc_table_row__background_hover:
          "hsl(var(--twc-table_row__background_hover))",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    tailwindcssAnimate,
    createThemes(
      {
        light: {
          foreground: "#ffffff",
          background: "#F5F6F9",
          secondary: "#323c52",
          primary: "#0b1426",
          inverse: "#ffffff",
          muted: "#5d667b",
          border: "#C9CFDD",
          accent: "#ffffff",
          table_row__background: "#ffffff",
          table_row__background_hover: "#ffffff",
        },
        dark: {
          foreground: "#0B1426",
          background: "#12192b",
          secondary: "#c9cfdd",
          primary: "#ffffff",
          inverse: "#000000",
          border: "#373e4d",
          muted: "#a0a9be",
          accent: "#122036",
          tooltip__background: "#ffffff",
          tooltip__text: "#373737",
          table_row__background: "#122640",
          table_row__background_hover: "#122f4d",
        },
      },
      {
        produceCssVariable: (colorName) => `--twc-${colorName}`,
      },
    ),
  ],
}

export default config
