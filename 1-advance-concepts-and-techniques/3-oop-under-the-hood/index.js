class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
}

function Person1(name, age) {
  this.name = name;
  this.age = age;
}

const p1 = new Person("Waleed Tariq", 23);
const p2 = new Person("Amjad", 32);

const p3 = new Person1("Chacha Ghafoor", 26);
const p4 = new Person1("Manzoor", 34);

p3.__proto__.getAge = function () {
  return this.age;
};

p3.__proto__.getName = function () {
  return this.name;
};
