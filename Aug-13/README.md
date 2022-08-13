# Aug-13, 2022

> https://codesandbox.io/
This can be used if the npx is not working on the machine, or it is taking time to load.

## useEffect
- This is a hook that we need additionally in our functional component.
- This gives the ability to have lifecycle method alternatives.
- This is a function which accepts 2 parameters.
- The first agument we send is the callback function.
- This callback function contains the logic that we want to execute.
- Next argument we send is the dependency array.
- This array contains all the state/prop variables that we are tracking.
- This tells when to invoke that callback function.
- At least once, the useEffect will be called.

- If the dependency array is empty, then it is treated as an alternate to componentDidMount.
- If there is some variable to track in the dependency array, then it is treated as an alternate to componentDidUpdate.
- This is better than class component's componentDidUpdate because on that, it would invoke every time if anything on the component changed, whereas when we have useEffect, we can define what variables we need to track for that particular logic. (This keeps things clean and easy to read.)

- A single component can have multiple useEffects.

- When we need to write the cleanup code. We put it in the return part of useEffect's callback.
- This makes it an alternative to componentWillUnmount.
- Cleanup code can involve removing event listeners, removing timers, disconnecting Network Connections, etc etc.
- We write this cleanup logic inside the callback function which we return from the callback function which we pass as an argument to the useEffect.


**Shortcut when using the extension -> rafce. This means, React, Arrow, Functional, Component Export.**


## npm install
- This is used to download the package and install on the project.
- By installing, it's basically copy pasting the code inside node_modules directory.
- However, for every project, it will create it's own node_modules.
- There is something called a global package list.
- If a package is inside global package list, it will not be inside the project's node_modules but instead on the machine's node_modules.
- To install globally, we add a flag --global


## Semantic Tags
- This is a concept of HTML
- Introduced in HTML5.
- Semantics means Readability. If I am writing readable good quality code, then it is semantic code.
- Just by looking at my code, anyone should be able to understand what I am trying to do.
- With reference to HTML tags.
- Example:
<nav></nav> -> When we are putting the links.
<header></header> -> If we are not navigating, just showing some heading
<footer></footer>
- article
- section
- details
- summary
- time
- main
- mark

-- These are for images + div alternative
- figure
- figcaption

- DON'T USE DIV FOR EVERYTHING!
- To make things easy to understand just by looking at the code.
- Many people also refer to this as Semantic HTML.





## Axios
- This is a third party package which we use.
- This is used to make API calls easy.
- To install -> npm i axios or npm install axios . Both of these are same.





### async / await

## Higher Order Component (HOC)
## First Order Component (FOC)

## HOF / FOF
## FCF

### Spread
### Rest

## Controlled vs Uncontrolled
## Virtual DOM
## SPA




---
## Shadow DOM
## URL Structuring
## Advanced CSS
## Query Params vs Path Params
## React Router
## Writing your own hook

- nodemon - backend

# Media Query
- max-width, min-width, print, conditions

# Grid
- display: grid

# Keyframes
- percentages
- from/to

# animation
- infinite
- alternate


# Rotate using transform.