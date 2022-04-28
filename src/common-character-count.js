const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

/// PASS
function getCommonCharacterCount(s1, s2) {
  const count1 = {};
  const count2 = {};
  const arr1 = s1.split("");
  const arr2 = s2.split("");

  arr1.forEach((i) => (count1[i] = count1[i] + 1 || 1));
  arr2.forEach((i) => (count2[i] = count2[i] + 1 || 1));

  //console.log('count1', count1)
  //console.log('count2', count2)

  const res = {};

  Object.keys(count1).forEach((a) => console.log(a, count1[a]));
  Object.keys(count1).forEach((a) => {
    if (count2[a]) {
      if (count1[a] >= count2[a]) {
        res[a] = count2[a];
      } else {
        res[a] = count1[a];
      }
    }
  });

  //console.log( Object.values(res))

  return Object.values(res).reduce((acc, val) => (acc += val), 0);
}


module.exports = {
  getCommonCharacterCount
};
