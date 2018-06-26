function isPalindrome(x, base) {

  var s = x.toString(base);
  console.log(s);
  var a = s.length - 1;
  var b = 0;

  while (b < a) {

      if (s[a] !== s[b]) {
          return false;
      }
      b++;
      a--;
  }
  return true;
}
 console.log(isPalindrome(123 , 2));
const str='my name is bhagya';
console.log(str[3]);
function solution(limit) {

  var i = 1;
  var s = 0;
  while (i < limit) {
      if (isPalindrome(i, 10) && isPalindrome(i, 2)) {
          s+= i;
      }
      i+= 2;
  }
  return s;
}
 // console.log(solution(100));