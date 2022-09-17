# Sep-11, 2022

## Express
- This is a package which gives some functionalities to our node application.
- With those functionalities, the node application can act as a SERVER.
- The task of a server:
  - Accept the request.
  - Process the Data.
  - Send back the response.

- Example: Live Server VS Code Extension
  - It gives a localhost:5500 URL.
  - When we open that URL, it will take the request.
  - Load the HTML.
  - Send it to browser.

- This is a third party package that we need to install in order to create a server.
- Typically the backend port is either 80, 8080 or 443 but for development, we can use anything.

*Helpful Tip - Instead of using npm init and pressing Enter bunch of times, you can use npm init -y to bypass the questions.*
*Note: Whatever package we install using npm i is added to the dependencies collection whereas whatever package we install using npm i with --save-dev is added to the dev dependencies collection.*

- Alternative is http package.

- localhost:3007 - Going to "/"
- All routes start with a /.


## Postman
- This tool is used for better API development.
- This is for backend development.
- There are many alternatives to this, but this is the most popular one.
- This is free, we don't need to create an account.

### Routes
- A backend will have multiple routes for multiple things.
- Also referred to as Endpoints.
- Each endpoint will have it's own purpose.
- A backend application can theoretically have infinite endpoints which can be for various purposes.
- No two endpoints can be same for a server.
- The default route is /