const checkPrime = require('./../common/checkPrime.js');
const checkPandigit = require('./../common/checkPandigital.js');

function checkSum(n) {
  return `${n}`.split('').map(c => parseInt(c, 10)).reduce((t, next) => t + next);
}

function main() {
  let maxPandigit = 0;
  for (let i = 1234567; i <= 7654321; i += 2) {
    if (checkSum(i) === 28) {
      if (checkPrime(i) && checkPandigit(`${i}`)) {
        if (i > maxPandigit) {
          maxPandigit = i;
        }
      }
    }
  }
  return maxPandigit;
}
console.log(main());

