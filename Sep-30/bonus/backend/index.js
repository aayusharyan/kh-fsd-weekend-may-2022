const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const parseBearerToken = require("parse-bearer-token").default;

const app = express();
const port = 3007;

app.listen(port, err => {
  if(err) {
    console.log(err);
  } else {
    console.log(`Server started at ${port}`);
  }
});

const uri = "mongodb+srv://admin:admin1234@cluster0.pnwmcqe.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  if(err) {
    console.log(err);
  } else {
    console.log("DB Connection Successful");
  }
});

app.use(bodyParser.json());
app.use(cors());

app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;
  if(username === undefined || username === "" 
  || password === undefined || password === ""
  || name === undefined || name === "") {
    res.status(400).json({
      succcess: false,
      message: "Invalid Data"
    });
    return;
  }

  const collection = client.db("bonus").collection("users");
  collection.findOne({username: username}).then(data => {
    if(data !== undefined && data !== null) {
      res.status(400).json({
        succcess: false,
        message: "User already exists"
      });
      return;
    }


    collection.insertOne({
      username: username,
      password: password,
      name: name
    }).then(data => {
      res.json({
        succcess: true,
        message: "Registration Successful"
      });
    })
  })

});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if(username === undefined || username === "" || password === undefined || password === "") {
    res.status(400).json({
      succcess: false,
      message: "Invalid Data"
    });
    return;
  }

  const collection = client.db("bonus").collection("users");
  collection.findOne({
    username: username,
    password: password
  }).then(data => {
    if(data !== undefined && data !== null) {
      res.json({
        succcess: true,
        message: "Login Successful",
        data: data
      })
      return;
    } else {
      res.status(401).json({
        succcess: false,
        message: "Invalid Credentials"
      })
      return;
    }
  })
});

const requireLogin = (req, res, next) => {
  const token = parseBearerToken(req);

  if(token === undefined || token === "") {
    res.status(401).json({
      succcess: false,
      message: "Missing Authentication Token"
    });
    return;
  }

  const collection = client.db("bonus").collection("users");
  collection.findOne({
    _id: ObjectId(token)
  }).then(data => {
    if(data !== null && data !== undefined) {
      req.user = data;
      next();
    } else {
      res.status(401).json({
        succcess: false,
        message: "Invalid Token"
      });
      return;
    }
  })
}


app.get("/feed", requireLogin, (req, res) => {
  const collection = client.db("bonus").collection("posts");
  collection.find().toArray().then(data => {
    res.json({
      succcess: true,
      data: data
    });
  });
});

app.post("/post", requireLogin, (req, res) => {
  const post = req.body.post;
  if(post === undefined || post === "") {
    res.status(400).json({
      succcess: false,
      message: "Invalid Request"
    });
    return;
  }

  const collection = client.db("bonus").collection("posts");
  collection.insertOne({
    text: post,
    likes: {},
    author: req.user._id,
    author_name: req.user.name
  }).then(data => {
    res.json({
      succcess: true,
      message: "Posted Successfully",
      data: data
    });
  })

});

app.post("/like", requireLogin, (req, res) => {
  const postId = req.query.post_id;
  if(postId === undefined || postId === "") {
    res.status(400).json({
      succcess: false,
      message: "Post ID is required"
    });
    return;
  }
  const dislike = req.query.dislike;
  const collection = client.db("bonus").collection("posts");
  const key = `likes.${req.user._id}`
  if(dislike === "1") {
    collection.findOneAndUpdate({
      _id: ObjectId(postId)
    }, {
      $unset: {
        [key]: ""
      }
    }).then(data => {
      res.json({
        succcess: true,
        message: "Disliked Successfully"
      })
    })
  } else {
    collection.findOneAndUpdate({
      _id: ObjectId(postId)
    }, {
      $set: {
        [key]: true 
      }
    }).then(data => {
      res.json({
        succcess: true,
        message: "Liked Successfully"
      });
    });
  }
});


//Maybe
app.delete("/post");

app.delete("/user");