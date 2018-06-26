const isPalindrom = require('./../1-10/q4.js');

console.log(isPalindrom(101));

function bcd(n) {
  let resultStr = '';
  let result = '';
  let num = n;
  if (n === 0) {
    return 0;
  }
  while (num > 0) {
    const binary = num % 2;
    num = Math.floor(num / 2);
    resultStr += `${binary}`;
  }
  result = resultStr.split('').reverse().join().replace(/,/g, '');
  return parseInt(result, 10);
}
console.log(bcd(6336));

function main(n) {
  let sum = 0;
  for (let i = 0; i < n; i += 1) {
    const isDecimalPalindrom = isPalindrom(i, 10);
    const isBinaryPalindrom = isPalindrom(i, 2);
    if (isDecimalPalindrom && isBinaryPalindrom) {
      sum += i;
    }
  }
  return sum;
}
console.log(main(1000000));

