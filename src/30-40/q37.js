const isPrime = require('./../common/checkPrime.js');

// console.log(isPrime(3197));

function isTruncatablePrime(n) {
  const temp = `${n}`;
  let result = '';

  // checking left to right................
  for (let i = 1; i < `${n}`.length; i += 1) {
    result = temp.substr(i);
    if (!isPrime(parseInt(result, 10))) {
      return false;
    }
  }

  // checking right to left
  for (let i = temp.length - 1; i >= 0; i -= 1) {
    result = temp.substr(0, i);
    if (!isPrime(parseInt(result, 10))) {
      return false;
    }
  }
  return true;
}
// console.log(isTruncatablePrime(3197));

function main() {
  let n = 0;
  let i = 23;
  const result = [];
  while (n < 11) {
    if (isPrime(i)) {
      if (isTruncatablePrime(i)) {
        result.push(i);
        n += 1;
      }
    }
    i += 2;
  }
  return result.reduce((t, next) => t + next);
}
console.log(main());
