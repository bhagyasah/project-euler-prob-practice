
function sumOfMult3And5(n)	{
	let	sum = 0;
	const	list = [];
	for (let i = 1; i < n; i += 1) {
		if	(i % 3 === 0 || i % 5 === 0) {
			sum += i;
			list.push(i);
		}
	}
	return sum;
}

console.log("sum",	sumOfMult3And5(1000));

