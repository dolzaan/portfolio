// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
}

module.exports = {
  theme: {
    extend: {
      animation: {
        gradient: 'gradient 8s ease infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
    },
  },
}

module.exports = {
  theme: {
    extend: {
      animation: {
        'light-sweep': 'light-sweep 8s ease infinite',
      },
      keyframes: {
        'light-sweep': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
    },
  },
}