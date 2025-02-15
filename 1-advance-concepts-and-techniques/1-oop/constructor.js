"use strict";

class Triangle {
  constructor(sideA, sideB) {
    if (!Number.isFinite(sideA) || sideA <= 0)
      throw new Error(`Invalid a: ${sideA}`);

    if (!Number.isFinite(sideB) || sideB <= 0)
      throw new Error(`Invalid a: ${sideB}`);

    this.a = sideA;
    this.b = sideB;
  }

  getArea() {
    return (this.a * this.b) / 2;
  }
  getHyptenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }
}

const triangleOne = new Triangle(10, 14);

console.log(triangleOne.a);
console.log(triangleOne.b);

const area = triangleOne.getArea();
const hyptenuse = triangleOne.getHyptenuse();

console.log(area);
console.log(hyptenuse);
