const grandParent = {
  key: "grand-parent",
  sayHi() {
    return "HII!!!!";
  },
};

const parent = {
  key: "parent",
  sayHello() {
    return "Hello!!";
  },
  __proto__: grandParent,
};

const child = {
  key: "child",
  sayFoo() {
    return "FOO!!!";
  },
  __proto__: parent,
};

console.log(child.sayHi());
