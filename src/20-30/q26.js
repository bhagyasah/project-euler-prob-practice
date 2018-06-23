
function checkRepeatation(n) {
  // console.log('prime no =', n);
  let a = 1;
  let count = 0;
  do {
    a = (a * 10) % n;
    count += 1;
  } while (a !== 1);
  return count;
}
// console.log(checkRepeatation(997));

function primeNumberList(num) {
  let isPrime = false;
  const primeList = [];
  for (let i = 7; i < num; i += 1) {
    for (let j = 2; j < i; j += 1) {
      if (i % j === 0) {
        isPrime = false;
        break;
      } else {
        isPrime = true;
      }
    }
    if (isPrime) {
      primeList.push(i);
    }
  }
  return primeList;
}

function divide() {
  let max = 0;
  let maxNo = 0;
  const primeNos = primeNumberList(1000);
  // console.log(primeNos);
  for (let i = 0; i < primeNos.length; i += 1) {
    const tempMax = checkRepeatation(primeNos[i]);
    // console.log('tempMax =', tempMax);
    if (tempMax > max) {
      max = tempMax;
      maxNo = primeNos[i];
    }
  }
  return maxNo;
}

console.log('result is ', divide());
