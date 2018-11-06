// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"

// function accum(s) {
// 	const strArray = s.toLowerCase().split('');
//   const newArr = strArray.map((item, i) => {
//     let str = item.repeat(i+1);
//     return str.charAt(0).toUpperCase() + str.slice(1);
//   })
//   return newArr.join('-')
// }

function accum(s) {
  return s
    .split('')
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join('-');
}

accum('RqaEzty');
