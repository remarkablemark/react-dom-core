const {
  HTMLDOMPropertyConfig,
  SVGDOMPropertyConfig,
  isCustomAttribute
} = require('..');

describe('HTMLDOMPropertyConfig', () => {
  it('matches snapshot', () => {
    expect(HTMLDOMPropertyConfig).toMatchSnapshot();
  });
});

describe('SVGDOMPropertyConfig', () => {
  it('matches snapshot', () => {
    expect(SVGDOMPropertyConfig).toMatchSnapshot();
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
      expect(isCustomAttribute(argument)).toBe(expected);
    }
  );
});
