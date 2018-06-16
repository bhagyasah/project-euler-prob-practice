
var oneDigit= (n) =>{

	switch(n){
	case 1:
		return "one";
	case 2:
		return "two";
	case 3:
		return "three";
	case 4:
		return "four";
	case 5:
		return "five";
	case 6:
		return "six";
	case 7:
		return "seven";
	case 8:
		return "eight";
	case 9:
		return "nine";
	case 10:
		return "ten";
	case 11:
		return "eleven";
	case 12:
		return "twelve";
	case 13:
		return "thirteen";
	case 14:
		return "fourteen";
	case 15:
		return "fifteen";
	case 16:
		return "sixteen";
	case 17:
		return "seventeen";
	case 18:
		return "eighteen";
	case 19:
		return "nineteen";
	}
};

var twoDigit= (n) => {
	switch(n){
	case 2:
		return "twenty";
	case 3:
		return "thirty";
	case 4:
		return "forty";
	case 5:
		return "fifty";
	case 6:
		return "sixty";
	case 7:
		return "seventy";
	case 8:
		return "eighty";
	case 9:
		return "ninety";
	}
};

var numWord = (i) => {
	let ones,tens,onesWord,tensWord;
	if(i <=19){
		return oneDigit(i);
	}
	if(i>19 && i<=99){
		ones= i % 10;
		if(ones !=0){
			onesWord= oneDigit(ones);
		}else{
			onesWord="";
		}
		tens= Math.floor(i / 10);
		if(i % 10 !=0){
			tensWord = twoDigit(tens);
			return `${tensWord}${onesWord}`;
		}else{
			tensWord=twoDigit(tens);
			return tensWord;
		}
	}
};

var arrayOfWord = (n) => {
	let wordArray=[],hundred,hundredWord,remainder,tensWord;
	for(let i=1; i<=n; i++){
		if(i <= 99){
			wordArray.push(numWord(i));
			console.log(numWord(i));
		}
		if(i >99 && i<1000){
			hundred= Math.floor(i / 100);
			if(i % 100 == 0){
				hundredWord= oneDigit(hundred);
				hundredWord += "hundred";
				console.log(hundredWord);
				wordArray.push(hundredWord);
			}else{
				hundredWord= oneDigit(hundred);
				hundredWord += "hundredand";
				remainder = i %100;
				tensWord= numWord(remainder);
				console.log(`${hundredWord}${tensWord}`);
				wordArray.push(`${hundredWord}${tensWord}`);
			}
		}
		if(i ==1000){
			console.log("onethousand");
			wordArray.push("onethousand");
		}
	}
	return wordArray;
};

var allString="";
var finalArray= arrayOfWord(1000);
for(let i=0; i<finalArray.length; i++){
	allString += finalArray[i];
}
//console.log(finalArray);
console.log(allString.length);
