const fs = require('fs');
const path = require('path');
const prettier = require('prettier');
const DOMProperty = require('react-dom/lib/DOMProperty');
const HTMLDOMPropertyConfig = require('react-dom/lib/HTMLDOMPropertyConfig');
const { LIB_DIR, PRETTIER_OPTIONS } = require('./constants');

const { HAS_BOOLEAN_VALUE } = DOMProperty.injection;

/**
 * Create output directory (if it doesn't exist).
 */
try {
  fs.mkdirSync(LIB_DIR);
} catch (error) {
  if (error.code !== 'EEXIST') throw error;
}

/**
 * Contains a mapping of React props to HTML attributes.
 *
 * @see https://github.com/facebook/react/blob/15-stable/src/renderers/dom/shared/HTMLDOMPropertyConfig.js
 *
 * @type {Object}
 */
const properties = {
  Properties: Object.assign(
    /**
     * `autoFocus` is predefined and excluded from `HTMLDOMPropertyConfig.js`.
     *
     * @see https://github.com/facebook/react/blob/15-stable/src/renderers/dom/shared/HTMLDOMPropertyConfig.js#L42
     * @see https://github.com/facebook/react/blob/15-stable/src/renderers/dom/shared/DOMProperty.js#L206
     */
    { autoFocus: HAS_BOOLEAN_VALUE },
    HTMLDOMPropertyConfig.Properties
  ),

  DOMAttributeNames: HTMLDOMPropertyConfig.DOMAttributeNames
};

fs.writeFileSync(
  path.resolve(LIB_DIR, 'HTMLDOMPropertyConfig.js'),
  prettier.format(
    'module.exports=' + JSON.stringify(properties),
    PRETTIER_OPTIONS
  )
);
