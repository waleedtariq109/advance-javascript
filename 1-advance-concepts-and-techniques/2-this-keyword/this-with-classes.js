class Person {
  constructor(firstName) {
    this.firstName = firstName;
  }

  someMethod(desig = "software engineer") {
    console.log(this);
    return `Hi, I am ${this.firstName} and I am a ${desig}`;
  }
}

const p1 = new Person("Waleed");

console.log(p1);

// POJO
const obj = {
  firstName: "Waleed",
  lastName: "Tariq",
  getFullName() {
    console.log(this);
    return `${this.firstName} ${this.lastName}`;
  },
};

obj.getFullName(); // -> 'this' refers to 'obj'

const func = obj.getFullName; // -> Pass the reference to 'func' so the this keyword refers to window

func();

const p2 = new Person("Tariq");

p2.someMethod(); // -> 'this' refers to instance of Person class

const func2 = p2.someMethod; // -> 'this' refers to undefined

/**
 * If we assign a class method reference to a variable which is in the global scope
 * then that function will point to undefined
 *
 * If we assign a POJO/Object method reference to a variable which is in the global scope
 * then that function will point to window object
 */
