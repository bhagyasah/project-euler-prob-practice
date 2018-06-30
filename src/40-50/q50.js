const primeList = require('./../common/PrintPrime');

const primeNums = primeList(1000000);

function consecutivePrime(num, x) {
  let primeSum = 0;
  let count = 0;
  let check = [];

  for (let i = 0; i < x; i += 1) {
    for (let j = i; primeSum < num; j += 1) {
      primeSum += primeNums[j];
      count += 1;
      check.push(primeNums[j]);
    }
    check = [];
    if (primeSum === num) {
      return count;
    }
    primeSum = 0;
    count = 0;
  }
}

function main() {
  let max = 0;
  let result = 0;
  let count = 0;
  for (let i = 0; i < primeNums.length; i += 1) {
    count = consecutivePrime(primeNums[i], i);
    if (count && count > max) {
      max = count;
      result = primeNums[i];
    }
  }
  return result;
}
console.log('result is ', main());

