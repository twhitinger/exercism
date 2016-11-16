'use strict';

class DnaTranscriber {
  constructor() {

  }
  toRna(letters) {
    const table  = { G: "C", C: "G", T: "A", A: "U" };
    let acc = "";
    for (let i = 0; i < letters.length; i++) {
        acc += table[letters[i]];
    }
    return acc;
  }
}


module.exports = DnaTranscriber;
