'use strict';

class BeerSong {
  constructor() {
  }
  verse(num){
    if (num-1 > 1) {
      return `${num} bottles of beer on the wall, ${num} bottles of beer.\nTake one down and pass it around, ${num-1} bottles of beer on the wall.\n`;
    } else if (num === 1) {
      return '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n';
    } else if (num < 1) {
      return 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
    } else  {
      return `${num} bottles of beer on the wall, ${num} bottles of beer.\nTake one down and pass it around, ${num-1} bottle of beer on the wall.\n`;
    }
  }

  sing(num, times) {
    let limit = times || 0;
    let output = "";
    for (let i = num; i > limit; i--) {
      output += `${this.verse(i)}\n`;
    }
    return output += this.verse(limit);
  }
}


module.exports = BeerSong;
