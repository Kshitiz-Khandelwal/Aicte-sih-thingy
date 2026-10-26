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
        background: "#F7F4EC",
        surface: {
          DEFAULT: "#FFFEFA",
          warm: "#FAF8F2",
          lightBlue: "#EAF0F6",
          darkNavy: "#102B48",
          navy: "#173652",
        },
        navy: {
          900: "#102B48",
          800: "#173652",
          700: "#1E476B",
          600: "#2B5881",
          500: "#496D91",
          400: "#6B8CAE",
          100: "#EAF0F6",
        },
        gold: {
          DEFAULT: "#B58545",
          light: "#D8A968",
          dark: "#946B31",
          50: "#FDF9F0",
        },
        amber: {
          alert: "#E0A34A",
          light: "#FDF4E5",
          border: "#E9CD9E",
        },
        border: {
          DEFAULT: "#DEDCD3",
          light: "#EBE9E2",
          dark: "#C8C5BA",
        },
        text: {
          primary: "#26384A",
          secondary: "#6C7884",
          muted: "#8C97A2",
          dark: "#102B48",
        },
        status: {
          success: "#398565",
          successBg: "#EDF7F2",
          successBorder: "#C0E4D2",
          error: "#C95F55",
          errorBg: "#FDF0EE",
          errorBorder: "#F3CAC6",
          warning: "#E0A34A",
          warningBg: "#FEF7EC",
          warningBorder: "#F6DFB5",
          info: "#2B6CB0",
          infoBg: "#EBF8FF",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "DM Serif Display", "Georgia", "Baskerville", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 1px 3px rgba(16, 43, 72, 0.04), 0 1px 2px rgba(16, 43, 72, 0.02)",
        card: "0 2px 8px -2px rgba(16, 43, 72, 0.06), 0 1px 4px -1px rgba(16, 43, 72, 0.04)",
        dropdown: "0 10px 25px -5px rgba(16, 43, 72, 0.1), 0 8px 10px -6px rgba(16, 43, 72, 0.05)",
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "6px",
        md: "8px",
        lg: "10px",
        xl: "14px",
        "2xl": "18px",
      },
    },
  },
  plugins: [],
};
export default config;

