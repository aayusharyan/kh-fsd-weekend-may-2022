# Aug-07, 2022

## Prop Drilling
- Props are typically sent from parent to child. Parent creates the data and child consumes the data.
- Parent -> Child1 -> Child2 -> Child3... -> Child4.
- This is prop drilling
- Forwarding of props from 1 component to it's child.
- If we are sending props from parent to child and immediately using them, then it is regular props. Otherwise, it is prop drilling. (We are sending props but instead of using them in the child component, we are forwarding them even further to additional child components).

## State Lifting / Lifting State up
- Till now we have seen that we can send data from parent to child. But what if I want to send data from child to parent?
- From the parent component to the child component, we don't send the data. Instead of that, we send the callback function.
- when the child component is re-rendered. We use a lifecycle method to invoke the parent's function which we sent as prop.
- This approach is referred as lifting of state from the child to parent. Therefore, state lifting.

## Array Methods
- These are the built in methods of Array datatype in JS.
### forEach
- Used to loop on an array
### map
- Used to loop and modify every element of an array.
### splice
- Used to add/remove elements from any given index in an array.

### find
- This will search and return the first ELEMENT which matches.
- If you want to get more than one matches, go for a filter method.
- Find takes in a callback, which has 2 parameters, element and index that can be used to aply the logic. Return true to say that match is found, otherwise return false from the callback function.

### findIndex
- This is exactly like the find method, but instead of giving the value/element. It will give the index of that element.

### indexOf
- IndexOf will check for value directly, whereas findIndex you can pass a callback.
- This does not take a callback method.
- This does not work for complicated arrays.

### lastIndexOf
- This is exactly same as indexOf.
- This also does not take any callback methods.
- The difference is that indexOf will return the first occurence's index whereas this will return the last occurence's index.

### some
- This checks whether some (1 or more than 1) elements match my condition or not.
- This takes in a callback function and passese the element + index as it's parameters. We write the conditional logic inside the callback function. Return true for a match, false for not a match.

### includes
- This is a basic function. We don't pass any callback here.
- This is similar to some, but this cannot work for complicated arrays, we need to give exact value to check for.

### slice
- Divide the array into parts.
- This is kind of equivalent to substring but this is for arrays.
- We give start and end.
- Start will start from that index. (Include that).
- End will stop at that index. (Exclude that index element).

### filter
- This will filter my array elements based on the logic.
- This methots takes in the callback function and that function has 2 parameters, element and index.
- If we want to keep it in the array, we return true from the callback function. Otherwise, we return false.

### reduce
- This is used to reduce the dimensionality.
- Usecase, when you have a list of products at a checkout screen and you want to calculate the total.
- Typical usecase is when you want to perform a mathematical operation on just 1 particular column of your array.
- The idea is to perform operation with an accumulator variable in mind.
- We pass the initial value of this accumilator as second argument of the reduce method.

### sort
- This allows to rearrange your array.
- This accepts a callback function.
- In that function, we recieve 2 arguments, a and b. We compare the property that we need to check and arrange accordingly, then we return the difference.

> Further Reading about Array methods -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array


## Functional Components
- Every component will be a function.
- These are the future of components.
- We create a function. We return the JSX code.
- Finally, we export that function.
- No need of any class methods, or any addition import of React.

**Previously, lifecycle methods were not available in functional components.**

### How to send Prop to functional component?
- In class components, we were able to get the prop inside contructor and inside this.props....
- We don't have this keyword in functions.

## Destructuring
- To unpack the data which is bundled together. Typically for arrays and objects.
- There are two types of destructuring for 2 different types of collections.

### Array Destructuring
- It was introduced in ES6 (2015).
- It is used to unpack the arrays.
- Usage: const [a, b, c, d] = [1, 2, 3, 4];
- It will save the 0th index value to a, 1st index value to b and so on so forth.

### Object Destructuring
- It was introduced in ES9 (2018).
- It is similar as array destructuring but for object.
- A small rule, the variable name should be same as the key name.
- Usage: const {first_name, last_name, role} = obj;
- It will put the objects' first_name value in the variable first_name and likewise for other variables as well.


## Hooks
- These are special functions that we import into our component and they give some special power (in terms of functionalities).
- We can create our own hooks as well.
- There are hooks available from third party packages as well that we are going to be using in the future.

### useState
- This is built in hook from React.
- This gives statefulness to our component. 
- We can have as many useStates as we want. 1 single useState is for 1 single data.
- when we invoke the useState, we give the default value what need for that state. It returns an array which we can simply destructure.
- The 0th element contains the state and the 1st element contains the setState function that we call whenever we need to update the state value.


### useEffect



## Stateful Component vs Stateless Component
- Any component using state is stateful.
- Any component not using state is stateless.
- Class components by default are stateful (if we are using this.state).
- In functional component, by default it is stateless.



## Task 2 (For the Week):
- Create a menu page for a restaurant.
- Any restro, that you like.
- But it should be in Functional Components.
- Use atleast 5 different components.


## Task 3 (For the Week):
- For the JSON data - https://raw.githubusercontent.com/github/gemoji/master/db/emoji.json
- Display the emojis coming from this list.
- Do in functional component.
- No need of doing any fetch API call. Instead, download this and use it in your code.



### How to use a different variable for object destructuring.