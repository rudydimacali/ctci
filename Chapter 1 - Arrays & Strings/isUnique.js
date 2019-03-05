/*

Implement an algorithm to determine if a string has all unique characters.
What if you cannot use additional data structures ?

*/

const assert = require('assert');

const isUnique = (string) => {
  const letters = {};
  for (let i = 0; i < string.length; i += 1) {
    if (letters[string[i]] !== undefined) return false;
    letters[string[i]] = 1;
  }
  return true;
};

assert.equal(isUnique('uniq'), true);
assert.equal(isUnique('test'), false);
