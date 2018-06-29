const primeList = require('./../common/PrintPrime');
const permutationSets = require('./../common/permutationSets');

const primeNums = primeList(9999);
const fourDigitPrimes = [];
function print4DigitPrime() {
  for (let i = 0; i < primeNums.length; i += 1) {
    if (primeNums[i] > 999) {
      fourDigitPrimes.push(primeNums[i]);
    }
  }
}
print4DigitPrime();
// console.log(fourDigitPrimes);

function findPermutaionSets(num) {
  const tempArray = [];
  let str = '';
  for (let i = 1; i <= 24; i += 1) {
    const value = permutationSets(`${num}`, i);
    for (let j = 0; j < value.length; j += 1) {
      str += `${value[j]}`;
    }
    if (!tempArray.includes(str)) {
      tempArray.push(str);
    }
    str = '';
  }
  return tempArray.map(c => parseInt(c, 10)).filter(p => (fourDigitPrimes.includes(p) ? p : undefined));
}

function findSequence(arr) {
  const arrayTemp = arr;
  const resultArray = [];
  const max = Math.max(...arrayTemp);
  let min = Math.min(...arrayTemp);
  for (let x = 0; x < arrayTemp.length; x += 1) {
    min = arrayTemp[x];
    for (let i = min; i < max; i += 1) {
      if (arrayTemp.includes(min + i)) {
        if (arrayTemp.includes((min + i) + i)) {
          const lastTerm = min + (2 * i);
          for (let k = 0; k < 3; k += 1) {
            resultArray.push(lastTerm - (k * i));
          }
          return resultArray.reverse();
        }
      }
    }
  }
  return undefined;
}


function main() {
  const resultArray = [];
  let tempArray = [];
  let str = '';
  for (let i = 0; i < fourDigitPrimes.length; i += 1) {
    if (findSequence(findPermutaionSets(fourDigitPrimes[i]))) {
      tempArray = findSequence(findPermutaionSets(fourDigitPrimes[i]));
      for (let k = 0; k < tempArray.length; k += 1) {
        str += `${tempArray[k]}`;
      }
      if (!resultArray.includes(str)) {
        resultArray.push(str);
      }
      str = '';
    }
  }
  return resultArray;
}

console.log(main());
