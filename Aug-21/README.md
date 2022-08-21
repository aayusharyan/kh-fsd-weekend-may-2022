# Aug-21, 2022

## Ports:
- Like an entry point, but for websites.
- Typically, there are about 6300 ports (Point of enterence).
- Exactly, 65,535.
- There are some reserved ports for some certain purposes.
- There is no rule which port to use for what thing, it's more about a standardization (guideline).
- If we want, we can customize and use pretty much any port for any functionality.
- But, we should not do that.
- Examples:
  - 25 SMTP -> Emails
  - 80 HTTP -> Non - secure web browsing
  - 443 HTTPS -> Secure Web Browsing
  - 20, 21 FTP -> Transferring Files

## Functional Component vs Class Components
- Functional components use Functions.
- Class components use Classes.
- Functional components have hooks. No lifecycle methods.
- Class Components don't have hooks, but they have lifecycle methods.
- Functional components are the preferred way to create new applications.
- In fact, When we do create-react-app, by default, it creates a functional component.
- If you are using class components, you NEED to use arrow functions, if you try to use any other function, you will have difficulty in setting or getting the state.
- The workaround, if we really want to use regular functions (using function keyword) in our class components, then we can use bind method.


## Higher Order Component (HOC)
- If a component is taking another component as a child, then it's a higher order component.
- For Higher Order Components, we use a coupled tag, not self closing.
- We pass the child inside that tag.
- Just like how we would do in a regular HTML, instead of tag inside tag, we put a component inside another component.
- Purpose, if there is same/similar functionality which is needed across multiple components, when we create an HOC and wrap it around those many components as needed.
- This prevents us from changing the definition of multiple components.


## First Order Component (FOC)
- This is opposite of HOC.
- Here, instead of passing a child component, we don't pass it.
- We can however, pass other sorts of data, but just not a child component.
- This is typically a self closing tag.


## HOF (This is for JS)
- Any function that accepts another function as it's parameter is a higher order function.
- Typically, these are the functions which accept a callback functions.
- We send callback to these functions.
- This is different than callbacks.
- Callback is the function which is sent as an argument. But where is it sent? To a HOF.
- Example: useEffect, setTimeout, setInterval, addEventListener, then, map, reduce, filter, etc. etc.
- Example: setInterval(() => { console.log("ABCD") }, 1000);


## FOF
- This is a function which does NOT accept any other function.
- It can accept other data types and everything else, but NOT a callback function.
- Math.random(), Math.max(), Math.min, Array.reverse(), console.log.
- A function which does not accept a callback. We can send a function as an argument, but it will not execute that function.
- Example: console.log(() => { alert("ABCD"); });


## FCF
- Any function referenced in a varible, is a first class function.
- It can be an arrow function or a regular function expression. Anything, but it should be assigned to a variable.
- Examples:
  - ``` 
    const fn = () => {
      alert("ABCD");
    }
    ```
  - ``` 
    const fn = function fn1() {
      alert("ABCD");
    }
    ```
  - ```
    const fn = function() {
      alert("ABCD");
    }
    ```
- Not Example:
  - ```
    function fn() {
      alert("ABCD");
    }
    ```
- A First Class function is a function which can be treated as any other data member of the code.
- Basically, treated as a variable.


## Rest Operator
- This is used to refer to rest of the things.
- Here, rest of the arguments are mapped to an array in the prameter list.
- 1 function can only have 1 rest operator in it's parameter list.
- Rest operator is used at the last. If it is not like that, then it is a syntax error.


## Spread
- Takes in an array as an argument, and spreads it into various memory locations.
- This is exact opposite of the REST operator.
- But the syntax is same. (Three dots).
- If the three dots are seen on the prameters side, then it's good and uses a REST operator.
- If the three dots are seen on the agruments side, then it's on a SPREAD operator.


## Controlled vs Uncontrolled Components
### Controlled Component
- A Controlled compontnt is controlled by it's parent.
- The parent controls the output and behaviour of the child.
- This means, the child component does not have any logic of it's own.
- That's why it is also called as a dumb component.
- Even the states of this component are tracked by it's parent.
- That way, parent is very controlling, therefore this is a controlled component.

### Uncontrolled Component
- Kind of the default way of coding.
- Here, there is a self-sufficiency in the child component.
- We don't need to give or manage the state using parent.
- The child will manage states on it's own.
- That's why the Parent does NOT have any control over it.
- Therefore, it is called an uncontrolled component. 


## Fragments
- This is a better way to use instead of using <div> everywhere.
- Using <div> makes things more complicated and comparatevely more slow and consuming more resources.
- We don't want to do that, we want to make things smooth and fast.
- We want to avoid using more than required tags.
- This is where fragment will come into picture.
- Fragment -> Denoted by set of empty angular brackets. <> and </>
- These are not real tags, that means they are not added to the real DOM.
- React handles them as tags only, just that they are not added to the DOM.
- This is for efficiency purposes.


## Virtual DOM
## SPA



# Tasks:
1. Write a polyfill for Math.max
- Basically, create your own function which does the same.
- You are allowed to use, Rest operator and arrow functions.

2. Refactor the gallery app.
- For every image, instead of using div, we should use the Higher Order Component.



## Optional Chaning

## defer

---
## Shadow DOM
## URL Structuring
## Advanced CSS
## Query Params vs Path Params
## React Router
## Redux
## Writing your own hook

- nodemon - backend