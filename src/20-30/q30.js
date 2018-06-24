
function sumOfPowerDigit(n) {
  let totalSum = 0;
  const arrayOfdigit = n.split('').map(c => parseInt(c, 10));
  // console.log(arrayOfdigit);
  for (let i = 0; i < arrayOfdigit.length; i += 1) {
    totalSum += (arrayOfdigit[i] ** 5);
  }
  return totalSum;
}
// console.log(sumOfPowerDigit(`93084`));
function main() {
  const resultArray = [];
  let sumOfDigit;
  let sum = 0;
  for (let i = 10; i <= 999999; i += 1) {
    sumOfDigit = sumOfPowerDigit(`${i}`);
    // console.log(sumOfDigit);
    if (i === sumOfDigit) {
      resultArray.push(i);
    }
  }
  console.log(resultArray);
  for (let i = 0; i < resultArray.length; i += 1) {
    sum += resultArray[i];
  }
  return sum;
}
console.log(main());
