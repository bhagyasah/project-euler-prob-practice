// solving by applying combination......
var possiblePaths = () => {
	var path = Math.floor(fact(40) / (fact(20) * fact(20)));
	return path;
};

var fact = (n) => {
	var factorail=1;
	for(let i=n; i !=1; i--){
		factorail *= i;
	}
	return factorail;
};
console.log(possiblePaths());




