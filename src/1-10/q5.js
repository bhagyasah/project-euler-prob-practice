let valueFound=false;
let i=20;
while(true){
	for(let j = 1; j <= 20; j++){
		if(i % j === 0){

			valueFound = true;
		}else{
			valueFound=false;
			break;
			console.log(i);
		}
	}
	if(valueFound){
		break;
	}
	i += 1;
}
console.log(valueFound,i);