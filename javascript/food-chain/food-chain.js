'use strict';

class FoodChain {
  constructor() {
    this.acc = {
      1: ['fly.', "I don't know why she swallowed the fly. Perhaps she'll die." ],
      2: ['spider', "It wriggled and jiggled and tickled inside her." ],
      3: ['bird', "How absurd to swallow a bird!"]
    };

  }

  verse(num) {
    const acc = this.acc;
    let base = "I know an old lady who swallowed a";
    if (num === 1) {
      return `${base} ${acc[num][0]}\n${acc[num][1]}\n`;
    } else {
      let reason = "";
      for (let i = num; i > 1; i--){
        if(i === 3){
          reason += `She swallowed the ${acc[i][0]} to catch the ${acc[i-1][0]} ${acc[i-1][1].replace("It", "that")}\n`;
        } else {
          reason += `She swallowed the ${acc[i][0]} to catch the ${acc[i-1][0]}\n`;
        }
        // response += `${base} ${acc[num][0]}.\n${acc[num][1]}\n${reason}${acc[num-1][1]}\n`;
      }

      return `${base} ${acc[num][0]}.\n${acc[num][1]}\n${reason}${acc[1][1]}\n`;;
    }
  }
}

module.exports = FoodChain;
