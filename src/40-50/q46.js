const primeList = require('./../common/PrintPrime');

const primeNums = primeList(10000);

// console.log(primeNums);

function checkConjecture(n) {
  if (n % 2 === 0 || primeNums.includes(n)) {
    return true;
  }
  for (let i = 1; (i ** 2) * 2 <= n; i += 1) {
    if (primeNums.includes(n - ((i ** 2) * 2))) {
      return true;
    }
  }
  return false;
}

function main() {
  for (let i = 9; ; i += 2) {
    if (!checkConjecture(i)) {
      return i;
    }
  }
}

console.log('result is ', main());