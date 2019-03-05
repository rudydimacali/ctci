/*

Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome.
A palindrome is a word or phrase that is the same forwards and backwards. A permutation
is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
EXAMPLE

Input: Tact Coa
Output: True (permutations: "taco cat". "atco cta". etc.)

*/

const assert = require('assert');

const isPalindromePermutation = (string) => {
  const letters = {};
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] !== ' ') {
      letters[string[i].toLowerCase()] = letters[string[i].toLowerCase()] === undefined ? 1 : letters[string[i].toLowerCase()] + 1;
    }
  }
  let returnVal = true;
  Object.keys(letters).forEach((letter) => {
    if (letters[letter] % 2 === 1 && letters['oddCount']) returnVal = false;
    if (letters[letter] % 2 === 1) letters['oddCount'] = true;
  });
  return returnVal;
};

assert.equal(isPalindromePermutation('Tact Coa'), true);
assert.equal(isPalindromePermutation('Taco '), false);
