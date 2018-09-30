
function carryForwardingMultipication(b, n, arrayResult) {
  const array = arrayResult;
  let overflow	=	0;
  let digit;
  let count;
  count = array.length;
  for	(let j = 0; j < count; j +=	1)	{
    digit = array[j] || 0;
    digit = (b * digit) + overflow;
    if	(digit > 9)	{
      const tempDigit = digit;
      digit %= 10;
      overflow = Math.floor(tempDigit / 10);
    }	else	{
      overflow =	0;
    }
    array[j]	= digit;
    // console.log(array);
    if (overflow > 0 && ((j + 1) === count)) {
      count += 1;
    }
  }
  return array;
}

exports.power = (b,	n) => {
  let sum	=	0;
  let arrayResult = [1];
  //	ginerating array
  for	(let i = 0; i <	n; i += 1)	{
    arrayResult = carryForwardingMultipication(b, i, arrayResult);
  }
  let strResult	=	'';
  for	(let i	=	arrayResult.length - 1; i	>= 0; i -=	1)	{
    strResult += arrayResult[i];
  }
  // console.log(strResult);
  for	(let i	=	0; i	<	arrayResult.length; i +=	1)	{
    sum += arrayResult[i];
  }
  return arrayResult;
};

// const p = require('./q16.js');
// console.log(p.power(2, 1000));
