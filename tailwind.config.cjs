/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateRows: {
        body: '1fr auto 1fr',
      },
    },
  },
  plugins: [],
}

module.exports = config
