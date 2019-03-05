/*

Given two strings, write a method to decide if one is a permutation of the
other.

*/

const assert = require('assert');

const checkPermutation = (strOne, strTwo) => {
  if (strOne.length !== strTwo.length) return false;
  const letters = {};
  for (let i = 0; i < strOne.length; i += 1) {
    letters[strOne[i]] = letters[strOne[i]] === undefined ? 1 : letters[strOne[i]] + 1;
  }
  for (let j = 0; j < strTwo.length; j += 1) {
    if (letters[strTwo[j]] === undefined) return false;
    letters[strTwo[j]] -= 1;
    if (letters[strTwo[j]] < 0) return false;
  }
  return true;
};

assert.equal(checkPermutation('asd', 'das'), true);
assert.equal(checkPermutation('jumping', 'ginpumj'), true);
assert.equal(checkPermutation('testing', 'test'), false);
assert.equal(checkPermutation('jump', 'gump'), false);
