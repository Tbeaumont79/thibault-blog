/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
       'karla': ['Karla', 'sans-serif'],
       'inconsolata': ['Inconsolata', 'monospace'],
      },
      colors: {
        primary: {
          default: "#2E7EFF",
          50: "#E6EFFF",
          100: "#D1E3FF",
          200: "#A8CAFF",
          300: "#80B0FF",
          400: "#5797FF",
          500: "#2E7EFF",
          600: "#005EF5",
          700: "#0048BD",
          800: "#003385",
          900: "#001D4D",
          950: "#001331",
        },
        secondary: {
          default: "##25998d",
          50: "#E6FFE6",
          100: "#D1FFD1",
          200: "#A8FFA8",
          300: "#80FF80",
          400: "#57FF57",
          500: "##25998d",
          600: "#006F5F",
          700: "#005E54",
          950: "#004B47",
        },
        accent: {
          default: "#00db80",
          50: "#e6ffe6",
          100: "#d1ffd1",
          200: "#a8ffa8",
          300: "#80ff80",
          400: "#57ff57",
          500: "#00db80",
          600: "#006f5f",
          700: "#005e54",
          950: "#004b47",
        },
        background: "#06151c",
        lightText: "#CCD0CF",
        lightBackground: "#11222e",
      },
    },
  },
  plugins: [],
};
