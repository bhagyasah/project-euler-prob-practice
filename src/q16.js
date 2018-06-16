
var arrayResult=[1],overflow=0,digit,count,sum=0;

//ginerating array
for(let i=0; i<1000;i++){
	count=arrayResult.length+1;
	for(let j=0; j< count; j++){

		digit = arrayResult[j] || 0;
		digit = 2 * digit + overflow;

		if(digit > 9){
			digit -= 10;
			overflow = 1;
		}else{
			overflow =0;
		}
		arrayResult[j]= digit;
	//	console.log(arrayResult);
	}
}
var strResult="";
for(let i=0; i< arrayResult.length; i++){
	strResult = strResult+arrayResult[i];
}
console.log(strResult);
//console.log(arrayResult);
for(let i=0; i<arrayResult.length; i++){
	sum += arrayResult[i];
}
console.log('result is ',sum);






//simple method if digit is small.....................
// var powerNum=Math.pow(2,1000);
// console.log(powerNum);
// var strNum=("" + powerNum).replace(".","");
// var array = strNum.split("");
// console.log(array);

// var result = array.reduce((total,next) => {
// 	return total+next;
// },0);
// console.log(result);
