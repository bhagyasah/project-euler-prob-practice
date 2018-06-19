
function isPrime(data)	{
  let originalData = data;
  const originalArray = [];
  const reverseArray = [];
  let isprime;
  for	(let i	=	0; originalData !== 0; i += 1)	{
    originalArray.unshift(originalData % 10);
    reverseArray.push(Math.floor(originalData % 10));
    originalData	= Math.floor(originalData / 10);
  }

  for	(let i	=	0; i	<=	originalArray.length; i	+=	1)	{
    if	(originalArray[i]	=== reverseArray[i])	{
      isprime	=	true;
    }	else	{
      isprime	=	false;
      break;
    }
  }
  if	(isprime)	{
    return true;
  }
  return false;
}


function heighestThreeDigitMult()	{
  const testArray = [];

  for	(let i	=	999; i !== 100; i -= 1)	{
    for	(let j	=	999; j !== 100; j -=	1)	{
      if	(isPrime(i * j))	{
        testArray.push(i * j);
      }
    }
  }
  return testArray;
}

const largest = Math.max(...heighestThreeDigitMult());
console.log("largest value",	largest);

