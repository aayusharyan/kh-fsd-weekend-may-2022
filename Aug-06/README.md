# Aug-06, 2022

## NodeJS
- It is a software used to execute JS outside of the browser.
- JS was originally developed to be used only within the browsers.
- But with the help of NodeJS, we can use it outside.
- NodeJS is a development environment in which we can run JS code.
- NodeJS uses the Google's V8 engine to execute the JS code. outisde the browser.
- Alternatives to Node:
- DenoJS
- BunJS
- In case you want to run a JS file, `node <filename>`.

## Node Packages
- These are additional things that we add to our project.
- For example, (Better UI, better testing, better network calls)
- Node Package Manager is used to manage them.

### Node Package Manager
### Node Package Execute
- This will run the JS package that we use.
- For example, the package is create-react-app
- This package will generate some files for us to get started with a React application.
- Usage: npx create-react-app hello
- Here, hello is the app name.
- The app name has to follow kebab-casing.

**If we are using npx approach, we don't use live server.**

## npm start
- This will start the live server.

## Folder Structure
- node_modules -> This directory contains all the packages that we will use.
- public -> This will contain the publicly facing index.html
- src -> This will contain the source code. Most of the times, our changes will be inside the src directory. Typically, we also create a new directory inside src and call it as components.
- .gitignore -> This contains the list of files and folders that we don't upload on github.
- package.json -> Contains information about what packages are we using and some information about our application.
- package-lock.json -> This contains additional in depth information about exact version of what pckage we are using and more information about that package.
- README.md -> Basically a markdown file which we can use to give information about our project/app.

## package.json
- Gives information about the app.
- Tells the requirements of the app. The dependencies.
- How to run the package.
- Configuration about coding standard.
- devDependencies - These are the packages that we need in order for development.

## State - Recap...
- These are those variables which react can track.
- If a state changes, React can automatically update the rendered output.
- If a state changes, react will automatically show the updated value. This is called as Re-rendering of data.

## HTML Entities
- These are special characters that you want to display on the screen.
- The syntax starts with & symbol and ends with semi-colon.
- Example:
  - Spaces -> &nbsp; -> Non breaking space point
  - & -> &amp; -> Ampersand
  - © -> &copy; -> Copyright
  - > -> &gt; -> Greater Than
  - < -> &lt; -> Less Than
  - ® -> &reg; -> Registered
  - ¢ -> &cent; -> Cents
  - £ -> &pound; -> Pound
  - € -> &euro; -> Euros


## Lifecyle of a Component
- The lifecycle of a component is divided into 3 stages/phases.
- First, it's the birth, technically called as a mounting phase.
- Next, it's the living of live, called as updation phase.
- Last, it's the death, called as unmounting phase.

### Mounting Phase
- When a component is loaded onto the DOM tree.
- Here, we want to call any logic that we need to run during the initialization.
- Commonly, we use it for having API calls.
- The method that we use is: componentDidMount() - It's a built in method of react and cannot be changed.

### Updation Phase
- When a component is re-rendered.
- Whenever either a state or a prop changes. Then the component is updated.
- This updation is called as re-rendering.
- Lifecycle method that we can use here is componentDidUpdate()

### Unmounting Phase
- This phase is when the component gets destroyed.
- Gets removed from the DOM tree.
- This might be the place to write cleanup logic.
- Used for - Disconnecting from the server, remove event listeners, stop the timers.
- Lifecycle method that we can use here is componentWillUnmount()






## Extension that we can use
- https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets
- This helps in using snippets which will help in creating components.
- rcc -> React class component

- https://jsonplaceholder.typicode.com/users



## Task A (For the day):
- Read more about clearInterval.
- We will be using clearInterval inside the componentWIllUnmount lifecycle method.


## Task 1 (For the Week):
- Create a gallery app and fetch the images from Unsplash (https://unsplash.com/developers).
- You can fetch the first 50 images and show them on your page.
- Make it look good.