const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(reverse) {
    this.reverse = reverse;
    // console.log((reverse ? "reverse" : "direct") + "Machine created");
  }

  isUpperCase(letter) {
    var l = letter.charCodeAt();
    if (l >= 65 && l <= 90) {
      return true;
    } else {
      return false;
    }
  }

  isLowerCase(letter) {
    var l = letter.charCodeAt();
    if (l >= 97 && l <= 122) {
      return true;
    } else {
      return false;
    }
  }

  vizhener(plainMsg, key, mode) {
    mode = mode === "decode" ? -1 : 1;

    var cypher = "";
    for (var i = 0, j = 0; i < plainMsg.length; i++) {
      var currentLetter = plainMsg[i];

      if (this.isUpperCase(currentLetter)) {
        var upperLetter =
          (currentLetter.charCodeAt() -
            65 +
            mode * (key[j % key.length].toUpperCase().charCodeAt() - 65) +
            26) %
          26;
        cypher += String.fromCharCode(upperLetter + 65);
        j++;
      } else if (this.isLowerCase(currentLetter)) {
        var lowerLetter =
          (currentLetter.charCodeAt() -
            97 +
            mode * (key[j % key.length].toLowerCase().charCodeAt() - 97)) %
          26;
        cypher += String.fromCharCode(lowerLetter + 97);
        j++;
      } else {
        cypher += currentLetter;
      }
    }
    // console.log("reverse: ", this.reverse);
    return this.reverse === false
      ? cypher.split("").reverse().join("")
      : cypher;
  }

  encrypt(text, key) {
    if (!text || !key) throw new Error('Incorrect arguments!')
    return this.vizhener(text.toUpperCase(), key.toUpperCase());
  }
  decrypt(encoded, key) {
    if (!encoded || !key) throw new Error('Incorrect arguments!')
    return this.vizhener(encoded.toUpperCase(), key.toUpperCase(), "decode");
  }
}

module.exports = {
  VigenereCipheringMachine
};
