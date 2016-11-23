'use strict';
const names = {};

class Robot {
  constructor() {
    this.reset();
  }

  getRandomChar() {
    return String.fromCharCode(65 + Math.floor(Math.random() * 26));
  }

  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getName() {
    const name = `${this.getRandomChar()}${this.getRandomChar()}${this.getRandomNumber(100, 999)}`;
    return names[name] === undefined ? name : this.getName();
  }

  reset() {
    this.name = this.getName();
    names[this.name] = true;
  }
}

module.exports = Robot;
