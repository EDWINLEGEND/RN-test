/** @type {import('tailwindcss').Config} */
module.exports = {
  // Tell Tailwind where your components/screens live
  content: [
    "./App.js",
    "./screens/**/*.{js,jsx,ts,tsx}",
  ],

  // NativeWind default preset
  presets: [require("nativewind/preset")],
  
  theme: {
    extend: {},
  },

  plugins: [],
};
