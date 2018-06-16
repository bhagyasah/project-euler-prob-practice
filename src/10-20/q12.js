let sum = 0,count=0;
for(let i=1; count !=500; i++){

	sum += i;
	var sqrtSum = Math.sqrt(sum);

	console.log('sum is',sum,sqrtSum);
	for(let j=1; j <= sqrtSum; j++){
		if(sum % j == 0){
			count++;
		}
	}

	count *= 2;
	if (Number.isInteger(Math.sqrt(sum))) {
		count--;
	}
	console.log("number of divisor",count);
	if(count >= 500){
		break;
	}else{
		count=0;
	}
}
console.log("answer is ",sum);