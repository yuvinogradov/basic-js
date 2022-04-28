const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

/// PASS
const chainMaker = {
  arr: [],
  // constructor() {
  //   this.arr = []
  // },

  getLength() {
    return this.arr.length;
  },

  addLink(value) {
    this.arr.push('' + value);
    // console.log('after addLink: ', this.arr)
    return this;
  },

  removeLink(position) {
    //const newArr = [...arr]
    if (
      !Number.isInteger(position) ||
      position < 1 ||
      position > this.arr.length
    ) {
      this.arr = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.arr.splice(position - 1, 1);
    // console.log('after removeLink: ', this.arr)
    return this;
  },

  reverseChain() {
    // console.log('before reverseChain: ', this.arr)
    this.arr.reverse();
    // console.log('after reverseChain: ', this.arr)
    return this;
  },

  finishChain() {
    const finishedArr = [...this.arr];
    this.arr = [];
    if (finishedArr.length === 1) return '( ' + finishedArr[0] + ' )'

    // console.log('finished array: ', finishedArr)
    return "( " + finishedArr.shift() + " )~~( " + finishedArr.join(" )~~( ") + " )";
  }
};


module.exports = {
  chainMaker
};
