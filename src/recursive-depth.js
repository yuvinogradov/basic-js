const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
/// PASS
class DepthCalculator {
  calculateDepth(arr) {
    let maxDepth = 0;
    let depth = 0;

    arr.forEach((a) => {
      //       console.log(a);
      if (Array.isArray(a)) {
        depth = this.calculateDepth(a);
        if (depth > maxDepth) maxDepth = depth
        console.log(a, " - depth = ", depth);
      }
    });
    return maxDepth + 1;
  }

}


module.exports = {
  DepthCalculator
};
