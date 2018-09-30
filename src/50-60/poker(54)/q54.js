/** poker hand problem most awaited problem hahaha excited to solve this problem */
const fs = require('fs');

const ArrayHands = fs.readFileSync('poker.txt', 'utf8').split('\n').map(str =>  str.split(' '));
// console.log(ArrayHands);

function checkWinner(p1, p2) {
  console.log(p1, p2);
  let C = 0;
  let H = 0;
  let S = 0;
  let D = 0;
  for (let i = 0; i < p1.length; i += 1) {
    console.log(p1[i].substring(1, 2));
    if (p1[i].substring(1, 2) === 'C') {
      C += 1;
    }

    if (p1[i].substring(1, 2) === 'D') {
      D += 1;
    }

    if (p1[i].substring(1, 2) === 'H') {
      H += 1;
    }

    if (p1[i].substring(1, 2) === 'S') {
      S += 1;
    }
  }
  console.log(D, H, S, C);
}


function askForWinner(arr) {
  const p1 = arr.slice(0, 5);
  const p2 = arr.slice(5, 10);
  const winner = checkWinner(p1, p2);
  return winner;
}
askForWinner([ '8C', 'TS', 'KC', '9H', '4S', '7D', '2S', '5D', '3S', 'AC' ]);
