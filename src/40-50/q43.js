const isPandigit = require('./../common/checkPandigital');

// console.log(isPandigit('123', 0, 3));

function subStringDivisiblity(num) {
  const str = `${num}`;
  const testArray = [0, 2, 3, 5, 7, 11, 13, 17];
  for (let i = 1; i < 8; i += 1) {
    // console.log(str.substr(i, 3));
    if (parseInt(str.substr(i, 3), 10) % testArray[i] !== 0) {
      return false;
    }
  }
  return true;
}

function checkSum(n) {
  return `${n}`.split('').map(c => parseInt(c, 10)).reduce((t, next) => t + next);
}

// console.log(subStringDivisiblity(1406357289));
function main() {
  let sum = 0;
  for (let i = 1023456789; i <= 9876543210; i += 1) {
    if (checkSum(i) === 45) {
      if (isPandigit(`${i}`, 0, 9) && subStringDivisiblity(i)) {
        console.log(i);
        sum += i;
      }
    }
  }
  return sum;
}

console.log('result is ', main());
