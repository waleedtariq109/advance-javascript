const person = {
  name: "Waleed Tariq",
  city: "Multan",
  greet() {
    console.log("this: ", this);

    console.log(`Hi, this is ${this.name} from ${this.city}`);
  },
};

const btn = document.querySelector(".btn");
btn.addEventListener("click", person.greet.bind(person));
