
const fs = require('fs');

function stringManupulation(position, str) {
  const letterArray = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let result = 0;
  const strArray = str.split('');
  result += strArray.reduce((t, next) => t + letterArray.indexOf(next), 0);
  return result;
}

function nameScore() {
  const stringsName = fs.readFileSync('name.txt', 'utf8');
  const nameArray = stringsName.split(',').map(str => str.substr(1, str.length - 2));
  const sortedArray = nameArray.sort();
  const nameScoreArray = sortedArray.map((str, idx) => stringManupulation(idx + 1, str));
  return nameScoreArray;
}

function totalNameScoreResult() {
  const nameScoreArray = nameScore();
  const result = nameScoreArray.reduce((total, num, idx) => total + (num * (idx + 1)));
  return result;
}
console.log(totalNameScoreResult());
