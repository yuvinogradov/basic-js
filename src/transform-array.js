const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
/// PASS
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }

  const temp = [];

  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];

    switch (val) {
      case "--discard-prev":
        if (i > 0 && !temp[i - 1].changed) {
          temp[i - 1] = { value: undefined, changed: true };
        }
        temp[i] = { value: undefined, changed: false };
        break;
      case "--discard-next":
        if (i < arr.length - 1)
          temp[i + 1] = { value: undefined, changed: true };
        temp[i] = { value: undefined, changed: true };
        break;
      case "--double-next":
        if (i < arr.length - 1) temp[i] = { value: arr[i + 1], changed: false };
        break;
      case "--double-prev":
        if (i > 0 && temp[i - 1].changed !== true)
          temp[i] = { value: arr[i - 1], changed: true };
        // temp[i] = { value: temp[i-1].value, changed: false };
        break;
      default:
        if (!temp[i]) temp[i] = { value: arr[i], changed: false };
        break;
    }
    console.log(...temp);
  }

  return temp.filter((a) => a.value !== undefined).map((b) => b.value);
}

module.exports = {
  transform
};
