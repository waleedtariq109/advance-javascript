"use strict";

class Circle {
  // Private field
  #radius;
  constructor(radius) {
    this.#radius = radius;
  }

  get getRadius() {
    return this.#radius;
  }
}

const c1 = new Circle(3);

// c1.#radius; // Error

console.log(c1.getRadius);
