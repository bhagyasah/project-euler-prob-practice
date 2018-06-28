
const fs = require('fs');
const stringManupulation = require('./../../common/stringManupulation.js');

function nameScore() {
  const stringsName = fs.readFileSync('name.txt', 'utf8');
  const nameArray = stringsName.split(',').map(str => str.substr(1, str.length - 2));
  const sortedArray = nameArray.sort();
  const nameScoreArray = sortedArray.map(str => stringManupulation(str));
  return nameScoreArray;
}

function totalNameScoreResult() {
  const nameScoreArray = nameScore();
  const result = nameScoreArray.reduce((total, num, idx) => total + (num * (idx + 1)));
  return result;
}
console.log(totalNameScoreResult());
