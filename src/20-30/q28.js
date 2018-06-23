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
  let i = 0;
  let j = n - 1;
  let move = 0;
  const noOfLoop = Math.floor((n - 1) / 2);

  // Right to left move.....
  for (let x = 0; x <= noOfLoop; x += 1) {
    for (; j >= move; j -= 1) {
      finalArray[i][j] = finalValue;
      finalValue -= 1;
    }
    j += 1;
    i += 1;
    // console.log('value of i and j', i, j);

    // top to bottom move.....
    for (; i < n; i += 1) {
      finalArray[i][j] = finalValue;
      finalValue -= 1;
    }
    i -= 1;
    j += 1;
    // console.log('value of i and j', i, j);

    // left to right move ....

    for (; j < n; j += 1) {
      finalArray[i][j] = finalValue;
      finalValue -= 1;
    }
    j -= 1;
    i -= 1;
    // console.log('value of i and j', i, j);

    // bottom to top ....
    for (; i > move; i -= 1) {
      finalArray[i][j] = finalValue;
      finalValue -= 1;
    }
    i += 1;
    j -= 1;
    n -= 1;
    move += 1;
    // console.log('value of i and j', i, j, n);
  }
}

// console.log(finalArray);

function sumOfDiagonalElement(n) {
  createSpiralArray(n);
  let diagonal1 = 0;
  let diagonal2 = 0;
  let total = 0;
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (i === j) {
        diagonal1 += finalArray[i][j];
        // console.log(finalArray[i][j]);
        // console.log('d1 =', diagonal1);
      }
    }
  }

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (i === ((n - 1) - j)) {
        diagonal2 += finalArray[i][j];
        // console.log('d2 elem=', finalArray[i][j]);
        // console.log('d2 =', diagonal2);
      }
    }
  }
  total = diagonal1 + diagonal2;
  return total - 1;
}
console.log(sumOfDiagonalElement(1001));

