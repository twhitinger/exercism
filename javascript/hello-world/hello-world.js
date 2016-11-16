"use strict";


class HelloWorld {
  constructor() {
  }

  hello(name) {
    return !name ? `Hello, World!` : `Hello, ${name}!`;
  };
}



module.exports = HelloWorld;
