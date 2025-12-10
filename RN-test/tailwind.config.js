/** @type {import('tailwindcss').Config} */
module.exports = {
  // Tell Tailwind which files contain className usage
  content: [
    "./App.js",
    "./screens/**/*.{js,jsx,ts,tsx}",
  ],

  // Use NativeWind preset for React Native
  presets: [require("nativewind/preset")],

  theme: {
    extend: {},
  },

  plugins: [],
};
