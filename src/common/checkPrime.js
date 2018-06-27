
module.exports = function isPrime(x) {
  if (x === 1) {
    return false;
  }
  for (let i = 2; i < x; i += 1) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
};
