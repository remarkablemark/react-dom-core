const { resolve } = require('path');

const LIB_DIR = resolve(__dirname, '../lib');

const PRETTIER_OPTIONS = {
  parser: 'babel',
  singleQuote: true
};

module.exports = {
  LIB_DIR,
  PRETTIER_OPTIONS
};
