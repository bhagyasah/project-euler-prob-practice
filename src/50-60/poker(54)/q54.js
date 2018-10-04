/** poker hand problem most awaited problem hahaha excited to solve this problem */
const fs = require('fs');

const ArrayHands = fs.readFileSync('poker.txt', 'utf8').split('\n').map(str =>  str.split(' '));
// //console.log(ArrayHands);
const cards = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
let p1Score = 0;
let p2Score = 0;
const RF = 100;
const SF = 90;
const FK = 80;
const FH = 70;
const FLS = 60;
const STR = 50;
const TK = 40;
const TP = 30;
const OP = 20;
const HC = 10;

function findPairAndKind(cardArray) {
 // console.log('cardArrary', cardArray);
  let tempCardArray = cardArray;
  let cardSetValue = null;
  let onePair = 0;
  let twoPair = 0;
  let threeKind = 0;
  let fourKind = 0;
  let count = 0;
  const tempArray = [];
  for (let i = 0; i < tempCardArray.length; i += 1) {
    for (let j = 0; j < tempCardArray.length; j += 1) {
      if (tempCardArray[j] === tempCardArray[i]) {
        count += 1;
      }
    }

    if (count === 2) {
      if (!tempArray.includes(tempCardArray[i])) {
       // console.log('onePair');
        onePair += 1;
        tempArray.push(tempCardArray[i]);
      }
    }
    if (count === 3) {
      if (!tempArray.includes(tempCardArray[i])) {
       // console.log('three of kind');
        threeKind += 1;
        tempArray.push(tempCardArray[i]);
      }
    }

    if (count === 4) {
      if (!tempArray.includes(tempCardArray[i])) {
       // console.log('four of kind');
        fourKind += 1;
        tempArray.push(tempCardArray[i]);
      }
    }
    count = 0;
  }

  if (onePair === 1 && threeKind !== 1) {
    const remainArray = tempCardArray.filter(v => v !== tempArray[0]);
    const remainValue = remainArray.sort((a, b) => b - a);
    cardSetValue = [...tempArray, ...remainValue];
    cardSetValue.unshift(OP);
    // console.log('tempArray after pop', tempArray, remainArray, remainValue, cardSetValue);
    return cardSetValue;
  }

  if (onePair === 2) {
    // console.log('tempArray value', tempArray);
    const remainArray = tempCardArray.filter(v => (v !== tempArray[0]) && (v !== tempArray[1]));
    const remainValue = remainArray.sort((a, b) => b - a);
    // console.log('rmain array value in twopair', remainArray);
    tempArray.sort((a, b) => b - a);
    cardSetValue = [...tempArray, ...remainValue];
    cardSetValue.unshift(TP);
  // // console.log('final value to be return', cardSetValue);
  }

  if (threeKind === 1 && onePair !== 1) {
    const remainArray = tempCardArray.filter(v => v !== tempArray[0]);
    const remainValue = remainArray.sort((a, b) => b - a);
    cardSetValue = [...tempArray, ...remainValue];
    cardSetValue.unshift(TK);
    // console.log('tempArray after pop', tempArray, remainArray, remainValue, cardSetValue);
    return cardSetValue;
  }

  if (fourKind === 1) {
    const remainArray = tempCardArray.filter(v => v !== tempArray[0]);
    const remainValue = remainArray.sort((a, b) => b - a);
    cardSetValue = [...tempArray, ...remainValue];
    cardSetValue.unshift(FK);
    // console.log('tempArray after pop', tempArray, remainArray, remainValue, cardSetValue);
    return cardSetValue;
  }

  if (onePair === 1 && threeKind === 1) {
    tempArray.sort((a, b) => b - a);
    cardSetValue = [FH, ...tempArray];
    return cardSetValue;
  }
  return cardSetValue;
}


function isConsecutive(cardArray) {
 // console.log('is consecutive', cardArray);
  for (let i = Math.min(...cardArray); i <= Math.max(...cardArray); i += 1) {
    if (!cardArray.includes(i)) {
      return false;
    }
  }
  return true;
}


function checkCardSet(p) {
  // console.log(p);
  let tempCardArray = [];
  let cardSet = null;
  let C = 0;
  let H = 0;
  let S = 0;
  let D = 0;
  for (let i = 0; i < p.length; i += 1) {
    let type = null;
    let value = null;
    if (p[i].length === 3) {
      value = cards.indexOf(p[i].substring(0, 2));
      type = p[i].substring(2, 3);
    } else {
      value = cards.indexOf(p[i].substring(0, 1));
      type = p[i].substring(1, 2);
    }

    tempCardArray.push(value);

    if (type === 'C') {
      C += 1;
    }

    if (type === 'D') {
      D += 1;
    }

    if (type === 'H') {
      H += 1;
    }

    if (type === 'S') {
      S += 1;
    }
  }
  tempCardArray.sort((a, b) => b - a);
  // console.log('pairAndKind value', tempCardArray);
  const isSameSuit = ((C === 5) || (H === 5) || (D === 5) || (S === 5));

  const pairAndKind = findPairAndKind(tempCardArray);
  const isConecutiveCard = isConsecutive(tempCardArray);
  if (pairAndKind !== null) {
    cardSet = pairAndKind;
    // console.log('Cardset', cardSet);
  } else if (isSameSuit && !isConecutiveCard) {
    cardSet = [FLS, ...tempCardArray];
  } else if (isConecutiveCard && !isSameSuit) {
    cardSet = [STR, ...tempCardArray];
  } else if (isConecutiveCard && isSameSuit && tempCardArray[0] !== 14) {
    cardSet = [SF, ...tempCardArray];
  } else if (isConecutiveCard && isSameSuit && tempCardArray[0] === 14) {
    cardSet = [RF, ...tempCardArray];
  } else {
    cardSet = [HC, ...tempCardArray];
  }
  // console.log('temp card array', tempCardArray);
  // console.log(D, H, S, C);
  // console.log('final cardset', cardSet);
  return cardSet;
}

function checkWinner(p1, p2) {

  const p1CardSet = checkCardSet(p1);
  const p2CardSet = checkCardSet(p2);
  const itr = Math.min(p1CardSet.length, p2CardSet.length);
  for (let i = 0; i < itr; i += 1) {
    if (p1CardSet[i] > p2CardSet[i]) {
      p1Score += 1;
      break;
    }
    if (p2CardSet[i] > p1CardSet[i]) {
      p2Score += 1;
      break;
    }
  }
  // console.log('int value of cardset', p1CardSet, p2CardSet);
}

function askForWinner(arr) {
  const p1 = arr.slice(0, 5);
  const p2 = arr.slice(5, 10);
  checkWinner(p1, p2);
  // return winner;
}

//  askForWinner([ '4C', '3H', '2C', 'JC', '10C', '9D', '8D', '7S', '6D', '5D' ]);
// // console.log('Number of player1 wins is', p1Score, p2Score);
function main() {
  for (let i = 0; i < ArrayHands.length; i += 1) {
    // console.log(ArrayHands[i]);
    askForWinner(ArrayHands[i]);
  }
  console.log('Number of player1 wins is', p1Score);
}
main();

