/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: "Manrope",
    },
    extend: {
      colors: {
        primary: "#D87D4A",
        secondary: "#101010",
        gray: "#F1F1F1",
        white: "#FAFAFA",
        hoverPrimary: "#fbaf85",
        hoverSecondary: "#FFFFFF",
        black: "#000000",
        activeClassName: "#D87D4A",
      },
      container: {
        center: true,
        padding: { DEFAULT: "1rem", sm: "3rem" },
      },
    },
    variants: {
      extend: {
        opacity: ["responsive", "hover", "focus", "group-hover"],
        visibility: ["responsive", "group-hover"],
        transform: ["responsive", "hover", "focus"],
        translate: ["responsive", "hover", "focus"],
      },
    },
  },
  plugins: [],
};
