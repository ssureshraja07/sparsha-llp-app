/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        skybrand: {
          50: "#f1f9fe",
          100: "#dff2fc",
          200: "#b9e5f8",
          300: "#82d1f2",
          400: "#42b8e8",
          500: "#149bd0",
          600: "#087daf",
          700: "#08648f",
          800: "#0a5476",
          900: "#0c4762"
        }
      },
      boxShadow: {
        soft: "0 20px 60px rgba(15, 23, 42, 0.08)"
      }
    }
  },
  plugins: []
};