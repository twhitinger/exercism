'use strict';

class School {
  constructor() {
    this.schoolRoster = Object.create(null);
  }

  roster() {
    return this.schoolRoster;
  }
}

module.exports = School;
