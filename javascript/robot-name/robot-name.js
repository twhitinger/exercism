'use strict';
let taken = {};

class Robot {
  constructor() {
    this.name = this.generateRandomName();
  }

  reset() {
    this.name = this.generateRandomName();
  }

  generateRandomName() {
    let checkName = `${this.genLetters()}${this.genNumbers()}`;
    if (taken[checkName]) {
      this.generateRandomName();
    } else {
      taken[checkName] = checkName;
      return checkName;
    }
  }

  genLetters() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const string_length = 2;
    let randomstring = '';
    for (let i=0; i < string_length; i++) {
      let rnum = chars.charAt(Math.floor(Math.random() * chars.length));
      randomstring += rnum;
    }
    return randomstring;
  }

  genNumbers() {
    const chars = "0123456789";
    const string_length = 3;
    let randomstring = '';
    for (let i=0; i < string_length; i++) {
      let rnum = chars.charAt(Math.floor(Math.random() * chars.length));
      randomstring += rnum;
    }
    return randomstring;
  }
}


module.exports = Robot;
