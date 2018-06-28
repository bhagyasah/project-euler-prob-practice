module.exports = function isPanDigit(str, startPoint, endPoint) {
  // console.log(str);
  const tempArray = str.split('').map(c => parseInt(c, 10));
  for (let i = startPoint; i <= endPoint; i += 1) {
    if (!tempArray.includes(i)) {
      return false;
    }
  }
  return true;
};

