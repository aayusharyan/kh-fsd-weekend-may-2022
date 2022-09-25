const express = require("express");
const app = express();
const port = 3007;

app.listen(port, err => {
  if(err) {
    console.log(err);
  } else {
    console.log(`Server started at ${port}`);
  }
});

const middleware = (req, res, next) => {
  const num1 = req.query.num1;
  const num2 = req.query.num2;
  if(num1 == undefined || num1 == "" || num2 == undefined || num2 == "") {
    res.status(400).send("Invalid Data");
    return;
  }
  req.num1 = Number(num1);
  req.num2 = Number(num2);
  next();
}

app.use(middleware);


app.get("/add", (req, res) => {
  console.log("Mehod is called");
  const sum = req.num1 + req.num2;
  res.send("" + sum);
});


app.get("/sub", (req, res) => {
  const diff = req.num1 - req.num2;
  res.send("" + diff);
});

// app.get("/mul");
// app.get("/div")