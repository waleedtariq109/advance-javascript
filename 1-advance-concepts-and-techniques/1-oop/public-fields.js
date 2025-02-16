"use strict";

class Cat {
  static numOfCats = 0;
  // Public fields
  name = "";
  breed = "";
  hasTail = true;

  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    ++Cat.numOfCats;
  }
}

/**
 * We can access the public fields within and outside of a class
 */

const cat = new Cat("Amjad", "Lahori");

console.log(cat.name);
