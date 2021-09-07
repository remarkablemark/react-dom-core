// @flow
const {
  CAMELCASE,
  SAME,
  possibleStandardNames: possibleStandardNamesOptimized
} = require('../lib/possibleStandardNamesOptimized');

const ATTRIBUTE_NAME_START_CHAR =
  ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';

const ATTRIBUTE_NAME_CHAR =
  ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040';

/**
 * Checks whether a property name is a custom attribute.
 *
 * @see {@link https://github.com/facebook/react/blob/15-stable/src/renderers/dom/shared/HTMLDOMPropertyConfig.js#L23-L25}
 *
 * @param {string}
 * @return {boolean}
 */
export const isCustomAttribute = RegExp.prototype.test.bind(
  // eslint-disable-next-line no-misleading-character-class
  new RegExp('^(data|aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$')
);

/**
 * @see {@link https://github.com/facebook/react/blob/main/packages/react-dom/src/shared/DOMProperty.js}
 */
export {
  RESERVED,
  STRING,
  BOOLEANISH_STRING,
  BOOLEAN,
  OVERLOADED_BOOLEAN,
  NUMERIC,
  POSITIVE_NUMERIC,
  getPropertyInfo
} from 'react-dom/src/shared/DOMProperty';

export const possibleStandardNames = Object.keys(
  possibleStandardNamesOptimized
).reduce((accumulator, standardName) => {
  const propName = possibleStandardNamesOptimized[standardName];
  if (propName === SAME) {
    accumulator[standardName] = standardName;
  } else if (propName === CAMELCASE) {
    accumulator[standardName.toLowerCase()] = standardName;
  } else {
    accumulator[standardName] = propName;
  }
  return accumulator;
}, {});
