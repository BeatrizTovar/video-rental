// "use strict"
// function sayHello() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   console.log(i);
// }
// sayHello();

// const x = 1;
// x = 2;

// const person = {
//   name: "Bea",
//   walk() {
//     console.log(this);
//   },
//   talk() {}
// };

// person.walk();

// person.talk();
// person.name = "";

// const targetMember = "name";
// person[targetMember.value] = "John";

// const walk = person.walk;
// const walk = person.walk.bind(person);
// walk();
// console.log(walk);

// const square = function (number) {
//     return number * number;
// }

// const square = number => number * number;
// console.log(square(5));

// const jobs = [
//   { id: 1, isActive: true },
//   { id: 2, isActive: true },
//   { id: 3, isActive: false }
// ];

// const activeJobs = jobs.filter(function(job) {
//   return job.isActive;
// });

// const activeJobs = jobs.filter(job => job.isActive);
// console.log(activeJobs)

// -- Arrow Functions and this --

// const person = {
//     talk() {
//         console.log("this", this);
//     }
// }

// const person = {
//   talk() {
//     setTimeout(function () {
//       console.log("this", this);
//     }, 1000);
//   }
// };

// const person = {
//   talk() {
//     var self = this;
//     setTimeout( function () {
//       console.log("self", this);
//     }, 1000);
//   }
// };

// const person = {
//   talk() {
//     var self = this;
//     setTimeout(() => {
//       console.log("this", this);
//     }, 1000);
//   }
// };

// person.talk();

const colors = ['red', 'green', 'blue'];
// const items = colors.map( function (color) { //es5
//     return '<li>' + color + '</li>'
// })
// const items = colors.map( color => '<li>' + color + '</li>') //es6 fat arrow

const items = colors.map( color => `<li>${color}</li>`) //Template literals
console.log(items)


