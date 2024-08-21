import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "image-bg": "url('/bg.svg')",
      },
      colors: {
        "primary-dark": "#1F1F1F",
        "primary-light": "#E6DD06",
        "secondary-dark": "#1F1F1F",
      },
    },
  },
  plugins: [],
};
export default config;
