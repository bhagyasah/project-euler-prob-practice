let num= 600851475143;
let isPrime =false;
let primeFactorList=[];
for(let i=2; i <=num; i++ ){
	if(num % i === 0){
		for(let j=2; j < i; j++){
			if(i % j===0){
				isPrime=false;
				break;
			}else{
				isPrime = true;
			}
		}
		if(isPrime){
			primeFactorList.push(i);
			num = num / i;
		}
	}
}
console.log(primeFactorList);
