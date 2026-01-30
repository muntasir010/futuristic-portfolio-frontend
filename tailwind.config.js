/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backdropBlur: {
        xs: "2px",
      },
      colors: {
        glass: "rgba(255,255,255,0.08)",
        neon: "#38bdf8",
      },
    },
  },
  screens: {
    xs: "320px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
  plugins: [],
};
