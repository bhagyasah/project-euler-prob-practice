function collatz_count_until_1(n) {
  var count = 0;
  while(n !== 1) {
    if(n % 2 === 0) {
      n /= 2;
    } else {
      n = (3 * n) + 1;
    }
    count++;
  }
  return count;
}

var max;
for(var i = 1; i < 1000000; i++) {
  var l = collatz_count_until_1(i);
  if(max === undefined || max[0] < l) {
    max = [l, i]
  }
}

console.log("Maximum stopping distance %d, starting number %d", max[0], max[1]);