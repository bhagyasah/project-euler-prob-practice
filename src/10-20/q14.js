
function coltazCount(num)	{
	let count	=	1;
	let newNum	=	num;
	while	(newNum !== 1)	{
		if	(newNum % 2 === 0)	{
			newNum /= 2;
		}	else	{
			newNum = (3 * newNum)	+	1;
		}
		count += 1;
	}
	return count;
}

function longestColtazSequence(n)	{
	let result;
	let maxCount	=	0;
	let count	=	1;
	for	(let i	=	2; i	<	n; i	+=	1)	{
		count	=	coltazCount(i);
		if	(maxCount < count)	{
			maxCount = count;
			result	=	i;
		}
		count	=	1;
	}
	return result;
}

console.log("result is ",	longestColtazSequence(1000000));

