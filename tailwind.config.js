/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        herobanner: "url('../public/hero-background.svg')",
        texturebg: "url('../public/texturebg.svg')",
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
        noto:"var(--font-noto-serif)",
        mono:"var(--font-space-mono)",
      },
       keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 25s linear infinite", 
      },
    },
    screens: {
      'sm': {'min': '320px', 'max': '767px'},

      'ms': {'min': '540px', 'max': '767px'},
      
      'md': {'min': '768px', 'max': '1024px'},
      
      'lg': {'min': '1024px', 'max': '1279px'},
      
      'xc': {'min': '1280px', 'max': '1398px'},
      
      'xl': {'min': '1280px', 'max': '1535px'},
      
      '2xl': {'min': '1536px'},
      
      '3xl': {'min': '1535px', 'max': '6500px'},
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