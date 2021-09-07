#!/usr/bin/env node

const { writeFileSync } = require('fs');
const { resolve } = require('path');
const prettier = require('prettier');

const prettierrc = require('../../../.prettierrc.json');
const possibleStandardNames = require('../lib/possibleStandardNames');

const constants = {
  SAME: {
    comment:
      "An attribute in which the DOM/SVG standard name is the same as the React prop name (e.g., 'accept').",
    value: 0
  },
  CAMELCASE: {
    comment:
      "An attribute in which the React prop name is the camelcased version of the DOM/SVG standard name (e.g., 'acceptCharset').",
    value: 1
  }
};

const constantsAsVariablesAndExports = Object.entries(constants).reduce(
  (accumulator, [name, { comment, value }]) => {
    accumulator += `// ${comment}
var ${name} = ${value}
exports.${name} = ${name}

`;
    return accumulator;
  },
  ''
);

/**
 * Optimize possible standard names by replacing redundant strings with numeric constants.
 *
 * @see {@link https://github.com/facebook/react/blob/main/packages/react-dom/src/shared/possibleStandardNames.js}
 */
const possibleStandardNamesOptimized = Object.entries(
  possibleStandardNames
).reduce((accumulator, [standardName, propName]) => {
  if (standardName === propName) {
    accumulator[standardName] = constants.SAME.value;
  } else if (standardName === propName.toLowerCase()) {
    accumulator[propName] = constants.CAMELCASE.value;
  } else {
    accumulator[standardName] = propName;
  }
  return accumulator;
}, {});

const output = `${constantsAsVariablesAndExports}
exports.possibleStandardNames = ${JSON.stringify(
  possibleStandardNamesOptimized
)}`;

writeFileSync(
  resolve(__dirname, '../lib/possibleStandardNamesOptimized.js'),
  prettier.format(output, {
    ...prettierrc,
    parser: 'babel'
  })
);
