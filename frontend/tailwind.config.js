/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      one: "#E3FDF2",
      two: "#F9F7E6",
      three: "#FFF1F2",
      four: "#EAE9F8",
      five: "#1DAA55",
    },
  },
  plugins: [require("flowbite/plugin")],
};
