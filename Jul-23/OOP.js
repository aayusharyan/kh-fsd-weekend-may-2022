// class HelloWorld {
//   constructor() {
//     console.log("This will be called when an object is created");
//   }

//   consoleHello() {
//     console.log("Hello World");
//   }

//   alertHello() {
//     alert("Hello World");
//   }
// }

// const hello_obj = new HelloWorld();
// console.log(hello_obj);


// hello_obj.consoleHello();
// hello_obj.alertHello();

// const another_hello = new HelloWorld();
// another_hello.consoleHello();
// consoleHello();

// Title, Author, Publish year, etc, etc.
// class Book {
//   constructor(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//   }

//   getInfo() {
//     console.log("Book - " + this.title);
//   }

//   getYear() {
//     console.log(`The book ${this.title} was published in the year ${this.year}`);
//   }
// }

// const book1 = new Book("Intro to JS", "Aayush", 2025);
// console.log(book1);
// book1.getInfo();
// book1.getYear();


// Task B
// Create a class called Human, in the constructor, take the name.
// create a method in that class call it sayHello. It will console.log()
// Hi, I am <name>.


// class Human {
//   constructor(person_name, birth_year) {
//     this.my_name = person_name;
//     this.year_of_birth = birth_year;
//   }

//   sayHello() {
//     const age = 2022 - this.year_of_birth;
//     console.log(`Hi, I am ${this.my_name} and I am ${age} years old`);
//   }

//   consoleMyself() {
//     console.log(this);
//   }
// }

// const me = new Human("Aayush", 1990);
// me.sayHello();
// console.log(me);
// me.consoleMyself();

// const pawan = new Human("Pawan");
// pawan.sayHello();




// const obj = {
//   k: "Value",
//   k2: "Value 2",
//   fn: function() {
//     console.log(this);
//   }
// }

// obj.fn();



// const arr = [1, 2, 3, 4];
// arr.__proto__.customFn = () => {
//   console.log("Hello from the array");
// }

// arr.customFn();

// const arr2 = [5, 6, 7, 8];
// arr2.customFn();

const num = 25;
num.__proto__.isEven = function() {
  if(this % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(num.isEven());

const another_num = 40;
console.log(another_num.isEven());

//Task C:
// Customize the functionality and check whether the number is prime or not.