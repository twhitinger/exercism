'use strict';

class Hamming {
  constructor() {

  }

  compute(input_1 , input_2){
    if (input_1.length !== input_2.length) {
      throw new Error('DNA strands must be of equal length.');
    }

    let diff = 0;
    for (let i = 0; i < input_1.length; i++) {
      if (input_1[i] != input_2[i]) {
        diff += 1;
      }
    }
    return diff;
  }
}





module.exports = Hamming;
