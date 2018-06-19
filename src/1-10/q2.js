

function evenFibonacciSum(n)	{
  const	a	=	1;
  const b	=	2;
  const fabSeries	=	[];
  let sum	=	0;
  fabSeries.push(a);
  fabSeries.push(b);
  for	(let i = 0; fabSeries[i] < n; i += 1)	{
    fabSeries.push(fabSeries[i]	+	fabSeries[i	+	1]);
    if	(fabSeries[i] % 2 ===	0)	{
      sum	+=	fabSeries[i];
    }
  }
  return sum;
}

console.log(evenFibonacciSum(4000000));

