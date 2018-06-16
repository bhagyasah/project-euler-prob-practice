let isPrime=false,count = 2;
let i=2;
for(; count <= 10001; i++){

	for(let j=2; j < i; j++){
		if(i % j === 0){
			isPrime=false;
			break;
		}else{
			isPrime = true;
		}
	}

	if(isPrime){
		console.log(count++,i);
	}
}
console.log('10001st prime no is', i-1);
