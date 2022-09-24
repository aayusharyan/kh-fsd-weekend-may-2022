const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3007;
const { MongoClient, ServerApiVersion } = require('mongodb');


app.listen(port, err => {
  if(err) {
    console.log(err);
  } else {
    console.log(`Server started on ${port}`);
  }
});

app.use(bodyParser.json());



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


app.post("/insert", (req, res) => {
  const data = req.body;
  const collection = client.db("sep_24").collection("filter_data");
  collection.insertOne(data);
  res.json({
    messsage: "Successful",
    data: data
  });
});

app.get("/more_than_1000", (_, res) => {
  const collection = client.db("sep_24").collection("filter_data");
  const result = collection.find({
    number: {
      $gte: 1000
    }
  }).toArray();

  result.then(data => {
    res.json({
      message: "Successful",
      data: data
    });
  })
});

//Between 200 and 1000. $lte:1000 AND $gte:200
app.get("/range_200_1000", (_, res) => {
  const collection = client.db("sep_24").collection("filter_data");
  const result = collection.find({
    number: {
      $gte: 200,
      $lte: 1000
    }
  }).toArray();
  // const result = collection.find({
  //   $and: [
  //     {
  //       number: {$gte: 200}
  //     },
  //     {
  //       number: {$lte: 1000}
  //     }
  //   ]
  // }).toArray();
  result.then(data => {
    res.json({
      message: "Successful",
      data: data
    })
  })
});

app.get("/total", (_, res) => {
  const collection = client.db("sep_24").collection("filter_data");
  const result = collection.aggregate([
    {
      $group: {
        _id: "total",
        totalSum: {
          $sum: "$number"
        },
        avgValue: {
          $avg: "$number"
        },
        numberOfRecords: {
          $count: {}
        }
      }
    }
  ]).toArray();

  result.then(data => {
    res.json({
      message: "Successful",
      data: data
    })
  })
});