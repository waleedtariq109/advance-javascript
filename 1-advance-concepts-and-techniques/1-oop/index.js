"use strict";

class Cat {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  static staticMethod() {
    console.log(this);
  }

  static species = "Felis catus";
}
