/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      },
      backgroundColor: {
        tomato: "#FF9357",
        black_text: "#141414"
      }
    }
  },
  plugins: []
};
