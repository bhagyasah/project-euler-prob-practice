
function dayOfWeek(y, m, q) {
  const K = y % 100 || 0;
  const J = Math.floor(y / 100);
  let d = 0;
  d = (q + Math.floor((13 * (m + 1)) / 5) + K + Math.floor(K / 4) + Math.floor(J / 4) + (5 * J)) % 7;
  return d;
}

function totalSunday() {
  let count = 0;
  let month = [13, 14, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  for (let y = 1901; y <= 2000; y += 1) {
    for (let m = 0; m < 12; m += 1) {
      if (dayOfWeek(y, month[m], 1) === 1) {
        count += 1;
      }
    }
  }
  return count;
}
console.log('total number of sunday is', totalSunday());
