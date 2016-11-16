'use strict';

class Hamming {
  constructor() {

  }

  compute(input_1 , input_2){
    let arr1 = input_1.split('');
    let arr2 = input_2.split('');

    return arr1.filter(i => arr2.indexOf(i) < 0).
    concat(arr2.filter(i => arr1.indexOf(i)< 0)).length;
  }
}
