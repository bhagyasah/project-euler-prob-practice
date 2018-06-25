
function checkCommon(i, j) {
  const id1 = Math.floor(i / 10);
  const id2 = i % 10;
  const jd1 = Math.floor(j / 10);
  const jd2 = j % 10;
  if ((id1 === jd1 || id1 === jd2 || id2 === jd1 || id2 === jd2) && (id2 !== 0 && jd2 !== 0)) {
    return true;
  }
  return false;
}

// console.log(checkCommon(14, 13));
function removeCommonAndFindRemainder(i, j) {
  let result;
  const id1 = Math.floor(i / 10);
  const id2 = i % 10;
  const jd1 = Math.floor(j / 10);
  const jd2 = j % 10;
  if (id1 === jd1) {
    result = id2 / jd2;
  }
  if (id1 === jd2) {
    result = id2 / jd1;
  }
  if (id2 === jd1) {
    result = id1 / jd2;
  }
  if (id2 === jd2) {
    result = id1 / jd1;
  }
  return result;
}

// console.log(removeCommonAndFindRemainder(11, 12));

function main() {
  const resultArray = [];
  let resultBefore = 0;
  let numerator = 1;
  let denominator = 1;
  let resultAfter = 0;
  for (let i = 10; i <= 99; i += 1) {
    for (let j = 10; j <= 99; j += 1) {
      if (checkCommon(i, j) && (i / j) < 1) {
        resultBefore = i / j;
        resultAfter = removeCommonAndFindRemainder(i, j);
        // console.log('common digit ',i , j);
        if (resultBefore === resultAfter) {
          if (!resultArray.includes(resultAfter)) {
            console.log(i, j);
            numerator *= i;
            denominator *= j;
            resultArray.push(resultAfter);
          }
        }
      }
    }
  }
  console.log(numerator, denominator);
  return numerator / denominator;
}

 console.log(main());
