const { resolve } = require('path');

const LIB_DIR = resolve(__dirname, '../lib');
const HTML_DIR = resolve(LIB_DIR, 'html');
const SVG_DIR = resolve(LIB_DIR, 'svg');

module.exports = {
  LIB_DIR,
  HTML_DIR,
  SVG_DIR
};
