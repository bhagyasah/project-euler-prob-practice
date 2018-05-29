let original=9991999;
let origalArray=[];
let reverseArray=[];
let isPalindrom=false;
// converig integer to array in two different array
for(let i=0; original !=0; i++){
	reverseArray.push(original % 10);
	origalArray.unshift(original % 10);
	original = Math.floor(original / 10);
}
// now check palindrom num by comparing both array
for(let i=0; i<=origalArray.length; i++){
	if(origalArray[i] === reverseArray[i]){
		isPalindrom=true;
	}else{
		isPalindrom = false;
		break;
	}
}
if(isPalindrom){
	console.log("this is palindrom number");
}else{
	console.log("this is not  palindrom number");
}
