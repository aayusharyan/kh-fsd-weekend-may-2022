const express = require("express");
const cors = require('cors');
const app = express();
const port = 3007;


app.listen(port, err => {
  if(err) {
    console.log(err)
  } else {
    console.log(`Server running at ${port}`);
  }
});

app.use(cors());


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://admin:admin1234@cluster0.pnwmcqe.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  if(err) {
    console.log(err);
  } else {
    console.log("DB Connection successful");
  }
});

app.post("/vote", (req, res) => {
  const candidateId = req.query.candidateId;
  if(candidateId == undefined || candidateId == "") {
    res.status(400).send("Invalid Data");
  }

  const collection = client.db("sep_24").collection("election");
  collection.insertOne({
    candidateId: candidateId,
    voteCount: 1
  });

  res.send("Voted Successfully");
});

app.get("/stats", (_, res) => {
  const collection = client.db("sep_24").collection("election");
  const result = collection.aggregate([
    {
      $group: {
        _id: "$candidateId",
        votes: {
          $sum: "$voteCount"
        }
      }
    },  {
      $sort: {
        _id: 1
      }
    }
  ]).toArray();

  result.then(data => {
    res.json({
      message: "Successful",
      stats: data
    });
  })
});


app.get("/result", (_, res) => {
  const collection = client.db("sep_24").collection("election");
  const result = collection.aggregate([
    {
      $group: {
        _id: "$candidateId",
        votes: {
          $sum: "$voteCount"
        }
      }
    },
    {
      $sort: {
        votes: -1
      }
    }, {
      $limit: 1
    }
  ]).toArray();
  
  result.then(data => {
    res.json({
      message: "Successful",
      data: data
    });
  })
});

app.delete("/reset", (_, res) => {
  const collection = client.db("sep_24").collection("election");
  const result = collection.deleteMany({});
  result.then(_ => {
    res.send("Deleted Successfully");
  });
})