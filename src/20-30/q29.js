const p = require('./../10-20/q16.js');

const resultArray = [];

function makeArrayWithoutRepeation(str) {
  const num = parseInt(str, 10);
  if (!resultArray.includes(num)) {
    resultArray.push(num);
  }
}

function distinctPowerList(a, b) {
  for (let i = a; i <= b; i += 1) {
    for (let j = b; j >= a; j -= 1) {
      makeArrayWithoutRepeation(p.power(i, j));
    }
  }
  return resultArray;
}

console.log(distinctPowerList(2, 100).length);

