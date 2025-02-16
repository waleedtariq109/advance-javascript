"use strict";

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get getFirstName() {
    return this.firstName;
  }

  get getLastName() {
    return this.lastName;
  }

  set setFullName(name) {
    const [firstname, lastname] = name.split(" ");
    this.firstName = firstname;
    this.lastName = lastname;
  }
}

const p1 = new Person("Waleed", "Tariq");

console.log(p1.getFirstName);
console.log(p1.getLastName);

p1.setFullName = "Muhammad Tariq";

console.log(p1.getFirstName);
console.log(p1.getLastName);
