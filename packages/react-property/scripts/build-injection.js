const fs = require('fs');
const path = require('path');
const DOMProperty = require('react-dom/lib/DOMProperty');
const { LIB_DIR } = require('./constants');

/**
 * Create output directory (if it doesn't exist).
 */
try {
  fs.mkdirSync(LIB_DIR);
} catch (error) {
  if (error.code !== 'EEXIST') throw error;
}

fs.writeFileSync(
  path.resolve(LIB_DIR, 'injection.json'),
  JSON.stringify(DOMProperty.injection)
);
