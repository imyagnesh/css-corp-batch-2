// Objects

// OOPS

// -> Abstact

// -> Polymorphism

// -> Inheritance

// -> Encapsulation

// Bind Related Information Together

const firstName = "Yagnesh";

const lastName = "Modh";

const age = 30;

// const fullName = `${firstName} ${lastName}`

const user = {
  firstName,
  lastName,
  age,
  degree: ["b.tech", "diploma"],
  fullName() {
    console.log(this);
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(user.firstName);
console.log(user.lastName);
console.log(user.age);
console.log(user.fullName());
