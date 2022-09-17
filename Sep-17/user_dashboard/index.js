const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3007;



app.listen(port, _ => {
  console.log(`Listening on Port - ${port}`);
});

// This will only work in 4.16 or below.
// app.use(express.bodyParser());
// app.use(bodyParser.text());
app.use(bodyParser.json());


app.get('/data', (req, res) => {
  console.log(req.body);
  res.send("Successful");
  // res.json({

  // })
});

//TasK: Take this data we are getting from request and write it in a file called sample.txt
//fs.writeFile();

app.get('/json', (req, res) => {
  console.log(req.body);
  console.log(req.body.username);
  if(req.body.username == undefined) {
    res.send("Invalid data");
    return;
  }

  res.json({
    msg: "Success"
  });
});


// Task: Create a new endpoint called `/register`. This will accept a json, username and password.
// Here, first check if username and password exists. If it does not exist, then send invalid data.
// Once the validation is completed, create a file called `${username}.txt` and put the password inside that file.

// Task: Create another endpoint, called '/login'. This will accept a json, username & password.
// Do the validation here as well.
// Check the data this time, the file should exist and the content should be same as password. If it is same, send "Login successful".
// Otherwise, send "Invalid Credentials".
// fs.readFile(${username}, "UTF-8", (err, data) => {}). (data === password)