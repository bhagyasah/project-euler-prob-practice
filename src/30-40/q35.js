const primeNumberList = require('./../test/PrintPrime.js');
const primeNumbers = primeNumberList(1000000);
const finalPrimeList = [];
// console.log(primeNumbers);


function rotateAndCheckPrime(arr) {
  let tempstr = `${arr}`;
  let isPrime = false;
  for (let i = 0; i < tempstr.length; i += 1) {
    let firtdigit = tempstr.substr(0, 1);
    let lastAll = tempstr.substr(1);
    // console.log(lastAll);
    lastAll += firtdigit;
    tempstr = lastAll;
    if (primeNumbers.includes(parseInt(tempstr, 10))) {
      isPrime = true;
    } else {
      isPrime = false;
      break;
    }
    // console.log(tempstr);
  }
  if (isPrime) {
    finalPrimeList.push(parseInt(tempstr, 10));
  }
}
// rotateAndCheckPrime(123456789);
function main() {
  for (let i = 0; i < primeNumbers.length; i += 1) {
    rotateAndCheckPrime(primeNumbers[i]);
  }
  return finalPrimeList.length;
}
console.log(main());