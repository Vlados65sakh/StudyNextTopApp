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

    {
        files: ["**/*.ts", "**/*.tsx"],
        plugins: {
            "@typescript-eslint": tsPlugin,
        },
        languageOptions: {
            parser: tsParser,
        },
        rules: {
            "semi": ["warn", "always"],

            // Отключаем старое правило (no-empty-interface)
            "@typescript-eslint/no-empty-interface": "off",

            // Включаем то, которое у тебя ругается (no-empty-object-type)
            "@typescript-eslint/no-empty-object-type": ["warn", { allowSingleExtends: true }],
        },
    },

    {
        files: ["**/*.js", "**/*.jsx"],
        rules: {
            "semi": ["warn", "always"],
        },
    },
];