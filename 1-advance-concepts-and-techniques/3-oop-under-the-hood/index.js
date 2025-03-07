class Person {
  name;
  age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getName() {
    return this.name;
  }
}

const p1 = new Person("Waleed Tariq", 23);

/**
 *
 * What new keyword does?
 *
 * The new keyword does 4 things.
 *
 * 1: It creates an empty object
 * 2: Sets the `this` keyword to that empty object
 * 3: Return the object - return `this`
 * 4: Creates a link to the object prototype
 *
 */
