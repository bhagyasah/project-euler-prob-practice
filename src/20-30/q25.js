

function arrayAddition(a, b) {
  let overflow = 0;
  let digitA;
  let digitB;
  let digit;
  const tempArray = [0];
  let count = Math.max(a.length, b.length);

  for (let i = 0; i < count; i += 1) {
    digitA = a[i] || 0;
    digitB = b[i] || 0;
    digit = digitA + digitB + overflow;
    if (digit > 9) {
      digit -= 10;
      overflow = 1;
    } else {
      overflow = 0;
    }
    tempArray[i] = digit;
    if (overflow === 1 && ((i + 1) === count)) {
      count += 1;
    }
  }
  return tempArray;
}

// console.log('result is ', arrayAddition([1, 8, 8], [5, 5]));

function fibonaciArray() {
  const fibArray = [[1], [1]];
  let digit = 1;
  for (let i = 2; digit <= 1000; i += 1) {
    fibArray.push(arrayAddition(fibArray[i - 1], fibArray[i - 2]));
    digit = fibArray[i].length;
    digit += 1;
  }
  return fibArray;
}

console.log(fibonaciArray().length);
