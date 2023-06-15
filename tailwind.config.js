// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      keyframes: {
        'present-curtain': {
          '0%': {
            opacity: 1,
            position:'absolute'
          },
          '100%': {
            opacity:0,
            position: 'relative'
          },
        }
      },
      animation: {
        'present-curtain': 'present-curtain 1s ease-in-out both ',
      },
      colors: {
        primary: 'rgb(var(--custom-color-primary) / <alpha-value>)',
      },
      fontFamily: {
        hubotSans: ['Hubot Sans', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        Ubuntu: ['Ubuntu', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};
