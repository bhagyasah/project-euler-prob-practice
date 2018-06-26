
const resultArray = [];
let tempArray = [];
function createTable(c, t) {
  for (let i = 0; i < c; i += 1) {
    for (let j = 0; j <= t; j += 1) {
      if (i === 0 || (j === 0 && i !== 0)) {
        tempArray[j] = 1;
      } else {
        tempArray[j] = 0;
      }
    }
    resultArray.push(tempArray);
    tempArray = [];
  }
}

function main(target) {
  const coins = [1, 2, 5, 10, 20, 50, 100, 200];
  createTable(coins.length, target);
  for (let i = 1; i < resultArray.length; i += 1) {
    for (let j = 1; j <= target; j += 1) {
      // console.log(coins[i]);
      if (coins[i] > j) {
        resultArray[i][j] = resultArray[i - 1][j];
      } else {
        resultArray[i][j] = resultArray[i - 1][j] + resultArray[i][j - coins[i]];
      }
    }
  }
  console.log(resultArray);
  console.log(resultArray[coins.length - 1][target]);
}
main(200);


