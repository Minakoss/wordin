/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Εάν χρησιμοποιείς φάκελο src
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}", // Προαιρετικά εάν έχεις φάκελο για components
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', "serif"], // Προσθήκη της γραμματοσειράς Playfair Display
      },
    },
  },
  plugins: [],
};
