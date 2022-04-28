const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

/// PASS
function encodeLine(str) {
  if (str === '') return ''

  let temp = ""
  let res = ""

  for (let i = 0; i < str.length; i++) {
    if (temp.length === 0) temp += str[i]
    else if (temp[temp.length - 1] === str[i]) temp += str[i]
    else {
      if (temp.length > 1) res += temp.length + temp[0]
      else res += temp[0]
      temp = str[i]
    }
  }

  if (temp.length > 1) res += temp.length + temp[0]
  else res += temp[0]

  return res
}

module.exports = {
  encodeLine
};
