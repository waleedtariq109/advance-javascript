const obj = {
  firstName: "Waleed",
  greet(msg) {
    return `${this.firstName} says ${msg}!`;
  },
};

const person1 = {
  firstName: "Ajmal",
};

const person2 = {
  firstName: "Junaid",
};

const person1Func = obj.greet.bind(person1);
console.log(person1Func("Hello"));

const person2Func = obj.greet.bind(person2);
console.log(person2Func("World"));

/**
 * What bind method is to permanently bind the object with the method which we called .bind on.
 */
