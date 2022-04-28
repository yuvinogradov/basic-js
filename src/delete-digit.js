const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

/// PASS
function deleteDigit(n) {
  let maxNum = 0
  let maxPos = 0

  for (let i = 0; i < ('' + n).length; i++) {
    let tempArr = ('' + n).split('');
    tempArr.splice(i, 1)

    let tempNum = +tempArr.join('');
    if (tempNum > maxNum) {
      maxNum = tempNum
      maxPos = i
    }
  }

  return +maxNum
}

module.exports = {
  deleteDigit
};
