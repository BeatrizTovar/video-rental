// function sayHello() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   console.log(i);
// }

// sayHello();

// const x = 1;
// x = 2;

const person = {
  name: "Bea",
  walk() {
    console.log(this);
  },
  talk() {}
};

// person.talk();
// person.name = "";

// const targetMember = "name";
// person[targetMember.value] = "John";

const walk = person.walk.bind(person);
walk();
// console.log(walk);
