import { FlatCompat } from "@eslint/eslintrc";
import reactPlugin from "eslint-plugin-react";
import tsPlugin from "@typescript-eslint/eslint-plugin";

const compat = new FlatCompat();

export default [
  { extends: ["eslint:recommended"] },
  ...compat.extends(
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ),
  {
    files: ["*.ts", "*.tsx", "*.js", "*.jsx"],
    languageOptions: {
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      react: reactPlugin,
      "@typescript-eslint": tsPlugin,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
    },
    settings: {
      react: { version: "detect" },
    },
    env: {
      browser: true,
      es2021: true,
      jest: true,
    },
  },
];
