
function sumOfNPrimeNumber(n)	{
	let isPrinme	=	true;
	let sum	=	0;
	for	(let i	=	2; i < n; i +=	1)	{
		for	(let j	=	2; j	< i; j	+=	1)	{
			if	(i % j === 0)	{
				isPrinme	=	false;
				break;
			}	else	{
				isPrinme	=	true;
			}
		}
		if	(isPrinme)	{
			sum += i;
		}
	}
	return sum;
}

console.log("sum of prime", sumOfNPrimeNumber(2000000));
