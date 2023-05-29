/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--custom-color-primary) / <alpha-value>)',
      },
      fontFamily: {
        hubotSans: ['Hubot Sans', 'Roboto', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};
