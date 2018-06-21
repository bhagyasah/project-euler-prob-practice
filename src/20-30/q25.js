// // lexicographic ordering  algorithm.....
// /**
// 1.find the largest x such that P[x]<P[x+1]
//   (if there is no such x, p is the last permutaion.)
// 2.find the largest y such that P[x] <P[y].
// 3. Swap  p[x] and P[y]
// 4. Reverse p[x+1....n]
// */

let vals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function swap(a, i, j) {
  const tempArray = a;
  const temp = a[i];
  tempArray[i] = a[j];
  tempArray[j] = temp;
  return tempArray;
}

function permutaionSet(n) {
  // step-1...
  let count = 1;
  while (count !== n) {
    let largestI = -1;
    // console.log(vals);
    for (let i = 0; i < vals.length - 1; i += 1) {
      if (vals[i] < vals[i + 1]) {
        largestI = i;
      }
    }
    // console.log('largestI', largestI);
    if (largestI === -1) {
      console.log('finished');
      break;
    }
    let largestJ = -1;
    // step -2...
    for (let j = 0; j < vals.length; j += 1) {
      if (vals[largestI] < vals[j]) {
        largestJ = j;
      }
    }
    // console.log('largesJ', largestJ);
    // step 3..........
    vals = swap(vals, largestI, largestJ);

    // step: 4 reverse from largestI +1 to the end

    const endArray = vals.splice(largestI + 1);
    endArray.reverse();
    vals = vals.concat(endArray);
    // console.log(vals);
    count += 1;
  }
  return vals;
}
permutaionSet(2000000);
console.log(vals);

