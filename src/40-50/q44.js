
const pentagonalNums = [];
function checkSumDiff() {
  for (let i = 0; i < pentagonalNums.length; i += 1) {
    for (let j = 0; j < pentagonalNums.length; j += 1) {
      if (pentagonalNums.includes(pentagonalNums[i] + pentagonalNums[j]) && (i !== j) && pentagonalNums.includes(Math.abs(pentagonalNums[i] - pentagonalNums[j]))) {
        console.log('pentagonal value', pentagonalNums[i], pentagonalNums[j]);
        return Math.abs(pentagonalNums[i] - pentagonalNums[j]);
      }
    }
  }
  return false;
}
function main() {
  let tn = 0;
  let n = 1;
  while (n <= 25000000) {
    tn = (n * ((3 * n) - 1)) / 2;
    pentagonalNums.push(tn);
    const result = checkSumDiff(n);
    if (result) {
      return result;
    }
    n += 1;
  }
  return pentagonalNums;
}
console.log('result is', main());

