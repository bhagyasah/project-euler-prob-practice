module.exports = function isPanDigit(str) {
  // console.log(str);
  const tempArray = str.split('').map(c => parseInt(c, 10));
  for (let i = 1; i <= str.length; i += 1) {
    if (!tempArray.includes(i)) {
      return false;
    }
  }
  return true;
};
