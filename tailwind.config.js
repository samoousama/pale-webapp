/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        herobanner: "url('../public/hero-background.svg')",
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        darktext:"var(--color-dark)",
        bgdark:"var(--bg-dark)"
      },
      fontFamily: {
        sora: "var(--font-sora)",
        noto:"var(--font-noto-serif)"
      },
    },
    container: {
      center: true,     
      padding: "1rem",  
      screens: {
        DEFAULT: "1280px",
      },
    },
  },
  plugins: [],
}