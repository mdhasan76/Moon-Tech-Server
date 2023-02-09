const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

//moon tech id = Moon_Tech
//moon tech pass = NSsETJWQgm2ULqOk


app.get('/', (req, res ) =>{
    res.send("Moon tech server is running");
});



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Moon_Tech:NSsETJWQgm2ULqOk@cluster0.dof2kcq.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


app.listen(port, () =>{
    console.log("Moontech server " + port +" port a choltase")
});