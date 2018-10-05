const prime = require('../common/checkPrime');

const finalArray = [];
function createArray(n) {
  let tempArray = [];
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      tempArray[j] = 0;
    }
    finalArray.push(tempArray);
    tempArray = [];
  }
}


function createSpiralArray(n) {
  createArray(n);
  let finalValue = n * n;
  let i = n - 1;
  let j = n - 1;
  let move = 0;
  const noOfLoop = Math.floor((n - 1) / 2);

  for (let x = 0; x <= noOfLoop; x += 1) {

    // left to right move.....
    for (; j >= move; j -= 1) {
      finalArray[i][j] = finalValue;
      finalValue -= 1;
    }
    j += 1;
    i -= 1;
    // console.log('value of i and j', i, j);
    // bottom  to top move.....
    for (; i >= move; i -= 1) {
      finalArray[i][j] = finalValue;
      finalValue -= 1;
    }
    i += 1;
    j += 1;
    // console.log('value of i and j', i, j);

    // left to right move ....

    for (; j < n; j += 1) {
      finalArray[i][j] = finalValue;
      finalValue -= 1;
    }
    j -= 1;
    i += 1;
    // console.log('value of i and j', i, j);

    // top to bottom ....
    for (; i < n - 1; i += 1) {
      finalArray[i][j] = finalValue;
      finalValue -= 1;
    }
    i -= 1;
    j -= 1;
    n -= 1;
    move += 1;
    // console.log('value of i and j', i, j, n);
  }
}

// console.log(finalArray);

function checkPrimeOfDiagonalElement(n) {
  createSpiralArray(n);
  // console.log(finalArray);
  let diagonal1Prime = 0;
  let diagonal2Prime = 0;
  let totalPercent = 0;
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (i === j) {
        if (prime(finalArray[i][j])) {
          diagonal1Prime += 1;
        }
      }
    }
  }

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (i === ((n - 1) - j)) {
        if (prime(finalArray[i][j])) {
          diagonal2Prime += 1;
        }
      }
    }
  }
  totalPercent = (diagonal1Prime + diagonal2Prime) / ((n * 2) - 1);
  return totalPercent.toFixed(2);
}

function main() {
  let n = 5;
  while (true) {
    if (checkPrimeOfDiagonalElement(n) < 0.10) {
      break;
    }
    n += 2;
  }
  return n;
}
console.log(main());
