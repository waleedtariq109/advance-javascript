"use strict";

class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  get radius() {
    return this._radius;
  }

  get diameter() {
    return this._radius * 2;
  }

  set radius(value) {
    if (value < 0) {
      throw new Error("Radius cannot be negative!");
    } else {
      this._radius = value;
    }
  }
}

/**
 * We use the setters as a property not as a method by callin it
 */

const circle = new Circle(3);

console.log(circle.radius, "Radius");
console.log(circle.diameter, "Diameter");

circle.radius = 4;

console.log(circle.radius, "Radius");
console.log(circle.diameter, "Diameter");

// circle.radius = -8; // Uncaught Error: Radius cannot be negative!
