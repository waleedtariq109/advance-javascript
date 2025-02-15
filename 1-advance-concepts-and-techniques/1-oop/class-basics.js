"use strict";

class Triangle {
  getArea() {
    return (this.a * this.b) / 2;
  }
  getHyptenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }
}

const triangleOne = new Triangle();

triangleOne.a = 5;
triangleOne.b = 12;

console.log(triangleOne);

const area = triangleOne.getArea();
const hyptenues = triangleOne.getHyptenuse();

console.log(area);
console.log(hyptenues);

const typeOfClass = typeof triangleOne;
const instanceOfClass = triangleOne instanceof Triangle;

console.log(typeOfClass);
console.log(instanceOfClass);
