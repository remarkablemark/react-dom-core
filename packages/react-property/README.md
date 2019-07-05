# react-property

[![NPM](https://nodei.co/npm/react-property.png)](https://nodei.co/npm/react-property/)

[![NPM version](https://img.shields.io/npm/v/react-property.svg)](https://www.npmjs.com/package/react-property)

HTML and SVG DOM property configs used by React.

## Install

```sh
# with npm
$ npm install react-property --save

# with yarn
$ yarn add react-property
```

## Usage

Import main module:

```js
// CommonJS
const property = require('react-property');

// ES Modules
import property from 'react-property';
```

Object output:

```js
{
  HTMLDOMPropertyConfig: {
    autofocus: {
      propertyName: "autoFocus",
      hasBooleanValue: true,
      hasOverloadedBooleanValue: false
    },
    // ...
  },
  SVGDOMPropertyConfig: {
    accentheight: {
      propertyName: 'accentHeight'
    },
    // ...
  },
  isCustomAttribute: [Function: bound test]
}
```

Instead of importing all of the property configs, you can also just import what you need:

```js
const HTMLDOMPropertyConfig = require('react-property/lib/html');
const SVGAttributeToProperty = require('react-property/lib/svg/attribute-to-property');
const isCustomAttribute = require('react-property/lib/is-custom-attribute');
```

## Layout

```
.
├── index.js
└── lib
    ├── html
    │   ├── attribute-to-property.json
    │   ├── attributes.json
    │   ├── boolean-properties.json
    │   ├── index.js
    │   └── overloaded-boolean-properties.json
    ├── is-custom-attribute.js
    └── svg
        ├── attribute-to-property.json
        ├── attributes.json
        └── index.js
```

## License

MIT. See [license](https://github.com/facebook/react/blob/15-stable/LICENSE) from original project.
