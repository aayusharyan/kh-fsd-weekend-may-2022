# Jul-30, 2022

## ReactJS
- https://reactjs.org/
- React is developed by Facebook
- Because it is by Facebook, it is stable.
- React is more modern and better developed. Because Facebook has resources to do so.
- React is lightweight.
- React has a huge developer base.
- Because of that, it is easy for new people to get started with React.
- https://npmtrends.com/angular-vs-react-vs-vue

### What is React?
- It's a lightweight library used for building Applications.

**To develop Mobile application, we use React Native.**

### Why React?
- it is lightweight
- It is maintained.
- It is flexible.
- It has a good developer community.
- It makes development faster.


## Get Started
- To get started, paste the three scripts into your index.html
<script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
- These links are called CDN links.
- CDN -> Content Delivery Network.
- CDN servers are specialized in just giving (Delivery) the content.
- Because of this specialization, it improves the speed of loading.
- These links are the base that we need in order to write the react application code.


**Note: Every React App will have a div in the HTML which is treated as the root of the Application which means everything that we do will be inside that container.**

- These links contain 3 things:
  - React
  - ReactDOM
  - Babel
- React script contains all the code that we need to have in order to run a react application.
- reactDOM contains all the code that we need to perform DOM manipulation using React.


## Babel
- Babel contains the code which helps in writing modern JS. JSX.
- Browsers cannot understand JSX, babel will convert it into HTML, CSS and JS that the browsers can understand.
- Babel converts modern JS into something that the browsers can understand.
- It's a transpiler.


## JSX
- JavaScript XML.
- Javascript and a Markup Language.
- For Example:
- We can write HTML tags directly inside the return of my render function.
- We can use JS classes as if they were HTML elements.


## ReactDOM
- A script that we impor in order to perform DOM Manipulations for my Applcation.


## Component
- Any class component that we create, needs to be extended from React.Component
- A component is a combination of HTML elements with their functionalities and logic.
- Components are named with PascalCasing

### Why App.js
- App is short for application.
- Just like for HTML, we use index. For React, we use App.
- That means, the first component that we need to use is App
- This is all JS, therefore, App.js 

### Why is it React App instead of React Website?
- Websites were initially used for delivering of the data.
- Web Apps were more interactive.
- In websites if we navigate, a new page is loaded completely.
- In Web App, if we naviagate, then only the part that needs to change is changed. Other things, remain.
- Web Apps are designed for more interactivity with the user.


**Render -> Display.**

### Task A:
- Create 2 components.
First is About Me. In that component, have an h5 and write 1 line about yourself.
- In the second component, let's call it interests. Create a ul and write 2-3 things that you feel interested about. 

### Task B:
- Create another component.
- Name it as ContactForm. Inside this, have a form with input type text, placeholder message and input type submit.


From any function, we can return only one thing.
return {k1: "abcd", k2: "efgh"}


### Variable in CSS:
- To create that, we first define the scope, commonly used -> :root.
- Inside the scope, we write the variable. To write it, we use double hyphen (--) and then the variable name.
- To use a variable. We use var like a function. var().
- Inside this var(), we use the variable name (including the --).
- Example:
:root {
  --blue: #003049;
  --red: #D62828;
  --orange: #F77F00;
  --yellow: #FCBF49;
  --light: #EAE2B7;
}

body {
  background-color: var(--light);
  font-family: 'Roboto Mono', monospace;
}


### Array Foreach
- Loop on an array
- We pass a callback function which takes in 2 parameters, the array element and it's index.


# Task
- Use this API.
- https://reqres.in/api/users
- Create a table of users from this response.




# Virtual DOM