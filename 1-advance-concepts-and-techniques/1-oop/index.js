"use strict";

class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  get diameter() {
    return this._radius * 2;
  }
}

/**
 * We use the getter as a property not as a method by callin it
 */

const circle = new Circle(3);

console.log(circle.diameter);
