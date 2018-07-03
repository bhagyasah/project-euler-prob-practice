
function checkDigit(arr) {
  const tempArray = `${arr[0]}`.split('');
  const finalArray = arr.map(str => `${str}`.split(''));
  for (let i = 0; i < 4; i += 1) {
    for (let j = 0; j < tempArray.length; j += 1) {
      if (!tempArray.includes(finalArray[i][j])) {
        return false;
      }
    }
  }
  return true;
}

// console.log(checkDigit([4231, 1234, 1234, 1534]));

function main() {
  let x = 1;
  while (true) {
    const mult2 = x * 2;
    const mult3 = x * 3;
    const mult4 = x * 4;
    const mult5 = x * 5;
    const mult6 = x * 6;
    if (`${mult2}`.length === (`${mult3}`.length && `${mult4}`.length && `${mult5}`.length && `${mult6}`.length)) {
      if (checkDigit([mult2, mult3, mult4, mult5, mult6])) {
        return x;
      }
    }
    x += 1;
  }
}
console.log('result is ', main());
