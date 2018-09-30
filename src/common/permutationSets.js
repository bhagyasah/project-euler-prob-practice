// // lexicographic ordering  algorithm.....
// /**
// 1.find the largest x such that P[x]<P[x+1]
//   (if there is no such x, p is the last permutaion.)
// 2.find the largest y such that P[x] <P[y].
// 3. Swap  p[x] and P[y]
// 4. Reverse p[x+1....n]
// */

function swap(a, i, j) {
  const tempArray = a;
  const temp = a[i];
  tempArray[i] = a[j];
  tempArray[j] = temp;
  return tempArray;
}

module.exports = function permutaionSet(num, n) {
  let vals = `${num}`.split('').map(c => parseInt(c, 10));
  // let timeToComplete = 0;
  // step-1...
  let count = 1;
  // const startTime = Date.now();
  while (count !== n) {
    let largestX = -1;
    // console.log(vals);
    for (let x = 0; x < vals.length - 1; x += 1) {
      if (vals[x] < vals[x + 1]) {
        largestX = x;
      }
    }
    if (largestX === -1) {
      break;
    }
    let largestY = -1;
    // step -2...
    for (let y = 0; y < vals.length; y += 1) {
      if (vals[largestX] < vals[y]) {
        largestY = y;
      }
    }
    // step 3..........
    vals = swap(vals, largestX, largestY);

    // step: 4 reverse from largestI +1 to the end

    const endArray = vals.splice(largestX + 1);
    endArray.reverse();
    vals = vals.concat(endArray);
    count += 1;
  }
  // const endTime = Date.now();
  // timeToComplete = endTime - startTime;
  return vals;
};
