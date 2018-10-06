const fs = require('fs');

const cipherArray = fs.readFileSync('cipher.txt', 'utf8').split(',').map(str => parseInt(str, 10));
// console.log(cipherArray);
const alphaSmall = 'abcdefghijklmnopqrstuwxyz';

function main() {
  for (let i = 0; i < alphaSmall.length; i += 1) {
    for (let j = 0; j < alphaSmall.length; j += 1) {
      for (let k = 0; k < alphaSmall.length; k += 1) {
        const combo = [alphaSmall[i], alphaSmall[j], alphaSmall[k]];
        let idx = 0;
        const decrypted = [];
        for (let c = 0; c < cipherArray.length; c += 1) {
          decrypted[c] = cipherArray[c] ^ (combo[idx++ % 3].charCodeAt(0));
        }
        const decryptedMsg = String.fromCharCode.apply(null, decrypted);
        if (decryptedMsg.indexOf('that') !== -1 && decryptedMsg.indexOf('the') !== -1) {
          const sum = decrypted.reduce((prev, next) => prev + next);
          console.log(decryptedMsg, 'passKey is', combo, 'and result is', sum);
        }
      }
    }
  }
}

console.log(main());
