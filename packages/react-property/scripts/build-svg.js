const fs = require('fs');
const path = require('path');
const DOMProperty = require('react-dom/lib/DOMProperty');
const SVGDOMPropertyConfig = require('react-dom/lib/SVGDOMPropertyConfig');
const { LIB_DIR, SVG_DIR } = require('./constants');

/**
 * Create output directories (if it doesn't exist).
 */
try {
  fs.mkdirSync(LIB_DIR);
} catch (error) {
  if (error.code !== 'EEXIST') throw error;
}

try {
  fs.mkdirSync(SVG_DIR);
} catch (error) {
  if (error.code !== 'EEXIST') throw error;
}

/**
 * Contains a mapping of React props to HTML attributes.
 *
 * @see https://github.com/facebook/react/blob/15-stable/src/renderers/dom/shared/SVGDOMPropertyConfig.js
 *
 * @type {Object}
 */
const properties = {
  injection: DOMProperty.injection,

  /**
   * To avoid duplication, some attributes are omitted as they exist on the HTML config.
   *
   * @see https://github.com/facebook/react/blob/15-stable/src/renderers/dom/shared/SVGDOMPropertyConfig.js#L17-L33
   */
  Properties: SVGDOMPropertyConfig.Properties,

  /**
   * Remove property when key and value are the same.
   */
  DOMAttributeNames: Object.keys(SVGDOMPropertyConfig.DOMAttributeNames).reduce(
    (accumulator, key) => {
      const value = SVGDOMPropertyConfig.DOMAttributeNames[key];
      if (key !== value) {
        accumulator[key] = value;
      }
      return accumulator;
    },
    {}
  )
};

fs.writeFileSync(
  path.resolve(SVG_DIR, 'properties.json'),
  JSON.stringify(properties)
);
