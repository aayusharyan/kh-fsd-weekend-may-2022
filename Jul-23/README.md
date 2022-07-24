# Jul-23, 2022

//Regular function
function fn_name(params) {
  //Logic....
  return ""; //Optional
}

//Anonymous function
const fn_name = function(params) {
  //Logic
}

## Callback function
- Any function that is passed as an argument, then that argument is called as a callback function.
setTimeout(function() {

}, 1000);

## Arrow function
- Introduced in ES6 (2015).
- These are by their nature. Defaultly anonymous functions.
- They improve the code security.
- In case, if an arrow function has 1 parameter, then the () are skipped.
- In case, if an arrow function has 0 parameter, then _ is used.


**Function expression -> Another term for function definition.**

## IIFE
- eiffy (pronounced as)
- Immediately invoked function expression.
- Ideal for situation where we have a logic that we need to execute only once and during the initialization phase.
- IIFEs are more secure because there is NO reference to that function. That means, no one can call it from anywhere.



## Functional Programming Paradigm
- Using functions to do everything.
- Example:
  - Use event listener callback function.
  - For any processing, we use a function, take parameter and return the result.


## Programming Paradigms.
- The way we write our code is the paradigm.
- The way in which we model/desgin/style/write/architect our program.
  - Functional Programming Paradigm - Use functions for everything.
  - Object Oriented Programming - USe objects and classes for everything.
  - Modular Programming - Each of the functionality is a module, we can just import and use.
  - Parallel Processing Programming - Doing multiple things are the same time.
  - Database Processing Programming - Doing logic inside the DB itself.
  - Procedural Programming - Use procedures for everything.
  - Imperitive Programming Paradigm - Use the goto statement.

**JS is a multi-paradigm programming language.**
**ES13 (Jun-2022) is latest.**


## Object Oreinted Programming
- Everything is inside classes and objects.
- Advantages:
  - Code is more structured and organized.
  - Comparatively less bugs.
- Disadvantages:
  - More time needed to develop.
  - We need to have knowledge on the architecture.

## Class
- A collection of some methods (functions/member functions) and some data (data members).

## Object
- This is an instance of a class.
- This is the actual reference that we can execute.

## constructor
- This is a special method that is invoked as soon as the object of my class is created.
- There is no name. Just the constructor keyword.
- This method is automatically added if we have not written in the code.
- When added by the JS automatically, we say that it is a default constructor / empty constructor (because there is no logic inside).
- Every class can have max of 1 constuctor.

## this keyword
- This keyword is a special keyword which points for this object. The current owner object.
- This keyword is just a pointer.

## 4 Pillars of OOP.
- These are like 4 core concepts for doing Object Oriented Programming.

### Encapsulation
- We are combining/bundling multiple things together in a capsule.
- In classes, we have data members and member functions. When we create/instatiate an object, we are kind of encapsulating all those data members and member functions together in that object. (Just like a capsule).
- Bundling of data members and member functions together in an object.


## Prototype
- The object which contains all the functionality of your class.
- This can be accessed by the __proto__ property of any object.
- __proto__ is a special property which is available for ALL the objects.



# Task
- For the array, you need to customize a function that takes a parameter and performs the logic.
- Take a number and check whether that number is present in that array or not.
- let arr = [1, 2, 3, 4];
- arr.check(5); //return false;
- arr.check(3); //return true;
