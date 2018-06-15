var array2D=[];

var grid = (r,c) => {
	var simpleArray=[];
	for(let x=0; x<r; x++){
		for(let y=0; y<c; y++){
			if(x===0){
				simpleArray.push(1);
			}else{
				if(y===0){
					simpleArray.push(1);
				}else{
					simpleArray.push(0);
				}
			}
		}
		array2D.push(simpleArray);
		simpleArray=[];
	}
};
grid(4,4);
console.log("before",array2D);
var routCount= (r,c) => {
	for(let x=0; x<r; x++){
		for(let y=0; y<c; y++){
			if(x !=0){
				if(y !=0){
					array2D[x][y]=array2D[x-1][y] +array2D[x][y-1];
				}
			}
		}
	}
};
routCount(4,4);
console.log("after",array2D);


