"use strict";

class Isogram {
  constructor (word) {
    this.isogram = word;
  }

  isIsogram() {
    let isogram = this.isogram.toLowerCase().replace(/[-\s]/g,'');
    const acc = Object.create(null);
    for (let letter of isogram) {
      if(acc[letter]) {
        return false;
      } else {
        acc[letter] = letter;
      }
    }
    return true;
  }
}

module.exports = Isogram;
