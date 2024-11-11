import eslintPluginAstro from "eslint-plugin-astro";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
  ...eslintPluginAstro.configs.recommended,
  {
    plugins: {
      prettier,
    },
    extends: [
      "plugin:astro/recommended",
      "eslint:recommended",
      "plugin:prettier/recommended",
      "prettier",
    ],
    rules: {
      "prettier/prettier": "error",
      // Add or override other rules here
    },
  },
];
