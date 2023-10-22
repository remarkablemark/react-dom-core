import { babel } from '@rollup/plugin-babel';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

// https://stackoverflow.com/a/50052194
const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
  input: resolve(
    __dirname,
    '../../react/packages/react-dom/src/shared/possibleStandardNames'
  ),
  output: {
    exports: 'auto',
    file: 'lib/possibleStandardNames.js',
    format: 'cjs'
  },
  plugins: [
    babel({
      babelHelpers: 'bundled'
    })
  ]
};
