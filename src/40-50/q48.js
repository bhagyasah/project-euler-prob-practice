const power = require('./../10-20/q16');

const resultArray = [];
// console.log(power.power(2, 10));
function arrayAddition(arr) {
  // console.log(arr);
  let overflow = 0;
  let digit = 0;
  for (let i = 0; i < arr.length; i += 1) {
    const a = resultArray[i] || 0;
    const b = arr[i];
    digit = a + b + overflow;

    if (digit > 9) {
      digit -= 10;
      overflow = 1;
    } else {
      overflow = 0;
    }
    resultArray[i] = digit;
  }
}

function main() {
  const result = [];
  for (let i = 1; i <= 1000; i += 1) {
    const tempArray = power.power(i, i);
    arrayAddition(tempArray);
  }
  for (let j = 0; j <= 9; j += 1) {
    result[j] = resultArray[j];
  }
  return result.reverse();
}

console.log(main());
