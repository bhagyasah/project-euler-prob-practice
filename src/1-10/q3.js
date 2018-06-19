let num	= 600851475143;
let isPrime =	false;
const primeFactorList	=	[];
for	(let i = 2; i <=	num; i +=	1)	{
  if	(num % i === 0)	{
    for	(let j =	2; j < i; j	+=	1)	{
      if	(i % j	===	0)	{
        isPrime	=	false;
        break;
      }	else	{
        isPrime = true;
      }
    }
    if	(isPrime)	{
      primeFactorList.push(i);
      num	/= i;
    }
  }
}
console.log(primeFactorList);
