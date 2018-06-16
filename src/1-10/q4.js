
function isPrime(data){
	let originalData=data, originalArray=[], reverseArray=[],isprime;

	for(let i=0; originalData !=0; i++){
		originalArray.unshift(originalData % 10);
		reverseArray.push(Math.floor(originalData % 10));
		originalData= Math.floor(originalData / 10);
	}

	for(let i=0; i<=originalArray.length; i++){
		if(originalArray[i]=== reverseArray[i]){
			isprime=true;
		}else{
			isprime=false;
			break;
		}
	}
	if(isprime){
		return true;
	}else{
		return false;
	}
}

function heighestThreeDigitMult(){
	let testArray=[];

	for(let i=999; i != 100; i--){
		for(let j=999; j != 100; j--){
			if(isPrime(i * j)){
				testArray.push(i * j);
			}
		}
	}
	return testArray;
}

const largest = Math.max(...heighestThreeDigitMult());
console.log('largest value',largest);


