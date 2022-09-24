# Sep-24, 2022

# Cont on MongoDB.
- Doing Advanced Filtering functionalities
- Documentation - https://www.mongodb.com/docs

### $gte
- Greater than or equal to

### $gt
- Greater than

### $lte
- Less than or equal to

### $lt
- Less than

- To check directly for equality, we can give values.
{
  useername: "ABCD"
}
- If I want to check for not equal, I can use $ne

### $ne
- Not equal

### $and / #or
- These are used to specify logical conditionality for various conditions.
- And will want all of them to be true.
- Or is okay if any one of them is true.
- Since they accept a list of conditions. They take an array as their value.
```
{
  $and: [
    {number: {$ne: 12}},
    {number: {$ne: 1377}},
    {number: {$ne: 357}},
    {number: {$ne: 1234}}
  ]
}
```

# Aggregation
- Combining multiple records into 1.
- Example: Population Database
  - We have to combine it state by state.
  - We show the total population per state.
- Current Example:
  - We have all the numbers. We want to show the total sum of that.
  - We write the aggregate function. Even though we have only 1 record, we still need to group it.

- Aggregation
  - Sum
  - Average


## Mini Project
- Mini Voting Application
- Frontend & Backned
- We have 3 candidates for election.
- In the frontend, we will have 3 buttons, clicking on each button will make an API request to the backend.
- Backend will add that vote to the database.
- When clicking show result, the backend will return the number of votes per candidate.

- Starts with
- delete (Soft delete vs Hard delete)
- update
- insertMany

# Task:
- Complete the Mini Project.


# NodeJS
## Middleware 
## REST API

# ReactJS
## Writing your own hook

# JS
## Optional Chaning
## defer
## Shadow DOM

# Working on Project (Practice) - Simple Social Media
- Tuesday - Oct/27 (Usual Class timings - 2hr)
- Friday - Oct/30 (Usual Class timings - 2hr)


## Software Development LifeCycles
- Agile
- Waterfall
- V Model
- Kanban
- Hybrid

# Testing
- Software Testing
- What is software Testing
- Types of Software Testing (Strategies)
  - Unit Testing
  - Integration Testing
  - Monkey Testing
  - Manual Testing / Automated Testing
  - Validation Testing
  - Load Testing
  - E2E Testing
- Coding
  - Puppeteer (Frontend)
  - JEST (Backend)