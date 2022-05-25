// 1. Write a function that takes a sentence string and returns a new string that is the
// same sentence, but with each word reversed (backwards). The order of words does not change

function reverseWords(sentence) {
  return sentence
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}

console.log(reverseWords('Alchemy rocks gold'));

// 2. Write a function that takes a sentence string and returns a new string that is the same sentence,
// but with the first letter of each word capitalized, and the rest lowercase

// function titleCase(sentence) {
//   return sentence.toLowerCase().split(' ').map((word) => (word[0].toUpperCase() + word.slice(1)).join(' ')
// }

// console.log(titleCase)

// Oddish or Evenish

function oddishOrEvenish(number) {
  const sum = number
    .toString()
    .split('')
    .map((digit) => Number(digit))
    .reduce((prev, cur) => prev + cur, 0);
  return sum % 2 === 0 ? 'evenish' : 'oddish';
}

console.log(oddishOrEvenish(124));

function fizzBuzz(number) {
  const arr = [];
  for (let n = 1; n <= number; n++) {
    if (n % 15 === 0) {
      arr.push('FizzBuzz');
    } else if (n % 3 === 0) {
      arr.push('Fizz');
    } else if (n % 5 === 0) {
      arr.push('Buzz');
    } else {
      arr.push(n);
    }
  }
  return arr;
}

console.log(fizzBuzz(16));
