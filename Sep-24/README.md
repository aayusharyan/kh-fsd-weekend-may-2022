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

- In order to use the aggregation, we use collection.aggregate. This method accepts an array of aggregation functions. The reason that is because this is a pipeline of functions. Each of these aggregation function is an object.

### $group
- When we reduce multiple rows into a single row with an aggregation, we need to define certain condition if data needs to be grouped together, maybe we want population per state. That would have a grouping function.
- In order to achieve that, for the _id key of the group, we give the property which needs to be grouped on.
- Then the aggregation function will be executed for each group separately.
- If we do not want any sort of grouping, we can give _id as null (commonly used) but technically any string as well.

**Note: To refer to keys in mongoDB, we use `$keyName`.**

### $sum
- This is used to calculate the sum of the given key.

### $avg
- This calculates the average of a given key.

### $count
- This is for number of records. This is different than the sum function.

### $limit
- This is like limiting the number of records that needs to be returned.

### $sort
- Implementing sort functionality. Here to say ascending, we use the number 1. For descending, we use the number -1.

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