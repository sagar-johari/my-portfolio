import type { Config } from "tailwindcss";

export default {
  darkMode: "class", // Enables dark mode via class (e.g., `dark` class on <html> or <body>)
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light mode colors
        theme_accent: "var(--theme-accent)",
        themeBlack: "var(--theme-black)",
        themeborder: "#fff",
        text: "#fff",
        background: `var(--background)`,
        
        // Dark mode colors (used with 'dark' class)
        dark: {
          theme_accent: "var(--theme-accent)",
          themeBlack: "#1A1A1A",
          themeborder: "#fff",
          text: "#FFFFFF",
          background: "#000000",
        },
      },
      fontFamily: {
        jetBrainsMono: ["var(--font-jetbrains)", "monospace"],
        bebasNeue: ["var(--font-bebas)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
