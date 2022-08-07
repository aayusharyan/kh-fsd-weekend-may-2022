# Jul-31, 2022


## Structuring of Directories.
- The folder structure for any react application.
- A Typical structure of a React App is like this. 👇🏻

- Project Directory - Contains everything related to a project.
  - public - Contains the public files.
    - index.html
    - index.js
    - index.css
  - src - Contains the source code.
    - App.js
    - components - Contains all the components that we create
      - Button.js
      - AboutMe.js
      - Interests.js


## Props:
- Short for Properties.
- These are the data that we pass from a parent component to a child component.
- These are passed as an attribute as we typically do for any HTML element.
- To use this in the child component, we use this.props.<prop_name>


## Array functions
### map
- Loop on the array and manipulate every element.
- This map function takes in a callback function.
- That callback will have 2 parameters, first is the element and second is the index.
- Then we change whatever we want and we return the child component.
**Note: In a case of map returning child component, we NEED to give a key attribute, usually we give the value as the index.**


## Ternary operator
- This operator takes 3 things.
- The condition, the true situation, the false situation.
- Usage -> <condition> ? <true_situation> : <false_situation>


## State
- In React, we have variables.



# Task: Fetch some data and show it in the App.


**In JS, ! means NOT. != means not equal.**

### Task A:
- Create a new Project. In that, show a list of images using this JSON.
[
  {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952"
  },
  {
    albumId: 1,
    id: 2,
    title: "reprehenderit est deserunt velit ipsam",
    url: "https://via.placeholder.com/600/771796",
    thumbnailUrl: "https://via.placeholder.com/150/771796"
  },
  {
    albumId: 1,
    id: 3,
    title: "officia porro iure quia iusto qui ipsa ut modi",
    url: "https://via.placeholder.com/600/24f355",
    thumbnailUrl: "https://via.placeholder.com/150/24f355"
  },
  {
    albumId: 1,
    id: 4,
    title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    url: "https://via.placeholder.com/600/d32776",
    thumbnailUrl: "https://via.placeholder.com/150/d32776"
  },
  {
    albumId: 1,
    id: 5,
    title: "natus nisi omnis corporis facere molestiae rerum in",
    url: "https://via.placeholder.com/600/f66b97",
    thumbnailUrl: "https://via.placeholder.com/150/f66b97"
  },
]





# Task:
- Create a new Project for each of them.
## 1. Create a list of colors:
- You will have a list of hex colors.
- const colors = ["#123ABC", "#AAAAAA", "#111111"];
- Loop on this list.
- For the child div, use input type color and set the value to this color which you will get as prop.

## 2. Create a like/dislike counter:
- You have 1 number and 2 buttons. One button is for like and another button is for dislike.
- When I click on Like, the value of my number should increase by 1.
- When I click on dilike, the value of my number should decrese by 1.

## 3. Use the API and show a table of users.
- This is same as the task given yesterday, except it has to be done in React.

## 4. Create the Ecommerce store.
- This is same as Task given on Jul-24 (last week). Except it has to be done in React.