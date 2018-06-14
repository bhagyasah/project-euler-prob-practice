
var result,maxCount=0,count=1;

function coltazCount(num){
	while(num != 1){
		if( num % 2 == 0){
			num = num / 2;
		}else{
			num = (3 * num)+1;
		}
		count += 1;
	//	console.log(num);
	}
	return count;
}

for(let i=2; i<1000000; i+=1){
	count=coltazCount(i);
	if(maxCount < count){
		maxCount = count;
		result=i;
	}
	count=1;
}

console.log('max count =',maxCount,result);