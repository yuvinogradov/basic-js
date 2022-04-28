const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */

/// PASS
function renameFiles(names) {
  const countOriginalNames = {};
  const outputNames = [];

  names.forEach((name) => {
    countOriginalNames[name] >= 0
      ? (countOriginalNames[name] = countOriginalNames[name] + 1)
      : (countOriginalNames[name] = outputNames.includes(name) ? 1 : 0);
    if (outputNames.includes(name)) {
      const newName = name + "(" + countOriginalNames[name] + ")";
      outputNames.push(newName);
    } else {
      outputNames.push(name);
    }
  });
  console.log("countOriginalNames: ", countOriginalNames);
  return outputNames;
}


module.exports = {
  renameFiles
};
