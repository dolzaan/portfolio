// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'scroll-grid': 'scrollGrid 40s linear infinite',
      },
      keyframes: {
        scrollGrid: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '100px 100px' },
        },
      },
    },
  },
  plugins: [],
}
