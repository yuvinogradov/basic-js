const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
/// PASS

function countTrues(matrixX, i, j) {
  const count =
    0 +
    (i < matrixX.length - 1 ? +matrixX[i + 1][j] : 0) +
    (i < matrixX.length - 1 && j < matrixX[0].length - 1
      ? +matrixX[i + 1][j + 1]
      : 0) +
    (j < matrixX[0].length - 1 ? +matrixX[i][j + 1] : 0) +
    (i > 0 && j < matrixX[0].length - 1 ? +matrixX[i - 1][j + 1] : 0) +
    (i > 0 ? +matrixX[i - 1][j] : 0) +
    (i > 0 && j > 0 ? +matrixX[i - 1][j - 1] : 0) +
    (j > 0 ? +matrixX[i][j - 1] : 0) +
    (i < matrixX.length - 1 && j > 0 ? +matrixX[i + 1][j - 1] : 0);
  // console.log(matrixX[i][j]);
    // console.log((i < matrixX.length-1) && (j < matrixX[0].length-1) ? +matrixX[i+1][j+1] : 0 )
  // console.log(count);
  return count;
}

function minesweeper(mat) {
  const res = [];
  for (let i = 0; i < mat.length; i++) {
    const subRes = [];
    for (let j = 0; j < mat[0].length; j++) {
      subRes.push(countTrues(mat, i, j));
    }
    res.push([...subRes]);
  }
  return res;
}

module.exports = {
  minesweeper
};
