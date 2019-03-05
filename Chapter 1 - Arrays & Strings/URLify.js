/*

URLify: Write a method to replace all spaces in a string with '%20: You may assume that the string
has sufficient space at the end to hold the additional characters, and that you are given the "true"
length of the string. (Note: If implementing in Java, please use a character array so that you can
perform this operation in place.)
EXAMPLE
Input: "Mr John Smith"
Output: "Mr%20John%20Smith"

*/

const assert = require('assert');

const URLify = (string) => {
  let url = '';
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === ' ') {
      url += '%20';
    } else {
      url += string[i];
    }
  }
  return url;
};

assert.equal(URLify('Mr John Smith'), 'Mr%20John%20Smith');
