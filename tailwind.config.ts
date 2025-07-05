/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Tailwind will scan these files
  ],
  theme: {
    extend: {
      fontFamily: {
        arabic: ["'Noto Naskh Arabic'", "serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
