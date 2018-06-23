function checkPrime(n) {
  let isPrime;
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      isPrime = false;
      break;
    } else {
      isPrime = true;
    }
  }
  return isPrime;
}

function findNoOfConsecutivePrime(a, b) {
  let n = 0;
  let count = 0;
  while (true) {
    const t = (n * n) + (a * n) + b;
    if (checkPrime(t)) {
      count += 1;
      n += 1;
    } else {
      break;
    }
  }
  return count;
}

function mainSulution() {
  let maxConseCount = 0;
  let A;
  let B;
  for (let a = -999; a <= 999; a += 1) {
    for (let b = -1000; b <= 1000; b += 1) {
      const maxCount = findNoOfConsecutivePrime(a, b);
      if (maxCount > maxConseCount) {
        maxConseCount = maxCount;
        A = a;
        B = b;
      }
    }
  }
  return A * B;
}

console.log('result is ', mainSulution());
