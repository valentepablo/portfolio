/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern2": "url('/bg-pattern.png')",
        "hero-pattern":
          'url("https://www.transparenttextures.com/patterns/diagmonds.png")',
      },
    },
  },
  plugins: [],
};
