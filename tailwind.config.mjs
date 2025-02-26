/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#801AE5",
        black: "#1A172B",
        white: "#FFFFFF",
        gray: "#ADADAE",
      },
      fontFamily: {
        heading: ["Arboria", "sans-serif"],
      },
    },
  },
  plugins: [],
};
