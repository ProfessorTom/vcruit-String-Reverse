const rs = require('../reverseString.js');

describe('reverse string tests', () => {
  describe('parameter type', () => {
    
    test('string does not throw', () => {
      const str = "foo bar";

      expect(() => {
        rs.reverseString(str);
      }).not.toThrow();
    });

    test('undefined throws an error', () => {
      expect(() => {
        rs.reverseString(undefined);
      }).toThrow();
    });

    test('null throws an error', () => {
      expect(() => {
        rs.reverseString(undefined);
      }).toThrow();
    });

    test('number throws an error', () => {
      expect(() => {
        rs.reverseString(55);
      }).toThrowError(`stringToReverse must be of type 'string'. Got number`);
    });

    test('bool throws an error', () => {
      expect(() => {
        rs.reverseString(true);
      }).toThrowError(`stringToReverse must be of type 'string'. Got bool`);
    });
    
  });
});