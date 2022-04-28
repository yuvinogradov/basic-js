const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
/// PASS
function getMatrixElementsSum(mat) {
  const resArr = [];
  for (let i = 0; i < mat[0].length; i++) {
    let columnSum = 0;
    for (let j = 0; j < mat.length; j++) {
      if (mat[j][i] <= 0) {
        break;
      }
      columnSum += mat[j][i];
    }
    resArr.push(columnSum);
  }
  return resArr.reduce((acc, val) => acc + val, 0);
}

module.exports = {
  getMatrixElementsSum
};
