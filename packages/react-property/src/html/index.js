var properties = require('./properties');
var injection = require('../injection');

var MUST_USE_PROPERTY = injection.MUST_USE_PROPERTY;
var HAS_BOOLEAN_VALUE = injection.HAS_BOOLEAN_VALUE;
var HAS_NUMERIC_VALUE = injection.HAS_NUMERIC_VALUE;
var HAS_POSITIVE_NUMERIC_VALUE = injection.HAS_POSITIVE_NUMERIC_VALUE;
var HAS_OVERLOADED_BOOLEAN_VALUE = injection.HAS_OVERLOADED_BOOLEAN_VALUE;
var Properties = properties.Properties;
var DOMAttributeNames = properties.DOMAttributeNames;

/**
 * @see https://github.com/facebook/react/blob/15-stable/src/renderers/dom/shared/DOMProperty.js#L14-L16
 *
 * @param {Number} value
 * @param {Number} bitmask
 * @return {Boolean}
 */
function checkMask(value, bitmask) {
  return (value & bitmask) === bitmask;
}

/**
 * Config map.
 *
 * @type {Object}
 */
var config = {};
var attributeName;
var propertyName;
var propConfig;

for (propertyName in Properties) {
  attributeName = DOMAttributeNames[propertyName] || propertyName.toLowerCase();
  propConfig = Properties[propertyName];

  config[attributeName] = {
    attributeName: attributeName,
    propertyName: propertyName,
    mustUseProperty: checkMask(propConfig, MUST_USE_PROPERTY),
    hasBooleanValue: checkMask(propConfig, HAS_BOOLEAN_VALUE),
    hasNumericValue: checkMask(propConfig, HAS_NUMERIC_VALUE),
    hasPositiveNumericValue: checkMask(propConfig, HAS_POSITIVE_NUMERIC_VALUE),
    hasOverloadedBooleanValue: checkMask(
      propConfig,
      HAS_OVERLOADED_BOOLEAN_VALUE
    )
  };
}

module.exports = config;
