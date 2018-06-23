
function primeNumberList(num) {
  let isPrime = false;
  const primeList = [];
  for (let i = 2; i < num; i += 1) {
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

console.log(primeNumberList(1000));
