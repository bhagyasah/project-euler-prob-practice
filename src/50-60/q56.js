const power = require('../10-20/q16');

function digitSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i]
  }
  return sum;
}

function main() {
  let mainMax = 0;
  for (let a = 1; a < 100; a += 1) {
    for (let b = 1; b < 100; b += 1) {
      const digits = power.power(a, b);
      const maxValue = digitSum(digits);
      if (mainMax < maxValue) {
        mainMax = maxValue;
      }
    }
  }
  return mainMax;
}

console.log('result is ', main());
