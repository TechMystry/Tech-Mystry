import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Compatibility layer for classic ESLint configs
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  // Extend recommended Next.js configs
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // ✅ Custom global rules
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",       // Allow 'any' type
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }
      ],                                                // Warn on unused vars
      "react/no-unescaped-entities": "off",             // Allow quotes in JSX text
      "react-hooks/exhaustive-deps": "off",            // Disable exhaustive deps warnings
    },
  },

  // ✅ Ignored folders/files
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "**/*.config.js",
    ],
  },
];
