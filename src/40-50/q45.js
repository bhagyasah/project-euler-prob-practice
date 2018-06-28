
const pentaGonalNums = [];
const hexaGonalNums = [];

function main() {
  let n = 2;
  let Tn = 0;
  let Pn = 0;
  let Hn = 0;
  let count = 0
  while (true) {
    Hn = n * ((2 * n) - 1);
    hexaGonalNums.push(Hn);
    Pn = (n * ((3 * n) - 1)) / 2;
    pentaGonalNums.push(Pn);
    Tn = (n * (n + 1)) / 2;
    if (hexaGonalNums.includes(Tn) && pentaGonalNums.includes(Tn)) {
      count += 1;
      if (count === 2) {
        return Tn;
      }
    }
    n += 1;
  }
}
console.log(main());
