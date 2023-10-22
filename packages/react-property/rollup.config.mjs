import alias from '@rollup/plugin-alias';
import sucrase from '@rollup/plugin-sucrase';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

// https://stackoverflow.com/a/50052194
const __dirname = dirname(fileURLToPath(import.meta.url));

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

    sucrase({
      transforms: ['flow']
    })
  ],

  treeshake: {
    // remove undefined variables like `__PROFILE__` and `__DEV__`
    unknownGlobalSideEffects: false
  }
};
