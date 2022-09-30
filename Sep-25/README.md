# Sep-25, 2022

# Contd on MongoDB

## Delete
- This is used to delete the data.
- There are two possibilities, deleteOne and deleteMany.
- Both of these methods accepts a filter object. This object is same as the one sent in find method.
- If the filter object is matching multiple records, then deleteMany will delete all of them and deleteOne will delete only the first match.
- Both of these methods return a promise which we can later use to handle the next logic.

## Update
- updateOne
- updateMany
- These are used to update the data. These methods accept 2 parameters, first is the filter object and second is the new data to update with.


# Contd. on NodeJS

## Middleware 
- This is the code/function that sits in the middle of client and the server.
- Middleware has access to check any incoming request and outgoing response.
- We can create our custom middlewares or we can also use third party packages which contains middlewares.
- In order to use a middleware with an application, we use app.use(<middleware_method>)
- We can have multiple middlewares in a single application.
- They are for various purposes to check for certain things or to convert certain data formats, etc.
- A middleware method has 3 parameters, (req, res, next). The request and response are as usual as the regular endpoint callbacks, but next() method is used to trigger the next event that needs to happen.
- If there are multiple middlewares, then the next() method will trigger the next middleware, otherwise it will trigger the API endpoint's callback method.
- We need this so that we can control in what situation to move to the next step or in what situation to go back.
- The existing middlewares we were using till now.
  - body-parser - This used to parse the request's body and give that information in req.body property.
  - cors - This used to change the response headers and allow the use of Cross Origin headers to connect to the frontend.
- Another typical usecase, for example - Authentication, so instead of checking for authentication on every endpoint, we can check for that in the middleware itself. This makes the code very clean as the endpoint will have only the logic which is needed and not the boilerplate for other functionalities.


## REST API
- This is like the global standard for data exchange over the internet.
- This is following a simple client-server architecture.
- In REST API, the server does not keep the state of the clinet.
- Here, the server is a stateless server. That means, the server does not store information about the client. It just generates a token during login phase and share it with the client.
- Now, it is responsibility of the Client to send that token every time with every request.
- If the server does not find that token with any request, then it treats that request as unahtorized request and refuses to send the data back.
- Majorly the data exchange happens in JSON format.
- Previously, it used to be XML. But now the trends have shifted towards JSON.
- Representational State Transfer

## Another ways for data exchange
- HTTP/2 Streams
- Web Socket
- RPC - Remote Procedure Call


# ReactJS
## Writing your own hook
- Hooks give us additional functionality to the react application.
- These are methods that we import and use directly.
- We can create our own hooks if we wanted to.
- Example taken - A custom hook to check whether internet is present or not.


## Software Development LifeCycles (SDLC)
- This is how a team will develop the product.
- This is like a planning and development strategy.
- There are multiple SDLCs avaialble to flllow.
- These are more of a guidelines which any team can adapt to, but they can customize and tailor these things according to their unique team and product.
- These are methodologies on how to build the product efficiently.

### Agile
- This is the most common one, many of the startups and organizations use this.
- The flow of agile is very simple.
- The whole development is divided into sprints.
- Each sprint is about 2 weeks. This is just a duration which we refer to as a sprint.
- We start with Sprint 0, then 1, then 2, so on, every two weeks, we close the current sprint and open a new one.
- After a sprint is completed, the team will meet and discuss the features/changes/requriements for the next spring.
- This allows more focus to the task in hand, which is next sprint (or sometimes next 2 sprints).
- More focus = More quality.
- This also makes it easy to change.
- This gives the agility and saves the initial development time to get started.
- Move fast, break things, fix things, release.
- That is why many startups prefer to follow Agile methodologies.


### Waterfall
- This WAS the most common approach BEFORE agile.
- Many large corporates still use this approach.
- This is an approach where everything is inside like a 1 very large sprint.
- This approach does not allow for pivoting.
- We follow a flow.
  - First we do reseaarch and development of market and the product need.
  - Then, we start architecting the product. (Module, Class, Component).
  - These are the specifications which are passed to the development team.
  - Then the dev team starts writing code.
  - Then the testing is started.
  - Finally, the project is completed and the team supports for maintenance.
- The team can spend many months working on the product BEFORE even starting to write the actual code.
- This makes it difficult to pivot which can be favourable in certain situations.


### V Model
- Here, many things happen parallely.
- From the business side, we start the requriement gathering. At the same time, the development team will start writing testcases. (These testcases are written BEFORE the code is written).
- Finally, the last step of development is started.

**TDD - Test Driven Development. Before writing the code, we write the testcases. This can be followed in many SDLc.**
*Using TDD helps in better code quality than writing tests AFTER the coding phase.*

### Kanban
- This is mostly also referred to as a Kanban board.
- In this board we have multiple sections.
- Each issue/bug/feature is represented as a ticket.
- Our goal is to keep shifting the ticket to next columns.
- This allows fast paced environemnts.
- The number of columns can vary from organization to organization.


### Hybrid
- Combination of more than 1 approached. Picking something from some certain approach and another from some other certain approach.
- This is mostly to adapt better for a specific project + team + organization.

---


# Testing
- Checking whether we are getting the expected resuly or not.
- It can be anywhere, frontend / backend / database / api / real world testing.
- If the tests pass, then then things are good. Otherwise, there is a bug that we need to take care of.

## Software Testing
- We test the software.
- We check for feasibility.
- This is commonly done BEFORE releasing the software to the users.
- Also, before releasing a version upgrade.

**A software is a collection of various programs, modules and functions.**


## Strategies
- There are many ways/approached that we can take for software testing.

### Unit Testing
- This tests a single function / module / component of the software.
- This checks the basic single most part of a software.
- This will check one and only one functionality.
- It is okay to have multiple unit tests.

### Integration Testing
- This is to check the system design.
- To check whether the units will work together or not.
- This is check whether the different parts of code will work together or not.

### Monkey Testing
- We test like monkeys.
- We randomly click anywhere.
- We randomly send any input. Press any keys on the kwyboard.
- We randomly call any API.
- The purpose of this testing is to check that our software will not crash.
- This can be automated or mostly done manually.


### Manual Testing || Automated Testing
- Manual Testing is when a human will check for things and prepare a summary whether it is passed or not.
- Automated testing is when the same thing is done by a machine / piece of code.
- Automated testing is good because it is very fast.
- Manual testing is good because humans can go a little bit out of the way to test carefully. What if the testcase itself had a bug.

### Validation Testing
- In this type of testing, we check whether the business requirement is met or not.
- This can be for any sort of business requirement. Examples:
  - Functional
  - Behavioral
  - Performance
  - Looks and Design
- Check whether all the business requirements are satisfied or not.

### Load Testing / Stress Testing / Performance Testing
- We give very high load / stress to the software and test it's performance.
- This is to test for real world usage.
- When many people try to conenct at the same time, what will happen.
- The website / web server should be able to handle those many concurrent users.


### E2E Testing - End to End Testing
- This is complete testing, we test in a single testcse multiple steps from the very start to the very end.
- Example: (Social Media Website):
  - User Registration
  - Usesr posting a picture
  - User commenting on own picture.
  - User liking the own picture.
  - Change password.
  - Delete account.
  - User logout.


- It is possible for a single testcase to fall under multiple testing strategies.


### Further Reading:
- REST vs SOAP

# Task:
- Complete the multiply and divide enpoints for the middleware backend we did in the class.


# Working on Project (Practice) - Simple Social Media
- Tuesday - Oct/27 (Usual Class timings - 4hr)
- Friday - Oct/30 (Usual Class timings - 2hr)
