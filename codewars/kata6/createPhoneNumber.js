// https://www.codewars.com/kata/create-phone-number/train/javascript

// function createPhoneNumber(numbers){
//   const str = numbers.join('');
//   return `(${str.slice(0, 3)}) ${str.slice(3, 6)} - ${str.slice(6)}`
// }

function createPhoneNumber(numbers) {
  return numbers.reduce((p, c) => p.replace('x', c), '(xxx) xxx-xxxx');
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // "(123) 456-7890";
