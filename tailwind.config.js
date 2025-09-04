/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'primary-black': '#000000',
        'secondary-black': '#1a1a1a',
        'primary-blue': '#2563eb',
        'secondary-blue': '#3b82f6',
        'primary-yellow': '#fbbf24',
        'secondary-yellow': '#f59e0b',
        'primary-green': '#10b981',
        'secondary-green': '#059669',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
