
function carryForwardSum(arr1, arr2) {
  let cf = 0;
  let carry = 0;
  const resultSum = [];
  for (let i = 0; i < Math.max(arr1.length, arr2.length) + cf; i += 1) {
    const a = arr1[i] || 0;
    // console.log('a=', a);
    const b = arr2[i] || 0;
    // console.log('b=', b);
    // console.log('carry =', carry);
    const result = a + b + carry;
    // console.log('result', result);
    if (result > 9) {
      resultSum[i] = result % 10;
      carry = Math.floor(result / 10);
      cf = 1;
    } else {
      resultSum[i] = result;
      carry = 0;
      cf = 0;
    }
  }
  return resultSum;
}

//  console.log('carryforward result', carryForwardSum([8, 5, 5], [8, 5]));

function main() {
  let numerator = [3];
  let denominator = [2];
  let count = 0;
  for (let i = 1; i <= 1000; i += 1) {
    // console.log(numerator, denominator);
    let temp = carryForwardSum(numerator, denominator);
    numerator = carryForwardSum(temp, denominator);
    denominator = temp;
    temp = null;
    if (numerator.length > denominator.length) {
      count += 1;
    }
  }
  return count;
}
console.log('result is ', main());
