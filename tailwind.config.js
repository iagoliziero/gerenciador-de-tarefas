/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'button-hover': 'button-scale 0.6s ease-in-out infinite alternate',
      },
      keyframes: {
        'button-scale': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.03)' },
        },
      },
      transitionProperty: {
        'margin-right': 'margin-right', // Adiciona suporte para transição de margin-right
      },
    },
  },
  plugins: [],
}