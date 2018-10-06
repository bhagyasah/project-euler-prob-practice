// value of i and j observe by heat and trail using calculator.....

const power = require('../10-20/q16');

function main() {
  let count = 0;
  for (let i = 1; i <= 9; i += 1) {
    for (let j = 1; j <= 21; j += 1) {
      const len = power.power(i, j).length;
      if (len === j) {
        count += 1;
      }
    }
  }
  return count;
}
console.log(main());
