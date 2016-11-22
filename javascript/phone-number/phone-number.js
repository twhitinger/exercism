'use strict';


class PhoneNumber {
  constructor(seq) {
    this.seq = seq;
  }

  areaCode() {
    return this.seq.slice(0,3);
  }

  toString() {
    return `(${this.areaCode()}) ${this.seq.slice(3,6)}-${this.seq.slice(6,10)}`;
  }

  number() {
    let number = this.seq.replace(/\D/g,'');
    if (number.length === 10 ){
      return number;
    } else if (number.length === 11 && number[0] === '1') {
      return number.slice(1,11);
    } else {
      return '0000000000';
    }
  }
}


module.exports = PhoneNumber;
