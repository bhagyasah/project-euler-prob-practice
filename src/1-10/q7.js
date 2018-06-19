function nthPrimeNumber(n)	{
  let isPrime	=	false;
  let count = 2;
  let i	=	2;
  for	(; count <= n; i	+=	1)	{
    for	(let j	=	2; j < i; j	+=	1)	{
      if	(i % j === 0)	{
        isPrime	=	false;
        break;
      }	else	{
        isPrime = true;
      }
    }
    if	(isPrime)	{
      console.log(count += 1, i);
    }
  }
  return i - 1;
}

console.log("10001st prime no is", nthPrimeNumber(10001));
