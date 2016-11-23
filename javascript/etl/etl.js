'use strict';

class ETL {
  constructor() {
    this.new = {};
  }

  transform(old) {
    let arr1;
    let value;
    for (var prop in old) {
      arr1 = old[prop];
      value = parseInt(prop);
      for (let letter of arr1 ){
        this.new[letter[0].toLowerCase()] = value;
      }
    }
    return this.new;
  }
}

module.exports = ETL;
