import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import tseslint from 'typescript-eslint';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import tailwindPlugin from 'eslint-plugin-tailwindcss';
import prettierConfig from 'eslint-config-prettier';

// Boilerplate from Next.js
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Main config array
export default tseslint.config(
  // Global ignores
  {
    ignores: ['node_modules', '.next', 'dist', 'build'],
  },

  // 1. Default Next.js configs
  ...compat.extends('next/core-web-vitals'),

  // 2. Custom plugin configurations
  {
    plugins: { 'react-hooks': reactHooksPlugin },
    rules: reactHooksPlugin.configs.recommended.rules,
  },
  {
    plugins: { 'jsx-a11y': jsxA11yPlugin },
    rules: jsxA11yPlugin.configs.recommended.rules,
  },
  {
    plugins: { tailwindcss: tailwindPlugin },
    rules: tailwindPlugin.configs.recommended.rules,
  },
  {
    plugins: { import: importPlugin },
    rules: {
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
          pathGroups: [
            { pattern: 'react', group: 'external', position: 'before' },
            { pattern: '@/**', group: 'internal' },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'import/no-unresolved': 'off',
      'import/prefer-default-export': 'off',
    },
  },

  // 3. Prettier Config (must be last)
  prettierConfig
);