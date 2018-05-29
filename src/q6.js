
let sqArray=[],simpArray=[];

//Making array of two diffrent type
for(let i=1; i<=100; i++){
	sqArray.push(i*i);
	simpArray.push(i);
}
//calculate sum of square of array
const sumOfSqArray= sqArray.reduce((total,next) => {
	return total + next;
},0);

//calculate sum of simple array
const sumOfsimpleArray= simpArray.reduce((total,next) => {
	return total+next;
},0);

// taking difference and display
console.log('result is', Math.pow(sumOfsimpleArray,2) - sumOfSqArray);

