const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

/// PASS
function repeater(
  str,
  {
    repeatTimes = 0,
    separator = "+",
    addition = "",
    additionRepeatTimes = 0,
    additionSeparator = "|"
  } = {}
) {
  str = "" + str;
  if (+repeatTimes <= 0) repeatTimes = 1;
  if (+additionRepeatTimes <= 0) additionRepeatTimes = 1;
  const bigStr =
    str +
    addition +
    Array(+additionRepeatTimes - 1)
      .fill(additionSeparator + addition)
      .join("");
  return (
    Array(+repeatTimes - 1)
      .fill(bigStr + separator)
      .join("") + bigStr
  );
}

module.exports = {
  repeater
};
