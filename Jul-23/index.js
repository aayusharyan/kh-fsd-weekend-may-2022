// const button = document.getElementById("btn1");
// button.addEventListener('click', function() {
//   // alert("Button clicked");
//   console.log("Button clicked");
// });

// button.addEventListener('click', () => {
//   console.log("Button clicked using arrow function");
// })


//Regular function
// function() {
//   console.log("Button clicked");
// }

//Arrow function
// () => {
//   console.log("Button clicked");
// }

// btn1.add

//Arrow + Anonymous
// const sum = (a, b) => {
//   const result = a + b;
//   return result;
// }
// console.log(sum(2, 10));

// const add10 = a => {
//   const result = a + 10;
//   return result;
// }

// console.log(add10(25));

// const sayHello = _ => {
//   console.log("Hello World");
// }

// sayHello();

//Task A:
//Write an arrow function which prints hello world in a span when the button is clicked.

// Math.random() [0, 1) * (10 + 1)
//               MAth.floor([0, 10)) -> 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
//               Math.ceil([0, 10)) -> 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 

// const fn = () => {
//   return "Hello World";
// }
// console.log(fn());

//Regular Arrow function that is called immediately.
const fn = () => {
  console.log("Hello World");
}
fn();

//IIFE
(() => {
  console.log("Hello World");
})();

(function() {
  console.log("Hello from a regular IIFE");
})();



console.log((() => {
  return "Hello World";
})());