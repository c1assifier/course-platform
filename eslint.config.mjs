import { FlatCompat } from '@eslint/eslintrc';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next', 'next/typescript', 'prettier'],
    plugins: ['prettier'], // 💡 обязательно укажи это!
    rules: {
      // ✅ Стиль кода
      semi: ['error', 'always'],
      quotes: ['error', 'single', { avoidEscape: true }],
      'prefer-arrow-callback': ['error'],
      'prefer-template': ['error'],

      // 🧠 TypeScript
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: true,
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],

      // 🧼 Prettier
      'prettier/prettier': 'error',
    },
  }),
];

export default eslintConfig;
