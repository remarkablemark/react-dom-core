import alias from '@rollup/plugin-alias';
import { babel } from '@rollup/plugin-babel';
import { resolve } from 'path';

export default {
  input: 'src/index.js',
  output: {
    file: 'lib/index.js',
    format: 'cjs'
  },
  plugins: [
    alias({
      entries: [
        {
          find: 'react-dom',
          replacement: resolve(__dirname, '../../react/packages/react-dom')
        },
        {
          find: 'shared',
          replacement: resolve(__dirname, '../../react/packages/shared')
        }
      ]
    }),
    babel({
      babelHelpers: 'bundled'
    })
  ],
  treeshake: {
    // remove undefined variables like `__PROFILE__` and `__DEV__`
    unknownGlobalSideEffects: false
  }
};
