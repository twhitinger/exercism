'use strict';

class Bob {

  hey(input){
   if (input === input.toUpperCase() && input.search(/[A-z]/) > -1) {
      return "Whoa, chill out!";
    } else if ((input[input.length - 1] === "?")) {
      return "Sure.";
    } else if (input.replace(/\s*/, '').length === 0) {
      return "Fine. Be that way!";
    } else {
      return "Whatever.";
    }
  }
}





module.exports = Bob;
