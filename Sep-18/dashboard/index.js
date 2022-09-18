const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3007;
const cors = require('cors');



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://admin:admin1234@cluster0.pnwmcqe.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  // const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  // client.close();
  if(err) {
    console.log(err);
  } else {
    console.log("DB Connection successful");
  }
});


app.use(bodyParser.json());

app.use(cors({
  origin: "http://localhost:3000"
}))

app.listen(port, err => {
  if(err) {
    console.log(err);
  } else {
    console.log(`Server started successfully on ${port}`);
  }
});

app.post('/register', (req, res) => {
  if(req.body.username === undefined 
  || req.body.username === "" 
  || req.body.password === undefined
  || req.body.password === "" ) {
    res.status(400).json({
      message: "Invalid Data"
    });
    return;
  }

  const collection = client.db("sep_18").collection("users");
  const result = collection.insertOne({
    username: req.body.username,
    password: req.body.password
  });

  result.then(_ => {
    res.json({
      message: "Registration Successful"
    });
  }).catch(_ => {
    res.status(500).json({
      message: "Registration Not Successful"
    });
  });
});

app.post('/login', (req, res) => {
  if(req.body.username === undefined 
    || req.body.username === "" 
    || req.body.password === undefined
    || req.body.password === "" ) {
      res.status(400).json({
        message: "Invalid Data"
      });
      return;
  }

  const collection = client.db("sep_18").collection("users");
  const result = collection.findOne({
    username: req.body.username,
    password: req.body.password
  });

  result.then(user => {
    if(user === undefined || user === null) {
      res.status(403).json({
        message: "Invalid Credentials"
      });

    } else {
      res.json({
        message: "Login Successful"
      })
    }
  }).catch(_ => {
    res.status(400).json({
      message: "Not able to Login"
    });
  })
});

app.get("/list", (_, res) => {
  const collection = client.db("sep_18").collection("users");
  const result = collection.find({}).toArray();
  // const cursor = collection.find({});
  // const result = cursor.toArray();
  result.then(data => {
    const users = data.map(e => {
      return e.username
    });

    res.json({
      message: "Successful",
      users: users
    });
  
  
  }).catch(_ => {
    res.status(500).json({
      message: "Not able to get the user list"
    });
  })
})