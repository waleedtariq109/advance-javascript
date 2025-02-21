// "use strict";

function valueOfThis() {
  /**
   * On strict mode this points to undefined
   * Without strict mode this points to global window object
   */
  console.log(this);
}

const obj = {
  name: "Waleed Tariq",
  age: 23,
  valueOfThis,
};

valueOfThis();
obj.valueOfThis();
