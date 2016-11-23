'use strict';

class School {
  constructor() {
    this.schoolRoster = Object.create(null);
  }

  roster() {
    return this.schoolRoster;
  }

  add(name, grade) {
    if (this.schoolRoster[grade]) {
      this.schoolRoster[grade].push(name);
      this.schoolRoster[grade] = this.schoolRoster[grade].sort();
    } else {
      this.schoolRoster[grade] = [name];
    }
  }

  grade(grade) {
    if (this.schoolRoster[grade]) {
      return this.schoolRoster[grade];
    } else {
      return [];
    }
  }
}

module.exports = School;
