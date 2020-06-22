function reverseString(stringToReverse) {
  if(stringToReverse == null) {
    throw new Error('stringToReverse cannot be null or undefined');
  }

  if(typeof stringToReverse !== 'string') {
    throw new Error(`stringToReverse must be of type 'string'. Got ${typeof stringToReverse}`);
  }

  let reversedString = '';
  
  if(stringToReverse.length == 0) {
    return reversedString;
  }

  const splitString = stringToReverse.split(' ');

  if(splitString.length == 1) {
    return stringToReverse;
  }
}

module.exports = {
  reverseString
};