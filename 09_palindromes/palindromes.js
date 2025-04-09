const palindromes = function (str) {
  let cleanStr = str.toLowerCase().match(/[a-z0-9]/g);
  let adjustedStr = cleanStr.join('');
  let reversedStr = cleanStr.reverse().join('');

  if (reversedStr === adjustedStr) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
