

function digitSqrSum(n) {
  const arr = `${n}`.split('').map(v => parseInt(v, 10)).map(v => v ** 2).reduce((t, v) => t + v);
  return arr;
}
// console.log(digitSqrSum(42));

function main() {
  let count = 0;
  let squareSum = 0;
  for (let i = 2; i < 10000000; i += 1) {
    squareSum = digitSqrSum(i);
    while (true) {
      if (squareSum === 89) {
        count += 1;
        break;
      } else if (squareSum === 1) {
        break;
      } else {
        squareSum = digitSqrSum(squareSum);
      }
    }
  }
  return count;
}
console.log(main());
