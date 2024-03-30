/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [
    "@cryptohub/eslint-config/next.js",
    "plugin:@tanstack/eslint-plugin-query/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@tanstack/query"],
  parserOptions: {
    project: true,
  },
}
