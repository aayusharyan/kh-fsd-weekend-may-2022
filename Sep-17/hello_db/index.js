const express = require('express');
const app = express();
const port = 3007


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://admin:admin1234@cluster0.pnwmcqe.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log(err, "Connected to the Database");
  // perform actions on the collection object
  // client.close();
});


app.listen(port, _ => {
  console.log(`Server started at ${port}`);
})

app.get('/insert', (_, res) => {

  const collection = client.db('sep_17').collection('numbers');

  collection.insertOne({
    number: Math.floor(Math.random() * 10000000000)
  });

  res.send("Inserted 1 data");
});