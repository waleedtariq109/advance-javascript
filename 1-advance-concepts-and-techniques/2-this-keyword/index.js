const obj = {
  firstName: "Waleed",
  greet(msg) {
    return `${this.firstName} says ${msg}!`;
  },
};

const persons = {
  firstName: "Ajmal",
  lastName: "Ashfaq",
};

const greet = obj.greet;

const msg1 = greet.call(persons, "Hello");
console.log(msg1);

const msg2 = greet.apply(persons, ["World"]);
console.log(msg2);

/**
 * The only difference in call and apply is in .call function we have to
 * pass the args seperately and in apply we pass the args as an array
 */
