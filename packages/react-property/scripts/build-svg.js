const fs = require('fs');
const path = require('path');
const DOMProperty = require('react-dom/lib/DOMProperty');
const SVGDOMPropertyConfig = require('react-dom/lib/SVGDOMPropertyConfig');
const { LIB_DIR, SVG_DIR } = require('./constants');

/**
 * Creates the DOM property map via injection.
 *
 * @see https://github.com/facebook/react/blob/15-stable/src/renderers/dom/shared/DOMProperty.js#L57
 */
DOMProperty.injection.injectDOMPropertyConfig(SVGDOMPropertyConfig);

// `autofocus` is removed since it's not an applicable attribute for SVG elements
delete DOMProperty.getPossibleStandardName.autofocus;

/**
 * Create output directories (if it does not exist).
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
 * SVG DOM property config.
 *
 * Contains a mapping of HTML attributes to React props.
 *
 * @type {Object}
 */
const attributeToProperty = {};

/**
 * List of SVG DOM attributes.
 *
 * @type {Array}
 */
const attributes = [];

Object.keys(DOMProperty.getPossibleStandardName).forEach(attributeName => {
  const propertyName = DOMProperty.getPossibleStandardName[attributeName];

  if (attributeName !== propertyName) {
    attributeToProperty[attributeName] = propertyName;
  }

  attributes.push(attributeName);
});

fs.writeFileSync(
  path.resolve(SVG_DIR, 'attributes.json'),
  JSON.stringify(attributes)
);

fs.writeFileSync(
  path.resolve(SVG_DIR, 'attribute-to-property.json'),
  JSON.stringify(attributeToProperty)
);
