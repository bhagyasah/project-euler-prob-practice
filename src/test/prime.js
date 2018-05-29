const x = 102;
let isPrime = false;
for (let i=2; i < x; i++){
	if(x % i === 0){
		isPrime = false;
		break;
	}else{
		isPrime = true;
		break;
	}
}
console.log('the giev value is', isPrime);