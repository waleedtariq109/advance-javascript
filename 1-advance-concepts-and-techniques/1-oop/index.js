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

class ColorTriangle extends Triangle {
  constructor(sideA, sideB, color) {
    super(sideA, sideB);
    this.color = color;
  }
}

class ColorMoodTriangle extends ColorTriangle {
  constructor(sideA, sideB, color, mood) {
    super(sideA, sideB, color);
    this.mood = mood;
  }
}
