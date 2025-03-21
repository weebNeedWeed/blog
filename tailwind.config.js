/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF3D00", // Vibrant orange-red
        secondary: "#00E5FF", // Bright cyan
        accent: "#FFFF00", // Pure yellow
        "brutalism-bg": "#F5F5F5", // Light gray background
        "neon-pink": "#FF00FF", // Electric pink
        "acid-green": "#CCFF00", // Acid green
      },
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["Rubik", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      borderWidth: {
        3: "3px",
        5: "5px",
        8: "8px",
      },
      boxShadow: {
        brutal: "5px 5px 0px 0px rgba(0,0,0,1)",
        "brutal-lg": "8px 8px 0px 0px rgba(0,0,0,1)",
      },
    },
  },
  plugins: [],
};
