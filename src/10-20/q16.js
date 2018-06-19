
function nToThePower(b,	n)	{
  const arrayResult	=	[1];
  let overflow	=	0;
  let digit;
  let count;
  let sum	=	0;

  //	ginerating array

  for	(let i	=	0; i	<	n;	i	+=	1)	{
    count	=	arrayResult.length +	1;
    for	(let j	=	0; j	< count; j	+=	1)	{
      digit = arrayResult[j] || 0;
      digit = (b * digit) + overflow;

      if	(digit > 9)	{
        digit -= 10;
        overflow = 1;
      }	else	{
        overflow =	0;
      }
      arrayResult[j]	= digit;
    //	console.log(arrayResult);
    }
  }
  let strResult	=	"";
  for	(let i	=	0; i	< arrayResult.length; i +=	1)	{
    strResult += arrayResult[i];
  }
  console.log(strResult);
  for	(let i	=	0; i	<	arrayResult.length; i +=	1)	{
    sum += arrayResult[i];
  }
  return sum;
}
console.log("result is ",	nToThePower(2, 1000));

