/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#074FB5",
        sunshine: "#FFD93D",
        coral: "#FF6B6B",
        mint: "#6BCB77",
        sky: "#4D96FF",
        lavender: "#C9B1FF",
        cream: "#FFF8E7",
        peach: "#FFE5D9",
      },
      fontFamily: {
        sans: ["BW Surco", "system-ui", "sans-serif"],
        surco: ["BW Surco", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        soft: "0 10px 40px rgba(0, 0, 0, 0.08)",
        "soft-lg": "0 20px 50px rgba(0, 0, 0, 0.12)",
        "glow-coral": "0 4px 15px rgba(255, 107, 107, 0.4)",
        "glow-sky": "0 4px 15px rgba(77, 150, 255, 0.4)",
      },
      animation: {
        blob: "blob 7s infinite",
        float: "float 6s ease-in-out infinite",
        "bounce-gentle": "bounce-gentle 2s ease-in-out infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
