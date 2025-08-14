// eslint.config.js
import js from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import tseslint from "typescript-eslint";
import prettierPlugin from "eslint-plugin-prettier";
import importPlugin from "eslint-plugin-import";
import reactHooksPlugin from "eslint-plugin-react-hooks";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  {
    ignores: [
      "node_modules",
      ".next",
      "dist",
      "out",
      "next.config.mjs",
      "postcss.config.mjs",
      "eslint.config.js",
    ],
  },

  js.configs.recommended, // ESLint base rules
  ...tseslint.configs.recommended, // TypeScript rules

  {
    plugins: {
      prettier: prettierPlugin,
      import: importPlugin,
      "react-hooks": reactHooksPlugin,
      "@next/next": nextPlugin,
    },
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: import.meta.dirname,
        sourceType: "module",
      },
    },
    rules: {
      /* ----- Prettier Integration ----- */
      "prettier/prettier": [
        "error",
        {
          singleQuote: true,
          semi: true,
          trailingComma: "es5",
          tabWidth: 2,
          printWidth: 100,
        },
      ],

      /* ----- JavaScript/TypeScript Best Practices ----- */
      "no-console": ["error", { allow: ["warn", "error"] }],
      "no-debugger": "warn",
      eqeqeq: ["error", "always"],
      curly: ["error", "all"],

      /* ----- TypeScript Specific Rules ----- */
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-non-null-assertion": "warn",
      "@typescript-eslint/ban-ts-comment": ["warn", { "ts-ignore": "allow-with-description" }],

      /* ----- Import Rules ----- */
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", ["parent", "sibling", "index"]],
          pathGroups: [
            {
              pattern: "@/**",
              group: "internal",
            },
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
      "import/no-unresolved": "off",
      "import/no-anonymous-default-export": "off",

      /* ----- React Hooks Rules ----- */
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      /* ----- Next.js Specific Rules ----- */
      "@next/next/no-html-link-for-pages": ["error", "src/app"],
      "@next/next/no-img-element": "off",
    },
  },
];
