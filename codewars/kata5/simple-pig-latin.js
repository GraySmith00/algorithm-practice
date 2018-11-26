// https://www.codewars.com/kata/simple-pig-latin/train/javascript

// function pigIt(str){
//   return str.split(' ').map(wrd => {
//     if (wrd.match(/[\w]/g)) {
//       return wrd.slice(1) + wrd[0] + 'ay'
//     } else {
//       return wrd
//     }
//   }).join(' ')
// }

function pigIt(str) {
  return str.replace(/\w+/g, w => w.slice(0) + w[0] + 'ay');
}

pigIt('Quis custodiet ipsos custodes ?');
