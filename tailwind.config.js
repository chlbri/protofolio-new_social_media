const plugin = require('tailwindcss/plugin');

module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        '2xl': '1600px',
        '3xl': '2000px',
      },
      backgroundImage: {
        pastel: "url('/images/bg-pastel.jpg')",
      },
    },
  },
  variants: {
    extend: {
      // animation: ['group-hover', 'responsive', 'hover', 'focus'],
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addUtilities({
        '.text-shadow': {
          'text-shadow': '2px 2px 8px rgba(4,2,1,0.5)',
        },
        '.shadow-all': {
          'box-shadow': '0 0 20px 10px rgba(4,2,1,0.1)',
        },
      });
    }),
    require('tailwind-scrollbar-hide'),
  ],
};
