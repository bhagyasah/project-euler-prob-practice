
function isPalindrome(n) {
  const strNumber = `${n}`.split('').reverse().join('');
  // console.log(n , strNumber);
  if (n === parseInt(strNumber, 10)) {
    return true;
  }
  return false;
}

// console.log(isPalindrome(12211));

function isLychrelNumber(n) {
  let temp = n;
  for (let j = 1; j < 50; j += 1) {
    const strNumber = `${temp}`.split('').reverse().join('');
    const toBeCheck = temp + parseInt(strNumber, 10);
    // console.log('is palindrome and value', toBeCheck, isPalindrome(toBeCheck));
    if (isPalindrome(toBeCheck)) {
      return false;
    }
    temp = toBeCheck;

    if (j === 49) {
      return true;
    }
  }
  return false;
}

//  console.log(isLychrelNumber(196));

function main() {
  let lychrelCount = 0;
  for (let i = 10; i < 10000; i += 1) {
    if (isLychrelNumber(i)) {
      lychrelCount += 1;
    }
  }
  return lychrelCount;
}

console.log('result is ', main());
