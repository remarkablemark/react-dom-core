const fs = require('fs');
const path = require('path');
const DOMProperty = require('react-dom/lib/DOMProperty');
const HTMLDOMPropertyConfig = require('react-dom/lib/HTMLDOMPropertyConfig');

/**
 * Creates the DOM property map via injection.
 *
 * @see https://github.com/facebook/react/blob/15-stable/src/renderers/dom/shared/DOMProperty.js#L57
 *
 * ```js
 * {
 *   // ...
 *   properties: {
 *     accept: {
 *       attributeName: 'accept',
 *       attributeNamespace: null,
 *       propertyName: 'accept',
 *       mutationMethod: null,
 *       mustUseProperty: false,
 *       hasBooleanValue: false,
 *       hasNumericValue: false,
 *       hasPositiveNumericValue: false,
 *       hasOverloadedBooleanValue: false
 *     },
 *     // ...
 *   },
 *   getPossibleStandardName: {
 *     autofocus: 'autoFocus',
 *     accept: 'accept',
 *     acceptcharset: 'acceptCharset',
 *     'accept-charset': 'acceptCharset',
 *     // ...
 *   },
 *   // ...
 * }
 * ```
 */
DOMProperty.injection.injectDOMPropertyConfig(HTMLDOMPropertyConfig);

/**
 * Constants.
 */
const LIB_DIR = path.resolve(__dirname, '../lib');
const HTML_DIR = path.resolve(LIB_DIR, 'html');

/**
 * Create output directories (if it does not exist).
 */
try {
  fs.mkdirSync(LIB_DIR);
  fs.mkdirSync(HTML_DIR);
} catch (error) {
  // throw error;
}

/**
 * HTML DOM property config.
 */
const attributeToProperty = {};

/**
 * List of HTML DOM attributes.
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
  path.resolve(HTML_DIR, 'attributes.json'),
  JSON.stringify(attributes)
);

fs.writeFileSync(
  path.resolve(HTML_DIR, 'attribute-to-property.json'),
  JSON.stringify(attributeToProperty)
);
