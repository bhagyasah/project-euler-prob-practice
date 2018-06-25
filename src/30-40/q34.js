
function factorial(n) {
  let fact = 1;
  let sum = 0;
  let digit = 0;
  let remainDigit = n;
  while (remainDigit > 0) {
  // console.log(remainDigit);
    digit = remainDigit % 10;
    remainDigit = Math.floor(remainDigit / 10);
    for (let i = 1; i <= digit; i += 1) {
      fact *= i;
    }
    sum += fact;
    // console.log('fact of individual digit', fact);
    fact = 1;
  }
  return sum;
}
// console.log(factorial(145));

function main() {
  let sum = 0;
  for (let i = 3; i <= 9999999; i += 1) {
    if (i === factorial(i)) {
      sum += i;
    }
  }
  return sum;
}
console.log('result is ', main());


