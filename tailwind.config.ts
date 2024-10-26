import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      },
      colors: {
        foreground: "var(--foreground)",
        primaryLight: '#2B50AA',
        primary: '#213C83',
        primaryDark: '#142652',
        primaryLighter: '#7C98DF'
      },
    },
  },
  plugins: [],
};
export default config;
