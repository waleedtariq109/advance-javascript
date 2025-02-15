"use strict";

class Cat {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  static species = "Felis catus";
}

/**
 * Static properties are tied to the class not the class instance
 */

console.log(Cat.species);
