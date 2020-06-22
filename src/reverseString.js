function reverseString(stringToReverse) {
  if(stringToReverse == null) {
    throw new Error('stringToReverse cannot be null or undefined');
  }

  if(typeof stringToReverse !== 'string') {
    throw new Error(`stringToReverse must be of type 'string'. Got ${typeof stringToReverse}`);
  }

  let returnString = '';
  
  if(stringToReverse.length == 0) {
    return returnString;
  }

  const splitString = stringToReverse.split(' ');

  if(splitString.length == 1) {
    return stringToReverse;
  }

  for(let i = splitString.length - 1; i >= 0; i--) {
    returnString += splitString[i];

    if(i != 0) {
      returnString += ' '
    }
  }

  return returnString;
}

module.exports = {
  reverseString
};