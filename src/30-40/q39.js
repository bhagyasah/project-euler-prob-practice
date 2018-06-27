
function main() {
  let p = 112;
  let c = 0;
  let result = 0;
  let count = 0;
  let cArray = [];
  let countResult = 0;
  while (p <= 1000) {
    for (let a = 1; a < p; a += 1) {
      for (let b = 1; b < p; b += 1) {
        c = Math.sqrt((a ** 2) + (b ** 2));
        if ((a + b + c) === p) {
          if (!cArray.includes(c)) {
            count += 1;
            cArray.push(c);
            console.log('for p =', p, a, b, c);
          }
        }
      }
    }
    cArray = [];
    //  console.log(count, result);

    if (count > countResult) {
      countResult = count;
      result = p;
    }
    p += 1;
    count = 0;
  }
  return result;
}
console.log(main());
// console.log(Math.sqrt(4 ** 2 + 3 ** 2));