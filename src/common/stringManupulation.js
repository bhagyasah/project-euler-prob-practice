
module.exports = function stringManupulation(str) {
  const letterArray = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
    'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W',
    'X', 'Y', 'Z'];
  let result = 0;
  const strArray = str.split('');
  result += strArray.reduce((t, next) => t + letterArray.indexOf(next), 0);
  return result;
};
