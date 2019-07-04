const fs = require('fs');
const path = require('path');
const DOMProperty = require('react-dom/lib/DOMProperty');
const HTMLDOMPropertyConfig = require('react-dom/lib/HTMLDOMPropertyConfig');
const { LIB_DIR, HTML_DIR } = require('./constants');

/**
 * Creates the DOM property map via injection.
 *
 * @see https://github.com/facebook/react/blob/15-stable/src/renderers/dom/shared/DOMProperty.js#L57
 *
 * ```js
 * {
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
 * Create output directories (if it does not exist).
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
 * HTML DOM property config.
 */
const attributeToProperty = {};

/**
 * List of HTML DOM attributes.
 */
const attributes = [];

/**
 * `autoFocus` is predefined and excluded from `HTMLDOMPropertyConfig.js`.
 *
 * @see https://github.com/facebook/react/blob/15-stable/src/renderers/dom/shared/HTMLDOMPropertyConfig.js#L42
 * @see https://github.com/facebook/react/blob/15-stable/src/renderers/dom/shared/DOMProperty.js#L206
 */
const booleanProperties = ['autoFocus'];

/**
 * HTML attributes that behave like booleans but can also accept a string value.
 *
 * @see https://github.com/facebook/react/blob/15-stable/src/renderers/dom/shared/DOMProperty.js#L190-L193
 */
const overloadedBooleanProperties = [];

Object.keys(DOMProperty.getPossibleStandardName).forEach(attributeName => {
  const propertyName = DOMProperty.getPossibleStandardName[attributeName];

  if (attributeName !== propertyName) {
    attributeToProperty[attributeName] = propertyName;
  }

  const property = DOMProperty.properties[propertyName];

  if (property) {
    if (property.hasBooleanValue) {
      booleanProperties.push(propertyName);
    } else if (property.hasOverloadedBooleanValue) {
      overloadedBooleanProperties.push(propertyName);
    }
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

fs.writeFileSync(
  path.resolve(HTML_DIR, 'boolean-properties.json'),
  JSON.stringify(booleanProperties)
);

fs.writeFileSync(
  path.resolve(HTML_DIR, 'overloaded-boolean-properties.json'),
  JSON.stringify(overloadedBooleanProperties)
);
