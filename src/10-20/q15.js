// solving by applying combination......

const fact = (n) => {
  let factorail = 1;
  for	(let i	=	n; i !==	1; i -=	1)	{
    factorail *= i;
  }
  return factorail;
};

const possiblePaths = () => {

  const path = Math.floor(fact(60) / (fact(30) * fact(30)));
  return path;
};

console.log(possiblePaths());
