const prime = require('../common/checkPrime');


function primeCount(n) {
  let primecount = 0;
  let finalValue = n * n;
  for (let i = 0; i < 4; i += 1) {
    // console.log('finalVlaue', finalValue);
    if (prime(finalValue)) {
      primecount += 1;
    }
    finalValue -= n - 1;
  }
  return primecount;
}

function main() {
  let totalPrimeCount = 0;
  let primePercentage = null;
  let n = 3;
  while (true) {
    totalPrimeCount += primeCount(n);
    // console.log('prime count', n, totalPrimeCount);
    primePercentage = (totalPrimeCount / ((n * 2) - 1));
  //  console.log(primePercentage);
    if (primePercentage < 0.10) {
      break;
    }
    n += 2;
  }
  return n;
}
console.log(main());