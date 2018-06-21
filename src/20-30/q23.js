
let totalSum = 0;
function abundantArray() {
  let divSum = 0;
  const abundArray = [];
  for (let i = 1; i < 28123; i += 1) {
    totalSum += i;
    for (let j = 1; j < i; j += 1) {
      if (i % j === 0) {
        divSum += j;
      }
    }
    if (divSum > i) {
      abundArray[i] = true;
    } else {
      abundArray[i] = false;
    }
    divSum = 0;
  }
  // console.log('total sum ', totalSum);
  return abundArray;
}

function abundantSum() {
  const finalAbundantArray = abundantArray();
  // console.log('total sum is', totalSum);
  for (let i = 1; i < finalAbundantArray.length; i += 1) {
    for (let j = 1; j <= i; j += 1) {
      if (finalAbundantArray[j] && finalAbundantArray[i - j]) {
        totalSum -= i;
        break;
      }
    }
  }
}

abundantSum();
console.log('non abundand sum is', totalSum);

