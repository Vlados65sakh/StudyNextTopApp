import path from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Создаём экземпляр compat
const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
    ...compat.extends('next/core-web-vitals', 'next/typescript'),
    {
        files: ['**/*.ts', '**/*.tsx'],
        plugins: { '@typescript-eslint': tsPlugin },
        languageOptions: { parser: tsParser },
        rules: {
            semi: ['warn', 'always'],
            '@typescript-eslint/no-empty-interface': 'off',
            '@typescript-eslint/no-empty-object-type': ['warn', {
                allowInterfaces: 'with-single-extends',
                allowObjectTypes: 'never'
            }],
        },
    },
    {
        files: ['**/*.js', '**/*.jsx'],
        rules: { semi: ['warn', 'always'] },
    },
];
