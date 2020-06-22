function reverseString(stringToReverse) {
  if(stringToReverse == null) {
    throw new Error('stringToReverse cannot be null or undefined');
  }

  if(typeof stringToReverse !== 'string') {
    throw new Error(`stringToReverse must be of type 'string'. Got ${typeof stringToReverse}`);
  }
}

module.exports = {
  reverseString
};