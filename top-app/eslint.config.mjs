import { FlatCompat } from "@eslint/eslintrc";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

const compat = new FlatCompat({ baseDirectory: import.meta.dirname });

export default [
    ...compat.extends(
        "next/core-web-vitals",
        "next/typescript",
        "plugin:react-hooks/recommended"
    ),
    // Остальные правила
    {
        files: ["**/*.ts", "**/*.tsx"],
        plugins: {
            "@typescript-eslint": tsPlugin,
        },
        languageOptions: {
            parser: tsParser,
        },
        rules: {
            "semi": ["error", "always"],
            "@typescript-eslint/no-empty-interface": ["error", { allowSingleExtends: true }],
        },
    },
    {
        files: ["**/*.js", "**/*.jsx"],
        rules: {
            "semi": ["warn", "always"],
        },
    },
];