import { babel } from '@rollup/plugin-babel';
import { resolve } from 'path';

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
