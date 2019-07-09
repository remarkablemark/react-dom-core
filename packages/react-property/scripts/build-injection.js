const fs = require('fs');
const path = require('path');
const prettier = require('prettier');
const DOMProperty = require('react-dom/lib/DOMProperty');
const { LIB_DIR, PRETTIER_OPTIONS } = require('./constants');

/**
 * Create output directory (if it doesn't exist).
 */
try {
  fs.mkdirSync(LIB_DIR);
} catch (error) {
  if (error.code !== 'EEXIST') throw error;
}

fs.writeFileSync(
  path.resolve(LIB_DIR, 'injection.js'),
  prettier.format(
    'module.exports=' + JSON.stringify(DOMProperty.injection),
    PRETTIER_OPTIONS
  )
);
