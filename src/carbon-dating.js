const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
//// PASS
function dateSample(sampleActivity) {
  if (!(typeof sampleActivity === 'string' || sampleActivity instanceof String)) return false;
  if (sampleActivity.trim() === "") return false;

  const s = Number(sampleActivity.trim());


  if (s <= 0 || s > MODERN_ACTIVITY) return false

  return Number.isNaN(s)
    ? false
    : Math.ceil((Math.log(MODERN_ACTIVITY / s) * HALF_LIFE_PERIOD) / Math.log(2));

  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  dateSample
};
