/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        beliansky: {
          bg: "#0d0d0d",
          cyan: "#00e5ff",
          white: "#f5f5f5",
        },
      },
    },
  },
  plugins: [],
};
