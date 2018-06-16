
var givenTriangle= `75
95 64
17 47 82
18 35 87 10
20 04 82 47 65
19 01 23 75 03 34
88 02 77 73 07 63 67
99 65 04 28 06 16 70 92
41 41 26 56 83 40 80 70 33
41 48 72 33 47 32 37 16 94 29
53 71 44 65 25 43 91 52 97 51 14
70 11 33 28 77 73 17 78 39 68 17 57
91 71 52 38 17 14 91 43 58 50 27 29 48
63 66 04 68 89 53 67 30 73 16 69 87 40 31
04 62 98 27 23 09 70 98 73 93 38 53 60 04 23`,valueStore=[],countIndex=0;

var arrayTriangle = givenTriangle.split('\n');
var finalArrayTriangle = arrayTriangle.map(c => c.split(" ")).map(c => c.map(c => parseInt(c)));

//console.log(finalArrayTriangle);
valueStore.push(finalArrayTriangle[0][0]);
var result=finalArrayTriangle[0][0],currentIndex=0;
for(let x=0; x<finalArrayTriangle.length-1; x++){
	countIndex=forwadMax(x+1,countIndex);
	valueStore.push(finalArrayTriangle[x+1][countIndex]);
}

function forwadMax(arr,index){
	if(finalArrayTriangle[arr][index] > finalArrayTriangle[arr][index+1]){
		return index;
	}else{
		return index+1;
	}
}

var sum=0;
for(let i=0; i<valueStore.length; i++){
	sum += valueStore[i];
}
console.log("max value sum is ",sum);

