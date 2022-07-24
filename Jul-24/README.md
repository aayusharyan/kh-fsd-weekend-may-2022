# Jul-24, 2022

## Prototype:
- Problem with __proto__ is that we need to have a variable of that class.
- <variable>.__proto__.<custom_function>;

### prototype
- This allows changing of method (member functions) using the class name.
- Here, we don't need any variable.
- ClassName.protorype.customFn = function() {};
- This is cleaner approach of having custom functionality for any class.

## 4 Pillars of OOP

### Encapsulation
- Bundling of data members and member functions together in an object (capsule).

### Abstraction
- Hiding of things.
- In a class, creating a private member function makes it abstract.
- Hiding of unnecesary information/functionality from the user. Making the data members and the member functions private.

**In JS, as of ES13(2022), we can only make member functions private.**

### Inheritance
- The ability of child class to access the parent's data member and member functions is called inheritance.
- Sometime, child class -> derived class... Parent class -> Base class.
- Child CANNOT inherit the private member functions.
- Parent CANNOT inherit anything from the child.

#### Single Inheritance
- 1 parent and 1 child. ✔️
#### Multiple Inheritance
- 1 child and multiple parents. ❌
#### Multi Level Inheritance
- 1 child, 1 parent, 1 grand parent, 1 great grand parent. ✔️
#### Hybrid.
- Mix of more than 1 type of inheritance.

**1 parent is always allowed to have multiple child classes.**

### Polymorphism
- Poly -> many, morph -> form
- One function many forms (many function definitions).

#### Function Overrriding (Supported by JS. ✔️)
- Having two functions with the same. (1 parent and 1 child). In that case, the child function overrides the parents' function.
- Function overriding. Overriding the functionality with having the same name.

#### Function Overloading (Not supported by JS. ❌)
- Having the same function name and different parameter sets.
- Because JS does not care about Data types, function overloading is not possible here.
- However, on other languages, (Java), we can create 2 separate function definitions with the same name. Only difference is that first function accepts 1 parameter as a string and second accepts 1 parameter as boolean.


---

### Private member functions in JS
- Just prepend # symbol to the method name.
- When using also, use this.#fn_name.
- This means, only the class can access this, but outside of the class, nobody can access this functionality.
- This is one of the access modifier in JS.

### super()
- This keyword is a function. This will call the parent's constructor. We need to use this for our child class's constructor.

### static
- This data member or member function does NOT depend on the object.
- To invoke the method (or access the data member), we don't need to create/instantiate the object.
- Directly we can use by className.<method/property>.

**In JS, static methods/properties CANNOT be referred using the object.**


## Synchronous Programming
- All the steps on your program are executed 1 by 1.
- Once the current step is completed, move to the next step.

## Asynchronous Programming
- The sequence of execution might be different from the sequence in which we have written the code.

## Asynchronous JS
- Callback.
- Timers
- Promises.

## Promises
- It's just like a regular promise, but this is for complex tasks which might not be executed immediately. In that case, instead of returning the result, a promise is returned.
- A promise contains 3 states:
  - Pending -> The task is yet to be finished. (Default)
  - Fulfilled (resolved/completed/successful/done) -> Task is successfuly completed and result is available.
  - Rejected (failed/crashed) -> Task is completed but not successful.

## fetch
- It is a build in function (not the JS core, this is built into the browser).
- Fetch will go to the URL and fetch the response.
- Fetch returns a promise (because it doesn't know how much time it will take to actually get the data). At the same time it doesn't want to to block the script.

## then
- A then function is added to the promise to indicate that the callback needs to be executed whenever the promise is fulfilled.
- Inside a then, we pass a callback function. For that function, there is a parameter, that parameter is the response of my promise.

## JSON
- JavaScript Object Notation.
- It is one of the standards format of data exchange.
- It is inspired from the JS object.
- It is the most common format used in web technologies.
- Second most is XML.

## XML
- Everything is in tag.
- Extensible Markup Language -> XML
<page>1</page>
<per_page>6</per_page>
<total>12</total>
<data>
    <id>1</id>
    <email>george.bluth@reqres.in</email>
</data>
- Further Reading -> https://developer.mozilla.org/en-US/docs/Web/API/DOMParser

## API
- Application Programming Interface.
- This is an interface using which 2 pieces of software can communicate to each other.
- It may be a client/server communication. It may not be a client server communication.
- It can even be 2 softwares on the same machine communicating with each other via an API.

# Task
1. Use this API (https://fakestoreapi.com/products).
- Design an list page showing all of these items. (Use flex)
- Make it look like an ecommerce store.
- Show the Product image, product title, product price and rating(optional).

2. Use this API (https://jsonplaceholder.typicode.com/photos).
- In the gallery that we made, get the images from this API and load/show the data.
- If possible, show all of them, if not possible then limit to like 100-200 images.




## Arrow function vs Regular Anonymous functions wrt the this keyword.


## Prototype chaining


## favicon

## threads

## Math.random

## BOM


## console
## Pre-increment / Post increment