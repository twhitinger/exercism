'use strict';

class Gigasecond {
  constructor(startingDate){
    this.startingDate = startingDate;
  }


  date() {
     const startTime = this.startingDate.getTime();
     const endTime = startTime + 1000000000 * 1000;
     return new Date(endTime);
  }
}



module.exports = Gigasecond;
