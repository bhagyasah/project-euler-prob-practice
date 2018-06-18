function heighlyDivisibleNumSum(n) {
	let sum = 0;
	let count	=	0;
	for	(let i = 1; count !== n; i	+= 1)	{
		sum += i;
		const sqrtSum = Math.sqrt(sum);
		// console.log('sum is',sum,sqrtSum);
		for	(let j = 1; j <= sqrtSum; j += 1) {
			if	(sum % j === 0)	{
				count	+=	1;
			}
		}
		count *= 2;
		if (Number.isInteger(Math.sqrt(sum))) {
			count -= 1;
		}
		//	console.log("number of divisor",count);
		if	(count >= n) {
			break;
		}	else {
			count	=	0;
		}
	}
	return sum;
}

console.log("result is",	heighlyDivisibleNumSum(500));
