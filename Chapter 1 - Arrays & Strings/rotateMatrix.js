/*

Given an image represented by an NxN matrix, where each pixel in the image is 4
bytes, write a method to rotate the image by 90 degrees. (an you do this in place?

[1,2,3]         [7,4,1]
[4,5,6]   =>    [8,5,2]
[7,8,9]         [9,6,3]

[10,11,12,13]         [22,18,14,10]
[14,15,16,17]   =>    [23,19,15,11]
[18,19,20,21]         [24,20,16,12]
[22,23,24,25]         [25,21,17,13]

*/

const assert = require('assert');

const rotateMatrix = (matrix) => {
  const swap = (y, x) => {
    const temp = matrix[y][x];
    matrix[y][x] = matrix[matrix.length - 1 - x][y];
    matrix[matrix.length - 1 - x][y] = matrix[matrix.length - 1 - y][matrix.length - 1 - x];
    matrix[matrix.length - 1 - y][matrix.length - 1 - x] = matrix[x][matrix.length - 1 - y];
    matrix[x][matrix.length - 1 - y] = temp;
  };
  for (let i = 0; i <= Math.floor(matrix.length / 2); i += 1) {
    for (let j = i; j < matrix.length - 1 - i; j += 1) {
      swap(i, j);
    }
  }
  return matrix;
};

assert.deepEqual(rotateMatrix([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]]), [
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3]]);
assert.deepEqual(rotateMatrix([
  [10, 11, 12, 13],
  [14, 15, 16, 17],
  [18, 19, 20, 21],
  [22, 23, 24, 25],
]), [
    [22, 18, 14, 10],
    [23, 19, 15, 11],
    [24, 20, 16, 12],
    [25, 21, 17, 13]]);
