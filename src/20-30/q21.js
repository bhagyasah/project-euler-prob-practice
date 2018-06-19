
function sumDivisor(n) {
  // console.log("value to be checked", n);
  let sum = 0;
  for (let i = 1; i < n; i += 1) {
    if (n % i === 0) {
      sum += i;
    }
  }
  // console.log(sum);
  return sum;
}

function amicableNumber() {
  let sum = 0;
  let result;
  let finalResult = 0;
  for (let i = 220; i <= 10000; i += 1) {
    sum = sumDivisor(i);
    result = sumDivisor(sum);
    if (i === result && sum !== result) {
      console.log("emicable series", result, sum);
      finalResult += result + sum;
      i = sum;
    }
  }
  return finalResult;
}
console.log("result is ", amicableNumber());
