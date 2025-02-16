import { dirname } from "path";
import { fileURLToPath } from "url";

import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      "next/core-web-vitals",
      "next/typescript",
      "prettier",
      "plugin:import/recommended"
    ],
    "plugins": ["check-file", "n"],
    "rules": {
      // --- eslint rules ---
      "arrow-body-style": ["error", "as-needed", { "requireReturnForObjectLiteral": true }],
      "semi": "error",
      "no-console": "error",
      "no-nested-ternary": "error",
      "no-lonely-if": "warn",
      "no-undefined": "warn",
      "no-unexpected-multiline": "warn",
      "prefer-const": "error",
      "prefer-arrow-callback": "warn",
      // --- eslint-plugin-import rules ---
      "import/export": "error",
      "import/order": [
        "error",
        {
          "groups": [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling"],
            "index",
            "object"
          ],
          "newlines-between": "always",
          "pathGroups": [
            {
              "pattern": "react",
              "group": "builtin",
              "position": "before"
            },
            {
              "pattern": "next/**",
              "group": "builtin",
              "position": "before"
            },
            {
              "pattern": "@/**",
              "group": "internal",
              "position": "after"
            }
          ],
          "pathGroupsExcludedImportTypes": ["builtin"],
          "alphabetize": {
            "order": "asc",
            "caseInsensitive": true
          }
        }
      ],
      // --- eslint-plugin-check-file rules ---
      "check-file/filename-naming-convention": [
        "error",
        {
          "**/*.{ts,tsx}": "KEBAB_CASE"
        },
        {
          "ignoreMiddleExtensions": true
        }
      ],
      "check-file/folder-naming-convention": [
        "error",
        {
          "src/**/!^[.*": "KEBAB_CASE"
        }
      ],
      // --- eslint-plugin-n rules---
      "no-process-env": "error",
    },
  })
];

export default eslintConfig;
