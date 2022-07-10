# Jul-10, 2022

### Why index.html?
- Index is the default filename that a browser will look for. If we have an index.html file, we don't need to put the file name in the URL, otherwise we NEED to put the filename.html in the URL to load that page.

**Note - We can attach multiple event listeners to any element for any event type.**

### removeEventListener
- This will remove the eventListeners which we have added. We pass the event type and the function.

### scope
- The area where I can access the data.
- The part of code where the data is available.
- Here, data can be anything, it can be a variable, constant, function, some object, anything.

### var
- It is used to define a variable.
- This is functional scoped.
- This is global.

### let
- This is used to define a variable.
- This is block scoped.
- That means, it is more secure, we should prefer this.

### const
- scope wise, this is same as let. (This is also block scoped).
- Once a const is defined, you cannot update it. (Change the value).

### Primitive Data type and Non Primitive Data Type
- In JS, only object is non-primitive data type. That means, in the variable, instead of storing the value, it stores the memory location of where that data is.
- Non primitive means the data is made up of 1 or more elements.

- Primitive is like the basic building block data type which cannot be broken down further.

### Reference Data type.
- Another word for non-primitive data type.
- This is because these data are not actually coppied/sent as argumen, instead the memory location is sent.
- This is applicable for copy as well as sending as an argument. We change at one place, it gets changed at all the places.

### Shallow Clone / Shallow Copy
let my_arr = [1, 2, 3, 4];
let my_arr_cp = my_arr; //Shallow Clone.
- The problem - If we change at one place, it get's changed at ALL the places.

### Deep Clone / Deep Copy
- This create duplicate data.
- In this, we have 2 copies of data. (in shallow clone, we had 1 copy of data used by 2 references).
- There are 2 steps involved. First is original array/object to string (stringify), the second is from that string to a new array/object (parse).
- If we change 1 copy, others WILL NOT be affected.

### Object.freeze 
- Object.freeze(<whatever object>)
- This freezes the object.
- New additions are not allowed.
- Deletion is not allowed.
- Updating existing values is also not allowed.
- This makes the object constant in true sense.

### Object.seal
- Object.seal(<whatever object>)
- Addition/Deletion not allowed.
- Edit of existing properties/elements is allowed.
- Only allow updation, nothing else.

### ECMA
- European Computer Manufacturers Association.
- This is a non-profit organiztion.
- Similar to ISI, ISO


They created a standard for scripting languages, called as ECMAScript.

**JS follows the ES standard.**


### ECMA Script Standard
- ActionScript, TypeScript, JScript, KJScript (Konqueror)
- ES12 (June/July 2021).

- ES6 -> 2015 (This had major changes). ES2015/ES6
- ES9 -> 2018 (Good enough to know).


before ES6, there was only var.
ES6 introduced the concept of blocked scoping (let & const);


### Template Literal / Literal Strings
- Allow easy addition of JS variables into a sting.
- No need of tracking the quotation marks and the concatenation + symbol.
- syntax, use `` for the string and ${} for the variables.

DOM Manipulation


Task 1 - Add functionality to the calculator.
Task 2 - Word Counter - Have a textarea and whatever text user wil enter, show the nuber of words in that text.
Task 3 - Prepare a list of images (any image you can use). On the page, have a button, when I click the button, show me a random image from your list.

Next week (CSS Adv.)
- Responsiveness -> media query, flexbox.
- combinators
- variables
- animation and transition.
