import ftFlow from 'eslint-plugin-ft-flow';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';
import parser from 'hermes-eslint';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import { includeIgnoreFile } from '@eslint/compat';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, '.gitignore');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [
  includeIgnoreFile(gitignorePath),

  ...compat.extends('eslint:recommended', 'plugin:ft-flow/recommended'),

  {
    plugins: {
      'ft-flow': ftFlow,
      prettier
    },

    languageOptions: {
      globals: {
        ...globals.jest,
        ...globals.node
      },
      parser: parser
    },

    rules: {
      'no-console': 'error',
      'no-debugger': 'error',
      'prettier/prettier': 'error'
    }
  }
];
