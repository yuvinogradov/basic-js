const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */

/// PASS
function sortByHeight(arr) {
  const temp = arr.filter((a) => a !== -1).sort((a, b) => a - b);
  const res = [];

  arr.forEach((a) => res.push(a === -1 ? -1 : temp.shift()));

  return res;
}

module.exports = {
  sortByHeight
};
