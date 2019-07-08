const fs = require('fs');
const path = require('path');
const DOMProperty = require('react-dom/lib/DOMProperty');
const HTMLDOMPropertyConfig = require('react-dom/lib/HTMLDOMPropertyConfig');
const { LIB_DIR, HTML_DIR } = require('./constants');

const {
  MUST_USE_PROPERTY,
  HAS_BOOLEAN_VALUE,
  HAS_NUMERIC_VALUE,
  HAS_POSITIVE_NUMERIC_VALUE,
  HAS_OVERLOADED_BOOLEAN_VALUE
} = DOMProperty.injection;

/**
 * Create output directories (if it doesn't exist).
 */
try {
  fs.mkdirSync(LIB_DIR);
} catch (error) {
  if (error.code !== 'EEXIST') throw error;
}

try {
  fs.mkdirSync(HTML_DIR);
} catch (error) {
  if (error.code !== 'EEXIST') throw error;
}

/**
 * Contains a mapping of React props to HTML attributes.
 *
 * @type {Object}
 */
const properties = {
  injection: {
    MUST_USE_PROPERTY,
    HAS_BOOLEAN_VALUE,
    HAS_NUMERIC_VALUE,
    HAS_POSITIVE_NUMERIC_VALUE,
    HAS_OVERLOADED_BOOLEAN_VALUE
  },

  /**
   * `autoFocus` is predefined and excluded from `HTMLDOMPropertyConfig.js`.
   *
   * @see https://github.com/facebook/react/blob/15-stable/src/renderers/dom/shared/HTMLDOMPropertyConfig.js#L42
   * @see https://github.com/facebook/react/blob/15-stable/src/renderers/dom/shared/DOMProperty.js#L206
   */
  Properties: Object.assign(
    { autoFocus: HAS_BOOLEAN_VALUE },
    HTMLDOMPropertyConfig.Properties
  ),

  DOMAttributeNames: HTMLDOMPropertyConfig.DOMAttributeNames
};

fs.writeFileSync(
  path.resolve(HTML_DIR, 'properties.json'),
  JSON.stringify(properties)
);
