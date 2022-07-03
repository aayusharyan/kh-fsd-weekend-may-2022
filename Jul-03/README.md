# Jul-03, 2022

## DOM Manipulation
- Manipulation means changing.
- Changing of HTML Document using JavaScript Object is DOM Manipulation.
- Even access is part of DOM Manipulation.

### What is DOM?
- Document Object Model.
- It is a global object.
- This gives access to the HTML document.
- We can pretty much do anything using this document object.

### Object Datatype
-- This is also a collection of data.
- Object have KEY, VALUE pairs. In arrays, the machine would give index.
- In object, we (as a programmer) gives the keys;
- Objects are represented by curly brackets.
- Also, object keys are ALWAYS STRING!
- Value can be anything.

let about_me = {
  "first_name": "Aayush",
  "last_name": "Sinha",
  "country": "India"
};


## Data types in JS:
- Objects
- Numbers
- BigInt >1000000000 (10^9)
- String
- boolean
- undefined
- null
- symbol

### Array push
- Used to push any element to the last of an array.

### Object.keys
- It's a built in function, it takes an object and returns an array of all the keys of that object.
Object.keys(<obj_variable>)

### Object.values
- It is also a built in function. It takes in an object and returns an array of all the values of that object.
Object.values(<obj_variable>)

## Anonymous Function
- Functions without names!
- These functions are assigned to a variable, that can be a separate variable or a part of an object.

### document object
- This object contains all the information about HTML document.

### getElementById()
- This is a function which is used to get any element based on it's ID.

### createElement()
- This is a function which is used to create a new element. This new element is not added to the DOM yet, we need to add it manually.

### appendChild()
- This is used to append the child element inside the parent element
- <parent_element>.appendChild(<child_element>);

### innerText
- This is a property, used to change inner Text of any element.

### style
- This is a property (object) used to manipulate the style of the element.

### getElementsByClassName()
- Used to get multiple elements based on their class name.

### getElementsByTagName()
- Used to get multiple elements based on their tag name.

### getElementsByName()
- This is good for inputs. This is used to get multiple elements based on their name attribute.

### querySelector()
- This is used to get 1 element (first match) based on the CSS.

### querySelectorAll()
- This is used to get all the elements which matches the CSS rules.

### value
- This is to get value from inputs.


Tasks:

1. Create a page for password matching.
- Have a page
- Have 2 input fields and 1 button.
- When the user enters same password on both the inputs and clicks on the button.
- Show password match.
- if the passwords entered are different, show passwords don't match.
- As a span, text, para, etc. (NOT AS ALERT).


2. To create a task list.
- This page will have an input field, a button and an ul.
- When the user types any task and clicks on the button.
- That task should be added to the list.
- When the user clicks on any item from the list.
- That item should be REMOVED from that list. (Research on How we can REMOVE any item from an array!).