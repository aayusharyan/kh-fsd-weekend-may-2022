# Aug-14, 2022

## Axios (Contd...)
- Axios is used to make network API calls.
- Good thing is that it doesn't need explicit conversion.
- It will automatically convert to JSON and give the response.
- The actual data will always be inside the data key of the response.


### Small Task - E-commerce using fakestore.


## CSS Concept - Pseudo Selectors
- These are used to change the style of the content or some part of the content.
- They don't exist on their own, they need a base selector to work on.
- That's why they are called pseudo selectors. 

### Pseudo Elements
- This can change some part of your content.
- This uses ::
- Even if we use :, it might work, but that is because browsers are compensating for our mistake. That is not the correct way.
- Example:
  - before
  - after
  - first-line
  - first-letter
  - visited

### Pseudo Classes
- This will change the whole content.
- This uses :
- Example:
  - hover
  - active
  - visited
  - nth-child
  - focus

### nth-child - Pseudo Class
- This is used to give style to an element which is nth child of their parent.
- For first or last child, we have the pseudo classes directly using :first-child or :last-child pseudo class. Fo everything else, we use nth-child.
- It is like a function where we pass the location of which child number we want.
- NOTE: The counting here starts from 1.
- Example:
  - To select first 4 elements -> nth-child(-n+4)
  - To select everything except first 4 elements (Starting from 5) -> nth-child(n+5)
  - To select every third element -> nth-child(3n)
  - To select every second element (even) -> nth-child(2n)
  - To select every odd element -> nth-child(2n+1)
  - Easy way:
    - For even -> nth-child(even)
    - For odd -> nth-child(odd)

### Further Reading
- Reading about Pseudo Classes - https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes


## CSS Concepts - Position
- This is used to set the position of element on the document.
- This is also referred to as CSS Layouting.
- The CSS Property is position.

### position: static;
- This is the default positioning that the browser will give to the element.

### position: relative;
- This shifts the element relative from it's initial position.
- This can overlap other elements.

### position fixed;
- This puts the element in position relative to the viewport.
- This makes the element as inline-block. So, we need to specify the width manually.
- Second thing that we need to consider is that it's space is gone.
- It is removed from the document flow. To fix this, many people give padding.

### position: sticky
- The better way to do position: fixed.
- This is very very similar to fixed.
- Except, it does not need any padding additionally.
- This also allows having multiple headers which cannot be done using position: fixed.

### position: absolute
- This will place the element relative to it's closest positioned ancestor.
- ancestor -> parent, parent of parent, grandparent.
- positioned -> An element which have the position property defined (it is Not default, it is NOT static).
- closest -> If multiple ancestors have position property defined, then the one closest to the element in the hierarchy will be picked.
- Closest Positioned Ancestor.

## Animation

### Keyframes
- @keyframes <name> {
  0% {

  }
  100% {

  }
}

### transition
- This allows to have animatable properties animate.
- First thing we say is which property we want to animate. If we give all, it will try to animate all the properties that can be animated.
- Instead, we can also give specific property that we want to animate.
- Next, we give is the duration. How long this animation should take?
- This duration is given in seconds.
- This is the timing function. Typically linear means with same speed.
- Alternates, ease-in, ease-out, cubic, ease-in-out, etc.

### transform
- This property is used to transform the shape and size of any element
- We can scale, rotate, shift, skew.
- Basically, change the shape, size and position of any element.

## Media Query
- This is used to make websites more response.
- This is one of the ways using which we can achieve responsiveness.
- Other ways for example -> flex, better units measurements.
- The way we write media query is:
- @media (max-width: <width>) and screen {

}
- Usage: max-width, min-width, print, conditions

## Responsiveness
- The ability of a website to look good on multiple screen sizes.
- By that, we can have multiple resolutions, multiple aspect ratio.
- Differen orientation.
- If it is looking good, it is responsive, otherwise, it is not responsive.
- Responsiveness is typically tested by the designers but there are some tools to check that.
- Example -> https://search.google.com/test/mobile-friendly

## Unit of Measurements (Contd...)
- Two more responsive friendly units of measurement.

### vh 
- Viewport height
- 100vh means the total height of the viewport.

### vw
- Viewport width
- 100vw means the total width of the viewport.


## Grid
- Used for complex structures where we want a 2 dimentional control.
- For pretty much everything, we can use flex.
- display: grid;

# JS Concepts 👇🏻

## async / await
- This is an alternative to .then
- When using .then
- Instead of using .then and passing callback, we use await keyword and use it like a variable assignment.
- This is just syntactical sugar.
- This means, there is no added advantage of using async await. But it makes the code cleaner and easy to read and maintain.
- The way it works, when it sees an await, it will wait for that promise to complete and then it will assign the value and move to the next step.
- So, it makes the code look like synchronous code.
- Synchronous mean, one step at a time.
- If any function is using await keyword, then that function should be defined as an async function.
- An async function can have more than 1 await inside it.
- This also prevents from callback hell.


## Callback hell
- When using .then inside .then, it leads to a complicated code.
- This code becomes difficult to understand and maintain.
- JUST AVOID IT. ❌

### Error handling in Promise
.catch(() => {
  console.log("Function has failed");
})

## Then chaining
- This is also an alterative to avoid callback hell.
- Here, from the callback function, we return the promise.
- Once returned. The next .then can be applied on the parent itself instead of putting it on the child (callback function).
- This makes a series of .then sequences.
- Therefore, the name, then chaining.

**Note: If the arrow function has only 1 step of execution and that is returned. We can skip the {} and the return keyword.**
- Example: const sum = (a, b) => a + b;

## Task:
1. Create a UI for multiple headers.
- Try to create something like this - https://jsfiddle.net/BCtP8/3/
- This usese position sticky.

2. Create an app.
- In that application, have an input where the user can search for a word.
- Once searched, show the information about that word. (Meaning, usage, pronounciation).
- Consume the API -> https://dictionaryapi.dev/

- https://api.dictionaryapi.dev/api/v2/entries/en/zoom
- https://api.dictionaryapi.dev/api/v2/entries/en/goodbye


3. Create an app.
- This is for Github users.
- An input field where the user will enter their username.
- Once clicked on search. Then perform the API call
- Consume the endpoint -> https://api.github.com/users/aayusharyan
- Show the results of that username.
- Show (Name, Profile Picture, Type, Follower Count, Respositories, Creation date).




## Higher Order Component (HOC)
## First Order Component (FOC)

## HOF / FOF
## FCF

### Spread
### Rest

## Controlled vs Uncontrolled
## Virtual DOM
## SPA

## Fragments


---
## Shadow DOM
## URL Structuring
## Advanced CSS
## Query Params vs Path Params
## React Router
## Redux
## Writing your own hook

- nodemon - backend