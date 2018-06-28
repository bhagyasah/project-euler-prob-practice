
function printPythagorianTriangle(n) {
  let rhs = 0;
  let lhs = 0;
  let found = false;
  for (let c = 5; c <= n; c += 1) {
    for (let b = 3; b < c; b += 1) {
      for (let a = 3; a < b; a += 1) {
        lhs = (a ** 2) + (b ** 2);
        rhs = (c ** 2);
        if (lhs === rhs) {
          console.log('pythagorian series', a, b, c);
          if ((a + b + c) === 1000) {
            found = true;
            console.log('result is ', a * b * c);
          }
        }
      }
    }
    if (found) {
      break;
    }
  }
}
console.log(printPythagorianTriangle(1000));

