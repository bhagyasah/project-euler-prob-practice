const primeList = require('./../common/PrintPrime');

const primeNums = primeList(1000000000);

function main() {
  let tempArray = [];
  let count = 0;
  for (let i = 14; ; i += 1) {
    for (let k = i; k < i + 4; k += 1) {
      for (let j = 0; j < k; j += 1) {
        if (k % primeNums[j] === 0) {
          if (!tempArray.includes(primeNums[j])) {
            tempArray.push(primeNums[j]);
          }
        }
      }
      if (tempArray.length === 4) {
        count += 1;
      }
      tempArray = [];
    }
    if (count === 4) {
      return i;
    }
    count = 0;
    return 'not found in this range';
  }
}
console.log(main());