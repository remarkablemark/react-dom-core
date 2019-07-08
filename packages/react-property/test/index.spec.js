const DOMProperty = require('react-dom/lib/DOMProperty');
const HTMLDOMPropertyConfig = require('react-dom/lib/HTMLDOMPropertyConfig');
const main = require('..');

describe('HTMLDOMPropertyConfig', () => {
  DOMProperty.injection.injectDOMPropertyConfig(HTMLDOMPropertyConfig);

  it.each(Object.keys(DOMProperty.properties))(
    'matches property `%s` from react-dom',
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

describe('SVGDOMPropertyConfig', () => {
  it('matches snapshot', () => {
    expect(main.SVGDOMPropertyConfig).toMatchSnapshot();
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
