var attributeToProperty = require('../../lib/svg/attribute-to-property');
var attributes = require('../../lib/svg/attributes');

var attributeMap = {};
var attributeName;
var propertyName;

for (var i = 0, len = attributes.length; i < len; i++) {
  attributeName = attributes[i];
  propertyName = attributeToProperty[attributeName] || attributeName;
  attributeMap[attributeName] = { propertyName: propertyName };
}

module.exports = attributeMap;
