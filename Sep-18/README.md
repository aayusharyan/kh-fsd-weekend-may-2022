# Sep-18, 2022

## REPL on NodeJS - PRISM.
- Read Evaluate Print Loop.

*Node is also referred to as a runtime environment for JavaScript.*

# CORS
- Cross Origin Resource Sharing
- BE -> localhost:3007
- FE -> localhost:3000
- Technically, these are two separate domains.
- So, the resources cannot be shared between them by default.
- To allow, that we use a package, called as CORS (Cross Origin Resource Sharing).
- CORS setting is always backend, we cannot do anything about it from FE side.
- Tools like postman does not respect CORS, therefore they were showing the responses.

# Request Methods / HTTP Methods
- Request Methods
- Any request can have multiple possibilities of action.
- For those, there is a stanard.
- There are request methods / request types for these actions.

### Commonly Used
- GET -> To get a certain data. For example, list
- POST -> To send a certain data, for example, login and register.
- These are the two most common ones.

### Additionally
- PUT -> For insertion only.
- PATCH -> For updation only.
- DELETE -> To delete a data.
- HEAD -> To check whether the data exists or not.

# useRef
- This is a built in hook of React. We don't need to install anything additionally.
- This allows us to access the DOM element. React does not recommend the ussage of document.getElementBy...
- This is important because React needs to know all the changes that we are doing in order to handle the re-rendering optimally. If we refer to the DOM element directly, then react has no way of detecting that.
- Therefore, in a situation where we want to connect to the DOM element, we will use the useRef hook.
- Note: useRef hook is very powerful, therefore must be used carefuly, and most of the times, if it's not needed, it can be avoided. Reason is because we can make mistakes and making a mistake in useState is better than a mistake in useRef.


# Task:
- Create this small project.
- Create a Todo List application using mongoDB.
- For backend, there will be 2 endpoints, one is insert another is list.
- On frontnd, show the list of todo items.
- Also show an input where you can create a new item and insert in the database.


# Working on Project (Practice)
- Tuesday - Oct/27 (Usual Class timings - 2hr)
- Friday - Oct/30 (Usual Class timings - 2hr)