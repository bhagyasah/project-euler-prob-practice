
const oneDigit	= (n) =>	{
  const oneDigitArray =	['',	'one', 'two', 'three', 'four', 'five', 'six',	'seven', 'eight', 'nine',	'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  return oneDigitArray[n];
};

const twoDigit	= (n) => {
  const twoDigitArray = ['',	'',	'twenty',	'thirty',	'forty', 'fifty',	'sixty', 'seventy',	'eighty', 'ninety'];
  return twoDigitArray[n];
};

function numWord(i)	{
  let ones;
  let tens;
  let onesWord;
  let tensWord;
  let result;

  if	(i <=	19)	{
    return oneDigit(i);
  }
  if	(i	>	19 && i	<=	99)	{
    ones	= i % 10;
    if	(ones !==	0)	{
      onesWord	= oneDigit(ones);
    }	else	{
      onesWord	=	'';
    }
    tens	= Math.floor(i / 10);
    if	(i % 10 !==	0)	{
      tensWord = twoDigit(tens);
      result	= `${tensWord}${onesWord}`;
    }	else	{
      tensWord	=	twoDigit(tens);
      result	= tensWord;
    }
  }
  return result;
}

const arrayOfWord = (n) => {
  const wordArray	=	[];
  let hundred;
  let hundredWord;
  let remainder;
  let tensWord;
  for	(let i	=	1; i	<=	n; i	+=	1)	{
    if	(i <= 99)	{
      wordArray.push(numWord(i));
      console.log(numWord(i));
    }
    if	(i >	99 && i	<	1000)	{
      hundred	= Math.floor(i / 100);
      if	(i % 100 === 0)	{
        hundredWord	= oneDigit(hundred);
        hundredWord += 'hundred';
        console.log(hundredWord);
        wordArray.push(hundredWord);
      }	else	{
        hundredWord	= oneDigit(hundred);
        hundredWord += 'hundredand';
        remainder = i % 100;
        tensWord	= numWord(remainder);
        console.log(`${hundredWord}${tensWord}`);
        wordArray.push(`${hundredWord}${tensWord}`);
      }
    }
    if	(i ===	1000)	{
      console.log('onethousand');
      wordArray.push('onethousand');
    }
  }
  return wordArray;
};

let allString	=	'';
const finalArray	= arrayOfWord(1000);
for	(let i	=	0; i	<	finalArray.length; i +=	1)	{
  allString += finalArray[i];
}
//	console.log(finalArray);
console.log(allString.length);
