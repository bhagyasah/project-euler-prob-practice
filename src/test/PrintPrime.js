let num=100;
let isPrime = false;
let primeList = [];

for(let i=2; i < num; i++){

	for(let j=2; j < i; j++){

		if(i % j === 0){
			isPrime =false;
			break;
		}else{
			isPrime=true;
		}
	}
	if(isPrime){
		primeList.push(i);
	}
}

console.log("prime value is ",primeList);
console.log("largest prime no is ",primeList[primeList.length -1]);