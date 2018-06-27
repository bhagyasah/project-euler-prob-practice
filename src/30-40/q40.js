
function nthNumber(n) {
  let temp = '';
  for (let i = 1; temp.length <= 1000001; i += 1) {
    temp += `${i}`;
  }
  // console.log(temp);
  return parseInt(temp.substr(n - 1, 1), 10);
}

function main() {
  const result = nthNumber(1) * nthNumber(10) * nthNumber(100) *
                  nthNumber(1000) * nthNumber(10000) * nthNumber(100000) *
                   nthNumber(1000000);
  return result;
}

console.log('result is ', main());
