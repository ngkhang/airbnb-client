/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  arrowParens: "always",
  semi: true,
  printWidth: 80,
  trailingComma: "es5",
  tabWidth: 2,
  singleQuote: false,
  quoteProps: "consistent",
  endOfLine: "crlf",
  jsxSingleQuote: false,
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;