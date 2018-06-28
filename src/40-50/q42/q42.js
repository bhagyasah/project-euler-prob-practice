const fs = require('fs');
const stringManupulation = require('./../../common/stringManupulation.js');

const str = fs.readFileSync('names.txt', 'utf8');
const strArray = str.split(',').map(string => string.substr(1, string.length - 2));
const triangleNumbres = [];

// console.log(strArray);

function findMaxLengthString() {
  let max = 0;
  const maxLength = strArray.reduce((t, n, idx) => {
    const cmax = strArray[idx].length;
    if (cmax > max) {
      max = cmax;
    }
    return max;
  });
  return maxLength;
}

// console.log(findMaxLengthString());

function generateTriangulerNumbers() {
  for (let i = 1; i <= (26 * findMaxLengthString()); i += 1) {
    const Tn = (0.5 * i) * (i + 1);
    triangleNumbres.push(Tn);
  }
}

function main() {
  generateTriangulerNumbers();
  let count = 0;
  for (let i = 0; i < strArray.length; i += 1) {
    if (triangleNumbres.includes(stringManupulation(strArray[i]))) {
      count += 1;
    }
  }
  return count;
}

console.log('result is ', main());

