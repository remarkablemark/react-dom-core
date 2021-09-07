const possibleStandardNamesOriginal = require('../lib/possibleStandardNames');
const {
  getPropertyInfo,
  isCustomAttribute,
  possibleStandardNames
} = require('..');

describe('getPropertyInfo', () => {
  it.each([undefined, null])('returns null for %p', (attribute) => {
    expect(getPropertyInfo(attribute)).toBe(null);
  });

  it('gets info for reserved prop', () => {
    expect(getPropertyInfo('children')).toMatchSnapshot();
  });

  it('gets info for different name attribute', () => {
    expect(getPropertyInfo('acceptCharset')).toMatchSnapshot();
  });

  it('gets info for enumerated HTML attribute', () => {
    expect(getPropertyInfo('contentEditable')).toMatchSnapshot();
  });

  it('gets info for enumerated SVG attribute', () => {
    expect(getPropertyInfo('autoReverse')).toMatchSnapshot();
  });

  it('gets info for HTML boolean attribute', () => {
    expect(getPropertyInfo('allowFullScreen')).toMatchSnapshot();
  });

  it('gets info for DOM property', () => {
    expect(getPropertyInfo('checked')).toMatchSnapshot();
  });

  it('gets for overloaded boolean', () => {
    expect(getPropertyInfo('capture')).toMatchSnapshot();
  });

  it('gets info for HTML attribute that must be a positive number', () => {
    expect(getPropertyInfo('cols')).toMatchSnapshot();
  });

  it('gets info for HTML attribute that must be a number', () => {
    expect(getPropertyInfo('rowSpan')).toMatchSnapshot();
  });

  it('gets info for SVG attribute that need special casing', () => {
    expect(getPropertyInfo('accent-height')).toMatchSnapshot();
  });

  it('gets info for SVG attribute with the xlink namespace', () => {
    expect(getPropertyInfo('xlink:actuate')).toMatchSnapshot();
  });

  it('gets info for SVG attribute with the xml namespace', () => {
    expect(getPropertyInfo('xml:base')).toMatchSnapshot();
  });

  it('gets info for attribute that exists both in HTML and SVG', () => {
    expect(getPropertyInfo('tabIndex')).toMatchSnapshot();
  });

  it('gets info for attributes that accept URLs', () => {
    expect(getPropertyInfo('xlinkHref')).toMatchSnapshot();
    expect(getPropertyInfo('src')).toMatchSnapshot();
  });
});

describe('isCustomAttribute', () => {
  it.each([
    // expected, attribute
    [false, undefined],
    [false, null],
    [false, ''],
    [false, 'dataaria'],
    [false, 'aria'],
    [true, 'aria-'],
    [true, 'aria-live'],
    [false, 'aria-live="polite"'],
    [false, 'data'],
    [true, 'data-'],
    [true, 'data-foo'],
    [false, 'data-foo="bar"']
  ])('returns %j for %j', (expected, attribute) => {
    expect(isCustomAttribute(attribute)).toBe(expected);
  });
});

describe('possibleStandardNames', () => {
  it('matches properties', () => {
    expect(possibleStandardNames).toEqual(possibleStandardNamesOriginal);
  });
});
