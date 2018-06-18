
function multiply(array, x) {
	let digit = 0;
	let overflow = 0;
	const newArray	=	array;
	const count = array.length + 2;
	for	(let i	=	0; i < count; i	+=	1)	{
		digit = newArray[i] || 0;
		digit = (x * digit) + overflow;
		if	(digit > 9)	{
			const num = digit;
			digit %= 10;
			overflow = Math.floor(num / 10);
		}	else	{
			overflow	=	0;
		}
		newArray[i]	=	digit;
		// console.log(array);
	}
	return newArray;
}


const factorial	= (n) => {
	let array = [1];
	for	(let x	=	1; x	<=	n; x +=	1)	{
		array =	multiply(array,	x);
	}
	return array;
};

function factSum()	{
	const finalArray	=	factorial(100);
	let sum	=	0;
	for	(let x	=	0; x	<	finalArray.length; x	+=	1)	{
		sum += finalArray[x];
	}
	return sum;
}

console.log('result is',factSum());

