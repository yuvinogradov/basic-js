const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
//// PASS
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  if (members.length === 0) return false;

  return members
    .filter((a) => typeof a === "string" || a instanceof String)
    .map((a) => a.trim()[0].toUpperCase())
    .sort()
    .join("");

  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  createDreamTeam
};
