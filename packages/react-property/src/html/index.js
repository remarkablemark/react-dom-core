var attributeToProperty = require('../../lib/html/attribute-to-property');
var attributes = require('../../lib/html/attributes');
var booleanProperties = require('../../lib/html/boolean-properties');
var overloadedBooleanProperties = require('../../lib/html/overloaded-boolean-properties');

var attributeMap = {};
var attributeName;
var propertyName;

for (var i = 0, len = attributes.length; i < len; i++) {
  attributeName = attributes[i];
  propertyName = attributeToProperty[attributeName] || attributeName;

  attributeMap[attributeName] = {
    propertyName: propertyName,
    hasBooleanValue: booleanProperties.indexOf(propertyName) !== -1,
    hasOverloadedBooleanValue:
      overloadedBooleanProperties.indexOf(propertyName) !== -1
  };
}

module.exports = attributeMap;
