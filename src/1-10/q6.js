function sumOfSquareDifference() {
	const	sqArray	=	[];
	const simpArray	=	[];
	let result	=	0;

	// Making array of two diffrent type

	for	(let i	=	1; i	<=	100; i +=	1)	{
		sqArray.push(i * i);
		simpArray.push(i);
	}

	//	calculate sum of square of array

	const sumOfSqArray	= sqArray.reduce((total,	next) =>	{
		return total + next;
	},	0);

	// calculate sum of simple array

	let sumOfsimpleArray	= simpArray.reduce((total,	next) => {
		return total	+	next;
	},	0);

	// taking difference and display
	result =	(sumOfsimpleArray **=2) - sumOfSqArray;
	return result;
}

console.log("result is",	sumOfSquareDifference());
