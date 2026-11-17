/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#ffffffff',
      black: '#0c0c15ff',
      neutral: {
        900: '#1b1b2dff',
        800: '#25253cff',
        700: '#35324bff',
        600: '#4e4b66ff',
        500: '#7d7a92ff',
        400: '#cac8d9ff',
        300: '#d9d9e5ff',
        200: '#ececf5ff',
        100: '#fafafaff',
      },
      primary: {
        1000: '#121336ff',
        900: '#1d1e54ff',
        800: '#292a7dff',
        700: '#3234abff',
        600: '#3d40c4ff',
        500: '#5d5fefff',
        400: '#7375edff',
        300: '#9091f4ff',
        200: '#b5b6f8ff',
        100: '#ededfdff',
      },
    },
    extend: {
      fontFamily: {
        sans: 'var(--font-raleway)',
        title: 'var(--font-heebo)',
      },
      gridTemplateRows: {
        main: 'auto 1fr auto',
        login: 'auto 1fr',
      },
    },
  },
  plugins: [],
}

module.exports = config
