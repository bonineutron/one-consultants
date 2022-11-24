/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-color': '#2ecc71',
        'secondary-color': '#3498db'
      },
      boxShadow: {
        'invert-lg': '0 -10px 15px -3px rgba(0, 0, 0, 0.1)'
      }
    }
  },
  plugins: []
};
