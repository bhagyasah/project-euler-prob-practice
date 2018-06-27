const isPanDigit = require('./../common/checkPandigital');
// console.log(isPanDigit(`123956879`));

function multiplication() {
  let digit = 1;
  let temp = '';
  let result = 1;
  let max = 0;
  let tempInt = 0;
  while (digit <= 9999) {
    for (let i = 1; temp.length < 9; i += 1) {
      result = digit * i;
      temp += `${result}`;
    }
    tempInt = parseInt(temp, 10);
    if (temp.length === 9 && isPanDigit(temp, 9)) {
      if (tempInt > max) {
        max = tempInt;
      }
    }
    // console.log(temp);
    digit += 1;
    temp = '';
    result = 1;
  }
  console.log('max value is', max);
}
multiplication();
