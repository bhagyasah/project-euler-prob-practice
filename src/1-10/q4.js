
module.exports = function isPalindrom(data, base)	{
  const str = data.toString(base);
  let a = str.length - 1;
  let b = 0;
  while (b < a) {
    if (str[b] !== str[a]) {
      return false;
    }
    b += 1;
    a -= 1;
  }
  return true;
}

const isPalindrom = require('./q4.js');
// console.log(isPalindrom(1101));

function heighestThreeDigitMult()	{
  const testArray = [];

  for	(let i	=	999; i !== 100; i -= 1)	{
    for	(let j	=	999; j !== 100; j -=	1)	{
      if	(isPalindrom(i * j, 10))	{
        testArray.push(i * j, 10);
      }
    }
  }
  return testArray;
}

 const largest = Math.max(...heighestThreeDigitMult());
 console.log('largest value',	largest);

