# Sep-04, 2022

## Context API
- This is a built-in part of React.
- We can send data from any component to any other component.
- The Provider will be a ancestor and consumer will be a descendant.
- Advantages of Prop drilling:
  - More secure.
  - Easy to code.
  - Less Bugs.
  - Better maintainability.
  - All because the middle components does not have to be changed.
- This is an alternative to Prop Drilling.
  - In Prop drilling, we send prop from an ancestor component to a descendant component and we send it via props.
  - Now, in all the middle components also that prop will be used.
  - Because prop is only from parent to child.
  - If in case we want to pass prop from ancestor to descendant, we have to go 1 by 1 with each component at each level.
- Context API will allow to skip that middle components and directly send data at the descendant.
- In any application, there can be multiple contexts.
- To create any context, we need to use the `createContext` method which is a named export of React package.
- Each context will have it's own Providers and Consumers.
- Each context has two parts:

### Provider
- This is an HOC where we pass the child components.
- For the children, they can have access to the data.
- The level does not matter anymore.
- This component has a prop. Name of that prop is value. Data can be anything that we want to send.

### Consumer
- This is also a component.
- However, this component accepts a callback function. We do not send the child component directly.
- That callback will have a parameter. That parameter will be the data which is sent by the Provider.
- The data can be anything, it can be a primitive data like String, Numbers, Boolean, or non primitive data like Arrays and Object or even a functional reference.
- It is possible to have multiple consumers for a single provider.


### Parent-Child relationship vs Ancestor-Descendant relationship
- A parent-child relationship is only betwwen next generation. (Next Level).
- An ancestor-descendant relation can be across various generations. (Various levels).


## Redux
- This is a third party package.
- This needs to be installed separately.
- This is used to have a global state management.
- Instead of having multiple Providers, there is only 1 state to manage.
- The Provider and Consumer can be in any part of the component tree.
- Redux is NOT only for React, we can have Redux in Angular, Vue or even vanilla JS.
- Predictable State container for JS Apps.
- In an application, there is only ONE Redux State and this is global.
- Reason for that is ANY component should be able to update and ANY component should be able to use that.
- This state is an object.
- There is something called as an Action -> Reducer approach.
  - This means, a component can NEVER update the state directly.
  - Here, in order to update the data, a component needs to dispatch an action.
  - It's like saying I want to do this. I want to do this action on the data.
  - This dispatch request will be handled by the reducers. They will update the state object.
- To view the sate, components can do that directly.
- To get the data from state, it is open. Easy to do.

- Data flow for a Redux application
- Componet -> Dispatch (Action) -> Reducers -> State -> (View) Component

- We will be using Redux Toolkit (new Approach).
- Old approach is to install React-Redux and Redux Separately.
- Redux - This is the core functionality.
- React-Redux - This is the wrapper which makes things easy for React applications. This depends on Redux to be installed.
- Redux-Toolkit - This is 1 single package that contains everything which is needed for Redux Development on React.

- To install - npm install @reduxjs/toolkit neact-redux

**The global state of Redux is also known as Redux Store.**



# Tasks:
## Task 1:
- Create a light/dark theme webpage.
- Have a simple page with 4 components.
- Inside App.js, have a checkbox.
- If the checkbox is checked, Componet4 should show the text "Dark Mode".
- If the checkbox is not checked, Component4 should show the text "Light Mode".
- The state management will be inside App.js.
- No need of any sort of color change, just updating the text to appropriate caption is fine.
- Use CONTEXT API.

## Task 2:
- Implement the dislike functionality.
- Using Redux, on the task that we did inside redux project.
- Implement the reducer function.
- Implement dispatch functionality.
- Implement button onClick handler.