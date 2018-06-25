
function checkPandigit(n) {
  let isPandit = false;
  const str = n;
  const array = str.split('').map(c => parseInt(c, 10));
  // console.log(array);
  for (let i = 1; i <= 9; i += 1) {
    if (!array.includes(i)) {
      isPandit = false;
      break;
    } else {
      isPandit = true;
    }
  }
  return isPandit;
}

// console.log(checkPandigit(934056781));

function main() {
  let str = '';
  const resultArray = [];
  for (let i = 1; i <= 9999; i += 1) {
    for (let j = 1; j <= 9999; j += 1) {
      const prod = i * j;
      str = `${i}${j}${prod}`;
      if (str.length === 9) {
        if (checkPandigit(str)) {
          if (!resultArray.includes(prod)) {
            resultArray.push(prod);
          }
        }
      }
    }
  }
  return resultArray;
}

console.log(main().reduce((total, next) => total + next), 0);
