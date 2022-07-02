/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    fontFamily: {
      sans: ['Lobster', 'cursive'],
      serif: ['Overlock', 'cursive'],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          'primary': '#3730a3',
          'secondary': '#FF0066',
          'accent': '#7c3aed',
          'error': '#b91c1c',
          'success': '#15803d',
        }
      }
    ]
  }
}
