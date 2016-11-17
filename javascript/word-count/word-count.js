"use strict";

class Words {

  count(words){
    words = words.trim().split(/\s+/);
    const acc = Object.create(null);
    for (let word of words){
      word = word.toLowerCase();
      if (acc[word]){
        acc[word] += 1;
      } else {
        acc[word] = 1;
      }
    }
    return acc;
  }
}


module.exports = Words;
