/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  trailingComma: 'es5',
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  printWidth: 100,
}

module.exports = config
