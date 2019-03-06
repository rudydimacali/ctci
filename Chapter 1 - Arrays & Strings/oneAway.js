/*

One Away: There are three types of edits that can be performed on strings: insert a character,
remove a character, or replace a character. Given two strings, write a function to check if they are
one edit (or zero edits) away.
EXAMPLE
pales. pale -> true
pale. bale -> true
pale. bake -> false

*/

const assert = require('assert');

const oneAway = (strOne, strTwo) => {
  if (strOne === strTwo) return true;
  if (Math.abs(strOne.length - strTwo.length) > 1) return false;
  let edits = 0;
  let strOneCounter = 0;
  let strTwoCounter = 0;
  while (strOneCounter < strOne.length && strTwoCounter < strTwo.length && edits < 2) {
    if (strOne[strOneCounter] === strTwo[strTwoCounter]) {
      strOneCounter += 1;
      strTwoCounter += 1;
    } else if (strOne[strOneCounter + 1] === strTwo[strTwoCounter]) {
      strOneCounter += 1;
      edits += 1;
    } else if (strOne[strOneCounter] === strTwo[strTwoCounter + 1]) {
      strTwoCounter += 1;
      edits += 1;
    } else {
      strOneCounter += 1;
      strTwoCounter += 1;
      edits += 1;
    }
  }
  return (edits < 2);
};

assert.equal(oneAway('pales', 'pale'), true);
assert.equal(oneAway('pale', 'bale'), true);
assert.equal(oneAway('pale', 'bake'), false);
assert.equal(oneAway('palest', 'bake'), false);
assert.equal(oneAway('Test', 'test'), true);
