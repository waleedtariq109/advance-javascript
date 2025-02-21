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

console.log(p1.someMethod());

const func = p1.someMethod;

console.log(func.call(p1, "Senior Software Engineer"));
