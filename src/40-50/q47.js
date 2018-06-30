const primeList = require('./../common/PrintPrime');

const primeNums = primeList(100000);

function checkDistinctPrimeFactor(num) {
  let count = 0;
  let tempArray = [];
  let mult = 1;
  for (let k = num; k < num + 4; k += 1) {
    for (let j = 0; ; j += 1) {
    if (!(mult *= primeNums[j] < num)) {
     break;
     }
      if (k % primeNums[j] === 0) {
        if (!tempArray.includes(primeNums[j])) {
          tempArray.push(primeNums[j]);
          count += 1;
        }
      }
    }
    if (count !== 4) {
      return false;
    }
    count = 0;
    tempArray = [];
    mult = 1;
  }
  return num;
}
// console.log(checkDistinctPrimeFactor(644));

function main() {
  for (let i = 1000; ; i += 1) {
    const check = checkDistinctPrimeFactor(i);
    if (check) {
      return i;
    }
  }
}
 console.log(main());
