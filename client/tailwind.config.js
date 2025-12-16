/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        spotifyBlack: "#121212",
        spotifyGray: "#181818",
        spotifyGreen: "#1DB954"
      }
    },
  },
  plugins: [],
}

