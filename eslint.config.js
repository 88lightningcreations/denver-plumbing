import nextPlugin from '@next/eslint-plugin-next';
import globals from 'globals';
import tsEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  // Ignore generated files
  {
    ignores: [".next/**"]
  },
  // ESLint's own recommended rules
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      '@typescript-eslint': tsEslint,
    },
    rules: {
      ...tsEslint.configs.recommended.rules,
      // Add any additional ESLint recommended rules or overrides here
    },
  },
  // Next.js recommended configurations
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ...nextPlugin.configs.recommended,
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ...nextPlugin.configs['core-web-vitals'],
  },
  // TypeScript specific configuration
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json', // Adjust this path if your tsconfig.json is elsewhere
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      // Add or override TypeScript specific rules here
    },
  },
];