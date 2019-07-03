const { resolve } = require('path');

const LIB_DIR = resolve(__dirname, '../lib');
const HTML_DIR = resolve(LIB_DIR, 'html');

module.exports = {
  LIB_DIR,
  HTML_DIR
};
