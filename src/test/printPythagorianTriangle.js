let rhs=0,lhs=0,found=false;

for(let c=5; c<=1000; c++){

	for(let b=3; b<c; b++){

		for(let a=3; a<b; a++){

			lhs=Math.pow(a,2)+Math.pow(b,2);
			rhs= Math.pow(c,2);
			if(lhs===rhs){
				console.log('pythagorian series',a,b,c);
				if((a + b + c) === 1000){
					found =true;
					console.log('result is ',a*b*c);
				}
			}
		}
	}
	if(found){
		break;
	}

}