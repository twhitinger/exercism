'use strict';

class Hamming {
  constructor() {

  }

  compute(input_1 , input_2){

    if (input_1.length !== input_2.length) {
      throw new Error('DNA strands must be of equal length.');
    }
    
    let arr1 = input_1.split('');
    let arr2 = input_2.split('');
    return arr1.reduce((acc, current, index) => {
      if (current !== arr2[index]) {
        acc += 1;
      }
      return acc;
    }, 0);
  }
}



module.exports = Hamming;
