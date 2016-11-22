'use strict';

class Anagram {
  constructor(input) {
    this.original = input.toLowerCase();
    this.count = input.length;
    this.input = this.table(input);

  }

  table(input) {
    let word = input.toLowerCase();
    let acc = Object.create(null);
    for (let letter of word){
      if ( acc[letter] ){
        acc[letter]++;
      } else {
        acc[letter] = 1;
      }
    }
    return acc;
  }

  matches(arr, ...strings) {
    if(strings.length > 0){
      strings.push(arr);
      arr = strings;
    }
    let matches = [];
    for(let word of arr) {
      if(word.toLowerCase() === this.original) {
        return [];
      }
      let acc = this.table(word);
      let counter = 0;

      for(let letter of word) {
        if (this.input[letter] !== acc[letter] ) {
          counter = 0;
        } else if (acc[letter] === this.input[letter]) {
          counter++;
        }
      }
      if (counter === this.count){
        matches.push(word);
      }
    }
    return matches;
  }
}

module.exports = Anagram;
