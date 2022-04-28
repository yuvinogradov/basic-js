const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
//// PASS
function countCats(matrix) {
  return matrix.reduce(
    (acc, val) =>
      (acc += val.reduce((acc2, val2) => (acc2 += val2 === "^^" ? 1 : 0), 0)),
    0
  );
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  countCats
};
