const express = require('express');
const server = express();
const port = 3007;

server.listen(port, _ => {
  console.log("Server has started");
});

server.get("/", (req, res) => {
  res.send("Hello World, API call successful");
});

server.get("/json", (req, res) => {
  res.json({
    staus: "Successful",
    data: {
      fName: "Aayush",
      lName: "Sinha"
    }
  });
});

//Task - Create an endpoint with the path of `/about` which will return a json containing your name, email and phone number

//Task - Create an endpoint which takes a number and return 2 * number.
server.get("/twice", (req, res) => {
  let num = req.query.num;
  num = num * 2;
  res.json({
    result: num
  });
});

//Task: Create an endpoint called `/add` which takes 2 numbers from query and returns the summation of them.