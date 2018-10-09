const fs = require('fs');

const keyLogArray = fs.readFileSync('keylog.txt', 'utf8').split('\n');
// console.log(keyLogArray);

function createTreeSet() {
  const passcodeDigits = [];
  const temp = keyLogArray.map(v => v.split('')).reduce((p, n) => [...p, ...n]).map(v => parseInt(v, 10));
  for (let i = 0; i <= 9; i += 1) {
    if (temp.includes(i)) {
      passcodeDigits.push(i);
    }
  }

  const passCodeSet = passcodeDigits.reduce((obj, current) => {
    const tempObj = obj;
    tempObj[current] = {};
    return tempObj;
  }, {});
  //  console.log('passCodeSet initial', passCodeSet);

  for (let i = 0; i < keyLogArray.length; i += 1) {
    const currentLog = keyLogArray[i];
    passCodeSet[currentLog[1]][currentLog[0]] = 1;
    passCodeSet[currentLog[2]][currentLog[1]] = 1;
  }
  return passCodeSet;
}

const finalTreeSet = createTreeSet();
//  console.log(finalTreeSet);

function removeDigit(n) {
  delete finalTreeSet[n];
  Object.keys(finalTreeSet).forEach((i) => {
    const digits = finalTreeSet[i];
    Object.keys(digits).forEach(() => {
      delete digits[n];
    });
  });
}

function findFirstDigit() {
  let c = null;
  Object.keys(finalTreeSet).forEach((i) => {
    const digits = finalTreeSet[i];
    if (Object.keys(digits).length === 0) {
      c = i;
    }
  });
  return c;
}

function main() {
  let result = '';
  while (Object.keys(finalTreeSet).length !== 0) {
    // console.log('length of object', Object.keys(finalTreeSet).length);
    const temp = findFirstDigit();
    result += temp;
    removeDigit(temp);
  }
  return result;
}

console.log('result is', main());
