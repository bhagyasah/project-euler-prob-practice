

function fact(n) {
  let result = 1;
  for (let i = 1; i <= n; i += 1) {
    result *= i;
  }
  return result;
}

function main() {
  let count = 0;
  for (let n = 1; n <= 100; n += 1) {
    for (let r = 0; r <= n; r += 1) {
      const result = fact(n) / (fact(r) * fact(n - r));
      if (result > 1000000) {
        count += 1;
      }
    }
  }
  return count;
}

console.log(main());

