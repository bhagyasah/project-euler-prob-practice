let isPrinme=true,sum=0;

for(let i=2; i < 2000000; i++){
	for(let j=2; j< i; j++){
		if(i % j === 0){
			isPrinme=false;
			break;
		}else{
			isPrinme=true;
		}
	}
	if(isPrinme){
		sum += i;
	}
}
console.log('sum of prime', sum);
