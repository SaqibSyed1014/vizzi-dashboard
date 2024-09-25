import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: '#41CCAD',
        teritary: '#9CA3AF',
        blue: '#1A2956',
        coal: '#111928',
        grey: {
          light: '#E9EAEF',
          medium: '#E5E7EB'
        }
      },
    },
  },
  plugins: [],
};
export default config;
