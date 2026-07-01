/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ca8a04', // Mustard Yellow
          hover: '#a17a02',
        },
        secondary: {
          DEFAULT: '#1e40af', // Royal/Navy Blue
          hover: '#1d4ed8',
        },
        dark: {
          DEFAULT: '#0f172a', // Slate 900
          light: '#1e293b', // Slate 800
          card: '#1e293b',
        },
        accent: '#f59e0b', // Solar Amber
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 10px 30px -10px rgba(15, 23, 42, 0.08)',
        'premium-hover': '0 20px 40px -15px rgba(202, 138, 4, 0.15)',
        'premium-blue': '0 20px 40px -15px rgba(30, 64, 175, 0.15)',
      }
    },
  },
  plugins: [],
}
