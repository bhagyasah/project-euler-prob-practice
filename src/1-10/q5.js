function smallestMultiple(n)	{
	let valueFound	=	false;
	let i	=	n;
	while	(true)	{
		for	(let j = 1; j <= 20; j +=	1)	{
			if	(i % j === 0)	{
				valueFound = true;
			}	else	{
				valueFound	=	false;
				break;
			}
		}
		if	(valueFound)	{
			break;
		}
		i += 1;
	}
	return i;
}

console.log(smallestMultiple(20));
