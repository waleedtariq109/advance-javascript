"use strict";
class Triangle {
  constructor(sideA, sideB) {
    this.a = sideA;
    this.b = sideB;
  }

  getArea() {
    return (this.a * this.b) / 2;
  }
  getHyptenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }

  describe() {
    return `I am a triangle with a area of ${this.getArea()}.`;
  }
}

class ShyTriangle extends Triangle {
  describe() {
    return "(runs and hide)";
  }
}

const tri1 = new Triangle(2, 8);
const tri2 = new ShyTriangle(3, 10);

console.log(tri1);
console.log(tri2);

console.log(tri1.describe());
console.log(tri2.describe());
