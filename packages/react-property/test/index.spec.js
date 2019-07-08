const main = require('..');

describe('HTMLDOMPropertyConfig', () => {
  jest.isolateModules(() => {
    const DOMProperty = require('react-dom/lib/DOMProperty');
    const HTMLDOMPropertyConfig = require('react-dom/lib/HTMLDOMPropertyConfig');
    DOMProperty.injection.injectDOMPropertyConfig(HTMLDOMPropertyConfig);

    it.each(Object.keys(DOMProperty.properties))(
      'matches property `%s`',
      propName => {
        const property = DOMProperty.properties[propName];
        delete property.attributeNamespace;
        delete property.mutationMethod;
        const attributeName =
          HTMLDOMPropertyConfig.DOMAttributeNames[propName] ||
          propName.toLowerCase();
        expect(main.HTMLDOMPropertyConfig[attributeName]).toEqual(property);
      }
    );
  });
});

describe('SVGDOMPropertyConfig', () => {
  jest.isolateModules(() => {
    const DOMProperty = require('react-dom/lib/DOMProperty');
    const SVGDOMPropertyConfig = require('react-dom/lib/SVGDOMPropertyConfig');
    DOMProperty.injection.injectDOMPropertyConfig(SVGDOMPropertyConfig);

    it.each(Object.keys(DOMProperty.properties))(
      'matches property `%s`',
      propName => {
        const property = DOMProperty.properties[propName];
        delete property.attributeNamespace;
        delete property.mutationMethod;
        const attributeName =
          SVGDOMPropertyConfig.DOMAttributeNames[propName] || propName;
        expect(main.SVGDOMPropertyConfig[attributeName]).toEqual(property);
      }
    );
  });
});

describe('isCustomAttribute', () => {
  it.each`
    argument                | expected
    ${''}                   | ${false}
    ${'dataaria'}           | ${false}
    ${'aria'}               | ${false}
    ${'aria-'}              | ${true}
    ${'aria-live'}          | ${true}
    ${'aria-live="polite"'} | ${false}
    ${'data'}               | ${false}
    ${'data-'}              | ${true}
    ${'data-foo'}           | ${true}
    ${'data-foo="bar"'}     | ${false}
  `(
    'returns $expected when argument is "$argument"',
    ({ argument, expected }) => {
      expect(main.isCustomAttribute(argument)).toBe(expected);
    }
  );
});
