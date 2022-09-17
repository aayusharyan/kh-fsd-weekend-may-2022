# Sep-17, 2022

# Passing data to the backend.

## Query Parameters
- Here, the data is passed in the URL, in the form of query parameters.
- These can be seen by anyone, for that reason, when we want to go some search or filtering, we use query Parameters.
- For other things, we send the data in body.
- The data sent in body is comparatively more secure.
- Example, the browser can keep the query parameters in it's browser history.


- To get the body data, we need to use bodyParser. However, after Express version 4.16, it has been removed into a separate package. 
- In old projects running express 4.16 or below, we can directly use app.use(express.bodyParser). However, in newer projects, we need to install the package separately.

## Body of a Request/Response
- Any request/response is made up of 2 parts, a head and a body.
- A head contains header information like the URL (endpoint), authorization headers, query parameters, cookies, etc.
- A body contains the main data that we send to the server.
- Any time we want to send some data, we typically use body of the request.
- The query parameters we only use when we are sending some search/filter information.
- Body can have data in different formats, such as text/json/binary (for files)/etc.
- Therefore, to use body, we need to install additional package, called `body-parser`.
- This package, we requre and put inside `app.use()`;
- This will parse the body and give that data inside `req.body`.

- We can use this data and store it in files.


## Database
- Storing of data in an organized manner.
- In this case, each username and password we were able to store as separate files.
- File based database, each single record was a single file.
- We implemented our own custom DB for this purpose.
- Any organized data stored in any medium is considered as a database.
- It can be physical or digital.
- Even a report card, is an example of a database (it is a physical database).
- A DB is an organized collection or structured information or data. Commonly this is stored in digital medium, but it can be physical storage as well.
- MySQL, MongoDB, Postgres, but even basic things like MS Excel, Google Sheets or physical documents can be considered as databases.

## SQL & NoSQL
- This is a structured DB.
- The format of the DB is in a table. This is a collection of rows and columns.
- This is not so flexible. Suppose, I have 5000 rows with 2 columns username & password.
- 5000 x 2 is my table.
- But suppose there is a new feature also allowing login via email / password. This has 100 records with email  / username / password.
- This is problematic. We have multiple solutions:
  - New table for email / password - Now we need to check 2 places instead of 1.
  - We add a third column on the same table - Then first 5000 will be empty, wastage of space.
  - We do not use email column - Not as per business requirement.
- This means, that while defining the table schema (structure), we have to be careful and plan according to future requirements as well. This takes time and cost for companies. Startups don't have that.

- Therefore, majority of new projects prefer NoSQL DB.
- There is NO Structure.
- It is completely flexible and each record can have dynamic number of columns.
- NoSQL is Commonly with MongoDB, FirebaseDB.
- SQL Example - MySQL, OracleDB.

## DB Engine (DB Management System, DBMS)
- This is a software written to make the access of DB simple.
- Efficient DBs are written in low level, to make processign faster.
- We (as a programmer) don't directly access the DB, we access the DBMS. Then the DBMS will perform the operations on the low level DB.
- We directly don't access the data (because the data is written at low level on the hard disk), we don't use fs to read anything. We just ask the DBMS to read and return the data.


- Packages that we use:
 - nodemon
 - express
 - body-parser
 - mongodb


# DB
- A DB consists of multiple collections.
- A DB is typically per project. (1 db 1 project).

# Collections
- These are like various tables.
- Collection is a collection of records.
- In a project, there can be users collection, posts collection, messages collection.

# Record
- This is 1 individual record (json data).


# Task:
- Implement registration functionality, but using MongoDB.
- insertOne({
  username: req.body.username,
  password: req.body.password
})




- cors


## Middleware



## Client Server Architecture
- Client makes a request to the server.
- Server will process that.
- Server will send response back to client.



- Integration of React and Node.


## Optional Chaning

## defer

---
## Shadow DOM
## URL Structuring
## Advanced CSS
## Query Params vs Path Params
## React Router
## Redux
## Writing your own hook
