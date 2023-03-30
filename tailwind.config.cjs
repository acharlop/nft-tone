/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#ffffffff',
      'neutral-1000': '#0c0c15ff',
      'neutral-900': '#1b1b2dff',
      'neutral-800': '#25253cff',
      'neutral-700': '#35324bff',
      'neutral-600': '#4e4b66ff',
      'neutral-500': '#7d7a92ff',
      'neutral-400': '#cac8d9ff',
      'neutral-300': '#d9d9e5ff',
      'neutral-200': '#ececf5ff',
      'neutral-100': '#fafafaff',
      'primary-1000': '#121336ff',
      'primary-900': '#1d1e54ff',
      'primary-800': '#292a7dff',
      'primary-700': '#3234abff',
      'primary-600': '#3d40c4ff',
      'primary-500': '#5d5fefff',
      'primary-400': '#7375edff',
      'primary-300': '#9091f4ff',
      'primary-200': '#b5b6f8ff',
      'primary-100': '#ededfdff',
    },
    extend: {
      gridTemplateRows: {
        main: 'auto 1fr auto',
        login: 'auto 1fr',
      },
    },
  },
  plugins: [],
}

module.exports = config
