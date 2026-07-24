import eslint from '@eslint/js';
import astro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';

export default [
  { ignores: ['dist/**', '.astro/**', 'node_modules/**', 'public/**'] },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs['flat/recommended'],
  {
    files: ['api/**/*.js', 'tests/**/*.js'],
    languageOptions: {
      globals: {
        console: 'readonly',
        fetch: 'readonly',
        process: 'readonly',
      },
    },
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
];
