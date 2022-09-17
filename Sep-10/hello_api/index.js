const express = require('express');
const app = express();

app.listen(3006, _ => {
  console.log("Server has started");
});


app.get("/", (req, res) => {
  res.send("Hello API");
})

app.get("/abcd", (req, res) => {
  res.send("This is ABCD");
});